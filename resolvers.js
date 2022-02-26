const User = require('./models/User')
const Booking = require('./models/Booking')
const Listing = require('./models/Listing')

exports.resolvers = {
    Query: {
        //#Task 2: Login API – Pass the username and password to validate the user to allow
        login: async (parent, args) => {
            let checkUser = await User.findOne({ $and: [{ username: args.username }, { password: args.password }] })
            if (checkUser) {
                if (checkUser.type == 'admin') {
                    return { role: 'admin'}
                } else {
                    return { role: 'user' }
                }
            } else {
                throw new Error("Username or Password were invalid, Please enter your username and password again!!")
            }
        },
        //#Task 4: View all listings created by Admin/ Task 8. View all listing added by Admin user (Only when logged in as Admin)
        ViewAllListingsbyAdmin: async (parent, args) => {
            console.log(args)
            let username = await User.findOne({ username: args.username })
            if (args.role == 'admin' && username.type == 'admin') {
                return await Listing.find({})
            } else {
                throw new Error("Only admin can view all listings, Please login as Admin!!")
            }
        },

        //#Task 7. List all User bookings (Only when logged in as User)
        ViewAllBookingsByUser: async (parent, args) => {
            let bookings = []
            let username = await User.findOne({ username: args.username })
            if (args.username) {
                if (args.role == "user" && username.type == 'user') {
                    bookings = await Booking.find({ username: args.username })
                } else {
                    throw new Error("Only User can view all listings, Please login as User!!")
                }
            } 
            return bookings
        },

        //#Task 6. Search listing by • Name • City • Postal code
        searchListingByName: async (parent, args) => {
            return await Listing.find(args)
        },

        searchListingByCity: async (parent, args) => {
            return await Listing.find(args)
        },

        searchListingByPostalCode: async (parent, args) => {
            return await Listing.find(args)
        },
    },
    Mutation: {
        //#Task 01: Create a new User Profile
        createUserbyAdmin: async (parent, args) => {
            console.log(args)
            let username = await User.findOne({ username: args.username })
            if(!username){
                let user = new User(args)
                return user.save()
            }else{
                throw new Error("This Username "+ args.username+ " existed")
            }
        },
        //#Task 3: Create a new listing (Admin) (validate All fields are mandatory)
        createNewListingbyAdmin: async (parent, args) => {
            console.log(args)
            let username = await User.findOne({ username: args.username })
            if (args.role == "admin" && username.type == 'admin') {
                let listing = new Listing(args)
                return listing.save()
            }
            throw new Error("Create a new Listing can do by Admin only, Please enter your role if you are an admin!!")
        },

        //#Task 7. List all User bookings (Only when logged in as User)
        createNewBookingByUser: async (parent, args) => {
            console.log(args)
            let username = await User.findOne({ username: args.username })
            if (args.role == 'user' && username.type == 'user') {
                let booking = new Booking(args)
                return booking.save()
            } else {
                throw new Error("Create a new Booking can do by User only, Please enter your role if you are an admin!!")

            }
        }
    },



}