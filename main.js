const Discord = require('discord.js');
const colors = require('colors')
const CircularJSON = require('circular-json')
const embeds = new Discord.WebhookClient('FIRST PART OF WEBHOOK', 'SECOND PART OF WEBHOOK');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(colors.yellow(`Logged in as ${client.user.tag}! Mirror ready...`));
  client.user.setPresence({ game: { name: 'waiting for a  checkout' }, status: 'online' })
});

client.on('message', msg => {
  if(msg.embeds.length > 0 && !(CircularJSON.stringify(msg).toLowerCase().includes("failed") || CircularJSON.stringify(msg).toLowerCase().includes("failure") || CircularJSON.stringify(msg).toLowerCase().includes("decline") || CircularJSON.stringify(msg).toLowerCase().includes("declined"))){
  EMBEDS.send({embeds: msg.embeds});
  console.log(colors.magenta(`Succesfully sent {Embed}${msg.content}} from ${msg.author.tag}` ))
  console.log(colors.cyan(`Message url: ${msg.url}`))
  }
 else{
  console.log(colors.green(`Succesfully logged {${msg.content}} from ${msg.author.tag}` ))
  console.log(colors.cyan(`Message url: ${msg.url}`))
 }
});

client.login('YOUR BOT TOKEN HERE');
