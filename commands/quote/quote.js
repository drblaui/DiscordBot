/*const commando = require('discord.js-commando');

class QuoteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'quote',
            memberName: 'quote',
            description: 'Speichert ein Zitat'
        });
    }

    async run(message, args) {
        var quote = message.content.replace("!quote",'');
       // const fs = require("fs");
        //let points = JSON.parse(fs.readFileSync("./quotes.json", "uft8"));

        client.on("ready",() => {
            //console.log( _.size("./quotes.json".Data));
           /* fs.writeFile("./quotes.json", JSON.stringify(quote), (err) => {
                if (err) console.error(err);
            });
        });
    }
}

module.exports = QuoteCommand;*/