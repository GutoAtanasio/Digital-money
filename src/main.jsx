import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from './pages/DashboardPage.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <ThemeProvider>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<h1>404 - PAGE NOT FOUND</h1>} />
      </Routes>
    </ThemeProvider>
      
    </BrowserRouter>
  </StrictMode>,
)
