const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('STARUS » Komutlar')
.setTimestamp() 
.addField(`• ${PREFIX}**istatistik**           `,` **Botun istatistiklerini gösterir.** `)
.addField(`• ${PREFIX}**sil <0-99>**           `,` **Mesajları silersiniz.** `)
.addField(`• ${PREFIX}**ping**                 `,` **Botun pingini gösterir.** `)
.addField(`• ${PREFIX}**sa-as <aç-kapat>**     `,` **Sa-as açarsınız.** `)
.addField(`• ${PREFIX}**say**                  `,` **Sunucunuzdaki üye sayısını gösterir.** `)
.addField(`• ${PREFIX}**sunucu-bilgi**         `,` **Sunucununuzun Bilgisini gösterir.** `)



.setFooter('© 2020  Starus')
.setTimestamp()
message.channel.send(embed)
};

 

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['komutlar','yardim','help'], 
  permLevel: 2 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
