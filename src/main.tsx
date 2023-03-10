import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyProjects from './pages/MyProjects'
import MyBusinesses from './pages/MyBusinesses'
import Connect from './pages/Connect'
import BiGen from './pages/BiGen'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/businesses" element={<MyBusinesses />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/bigen" element={<BiGen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
