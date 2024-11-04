import express from 'express';
import { Book } from '../models/bookModel.js';
const router=express.Router();

//Add book to server 
router.post('/',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message:"Title, author and publishYear are required",
            });
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        };
        const book=await Book.create(newBook);
        return res.status(201).send(book);
    }catch(error){
        console.log(error);
        res.status(500).send({message:error.message});
    }
});

// get all books from server
router.get('/',async (req,res)=>{
    try{
        const books=await Book.find({});
        return res.status(200).json({
            count:books.length,
            data:books
        });
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

// get only one book from server with there id
router.get('/:id',async (req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        if(book){
            return res.status(200).send(book);
        }else{
            return res.status(404).send({message:"Book not found"});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

// update book with there id
router.put('/:id',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message:"Title, author and publishYear are required",
            });
        }

        const {id}=req.params;
        const result=await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).send({message:"Book not found"});
        }else{
            return res.status(200).send({message:"Book updated"});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

// delete a book
router.delete('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const result=await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send({message:"Book not found"});
        }
        return res.status(200).send({message:"Book deleted"});
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

export default router;