import {v2 as cloudinary } from "cloudinary"
//function for adding product

import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {

    // console.log("BODY:", req.body);      // this should now show description, name, etc.
    // console.log("FILES:", req.files);    // this should show uploaded images

try {

    const{ name, description , category, subCategory, price, bestseller, sizes} = req.body
//if the image is present then we will get the image and store  it in the respective image variable
    const image1 =req.files.image1 && req.files.image1[0]
    const image2 =req.files.image2 && req.files.image2[0]
    const image3 =req.files.image3 && req.files.image3[0]
    const image4 =req.files.image4 && req.files.image4[0]

// const image1 = req.files.image1 ? req.files.image1[0] : null;
// const image2 = req.files.image2 ? req.files.image2[0] : null;
// const image3 = req.files.image3 ? req.files.image3[0] : null;
// const image4 = req.files.image4 ? req.files.image4[0] : null;

    const images = [image1,image2, image3, image4].filter((item)=>item !== undefined)

    let imagesUrl = await Promise.all(
       images.map(async(item)=>{
           let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
              return result.secure_url
       })
    )


// to save these data in mongodb database
 const productData= {
    name,
    description,
    category,
    subCategory,
    price: Number(price),
    bestseller: bestseller === "true" ? true : false,
    sizes: JSON.parse(sizes),
    image: imagesUrl,
    date: Date.now()
 }

 console.log(productData);
 
 const product = new productModel(productData);
 await product.save()
 
    res.json({ success:true, message:"Product Added"})
    
} catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})

// console.log("BODY:", req.body);      // this should now show description, name, etc.
// console.log("FILES:", req.files);    // this should show uploaded images

}

};

//function for list product

const listProducts = async (req, res) => {
  try {

    const products = await productModel.find({});
    res.json({success:true, products})



  } catch (error) {
       console.log(error)
    res.json({success:false, message:error.message})
  }



};

//function for removing product

const removeProduct = async (req, res) => {

try {
    
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true , message: "Product Removed"})

} catch (error) {
     console.log(error)
    res.json({success:false, message:error.message}) 
}

};

//function for single product info
const singleProduct = async (req, res) => {

    try {

        const{ productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})
        
    } catch (error) {
         console.log(error)
    res.json({success:false, message:error.message}) 
    }


};

export { listProducts, addProduct, removeProduct, singleProduct };


