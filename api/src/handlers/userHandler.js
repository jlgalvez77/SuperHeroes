const getUsersHandler = (req, res) => {
    res.status(200).json({ message: 'Users' });
};

const getDetailHandler = (req, res) => {
    res.status(200).json({ message: 'User' });
};

const createUserHandler = (req, res) => {
    res.status(200).json({ message: 'User' });
};

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler
};