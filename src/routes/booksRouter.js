import {Router} from 'express';
import * as bookController from '../controllers/bookController.js'
const router = Router()


router.get('/all', bookController.getBooks) // Todos os livros
router.post('/addBook', bookController.postBook)
// buscar um unico livro
// salvar um livro
// deletar um livro
// editar um livro



export {router}