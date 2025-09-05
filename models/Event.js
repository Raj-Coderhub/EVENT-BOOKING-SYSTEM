const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  seatsAvailable: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
