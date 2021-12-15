import React, { useState } from "react";
import { render } from "react-dom";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("input ----> ", input);
    setCode(input);
  };

  return (
    <div>
      <textarea
        style={{ minWidth: "251px", minHeight: "120px", outline: "none" }}
        value={input}
        onChange={handleChange}
      />
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

render(<App />, document.getElementById("root"));
