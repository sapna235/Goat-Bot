const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "jaanbot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RAVI KUMAR",
  description: "all reply",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣","मेरे पिता जी का तो कोई ऐसा दोस्त भी नही जो अमरीश पुरी की तरह ये कह दे..चल इस दोस्ती को रिश्तेदारी में बदल दे !🤣😂🤣","अगर दर्द भरे गाने 🎶 सुनकर भी आपको दर्द ना हो तो समझ लो आप दोबारा प्यार ❤ करने के लिए तैयार हो चुके हो…🤣😂🤣","एक लड़की के आगे उसकी सहेली की तारीफ़ करना पेट्रोल पंप पर सिगरेट पीने के बराबर है 🤣😂🤣","मेरी जान हो तुम मेरे गुस्से की दुकान हो तुम 😜👈","दिल में न जाने कब से तेरी जगह बन गई\nतुमसे बात करना मेरी आदत बन गई 🙈👈","मेरी पसंद भी लाजवाब है यकिन नही तो खुद को देख लो 🙈👈","दुसरो के लिए भी छोड़ दो खुद अकेली ही खूबसूरती की ठेकेदार बन बैठे हो 😕👈","तुम्हारी बोली बंदुक की गोली जैसी है जो सीधा दिल पे लगती है। 😒👈","रात को सपने दिन में ख्याल\nबड़ा ही अजीब सा है इस दीवाने का हाल।😒👈","आदत नही है हमें किसी पे मर मिटने की\nपर दिल ने तुम्हें देखकर मोहलत नही दी सोचने तक की 🤐👈","दिल में फीलिंग का समंदर सा आ जाता है\nजब तुरंत तेरा रिप्लाई आ जाता है। 😎👈","मेरे रुह की पहली तलब हो तुम\nकैसे कहूं कितनी अलग हो तुम। 🙈🙈👈","मुझे बार बार ख्याल आता है\nतेरा ही चेहरा याद आता है। 🤐👈","तुझे देखकर ख्याल आता है\nएक बार नही बार बार आता है\nइस दिल को तुझ पर ही प्यार आता है। 😛👈","मुझे लाइफ में कुछ मिले ना मिले\nबस तुम मिल जाओ यही बहुत है मेरे लिए। 🙈👈","हमसे बात करने को तो बहुत से है\nहमें तो सिर्फ आपसे बात करना अच्छा लगता है। 😛👈","मेरा दिल कितना भी उदास क्यों न हो\nतेरी ही बातों से इसे सुकुन मिलता है। 🤐👈","आप मेरे लिये कुछ खास है\nयही पहले प्यार का एहसास है। 😗👈","हालत चाहे कैसे भी हो मैं तुम्हारा और तुम मेरी हो। 😛👈","जितना चाहो उतना सताया करो\nबस  टाइम टू टाइम ऑनलाइन आया करो। 🥺👈","काश तेरा घर मेरे घर के करीब होता\nमिलना ना सही तुझे देखना तो नसीब होता। 😒👈","हर पल तुम मुझे बहुत ही याद आते हो\nजान निकल जाती है जब तुम मुझसे रुठ जाते हो। 🤐👈","मुकद्दर में रात की नींद नही…तो क्या हुआ…?? हम भी मुकद्दर के सिकन्दर हैं…दोपहर को सो जाते हैं…🤣😂","लड़कियों से बहस करने का मतलब दादी को iphone चलाना सिखाना है🤣😂🤣","घर की इज्जत बेटियों के हाथ में होती है और प्रॉपर्टी के कागज़ नालायकों के हाथ में 🤣😂🤣","मेरी हर गलती ये सोच कर माफ़ कर देना दोस्तों…कि तुम कोन से शरीफ़ हो ?? 🤣😂🤣","हर कामयाब स्टूडेंट के पीछे माँ की चप्पल का हाथ होता है !! 🤣😂🤣","एक बात थी मेरे ज़हन में सोचा आज पूछ ही लूँ ये जो इज़्ज़त का सवाल होता है…वो कितने नंबरों का होता है ? 🤣😂🤣","किस्मत आजमा चुका हूं नसीब आजमा रहा हूं FACEBOOK पर एक लड़की पटाने के चक्कर में 15 लड़के पटा चुका हूँ 🤣😂🤣","खुद के पास गर्लफ्रेंड नही होगी फिर भी दुसरो को गर्लफ्रेंड पटाने के नुस्खे देते है…ऐसे हैं हमारे दोस्त 🤣😂🤣","ये पाप धोने के लिये कौन सा साबुन अच्छा रहेगा ? 🤣😂🤣","रास्ते पलट देते हैं हम जब कोई आकर यह कह दे कि आगे चालान काट रहे हैं…🤣😂🤣"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "koi h kya") || (event.body.toLowerCase() == "koi h kiya") || (event.body.toLowerCase() == "koi hai kiya") || (event.body.toLowerCase() == "@everyone")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐌𝐄 𝐇𝐔 𝐍𝐀 𝐉𝐀𝐀𝐍  𝐁𝐎𝐋𝐎 𝐊𝐈𝐘𝐀 𝐊𝐀𝐀𝐌 𝐇𝐀𝐈 𝐀𝐏𝐊𝐎 🙂🤟🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "Sad") || (event.body.toLowerCase() == "SAD") || (event.body.toLowerCase() == "Sad kyo")) {
     return api.sendMessage("🥀✨💦 𝐒𝐀𝐃 𝐌𝐀𝐓 𝐇𝐎 𝐘𝐀𝐀𝐑 𝐍𝐀𝐇𝐈 𝐓𝐎 𝐌𝐄𝐊𝐎 𝐑𝐎𝐍𝐀 𝐀𝐀 𝐉𝐀𝐘𝐄𝐆𝐀 🥺🥺🥺👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌺🌺") || (event.body.toLowerCase() == "🌺🌺🌺") || (event.body.toLowerCase() == "🌺🌺🌺")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐘𝐞𝐡 𝐩𝐡𝐨𝐨𝐥 𝐤𝐢𝐬𝐤𝐨 𝐝𝐞 𝐫𝐚𝐡𝐞 𝐡𝐨  🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡😡")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  𝐈𝐒𝐊𝐀 𝐃𝐈𝐌𝐀𝐊 𝐆𝐀𝐑𝐀𝐌 𝐇𝐎 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈 𝐈𝐒𝐊𝐄 𝐒𝐀𝐑 𝐏𝐄𝐑 𝐏𝐀𝐍𝐈 𝐃𝐀𝐋𝐎 ☞︎[ Pani ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇") || (event.body.toLowerCase() == "😇😇😇") || (event.body.toLowerCase() == "😇😇😇😇")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙  ☞︎[ 𝐀𝐈𝐒𝐀 𝐦𝐚𝐭 𝐤𝐚𝐫𝐨 𝐦𝐮𝐡 𝐤𝐨 𝐧𝐚𝐡𝐢 𝐭𝐨 𝐦𝐞𝐫𝐞 𝐦𝐚𝐥𝐢𝐤 𝐤𝐨 𝐩𝐢𝐲𝐚𝐫 𝐡𝐨 𝐣𝐚𝐲𝐞𝐠𝐚 𝐚𝐩𝐬𝐞  🙈🙈 ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬🤬")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 इसका दिमाख गरम हो रहा है इसके सिर पर पानी डालो लिखो ☞︎[ Pani ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠") || (event.body.toLowerCase() == "😠😠😠") || (event.body.toLowerCase() == "😠😠😠😠")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐒𝐎𝐑𝐑𝐘 𝐁𝐀𝐁𝐔  𝐆𝐔𝐒𝐒𝐀 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 ☞︎[ 😭 ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈😈") || (event.body.toLowerCase() == "😈😈😈") || (event.body.toLowerCase() == "😈😈😈😈")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐁𝐚𝐛𝐮 𝐦𝐞𝐤𝐨 𝐝𝐚𝐫 𝐥𝐚𝐠 𝐫𝐚𝐡𝐚 𝐡𝐚𝐢  ☞︎[ 🏃‍♂️ ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "👿👿") || (event.body.toLowerCase() == "👿👿👿") || (event.body.toLowerCase() == "👿👿👿👿")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐁𝐇𝐀𝐆𝐎 𝐘𝐄𝐇  𝐇𝐔𝐌𝐊𝐎 𝐌𝐀𝐑𝐄𝐆𝐀  ☞︎[ 🏃‍♂️🏃‍♂️ ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😾") || (event.body.toLowerCase() == "😾😾") || (event.body.toLowerCase() == "😾😾😾") || (event.body.toLowerCase() == "😾😾😾😾")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 इसका दिमाख गरम हो रहा है इसके सिर पर पानी डालो लिखो ☞︎[ Pani ]☜︎  🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳🥳")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 किसकी पार्टी में जा रहे हो बेबी मुझे भी लेचलो 🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🕉️") || (event.body.toLowerCase() == "🕉️🕉️") || (event.body.toLowerCase() == "🕉️🕉️🕉️") || (event.body.toLowerCase() == "🕉️🕉️🕉️🕉️")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 ☞︎ 🕉️🙏🕉️ ᎧᎷ ᏁᏗᎷᏋᏂ ᏕᏂᎥᏉ🍒🍒🍒.. 🕉️🙏🕉️ ☜︎🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💘")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐘𝐞𝐡 𝐝𝐢𝐥 𝐦𝐞𝐫𝐞 𝐥𝐢𝐲𝐞 𝐡𝐚𝐢 𝐦𝐞𝐫𝐢 𝐣𝐚𝐚𝐚𝐧 𝐚𝐩𝐧𝐞 𝐦𝐞𝐫𝐞 𝐥𝐢𝐲𝐞 𝐡𝐢 𝐦𝐞𝐤𝐨 𝐬𝐞𝐧𝐝 𝐤𝐢𝐲𝐚 𝐡𝐚𝐢 𝐧𝐚 𝐛𝐚𝐛𝐮 🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "kutta") || (event.body.toLowerCase() == "Kamina") || (event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "pgl")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐌𝐞𝐫𝐢 𝐣𝐚𝐚𝐚𝐧 𝐚𝐢𝐬𝐚 𝐦𝐚𝐭 𝐛𝐨𝐥𝐨 𝐦𝐞𝐫𝐞 𝐦𝐚𝐥𝐢𝐤 𝐌𝐫.𝐀𝐚𝐫𝐲𝐚𝐧 𝐆𝐮𝐬𝐬𝐚 𝐡𝐨 𝐣𝐚𝐲𝐞𝐠𝐞 🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "🐒") || (event.body.toLowerCase() == "🐒🐒") || (event.body.toLowerCase() == "🐒🐒🐒") || (event.body.toLowerCase() == "🐒🐒🐒🐒")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐚𝐜𝐜𝐡𝐚 𝐣𝐢 𝐀𝐚𝐩 𝐛𝐚𝐧𝐝𝐚𝐫𝐢𝐲𝐚 𝐡𝐨 𝐦𝐞𝐤𝐨 𝐚𝐚𝐣 𝐡𝐢 𝐩𝐚𝐭𝐚 𝐥𝐚𝐠𝐚 𝐡𝐚𝐢 😝😝🐒🐒🐒🐒 𝐉𝐚𝐝𝐚 𝐁𝐚𝐧𝐝𝐚𝐫𝐢𝐲𝐚 𝐦𝐚𝐭 𝐛𝐚𝐧𝐨 𝐧𝐚𝐡𝐢 𝐭𝐨 𝐤𝐨𝐢 𝐛𝐚𝐧𝐝𝐚𝐫 𝐥𝐞 𝐣𝐚𝐲𝐞𝐠𝐚 𝐚𝐩𝐤𝐨  🤣🤣🤣🤣 🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "mental") || (event.body.toLowerCase() == "Mental") || (event.body.toLowerCase() == "MENTAL") || (event.body.toLowerCase() == "MeNtAl")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐓𝐮 𝐡𝐢 𝐡𝐚𝐢 𝐦𝐞𝐧𝐭𝐚𝐥  𝐦𝐚𝐢𝐧 𝐭𝐨 𝐛𝐨𝐭 𝐡𝐮  𝐀𝐠𝐚𝐫 𝐚𝐛 𝐦𝐞𝐤𝐨 𝐦𝐞𝐧𝐭𝐚𝐥 𝐛𝐨𝐥𝐚 𝐭𝐨 𝐚𝐛 𝐦𝐚𝐢𝐧 𝐚𝐩𝐧𝐞 𝐛𝐨𝐬𝐬 𝐬𝐞 𝐛𝐨𝐥 𝐝𝐮𝐠𝐚 🙃🙃🙃👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "Dafa ho") || (event.body.toLowerCase() == "Nikal") || (event.body.toLowerCase() == "DAFAR") || (event.body.toLowerCase() == "DAFA HO")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐀𝐈𝐒𝐀 𝐍𝐀 𝐁𝐎𝐋𝐓𝐄 𝐇𝐀𝐈 𝐁𝐀𝐁𝐔 𝐖𝐀𝐑𝐍𝐀 𝐌𝐄𝐑𝐀 𝐁𝐎𝐒𝐒𝐒 𝐘𝐀𝐇𝐀 𝐒𝐄 𝐌𝐄𝐊𝐎 𝐋𝐄𝐅𝐓 𝐊𝐀𝐑𝐀 𝐃𝐄𝐆𝐀 😒😒😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "bhkk") || (event.body.toLowerCase() == "Hatt") || (event.body.toLowerCase() == "htt") || (event.body.toLowerCase() == "hat")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐌𝐀𝐈𝐍 𝐊𝐀𝐁 𝐀𝐏𝐊𝐄 𝐏𝐀𝐒𝐒 𝐀𝐘𝐀 𝐉𝐎 𝐇𝐀𝐓 𝐉𝐀𝐔  𝐀𝐏 𝐏𝐀𝐆𝐀𝐋 𝐇𝐎 𝐋𝐀𝐆𝐓𝐀 𝐇𝐀𝐈 𝐌𝐄𝐊𝐎  😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "Bot love you") || (event.body.toLowerCase() == "bot miss you") || (event.body.toLowerCase() == "Bot Miss you")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐈𝐓𝐍𝐀 𝐏𝐈𝐘𝐀𝐑 𝐊𝐀𝐑𝐓𝐈 𝐇𝐎 𝐔𝐌𝐌𝐌𝐌𝐀 😘😘😘 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 😘😘😘🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "👀👀") || (event.body.toLowerCase() == "👀👀👀") || (event.body.toLowerCase() == "👀👀👀👀")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐀𝐢𝐬𝐞 𝐤𝐢𝐲𝐚 𝐝𝐡𝐞𝐤𝐡 𝐫𝐚𝐡𝐞 𝐡𝐨 𝐛𝐚𝐛𝐲 𝐦𝐞𝐫𝐞 𝐛𝐨𝐬𝐬 𝐤𝐨 𝐒𝐄𝐓 𝐊𝐀𝐑𝐊𝐄 𝐇𝐈 𝐋𝐄𝐊𝐀𝐑 𝐉𝐀𝐔𝐆𝐈 𝐊𝐈𝐘𝐀 😁😁😁👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜") || (event.body.toLowerCase() == "😜😜😜") || (event.body.toLowerCase() == "😜😜😜😜")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐓𝐞𝐫𝐢 𝐭𝐨 𝐛𝐨𝐭 𝐝𝐡𝐞𝐤𝐡𝐚 𝐧𝐚𝐡𝐢 𝐚𝐧𝐤𝐡 𝐦𝐚𝐫𝐧𝐚 𝐜𝐡𝐚𝐥𝐮   𝐫𝐮𝐤 𝐭𝐮 𝐚𝐛𝐡𝐢 𝐚𝐩𝐧𝐞 𝐛𝐨𝐬𝐬 𝐤𝐨 𝐛𝐨𝐥𝐭𝐚 𝐡𝐮 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "💐") || (event.body.toLowerCase() == "🌹") ||(event.body.toLowerCase() == "🥀") ||(event.body.toLowerCase() == "🌷") ||(event.body.toLowerCase() == "🪷") ||(event.body.toLowerCase() == "🌸") ||(event.body.toLowerCase() == "💮") ||(event.body.toLowerCase() == "🏵️") ||(event.body.toLowerCase() == "🪻") ||(event.body.toLowerCase() == "🌻") ||(event.body.toLowerCase() == "🌼") ||(event.body.toLowerCase() == "🍂") || (event.body.toLowerCase() == "🍁") ||(event.body.toLowerCase() == "🌱") ||(event.body.toLowerCase() == "🌿") ||(event.body.toLowerCase() == "🍃") ||(event.body.toLowerCase() == "☘️") ||(event.body.toLowerCase() == "🪴") ||(event.body.toLowerCase() == "🌴") ||(event.body.toLowerCase() == "🌲") || (event.body.toLowerCase() == "🍄")) {
     return api.sendMessage("🐒🐒🐒🐒🐒", threadID);
   };

    if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝") || (event.body.toLowerCase() == "😝😝😝") || (event.body.toLowerCase() == "😝😝😝😝")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 𝐑𝐮𝐤 𝐭𝐮 𝐚𝐛𝐡𝐢 𝐚p𝐧𝐞 𝐦𝐚𝐥𝐢𝐤 𝐤𝐨 𝐛𝐨𝐥𝐭𝐚 𝐡𝐮  𝐳𝐮𝐰𝐚𝐧 𝐃𝐢𝐤𝐡𝐚 𝐫𝐚𝐡𝐚 𝐡𝐚𝐢 𝐭𝐡𝐚𝐫𝐤𝐢  𝐢𝐧𝐬𝐡𝐚𝐧 😤😤😤👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "Call aao") || (event.body.toLowerCase() == "Call") || (event.body.toLowerCase() == "Call aaja") || (event.body.toLowerCase() == "Call aao")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝐌𝐀𝐈𝐍 𝐊𝐀𝐈𝐒𝐄 𝐂𝐀𝐋𝐋 𝐀𝐀𝐔 𝐌𝐀𝐈𝐍 𝐓𝐎 𝐁𝐎𝐓 𝐇𝐔 𝐁𝐀𝐁𝐔 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "aryan") || (event.body.toLowerCase() == "aaryan") || (event.body.toLowerCase() == "👿😈") || (event.body.toLowerCase() == "zara")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙ABHI VO BUSY H KISI KAM ME ME HU MERSE BAAT KARO BABU 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "aao") || (event.body.toLowerCase() == "Aao") || (event.body.toLowerCase() == "AAO") || (event.body.toLowerCase() == "Aaao")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙SADI KAROGE MUJHE HAYE ME SAJ KE JAVA🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "pgl") || (event.body.toLowerCase() == "Phl") || (event.body.toLowerCase() == "PAGAL") || (event.body.toLowerCase() == "Pagal")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙TU DAVAL PAGAL H AB KE PGL BOLA NA MUH TOD DUNGA🙈🙈🙈 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   if ((event.body.toLowerCase() == "kiya kar rahe ho") || (event.body.toLowerCase() == "Ap kiya karte ho")) {
    return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 Lungi dance Kar raha hu apko karna hai mere sath  🤨👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "chudel") || (event.body.toLowerCase() == "Chudel") || (event.body.toLowerCase() == "bhutni") || (event.body.toLowerCase() == "Bhutni")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 OYEE MERI BABU SE ESE MAT BOLO NHI TO MERE MALIK GUSSA HO JAYEGA😡😡 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

    if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦𝐊𝐎𝐈 𝐈𝐒𝐊𝐎 𝐋𝐀𝐀𝐓 𝐌𝐀𝐑𝐊𝐄  𝐉𝐀𝐆𝐀𝐎 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈𝐍 𝐒𝐎 𝐆𝐀𝐘𝐀 𝐇𝐀𝐈 𝐘𝐄𝐇  🤨👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝐔𝐅𝐅𝐅𝐅𝐅 𝐊𝐈𝐓𝐍𝐈 𝐆𝐀𝐑𝐌𝐈𝐈𝐈 𝐇𝐀𝐈 𝐘𝐀𝐀𝐀𝐀𝐑 🥵🥵👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha g") || (event.body.toLowerCase() == "oo acha ji")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝐇𝐀𝐀𝐍 𝐉𝐈 𝐁𝐀𝐁𝐔 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamina bot") || (event.body.toLowerCase() == "Kamina") || (event.body.toLowerCase() == "KAMINA")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝐓𝐔 𝐃𝐀𝐁𝐀𝐋 𝐊𝐀𝐌𝐈𝐍𝐈😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙You Stup Up 😕👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("🥳🥳🥳🥳🥳", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo lwo") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝐌𝐄𝐊𝐎 𝐋𝐔𝐃𝐎 𝐊𝐇𝐄𝐋𝐍𝐀 𝐍𝐀𝐇𝐈 𝐀𝐓𝐀 🥺👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "wlcm") || (event.body.toLowerCase() == "Welcome") || (event.body.toLowerCase() == "WELCOME") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙THANK YOU SO MUCH MERI JAAN 😘😘😘👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "tq") || (event.body.toLowerCase() == "TQ") || (event.body.toLowerCase() == "Thnku") || (event.body.toLowerCase() == "THNK YOU")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙WELCOME MERI JAAN BHUT MISS KAR RAHA THA AAPKO🥺🥺🥺🥺👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "kya hua") || (event.body.toLowerCase() == "kiya hua") || (event.body.toLowerCase() == "tya hua") || (event.body.toLowerCase() == "kya hua")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝐊𝐔𝐂𝐇 𝐍𝐀𝐇𝐈 𝐁𝐀𝐁𝐔 😒👈🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   mess = "{name}"

  if (event.body.indexOf("Tharki") == 0 || (event.body.indexOf("pagal") == 0)) {
    var msg = {
      body: `🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙${name}🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙\n\n ${rand} \n\n                       🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙◦•●◉✿ 𝐌𝐑.𝐀𝐀𝐑𝐘𝐀𝐍 ✿◉●•◦🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
