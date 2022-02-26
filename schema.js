const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    scalar Date
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }
    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }
    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: Date!
        booking_start: Date!
        booking_end: Date!
        username: String!
    }
    type Auth  {
        role: String
    }
    type Query {
        login(username: String!, password: String!) : Auth
        ViewAllBookingsByUser(username: String, role: String!) : [Booking]
        ViewAllListingsbyAdmin(username: String,role: String!) : [Listing]
        searchListingByName(listing_title: String!) : [Listing]
        searchListingByCity(city: String!) : [Listing]
        searchListingByPostalCode(postal_code: String!) : [Listing]
    }
    type Mutation {
        createUserbyAdmin(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ) : User
        createNewListingbyAdmin(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
            role: String!
        ) : Listing
        createNewBookingByUser(
            listing_id: String!
            booking_id: String!
            booking_start: Date!
            booking_end: Date!
            username: String!
            role: String!
        ) : Booking
    }
`