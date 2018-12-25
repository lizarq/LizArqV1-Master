const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {})
app.listen(3000, () => {
console.log('Servidor corriendo')
});

const msg = {
    to: 'yaninaglaser@gmail.com',
    from: 'info@janinarquitectura.com.ar',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  