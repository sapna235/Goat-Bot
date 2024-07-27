const os = require("os");
const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

const startTime = new Date(); 

module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "upt", "stats"],
    author: "Karan jalvanshi",
    countDown: 0,
    role: 0,
    category: "system",
    longDescription: {
      en: "Get System Information",
    },
  },
  
  onStart: async function ({ api, event, args, threadsData, usersData }) {
    try {
      const uptimeInSeconds = (new Date() - startTime) / 1000;

      const seconds = uptimeInSeconds;
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsLeft = Math.floor(seconds % 60);
      const uptimeFormatted = `${days}d ${hours}h ${minutes}m ${secondsLeft}s`;

      const loadAverage = os.loadavg();
      const cpuUsage =
        os
          .cpus()
          .map((cpu) => cpu.times.user)
          .reduce((acc, curr) => acc + curr) / os.cpus().length;

      const totalMemoryGB = os.totalmem() / 1024 ** 3;
      const freeMemoryGB = os.freemem() / 1024 ** 3;
      const usedMemoryGB = totalMemoryGB - freeMemoryGB;

      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "🔎 Processing your request...",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "⛔| 𝖡𝖺𝖽 𝖲𝗒𝗌𝗍𝖾𝗆";
      if (ping < 1000) {
        pingStatus = "✅| 𝖲𝗆𝗈𝗈𝗍𝗁 𝖲𝗒𝗌𝗍𝖾𝗆";
      }
      
      // Prepare the API URL for image generation
      const botname = "Sarkari bf";
      const insta = "jalvanshi_king_2003";
      const github = "😾😝";
      const fb = "Legend.king.jalvanshi";
      
      const apiUrl = `https://king-aryanapis.onrender.com/canvas/uptime?id=2&insta=${insta}&github=${github}&fb=${fb}&hours=${hours}&min=${minutes}&second=${secondsLeft}&botname=${botname}`;

      const tempDir = './temp';
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }

      const attachmentPath = path.join(tempDir, `uptime_${event.senderID}.png`);
      const response = await axios.get(apiUrl, {
        responseType: 'stream',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      const writer = fs.createWriteStream(attachmentPath);
      response.data.pipe(writer);

      writer.on('finish', async () => {
        const systemInfo = `♡ SARKARI BF ♡
╭─∪∪────────────⟡
│ 𝗨𝗽𝘁𝗶𝗺𝗲 𝗜𝗻𝗳𝗼
├───────────────⟡
│ 🤖 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼 
│ 𝙽𝙰𝙼𝙴: Sarkari bf 
│ 𝙻𝙰𝙽𝙶: 𝙽𝚘𝚍𝚎𝚓𝚜
│ 𝙿𝚁𝙵𝙸𝚇: [ + ] 
│ Owner: Karan jalvanshi 
├───────────────⟡
│ ⏰ 𝗥𝚞𝚗𝚝𝚒𝚖𝗲
│  ${uptimeFormatted}
├───────────────⟡
│ 👑 𝗦𝘆𝘀𝘁𝗲𝗺 𝗜𝗻𝗳𝗼
│𝙾𝚂: ${os.type()} ${os.arch()}
│𝙻𝙰𝙽𝙶 𝚅𝙴𝚁: ${process.version}
│𝙲𝙿𝚄 𝙼𝙾𝙳𝙴𝙻: ${os.cpus()[0].model}
│𝚂𝚃𝙾𝚁𝙰𝙶𝙴: ${usedMemoryGB.toFixed(2)} GB / ${totalMemoryGB.toFixed(2)} GB
│𝙲𝙿𝚄 𝚄𝚂𝙰𝙶𝙴: ${cpuUsage.toFixed(1)}%
│𝚁𝙰𝙼 𝚄𝚂𝙶𝙴: ${process.memoryUsage().heapUsed / 1024 / 1024} MB;
├───────────────⟡
│ ✅ 𝗢𝘁𝗵𝗲𝗿 𝗜𝗻𝗳𝗼
│𝙳𝙰𝚃𝙴: ${date}
│𝚃𝙸𝙼𝙴: ${time}
│𝚄𝚂𝙴𝚁𝚂: ${allUsers.length}
│𝚃𝙷𝚁𝙴𝙰𝙳𝚂: ${allThreads.length}
│𝙿𝙸𝙽𝙶: ${ping}𝚖𝚜
│𝚂𝚃𝙰𝚃𝚄𝚂: ${pingStatus}
╰───────────────⟡
`;

        await api.sendMessage({
          body: systemInfo,
          attachment: fs.createReadStream(attachmentPath),
        }, event.threadID, () => {
          fs.unlinkSync(attachmentPath); 
        });
      });

      writer.on('error', (err) => {
        console.error("Error writing the file:", err);
        api.sendMessage("Unable to retrieve uptime attachment. Error: " + err.message, event.threadID);
      });

      response.data.on('error', (err) => {
        console.error("Error with the response stream:", err);
        api.sendMessage("Unable to retrieve uptime attachment. Error: " + err.message, event.threadID);
      });

    } catch (error) {
      console.error("Error retrieving system information:", error);
      api.sendMessage(
        "Unable to retrieve system information.",
        event.threadID,
        event.messageID,
      );
    }
  },
};