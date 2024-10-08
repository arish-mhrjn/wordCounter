import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  // };
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add(`bg-${cls}`);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="A"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter, Character Counter, Remove extra Spaces"
                mode={mode}
              ></TextForm>
            }
          />
          ,
          <Route path="/about" element={<About mode={mode}></About>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
