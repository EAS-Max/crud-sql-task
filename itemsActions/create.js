const { create } = require('../controllers/itemC.js');

const post = async (req, res) => {
    try {
        let name = req.body.name;
        let category_id = req.body.category_id;
        let price = req.body.price;
        let image_url = req.body.image_url;
        const row = await create(name, category_id, price, image_url)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
}


module.exports = {
    post
}