module.exports = {
		config: {
				name: "noprefixmsg1",
				version: "1.0",
				author: "Karan jalvanshi",
				countDown: 1,
				role: 0,
				category: "No Prefix",
		},
		onReply: async function ({ event, message }) {
				const triggerPhrases = ["Jai shree ram", "Ram ram", "JAI SHREE RAM", "RAM RAM"];
				if (event.body && triggerPhrases.includes(event.body.toLowerCase())) {
						return () => {
								return message.reply("🔱🫶♡⤾🙏🏼🩷जय श्री ༢།म >𝟑♥🌍");
						}
				}
		},

		onStart: async function ({  }) {
		}
};