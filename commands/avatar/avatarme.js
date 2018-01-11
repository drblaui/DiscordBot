const commando = require('discord.js-commando');

class AvatarMeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatarme',
            group: 'avatar',
            memberName: 'avatarme',
            description: 'Gibt den Link zu deinem User Avatar'
        });
    }

    async run(message, args) {
        message.reply(message.author.avatarURL);
    }
}

module.exports = AvatarMeCommand;