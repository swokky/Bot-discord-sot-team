const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const {prefix, token} = require('./config.json')
client.commands = new Discord.Collection();


fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);
    console.log(`${files.length} commandes`);
    let jsf = files.filter(f => f.split('.').pop() === "js")
    if(jsf.length <= 0){
        console.log('Comande non-trouvé');
        return;
    }

    jsf.forEach((f, i) => {
        let props = require(`./commands/${files[i]}`);
        client.commands.set(props.help.name, props);
    })
});
client.on('message', async message => {

    if(message.author.bot) return;
    if(message.guild == null) return  message.channel.send('Les commandes ne sont pas disponibles en message privé !');
    client.emit('chekMessage');
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let Args = messageArray.slice(1);
    var args = message.content.substring(prefix.length).split(" ");

    let commandeFile = client.commands.get(cmd.slice(prefix.length));
    if(commandeFile) commandeFile.run(client, message, Args, args);
})
client.login(token);