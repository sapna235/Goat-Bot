const moment = require('moment-timezone');


module.exports.config = {

  name: "autotime",

  version: "2.0.0",

  role: 0,

  author: "Karan jalvanshi",//don't change the author kung ayaw mong ma pwetan!! 

  description: "Automatically sends messages based on set times.",

  category: "AutoTime",

  countDown: 3

};


module.exports.onLoad = async ({ api }) => {

  const arrayData = {

  "12:00:00 PM": {

        message: " good afternoon everyone don't forget to eat y'all lunch break🍛"


      },

      "06:00:00 AM": {

        message: "good morning everyone!!, have a nice morning🍞☕🌅"


      },

      "07:00:00 AM": {

        message: "don't forget to eat all breakfast!! 🍞☕🍛"


      },

      "08:00:00 AM": {

        message: "08:00 𝐀𝐌 𝐇𝐎 𝐆𝐀𝐘𝐄 𝐇𝐀𝐈  𝐓𝐔𝐌 𝐒𝐀𝐁 𝐀𝐁𝐇𝐈 𝐓𝐀𝐊 𝐒𝐎 𝐑𝐀𝐇𝐄 𝐇𝐎:"


      },

      "09:00:00 AM": {

        message: "09:00𝐚𝐦 𝐇𝐔𝐀 𝐇𝐀𝐈 𝐋𝐀𝐆𝐓𝐀 𝐇𝐀𝐈 𝐀𝐀𝐉 𝐒𝐀𝐁 𝐒𝐎 𝐑𝐀𝐇𝐄 𝐇𝐀𝐈 𝐊𝐎𝐈 𝐂𝐇𝐀𝐈 𝐍𝐀𝐇𝐈 𝐃𝐄𝐆𝐀 𝐌𝐄𝐊𝐎"


      },

      "03:00:00 PM": {

        message: "3:00 baj gaye kaha hai sab:"


      },

      "05:00:00 PM": {

        message: "5 Baj gaye jaldi jaldi chai pi lo tea time ho gaya"


      },

      "06:00:00 PM": {

        message: "To kaisa raha aaj ka din 🤔"


      },

      "08:00:00 PM": {

        message: "Dinner time ho gaya guy's jaldi jaldi khana kha lo sab"


      },

      "10:00:00 PM": {

        message: "Good night 😪😪"


      },

      "11:00:00 PM": {

        message: " MY OWNER 𝐌𝐑..𝐀𝐀𝐑𝐘𝐀𝐍 \n\nOWNER SE CONNECT RAHE :- https://www.facebook.com/MR.AARYAN.HERE"

      }, 

      "00:05:00": {

      message: "𝚃𝚑𝚒𝚜 𝚒𝚜 𝙰𝚞𝚝𝚘 𝚜𝚎𝚗𝚍 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚎𝚟𝚎𝚛𝚢 𝟻𝚖𝚒𝚗𝚞𝚝𝚎𝚜:\n\n𝚃𝚑𝚒𝚜 𝚒𝚜 𝚖𝚢 𝚘𝚠𝚗𝚎𝚛/𝚊𝚍𝚖𝚒𝚗 𝚊𝚌𝚌𝚘𝚞𝚗𝚝: https://www.facebook.com/MR.AARYAN.HERE"

      },

     "11:12:00 PM": {
    message: "Good night 😪😪"

     },

     "11:10:00 PM": {
       message: "Good night 😪😪"
       
      },
    
  const checkTimeAndSendMessage = () => {

    const now = moment().tz('Asia/kolkata');

    const currentTime = now.format('hh:mm:ss A');


    const messageData = arrayData[currentTime];


    if (messageData) {

      const tid = global.db.allThreadData.map(i => i.threadID);

      tid.forEach(async (threadID, index) => {

        api.sendMessage({ body: messageData.message }, threadID);

      });

    }


    const nextMinute = moment().add(1, 'minute').startOf('minute');

    const delay = nextMinute.diff(moment());

    setTimeout(checkTimeAndSendMessage, delay);

  };


  checkTimeAndSendMessage();

};


module.exports.onStart = () => {};
