const Discord = require("discord.js");
const bot = new Discord.Client(); 
const token = require("./token.json")

var prefix = "*"    

var con = console.log


bot.on("ready", async () =>{
    console.log("OE LA ZONNE");
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("QLF", {type: "STREAMING"} );
        }, 100)
});


bot.on("message", message => {

    if(message.content.startsWith("*clear")){
    message.delete();
        if(message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

                    message.channel.bulkDelete(args[1])

                }
            }

        }
    }
})


bot.on('message', async message => {
    if(message.content === prefix + "help")
    var help_embed = new Discord.MessageEmbed()
    .setTitle("🏴‍☠️・𝑬𝒍𝒆𝒄𝒕𝒓𝒊𝒛 help !! 🏴‍☠️・")
    .setDescription("```CREAT BY 𝐍𝐎𝐗𝐘#1441```")
    .addField("``` Pour les psn qui lance l'activiter !``` ", "** *PSN **")
    .addField("```pour ecouter la musique ! ```", "** *musique (en cour de dev)**")
    .addField("```pour fair une pliante comme une pub mp ext ```", "** *plaint **" )
    .setColor("RANDOM")
    .setImage("https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif")
    .setThumbnail("https://media.giphy.com/media/UYzNgRSTf9X1e/giphy.gif")
    message.channel.send(help_embed);
})


bot.on('message', async message => {
    if(message.content === prefix + "psn")
    var help_embed = new Discord.MessageEmbed()
    .setTitle("🏴‍☠️・PSN 🏴‍☠️・")
    .setDescription("```CREAT BY 𝐍𝐎𝐗𝐘#1441```")
    .addField("**PSN des Lanceur**", "**FuRy_MoRpHix**     /**TR4Z_7**     /**THACEMANYEAP**     /**YTB-NoXy**")
    .setColor("RANDOM")
    .setImage("https://media.giphy.com/media/piFGZ3Vxk2NHOAPgE3/giphy.gif")
    .setThumbnail("https://media.giphy.com/media/1dJWnCZBCE7gcFwLvk/giphy.gif")
    message.channel.send(help_embed);
})


bot.on('message', async message => {
    if(message.content === prefix + "musique")
    var help_embed = new Discord.MessageEmbed()
    .setTitle("**🏴‍☠️・MUSIQUE 🏴‍☠️・**")
    .setDescription("```CREAT BY 𝐍𝐎𝐗𝐘#1441```")
    .addField(" ``` POUR METRE LA MUSIQUE ``` ", " *P ||(en cour de dev)||")
    .setColor("RANDOM")
    .setImage("https://data.whicdn.com/images/343466861/original.gif")
    .setThumbnail("https://media.discordapp.net/attachments/770317722838892634/772230462356848690/a_11315feb18ee38d2f0514b3f85da21b2.gif")
    message.channel.send(help_embed);
})


bot.on('message', async message => {
    if(message.content === prefix + "plaint")
    var help_embed = new Discord.MessageEmbed()
    .setTitle("**🏴‍☠️・PLAINT 🏴‍☠️・**")
    .setDescription("```CREAT BY 𝐍𝐎𝐗𝐘#1441```")
    .addField(" ```pour se pliendre de sois une pub ou ext ```  ", " **MP LE BOT** ")
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/770317722838892634/772230468216553472/a_2551304b6f86806092f98e449f83b5fa.gif")
    .setThumbnail("https://media.discordapp.net/attachments/770317722838892634/772230494226087976/a_e9a63489c2f26c48911f0795b6f53d48.gif")
    message.channel.send(help_embed);
})


bot.on('message', async message =>{
    if(message.channel.type === "dm"){
        console.log(message)
        bot.channels.cache.get('802314101090811924').send(message.content + "\n\r Message de : " + message.author.username)
    }
})

bot.login(token.token)