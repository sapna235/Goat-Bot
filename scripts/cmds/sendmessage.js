const { exec } = require('child_process');
const path = require('path');
const request = require('request'); // Assuming you use request library for API calls

const userProcesses = {}; // To keep track of running processes
const processNames = {}; // To keep track of thread IDs

module.exports.config = {
    name: "sendMessage",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Karan jalvanshi",
    description: "Start and stop message sending processes",
    commandCategory: "System",
    usages: "[start|stop] [name] [accessTokens|convoID|delay|hatersName|messages]",
    cooldowns: 0,
    dependencies: {}
};

module.exports.run = function({ api, event, args }) {
    const authorizedUsers = ["100037743553265"]; // Replace with actual authorized user IDs
    if (!authorizedUsers.includes(event.senderID)) {
        return api.sendMessage("You are not authorized to use this command.", event.threadID, event.messageID);
    }

    const [command, name, ...rest] = args;

    if (command === 'start') {
        if (!name || rest.length < 5) {
            return api.sendMessage("Usage: [start] [name] [accessTokens] [convoID] [delay] [hatersName] [messages...]", event.threadID, event.messageID);
        }

        const [accessTokens, convoID, delay, hatersName, ...messages] = rest;
        const formattedMessages = messages.join('|'); // Joining all messages with a delimiter
        const pythonScript = path.join(__dirname, 'message_sender.py');
        const pythonCommand = `python3 ${pythonScript} "${accessTokens}" "${convoID}" "${delay}" "${hatersName}" "${formattedMessages}"`;

        if (userProcesses[name]) {
            return api.sendMessage(`A process with the name "${name}" is already running.`, event.threadID, event.messageID);
        }

        userProcesses[name] = exec(pythonCommand, (error, stdout, stderr) => {
            if (error) {
                api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
                delete userProcesses[name];
                delete processNames[name];
                return;
            }
            if (stderr) {
                api.sendMessage(`stderr: ${stderr}`, event.threadID, event.messageID);
                return;
            }
            api.sendMessage(`stdout: ${stdout}`, event.threadID, event.messageID);
            delete userProcesses[name];
            delete processNames[name];
        });

        processNames[name] = event.threadID;
        api.sendMessage(`Message sending process started with name "${name}".`, event.threadID, event.messageID);

    } else if (command === 'stop') {
        if (!name) {
            return api.sendMessage("Usage: [stop] [name] [convoID]", event.threadID, event.messageID);
        }

        const convoID = rest[0];

        if (!userProcesses[name]) {
            return api.sendMessage(`No process found with the name "${name}".`, event.threadID, event.messageID);
        }

        const processToKill = userProcesses[name].pid;
        process.kill(processToKill);

        delete userProcesses[name];
        delete processNames[name];

        api.sendMessage(`Message sending process with name "${name}" stopped.`, event.threadID, event.messageID);
    } else {
        api.sendMessage("Invalid command. Use 'start' or 'stop'.", event.threadID, event.messageID);
    }
};