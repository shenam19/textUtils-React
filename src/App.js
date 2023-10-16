import { useState } from "react";
import "./App.css";
// import { Dark } from "./components/Dark";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(function () {
      setAlert(null);
    }, 1500);
  };
  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light Mode");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      handleAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setModeText("Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      handleAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        name="TextUtils"
        aboutText="checking"
        mode={mode}
        toggleMode={handleToggleMode}
        modeText={modeText}
      />

      <TextForm
        heading="Enter the text to analyze below"
        mode={mode}
        handleAlert={handleAlert}
      />
      {/* <BrowserRouter>
        <Navbar
          name="TextUtils"
          aboutText="checking"
          mode={mode}
          toggleMode={handleToggleMode}
          modeText={modeText}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  handleAlert={handleAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
