const {StatusCodes} = require('http-status-codes');
const {BookingService} = require('../services');
const {ErrorResponse,SuccessResponse} = require('../utils/common');

async function createBooking(req,res) {
    try {
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noofSeats: req.body.noofSeats
        });
        SuccessResponse.data=response;
        return res 
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error=error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}


async function makePayment(req,res) {
    try {
        const response = await BookingService.makePayment({
            totalCost:req.body.totalCost,
            userId: req.body.userId,
            bookingId: req.body.bookingId
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
            ErrorResponse.error = error;
            return res
                    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createBooking,
    makePayment
}