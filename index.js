const commando = require('discord.js-commando');
const client = new commando.Client();
const Rich = require('discord.js')
const TOKEN = ""; //Your token


client.on('message', (message) => {
	const twitchEmotesJson = require("./emotes.json");
	var inhalt = message.content;
	var splittetmessage = inhalt.split(" ");
	if (message.content === "Waddup") {
		message.channel.send('Waddup');
	}
	for (var i = 0; i<= splittetmessage.length; i++) {
		var emote = twitchEmotesJson[splittetmessage[i]];
	
		if (emote != undefined) {
			message.reply("https://static-cdn.jtvnw.net/emoticons/v1/" + emote["id"] + "/3.0 \n Please do keep in mind that pixelation is caused by twitchemotes.com and not by me!");
		}
	}
});


//Registry
client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('kick', 'Kick');
client.registry.registerGroup('avatar', 'Avatar');
client.registry.registerGroup('avatarme', 'Avatar');
client.registry.registerGroup('youtube','YouTube');
client.registry.registerGroup('tweet','Twitter');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");


client.login(TOKEN);