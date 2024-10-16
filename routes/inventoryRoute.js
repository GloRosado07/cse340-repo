// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")

/*  **********************************
*  GET Routes
* ********************************* */

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

// Route to build car product details
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInvId));

// Inexistent route for 500-type error
router.get("/faildirection", utilities.handleErrors(invController.badFunction))

// Route to build add classification view
router.get("/inventory/add-classification",
    utilities.handleErrors(invController.buildAddClassView)
    );

// Route to build add vehicle view
router.get("/inventory/add-inventory",
    utilities.handleErrors(invController.buildAddVehicleView)
    );

// Route to build inventory view
router.get("/getInventory/:classification_id", utilities.handleErrors(invController.getInventoryJSON))


/*  **********************************
*  POST Routes
* ********************************* */

// Route for register a new classification
router.post(
    "/inventory/add-classification",
    utilities.handleErrors(invController.addClassification)
);

//UP TO HERE WEEK 3//


module.exports = router;

