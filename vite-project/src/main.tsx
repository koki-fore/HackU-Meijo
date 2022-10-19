import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ChakraProvider } from "@chakra-ui/react"
import PasswordInput from './components/PasswordInput'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <PasswordInput />
    </ChakraProvider>
  </React.StrictMode>
)
