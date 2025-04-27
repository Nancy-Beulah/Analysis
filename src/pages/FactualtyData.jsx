import React, { useEffect, useState } from 'react'
import { faculty } from '../assests/UIDATA'

const FactualtyData = () => {

    const [reviewData, setReviewData] = useState([])
    // console.log(reviewData)
    useEffect(() => {
        setReviewData(faculty)

    }, [])
    return (
        <div style={{ padding: "20px 64px", height: "100%", overflow: "auto" }}>
            <div className="centered-grid-container3">

                {reviewData.map((data, index) => (


                    <div key={index} className='BoxStyling'>

                        <div className='BOX' >
                            <div style={{ display: "flex", }}>
                                <div style={{ width: "50%" }}>
                                    <img src={data.photo} alt={data.email} style={{ width: "80%" }} />
                                </div>
                                <div className='reviewMappData'>
                                    <div>
                                        {data.name}
                                    </div>
                                    <div>
                                        {data.phone}
                                    </div>
                                    <div>
                                        {data.description}
                                    </div>
                                    <hr style={{ margin: "0" }} />

                                    <div className='listData'>
                                        {data.skills.map((skill, index) => (
                                            <div key={index} >{skill}</div>
                                        ))}
                                    </div>



                                </div>

                            </div>




                        </div>

                    </div>
                ))}



            </div>
        </div>
    )
}

export default FactualtyData