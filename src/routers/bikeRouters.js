const express = require("express");

const router = express.Router();

const { asyncWrapper } = require("../helpers/errorsHandlers");

const {
  getBikesController,
  getBikeByIdController,
  addBikeController,
  removeBikeController,
} = require("../controllers/bikeRentalControllers");

router.get("/", asyncWrapper(getBikesController));
router.get("/:id", asyncWrapper(getBikeByIdController));
router.post("/", asyncWrapper(addBikeController));
router.delete("/:id", asyncWrapper(removeBikeController));
router.patch("/:id");

module.exports = { bikeRouter: router };
