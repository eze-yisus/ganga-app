const { Order, User } = require("../db.js");

const postOrder = async (req, res) => {
  //Atributos del body para pasar en postman
  const { idUser, state, amount, info, cellphone, mail, price, address } = req.body; // agregar a postman amount, info, cellphone, mail, price, address

  try {
    const order = {state, amount, info, cellphone, mail, price, address}
    const newOrder = await Order.create(order);

    newOrder ? res.send(await newOrder.setUser(idUser)) : console.log('No se ha podido relacionar la orden con el usuario')

    newOrder ? res.json(newOrder) : res.json("No se ha podido hacer la orden.");
  } catch (error) {
    const search = error.message;
    console.log(search);
    //en caso de que rompa, busca en stackoverflow
    windows.open(`https://stackoverflow.com/search?q=${search}`, "_blank");
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
    const {id, state, amount, info, cellphone, mail, price, address} = req.body; // agregar a postman amount, info, cellphone, mail, price, address

    try {
        const infoUpdateOrder = {state, amount, info, cellphone, mail, price, address}
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

module.exports = {
    postOrder,
    allOrders,
    putOrder,
    deleteOrder
}