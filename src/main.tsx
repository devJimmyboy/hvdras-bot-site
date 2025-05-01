import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'
import { BrowserRouter } from 'react-router'

import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
