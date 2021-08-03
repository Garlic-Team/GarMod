const { Command } = require("gcommands")

module.exports = class Userinfo extends Command {
  constructor(...args) {
    super(...args, {
        name: "userinfo",
        description: "Show info"
    })
  }

  async run({respond, member}) {
        const user = member.user

        respond(`Name: ${user.username}#${user.discriminator}\n ID: ${user.id}`)
  }
};