import Book from '../models/bookModel.js'


async function postBook(req, res, next) {
    const book = new Book.Book(req.body)
    try {
        const doc = await book.save()
        console.log(book)

        res.send(doc)

    }catch (e) {
        res.send(e)
    }
}

export {postBook}