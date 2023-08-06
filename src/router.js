const express = require('express');
const booksController = require('./controllers/booksControllers');
const booksMidd = require('./middlewares/booksMiddlewares');
const router = express.Router();


router.get('/books', booksController.allTheBooks);
router.post('/books', booksMidd.validateBody, booksController.addBook);
router.delete('/books/:id', booksController.deleteBook);
router.put('/books/:id', booksMidd.validateBody, booksController.editBook);

module.exports = router;