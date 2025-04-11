const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Name is required."],
    },
    Email: {
        type: String,
        required: [true, "Email is required."],
    },
    Password: {
        type: String,
        required: [true, "Password is required."],
    },
});

const user = new mongoose.model("user", userSchema);

module.exports = user;