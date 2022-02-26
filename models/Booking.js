const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_date: {
        type: Date, 
        required: [true,"Please enter date"],
        default: Date.now
    },
    booking_start: {
        type: Date, 
        required: [true,"Please enter booking_start"],
        trim: true,
        lowercase: true
    },
    booking_end: {
        type: Date, 
        required: [true,"Please enter booking_end"],
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        required: [true,"Please enter username"],
        trim: true,
        lowercase: true
    },
});

const Booking = mongoose.model("Bookings", BookingSchema);
module.exports = Booking;