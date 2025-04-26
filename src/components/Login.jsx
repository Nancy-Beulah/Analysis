import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Login = ({ setdialog, setsignupOPen, userDetails, setloginopen, setforgotpasword, setuserDetails }) => {
    const nav = useNavigate()
    const [loading, setloading] = useState(false)
    const [formData, setformDate] = useState({
        user: "",
        mail: "",
        password: "",

    })
    const [captcha, setCaptcha] = useState("");

    const InputChange = (e) => {
        setformDate({ ...formData, [e.target.name]: e.target.value })

    }


    const generateCaptchaCode = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        console.log(result);
        setCaptcha(result);
    };

    useEffect(() => {
        generateCaptchaCode()

    }, [])



    // const Get = () => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const requestOptions = {
    //         method: "GET",
    //         headers: myHeaders,
    //         redirect: "follow"
    //     };

    //     fetch("http://localhost:5000/api/auth/forgot-password?email=dfghjkl;'", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => {
    //             console.log(result); if (result === "msg") { setdialog(result.msg) } else {
    //                 console("MSg KEY is missing")
    //                 alert("MSg KEY is missing")
    //             }
    //         })
    //         .catch((error) => console.error(error));
    // }


    const SubmitData = async (e) => {
        e.preventDefault();

        setloading(true)
        // await new Promise(resolve => setTimeout(resolve, 10000))
        const data = {
            user: formData.user,
            mail: formData.mail,
            password: formData.password
        }
        console.log(data)



        try {
            const reponse = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })
            if (reponse.ok) {
                const apires = await reponse.json();
                console.log(apires)
                setuserDetails(apires);
                sessionStorage.setItem("loginDetails", JSON.stringify(apires));
                toast.success("Login success");
                setloginopen(false)
                setdialog(false)
                if (apires.user.role === "admin") {
                    nav("/admin")
                } else {
                    nav("/user")
                }
            } else {
                const errorData = await reponse.json(); // Parse error response
                toast.error(errorData.msg || "Login failed");
            }

            // console.log(apires)

            // if (apires === "otp") { } else {
            //     console("MSg KEY is missing")
            //     alert("MSg KEY is missing")
            // }
            // // console.log(apires)



        } catch (error) {
            console.log("Internal server error")
            toast.error("It's not you,Please try again")

        } finally {
            setloading(false)

        }
    }

    const handleForgetPAssword = () => {
        setloginopen(false)
        setsignupOPen(false)
        setforgotpasword(true)
    }
    const handleValidate = () => {
        SubmitData()

        // if (formData.captchValid === captcha) {
        //     console.log("ok captch validate")
        //     SubmitData()
        // } else {
        //     console.log("Captch not valid")
        // }

    }
    return (
        <div className='Section h-100 w-100 d-flex justify-content-center align-items-center bg-white'>

            <ToastContainer />
            {loading ? <><div className='loader'></div></> : <><form onSubmit={SubmitData} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "26px", color: '#2d2dbe', marginBottom: "10px" }}>Login</div>

                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }} >
                    <label>User Name</label>
                    <input type='text' name='user' value={formData?.user} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none", padding: "10px 4px" }} />

                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
                    <label>Email</label>
                    <input type='email' name='mail' value={formData?.mail} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none" }} />
                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
                    <label>Password</label>
                    <input type='text' name='password' value={formData?.password} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none" }} />
                </div>
                <div style={{ textAlign: "center" }}>
                    <label size='small' variant='text' style={{ textDecorationLine: "underline", color: "red", textAlign: "center", cursor: "pointer" }} onClick={handleForgetPAssword}> Forget Password</label>
                </div>
                {/* {captcha} */}


                {/* <input type='text' value={formData?.captchValid} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none" }} /> */}

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button type='submit' size='small' variant='contained' sx={{ background: "", borderRadius: "" }} >Submit</Button>
                    <Button size='small' variant='outlined' sx={{ textTransform: "none" }} onClick={() => { setdialog(false) }}>Close</Button>

                </div>

            </form></>}

            {/* <Button size='small' variant='contained' sx={{ background: "", borderRadius: "" }} onClick={handleValidate()}>Captch Valid</Button> */}





        </div>
    )
}

export default Login