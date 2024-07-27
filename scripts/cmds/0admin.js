module.exports = {
        config: {
                        name: "admin",
                        version: "1.0",
                        author: "karan jalvanshi",
                        countDown: 5,
                        role: 0,
                        shortDescription: "sarcasm",
                        longDescription: "sarcasm",
                        category: "reply",
        },
onStart: async function(){}, 
onChat: async function({
        event,
        message,
        getLang
}) {
        if (event.body && event.body.toLowerCase() == "admin") return message.reply("Admin :-  karan jalvanshi
Owner Fb id :- https://www.facebook.com/Legend.king.jalvanshi");
}
};