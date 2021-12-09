async function sessionActive(req, res) {
  if (req.user)
    res.json({
      login: true,
      id: req.user.id,
      admin: req.user.admin,
      seller: req.user.seller,
      name: req.user.name,
      surname: req.user.surname,
      mail: req.user.mail,
      address: req.user.address,
      image: req.user.image,
      Cart: req.user.Cart
    });
    else res.json({ login: false });
}


module.exports = {
  sessionActive
};


