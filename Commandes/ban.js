const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

function wait(ms){
    var start = new Date().getTime()
    var end = start
    while(end < start + ms) {end = new Date().getTime();}
}

module.exports.run = async (client, message, args) => {
    message.delete()
    var user = message.mentions.users.first();
    var reason = args.join(" ").slice(22);

    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {return message.channel.send("Vous n'avez pas la permission pour effectuer cette commande !"); }
    if(!user) {const fail = await message.channel.send("Veuillez mentionner une personne a ban !"); wait(3000); fail.delete(); return}
    if(!reason) {const fail = await message.channel.send("Veuillez entrer la raison du ban !"); wait(3000); fail.delete(); return}

    const kickchannel = new Discord.MessageEmbed()
    .setAuthor('L\'utilisateur a été Ban')
    .setColor(config.embedColor)
    .addField('Raison', `${reason}`, true)
    .setFooter(`Ban de ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send(kickchannel)

    message.guild.member(user).ban(reason)
};

module.exports.help = {
    name: 'ban'
};