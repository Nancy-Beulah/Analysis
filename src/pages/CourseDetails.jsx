import React, { useEffect, useState } from 'react'
import { info } from '../assests/UIDATA';

const CourseDetails = () => {

    const [couseDatafetch, setcourseDatafetch] = useState([])
    const GetCourseData = async () => {
        const url = "http://localhost:5000/api/courseData/courses";

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                console.log(data)

                setcourseDatafetch(data);

            } else {
                throw new Error(`HTTP error! Status: ${data.status}`);
            }


        } catch (error) {
            console.error("Failed to fetch course data:", error);
            return null;
        }
    };
    useEffect(() => {
        GetCourseData()
        sessionStorage.setItem("Role", "Admin")
        const getdata = sessionStorage.getItem("Role")
        console.log(getdata)

    }, [])


    return (
        <div style={{ padding: "20px 64px" }}>
            <div className="centered-grid-container2">

                {couseDatafetch.map((data, index) => (


                    <div key={index}>

                        <div className='BOX'


                        >
                            <div className='boxTItle'>
                                {data.name}
                            </div>
                            <div className='boxsummary'>
                                {data.summary}
                            </div>
                            <hr />
                            <div style={{ display: 'flex', flexDirection: "column", gap: '12px' }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div> {data?.feeStructure?.duration}</div>
                                    <div> {data?.feeStructure?.totalFee}</div>

                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div> {data?.feeStructure?.discount}</div>
                                </div>

                            </div>

                        </div>

                    </div>
                ))}

                {/*
                <ul>
                    {Object.entries(info).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul> */}







            </div>

        </div>
    )
}

export default CourseDetails