const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const port = process.env.PORT || 3001;

const users = require('./routes/users')
const restaurants = require('./routes/restaurants')

app.use(cors());
app.use(bodyparser.json());
app.use('/', users)
app.use('/', restaurants)


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
