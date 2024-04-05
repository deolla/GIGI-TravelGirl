import sendEmail from "./email.js";

const sendFlightBookingConfirmationMessage = async (bookingDetails) => {
  const emailOptions = {
    // from, to, departureTime,arrivalTime, price
    email: bookingDetails.email,
    subject: "Flight Booking Confirmation",
    message: `Hello ${
      bookingDetails.name
    },\n\nYour booking for the flight from ${bookingDetails.from} to ${
      bookingDetails.to
    } has been confirmed.\n\nDeparture date: ${
      bookingDetails.departureTime.split("T")[0]
    } at ${bookingDetails.departureTime.split("T")[1]} \n\nCost: $${
      bookingDetails.price
    }\n\nThank you for choosing our platform for your flight booking.\n\nBest regards,\nThe Travel Team`,
  };

  await sendEmail(emailOptions);
};

export default sendFlightBookingConfirmationMessage;
