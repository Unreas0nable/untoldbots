const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
            .setTitle("Help Panel")
            .setDescription("Use t? to execute a command shown below")
            .setColor("#970000")
            .addField("Ban",
            "only permitted to Admin roles to ban user")
            .addField("icon",
            "shows your profile picture")
            .addField("Mute",
            "only permitted to Admin roles to mute a user **working on removing their current roles**")
            .addField("Ping",
            "replies pong, along with latency|ms")
            .addField("TakaBot",
            "try it out!")
            .addField("Unmute",
            "only permitted to Admin roles to unmute a user")
            .addField("Userinfo",
            "shows your discord info, created date, etc.")
            .addField("End of Help Panel",
            "There will be more commands, just not worked on yet.");

        message.channel.send({embed: embed});

}

module.exports.help = {
    name: "help"
}