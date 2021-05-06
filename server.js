const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', async () => {
  console.log(`${client.user.tag} bot is online!`)
  client.user.setActivity("")//you can change it !!!
})

client.on('message', async message => {
  if(message.content === "test") message.reply("its ok bro no virus detected")
})
client.login("your bot token")
