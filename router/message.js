const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const authMiddleware = require("../helpers/authMiddleware");


//new msg
router.post("/new_message", (req, res) => {
    let newMessage = new Message({ ...req.body });
    newMessage
      .save()
      .then((Message) => res.status(200).send(Message))
      .catch((err) => {
        console.error(err.message);
        res.status(500).send({ msg: "Server Error" });
      });
  });

    //get all msgs
    router.get("/all_message", authMiddleware, (req, res) => {
      Message.find()
        .then((Message) => res.send(Message))
        .catch((err) => {
          console.error(err.message);
          res.status(500).send({ msg: "Server Error" });
        });
    });


module.exports = router ;