/*
    EXTREMELY SelfieBOT v0.2A
    Um simples selfiebot escrito em node.js
    https://extremely.ml
*/
console.log('=========================================================');
console.log('    EXTREMELY SelfieBOT v0.2A');
console.log('    Um simples selfiebot escrito em node.js');
console.log('    Visite https://extremely.ml para atualizacoes');
console.log('=========================================================');



//Configuracoes do BOT
const Discord = require("discord.js");
const client = new Discord.Client();

client.login('NTQ0NzIzNjIxMjEwMzU3NzYx.D3v0ZA.hz5j7lLlarZl7hSvM7tdileTCNs').then(async () => {
  console.log(`Connexion avec le pseudo :  ${Client.user.tag}`)
})
client.on('message', async message => {
  if (message.author.id === '544723621210357761') {
      let prefix = '!set'
      const args = message.content.slice(prefix.length).trim().split(' ') 
      if (message.content.startsWith(`${prefix}avatar`)) {
          Client.user.setAvatar(args[1]).then(async () => {
              await message.reply(Client.user.displayAvatarURL)
          })
      }
  }
});

client.on('message', msg => {
  if (msg.guild && msg.content.startsWith('!pp')) {
    let text = msg.content.slice('!pp'.length); // cuts off the /private part
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
  }
});

client.on('ready', () => {
  console.log(`Ready as ${client.user.tag}!`);
  client.user.setActivity("VEND SELFB0T 5€", { type: 'STREAMING', url: 'https://twitch.tv/nitro'})
})