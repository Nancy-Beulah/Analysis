import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { Dialog } from "@mui/material";

const App = () => {
  const [dialogopen, setdialog] = useState(false);
  const [signupOpen, setsignupOPen] = useState(true);
  const [loginopen, setloginopen] = useState(false);

  return (
    <div
      style={{
        height: "100%",

        // gap: "24px",
        // padding: "10px 60px",
      }}
      className=""
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div>
          <Header
            setdialog={setdialog}
            setsignupOPen={setsignupOPen}
            setloginopen={setloginopen}
          />
        </div>
        <div style={{ flex: "1", height: "100%" }}>
          <Dashboard />
        </div>
        <div>
          <Footer />
        </div>
      </div>

      <Dialog
        open={dialogopen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ padding: "20px" }}>
          {loginopen && (
            <>
              {" "}
              <Login
                setdialog={setdialog}
                setsignupOPen={setsignupOPen}
                setloginopen={setloginopen}
              />
            </>
          )}

          {signupOpen && (
            <>
              <Signup
                setdialog={setdialog}
                setsignupOPen={setsignupOPen}
                setloginopen={setloginopen}
              />
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default App;
