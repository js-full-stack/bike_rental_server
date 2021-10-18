const { Bike } = require("../db/bikeSchema");

const getBikesService = async () => {
  const bikes = await Bike.find({});
  return bikes;
};

const addBikeService = async (bikeName, bikeType, rentPrice) => {
  const bike = new Bike({ bikeName, bikeType, rentPrice });
  await bike.save();
  return bike;
};

const removeBikeService = async (bikeId) => {
  await Bike.findByIdAndRemove(bikeId);
};

const updateRentalStatusService = async (bikeId) => {
  const bike = await Bike.findById(bikeId);
  console.log(bike);
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
