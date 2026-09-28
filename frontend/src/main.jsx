//for development and testing, highlights issues
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* renders the app 
          npm run dev */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
