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
  MESSAGE_RESP_TEMPS: { MSG_SUCCESS },
  HTTP_CODE: { CREATED },
} = require("../helpers/constants");

//* Controllers
const getBikesController = async (req, res) => {
  const bikes = await getBikesService();
  res.json({ MSG_SUCCESS, payload: bikes });
};

const addBikeController = async (req, res) => {
  const { bikeName, bikeType, rentPrice } = req.body;
  await addBikeService(bikeName, bikeType, rentPrice);
  const bikes = await getBikesService();

  // console.log(bike);
  res.status(CREATED).json({ MSG_SUCCESS, payload: bikes });
};

const removeBikeController = async (req, res) => {
  const { id } = req.params;
  await removeBikeService(id);

  res.json({ MSG_SUCCESS });
};

const updateRentalStatusController = async (req, res) => {
  const { id } = req.params;
  await updateRentalStatusService(id);
  const bikes = await getBikesService();
  res.json({ MSG_SUCCESS, payload: bikes });
};

module.exports = {
  getBikesController,
  addBikeController,
  removeBikeController,
  updateRentalStatusController,
};
