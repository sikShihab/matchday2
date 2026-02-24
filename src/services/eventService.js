
import { db } from "../firebase/config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function createEvent(data, adminUid) {
  return await addDoc(collection(db, "events"), {
    ...data,
    createdBy: adminUid,
    status: "active",
    createdAt: new Date()
  });
}

export async function getEvents() {
  const snapshot = await getDocs(collection(db, "events"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
