const { Bike } = require("../db/bikeSchema");

const getBikesService = async () => {
  const bikes = await Bike.find({});
  return bikes;
};

const getBikeByIdService = async (bikeId) => {
  const bike = await Bike.findById({ _id: bikeId });
  return bike;
};

const addBikeService = async (bikeName, bikeType, rentPrice) => {
  const bike = new Bike({ bikeName, bikeType, rentPrice });
  await bike.save();
  return bike;
};

const removeBikeService = async (bikeId) => {
  await Bike.findByIdAndRemove({ _id: bikeId });
};

const updateRentalStatusService = async (bikeId) => {
  const bike = await getBikeByIdService(bikeId);
  const { isRented } = bike;

  await bike.updateOne({ $set: { isRented: !isRented } }, { new: true });
};

module.exports = {
  getBikesService,
  getBikeByIdService,
  addBikeService,
  removeBikeService,
  updateRentalStatusService,
};
