const dbd = require("dbd.js");
//make shure to download DBD.JS package 
const bot = new dbd.Bot({
 "token": '',
 "prefix": ''
})

bot.onMessage()


bot.command({
  name: 'ping',
  code: `pong! \`$ping\``
})
//Make sure to add new commands like ping!
