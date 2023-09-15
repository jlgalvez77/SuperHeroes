const getSuperVillainsHandler = (req, res) => {
    res.status(200).json({ message: 'Super Villains' });
};

const getSuperVillainDetailHandler = (req, res) => {
    res.status(200).json({ message: 'Super Villain' });
};

module.exports = {
    getSuperVillainsHandler,
    getSuperVillainDetailHandler
};