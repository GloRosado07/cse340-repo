// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/")
const accountController = require("../controllers/accountController")

/*  **********************************
*  GET Routes
* ********************************* */

// Route to login view
router.get("/login",
    utilities.handleErrors(accountController.buildLogin)
    );

// Route to register view
router.get("/register",
    utilities.handleErrors(accountController.buildRegister)
    );


/*  **********************************
*  POST Routes
* ********************************* */

router.post('/register', utilities.handleErrors(accountController.registerAccount))

  module.exports = router;