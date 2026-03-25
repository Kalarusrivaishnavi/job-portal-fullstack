const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    location:{
        type: String
    },
    salary:{
        type: Number,
    },
    postedAt:{
        type: Date,
        default: Date.now
    }
});
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
