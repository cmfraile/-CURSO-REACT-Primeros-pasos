import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.sass'

function App() {return(<h1>Hola mundo</h1>)}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
