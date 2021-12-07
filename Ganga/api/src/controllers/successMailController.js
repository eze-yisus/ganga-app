// nodemailer
const nodemailer = require("nodemailer"); // npm i nodemailer
const { templateSuccessEmail } = require("../utils/Templates/templateHTML");

const createTrans = () => {
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gangaecommerce@gmail.com",
      pass: "Gangamail0987",
    },
  });
  return transport;
};

async function successMail(req, res) {

  
  let mail;
  if (req.user) {
    mail = req.user.mail;
  }

  let address = req.user.address;

  try {
    const transporter = createTrans();
    const info = await transporter.sendMail({
      from: '"GanGa" <gangaecommerce@gmail.com>',
      to: mail,
      subject: "GanGa",
      //html: "<h3> pago exitoso...<h3>",
        html: templateSuccessEmail(
          address,
          mail
        ),
    });
  } catch (error) {
    console.log(error.response);
  }
 res.send("email enviado");
}

module.exports = {
  successMail,
};
