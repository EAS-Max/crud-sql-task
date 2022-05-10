const { update } = require('../controllers/itemC.js');

const patch = async (req, res) => {
    console.log(req.params.id)
    console.log(req.body.name)
    try {
        let name = req.body.name
        let row = await update(req.params.id, req.body.name)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
};

module.exports = {
    patch
}