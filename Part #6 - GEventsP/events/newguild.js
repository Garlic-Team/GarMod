const { Event } = require("gcommands");

module.exports = class extends Event {
    constructor(...args) {
        super(...args, {
            name: "guildCreate",
            once: false,
            ws: false
        });
    }

    run (client, guild) {
        let channel = guild.channels.cache.find(c => c.type == "text" && c.permissionsFor(guild.me).has(["VIEW_CHANNEL","SEND_MESSAGES"]));
        console.log(channel)
        if(!channel) return;

        channel.send("Hello!");
    }

}