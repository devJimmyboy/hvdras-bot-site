import React, { useEffect } from 'react'
import CommandAccordion, { Command } from '../components/Command'
import { Accordion } from '@mantine/core'

type Props = {}

export default function CommandsPage({}: Props) {
  const [categories, setCategories] = React.useState<string[]>([])
  const [commands, setCommands] = React.useState<{ [key: string]: Command[] }>({})
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    const fetchCommands = async () => {
      const response = await fetch('https://raw.githubusercontent.com/devJimmyboy/hvdras-bot-site/refs/heads/master/commands.json')
      const data = await response.json()
      const categories = new Set<string>()
      const commandsByCategory: { [key: string]: Command[] } = {}
      data.sort((a: Command, b: Command) => {
        if (a.category < b.category) return -1
        if (a.category > b.category) return 1
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
      data.forEach((command: Command) => {
        if (command.category) {
          if (command.category === 'hidden') return
          categories.add(command.category)
          if (!commandsByCategory[command.category]) {
            commandsByCategory[command.category] = []
          }
          commandsByCategory[command.category].push(command)
        }
      })
      setCategories(Array.from(categories))
      // Sort the commands by category then by name
      setCommands(commandsByCategory)
      setLoading(false)
    }
    fetchCommands()
  })
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Accordion>
          {categories.map((category, i) => (
            <div key={`accordion-${i}`}>
              <Accordion.Item id={`category-${category}`} className="font-bold text-xl py-2 " key={category} value={category}>
                <h2 className="border-b-2 border-blue-400">{category}</h2>
              </Accordion.Item>
              {commands[category]?.map((command: Command) => (
                <CommandAccordion key={command.name} command={command} />
              ))}
            </div>
          ))}
        </Accordion>
      )}
    </div>
  )
}
