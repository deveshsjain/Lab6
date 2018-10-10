const express = require("express");
const router = express.Router();
//const data = require("../data");
//const aboutData = data.about;

router.get("/", async (req, res) => {
    try {
      const aboutList = {
        "name": "Devesh Jain",
        "CWID": 10435361,
        "Biography": "Born and brought up in India\nCurrently in the states pursuing MS in CS",
        "fav shows": ["Got", "Friends", "Flash"],
        "hobbies": ["Swimming", "Football"]
    }
      res.json(aboutList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send();
    }
  });

  module.exports = router