import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true
    },
})

const OrderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Cancelled", "Delivered"],
        defaul: "Pending"
    }
},{timestamps:true})

export const Order = mongoose.model("Order", OrderSchema)