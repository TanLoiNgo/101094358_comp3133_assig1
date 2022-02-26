const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    listing_title: {
        type: String,
        required: [true,"Please enter listing tittle"],
        trim: true,
        lowercase: true
    },
    description: {
        type: String, 
        required: [true,"Please enter description"],
        maxLength: 1000,
        lowercase: true
    },
    street: {
        type: String,
        required: [true,"Please enter Street"],
        trim: true,
        lowercase: true
    },
    city: {
        type: String,
        required: [true,"Please enter City"],
        trim: true,
        lowercase: true
    },
    postal_code: {
        type: String,
        required: [true,"Please enter Postal code"],
        trim: true,
        lowercase: true
    },
    price: {
        type: Number, 
        required: [true,"Please enter Price"],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true,"Please enter description"],
        trim: true,
        lowercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    username: {
        type: String,
        required: [true, 'Please enter username name'],
        trim: true,
        lowercase: true
    },
});

const Listing = mongoose.model("Listings", ListingSchema);
module.exports = Listing;