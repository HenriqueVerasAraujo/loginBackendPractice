const usernameValidation = (req, res, next) => {
    const { username } = req.body;
    if (!username) {
        return res.json({errMessage: "Username required"});
    }
    next();
};

const passwordValidation = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.json({errMessage: "Password required"});
    }
    next();
};

module.exports = {
    usernameValidation,
    passwordValidation,
};