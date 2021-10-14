//* Services
const {
  getBikesService,
  getBikeByIdService,
  addBikeService,
  removeBikeService,
  updateRentalStatusService,
} = require("../services/bikeRentalServices");

//* Constants
const {
  MESSAGE_RESP_TEMPS: { MSG_SUCCESS, MSG_AUTH_ERROR },
  // HTTP_CODE: { CREATED },
} = require("../helpers/constants");

//* Controllers
const getBikesController = async (req, res) => {
  const bikes = await getBikesService();
  res.json({ MSG_SUCCESS, payload: bikes });
};

const getBikeByIdController = async (req, res) => {
  const { id } = req.params;
  const bike = await getBikeByIdService(id);
  res.json({ MSG_SUCCESS, paylaod: bike });
};

const addBikeController = async (req, res) => {
  const { bikeName, bikeType, rentPrice } = req.body;
  await addBikeService(bikeName, bikeType, rentPrice);
  res.status(201).json({ MSG_SUCCESS });
};

const removeBikeController = async (req, res) => {
  const { id } = req.params;
  await removeBikeService(id);
  res.json({ MSG_SUCCESS });
};

const updateRentalStatusController = async (req, res) => {
  const { id } = req.params;
  await updateRentalStatusService(id);
  res.json({ MSG_SUCCESS });
};

module.exports = {
  getBikesController,
  getBikeByIdController,
  addBikeController,
  removeBikeController,
  updateRentalStatusController,
};
