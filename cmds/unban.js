module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");
        
        let tounBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!tounBan) return message.channel.sendMessage("You did not specify a user or ID!");

        //if(toBan.id === message.author.id) return message.channel.sendMessage("You cannot ban yourself.");
        //if(toBan.highestRole. position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot ban a member who is higher or has the same role as you.");

        message.guild.member(message.mentions.users.first()).unBan();
        message.channel.send("**" + args.join(" ").substring(0) +  "'s ban has been lifted.**");
        console.log(`Unbanned ${user.username} from ${guild.name}`).catch(console.error);
}

module.exports.help = {
    name: "unban"
}