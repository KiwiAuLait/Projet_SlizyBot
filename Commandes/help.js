﻿const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#FFFFFF')
	.setTitle('📑・Liste des commandes.')
	.setAuthor(config.Speudo)
	//.setThumbnail(config.Image)
	.addFields(
    { name: '📃-help', value: '(Affiche les fonctionalité du bot.)' },
    { name: '🔗-liens', value: '(Pour voir les liens me concernant.)' },
    { name: '⛺️-pdp', value: '(Afficher sa photo de profil.)' },
    { name: '📈-crea', value: '(Voir la date de création de son compte discord.)' },
    { name: '🎁-giveaway', value: '(Pour faire un giveaway)' },
    { name: '📣-sondage', value: '(Pour faire un sondage.)' },
    { name: '🤖-ibot', value: '(Information concernant le bot.)' }, 
    { name: '📦-modo', value: '(Liste des commandes de modération.)' },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}