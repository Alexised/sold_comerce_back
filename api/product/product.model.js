/**
 * Product model
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, uppercase: true, required: true },
  availableQuantity: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String },
  user:{ type:  Schema.Types.ObjectId, ref: "User" },
  slug: { type: String, trim: true },
}, { timestamps: true });

ProductSchema
  .path('availableQuantity')
  .validate((availableQuantity) => {
    if (availableQuantity > 0) {
      return true;
    }
    return false;
  }, 'La cantidad disponible debe ser mayor que 0');

ProductSchema
  .path('price')
  .validate((price) => {
    if (price >= 0) {
      return true;
    }
    return false;
  }, 'El precio no puede ser un valor negativo');

module.exports = mongoose.model('Product', ProductSchema);
