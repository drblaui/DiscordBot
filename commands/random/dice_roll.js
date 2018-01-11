const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Würft einen Würfel'
        });
    }

    async run(message, args) {

        /*var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Du hast gewürfelt: " + roll);*/
    }
}

module.exports = DiceRollCommand;