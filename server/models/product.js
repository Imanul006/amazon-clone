const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    catagory: { type: Schema.Types.ObjectId, ref: 'Catagory' },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    rating: [Number]    
})

module.exports = mongoose.model("Product", ProductSchema)