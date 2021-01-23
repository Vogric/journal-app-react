import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadNotes } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.notes);

  const handlePictureSave = () => {
    document.querySelector("#file").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadNotes(file));
    }
  };

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className="notes__app-bar">
      <span>30 December 2020</span>
      <div>
        <input
          onChange={handleFileChange}
          type="file"
          name="file"
          id="file"
          style={{ display: "none" }}
        />
        <button onClick={handlePictureSave} className="btn">
          Picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
