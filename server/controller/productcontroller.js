 import Product from "../model/productSchema.js"
export const  getproducts=async (req,res)=>{
    try {
    const products= await Product.find({})
       res.json(products)
    } catch (error) {
        console.log("errror in getproducts api",error);
    }
}

export const  getProductById=async(req,res)=>{

    try {
       const product= await Product.findOne({'id':req.params.id})
       res.json(product);
    } catch (error) {
        console.log('error in getprocuts by id',error);
    }
}