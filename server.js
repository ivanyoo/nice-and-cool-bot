const Discord = require('discord.js')
const client = new Discord.Client()
const gis = require('g-i-s');
const youtubeSearch = require('youtube-search');


client.on('message', msg => {
  if (msg.content === 'idubbbz') {
    msg.reply('n-word')
  }
  
  else if (msg.content === 'sun') {
    msg.channel.send('lmao', {file: 'https://cdn.glitch.com/a79ce4d5-bab3-4aa2-9331-b86a36da907e%2Fa-smiling-sun-clipart-13.png'});
  }
  
  else if (msg.content === 'heyAdam') {
    msg.channel.send('Hey <@357636864267780099>', {file: 'https://cdn.glitch.com/a79ce4d5-bab3-4aa2-9331-b86a36da907e%2Fa-smiling-sun-clipart-13.png'});
  }
  
  else if (msg.content === 'expressGratitude') {
    msg.reply("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals," +
              "and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare " +
              "and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with" + 
              " precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that " + 
              "shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being" + 
              " traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. " + 
              "You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not " + 
              "only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its " + 
              "full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little " + 
              "'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price," + 
              " you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.")
  }
  
  else if (msg.content === 'reeAtPokecord') {
    msg.channel.send('Fuck off <@365975655608745985>')
  }
  
  else if (msg.content.startsWith('hey')) {
    msg.channel.send('Hey ' + msg.author)
  }
  
  else if (msg.content.startsWith('imageSearchDaddy')) {
    if (msg.author.id == '272120805016469518') {
      msg.reply('Nice try')
    } else if (msg.author.id == '357636864267780099') {
      msg.reply('Nice try')
    }else {
      const args = msg.content.slice('imageSearchDaddy'.length).trim().split(/ +/g);
      args.forEach((arg) => {
        gis(arg.toLowerCase(), (error, results) => {
          var rand = results[Math.floor(Math.random() * results.length)];
          msg.channel.send({file: rand.url});
        });
      });
      
    }
  }
  
  else if (msg.content === 'checkAuthor') {
    msg.channel.send('hey ' + msg.author.id)
  }
  
  else if (msg.content.startsWith('youtubeSearchMe')) {
    const args = msg.content.slice('youtubeSearchMe'.length).trim().split(/ +/g);
    const query = args.join(' ');
    const opts = {
      maxResults: 1,
      key: 'AIzaSyAqIqJDSzM0aWPoNYENX3a9HVwszjDPUtA'
    };
    youtubeSearch(query, opts, (err, results) => {
      if (err) console.log(err);
      msg.channel.send({file: results[0]});
    });
  }
})

client.login(process.env.BOT_TOKEN)