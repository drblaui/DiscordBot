const commando = require('discord.js-commando');
const twit = require('twit');
const config = require("./config_twitter.js");
const PREFIX = '!tweetimg ';
const ROLE = "";//The id of the role that should be able to tweet
const fs = require('fs');
    request = require('request');

var Twitter = new twit(config);

class tweetImgCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tweetimg',
            group: 'tweet',
            memberName: 'tweetimg',
            description: 'Tweets your image and text'
        });
    }

    async run(message, args) {
        if(!message.member.roles.get(ROLE)) return;
        var string = message.content.substring(PREFIX.length);
        var authorName = message.author.username + ' #' + message.author.discriminator;
        var splitString = string.split(message.embeds[0].url);
        var imgURL = message.embeds[0].url;
        var channel = message.channel;
        download(imgURL, './commands/twitter/tempImages/tempimg.jpg', function() {
            console.log('downloaded');
            tweet(splitString[0],authorName,channel);
        },splitString[0], authorName, channel);
    }
}

var tweet = function(input, author, channel) {
    var inputSplit = input.split("\n");
    var path = './commands/twitter/tempImages/tempimg.jpg';
    Twitter.postMediaChunked({file_path: path},function(err,data,response) {
        if(err) {
            console.log(err);
            channel.send("We've got a Problem here, sorry!");
        }
        else {
            console.log("Uploaded");
            Twitter.post('statuses/update', {status: 'The user ' + author + ' from Discord wants me to post: "' + inputSplit[0] + '"\n I do not know, if this content is suitable for Twitter. \n And the User also wanted me to provide this picture \n-Bot',media_ids: new Array(data.media_id_string)}, function(err,data,response) {
                if(err) {
                    console.log('Fehler:' +  err);
                    channel.send("We've got a Problem here, sorry!");
                }
                else {
                    console.log("Done");
                    channel.send("I have tweeted for you. Find your tweet here:"); //Insert account of your twitter bot
                }
            })
        }
    })
}
var download = function(uri,filename,callback,string,aName,ch) {
    request.head(uri,function(err,res,body) {
        console.log('content-type:',res.headers['content-type']);
        console.log('content-length:',res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};


module.exports = tweetImgCommand;