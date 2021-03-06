import {Router} from 'express';
import * as bookController from '../controllers/bookController.js'
const router = Router()


router.get('/all', bookController.getBooks) // Todos os livros
router.get('/book/:title', bookController.getBook)
router.post('/addBook', bookController.postBook)
router.delete('/delete/:id', bookController.deleteBook)
router.put('/update/:id', bookController.updateBook)
// buscar um unico livro
// salvar um livro
// deletar um livro
// editar um livro



export {router}