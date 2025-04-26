import React from 'react'

const Footer = () => {
    return (
        <div style={{ background: "black", padding: "10px 60px", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }} >

                <div>
                    CopyRights {new Date().getFullYear()} @ School Web App All rights reserved

                </div>
                <div>
                    Terms & Conditions


                </div>
            </div>
        </div>
    )
}

export default Footer