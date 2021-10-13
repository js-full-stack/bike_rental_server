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

const removeBikeService = async (bikeId) => {
  await Bike.findByIdAndRemove({ _id: bikeId });
};

const updateRentalStatusService = async (bikeId) => {
  const bike = await Bike.findById({ _id: bikeId });
  const { isRented } = bike;

  const updatedBike = await bike.updateOne(
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
