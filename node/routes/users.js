const express = require('express')
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router()

require("../db");

const User = mongoose.model("User");

const createUser = (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
      if (!err) return;
      else console.log(`Error during user creation ${err}`);
    });
  };

// Routes

router.post("/users", async (req, res) => {
    await createUser(req, res);
    res.send("User has been registered");
  });
  
  router.get("/users", async (req, res) => {
    await User.find((err, docs) => {
      if (!err) {
        res.status(200).send(docs);
      } else {
        res.send(err);
      }
    });
  });
  
  router.get("/users/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      res.send(user)
    }
    catch (err) {
      res.send(err)
    }
  })
  
  router.post("/auth", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email");
  
    let password = await User.findOne({ password: req.body.password });
    if (!password) return res.status(400).send("Invalid password");
  
    jwt.sign({ user }, "secret_key", (err, token) => {
      res.json(token);
    });
  });
  
  router.put('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {name: req.body.name,
        email: req.body.email,
        password: req.body.password})
        res.send(user)
    }
    catch (error) {
      res.send(error)
    }
  })
  
  router.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndRemove({ _id: req.params.id });
      res.status(200).send(user)
    } catch (error) {
      res.send(error);
    }
  });


  module.exports = router;

