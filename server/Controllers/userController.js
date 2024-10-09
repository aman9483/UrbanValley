const User = require('../Models/UserModel');

exports.newUser = async(req,res)=>{

    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            product: savedUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getAllUser = async(req, res)=>{

    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getSingleUser = async(req, res)=>{

    try {
        const users = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.deleteUser = async(req, res)=>{

    try {
        await User.findByIdAndDelete(req.params.id);
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
