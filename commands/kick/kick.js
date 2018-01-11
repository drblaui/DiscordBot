const commando = require('discord.js-commando');
const ROLE = ""; //The id of the role that should be able to kick users
class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'kick',
            memberName: 'kick',
            description: 'Kicks a User'
        });
    }

    async run(message, args) {
        if (message.member.roles.get(ROLE)) {
            var member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been kicked!");
            }).catch(() => {
                message.channel.send("Nope!");
            });
        }
        else {
            message.reply('How about no?');
        }
    }
}

module.exports = KickCommand;