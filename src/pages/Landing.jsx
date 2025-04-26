import React, { useContext, useEffect } from 'react'




import "../stylings/landing.css"
import { CardData } from '../assests/UIDATA'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CustomProps } from '../components/CustomProps'
const Landing = () => {
    const { setuserDetails
    } = useContext(CustomProps)
    const navigate = useNavigate()
    const navigateHandle = (data) => {
        navigate(data.route)
        // navigate(data.route)
    }
    // useEffect(() => {

    //     setuserDetails({})

    // }, [])

    return (
        <div className='LandingMinBOx'>
            <div className='landBanner'>
                <div className='TextMOTStyle'>
                    Success is the sum of small efforts, repeated day in and day out.

                </div>

            </div>
            <div className="centered-grid-container">

                {CardData.map((data, index) => (


                    <div key={index}>

                        <div className='BOX'


                        >
                            <div className='boxTItle'>
                                {data.title}
                            </div>
                            <div className='boxsummary'>
                                {data.summary}
                            </div>
                            <hr />
                            <Button variant='outlined' size='small' onClick={() => navigateHandle(data)}>Read More</Button>

                        </div>

                    </div>
                ))}



            </div>




        </div>
    )
}

export default Landing