const Orders = require('../models/orders');
const asyncHandler = require('../middleware/async');
const bcrypt = require('bcrypt');

// 4.Connection to db
console.log('attempting to connect')

const getOrderCount = asyncHandler(async(req,res)=>{
    let totalorder=await Orders.countDocuments();
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let todaysorder=await Orders.countDocuments({orderDate: {$gte: today}});
    let cancelledcount=await Orders.countDocuments({status:'cancelled'});
    res.json({totalorder,todaysorder,cancelledcount});
})

const fetchAllOrders = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults)
})

const updateOrderById = asyncHandler(async (req, res, next) => {

    let orders = await Orders.findByIdAndUpdate({ _id: req.params._id }, { status:req.body.status }, {
        new: true,
        runValidators: true
    })
    console.log(orders)
    if (!orders) throw new Error(`Order id ${req.params._id} not found`)
    res.json({ success: true, data: orders,message:"order details updated successfully" });

})

const addOrder = asyncHandler(async (req, res, next) => {
    //Operatons on model

    let order = await Orders.create(req.body);
    console.log(order);
    res.status(201).json({ success: true, data: order })
})


module.exports = { updateOrderById, fetchAllOrders, addOrder,getOrderCount };