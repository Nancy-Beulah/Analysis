import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Landing from './Landing'
import Admin from './Admin'
import User from './User'
import CourseDetails from './CourseDetails'
import Reviews from './ReviewsData'
import ReviewsPage from './ReviewsPage'
import FactualtyData from './FactualtyData'
import Branch from './Branch'


const Dashboard = () => {
    return (
        <div style={{ height: "100%" }}>

            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/user' element={<User />} />
                <Route path='/coursedatails' element={<CourseDetails />} />
                <Route path='/reviewdatails' element={<ReviewsPage />} />
                <Route path='/factultydatails' element={<FactualtyData />} />
                <Route path='/branchdatails' element={<Branch />} />


            </Routes>



        </div>
    )
}

export default Dashboard