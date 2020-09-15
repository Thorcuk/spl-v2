const Discord = require('discord.js');

 

exports.run = (client, message, args) => {

 

  let mesaj = args.slice(0).join(' ');

if (mesaj.length < 1) return message.reply('bişey yaz moruq.');

 

    const yaz = new Discord.RichEmbed()

      .setColor('#fff000')

      .addField(`**Dün yapmış oldugumuz scrimde 1 ci ola :first_place: OW Team ekibini tebrik ederiz. Diger bütün takımlara katılımlarından dolayı teşekkürler.**`, `${mesaj}`)

    return message.channel.sendEmbed(yaz);

};

 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [''],

  permLevel: 0

};

 

exports.help = {

  name: 'sonuç',

  description: '',

  usage: ''

};

 

