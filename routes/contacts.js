const express = require("express");
const router = express.Router();

// @route  Get api/users
// @desc   Get all user contacts
// @access  Private
router.get("/", (req, res) => {
	res.send("Get all contacts");
});

// @route  Post api/contacts
// @desc   Add new contact
// @access  Private
router.post("/", (req, res) => {
	res.send("Add new contact");
});

// @route  Put api/contacts/id:
// @desc   Update contact
// @access  Private
router.put("/:id", (req, res) => {
	res.send("Update contact");
});

// @route  Delete api/contacts/id:
// @desc   Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
	res.send("delete contact");
});

module.exports = router;
