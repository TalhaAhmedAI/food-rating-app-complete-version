const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

require("../db");

const Restaurant = mongoose.model("Restaurant");

const registerRestaurant = (req, res) => {
  const restaurant = new Restaurant();
  restaurant.name = req.body.name;
  restaurant.item_1 = { name: req.body.item_1, rating: 0 };
  restaurant.item_2 = { name: req.body.item_2, rating: 0 };
  restaurant.item_3 = { name: req.body.item_3, rating: 0 };
  restaurant.item_4 = { name: req.body.item_4, rating: 0 };
  restaurant.save((err, doc) => {
    if (!err) return;
    else console.log(`Error during restaurant registration ${err}`);
  });
};

router.post("/restaurants", async (req, res) => {
  await registerRestaurant(req, res);
  res.send("Restaurant has been registered");
});

router.get("/restaurants", async (req, res) => {
  await Restaurant.find((err, docs) => {
    if (!err) {
      res.status(200).send(docs);
    } else {
      res.send(err);
    }
  });
});

router.get("/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.send(restaurant);
  } catch (err) {
    res.send(err);
  }
});

router.put("/restaurants/:id", async (req, res) => {
  const result = Restaurant.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    "item_1.name": req.body.item_1,
    "item_2.name": req.body.item_2,
    "item_3.name": req.body.item_3,
    "item_4.name": req.body.item_4,
  })
  .then(() => res.send(result))
  .catch((err) => res.send(err))
});

router.delete("/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndRemove({
      _id: req.params.id,
    });
    res.status(200).send(restaurant);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
