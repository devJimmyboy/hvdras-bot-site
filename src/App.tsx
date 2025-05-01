import { Container } from '@mantine/core'
import { Route, Routes } from 'react-router'
import HomePage from './routes/HomePage'
import CommandsPage from './routes/CommandsPage'

const linkToCommands = 'https://raw.githubusercontent.com/devJimmyboy/hvdras-bot-site/refs/heads/master/commands.json'

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/commands" element={<CommandsPage />} />
      </Routes>
    </Container>
  )
}

export default App
