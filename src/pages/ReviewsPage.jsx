import React, { useEffect, useState } from 'react'
import { reviews } from '../assests/UIDATA'


const RatingStar = ({ rating }) => {

    return (
        <div>
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < rating ? '⭐' : '☆'}</span>
            ))}
        </div>
    )

}

const ReviewsPage = () => {

    const [reviewData, setReviewData] = useState([])
    console.log(reviewData)
    useEffect(() => {
        setReviewData(reviews)

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
                                        {data.email}
                                    </div>
                                    <div>
                                        {data.summary}
                                    </div>
                                    <hr style={{ margin: "0" }} />
                                    <div>
                                        <RatingStar rating={data.rating} />
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

export default ReviewsPage