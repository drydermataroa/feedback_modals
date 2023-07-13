const { EmbedBuilder } = require("discord.js");
const ec = require('../settings/embed')
const emojis = require('../settings/emojis')

module.exports = {
    id: "fback",
    run: async (client, interaction, config, db) => {

      const embed = new EmbedBuilder()
      .setTitle(`${emojis.clipboard} **New Feedback** ${emojis.clipboard}`)
      .setColor(ec.color)
      .setThumbnail(interaction.user.avatarURL({ dynamic: true, size: 1024 }))
      .setDescription('Here the feedback of the user')
      .addFields(
        { name: '**Name:**', value: interaction.fields.getTextInputValue('fbackName') },
        { name: '**Feedback Message:**', value: interaction.fields.getTextInputValue('fbackText') }
      )
      .setFooter({
        text: `Requested By: ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      .setTimestamp()

      return interaction.reply({ embeds: [embed]})
    }
}