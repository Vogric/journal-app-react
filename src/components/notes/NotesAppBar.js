import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className="notes__app-bar">
      <span>30 December 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
