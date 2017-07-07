module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");
        
        let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toBan) return message.channel.sendMessage("You did not specify a user or ID!");

        if(toBan.id === message.author.id) return message.channel.sendMessage("You cannot ban yourself.");
        if(toBan.highestRole. position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot ban a member who is higher or has the same role as you.");

        message.guild.member(message.mentions.users.first()).ban();
        message.channel.send("**" + args.join(" ").substring(0) +  " got banned**");
}

module.exports.help = {
    name: "ban"
}