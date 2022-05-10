const { getItems } = require('../controllers/itemC.js');

const get = async (req, res) => {
    try {
        let rows = await getItems()
        res.json(rows)
    } catch (err) {
        res.json({ error: err.message })
    }
}

module.exports = {
    get
}