const commando = require('discord.js-commando');
var request = require('request');
const PREFIX = "!ch";

class youTubeChannel extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ch',
            group: 'youtube',
            memberName: 'channel',
            description: 'Holt das erste Video eines Channels',
            examples: ["!ch Alex is a stupid Nigger"]
        });
    }

    async run(message, args) {
        var things = message.content.substring(PREFIX.length);
        const APIKEY = "AIzaSyAXW3skB1Fd0F5ETSEmh3pWFnKq-ASeBJM";
    
        var playlistId,nextPageToken,prevPageToken;

        function handleAPILoaded() {
            
        }
    }
}

module.exports = youTubeChannel;