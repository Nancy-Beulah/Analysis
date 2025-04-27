import React from 'react'
import { Button } from '@mui/material'

const ForgotPassword = ({ setdialog, setsignupOPen, setloginopen, setformDate, InputChange, loading, setloading, formData }) => {

    const SubmitData = async () => {
        setloading(true)
        const data = {
            email: formData.mail,
        }
        console.log(data)
        try {
            const reponse = await fetch("http://localhost:5000/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })
            const apires = await reponse.json()
            const optData = apires.otp
            OTPAPI(optData)
            // console.log(apires)
            // setuserDetails(apires)

        } catch (error) {
            console.log("Internal server error")
            alert(error)

        } finally {
            setloading(false)

        }

    }


    const OTPAPI = async (optres) => {
        setloading(true)
        const data = {
            email: formData.mail,
            otp: optres,
            newPassword: formData.password
        }

        console.log(data)
        try {
            const reponse = await fetch("  http://localhost:5000/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })
            const apires = await reponse.json()
            // console.log(apires)
            // setuserDetails(apires)

        } catch (error) {
            console.log("Internal server error")
            alert(error)

        } finally {
            setloading(false)

        }

    }
    return (
        <div className='Section h-100 w-100 d-flex justify-content-center align-items-center bg-white'>
            {loading ? <><div className='loader'></div></> : <><form onSubmit={SubmitData} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "26px", color: '#2d2dbe', marginBottom: "10px" }}>Login</div>


                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
                    <label>Email</label>
                    <input placeholder='Enter Your Mail ID' type='email' name='mail' value={formData?.mail} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none", padding: "3px 10px" }} />
                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
                    <label>New Password</label>
                    <input placeholder='Enter New Password' type='text' name='password' value={formData?.password} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none", padding: "3px 10px" }} />
                </div>


                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button type='submit' size='small' variant='contained' sx={{ background: "", borderRadius: "" }}>Submit</Button>
                    <Button size='small' variant='outlined' sx={{ textTransform: "none" }} onClick={() => { setdialog(false) }}>Close</Button>
                </div>

            </form></>}





        </div>
    )
}

export default ForgotPassword