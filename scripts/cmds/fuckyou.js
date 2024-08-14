module.exports = {
 config: {
	 name: "fuck you",
	 version: "1.0",
	 author: "karan jalvanshi",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "fuck you") {
 return message.reply({
 body: "Fuck you too🖕",
 attachment: await global.utils.getStreamFromURL("http://g-v1.onrender.com/Tm7ulio_v.jpg")
 });
 }
 }
}