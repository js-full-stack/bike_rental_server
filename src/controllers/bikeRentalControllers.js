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
  HTTP_CODE,
  TMP_MESSAGE_RESP: { SUCCESS },
} = require("../helpers/constants");

//* Controllers
const getBikesController = async (req, res) => {
  const bikes = await getBikesService();
  res.json({ SUCCESS, bikes });
};

const getBikeByIdController = async (req, res) => {
  const { id } = req.params;
  const bike = await getBikeByIdService(id);
  res.json({ SUCCESS, bike });
};

const addBikeController = async (req, res) => {
  const { bikeName, rentPrice } = req.body;
  await addBikeService(bikeName, rentPrice);
  res.status(HTTP_CODE.CREATED).json({ SUCCESS });
};

const removeBikeController = async (req, res) => {
  const { id } = req.params;
  await removeBikeService(id);
  res.json({ SUCCESS });
};

const updateRentalStatusController = async (req, res) => {
  const { id } = req.params;
  await updateRentalStatusService(id);
  res.json({ SUCCESS });
};

module.exports = {
  getBikesController,
  getBikeByIdController,
  addBikeController,
  removeBikeController,
  updateRentalStatusController,
};
