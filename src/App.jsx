import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <SideBar />
                <Routes>
                    <Route path="/:id" element={<Dashboard />} />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

export default App
