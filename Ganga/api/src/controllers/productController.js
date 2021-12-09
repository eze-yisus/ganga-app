const { Product, User, Category, Review } = require("../db.js");
const { Op } = require("sequelize");

async function postProduct(req, res) {
  /*
      Postea User. Recibe parametros por body, se fija si hay usuario con dicho mail creado
      y se crea en caso de no haber
    */

  const {
    name,
    brand,
    description,
    price,
    stock,
    image,
    owner,
    idUser,
    idCategory,
    idReview,
  } = req.body;
  // Formato para enviar cumpleaños: 1991-11-28       // modificar en postman brand por mark y agregar owner

  const check = await Product.findOne({
    where: {
      name: name,
    },
  });

  if (check) res.json("Producto ya existente en la base de datos");
  else {
    const product = {
      name,
      brand,
      description,
      price,
      stock,
      image,
      owner,
    };

    try {
      const newProduct = await Product.create(product);

      newProduct
        ? await newProduct.setUser(idUser)
        : console.log("No se ha podido relacionar el producto con el usuario");

      newProduct ? await newProduct.update({ owner: idUser }) : console.log('No se ha podido actualizar el owner');

      newProduct
        ? await newProduct.setCategory(idCategory)
        : console.log(
            "No se ha podido relacionar el producto con la categoria"
          );

      // console.log('soy el idReview: ', idReview)
      // newProduct ? await newProduct.setReview(idReview) : console.log('No se ha podido relacionar el producto con la devolucion')

      // if (newProduct) res.json({ type: "success", data: product });
      // else {
      //   res.json({ type: "failure", data: "Error en creación de producto" });
      // }
      newProduct
        ? res.send({ type: "success", data: newProduct })
        : res.json({ type: "failure", data: "Error en creación de producto" });
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

async function putProduct(req, res) {
  const {
    id,
    name,
    brand,
    description,
    price,
    stock,
    image,
    owner,
    idCategory,
  } = req.body; // modificar en postman brand por mark y agregar owner

  try {
    const infoUpdateProduct = {
      name,
      brand,
      description,
      price,
      stock,
      image,
      owner,
    };

    const productById = await Product.findByPk(id);

    productById
      ? res.send(await productById.update(infoUpdateProduct))
      : res.send("No se ha podido actualizar el producto");
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req, res) {
  const { id } = req.query;

  try {
    const deleteProduct = await Product.findByPk(id);

    deleteProduct
      ? res.send(await deleteProduct.destroy())
      : res.json("No se ha podido eliminar el producto");
  } catch (error) {
    console.log(error);
  }
}

async function allProducts(req, res) {
  const { name, id } = req.query;
  const allDbProducts = await Product.findAll();
  if (name) {
    try {
      const productByName = await Product.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      productByName.length !== 0
        ? res.json(productByName)
        : res.send("No se ha encontrado un producto con ese nombre");
    } catch (error) {
      console.log(error);
    }
  } else if (id) {
    try {
      const productId = await Product.findByPk(id);
      productId
        ? res.json(productId)
        : res.send("No se ha encontrado un producto con este ID");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send(allDbProducts);
  }
}
const productInfo = async (req, res) => {
  const { id } = req.query;

  try {
    const dbProduct = await Product.findByPk(id);
    const productReview = await Review.findAll({
      // seria algo parecido para el review del usuario
      where: { productId: id },
    });
    const owner = dbProduct.owner;
    const seller = await User.findOne({where: { id: owner }})

    dbProduct
      ? res.send({ product: dbProduct, reviews: productReview, seller: seller })
      : res.send(`No se ha encontrado el producto con el id: ${id}`);
  } catch (error) {
    console.log(error);
  }
};

// update product after sales

const updateProduct = async (req, res) => {
  const productos = req.body;

  productos.map(async (el) => {
    try {
      const product = await Product.findByPk(el.id);
      const updateQuantity = product.stock - el.cant;
      await product.update({ stock: updateQuantity });
    } catch (error) {
      console.log(error);
    }
  });
  res.send("producto descontado del carrito");
};


// update product after single sale

const updateProduct2 = async (req, res) => {
  const { id, cant } = req.body;

  try {
    const product = await Product.findByPk(id);
    const updateQuantity = product.stock - cant;
    product
      ? res.send(await product.update({ stock: updateQuantity }))
      : res.json("No se ha podido limpiar el carrito");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postProduct,
  putProduct,
  deleteProduct,
  allProducts,
  productInfo,
  updateProduct,
  updateProduct2,
};
