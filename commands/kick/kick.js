const commando = require('discord.js-commando');

class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'kick',
            memberName: 'kick',
            description: 'Kickt einen User'
        });
    }

    async run(message, args) {
        if (message.member.roles.get('349278658290253824')) {
            var member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " wurde gekickt!");
            }).catch(() => {
                message.channel.send("Nope!");
            });
        }
        else {
            message.reply('Wie wärs mit nein?');
        }
    }
}

module.exports = KickCommand;