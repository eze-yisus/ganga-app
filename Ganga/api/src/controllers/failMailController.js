// nodemailer
const nodemailer = require("nodemailer"); // npm i nodemailer
const { templateFailmail } = require("../utils/Templates/templateHTML");

const createTrans = () => {
  let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'gangaecommerce@gmail.com',
      pass: 'Gangamail0987',
    },
  });
  return transport;
}

async function failMail(req, res) {

  let mail
  if (req.user) mail = req.user.mail

  try {
    const transporter = createTrans();
    const info = await transporter.sendMail({
      from: '"GanGa" <gangaecommerce@gmail.com>',
      to: mail,
      subject: "GanGa",
//      html: "<h3> fallo en el pago...<h3>"
      html: templateFailmail(
        mail
      ),
    });
  } catch (error) {
    console.log(error.response.body);
  }
  res.send("email enviado");
}

module.exports = {
  failMail
};