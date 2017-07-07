module.exports.run = async (bot, message, args) => {
    console.log(`I am up! Name: ${bot.user.username}`);
    const m = await message.channel.send(`What?`);
    m.edit(`Oh!`)
    m.edit(`I am up! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
}

module.exports.help = {
    name: "isitup"
}