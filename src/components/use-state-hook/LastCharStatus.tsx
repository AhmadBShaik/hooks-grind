import React from "react";

export const LastCharStatus = () => {
  const [text, setText] = React.useState<string>("");
  const [status, setStatus] = React.useState<
    "one character is inserted" | "one character is removed"
  >();
  const changeText = (text: string) => {
    setText((prevText) => {
      if (prevText.length < text.length) {
        setStatus("one character is inserted");
      } else {
        setStatus("one character is removed");
      }
      return text;
    });
  };

  return (
    <div>
      <div style={{ marginTop: 10 }}>{text}</div>
      <input
        type="text"
        onChange={(e) => {
          changeText(e.target.value);
        }}
        value={text}
      />
      <div>{status}</div>
    </div>
  );
};
