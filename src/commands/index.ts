import ping from './ping'
import setUsername from './setUsername'
import Discord from 'discord.js'

interface ConfigProps {
  [key: string]: string | number
}
const config: ConfigProps = {}

config.url =
  'https://discord.com/api/oauth2/authorize?client_id=739973779211419769&permissions=2081422583&scope=bot'

export default {
  ping,
  setUsername,
  say: {
    name: 'say',
    handle: async function (
      message: Discord.Message,
      client: Discord.Client,
      args: string[]
    ): Promise<void> {
      const sayMessage = args.join(' ')
      // eslint-disable-next-line camelcase
      message.delete().catch(o => o)
      message.channel.send(sayMessage)
    }
  },
  invite: {
    name: 'invite',
    handle: async function (
      message: Discord.Message,
      client: Discord.Client,
      args: string[]
    ): Promise<void> {
      const msg = new Discord.MessageEmbed()
      msg
        .setColor('#7159c1')
        .setURL(String(config.url))
        .setTitle('Invite Me')
        .setDescription('Invite me for you server with this link')
        .setThumbnail(
          client.user?.displayAvatarURL()
            ? client.user?.displayAvatarURL()
            : 'https://picsum.photos/512'
        )
        .setFooter("I'M WAITING FOR YOU")
        .setAuthor(client.user?.username)
      message.channel.send(msg)
    }
  }
}
