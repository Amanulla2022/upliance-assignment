import React from "react";

function TextEditor({ user }) {
  const applyStyle = (style) => {
    document.execCommand(style, false, null);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="form-h1">Text Editor</h1>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={() => applyStyle("bold")}
          className="texteditor-btn"
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => applyStyle("italic")}
          className="texteditor-btn"
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => applyStyle("underline")}
          className="texteditor-btn"
        >
          Underline
        </button>
      </div>
      <div
        contentEditable="true"
        className="mt-4 w-full min-h-10 p-2 border-2 relative"
      >
        <p>UID: {user.uid}</p>
        <p>Name: {user.name}</p>
        <p>Address: {user.address}</p>
        <p>Email: {user.email}</p>
        <p>Phone No: {user.phoneNo}</p>
      </div>
    </div>
  );
}

export default TextEditor;
