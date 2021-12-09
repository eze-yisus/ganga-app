const { User, Review, Product, Order } = require("../db.js");
const { Op } = require('sequelize');

async function postUser(req, res) {
  /*
      Postea User. Recibe parametros por body, se fija si hay usuario con dicho mail creado
      y se crea en caso de no haber
    */

  const { name, surname, mail, address, image, seller, birthdate, password, cellphone, country, province, cp } = req.body;
  // Formato para enviar cumpleaños: 1991-11-28     // modificar en postman surname y agregar cellphone, country, province, cp

  const check = await User.findOne({
    where: {
      mail: mail,
    },
  });

  if (check) res.json("Usuario ya existente en la base de datos");
  else {
    const user = {
      name,
      surname,
      mail,
      address,
      image,
      seller,
      birthdate,
      password,
      cellphone,
      country,
      province,
      cp
    };

    try {
      const newUser = await User.create(user);
      if (newUser) res.json({ type: "success", data: user });
      else {
        res.json({ type: "failure", data: "Error en creación de usuario" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

async function putUser(req, res) {
  const { id, name, surname, mail, address, image, seller, birthdate, password, cellphone, country, province, cp } = req.body;

  try {
    const infoUpdateUser = {
      name, surname, mail, address, image, seller, birthdate, password, cellphone,
      country, province, cp
    };

    const userById = await User.findByPk(id);

    userById
      ? res.send(await userById.update(infoUpdateUser))
      : res.send("No se ha podido actualizar el usuario");
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  const { id } = req.query;

  try {
    const deleteUser = await User.findByPk(id);

    deleteUser
      ? res.send(await deleteUser.destroy())
      : res.json("No se ha podido eliminar el usuario");
  } catch (error) {
    console.log(error);
  }
}

async function allUsers(req, res) {
  const { name, id } = req.query;
  const allDbUsers = await User.findAll();

  if (name) {
    try {
      const userByName = await User.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      userByName.length !== 0
        ? res.json(userByName)
        : res.send("No se ha encontrado un usuario con ese nombre");
    } catch (error) {
      console.log(error);
    }
  } else if (id) {
    try {
      const userId = await User.findByPk(id);
      userId
        ? res.json(userId)
        : res.send("No se ha encontrado un usuario con ese ID");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(allDbUsers);
  }
}

const userInfo = async (req, res) => {
  const { id } = req.query;

  try {
    const dbUser = await User.findByPk(id);
    const userReview = await Review.findAll({  // seria algo parecido para el review del usuario
      where: { userId: id }
    });
    const products = await Product.findAll({ where: { userId: id}});
    const allOrder = await Order.findAll();
    // const idOrder = allOrder.map((order) => order.id)
    // console.log('soy el idOrder: ', idOrder)
    const orderByUser = allOrder.filter((orders) => orders.userInfo === id)

    dbUser ? res.send({
      user: dbUser,
      reviews: userReview,
      products: products,
      orders: orderByUser
    }) : res.send(`No se ha encontrado el producto con el id: ${id}`)
  }
  catch (error) {
    console.log(error)
  }
}

async function addCart(req, res) {

  let Cart;
  try {
    const { id, item, que, cant } = req.body;

    let result = await User.findOne({ where: { id } });

    if (result) {
      Cart = result.Cart;
    }
    if (Cart.length > 0) {
      const result = Cart.find((el) => el.id === item.id);
      if (!result) {
        const producto = await Product.findOne({ where: { id: item.id } });
        Cart.push({ ...producto.dataValues, quantity: Number(cant) }); // quantiti debe ir en producto para las validaciones?
      } else {
        Cart = Cart.map((el) => {
          if (el.id === item.id) {
            if (que === "+") {
              return {
                ...el,
                quantity: Number(el.quantity) + Number(cant), // aca podriamos refactorizar solamente aumentando en 1
              };
            } else {
              return {
                ...el,
                quantity: Number(el.quantity) - Number(cant), // aca podriamos refactorizar solamente restando en 1
              };
            }
          } else {
            return el;
          }
        });
      }
      Cart = Cart.filter((el) => el.quantity > 0);

      await User.update({ Cart }, { where: { id } });
      const user = await User.findOne({ where: { id } });
      res.json([...user.Cart]);
    } else {
      const producto = await Product.findOne({ where: { id: item.id } });
      Cart.push({ ...producto.dataValues, quantity: Number(cant) });

      await User.update({ Cart }, { where: { id } });
      const user = await User.findOne({ where: { id } });
      res.json([...user.Cart]);
    }
  } catch (err) {
    console.error(err);
  }
}

const clearCart = async (req, res) => {
  const { id } = req.query;

  try{
    const userWithCart = await User.findByPk(id);

    userWithCart ? res.send(await userWithCart.update({ Cart: [] })) : res.json('No se ha podido limpiar el carrito')
  }
  catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (req, res) => {
  const { id, item } = req.body;

  let Cart;
  try{

    const user = await User.findByPk(id)

    // const product = await Product.findOne({
    //   where:{id: item}
    // })
  
    
    user ? (Cart = user.Cart) : console.log('No existe user con ese id')
    
    Cart ? (Cart = Cart.filter((product) => product.id !== item)) : console.log('No existe ese carrito')

    console.log('soy el carrito del usuario: ', Cart)
   
    res.send(await user.update({ Cart: Cart }))
  }
  catch(error) {
    console.log(error)
  }
}

module.exports = {
  postUser,
  putUser,
  deleteUser,
  allUsers,
  userInfo,
  addCart,
  clearCart,
  deleteProduct
};
