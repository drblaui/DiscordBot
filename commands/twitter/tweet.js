const commando = require('discord.js-commando');
const twit = require('twit');
const config = require("./config_twitter.js");
const PREFIX = '!tweet ';
const ROLE = ""; //The id of the role that should be able to tweet

var Twitter = new twit(config);

class tweetCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tweet',
            group: 'tweet',
            memberName: 'tweet',
            description: 'Tweets your text'
        });
    }

    async run(message, args) {
        if(!message.member.roles.get(ROLE)) return;
        var string = message.content.substring(PREFIX.length);
        var authorName = message.author.username + ' #' + message.author.discriminator;

        tweet(string,authorName);
    }
}

var tweet = function(input, author) {
    Twitter.post('statuses/update', {status: 'The User ' + author + ' from Discord wanted me to post: "' + input + '" \n I do not know, if this content is suitable for Twitter. \n-Bot'}, function(err,data,response) {
        if(err) {
            console.log('Error:' +  err);
        }
        else {
            console.log("Done");
            channel.send("I have tweeted for you. Find your tweet here:"); //Insert account of your twitter bot
            return;
        }
    })
} 

module.exports = tweetCommand;