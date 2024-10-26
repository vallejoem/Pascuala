// routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { nombre, email, comentarios } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'emiliano.vallejo@gmail.com',
            pass: 'pwzu pnjk tsob vkym'
        }
    });

    const mailOptions = {
        from: email,
        to: 'emiliano.vallejo@gmail.com',
        subject: `Nueva consulta de ${nombre}`,
        text: `Nombre: ${nombre}\nCorreo Electrónico: ${email}\nComentarios: ${comentarios}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al enviar el correo' });
    }
});

module.exports = router;
