const { Client } = require("discord.js");
const keepAlive = require('./server.js');
 
const client = new Client({
  disableEveryone: true
});
 
keepAlive();
client.login(process.env.TOKEN);

const config = require("./config.json");
client.on("ready", ()=>console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);


client.login(config.TOKEN);
