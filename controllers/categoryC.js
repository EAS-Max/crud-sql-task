const { query } = require('../utils/db.js');

const create = async (name) => {
    let row = await query('INSERT INTO categories (name) VALUES (?)', [name]);
    return row;
}

const getCategories = async () => {
    let rows = await query('SELECT * FROM categories');
    return rows;
}

const getByID = async (id) => {
    let [row] = await query('SELECT * FROM categories WHERE id=?', id);
    return row;
}

const remove = async (id) => {
    let response = await query('DELETE FROM categories WHERE id=?', id);
    return response;
}

const update = async (id, name, category_id, price, image_url) => {
    let response = await query('UPDATE categories SET name=?, category_id=?, price=?, image_url=? WHERE id=?', [name, category_id, price, image_url, id]);
    return response;
}

module.exports = {
    getCategories,
    getByID,
    remove,
    update,
    create
}