import { Stack } from '@mantine/core'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <Stack align="center" justify="center">
      <div className="text-4xl font-bold text-shadow-md text-shadow-black">Hvdras Bot</div>
      <div className="text-2xl font-bold text-shadow-md text-shadow-black">a dumb fucking bot</div>
    </Stack>
  )
}
