const nodemailer = require('nodemailer');

const sendEmailController = async (req, res) => {
    const { name, email, comments } = req.body;

    try {
        // Configuración del transporte de nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'emiliano.vallejo@gmail.com',
                pass: 'bzmx oviy ywgl tmsw',
            },
        });

        // Configuración del contenido del correo
        const mailOptions = {
            from: email,
            to: 'emiliano.vallejo@gmail.com',
            subject: 'Nuevo formulario de contacto',
            text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nComentarios: ${comments}`,
        };

        // Envia el correo
        const info = await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Correo enviado con éxito', info });
    } catch (error) {
        console.error('Error al enviar el correo', error);
        res.status(500).json({ error: true, message: 'Error interno del servidor' });
    }
};

module.exports = sendEmailController;
