
import { db } from "../firebase/config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function createBooking(eventId, userId) {
  return await addDoc(collection(db, "bookings"), {
    eventId,
    userId,
    paymentStatus: "pending",
    createdAt: new Date()
  });
}
