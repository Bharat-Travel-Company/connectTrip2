import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-5BPH48RC', // Replace with your GTM ID
}

TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
