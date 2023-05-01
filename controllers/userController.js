const UserService = require('../services/userService');

const createUser = async(req, res) => {
    const body = req.body;
    console.log(body);
    try{
        const newUser = await UserService.createUser(body);
        if (newUser.message) {
            return res.status(201).json({message: newUser.message, user: newUser.user});
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

module.exports = {
    createUser,
};