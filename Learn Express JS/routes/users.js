const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List");
 });
 
 router
 .get("/new", (req, res) => {
    console.log(req.user)
      res.send("User New Form");
 })
 .post("/", (req, res) => {
       res.send('Create User');
 })
 .get("/:id", (req,res) => {
        res.send(`Get User with ID ${req.params.id}`);
 })
 .put("/:id", (req,res) => {
    res.send(`Update User with ID ${req.params.id}`);
})
 .delete("/:id", (req,res) => {
    res.send(`Delete User with ID ${req.params.id}`);
})

const users = [{ name: "Kyle" }, { name: "Sally"} ];
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})

 module.exports = router