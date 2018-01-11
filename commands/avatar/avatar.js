const commando = require('discord.js-commando');
const PREFIX = "!";

class AvatarCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'avatar',
            memberName: 'avatar',
            description: 'Gibt einen Link zu einem User Avatar',
            examples: ['!avatar @TestBotJs#2670']
        });
    }

    async run(message, args) {
        var args = message.content.substring(PREFIX.length).split(" ");
        var member = message.mentions.members.first();
        if(!args[1]) {
            message.reply("Bitte gib mir einen Nutzernamen, wenn du deinen eigenen Avatar willst schreibe !avatarme");
        }
        message.reply(member.user.avatarURL);
    }
}

module.exports = AvatarCommand;