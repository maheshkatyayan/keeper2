import React from "react";

function Note(probs) {
  return (
    <div className="note">
      <h2>{probs.title}</h2>
      <p>{probs.content}</p>
    </div>
  );
}

export default Note;
