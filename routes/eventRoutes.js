const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

router.post("/", createEvent);       // Create
router.get("/", getEvents);          // Read All
router.get("/:id", getEventById);    // Read by ID
router.put("/:id", updateEvent);     // Update
router.delete("/:id", deleteEvent);  // Delete

module.exports = router;
