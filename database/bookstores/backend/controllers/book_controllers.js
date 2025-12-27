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

export const updatebook=async(req,res)=>{
 try
 {
     const result = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json({message:"book updated",result});
 }
 catch(err)
 {
    res.json({message:"book not updated",err});
 }
}

export const deletebook=async(req,res)=>{
   try
   {
     await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "book deleted" });
   }
   catch(err)
   {
    res.json({message:"book not deleted",err});
   }

}