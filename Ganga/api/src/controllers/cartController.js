const {
  Cart,
  Cart_Product,
  User,
  Product,
  Category,
} = require("../db.js");

const postCart = async (req, res) => {
  const { userId } = req.body;

  try {
    const userById = await User.findByPk(userId);
    console.log('soy el userById: ', userById)
    // console.log('soy el id del userById: ', userById.id)

    const newCart = await Cart.create()
    console.log('soy el id del newCart: ', newCart.id)

    userById ? res.send(await userById.setCart(newCart.id)) : res.send('No se ha podido relacionar el carrito con el usuario')
  }
  catch (error) {
    console.log(error)
  }
}

const allCart = async (req, res) => {
  const { id } = req.query; // aca seria el id del cartProduc

  try {
    const allCarts = await Cart.findAll({
      include: [{
        model: User,
        attributes: [
          'name',
          'surname',
          'mail',
          'address',
          'image',
          'seller',
          'birthdate']
      },]
    })
    if (id) {
      const cartById = await Cart.findByPk(id)

      cartById ? res.send(cartById) : res.send(`No existe un carrito con el id: ${id}`)
    }
    else {
      res.send(allCarts)
    }
  }
  catch (error) {
    console.log(error)
  }
}

const deleteCart = async (req, res) => {
  const { userId } = req.query;

  try {
    const cartByUserId = await Cart.findOne({ where: { userId: userId } })
    console.log('soy el cartByUserId: ', cartByUserId)

    cartByUserId ? res.send(await cartByUserId.destroy()) : res.send('No se ha podido eliminar el carrito')
  }
  catch (error) {
    console.log(error)
  }
}
module.exports = {
  postCart,
  allCart,
  deleteCart
}