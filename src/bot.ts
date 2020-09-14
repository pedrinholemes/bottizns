import Discord from 'discord.js'
import Commands from './commands/index'
import setActivity from './utils/setActivity'

const client = new Discord.Client()

const config = {
  prefix: process.env.BOT_PREFIX || '!'
}

// BotConfig
client.on('ready', () => {
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  )
  setActivity(client)
})
client.on('guildCreate', guild => {
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  )
  setActivity(client)
})
client.on('guildDelete', guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`)
  setActivity(client)
})

client.on('message', async message => {
  if (message.author.bot) return
  if (!message.content.startsWith(config.prefix)) return

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift()?.toLowerCase()
  if (command === 'say') {
    return Commands.say.handle(message, client, args)
  }
  if (command === 'name') {
    return Commands.setUsername.handle(message, client, args)
  }
  if (command === 'ping') {
    return Commands.ping.handle(message, client, args)
  }
  if (command === 'invite') {
    return Commands.invite.handle(message, client, args)
  }

  const msg = new Discord.MessageEmbed()
  const cmd = Object.values(Commands)
    .map((value, i) => `_*${i}.* ${value.name}_`)
    .join(' \n')
  msg.setColor('#7159C1').setTitle('_404_ | Command Not Found')
  msg.description = `
  Command ${command} Not Found\n
  Try:\n
  ${cmd}
  `
  message.reply(msg)
})

export default client
