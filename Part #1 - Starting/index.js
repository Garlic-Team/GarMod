const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
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
})

client.login("ODY2NzMzMjA4MjQ1ODk1MjA4.YPW2Mw.RxPv3P1Xy4jaSJek0BzfEbg1BcMA")