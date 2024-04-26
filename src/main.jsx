import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import IndividualCard from './components/IndividualCard.jsx'
import Dashboard from './components/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/product" element={<App />} />
      <Route path="/product/:id" element={<IndividualCard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  
)
