const { create } = require('../controllers/categoryC.js');

const post = async (req, res) => {
    try {
        const row = await create(req.body.quote, req.body.person)
        res.json(row)
    } catch (err) {
        res.json({ error: err.message })
    }
}


module.exports = {
    post
}