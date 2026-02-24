
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.newBookingNotification = functions.firestore
  .document("bookings/{bookingId}")
  .onCreate(async (snap, context) => {
    const payload = {
      notification: {
        title: "New Booking Alert",
        body: "A new booking has been made!"
      }
    };
    return admin.messaging().sendToTopic("admins", payload);
  });
