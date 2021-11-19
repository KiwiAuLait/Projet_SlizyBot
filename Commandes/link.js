const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🔗・Voici les liens me concernant.')
	.setAuthor(config.Speudo)
	//.setThumbnail(config.Image)
	.addFields(
    { name: 'Youtube', value: config.Youtube },
    { name: 'Twitch', value: config.Twitch },
    { name: 'Twitter', value: config.Twitter },
    { name: 'Tiktok', value: config.Tiktok },
    { name: 'Insta', value: config.Insta },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"liens"
}