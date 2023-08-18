import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import 'font-awesome/css/font-awesome.css' 
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)