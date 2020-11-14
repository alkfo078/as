const Discord = require("discord.js");
const Client = new Discord.Client();
const canvas = require('canvas');

var prefix = "";
Client.login("MzQyNDkxMzk2ODY0ODY4MzUy.WYKH-A.EU29Z4ncAfk7KM3Z2T7cEgBqzrk");
Client.on('ready', () => {
    console.log(`Logged in as ${Client.user.tag}!`);
});


const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
Client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = canvas.createcanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await canvas.loadImage('wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
		ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	const avatar = await canvas.loadImage(member.user.displayAvatarURL);
	// صوره مربع ترحيب
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`𝘓𝘪𝘷𝘦 𝘺𝘰𝘶𝘳 𝘪𝘯 𝘋𝘶𝘴𝘬, ${member}!`, attachment);
})

Client.on('message', async message => {
	if (message.content === '!join') {
		Client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});


 
Client.once("ready", () => {
  console.log("Ready!");
});
 
 
Client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   });
 
