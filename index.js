(async() => {
         const config = require("./config.js");
         const Eris = require("eris");
         const client = new Eris(config.token, {
                  intents: config.intents
         });
         require("./bot/events/license")(config, client);
})()