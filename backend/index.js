import express, { response } from 'express';
import {PORT,mongoDBURL} from './config.js';
import mongoose from 'mongoose';
// import {Book} from './models/bookModel.js';
import booksRoutes from './routes/booksRoutes.js';
// import {Book} from './models/bookModel.js';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('hello world')
});

app.use('/books',booksRoutes);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
        console.log("app connected to database");
    }) 
    .catch((error)=>{
        console.log(error)
    })