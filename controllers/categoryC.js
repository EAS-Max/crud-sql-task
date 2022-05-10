const { query } = require('../utils/db.js');

const create = async (name, category_id, price, image_url) => {
    const response = await query("INSERT INTO categories (name, category_id, price, image_url) VALUES (? ? ? ?)", [name, category_id, price, image_url]);
    return
}

const getCategories = async () => {
    const rows = await query("SELECT * FROM categories");
    return rows;
}

const getByID = async (id) => {
    const [row] = await query("SELECT * FROM categories WHERE id=?", id);
    return row;
}

const remove = async (id) => {
    const response = await query("DELETE FROM categories WHERE id=?", id);
    return response;
}

const update = async (id, name, category_id, price, image_url) => {
    const response = await query("UPDATE categories SET name=?, category_id=?, price=?, image_url=? WHERE id=?", [name, category_id, price, image_url, id]);
    return response;
}

module.exports = {
    getCategories,
    getByID,
    remove,
    update,
    create
}