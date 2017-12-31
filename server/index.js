// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import authenticationRoutes from "./routes/AuthenticationRoutes";
import listRoutes from "./routes/ListRoutes";
import movieRoutes from "./routes/MovieRoutes"

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://jwoo:jwoo@ds151451.mlab.com:51451/aca-test");
mongoose.connect("mongodb://greg.swan:Radiohead1`@ds159866.mlab.com:59866/movie-journal")
const app = express();
app.use(express.static("public"));

// app.get("*", (req, res, next) => {
//   res.sendFile("public/index.html");
// });
app.use(bodyParser.json());
app.use(authenticationRoutes);



const authStrategy = passport.authenticate("authStrategy", { session: false });
app.use(authStrategy);
app.use(listRoutes);
app.use(movieRoutes);


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

