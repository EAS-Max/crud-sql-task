const { update } = require('../controllers/itemC.js');

const patch = async (req, res) => {
    try {
        let name = req.body.name
        let category_id = req.body.category_id;
        let price = req.body.price;
        let image_url = req.body.image_url;
        let row = await update(req.params.id, name, category_id, price, image_url)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
};

module.exports = {
    patch
}