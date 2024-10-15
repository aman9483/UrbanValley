const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true, // Ensure zipCode is marked as required
    },
  },
  customerInfo: {
    fullName: {
      type: String,
      required: true, // Ensure fullName is required
    },
    phone: {
      type: String,
      required: true, // Ensure phone is required
    },
    email: {
      type: String,
      required: true, // Ensure email is required
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  // Additional fields
});

module.exports = mongoose.model("Order", orderSchema);
