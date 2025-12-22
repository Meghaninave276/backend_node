import {book_modeel} from "../models/book_modeel";

export const addbook=async(req,res)=>{
    try
    {
        const book=await book_modeel.create(req.body);
        res.json({message:"book added",book});
        

    }
    catch(err)
    {
        res.json({error:err.message});

    }
}

export const getbooks=async(req,res)=>{
    try{
        const book=await book_modeel.find()
        res.json(book);

    }
    catch(err)
    {
        res.json({message:"cant add book",err});

    }
}