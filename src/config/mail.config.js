const nodemailer = require('nodemailer');

const mail={
    user:"223222@ids.upchiapas.edu.mx",
    pass:"ELTopn4590"
}




let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    tls: {
        rejectUnauthorized: false
    },
    secure: true, // true for 465, false for other ports
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    },
  });

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `UPCONECTIOM <${ mail.user }>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: "Confirmacion de usuario", // plain text body
            html, // html body
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (name, token) => {
      return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${ name }</h2>
            <p>Para confirmar su mampes confirme</p>
            <a
                href="http://localhost:4000/api/user/confirm/${token}"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate
  }