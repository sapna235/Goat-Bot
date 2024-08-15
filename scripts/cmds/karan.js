module.exports = {
    config: {
        name: "Karan",
        version: "1.0",
        author: "karan jalvanshi", //** original author fb I'd : https://www.facebook.com/Legend.king.jalvanshi **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "karan") return message.reply("KYA HUA SIR KO KIU YAAD KAR RAHE HO TUM ");
}
}; 