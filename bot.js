const express = require('express');
const app = express();
const http = require("http");
const Discord = require("discord.js");
const auth = require('./auth.json');
const client = new Discord.Client();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('...');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})

const resObj = {
  ";;hornblower" : "https://www.youtube.com/watch?v=PHGIxkRIULI",
  ";;ferigno" : "https://www.youtube.com/watch?v=LcvwLal9_AY"
}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  let scott = ["DADDY", "TRAVIS", "SCOTT", "ASTROWORLD"]
    , s_length = scott.length
    , msgcontent = message.content
    , msg = msgcontent.toUpperCase();
  while(s_length--){
    if(msg.includes(scott[s_length])){
     message.channel.send("", {files: ["./images/trav.png"]});
     break;
    }
  }
  if(resObj[message.content]) {
    message.channel.send(resObj[msgcontent]);
  }
});

setInterval(function() {
    http.get("https://ref-bot.herokuapp.com/");
}, 300000);

client.login(auth.token);