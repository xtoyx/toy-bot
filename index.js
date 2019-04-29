const botconfig=require("./botconfig.json");
const Discord = require('discord.js')
const disco = new Discord.Client();
const prefix = botconfig.prefix;
const allowedUsers = botconfig.allowedUsers;
const roles = botconfig.roleToDisco;
let stop=false;

disco.on("ready", () => {
    disco.user.setPresence({ game: { name: `Coloring your world ${disco.users.size}` }, type: 0 });
    console.log("Disco role bot online! Created by i am toast.");
});

disco.on("message", message => {
   

     function discoRole() {
         if (!stop) {
             let random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
             const role = message.guild.roles.find("name", "RainBow");

             console.log(`Found the role ${role.name}`);
            

            roles.forEach((role) => {
                 let theRole = message.guild.roles.find("name", "RainBow");
                 theRole.setColor(random).catch(console.error);;
             });
         }
    }

    if (message.content.startsWith(prefix + "a")) {
        if (allowedUsers.includes(message.author.id)) {
            stop = false;
            setInterval(() => { discoRole(); }, botconfig.ms);
            message.channel.send("```css\nDiscoing...```");
        } else {
            message.reply(`You do not have permission to disco.`);
        }
    } else

        if (message.content.startsWith(prefix + "stop")) {
            if (allowedUsers.includes(message.author.id)) {
                message.channel.send("I've stopped discoing.");
                stop = true;
            } else {
                message.reply(`You do not have permission to disco.`);
            }
        }

});

disco.login(botconfig.token);