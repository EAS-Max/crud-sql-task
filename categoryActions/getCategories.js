const { getCategories } = require('../controllers/categoryC.js');

const get = async (req, res) => {
    try {
        let rows = await getCategories()
        res.json(rows)
    } catch (err) {
        res.json({ error: err.message })
    }
}

module.exports = {
    get
}