const { query } = require('../utils/db.js');

const create = async (name, category_id, price, image_url) => {
    const response = await query("INSERT INTO items (name, category_id, price, image_url) VALUES (?, ?, ?, ?)", [name, category_id, price, image_url]);
    return response;
}

const getItems = async () => {
    const rows = await query("SELECT * FROM items");
    return rows;
}


const getByID = async (id) => {
    const [row] = await query("SELECT * FROM items WHERE id=?", id);
    return row;
}


const update = async (id, name, category_id, price, image_url) => {
    const response = await query("UPDATE items SET name=?, category_id=?, price=?, image_url=? WHERE id=?", [name, category_id, price, image_url, id]);
    return response;
}

const remove = async (id) => {
    const response = await query("DELETE FROM items WHERE id=?", id);
    return response;
}

module.exports = {
    getItems,
    getByID,
    remove,
    update,
    create
}