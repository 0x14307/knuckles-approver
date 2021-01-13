const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on("ready", () =>{
  console.log('Locked & loaded!')
  client.user.setStatus('online')
  client.user.setPresence({ activity: { name: 'Use -approve to approve!' }, status: 'online' })
 });


const responses = [
    "./assets/approved.mp4",
    "./assets/denial.mp4",
    "./assets/sorry.mp4",
    "./assets/no.mp4",
    "./assets/normie.mp4",
    "./assets/congrats.mp4",
    "./assets/holdup.mp4",
    "./assets/oh.mp4",
    "./assets/what.mp4",
    "./assets/wow.mp4",
];

client.on('message', message => {
    if (message.content.includes('-approve')) {
      var fullresponse = responses[Math.floor(Math.random() * responses.length)]
      message.channel.send({
        files: [fullresponse]
      }
      )}});

client.login('paste token here');