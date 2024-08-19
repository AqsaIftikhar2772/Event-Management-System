import mongoose from "mongoose";

const SearchCountSchema = new mongoose.Schema({
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
  count: {
    type: Number,
    default: 1,
  },
});

const SearchCount = mongoose.model("SearchCount", SearchCountSchema);

export default SearchCount