const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

const loginUser = async(body) => {
    const { username, password } = body;
    const hashPass = await bcrypt.hash(password, 10);
    const findUsername = await User.findOne({ where: { username } });
    if (!findUsername) {
        return { errMessage: 'User not found.' };
    };
    const comparePass = await bcrypt.compare(password, findUsername.password);
    if (!comparePass) {
        return { errMessage: 'Invalid password.' };
    };
    const token =  jwt.sign({ id: findUsername.id, username: findUsername.username }, secret);
    return {message: 'login authorized', token };
};

module.exports = {
    createUser,
    loginUser,
};