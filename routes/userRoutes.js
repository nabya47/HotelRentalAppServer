const { Router } = require("express");
const { getUsers, createUser, loginUser} = require("../controllers/userController");
const { logoutUser, auth } = require("../middleware/authMiddleware");


const router = Router();

// get all users
router.get("/",auth, getUsers);

//create a new user
router.post("/", createUser);

//login a user
router.post("/login", loginUser);

router.options('/login', (req, res) => {
    // CORS headers are already set by the middleware
    res.status(200).end();
  });

//logout  user
router.get("/logout", logoutUser);



module.exports = router;