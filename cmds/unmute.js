module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You do not have admin!");

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("You did not specify a user or ID!");

            let role = message.guild.roles.find(r => r.name === "甦 Taka - Muted");

        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user is not muted!");

        await toMute.removeRole(role);
    message.channel.sendMessage("I have unmuted the user");


}

module.exports.help = {
    name: "unmute"
}