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
        database: "mongodb://izboxo:2iDjjV5mfSN7jvGU@cluster0-shard-00-00.t98lq.mongodb.net:27017,cluster0-shard-00-01.t98lq.mongodb.net:27017,cluster0-shard-00-02.t98lq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11ckgy-shard-0&authSource=admin&retryWrites=true&w=majority"
        /* DB SUPPORT
         * redis://user:pass@localhost:6379
         * mongodb://user:pass@localhost:27017/dbname
         * sqlite://path/to/database.sqlite
         * postgresql://user:pass@localhost:5432/dbname
         * mysql://user:pass@localhost:3306/dbname
        */
    })
    
    GCommandsClient.on("log", (log) => {console.log(log)})

    console.log("Ready")
})

client.login("ODY2NzMzMjA4MjQ1ODk1MjA4.YPW2Mw.7HRG8MS21lbnzj89JUNkVVSepis")