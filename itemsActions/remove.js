const { remove } = require('../controllers/itemC.js');

const del = async (req, res) => {
    try {
        let row = await remove(req.params.id)
        res.json(row)
    } catch {
        res.json({ error: err.message })
    }
};

module.exports = {
    del
}