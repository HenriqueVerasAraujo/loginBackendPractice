const { User } = require('../models');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createUser = async(body) => {
    const {username, password } = body;
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashPass });
    return {message: 'User Created!', user: newUser};
}

module.exports = {
    createUser
};