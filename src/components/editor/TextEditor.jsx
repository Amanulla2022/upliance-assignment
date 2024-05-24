import React from "react";

function TextEditor({ onChange }) {
  const applyStyle = (style) => {
    document.execCommand(style, false, null);
  };

  const handleInputChange = (e) => {
    onChange(e.currentTarget.textContent);
  };
  return (
    <div className="flex flex-col items-center">
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
        onInput={handleInputChange}
      ></div>
    </div>
  );
}

export default TextEditor;
