import React, { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { Dialog } from "@mui/material";
import ForgotPassword from "./components/ForgotPassword";
import { CustomProps } from "./components/CustomProps";

const App = () => {
  const [dialogopen, setdialog] = useState(false);
  const [signupOpen, setsignupOPen] = useState(false);
  const [loginopen, setloginopen] = useState(false);
  const [forgotpassword, setforgotpasword] = useState(false);
  const [loading, setloading] = useState(false);
  const [userDetails, setuserDetails] = useState({});
  const [dataUser, setdataUser] = useState(false);
  const [Authdetails, setAuthdetails] = useState([]);
  console.log(userDetails);
  const [formData, setformDate] = useState({
    user: "",
    mail: "",
    password: "",
    confirmpassword: "",
    captchValid: "",
  });

  const InputChange = (e) => {
    setformDate({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ height: "100%" }}>
      <CustomProps.Provider
        value={{
          setdialog,
          dialogopen,
          signupOpen,
          setsignupOPen,
          loginopen,
          setloginopen,
          forgotpassword,
          setforgotpasword,
          loading,
          setloading,
          userDetails,
          setuserDetails,
          dataUser,
          setdataUser,
          setAuthdetails,
          Authdetails,
        }}
      >
        <div
          style={{
            height: "100%",
            // gap: "24px",
            // padding: "10px 60px",
          }}
          className=""
        >
          <div style={{ height: "100%" }}>
            <div style={{ display: "flex", gap: "", height: "100%" }}>
              {userDetails.length > 0 ? (
                <>
                  {" "}
                  <div
                    style={{
                      background: "gray",
                      padding: "10px",
                      width: "200px",
                    }}
                  >
                    hi
                  </div>
                </>
              ) : (
                <></>
              )}

              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div>
                    <Header
                    // setdialog={setdialog}
                    // setsignupOPen={setsignupOPen}
                    // setloginopen={setloginopen}
                    // setforgotpasword={setforgotpasword}
                    // setdataUser={setdataUser}
                    // dataUser={dataUser}
                    />
                  </div>
                  <div style={{ flex: "1", height: "90%" }}>
                    <Dashboard />
                  </div>
                  <div>
                    <Footer />
                  </div>
                </div>
              </div>
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
                    setforgotpasword={setforgotpasword}
                    setformDate={setformDate}
                    InputChange={InputChange}
                    loading={loading}
                    setloading={setloading}
                    setuserDetails={setuserDetails}
                    userDetails={userDetails}
                  />
                </>
              )}

              {signupOpen && (
                <>
                  <Signup
                    setdialog={setdialog}
                    setsignupOPen={setsignupOPen}
                    setloginopen={setloginopen}
                    setformDate={setformDate}
                    InputChange={InputChange}
                    loading={loading}
                    setloading={setloading}
                    formData={formData}
                    setforgotpasword={setforgotpasword}
                  />
                </>
              )}

              {forgotpassword && (
                <>
                  <ForgotPassword
                    setdialog={setdialog}
                    setsignupOPen={setsignupOPen}
                    setloginopen={setloginopen}
                    setformDate={setformDate}
                    InputChange={InputChange}
                    loading={loading}
                    setloading={setloading}
                    formData={formData}
                  />
                </>
              )}
            </div>
          </Dialog>
        </div>
      </CustomProps.Provider>
    </div>
  );
};

export default App;
