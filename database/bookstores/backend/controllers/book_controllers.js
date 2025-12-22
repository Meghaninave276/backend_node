import {Book} from "../models/book.js";

export const addbook=async(req,res)=>{
    try
    {
        const book=await Book.create(req.body);
        res.json({message:"book added",book});
        

    }
    catch(err)
    {
        res.json({error:err.message});

    }
}

export const getbooks=async(req,res)=>{
    try{
        const book=await Book.find()
        res.json(book);

    }
    catch(err)
    {
        res.json({message:"cant add book",error:err.message});

    }
}