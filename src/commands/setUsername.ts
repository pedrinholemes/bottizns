import Discord from 'discord.js'

export default {
  name: 'name',
  handle: async function (
    message: Discord.Message,
    client: Discord.Client,
    args: string[]
  ): Promise<void> {
    const name = args[0] === '0' ? process.env.BOT_NAME : args[0]
    try {
      await client.user?.setUsername(`${name} | ${new Date().getFullYear()}`)
      message.channel.send(`OK! My Name is ${name}`)
    } catch (err) {
      console.error(new Error(err))
      if (err.code === 50035) {
        message.channel.send('You are fast\n Keep Calm')
        return
      }
      message.channel.send('Somethings Wrong')
    }
  }
}
