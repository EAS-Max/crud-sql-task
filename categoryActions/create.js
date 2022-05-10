const { create } = require('../controllers/categoryC.js');

const post = async (req, res) => {
    try {
        let name = req.body.name;
        const row = await create(name)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
}


module.exports = {
    post
}