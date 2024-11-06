import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import App from './App.jsx' */

/* my try */
import Header from './components/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 
*/