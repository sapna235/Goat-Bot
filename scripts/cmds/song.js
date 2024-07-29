const fs = require('fs');
const axios = require('axios');

module.exports = {
    config: {
        name: "Song",
        version: "4.6",
        author: "Karan jalvanshi",
        shortDescription: { 
            en: 'Search and download music' 
        },
        longDescription: { 
            en: "Search for music and automatically download the first result." 
        },
        category: "music",
        guide: { 
            en: '{p}s <song name> - Search for a song\n' +
                'Example:\n' +
                '  {p}s Blinding Lights'
        }
    },

    onStart: async function ({ api, event, args }) {
        const searchQuery = encodeURIComponent(args.join(" "));
        const searchApiUrl = `https://ytdl-core-153h.onrender.com/s?q=${searchQuery}`;
        
        if (args.length === 0) {
            return api.sendMessage("Please provide the name of the song you want to search.", event.threadID, event.messageID);
        }

        try {
            const searchResponse = await axios.get(searchApiUrl);
            const tracks = searchResponse.data;

            if (tracks.length > 0) {
                const firstTrack = tracks[0];
                const downloadApiUrl = `https://ytdl-core-153h.onrender.com/d?url=${encodeURIComponent(firstTrack.videoUrl)}`;
                
                api.sendMessage("⏳ | Roko download karke bhej raha...", event.threadID, async (err, info) => {
                    if (err) {
                        console.error('Error sending download message:', err);
                        return api.sendMessage("🚧 | An error occurred while processing your request. Please try again later.", event.threadID);
                    }

                    try {
                        const downloadResponse = await axios.get(downloadApiUrl);
                        const downloadLink = downloadResponse.data.result.audio;

                        const filePath = `${__dirname}/cache/${Date.now()}.mp3`;
                        const writer = fs.createWriteStream(filePath);

                        const audioResponse = await axios({
                            url: downloadLink,
                            method: 'GET',
                            responseType: 'stream'
                        });

                        audioResponse.data.pipe(writer);

                        writer.on('finish', () => {
                            api.sendMessage({
                                body: `🎶 Here is your song: ${firstTrack.title}.`,
                                attachment: fs.createReadStream(filePath),
                            }, event.threadID, () => {
                                fs.unlinkSync(filePath); // Clean up the file after sending
                            });
                        });

                        writer.on('error', (err) => {
                            console.error('Error saving the file:', err);
                            api.sendMessage("🚧 | An error occurred while processing your request.", event.threadID);
                        });

                    } catch (error) {
                        console.error('Error during download:', error.message);
                        api.sendMessage(`🚧 | An error occurred while processing your request: ${error.message}`, event.threadID);
                    }
                });
            } else {
                api.sendMessage("❓ | Sorry, couldn't find the requested music.", event.threadID);
            }
        } catch (error) {
            console.error('Error during search:', error.message);
            api.sendMessage("🚧 | An error occurred while processing your request. Please try again later.", event.threadID);
        }
    }
};