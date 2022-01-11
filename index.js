;const Discord = require("discord.js");
require("dotenv").config();

const generateImage = require("./generateImage");
require("status.js");

if(context.params.event.content.includes("!status")){
    
    await lib.discord.users['@0.2.0'].me.status.update({
       activity_name: `Server Joins`,
       activity_type: 'WATCHING',
       status: 'DND'
     });

     return lib.discord.channels['@0.2.0'].message.create({
         channel_id: `${content.params.event.channel_id}`,
         content: `Success Fully Watching`
     });
}


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello UwU")
    }
});

const welcomeChannelId = "926780981485129748"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
});

client.login(process.env.TOKEN);