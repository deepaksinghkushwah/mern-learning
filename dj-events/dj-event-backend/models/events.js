import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import mongoosePaginate from "mongoose-paginate-v2";

mongoose.plugin(slug);


const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    slug: { type: String, slug: ["name"], unique: true },
    event_date: Date,
    event_time: String,
    venue: String,
    address: String,
    performers: String,
    image: String
});
eventSchema.plugin(mongoosePaginate);

export default mongoose.model("Event", eventSchema);