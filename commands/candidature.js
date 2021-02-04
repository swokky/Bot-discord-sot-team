const Discord = require('discord.js');

module.exports.run = async(client, message, Args) => {

    const chan = client.channels.cache.find(channel => channel.id === '804680208148856856');
    message.delete();
    let role = message.guild.roles.cache.find(role => role.id === "804680207179972608")
    let role2 = message.guild.roles.cache.find(role => role.id === "804680207179972608");

    if(!message.member.roles.cache.has(role)) return message.channel.send("Vous ne pouvez pas faire de candidature !");
    if(Args === "") return  message.channel.send('Veuillez entrez une candidature !');

    let content = Args.join(" ")

    var embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL())
        .setDescription("Voici la candidature de " + message.author.username + ":\n" + content)
        .setFooter('Made by ❤️ by swokky')
        .addField("Ping", message.author)
        .setTimestamp();

    chan.send(embed).then(() => {
        message.member.roles.remove(role);
        message.author.send("Votre candidature a été envoyé vous aurez une réponse sous peu ! ");
        message.author.send(embed);
        message.member.roles.add(role2);

    })
}


module.exports.help = {
    name: "candidature"
}