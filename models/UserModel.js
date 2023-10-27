const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 5 },
    username: { type: String, required: true },
}, { timestamps: true });

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;