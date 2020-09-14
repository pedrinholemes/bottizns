import Discord from 'discord.js'

export default {
  name: 'ping',
  handle: async function (
    message: Discord.Message,
    client: Discord.Client,
    args: string[]
  ): Promise<void> {
    const m = await message.channel.send('Ping?')
    const dataReply = [
      m.createdTimestamp - message.createdTimestamp,
      Math.round(client.ws.ping)
    ]
    const mReply = `Pong! Latency is ${dataReply[0]}ms. API Latency is ${dataReply[1]}ms`
    setTimeout(() => m.edit(mReply), 200)
  }
}
