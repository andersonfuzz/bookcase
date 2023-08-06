const booksModel = require('../model/bookModel');

const allTheBooks = async (_request, response) => {
    const books = await booksModel.allTheBooks();
    return response.status(200).json(books);
};
const addBook = async (request, response) => {
    const addingBook = await booksModel.addBook(request.body);
    return response.status(201).json(addingBook);
};
const deleteBook = async (request, response) => {
    const { id } = request.params;
    await booksModel.deleteBook(id);
    return response.status(204).json();
};
const editBook = async (request, response) => {
    const { id } = request.params;
    await booksModel.editBook(id, request.body);
    return response.status(204).json();
};
module.exports = {
    allTheBooks,
    addBook,
    deleteBook,
    editBook
};