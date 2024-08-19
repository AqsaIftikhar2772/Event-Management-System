import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "city",
    },
    price: {
      type: Number,
      required: true,
    },
    plusPoint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "plusPoint",
    },
    kanal: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
      default: 0,
    },
    parking: {
      type: Number,
      required: true,
      default: 0,
    },
    rooms: {
      type: Number,
      default: 0,
    },
    bridal: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

const Product = mongoose.model("products", ProductSchema);
export default Product;
