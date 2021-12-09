const { Order, User } = require("../db.js");

const postOrder = async (req, res) => {
  //Atributos del body para pasar en postman
  const { info, userInfo,
    productInfo, total } = req.body; // agregar a postman amount, info, cellphone, mail, price, address
    // agregar total al postman

  try {
    const order = {info, userInfo,
      productInfo, total}
    const newOrder = await Order.create(order);

    const userInfoDb = await User.findByPk(userInfo);


    newOrder ? await newOrder.setUser(userInfo) : console.log('No se ha podido relacionar la orden con el usuario')

    newOrder ? res.json({ userInfo: userInfoDb,
    productInfo: productInfo }) : res.json("No se ha podido hacer la orden.");
  } catch (error) {
    console.log(error);
    //en caso de que rompa, busca en stackoverflow
  }
};

const allOrders = async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      const orderById = await Order.findByPk(id);
      orderById
        ? res.json(orderById)
        : res.json(`No se ha encontrado la orden con id: ${id}`);
    } else {
      const allOrder = await Order.findAll();
      allOrder
        ? res.json(allOrder)
        : res.json("No se han encontrado ordenes");
    }
  } catch (error) {
    const search = error.message;
    console.log(search);
    //en caso de que rompa, busca en stackoverflow
    windows.open(`https://stackoverflow.com/search?q=${search}`, "_blank");  }
};

const putOrder = async (req, res) => {
    const {id, info, userInfo,
      productInfo, total} = req.body; // agregar a postman amount, info, cellphone, mail, price, address

    try {
        const infoUpdateOrder = {info, userInfo,
          productInfo, total}
        const orderById = await Order.findByPk(id)
        orderById ? res.send(await orderById.update(infoUpdateOrder)) : res.json('No se ha podido modificar su orden')

    } catch (error) {
        const search = error.message;
        console.log(search);
        //en caso de que rompa, busca en stackoverflow
        windows.open(`https://stackoverflow.com/search?q=${search}`, "_blank");
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.query;

    try{

        const orderById = await Order.findByPk(id);

        orderById ? res.send(await orderById.destroy()) : res.json('No se ha podido eliminar la orden')

    } catch (error) {
        const search = error.message;
        console.log(search);
        //en caso de que rompa, busca en stackoverflow
        windows.open(`https://stackoverflow.com/search?q=${search}`, "_blank");
    }
}

const getOrderWithUserId = async (req, res) => {
  const { id } = req.query;

  try{
    const allOrder = await Order.findAll();
    const orderByUser = allOrder.filter((order) => order.userInfo === id);


    orderByUser? res.send(orderByUser) : res.send(`No existen ordenes para el usuario con el id: ${id}`)
  }
  catch(error) {
    console.log(error)
  }
} 

module.exports = {
    postOrder,
    allOrders,
    putOrder,
    deleteOrder,
    getOrderWithUserId
}