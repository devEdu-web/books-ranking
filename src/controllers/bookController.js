import Book from "../models/bookModel.js";

async function postBook(req, res, next) {
    const book = new Book.Book(req.body);
    try {
        const doc = await book.save();
        console.log(book);

        res.send(doc);
    } catch (e) {
        res.send(e);
    }
}

async function getBooks(req, res, next) {
    try {
        const doc = await Book.Book.find({});
        res.send(doc);
    } catch (e) {
        res.send(e);
    }
}

async function getBook(req, res, next) {
    const bookTitle = req.params.title;

    try {
        const doc = await Book.Book.findOne({ title: bookTitle });
        if (doc) {
            res.send(doc);
        } else {
            res.status(404).json({
                err: true,
                message: "No book found",
            });
        }
    } catch (e) {
        res.send(e);
    }
}

async function deleteBook(req, res, next) {
    const bookTitle = req.params.title;

    try {
        const doc = await Book.Book.deleteOne({ title: bookTitle });
        res.send(doc);
    } catch (e) {
        res.send(e);
    }
}

export { postBook, getBooks, getBook };
