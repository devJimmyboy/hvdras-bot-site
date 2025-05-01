import { Anchor, Code, Stack } from '@mantine/core'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <Stack align="center" justify="center" h="100%">
      <img src="https://cdn.7tv.app/emote/01HNK8DGF0000FG935RNS75APG/4x.webp" alt="Logo" className="w-32 h-32 rounded-lg drop-shadow-lg drop-shadow-black/60" />
      <div className="text-4xl font-bold text-shadow-md text-shadow-black text-white">Hvdras Bot</div>
      <div className="text-2xl font-bold text-shadow-md text-shadow-black">a dumbassbitchassidiot bot</div>
      <div className="text-2xl font-bold text-shadow-md text-shadow-black mt-4">
        Type{' '}
        <Code style={{ fontSize: '1.5rem' }} className=" text-gray-500">
          -join
        </Code>{' '}
        in{' '}
        <Anchor className="text-2xl!" href="https://twitch.tv/hvdras" target="hvdras">
          hvdras' channel
        </Anchor>{' '}
        to get started
      </div>
      <div className="text-2xl font-bold text-shadow-md text-shadow-black mt-4">
        Type{' '}
        <Code style={{ fontSize: '1.5rem' }} className=" text-gray-500">
          -part
        </Code>{' '}
        for the bot to leave the channel
      </div>
    </Stack>
  )
}
