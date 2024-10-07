const Product = require('../Models/ProductModel');

exports.newProduct = async(req,res)=>{

    try {
        const newProducts = new Product(req.body);
        const savedProduct = await newProducts.save();
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            product: savedProduct,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getAllProduct = async(req, res)=>{

    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getSingleProduct = async(req, res)=>{

    try {
        const products = await Product.findById(req.params.id);
        res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.deleteProduct = async(req, res)=>{

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
          
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
