const express = require ("express");
const router =  express.Router();
const data = require("../data");
const educationData = data.education;

router.get("/", async (req, res) => {
    try {
        const educationList = await educationData.getAllEducation();
        res.json(educationList);
    } catch(e) {
        res.status(500).send();
    }
});

module.exports = router;