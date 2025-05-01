import { Box, Container, NavLink, ScrollArea, Space } from '@mantine/core'
import { Outlet, useLocation } from 'react-router'

type Props = {}

//https://cdn.7tv.app/emote/01FJAV4EJG000FZHS49NWQRPND/1x.avif
export default function AppLayout({}: Props) {
  const location = useLocation()
  return (
    <div className="flex flex-col h-screen">
      <Box className="flex flex-row gap-4  items-center p-4 sticky top-0 z-10 " style={{ backgroundColor: 'var(--mantine-color-dark-6)', height: '5vh', minHeight: '80px' }}>
        <img src="https://cdn.7tv.app/emote/01G7HBWGZ8000DJJQKZ99T0A2Y/2x.gif" alt="Logo" className="w-12 h-12 rounded-lg drop-shadow-lg drop-shadow-black/60" />
        <h1 className="text-2xl font-bold text-shadow-md text-shadow-black">Hvdras Bot</h1>
        <Space />
        <Box className="flex flex-row gap-4 w-80">
          <NavLink
            href="/"
            className="text-lg rounded-lg"
            active={location.pathname === '/'}
            label="Home"
            leftSection={<img className="hidden md:inline-block" src="https://cdn.7tv.app/emote/01GQS0ES780009VDYS78D30Z8Z/1x.png" />}></NavLink>
          <NavLink
            href="/commands"
            className="text-lg rounded-lg"
            active={location.pathname === '/commands'}
            label="Commands"
            leftSection={<img className="hidden md:inline-block" src="https://cdn.7tv.app/emote/01FJAV4EJG000FZHS49NWQRPND/1x.gif" />}></NavLink>
        </Box>
      </Box>
      <Box className="flex-grow overflow-hidden">
        {/* <Stack className="flex flex-col gap-0 pt-2 max-w-64 w-1/8 fixed top-20 z-10" style={{ backgroundColor: 'var(--mantine-color-dark-7)', height: '95vh' }}>
          <NavLink href="/" className="text-lg" active={location.pathname === '/'} label="Home" leftSection={<img src="https://cdn.7tv.app/emote/01GQS0ES780009VDYS78D30Z8Z/1x.avif" />}></NavLink>
          <NavLink
            href="/commands"
            className="text-lg "
            active={location.pathname === '/commands'}
            label="Commands"
            leftSection={<img src="https://cdn.7tv.app/emote/01FJAV4EJG000FZHS49NWQRPND/1x.avif" />}></NavLink>
        </Stack> */}
        <ScrollArea style={{ backgroundColor: 'var(--mantine-color-dark-8)', height: '100%' }}>
          <Container
            style={{
              height: '80vh',
              // paddingLeft: '16rem',
            }}>
            <Outlet />
          </Container>
        </ScrollArea>
      </Box>
    </div>
  )
}
