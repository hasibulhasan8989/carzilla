import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProviders>
      <App></App>
      <Toaster></Toaster>
    </AuthProviders>
  </StrictMode>
)
