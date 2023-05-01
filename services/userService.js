const { User } = require('../models');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const secret = process.env.JWT_SECRET;


const validateNewUser = async(username) => {
    const findUsername = await User.findOne({ where: { username } });
    if (findUsername) {
        return { errMessage: 'User already in use.' };
    } else {
        return { validUsername: true };
    }
};

const createUser = async(body) => {
    const { username, password } = body;
    const validateUser = await validateNewUser(username);
    if (validateUser.errMessage) {
        return {message: validateUser.errMessage};
    } else {
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashPass });
        return {message: 'User Created!', user: newUser};
    }
}

module.exports = {
    createUser,
};