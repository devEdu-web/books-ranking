import express from 'express';
import mongoose from 'mongoose';
import {router} from './routes/booksRouter.js'
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/books')
.then(db => console.log('Database ready'))
.catch(err => console.log(err))

app.use(express.json())
app.use('/', router)

export {app}