const { Bike } = require("../db/bikeSchema");

const getBikesService = async () => {
  const bikes = await Bike.find({});
  return bikes;
};

const getBikeByIdService = async (bikeId) => {
  const bike = await Bike.findById({ _id: bikeId });
  return bike;
};

const addBikeService = async (bikeName, rentPrice) => {
  const bike = new Bike({ bikeName, rentPrice });
  await bike.save();
};

const removeBikeService = async (_id) => {
  await Bike.findByIdAndRemove({ _id });
};

const updateRentalStatusService = async (_id) => {
  await Bike.findOneAndUpdate(
    { _id },
    { $set: { isRented: !isRented } },
    { new: true }
  );
};

module.exports = {
  getBikesService,
  getBikeByIdService,
  addBikeService,
  removeBikeService,
  updateRentalStatusService,
};
