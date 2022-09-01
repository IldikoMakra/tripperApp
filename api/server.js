const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const usersRoutes = require("./routes/users-routes");
const storiesRoutes = require("./routes/stories-routes");
const path = require("path");

const connectDB = require("./data/connection");
require("dotenv/config");
connectDB();

//Middlewares
app.use(bodyParser.json());
app.use("/uploads", express.static("./uploads"));
app.use(morgan("tiny"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.get("/", (req, res) => res.send("TripStories API Version 1.0.2"));

app.use("/api/users", usersRoutes);
app.use("/api/stories", storiesRoutes);

app.listen(port, () => console.log(`Listening on port ${port}...`));
