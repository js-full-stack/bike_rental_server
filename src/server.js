//* Dependencies
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

//* Routing
const { bikeRouter } = require("./routers/bikeRouters");

//* Data for connect
const { connectMongo } = require("./db/connect");
const PORT = process.env.PORT || 8080;

//* Middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//* routing
app.use("/bikes", bikeRouter);

//* Launch server and database
(async () => {
  try {
    await connectMongo();
    app.listen(PORT, (error) => {
      if (error) console.log("error at server launch");
      console.log(`server work at port ${PORT}`);
    });
  } catch (error) {
    console.error(`failed to launch app with error ${error.message}`);
  }
})();
