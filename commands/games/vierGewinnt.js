/*const commando = require('discord.js-commando');

class VierGewinntCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '4gewinnt',
            group: '4gewinnt',
            memberName: '4gewinnt',
            description: 'Startet ein 4 gewinnt spiel'
        });
    }

    async run(message, args) {
        var player = 0;
        message.channel.send(message.author + ' will 4 gewinnt spielen. Steige ein indem du "Ich will" schreibst');
        var player1 = message.author;
        bot.on('message', message => {
            if(message.content === 'Ich will') {
                var player2 = message.author;
                setTimeout(function() {'Tut mir leid, ' + player1 + 'jeder scheint dich zu hassen!'},5000);
            }
        });
    }
}

module.exports = VierGewinntCommand;*/