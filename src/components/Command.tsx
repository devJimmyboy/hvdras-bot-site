import React from 'react'
import { Accordion, Code } from '@mantine/core'
export interface Command {
  name: string
  aliases: string[]
  message: string
  active: boolean
  restrictedChannels: string[]
  globalCooldown: number
  userCooldown: number
  offlineOnly: boolean
  blacklistedUsers: string[]
  usage: string
  description: string
  category: string
}

type Props = {
  command: Command
}

export default function CommandAccordion({ command }: Props) {
  return (
    <Accordion.Item value={command.name}>
      <Accordion.Control className="flex flex-row justify-between hover:bg-white/10">
        <div className="flex flex-row gap-2 m-0.5 items-center">
          <Code className="border" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            -{command.name}
          </Code>
          <span className="text-gray-500">{command.description}</span>
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <div className="flex flex-col gap-2">
          {command.aliases?.length > 0 && (
            <div className="flex flex-row gap-2">
              <span className="font-bold">Aliases:</span>
              {command.aliases?.length > 0 ? (
                command.aliases.map((alias) => (
                  <Code key={alias} className="text-gray-500">
                    -{alias}
                  </Code>
                ))
              ) : (
                <span className="text-gray-500">None</span>
              )}
            </div>
          )}
          {/* <div className="flex flex-row gap-2">
            <span className="font-bold">Description:</span>
            <span>{command.description}</span>
          </div> */}
          <div className="flex flex-row gap-2">
            <span className="font-bold">Usage:</span>
            <span className="font-mono">{command.usage}</span>
          </div>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  )
}
