/**
 * Parse time to ms
 * @param {Object} data 
 * @returns 
 */
module.exports = function parse(data) {
         let num = 1000;
         if (data.type.includes("min")) {
                  num = 60 * 1000;
         } else if (data.type.includes("sec")) {
                  num = 1000;
         } else if (data.type == "hr" || data.type.includes("hour")) {
                  num = 60 * 60 * 1000;
         } else if (data.type.includes("day")) {
                  num = 24 * 60 * 60 * 1000;
         }
         return data.value * num;
}