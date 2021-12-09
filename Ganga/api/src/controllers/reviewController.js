const { Review, User, Product } = require("../db.js");

async function postReview(req, res) {
  const { description, qualificacion, idUser,
    idProduct
} = req.body;

  try {
    const review = {
      description,
      qualificacion,
    };
    const newReview = await Review.create(review);

    newReview ? await newReview.setUser(idUser) : console.log('No se ha podido relacionar la devolucion con el usuario')

    newReview ? await newReview.setProduct(idProduct) : console.log('No se ha podido relacionar la devolucion con el producto')

    newReview
      ? res.send(newReview)
      : res.send("No se ha podido crear la devolucion");
  } catch (error) {
    console.log(error);
  }
}

async function updateReview(req, res) {
  const { id, description, qualificacion } = req.body;

  try {
    const infoUpdateReview = {
      description,
      qualificacion,
    };

    const reviewById = await Review.findByPk(id);

    reviewById
      ? res.send(await reviewById.update(infoUpdateReview))
      : res.send("No se ha podido actualiuzar la devolucion");
  } catch (error) {
    console.log(error);
  }
}

async function deleteReview(req, res) {
  const { id } = req.query;
  try {
    const deleteReview = await Review.findByPk(id);

    deleteReview
      ? res.send(await deleteReview.destroy())
      : res.json("No se ha podido eliminar la devolucion");
  } catch (error) {
    console.log(error);
  }
}

async function allReviews(req, res) {
  const { id } = req.query;

  try {
    const allReviews = await Review.findAll({
      include: [{
        model: Product,
        attributes: ['name', 
          'description',
          'price',
          'stock',
          'image',]
      },
    {
      model: User,
      attributes: ['name',
        'surname',
        'mail',
        'address',
        'image',
        'seller',
        'birthdate'] 
    }]
    });

    if (id) {
      const reviewById = await Review.findByPk(id);

      reviewById
        ? res.send(reviewById)
        : res.send("No se ha encontrado una devolucion con ese id");
    } else {
      res.send(allReviews);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  postReview,
  updateReview,
  deleteReview,
  allReviews,
};
