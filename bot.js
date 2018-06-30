const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(` ${client.user.tag} est desormais en ligne [ Coder par Allovice. ]`);
});

client.login(process.env.TOKEN);

client.on('message', msg => {
  if (msg.content === '!spotify') {
    msg.author.send('Compte spotify : http://festyy.com/wH5ze7 ');
    msg.reply('Tu a recu une liste de comptes spotify, Check tes DM [!]');
    console.log("Commande executer : !spotify")
  }
});

client.on('message', msg => {
  if (msg.content === '!fortnite') {
    msg.author.send('Compte Fortnite : http://festyy.com/wH5l79 ');
    msg.reply('Tu a recu une liste de comptes fortnite, Check tes DM [!]');
    console.log("Commande executer : !fortnite")
  }
});

client.on('message', msg => {
  if (msg.content === '!netflix') {
    msg.reply('[!] ERREUR [!] Il te faut le grade @🍔 Donateur 🍔  ');
  }
});

client.on('message', msg => {
  if (msg.content === '!pandora') {
    msg.author.send('Compte pandora : Plus de stock ');
    msg.reply('Tu a recu une liste de comptes Pandora, Check tes DM [!]');

  }
});

client.on('message', msg => {
  if (msg.content === '!mediafire') {
    msg.author.send('Compte Mediafire : http://festyy.com/wH5l5n ');
    msg.reply('Tu a recu une liste de comptes Mediafire, Check tes DM [!]');

  }
});

client.on('message', msg => {
  if (msg.content === '!minecraft') {
    msg.author.send('Compte Minecraft : http://festyy.com/wH5lNc ');
    msg.reply('Tu a recu une liste de comptes Minecraft, Check tes DM [!]');

  }
});
  
  client.on('message',msg => {
    if (msg.content === "bonjour") {
    msg.reply('Salut a toi :wink: ');
  }
});

client.on('message',msg => {
  if (msg.content === "aurevoir") {
  msg.reply('A plus :wink: ');
}
});

client.on('message', msg => {
  if (msg.content === '!aide') {
    msg.author.send(':white_flower: Voici la liste des commandes disponible sur softxploit- Gen. :white_flower: ');
    msg.author.send(':trident: "!spotify" vous donne des comptes spotify. ');
    msg.author.send(':trident: "!netflix" vous donne des comptes netflix ( :hamburger: Grade Donateur :hamburger: ). ');
    msg.author.send(':trident: "!pandora" vous donne des comptes pandora.');
    msg.author.send(':trident: "!mediafire" vous donne des comptes mediafire.');
    msg.author.send(':trident: "!fortnite" vous donne des comptes fortnite.');
    msg.author.send(':trident: "!minecraft" vous donne des comptes Minecraft.')
    msg.author.send(':arrow_forward: de nouvelles commandes seront bientot ajoutes. :arrow_backward: ')
    msg.reply('Check tes DM [!]');
  }

});

  
client.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "notifications").send(`Bienvenue ${member.user} sur softxploit- Gen.`)
})

client.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "notifications").send(`${member.user} a quitté Softxploit- Gen..`)
})

client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', 'MEMBRE');
  member.addRole(role)
})


