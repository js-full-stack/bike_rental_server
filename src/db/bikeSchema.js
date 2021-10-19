const mongoose = require("mongoose");
const { Schema } = mongoose;

const bikeSchema = new Schema(
  {
    bikeName: {
      type: String,
      required: [true, "Bike name is required"],
    },
    bikeType: {
      type: String,
      enum: ["Road", "Mountain", "Touring", "Folding", "BMX", "Cruiser"],
      default: "Road",
    },
    rentPrice: {
      type: Number,
      required: [true, "Price is required"],
    },
    isRented: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Bike = mongoose.model("bike", bikeSchema);

module.exports = { Bike };
