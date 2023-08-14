const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./services/cache");
require("./models/Book");
require('dotenv').config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./routes/bookRoutes")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
