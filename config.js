//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.miles = "2349054039891"
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jordanjoelstar@gmail.com";
global.location = "Lagos,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jordan-joelstar/Miles";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9fd51255a5206e4f51ea8.jpg";
global.devs = "2349054039891";
global.sudo = process.env.SUDO || "2349054039891,2349043487099,2347061138624,2348026593544,2348101445162,64204918166";
global.owner = process.env.OWNER_NUMBER || "2349054039891,2349043487099,2347061138624,2348026593544,2348101445162,64204918166";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6a3ba8e8f4ea537fb0640.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349054039891";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://miles-qr.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©🅹🄾🆁🅳🄰🄽-🅹🄾🅴🄻🅂🅃🄰🆁",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "🅼︎🅸🄻🅴🅂",
  botname: process.env.BOT_NAME || "🅼︎🅸🄻🅴🅂",
  ownername: process.env.OWNER_NAME || "𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻★",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "https://rebrand.ly/,chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
