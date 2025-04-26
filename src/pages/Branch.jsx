import React, { useEffect, useState } from 'react'
import { branches } from '../assests/UIDATA'

const Branch = () => {
    const [reviewData, setReviewData] = useState([])
    // console.log(reviewData)
    useEffect(() => {
        setReviewData(branches)

    }, [])
    return (
        <div style={{ padding: "20px 64px", height: "100%", overflow: "auto" }}>
            <div className="centered-grid-container3">

                {reviewData.map((data, index) => (


                    <div key={index} className='BoxStyling'>

                        <div className='BOX' >
                            <div style={{ display: "flex", }}>
                                <div style={{ width: "50%" }}>
                                    <img src={data.image} alt={data.branchName} style={{ width: "80%" }} />
                                </div>
                                <div className='reviewMappData'>
                                    <div>
                                        {data.branchAdmin}
                                    </div>
                                    <div>
                                        {data.branchName}
                                    </div>
                                    <div>
                                        {data.contact}
                                    </div>
                                    <div>
                                        {data.location}
                                    </div>

                                    <hr style={{ margin: "0" }} />
                                    <div>
                                        {data.additionalInfo}
                                    </div>

                                    {/* <div className='listData'>
                                        {data.skills.map((skill, index) => (
                                            <div key={index} >{skill}</div>
                                        ))}
                                    </div> */}



                                </div>

                            </div>




                        </div>

                    </div>
                ))}



            </div>
        </div>
    )
}

export default Branch