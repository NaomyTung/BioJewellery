// Author: Sri
// Description: Address controller logic
// Version 1.1
// Date: 30/03/2023

const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Address = require('../models/addressModel')

// @desc    Get the address based on user id
// @route   GET /api/address/:userId
// @access  Private
const getAddress = asyncHandler(async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            res.status(400)
            throw new Error('Prob with userId in req body');
        }

        //finiding user object
        const user = await User.findById({ '_id': userId });
        if (!user) {
            res.status(400)
            throw new Error('It is not fetching user data from DB');
        }

        //finiding address object
        const address = await Address.findById({ '_id': user.shippingAddress._id });

        if (!address) {
            res.status(400)
            throw new Error(' It is not fetching address data from DB');
        }

        res.status(200).json({ address });

    }

    catch (error) {
        res.status(400)
        throw new Error(error);
    }

})



// @desc    update a posted review 
// @route   PUT /api/address/:userId
// @access  Private
const updateAddress = asyncHandler(async (req, res) => {
    try {

        //receiving address fields 
        const { street, city, province, country, postalCode } = req.body

        //finding the address that needs to be updated
        //finiding user object
        const { userId } = req.params;
        const user = await User.findById({ '_id': req.body.userId });

        //finiding address object
        const address = await Address.findById({ _id: user.shippingAddress });

        //throw error if no address exists by that id
        if (!address) {
            res.status(400)
            throw new Error('Sorry, address not found')
        }

        //set the address fields to the new values or by default the existing value
        if (street) {
            address.street = street ?? address.street
        }
        if (city) {
            address.city = city ?? address.city
        }
        if (province) {
            address.province = province ?? address.province
        }
        if (country) {
            address.country = country ?? address.country
        }
        if (postalCode) {
            address.postalCode = postalCode ?? address.postalCode
        }

        //save updated address to database
        await address.save()

        res.status(200).json(address);

    } catch (error) {
        res.status(400)
        throw new Error(error);
    }
})

module.exports = {
    getAddress,
    updateAddress
}