const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
const modoEmbed = new Discord.MessageEmbed()
	.setColor('#FFFFFF')
	.setTitle('⚒ ・Liste des commandes de modération.')
	.setAuthor(config.Speudo)
	//.setThumbnail(config.Image)
	.addFields(
    { name: '🗑-clear', value: '(Pour supprimer des messages.)' },
	{ name: '💬-msg', value: '(Pour envoyer un message avec le bot.)' },
    { name: '⚠️-kick', value: '(Pour kick.)' },
    { name: '❌-ban', value: '(Pour ban.)' },

    )
	.setTimestamp()
    .setFooter(config.Speudo);
    message.channel.send(modoEmbed)
}

module.exports.help = {
    name:"modo"
}