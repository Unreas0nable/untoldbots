//const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");

var prefix = "t?"

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
//bot.mutes = require("./mutes.json");

var fortunes = [
    "Yes?",
    "Hmm?",
    ""
]


fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
    bot.user.setGame("");
        console.log("I'm in - " + bot.guilds.size + " - servers");
        console.log(`New guild joined: ${bot.guilds.name} (id: ${bot.guilds.id}). This guild has ${bot.guilds.memberCount} members!`);
});

/*bot.on("ready", async () => {
    console.log(`I have completed booting up, my name is ${bot.user.username}`);
    console.log(bot.commands);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);   
    } catch(e) {
        console.log(e.stack);
    }
});*/

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

});

bot.login("MzMwNDEzNzE5NTA5MjcwNTMx.DDgpRQ.TXyZ_CytAd69homL-iLBRGGnDlA");
