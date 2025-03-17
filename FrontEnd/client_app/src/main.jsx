import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutePath from './RoutePath.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutePath/>
  </StrictMode>,
)
