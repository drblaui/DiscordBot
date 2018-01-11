const commando = require('discord.js-commando');
const twit = require('twit');
const config = require("./config_twitter.js");
const PREFIX = '!tweetimg ';
const fs = require('fs');
    request = require('request');

var Twitter = new twit(config);

class tweetImgCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'tweetimg',
            group: 'tweet',
            memberName: 'tweetimg',
            description: 'Twittert das erste Bild von deinen Image Links + Text (zwitscher, zwitscher)'
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
        var splitString = string.split(message.embeds[0].url);
        var imgURL = message.embeds[0].url;
        var channel = message.channel;
        download(imgURL, './commands/twitter/tempImages/tempimg.jpg', function() {
            console.log('downloaded');
            tweet(splitString[0],authorName,channel);
        },splitString[0], authorName, channel);
        //tweet(splitString[0], authorName, channel);
    }
}

var tweet = function(input, author, channel) {
    var inputSplit = input.split("\n");
    var path = './commands/twitter/tempImages/tempimg.jpg';
    Twitter.postMediaChunked({file_path: path},function(err,data,response) {
        if(err) {
            console.log(err);
            channel.send("Huch! Da ist etwas falsch gelaufen!");
        }
        else {
            console.log("Uploaded");
            Twitter.post('statuses/update', {status: 'Der Nutzer ' + author + ' auf Discord wollte, dass ich "' + inputSplit[0] + '" poste.\n Ich habe keinen Plan, ob dieser Content auf Twitter überhaupt erlaubt ist. \n Achja und der Nutzer wollte dieses Bild dazu haben. \n-Bot',media_ids: new Array(data.media_id_string)}, function(err,data,response) {
                if(err) {
                    console.log('Fehler:' +  err);
                    channel.send("Huch! Da ist etwas falsch gelaufen!");
                }
                else {
                    console.log("Hat geklappt");
                    channel.send("Habe für dich getwittert, es ist möglich, dass der Upload aber noch etwas dauert. Du findest den Tweet dann hier: https://twitter.com/drblau1");
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