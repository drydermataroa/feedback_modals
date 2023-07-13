const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "feedback",
    description: "🧰 | send a feed back in the server.",
    type: 1,
    options: [],
  
    run: async (client, interaction, config, db) => {
        const modal = new ModalBuilder()
            .setCustomId('fback')
            .setTitle('Submit Your Feedback');

        const feedback1 = new TextInputBuilder()
            .setCustomId('fbackName')
            .setLabel("Input Your Name")
            .setStyle(TextInputStyle.Short);
      
        const feedback2 = new TextInputBuilder()
            .setCustomId('fbackText')
            .setLabel("Input Your Feedback")
            .setStyle(TextInputStyle.Paragraph);

        const ActionRow = new ActionRowBuilder().addComponents(feedback1);
        const ActionRow1 = new ActionRowBuilder().addComponents(feedback2);

        modal.addComponents(ActionRow, ActionRow1);

        await interaction.showModal(modal);
    },
};