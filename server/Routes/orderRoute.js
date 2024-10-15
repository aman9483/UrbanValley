const express = require("express");
const { createOrder, getSingleOrder, getAllOrders, updateOrderStatus, deleteOrder } = require("../Controllers/orderController");
const catchAsyncErrors = require("../Middleware/catchAsync");
const authMiddleware = require('../Middleware/AuthMiddleware'); 


const router = express.Router();


router.post("/order/new", authMiddleware, catchAsyncErrors(createOrder));


router.get("/order/:id", catchAsyncErrors(getSingleOrder));


router.get("/admin/orders", catchAsyncErrors(getAllOrders));


router.put("/admin/order/:id", catchAsyncErrors(updateOrderStatus));


router.delete("/admin/order/:id", catchAsyncErrors(deleteOrder));

module.exports = router;
