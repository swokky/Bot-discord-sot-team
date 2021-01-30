const Discord = require('discord.js');

module.exports.run = async(client, message, Args) => {

    const logs = client.channels.cache.find(channel => channel.id === '804771765863317584')

    message.delete();
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`Vous n'avez pas la permission !`);
    if(isNaN(Args[0])) return message.channel.send("Vous devez choisir un nombre de message à supprimer compris entre 1 et 99")
    try {
        message.channel.bulkDelete(Args[0]).then(() => {
            message.channel.send(`${Args[0]} messages suprimés !`);
            logs.send(`>purge utilisé par ${message.author} avec comme argument ${Args[0]}`)
        })
    } catch(err){
        await message.channel.send("Je n'ai pas réussis à supprimer les messages :/")
    }

}

module.exports.help = {
    name: "purge"
}