import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnapshot = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  notesSnapshot.forEach((snapshotChild) => {
    notes.push({
      id: snapshotChild.id,
      ...snapshotChild.data(),
    });
  });

  console.log(notes);

  return notes;
};
