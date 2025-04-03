import React, { useState } from 'react'
import { Button } from '@mui/material'

const Login = ({ setdialog, setsignupOPen, setloginopen }) => {
    const [loading, setloading] = useState(false)
    const [formData, setformDate] = useState({
        user: "",
        mail: "",
        password: "",

    })
    const [userDetails, setuserDetails] = useState({})

    console.log(userDetails, "usedatail")
    const InputChange = (e) => {
        setformDate({ ...formData, [e.target.name]: e.target.value })

    }
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
            const apires = await reponse.json()
            // console.log(apires)
            setuserDetails(apires)


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

                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }} >
                    <label>User Name</label>
                    <input type='text' name='user' value={formData?.user} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none" }} />

                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
                    <label>Email</label>
                    <input type='email' name='mail' value={formData?.mail} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none" }} />
                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
                    <label>Password</label>
                    <input type='text' name='password' value={formData?.password} onChange={InputChange} required style={{ borderRadius: "6px", border: "1px solid gray", outline: "none" }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button type='submit' size='small' variant='contained' sx={{ background: "", borderRadius: "" }}>Submit</Button>
                    <Button size='small' variant='outlined' sx={{ textTransform: "none" }} onClick={() => { setdialog(false) }}>Close</Button>
                </div>

            </form></>}





        </div>
    )
}

export default Login