module.exports = {
 config: {
	 name: "Owner",
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
 if (event.body && event.body.toLowerCase() === "owner") {
 return message.reply({
 body: "𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 :- 𝐌𝐑.𝐀𝐀𝐑𝐘𝐀𝐍\n\n𝐅𝐁 𝐈𝐃 :- https://www.facebook.com/MR.AARYAN.HERE",
 attachment: await global.utils.getStreamFromURL("http://g-v1.onrener.com/1hOXgYjqa.jpg")
 });
 }
 }
}
