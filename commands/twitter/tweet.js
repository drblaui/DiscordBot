const commando = require('discord.js-commando');
const twit = require('twit');
const config = require("./config_twitter.js");
const PREFIX = '!tweet ';

var Twitter = new twit(config);

class tweetCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tweet',
            group: 'tweet',
            memberName: 'tweet',
            description: 'Twittert einen Text (zwitscher, zwitscher)'
        });
    }

    async run(message, args) {
        if(!message.member.roles.get('398961292054102017')) return;
        if(message.member.id === '224203134703108096') {
            message.channel.send("Tut mir leid, mir wurde von Alex gesagt, dass wenn du sowas machst es sehr übel endet, also darfst du das nicht nutzen!");
            return;
        }
        var string = message.content.substring(PREFIX.length);
        var authorName = message.author.username + ' #' + message.author.discriminator;

        tweet(string,authorName);
    }
}

var tweet = function(input, author) {
    Twitter.post('statuses/update', {status: 'Der Nutzer ' + author + ' auf Discord wollte, dass ich "' + input + '" poste.\n Ich habe keinen Plan, ob dieser Content auf Twitter überhaupt erlaubt ist. \n-Bot'}, function(err,data,response) {
        if(err) {
            console.log('Fehler:' +  err);
        }
        else {
            console.log("Hat geklappt");
            channel.send("Habe für dich getwittert, es ist möglich, dass der Upload aber noch etwas dauert. Du findest den Tweet dann hier: https://twitter.com/drblau1");
            return;
        }
    })
} 

module.exports = tweetCommand;