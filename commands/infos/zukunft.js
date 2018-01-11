const commando = require('discord.js-commando');

class ZukunftCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'zukunft',
            group: 'zukunft',
            memberName: 'zukunft',
            description: 'Sagt dir, was gerade passiert'
        });
    }

    async run(message, args) {
        message.channel.send('Im moment wird vom Developer versucht die Twitch und BetterTTV API einzubinden, dass immer wenn jemand ein Emote wie LUL oder POGCHAMP benutzt der Bot mit dem Emote antwortet.', {tts: true });
    }
}

module.exports = ZukunftCommand;