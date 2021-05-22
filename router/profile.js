const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_key = process.env.SECRET_KEY;
const authMiddleware = require("../helpers/authMiddleware");

// PUT : EDIT A USER BY ID
router.put( "/:id",
[
  body("first_name", "FirstName must contain only alphabetic and not empty")
    .isString()
    .isLength({
      min: 2,
    }),
  body("last_name", "LastName must contain only alphabetic and not empty")
    .isString()
    .isLength({
      min: 2,
    }),
],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,msg)=> {
        err ? console.log(err) : res.json({msg:'user was updated'})
    })
  }
);
//delete user by id
router.delete("/:id", authMiddleware, (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id })
  .then(() => res.send("user deleted successfuly"))
  .catch((err) => {
    console.error(err.message);
    res.status(500).send({ msg: "Server Error" });
  });
});

//edit post by id
router.put("/update/:id", authMiddleware, (req, res) => {
  Post.findByIdAndUpdate({ _id: req.params.id }, { ...req.body })
  .then((data) => res.json(data))
  .catch((err) => {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  });
});

//add favorite to Array 
router.put('/addfavorites/:id', authMiddleware, (req,res)=> {
User.findByIdAndUpdate({_id:req.params.id},{$push:{favorites:{...req.body}}},(err,msg)=> {
  err ? console.log(err) : res.json({msg:'Post was added to favorites'})
})
})

//remove ALL favorite from Array 
router.put('/removefavoritesAll/:id', authMiddleware,(req,res)=> {
  User.findByIdAndUpdate({_id:req.params.id},{$pull:{favorites:{...req.body}}},(err,msg)=> {
    err ? console.log(err) : res.json({msg:'Post was removed from favorites'})
})
})

//remove favorite from Array 
router.put('/removefavorites/:id', (req,res)=> {
  User.findByIdAndUpdate({_id:req.params.id},{$pull:{favorites:{_id:req.body._id}}},(err,msg)=> {
    err ? console.log(err) : res.json({msg:'Post was removed from favorites'})
})
})


module.exports = router;
