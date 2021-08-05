const { GCommands } = require("gcommands");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    const GCommandsClient = new GCommands(client, {
        cmdDir: "commands/",
        eventDir: "events/",
        unkownCommandMessage: false, // true of false | send unkownCommand Message
        language: "english", //english, spanish, portuguese, russian, german, czech, turkish
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: '.' // for normal commands
        },
        defaultCooldown: 3,
        database: "mongodb"
        /* DB SUPPORT
         * redis://user:pass@localhost:6379
         * mongodb://user:pass@localhost:27017/dbname
         * sqlite://path/to/database.sqlite
         * postgresql://user:pass@localhost:5432/dbname
         * mysql://user:pass@localhost:3306/dbname
        */
    })
    
    GCommandsClient.on("log", console.log);
 //   GCommandsClient.on("debug", console.log);

    console.log("Ready")
})



client.login("Token")
