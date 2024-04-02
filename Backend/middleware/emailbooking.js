import sendEmail from "./email.js";

const sendHotelBookingConfirmationMessage = async (bookingDetails) => {
    const emailOptions = {
        email: bookingDetails.email,
        subject: "Hotel Booking Confirmation",
        message: `Hello ${bookingDetails.name},\n\nYour booking for the hotel ${bookingDetails.hotelName} has been confirmed.\n\nCheck-in date: ${bookingDetails.checkinDate}\nCheck-out date: ${bookingDetails.checkoutDate}\n\nTotal price: ${bookingDetails.totalPrice}\n\nThank you for choosing our platform for your hotel booking.\n\nBest regards,\nThe Travel Team`
    };

    await sendEmail(emailOptions);
}

const sendFlightBookingConfirmationMessage = async (bookingDetails) => {
    const emailOptions = {
        email: bookingDetails.email,
        subject: "Flight Booking Confirmation",
        message: `Hello ${bookingDetails.name},\n\nYour booking for the flight ${bookingDetails.flightNumber} has been confirmed.\n\nDeparture date: ${bookingDetails.departureDate}\n\nClass: ${bookingDetails.seatClass}\n\nThank you for choosing our platform for your flight booking.\n\nBest regards,\nThe Travel Team`
    };

    await sendEmail(emailOptions);
}


export default { sendHotelBookingConfirmationMessage, sendFlightBookingConfirmationMessage }

