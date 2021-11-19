const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setTitle('📈・Information concernant le bot !')
      .setAuthor(config.Speudo)
      //.setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '19/11/2021', inline: true },
          { name: '⌨ | Développeur :', value: 'Slizy', inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(config.Speudo);
  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"ibot"
}