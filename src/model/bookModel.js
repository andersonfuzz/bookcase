const connection = require('./connection');

const allTheBooks = async () => {
    const [books] = await connection.execute('SELECT * FROM books');
    return books;
};

const addBook = async (books) => {

    const { title, company, language, pages } = books;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO books(title, company, language, pages, created_at) VALUES(?,?,?,?,?)';

    const [addingBook] = await connection.execute(query, [title, company, language, pages, dateUTC]);

    return { insertId: addingBook.insertId };
};
const deleteBook = async (id) => {
    const removeBook = await connection.execute('DELETE FROM books WHERE id=?', [id]);
    return removeBook;
};
const editBook = async (id, book) => {
    const { title, company, language, pages } = book;

    const query = 'UPDATE books SET title = ?, company = ?, language = ?, pages = ? WHERE id = ?';

    const editingBook = await connection.execute(query, [title, company, language, pages, id]);
    return editingBook;
};
module.exports = {
    allTheBooks,
    addBook,
    deleteBook,
    editBook
};