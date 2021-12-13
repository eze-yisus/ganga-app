const { User } = require("../db.js");

async function loginGoogle (req,res) {}

async function callback(req, res) {
  // console.log(req.user);
  // res.redirect("http://localhost:3000/login/success")
  res.redirect(`https://ganga-app.vercel.app/login/success`)
}


async function logoutG(req,res) {
  req.logOut();
  req.session.destroy(function (err) {
    res.send("Succesfull Out");
  });
}

module.exports = {
  loginGoogle,
  callback,
  logoutG
};


