const { Router } = require("express");
const {
  getRooms,
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");
const {auth} = require("../middleware/authMiddleware");
const router = Router();

// Get all rooms
router.get("/", getRooms);

//create a new room
router.post("/", auth, createRoom);

//get single room
router.get("/:id", getRoom);

//update room
router.put("/:id", auth, updateRoom);

//delete room
router.delete("/:id", auth, deleteRoom);

module.exports = router;
