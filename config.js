module.exports = {
         token: "",
         license: "",
         ownerId: "",
         intents: ["all"],
         name: "Bot",
         id: "933241083951984660",
         embed: "BLUE",
         status: {
                  bot: "online",
                  type: 0,
                  name: "the hub"
         },
         server: "https://discord.gg/CPBSa8xS",
         banner: null,
         anti_spam: {
                  wait: 600, // how to to wait before declaring spam
                  kick: false, // set this to true if you want to kick users!
                  kick_on: 9, // after how many spams should be kick
                  ban: false, // set this to true if you want to ban users!,
                  ban_on: 11,// after how many spams should be ban
                  timeout: {
                           strikes: 7, // after how many spams should be timeout
                           value: true, //set this to false if you don't want to timeout users!
                           time:  require("./parse")({
                                    value: 5,
                                    type: "min" //can be set to "hr", "sec" and "min"
                           })// edit mute object to update it
                  },
                  warn: 5 // warn after 3 spam strikes
         }
}