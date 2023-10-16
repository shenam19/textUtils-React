import React, { useState } from "react";

export const Dark = () => {
  const [myStyle, SetMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [myText, setMyText] = useState("Enable Dark Mode");

  const handleDarkMode = () => {
    if (myStyle.color === "black") {
      SetMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setMyText("Enable White Mode");
    } else {
      SetMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setMyText("Enable Black Mode");
    }
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt
          saepe suscipit veniam similique aspernatur minus id numquam,
          blanditiis delectus?
        </p>
      </div>
      <button className="btn btn-success" onClick={handleDarkMode}>
        {myText}
      </button>
    </>
  );
};
