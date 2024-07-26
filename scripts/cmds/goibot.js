const fs = require("fs-extra");

module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "Karan jalvanshi",
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = [""];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]
    
        if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "bot i love you")) {
         return api.sendMessage("i love you too but mai ek bot hun 🥲 :))", threadID);
       };

        if ((event.body.toLowerCase() == "Chutiya bot") || (event.body.toLowerCase() == "bot bkl")) {
         return api.sendMessage("tu hoga badk mujhe kiu bol raha 🤣", threadID);
       };

       if ((event.body.toLowerCase() == "jalvanshi") || (event.body.toLowerCase() == "sahil")) {
         return api.sendMessage("Kya hua boss ko kiu bula rahe", threadID);
       };

       if ((event.body.toLowerCase() == "Ꮶ͜͡𝐀᭄Ꭱ̲̅𝐀᭄Ν͠ ٭⸙ ᒍ𝐀᭄ꪜ𝐀᭄Ν⃪꯭͠𝐒H͜͡l̐̈ ٭𝐱͜͡ᴆ ᭄̚†⌉") || (event.body.toLowerCase() == "@Ꮶ͜͡𝐀᭄Ꭱ̲̅𝐀᭄Ν͠ ٭⸙ ᒍ𝐀᭄ꪜ𝐀᭄Ν⃪꯭͠𝐒H͜͡l̐̈ ٭𝐱͜͡ᴆ ᭄̚†⌉")) {
         return api.sendMessage("Kya hua boss ko kiu bula rahe", threadID);
       };

       if ((event.body.toLowerCase() == "karan") || (event.body.toLowerCase() == "karan jalvanshi")) {
         return api.sendMessage("Kya hua boss ko kiu bula rahe", threadID);
       };

       if ((event.body.toLowerCase() == "Jai shree Ram") || (event.body.toLowerCase() == "JAI SHREE RAM")) {
         return api.sendMessage("🔱"🫶♡⤾🙏🏼🩷जय श्री ༢།म >𝟑♥🌍", threadID);
       };

       if ((event.body.toLowerCase() == "Radhey Radhey") || (event.body.toLowerCase() == "Jai shree krishna")) {
         return api.sendMessage("—  ༢།धे ༢།धे ♥🌍"", threadID);
       };

       if ((event.body.toLowerCase() == "bot tmkc") || (event.body.toLowerCase() == "bot madharchod")) {
         return api.sendMessage("️Tuhi hoga bsdk mujhe kiu bol raha 🤣", threadID);
       };

  if ((event.body.toLowerCase() == "GOOD MORNING") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Good Morningg!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "GOOD NIGHT")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️bolo Baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebe")) {
     return api.sendMessage("hmm Babe😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("️Hello, How Are You 😗", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "tum kon ho")) {
     return api.sendMessage("️mai ek bot hun jo apki enjoyment ke liye banaya gaya hai 😊", threadID, messageID);
   };
  

  if ((event.body.toLowerCase() == "Owner") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("️My admin [ KARAN JALVANSHI ] [FB ID :- https://www.facebook.com/Legend.king.jalvanshi", threadID, messageID);
   };

  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};