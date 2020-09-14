import { Client } from 'discord.js'

export default async function setActivity(client: Client): Promise<void> {
  client.user?.setActivity(`Serving ${client.guilds.cache.size} servers`)
}
