const express = require("express");
const router = express.Router();

// Import Controller
const {addBook,updateBook,deleteBook,getBookAll,getBookGen}
=require('../controllers/bookController');

// APIs Routing Config
router.post('/books',addBook);
router.put('/books/:id',updateBook);
router.delete('/books/:id',deleteBook);
router.get('/books',getBookAll);
router.get('/book',getBookGen);   //test==>http://localhost:3000/api/book?genre=Fantasy

// Export router
module.exports = router;
