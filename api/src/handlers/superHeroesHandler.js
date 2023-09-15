const getSuperHeroesHandler = (req, res) => {
    res.status(200).json({ message: 'Super Heroes' });
};

const getSuperHeroDetailHandler = (req, res) => {
    res.status(200).json({ message: 'Super Hero' });
};

module.exports = {
    getSuperHeroesHandler,
    getSuperHeroDetailHandler
};