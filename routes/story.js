const express = require("express");
const router = express.Router();
//const data = require("../data");
//const aboutData = data.about;

router.get("/", async (req, res) => {
    try {
      const storyList = {
        "storyTitle": "The legends of Mahabharata",
        "story": "Mahabharata is a Hindu verse\nWritten by renowed author kavi maharishi\nIt is one of the most sacred manuscripts of the Hindu religion"
    }
      res.json(storyList);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send();
    }
  });

  module.exports = router