const commando = require('discord.js-commando');

const PREFIX = "!wank ";

class wankCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'wank',
            group: 'wank',
            memberName: 'wank',
            description: 'Wankt in deinem Speed',
            examples: ["!wank slow","!wank fast"]
        });
    }

    async run(message, args) {
        var speed = message.content.substring(PREFIX.length);
        //message.channel.send("8====MM===D");

        if(speed === "fast") {
            message.channel.send('8===MM===D');
            message.channel.send
        }
        else if(speed === "slow") {
            message.channel.send('8===MM===D');
        }
        else {
            message.channel.send('Die Geschwindigkeit "' + speed + '" ist mir unbekannt');
        }
    }
}

module.exports = wankCommand;