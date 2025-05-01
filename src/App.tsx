import { Container } from '@mantine/core'
import { Route, Routes } from 'react-router'
import HomePage from './routes/HomePage'
import CommandsPage from './routes/CommandsPage'
import AppLayout from './components/AppLayout'

const linkToCommands = 'https://raw.githubusercontent.com/devJimmyboy/hvdras-bot-site/refs/heads/master/commands.json'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/commands" element={<CommandsPage />} />
      </Route>
    </Routes>
  )
}

export default App
