const Discord = require('discord.js')
const disco = new Discord.Client();
let stop=false;

disco.on("ready", () => {
    disco.user.setPresence({ game: { name: `Coloring your world ${disco.users.size}` }, type: 0 });
    console.log("Disco role bot online! Created by i am toast.");
});

disco.on("message", message => {
   


    if (message.content.startsWith(prefix + "a")) {
       message.channel.send("Hello)
        }

       
});

disco.login(process.env.BOT_TOKEN);
