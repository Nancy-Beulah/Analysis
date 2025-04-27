import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material'
import { CustomProps } from './CustomProps'



const Header = () => {
    const { setdialog, setsignupOPen, setloginopen, setforgotpasword,
        dataUser, setAuthdetails,
        Authdetails, userDetails
    } = useContext(CustomProps)




    const LoginFunction = () => {
        setdialog(true)
        setsignupOPen(false)
        setloginopen(true)
        setforgotpasword(false)

    }

    const SignupFUnction = () => {
        setdialog(true)
        setsignupOPen(true)
        setloginopen(false)
        setforgotpasword(false)

    }
    // useEffect(() => {
    //     const storedData = sessionStorage?.getItem("loginDetails");
    //     const checkingData = storedData ? JSON.parse(storedData) : null;
    //     console.log(checkingData.name)

    // }, [userDetails])
    return (
        <div style={{ padding: "10px 60px", backgroundColor: "skyblue", alignItems: "center" }} className='d-flex justify-content-between' >
            <div >
                {/* <div className='Humber'> </div> */}
                <div style={{ fontWeight: "bold" }}>School Web App  </div>



            </div>
            {userDetails.length > 0 ? (<>
            </>) : (<>
                <div style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "end" }}>
                    <div><Button size='small' variant='contained' sx={{ textTransform: "none" }} onClick={LoginFunction}>Login</Button></div>
                    <div><Button size='small' variant='contained' sx={{ textTransform: "none", backgroundColor: "red" }} onClick={SignupFUnction}> Sign UP</Button></div>
                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", height: "30px", width: "30px", background: "white", marginLeft: "10px" }}>

                </div> */}
                    {/* {dataUser && (<>  <div className='boxHOver'>
                    <div style={{}}>
                        <div>
                            <label>User :</label>
                            <div>{ }</div>


                        </div>
                        <div>
                            <label>Role :</label>
                            <div>{ }</div>

                        </div>
                        <div>
                            <label>Logout</label>
                            <div>

                            </div>

                        </div>
                    </div>

                </div></>)} */}

                </div>
            </>)}



        </div>
    )
}

export default Header