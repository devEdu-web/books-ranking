import {Router} from 'express';
import * as bookController from '../controllers/bookController.js'
const router = Router()


router.get('/all', (req, res, next) => res.send('Buscando livros')) // Todos os livros
router.post('/addBook', bookController.postBook)
// buscar um unico livro
// salvar um livro
// deletar um livro
// editar um livro



export {router}