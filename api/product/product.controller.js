const Product = require("./product.model");
const User = require('../user/user.model');

function respondWithResult(res, code) {
  const statusCode = code || 200;
  return (entity) => {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
}

// Gets a list of products
function index(req, res) {
  return Product.find()
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Create product
function create(req, res) {
  return Product.updateOne(req.params.id,req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}
// update product
function update(req, res) {
return Product.updateOne({_id : req.params.id},{$set :req.body})
.exec()
.then(respondWithResult(res))
.catch(handleError(res));
}
//Delete product
function deleteproduct(req, res) {
  return Product.findByIdAndRemove(req.params.id)
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
// Gets a single product from the DB
function show(req, res, next) {
  return Product.findById(req.params.id).populate({ path: 'user' }).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
  // Product.findById(req.params.id).populate({ path: 'user' }).exec(function (err, product) {
  //   if (err) {
  //     console.error("Error retrieving all product by id!");
  //   } else {
  //     console.log("server product = " + JSON.stringify(product.user));
  //       // res.status(200).send(Product);
  //       console.log("server product = " + JSON.stringify(product));
  //       res.json(product);
  //   }
  // });
}

module.exports = {
  create,
  show,
  index,
  deleteproduct,
  update,
};
