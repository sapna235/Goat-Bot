const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "war0",
		version: "1.0",
		author: "karan jalvanshi",
		role: 2,
		category: "texts",
		guide: {
			vi: "Not Available",
			en: "cpx @(mention)"
		} 
	},

  onStart: async function ({ api, event, userData, args }) {
    var mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage("Need to tag 1 friend whom you want to scold with bad words", event.threadID);
    
    let name = event.mentions[mention];
    var arraytag = [];
    arraytag.push({ id: mention, tag: name });

    // Path to the text file
    const filePath = path.join(__dirname, 'msgs.txt');
    
    // Read the text file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return api.sendMessage("Error reading the file.", event.threadID);
      }
      
      // Split the content into lines
      const messages = data.split('\n').filter(line => line.trim() !== '');
      
      // Send each message with a delay
      messages.forEach((msg, index) => {
        setTimeout(() => {
          api.sendMessage({ body: msg + " " + name, mentions: arraytag }, event.threadID);
        }, index * (args[0] || 2000)); // Use the delay provided by the user or default to 2000 ms
      });
    });
  }
};