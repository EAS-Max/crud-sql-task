const { update } = require('../controllers/itemC.js');

const patch = async (req, res) => {
    console.log(req.params.id)
    console.log(req.body.name)
    try {
        let name = req.body.name
        let category_id = req.body.category_id;
        let price = req.body.price;
        let image_url = req.body.image_url;
        let row = await update(name, category_id, price, image_url)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
};

module.exports = {
    patch
}