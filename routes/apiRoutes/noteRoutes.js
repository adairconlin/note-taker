const router = require("express").Router();
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
    console.log(notes);
    
});

router.post("/notes", (req, res) => {
    
})

module.exports = router;