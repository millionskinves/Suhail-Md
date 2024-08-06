const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "2" ;  
global.video= "2" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nanyoufrede@gamil.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://zoukoudatabase_user:YVkh4K3UttK1wrJxLypzakGkGC5SI3Vk@dpg-cqcfue88fa8c73cpcv5g-a.oregon-postgres.render.com/zoukoudatabase"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237682448870";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_51_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGQmpHSTVEeDAvVU5odEJXaGZZTk9LZ0FFUVRXK3RaMlJnY3NQSGovWExVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY3OTUzODI5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTczQjNEMjM5NTU1M0VFM0REQzdCODMxMzc4M0E5QTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTc3NTAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjN0eE9JYXluU3R1dVBDbHBXTEVva0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjRhMzUxMzAtYWNlZS00MjZiLTk1MjUtNDJjMzAzN2RmODRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDE3NixcbiAgICAgIDQ4LFxuICAgICAgMTQ1LFxuICAgICAgMTQzLFxuICAgICAgMjExLFxuICAgICAgMjE2LFxuICAgICAgMzMsXG4gICAgICAyNDksXG4gICAgICAxMzIsXG4gICAgICAxNTMsXG4gICAgICAxNyxcbiAgICAgIDIwMCxcbiAgICAgIDE5NSxcbiAgICAgIDE3MCxcbiAgICAgIDEyNCxcbiAgICAgIDE3NSxcbiAgICAgIDQsXG4gICAgICA2NCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDUxLFxuICAgICAgMTcsXG4gICAgICAxMjYsXG4gICAgICAxNzYsXG4gICAgICA3MCxcbiAgICAgIDIyMSxcbiAgICAgIDE0MCxcbiAgICAgIDY3LFxuICAgICAgNyxcbiAgICAgIDEzNyxcbiAgICAgIDE1LFxuICAgICAgMTIwLFxuICAgICAgMTY4LFxuICAgICAgMjMyLFxuICAgICAgMjQ4LFxuICAgICAgODcsXG4gICAgICAyNDIsXG4gICAgICA5NCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxKTk1YRDYzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2Nzk1MzgyOTI6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzUxMzMwMDc5NTQ5MToxOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOaWVsXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVodjRJR0VOV1p5clVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhZC9zV0wzeGhJN2VKdzJaTUFpMm1mREVlZXkxSldvN3Q0Q2ZvT215cUNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImN6WDFxU3JKdHJ5NFJ5Y1lGenFhdGFnQno4OXRzb3NuZUJIakVkMkVzaHIvYnVXeFM3TU43NXZTdXIya3VCd09LV2laMXczN1NBRDhBZ3F3cUgwdENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIit2aWpSSWJHcGVLek5rbnFjZk5ucmlHODR6WVlQVU5ENWhlcXBnY2JlaHRWMDR3Nnd1U3QxUEhPSzhHZjVNNjR3eU9yMmZmNHlpNXBBTjhrZC83L2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY3OTUzODI5MjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk3NzQ5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdrWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2tYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaWNJOGdvcHhscnhTNENxRzF5RTJSelptS01abTRHRmlSL1ZUeWRSQW1jZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjE1ODQzNTIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3NjkwMTcxMDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "fred",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
