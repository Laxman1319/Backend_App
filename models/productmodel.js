import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productModel = mongoose.model("products", productSchema);
export default productModel;