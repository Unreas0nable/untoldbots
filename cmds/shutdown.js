module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");
    message.channel.send("I am shutting down now");
    
    await process.exit();
}

module.exports.help = {
        name: "shutdown"
}