import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminIndex from './AdminIndex'
import Login from './Login'


export default function Main() {

    return (
        <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/index/*" element={<AdminIndex />} />
            </Routes>
        </Router>
        </div>
        
    )
}
