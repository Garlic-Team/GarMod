const { Command } = require("gcommands")
const axios = require("axios")

module.exports = class Api extends Command {
  constructor(...args) {
    super(...args, {
        name: "vicky",
        description: "Vicky API"
    })
  }

  async run({respond}) {
        const buff = await axios.get("https://vicky.izboxo.cz/image")

        respond(`${buff.data.image}`)
  }
};