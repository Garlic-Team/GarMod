const { Command } = require("gcommands")

module.exports = class Ping extends Command {
  constructor(...args) {
    super(...args, {
        name: "ping",
        description: "Check bot ping"
    })
  }

  async run({respond}) {
        // if slash and normal cmd
        // Eğer normal veya eğik çizgi komutuysa
        respond("pog");
  }
};