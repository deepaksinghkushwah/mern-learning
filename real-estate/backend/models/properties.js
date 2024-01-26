import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import mongoosePaginate from "mongoose-paginate-v2";

mongoose.plugin(slug);

const table = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    slug: { type: String, slug: ["name"], unique: true },
    images: [Object],
    type: {
        type: String,
        enum: ['buy','rent']
    },
    
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    
    bhk: Number,
    floors: Number,
    plotSize: Number,
    price: Number,
    dealer: {
        name: String,
        contactNumber: String,
        email: String        
    },
    readyToMove: Boolean,
    
    created_at: Date,
    created_by: String,
    updated_at: Date,
    updated_by: String
    
});

table.plugin(mongoosePaginate);

export default mongoose.model("Property", table);