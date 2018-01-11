const commando = require('discord.js-commando');
var request = require('request');
const PREFIX = "!yt";

class youTubeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'yt',
            group: 'youtube',
            memberName: 'youtube',
            description: 'Holt das erste Video mit deinem Suchbegriff',
            examples: ["!yt Alex is a stupid Nigger"]
        });
    }

    async run(message, args) {
        var things = message.content.substring(PREFIX.length);
        const APIKEY = "AIzaSyAXW3skB1Fd0F5ETSEmh3pWFnKq-ASeBJM";
    
        var youTubeLink = "https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&key=" + APIKEY + "&type=video&q="+ things;
        var outerLink = "https://www.youtube.com/watch?v=";

        request({
            url: youTubeLink,
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                message.channel.send(outerLink += body.items[0].id.videoId);
            }
        })
    }
}

module.exports = youTubeCommand;