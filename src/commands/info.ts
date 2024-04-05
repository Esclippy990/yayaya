import {
  ChatInputCommandInteraction,
  CacheType,
  SlashCommandBuilder,
  EmbedBuilder,
} from 'discord.js'
import discordjs from 'discord.js/package.json'
import CommandInterface from './interface.js'
import global from '../global.js'
import Palette from '../utilities/palette.js'
import Log from '../utilities/log.js'

const Info: CommandInterface = {
  name: 'info',
  description: 'Bot info.',
  data: new SlashCommandBuilder(),
  async execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<void> {
    await interaction.deferReply()

    const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Neurino',
        iconURL: interaction.client.user.displayAvatarURL(),
      })
      .setColor(Palette.DarkBlue)
      .setDescription(`**Bot Creator:** \`_damocles (<@342038795757027329>)\`
      **Uptime:** \`${Log.uptime}\`
      **Version:** \`${global.build.id} (${global.build.date})\`
      **Node Version:** \`${process.version}\`
      **Discord.js Version:** \`${discordjs.version}\`
      **Memory Usage:** \`${Math.floor(process.memoryUsage().heapUsed / 1024 / 1024)}MB\`
      **Ping:** \`${interaction.client.ws.ping}ms\``)

  interaction.editReply({
    embeds: [embed],
  })
  },
  test(): boolean {
    return true
  },
}

export default Info
