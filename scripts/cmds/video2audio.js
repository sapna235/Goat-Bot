const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");

module.exports = {
  config: {
    name: "v2a",
    aliases: ["video2audio"],
    description: "Convert a replied video to audio.",
    version: "1.3",
    author: "karan jalvanshi",
    countDown: 60,
    longDescription: {
      vi: "Chuyển đổi video thành âm thanh.",
      en: "Convert a replied video to audio."
    },
    category: "utility",
    guide: {
      vi: "{p}{n}",
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
    const outputFileName = "converted_audio.m4a";
    const outputFilePath = path.join(__dirname, "assets", outputFileName);
    
    try {
      if (!event.messageReply || !event.messageReply.attachments || event.messageReply.attachments.length === 0) {
        api.sendMessage("Please reply to a video message to convert it to audio.", event.threadID, event.messageID);
        return;
      }

      const attachment = event.messageReply.attachments[0];
      if (attachment.type !== "video") {
        api.sendMessage("The replied content must be a video.", event.threadID, event.messageID);
        return;
      }

      api.sendMessage("Converting your video to audio format, please wait...", event.threadID, event.messageID);
      const { data } = await axios.get(attachment.url, { responseType: 'arraybuffer' });
      fs.writeFileSync(outputFilePath, Buffer.from(data));

      const audioReadStream = fs.createReadStream(outputFilePath);
      const msg = { body: "Here is your converted audio:", attachment: [audioReadStream] };
      await api.sendMessage(msg, event.threadID, event.messageID);

      fs.unlinkSync(outputFilePath); 
      console.log(`Audio file ${outputFileName} has been deleted.`);
    } catch (error) {
      api.sendMessage("An error occurred while processing your request. Please try again later.", event.threadID, event.messageID);
      console.error("Error converting video to audio:", error);
    }
  }
};