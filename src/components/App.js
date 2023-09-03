import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((num) => (
        <Note key={num.key} title={num.title} content={num.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
