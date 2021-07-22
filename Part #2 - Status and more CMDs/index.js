const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
    client.user.setActivity("Your Activity :D")
    console.log("Ready")
})

client.on("message", async(message) => {
    const prefix = "!";

    if (message.author.bot) return;
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd === "ping") {
        message.channel.send("Pong")
    }

    if(cmd === "hello") {
        message.channel.send("Hi!")
    }
})

client.login("Your token here")