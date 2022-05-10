const { update } = require('../controllers/categoryC.js');

const patch = async (req, res) => {
    try {
        let name = req.body.name
        let row = await update(req.params.id, name)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
};

module.exports = {
    patch
}