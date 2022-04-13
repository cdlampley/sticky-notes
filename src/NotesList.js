import React from "react";
import Note from "./Note";

/*In the NotesList component, pass a note object in the notes array to each Note component by mapping over props.notes. As you map over this array, render a Note component for each object in the notes array that is passed to the NotesList component.*/

const NotesList = (props) => {
  /*Use the .filter() method to remove any objects from the notes array that have a doesMatchSearch value of false.*/
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note removeNote={props.removeNote} onType={props.onType} note={note} />
  );
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
