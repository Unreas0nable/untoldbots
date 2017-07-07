module.exports.run = async (bot, message, args) => {
        if(args.length === 1){
                message.channel.sendMessage('You did not define a argument. Usage: `u?kick [user to kick]`');
               } else {
                 message.channel.sendMessage(args.join(" ").substring(0));
                 message.guild.member(message.mentions.users.first()).kick();
                 message.channel.send("**" + args.join(" ").substring(0) +  " kicked**");
               }
            }
        
        
module.exports.help = {
    name: "kick"
}