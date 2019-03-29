const Discord = require('discord.js')
const Client = new Discord.Client()

Client.login('NTYxMjc5MjQ1NjY2NzQ2NDA5.D4AMOQ.UNJi6JKMgOSjGtU2VFmdJLLrbIs').then(async () => {
    console.log(`Ligado em ${Client.user.tag}`)
})
Client.on('message', async message => {
    if (message.author.id === '561279245666746409') {
        let prefix = '!'
        const args = message.content.slice(prefix.length).trim().split(' ') 
        if (message.content.startsWith(`${prefix}avatar`)) {
            Client.user.setAvatar(args[1]).then(async () => {
                await message.reply(Client.user.displayAvatarURL)
            })
        }
    }
})