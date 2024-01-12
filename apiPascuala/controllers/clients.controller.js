const db = require("../models");
const { Op } = require("sequelize");
const nodemailer = require('nodemailer');

const sendConfirmationEmail = (client) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', // Servidor SMTP de Outlook
        port: 587, // Puerto para conexiones no cifradas
        secure: false, // true para usar el puerto seguro, false para otros puertos
        auth: {
            user: 'emilianovallejo@hotmail.com', // Tu dirección de correo electrónico de Hotmail/Outlook
            pass: 'EMILIANO1979', // Tu contraseña de aplicación generada
        },
        tls: {
            ciphers: 'SSLv3', // Opcional, puede ser necesario para algunas configuraciones de seguridad
        }
    });

    const mailOptions = {
        from: 'emilianovallejo@hotmail.com',
        to: client.email,
        subject: '¡Gracias por suscribirte!',
        text: `Hola ${client.name} ${client.last_name},\n\nGracias por suscribirte a nuestro servicio. ¡Bienvenido!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error en el envío del correo electrónico:', error);
        } else {
            console.log('Correo electrónico enviado:', info.response);
        }
    });
};

const getAllClients = async (req, resp) => {
    try {
        console.log("Entrando en getAllClients");
        let clients = await db.client.findAll();

        resp.status(200).json({ error: false, message: 'Listado Clientes', data: clients });
    }
    catch (e) {
        console.error("Error en getAllClients:", e);
        resp.status(400).json({ error: true, message: e });
    }

}

const CreateClient = async (req, resp) => {

    try {
        let client = await db.client.create(req.body);
        // Enviar correo electrónico
        sendConfirmationEmail(client);
        resp.status(200).json({ error: false, message: 'Cliente Creado exitosamente', data: client });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}

const deleteClient = async (req, resp) => {

    try {
        let id = req.params.id;
        await db.client.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                await db.client.destroy({ where: { id: id } });
                resp.status(200).json({ error: false, message: 'Cliente eliminado exitosamente', data: null });
            }
            else {
                resp.status(404).json({ error: true, message: 'ID clientes no se encuentra', data: null });
            }

        })


    }
    catch (e) {
        console.error("Error en deleteClient:", e);
        resp.status(400).json({ error: true, message: e });
    }

}

const updateClient = async (req, resp) => {
    try {
        let id = req.params.id;
        console.log(id);
        let client = await db.client.findByPk(id);

        console.log("Consulta exitosa. Resultados:", client);
        if (client) {
            await db.client.update(req.body, { where: { id: id } });
            resp.status(200).json({ error: false, message: 'Cliente Modificado exitosamente', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'ID cliente no se encuentra', data: null });
        }

    }
    catch (e) {
        console.error("Error al actualizar cliente", e);
        resp.status(400).json({ error: true, message: e });
    }

    // Función para enviar correo electrónico de confirmación
    

}

module.exports = { getAllClients, CreateClient, deleteClient, updateClient }