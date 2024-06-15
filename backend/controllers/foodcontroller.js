import foodModel from "../models/foodmodel.js";
import fs from 'fs'

const addfood = async (req,res)=>{
    let image_filname = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filname
    })
    try{
        await food.save();
        res.json({success:true,message:"food added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all food list 

const listfood = async(req,res)=>{
    try{
        const foods =await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//to remove

const removefood = async(req,res)=>{
   try{
    const food =await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"food removed"})
   }
   catch(error){
    console.log(error);
    res.json({success:false,message:"failed to remove"})
   }
}

export {addfood,listfood,removefood}