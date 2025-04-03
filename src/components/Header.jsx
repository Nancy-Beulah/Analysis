import React from 'react'
import { Button } from '@mui/material'



const Header = ({ setdialog, setsignupOPen, setloginopen }) => {

    const LoginFunction = () => {
        setdialog(true)
        setsignupOPen(false)
        setloginopen(true)

    }

    const SignupFUnction = () => {
        setdialog(true)
        setsignupOPen(true)
        setloginopen(false)

    }
    return (
        <div style={{ padding: "10px 60px", backgroundColor: "skyblue", alignItems: "center" }} className='d-flex justify-content-between' >
            <div >
                <div className='Humber'>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg></div>
                <div style={{ fontWeight: "bold" }}>School Web App</div>



            </div>
            <div style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "end" }}>
                <div><Button size='small' variant='contained' sx={{ textTransform: "none" }} onClick={LoginFunction}>Login</Button></div>
                <div><Button size='small' variant='contained' sx={{ textTransform: "none", backgroundColor: "red" }} onClick={SignupFUnction}> Sign UP</Button></div>
                <div> "sriram"</div>
            </div>


        </div>
    )
}

export default Header