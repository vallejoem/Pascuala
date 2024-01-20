const db = require("../models");
const { Op } = require("sequelize");
const nodemailer = require('nodemailer');

const sendConfirmationEmail = (client) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gabyvdiaz45@gmail.com',
            pass: 'bzmx oviy ywgl tmsw',// Modificar contraseña en 2 pasos en cuenta de google
        },
    });

    const mailOptions = {
        from: 'gabyvdiaz45@gmail.com',
        to: client.email,
        subject: '¡Gracias por suscribirte!',
        html: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #F0ABFC;
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            background-color: #C026D3;
                            color: #fff;
                            padding: 10px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .content {
                            font-size: 16px; 
                            padding: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>¡Gracias por suscribirte!</h1>
                        </div>
                        <div class="content">
                            <p>Hola ${client.name} ${client.last_name},</p>
                            <p>Gracias por suscribirte!!! Te mantendremos informado con nuestras novedades. ¡Bienvenido!</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
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