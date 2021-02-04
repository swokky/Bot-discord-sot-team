const Discord = require('discord.js');

module.exports.run = async(client, message) => {
    var embed = new Discord.MessageEmbed()
        .setAuthor(`Barril's white`)
        .setFooter('Made by ❤️ by swokky')
        .setTimestamp(Date())
        .setDescription('Help')
        .addField(
            'Commandes',
            ">Candidature : permet de faire une candidature"
        )
    message.delete();
    message.author.send(embed)
    message.channel.send("Les commandes vous ont été envoyé en message privé")
}

module.exports.help = {
    name: "help"
}