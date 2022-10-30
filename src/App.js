import "./App.css";
import "./base.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, changeTheme] = useState("light");
  const [alert, updateAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");
  const [colTheme, setColTheme] = useState(null);

  const setAlert = (message, type) => {
    updateAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      updateAlert(null);
    }, 2000);
  };

  const setTheme = (bgColor, color) => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = "white";
    setBtnColor(color);
    setColTheme(color);
    setAlert("The theme has been set.", "success");
  };

  const toggleTheme = () => {
    // setInterval(() => {
    //   document.title = "TextUtil is amazing!";
    // }, 1000);
    // setInterval(() => {
    //   document.title = "Install TextUtils now.";
    // }, 2000);

    if (theme === "light") {
      changeTheme("dark");
      document.body.style.backgroundColor = "rgb(45, 45, 45)";
      document.body.style.color = "white";
      setBtnColor("primary");
      setColTheme(null);
      setAlert("Dark mode is enabled.", "success");
    } else {
      changeTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBtnColor("primary");
      setColTheme(null);
      setAlert("Light mode is enabled.", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          theme={theme}
          colTheme={colTheme}
          setTheme={setTheme}
          toggleTheme={toggleTheme}
        />
        <Alert alert={ alert } />
        <Routes>
          <Route exact path="/about" element={ <About colTheme={ colTheme } theme={ theme } /> } />
          <Route
            exact path="/"
            element={
              <TextForm
                heading="Enter the text to analyse!"
                colTheme={colTheme}
                setAlert={setAlert}
                btnColor={btnColor}
                theme={theme}
                rows={6}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
