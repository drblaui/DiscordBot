//Wichtige Konstanten zur Initialisierung
const commando = require('discord.js-commando');
const client = new commando.Client();
const Rich = require('discord.js')
const TOKEN = ""//Your Token

//Wenn der Bot bereit ist
client.on('ready', () => {
  console.log('Alles ist toll!');
  client.user.setPresence("Testin");
});


//Sobald eine Nachricht in irgendeinen Channel geschrieben wird
client.on('message', (message) => {
  //Speichert die Nachricht in einer Variable
  var inhalt = message.content;
  var splittetmessage = inhalt.split(" ");
  //Falls die Nachricht Waddup ist antwortet es mit Waddup (Hab leider nicht eingeplant, dass es einen unendlichen Loop verursacht)
  if (message.content === "Waddup") {
    message.channel.send('Waddup');
  }
  //Wir nehmen unsere Twitch emote API in der JSON Datei und speichern es sicherhaltshalber in einer Variable
  const twitchEmotesJson = require("./emotes.json");
  //Wir suchen den Inhalt der Nachricht bei unserer Datei
  for (var i = 0; i<= splittetmessage.length; i++) {
    var emote = twitchEmotesJson[splittetmessage[i]];
    //Wir müssen sichergehen, ob die Nachricht überhaupt ein Twitch emote ist
    if (emote != undefined) {
      //Wir antworten mit einem fixed Link
      message.reply("https://static-cdn.jtvnw.net/emoticons/v1/" + emote["id"] + "/3.0 \n Denk dran, wenn das Emote verpixelt ist liegt es an der API, nicht an mir. Ich bin perfekt!");
    }
    else if((splittetmessage[i] === "Anime") || (splittetmessage[i] === "anime")) {
      const embed = new Rich.RichEmbed()
        .setTitle("Anime is Gay")
        .setAuthor("Jeff Kaplan", "http://farm4.staticflickr.com/3007/2948001282_2052e280a9_z.jpg")
        .setColor(0x00AE86)
        .setDescription("Hallo! Ich bin Jeff Kaplan! \nUnd ich bin der meinung Anime is Gay")
        .setFooter("Diese Nachricht wurde von Blizzard bestätigt (Eigentlich nicht. Diese Nachricht hat nichts mit Jeff Kaplan oder Blizzard zu tun)")
        .setImage("https://cdn.discordapp.com/attachments/352458589983604737/352459627750752266/20170830_162814.jpg")
        .setThumbnail("http://jcr.keble.ox.ac.uk/wp-content/uploads/2013/04/topsecret.png")
        .setTimestamp()
        .addField("Picture related","Das Bild gehört dazu. Ich hab das selbst approved.")
        .addBlankField(true)

        message.channel.send({embed});
        message.reply("Sogar Jeff Kaplan mag keine Weeaboo Kacke.");
    }
    else if((splittetmessage[i] === "Thot") || (splittetmessage[i] === "thot")) {
      const embed = new Rich.RichEmbed()
        .setTitle("ICH BIN DER THOT DESTROYER")
        .setAuthor("Thot Destroyer","https://memestatic3.fjcdn.com/thumbnails/comments/Because+those+plastic+tracks+look+like+absolute+garbage+i+have+_7c0940dcb94e2975ad42ed4a3abe1075.jpg")
        .setColor(0x00AE86)
        .setDescription("Hab ich da Thot gehört? BEGONE")
        .setFooter("Dies ist eine Automatische Nachricht, alle Thots verlassen bitte diesen Server")
        .setImage("https://pbs.twimg.com/media/C0nSdQ7XAAAfDwY.jpg")
        .setTimestamp()
        
        message.channel.send({embed});
    }
    else if((splittetmessage[i] === "Gay")||(splittetmessage[i] === "gay")) {
      const embed = new Rich.RichEmbed()
        .setTitle("GAYS GET OUT")
        .setAuthor('Mike "The Electric Fence" Pence',"http://img.4plebs.org/boards/pol/image/1481/82/1481820381448.jpg")
        .setColor(0x00AE86)
        .setDescription("Hab ich da etwa Gay gehört? ZAP")
        .setFooter("Diese Nachricht hat nichts mit Donald Trump zu tun")
        .setImage("http://i2.kym-cdn.com/photos/images/facebook/001/202/409/ba1.jpg")
        .setThumbnail("https://img.4plebs.org/boards/pol/image/1479/11/1479117828339.jpg")
        .setTimestamp()

        message.channel.send({embed});
    }
  }
});


//Registry für Commands
client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('kick', 'Kick');
client.registry.registerGroup('avatar', 'Avatar');
client.registry.registerGroup('avatarme', 'Avatar');
client.registry.registerGroup('zukunft', 'Zukunft');
client.registry.registerGroup('quote', 'Quote');
client.registry.registerGroup('youtube','YouTube');
client.registry.registerGroup('tweet','Twitter');
client.registry.registerGroup('wank','Wank');
//bot.registry.registerGroup('4gewinnt', '4gewinnt');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

//Einloggen des Bots
client.login(TOKEN);