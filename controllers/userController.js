const UserService = require('../services/userService');

const createUser = async(req, res) => {
    const body = req.body;
    try {
        const newUser = await UserService.createUser(body);
        if (newUser.message === 'User already in use.') {
            return res.status(400).json({message: newUser.message});
        } else {
            return res.status(201).json({message: newUser.message, user: newUser.user});
        }

    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

const loginUser = async(req, res) => {
    const body = req.body;
    try {
        const userInfo = await UserService.loginUser(body);
        if (userInfo.errMessage) {
            return res.status(400).json({message: userInfo.errMessage});
        } else {
            return res.status(200).json({ message: userInfo.message, token: userInfo.token });
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

module.exports = {
    createUser,
    loginUser,
};