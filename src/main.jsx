import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

document.addEventListener('scroll', function() {
  const textElement = document.querySelector('.Container-description-aboutme');
  const container = document.querySelector('.Container-0');
  const containerPosition = container.getBoundingClientRect();

  if (containerPosition.top < window.innerHeight && containerPosition.bottom > 0) {
      textElement.classList.add('visible');
  }
});