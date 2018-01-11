const commando = require('discord.js-commando');
const PREFIX = "!";

class AvatarCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'avatar',
            memberName: 'avatar',
            description: 'Returns a link to the Avatar of the mentioned user',
            examples: ['!avatar @TestBotJs#2670']
        });
    }

    async run(message, args) {
        var args = message.content.substring(PREFIX.length).split(" ");
        var member = message.mentions.members.first();
        if(!args[1]) {
            message.reply("I need a username, if you want your own avatar use !avatarme");
        }
        message.reply(member.user.avatarURL);
    }
}

module.exports = AvatarCommand;