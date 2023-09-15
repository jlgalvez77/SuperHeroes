const getSupersHandler = (req, res) => {
    res.status(200).json({ message: 'Supers' });
}

const getSuperDetailHandler = (req, res) => {
    res.status(200).json({ message: 'Super' });
}

module.exports = {
    getSupersHandler,
    getSuperDetailHandler
};