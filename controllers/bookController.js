// Import Model
const Book = require('../models/books');


// Function add and export
exports.addBook = async (req, res) => {

    const {title,author,published_year,genre,available}=req.body;
    const book = new Book({title,author,published_year,genre,available});         

    try{
        const newBook = await book.save();
        res.status(201).json(newBook);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

// Function update and export
exports.updateBook = async (req, res) => {

    try{
        const {title,author,published_year,genre,available}=req.body;

        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,
            {title,author,published_year,genre,available},
            {new:true}
        );

        if(!updateBook) return res.status(404).json({message:'Book not found'});

        res.json(updateBook);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

// Function delete and export
exports.deleteBook = async (req, res) => {

    try{
        const book = await Book.findByIdAndDelete(req.params.id);

        if(!book) return res.status(404).json({message:'Book not found'});

        res.json({message:'Book deleted'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// Function get all data and export
exports.getBookAll = async (req, res) => {

    try{
        const book = await Book.find();

        res.json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// Function get data by genre and export
//test==>http://localhost:3000/api/book?genre=Fantasy

exports.getBookGen = async (req, res) => {

    try{
        const {genre} = req.query;
        const book = await Book.findOne({genre});

        if(!book){ return res.status(404).json({message:'Book not found'});}

        res.json(book);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

