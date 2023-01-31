const {default: AnyWASocket,makeInMemoryStore,downloadContentFromMessage,DisconnectReason,useSingleFileAuthState } = require ('@adiwajshing/baileys')
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const axios = require('axios')
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const googleImage = require("g-i-s")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color } = require("./arquivos/lib/color")
const { fetchJson } = require("./arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const { banner, banner2 } = require("./arquivos/lib/functions")
const { tmpdir } = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")


/// ⚜️ARQUIVOS JSON ⚜️ ////
const config = JSON.parse(fs.readFileSync("./DONO/config/data.json"))
const upload = require("./arquivos/lib/functions")
const TelegraPh = require("./arquivos/lib/functions")
const sotoy = JSON.parse(fs.readFileSync('./sotoy.json'))
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const img = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))
const antilink = JSON.parse(fs.readFileSync('./arquivos/seguranca/antilink.json'))
const { menu } = require("./arquivos/menus/menu.js")

const { menufotos } = require("./arquivos/menus/menu.js")
const { menuadm } = require("./arquivos/menus/menu.js")
const { menubrincadeira } = require("./arquivos/menus/menu.js")
const { menualeatorio } = require("./arquivos/menus/menu.js")




///  prefixo e dono aqui ///
const logo = img.logo
const nomeBot = config.nomeBot
const numeroBot = config.numeroBot
const nomeDono = config.nomeDono
const numeroDono = config.numeroDono
const dono = config.numeroDono
const prefix = config.prefix
const prefixo = config.prefix
//

let girastamp = speed()
let latensi = speed() - girastamp


async function startjapa () {
const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })

// 𝚀𝚁𝙲𝙾𝙳𝙴
const { state, saveState } = useSingleFileAuthState("./cache/japa.json")
// limpar console
console.log(banner.string)
console.log(color('⭐'),color('Conectando....🤔'))
const client = AnyWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['Japa-V3.5','Firefox','4.0.0'],
auth: state
})

client.ev.on ("creds.update", saveState)

store.bind(client.ev)
client.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

client.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);

if(shouldReconnect) {
startjapa()
}

} else if(connection === "open") {
console.log(`${color(`conectado\nprefixo: ${prefix}\nDono: ${nomeDono}\n\nCriador: Paulo bots`,'gold')}`)
client.sendMessage(`${numeroDono}@s.whatsapp.net`,{text: `Bot: ${nomeBot}\nPrefix: ${prefix}`})
}

})

client.ev.on('messages.upsert', async (msg) => {
m = msg
  try {
//*******************************************//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
bidy =  budy.toLowerCase()




///////////////
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = client.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const text = args.join(" ")
const c = args.join(' ')
const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})
} 

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}



//configruracao de dono, adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isOwner = sender.includes(numeroDono)
//const isOwner = numeroDono.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const argis = bidy.trim().split(/ +/)







// Consts isQuoted
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

outrasVariavel = "bot"

let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel



if(budy == `${prefixo}`) {
enviar('🤔👍')}
const dados = m.messages[0];


// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }




// RESPOSTAS DOS COMANDOS \\
resposta = {
espere: "💦 Aguarde...enviando ",
aguarde: "💦 Aguarde...enviando ",
dono: "💦 Esse comando so pode ser usado pelo meu dono!!! ",
grupo: "💦 Esse comando só pode ser usado em grupo ",
privado: "💦 Esse comando só pode ser usado no privado ",
adm: "💦 Esse comando só pode ser usado por administradores de grupo",
botadm: " 💦 Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚙️️] Você não se registrou utilize ${prefixo}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "💦 Error, tente novamente mais tarde "
}


////////////////////////////////////
if (!isGroup && isCmd) console.log('[\x1b[1;32m COMANDO \x1b[1;37m]', color(comando, "violet"), 'USUARIO', color(pushname, "violet"))
if (!isGroup && !isCmd) console.log('[\x1b[1;32m MENSAGEM \x1b[1;37m]', 'DO', color(pushname, "violet"))
if (isCmd && isGroup) console.log('[\x1b[1;32m COMANDO \x1b[1;37m]', color(comando, "violet"), 'do', color(pushname, "violet"), 'NO GRUPO', color(groupName))
if (!isCmd && isGroup) console.log('[\x1b[1;32m MENSAGEM \x1b[1;37m]', 'DO', color(pushname, "violet"), 'NO GRUPO', color(groupName))

switch (comando) {
// Começo dos comandos com prefix //
//     /\/\                              
//    (° v °)                             
//    /|    |\                            
//     V---V                             
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//



case 'teste':
return enviar(` ok `)
break

case "help":
case "comandos":
case 'menu':
case "start":
case "bot":
enviar(resposta.aguarde)

const sections = [
    {
	title: `${nomeBot}`,
	rows: [
	    {title: "MENU ADM", rowId: `${prefix}menuadm`, description: `${nomeBot}`},
	    {title: "MENU BÔNUS", rowId: `${prefix}menualeatorio`, description: `${nomeBot}`},
	    {title: "MENU BRINCADEIRA", rowId: `${prefix}menubrincadeira`, description: `${nomeBot}`},
	    {title: "MENU FOTOS", rowId: `${prefix}menufotos`, description: `${nomeBot}`}
	]
    }
    ]
const listMessage = {
  text: menu(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
  buttonText: "Ver menus...",
  sections
}
client.sendMessage(from, listMessage)
break

case "menuadm":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menuadm(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓Japa-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓Japa-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menubrincadeira":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menubrincadeira(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menualeatorio":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menualeatorio(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menufotos":
templateMassage = {
image: {url:"./foto.jpg",
quoted: info},
caption: menufotos(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
footer: "ꪶ͓JAPA-𝑴𝑫",
headerType: 4,
contextinfo:{externalAdReply:{
title:"ꪶ͓JAPA-𝑴𝑫",
body:"𝑩𝒚 PAULO BOTS",
footer: 'JAPA',
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break


case 'cassino':
//CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou 🔮"
} else {
var Vitória = "Você perdeu..."
}
	const cassino = `
	©JAPA 
╔═════💦︎═════╗
┣► ${somtoy2}◄┛
╚═════💦︎═════╝

*${Vitória}*`
enviar(cassino)
if (Vitória == "Você ganhou!!!") {
enviar('Parabéns')
}
await client(sender)
break



case "ping":
enviar(`💦 Velocidade de resposta ${latensi.toFixed(4)} segundos `)
break

case "tmgp": 
case "tmgrupo": {
if (!isOwner) return enviar(resposta.dono)
if (!args.join(" ")) return enviar(`kd o texto amiguinho?`)
const tm = args.join(' ')
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
enviar(`﹤♧﹥ *𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙖 ${anu.length} 𝙜𝙧𝙪𝙥𝙤𝙨`)
waifuzdd = await axios.get('https://waifu.pics/api/sfw/neko')
for (let i of anu) {
await delay(1500)
templateButtons = [
{index: 1, urlButton: {displayText: 'Criador', url: canal}},
{index: 2, urlButton: {displayText: 'Dono', url: grupo}},
]
templateMessago = {
image: {url:waifuzdd.data.url,
quoted: info},
caption: tm,
footer: 'transmissão',
//templateButtons: templateButtons
}
client.sendMessage(i, templateMessago)
}
enviar("✔️pronto...")
}
break


case "ppt": 
if (!isGroup) return enviar(resposta.grupo)
if (args.length < 1) return enviar('exemplo: /ppt pedra')
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 50)
pptb = ppy
pph = `Você ganhou ${ppg} em money`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
enviar(pph)
}
break

case 'clear': case "reiniciar":
if (!isOwner) return enviar(resposta.dono)
enviar(' L I M P A N D U 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlimpo')
break

case "perfil":
try {
ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
enviar(resposta.espere)
try {
client.sendMessage(from, {
image: perfil,
caption: `
💦 Aqui está suas informações 

☆ Nome: ${pushname}
☆ Número: ${sender.split("@")[0]}
☆ Wa.me: https://wa.me/${sender.split("@")[0]}
☆ Grupo: ${groupName}
`
}, {quoted: info})
tujuh = fs.readFileSync("./arquivos/audios/perfil.mp3")
await client.sendMessage(from, {audio: tujuh, mimetype: "audio/mp4", ptt:true}, {quoted: info})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'gay':// Sem Fotos
const aleta = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} Sua Porcentagem De Gay é De : ${aleta}%`)
break
case 'feio': // Sem Fotos
const aletb = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} Sua Porcentagem De Feio é De : ${aletb}%`)
break
break
case 'lindo':
const aletc = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} Sua Porcentagem De Lindo(a) é De : ${aletc}%`)
break
case 'gostoso':
const aletd = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
break

case 'gado':
const alete = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break
case 'punheteiro':
const aletl = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} Sua Porcentagem De punheteiro(a) é De : ${aletl}%`)
break

case "gplink":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
const link = await client.groupInviteCode(from)
enviar(`💦 Link do grupo : https://chat.whatsapp.com/${link} `)
break

case "resetarlink":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await client.groupRevokeInvite(from)
enviar("💦 Link de convite resetado com sucesso ✓ ")
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "sair":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
enviar("ok...me desculpe se eu nao pude ajudá-lo(a) com o que vc precisava....adeus😔")
await delay(1000)
try {
await client.groupLeave(from)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "idgp":
enviar(`Id : ${from}`)
break

case "rebaixar":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
if (q < 1) return enviar("💦 Digite o número, animal ")
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "demote")
enviar(`💦 ${q} Foi rebaixado a membro comum com sucesso `)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "promover":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
if (q < 1) return enviar("💦 Cade o número, mongolóide ")
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "promote")
enviar(`💦 ${q} Foi promovido a adm com sucesso `)
kak = fs.readFileSync("./arquivos/audios/promover.mp3")
client.sendMessage(from, {audio: kak, mimetype: "audio/mp4", ptt:true}, {quoted: info})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'tagall':
case 'marcar':
case 'hidetag':
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
members_id = []
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {
text: '@12345678901', contextInfo: {
"mentionedJid": memberr
}}): client.sendMessage(from, {
text: teks.trim(), contextInfo: {
"mentionedJid": memberr
}}, {
quoted: info
})
}
teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n`: ''}$\n`
for (let mem of groupMembers) {
teks += `♧ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
break


case "ban":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (q < 1) return enviar("💦 Cade o número, mongolóide ")
if (!isBotGroupAdmins) return enviar(resposta.botadm)
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
kicka = info.message.extendedTextMessage.contextInfo.participant
cod = fs.readFileSync("./arquivos/audios/ban.mp3")
client.sendMessage(from, {audio: cod, mimetype: "audio/mp4", ptt:true}, {quoted: live})
client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "remove")
} else { 
enviar("࿐ Marque a mensagem da pessoa")
}
break

case "grupo":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
if (q == "a") {
await client.groupSettingUpdate(from, "not_announcement")
enviar("Grupo aberto com sucesso")
}
if (q == "f") {
await client.groupSettingUpdate(from, "announcement")
enviar("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "infogp":
if (!isGroup) return enviar(resposta.grupo)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
enviar(`
 Nome : ${groupName}
 Descrição : ${groupDesc}
 Id : ${from}
 Data : ${data}
 Horário : ${hora}
`)
break

case "mudardk":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await client.groupUpdateDescription(from, `${q}`)
enviar("💦 Descrição alterada com sucesso ✓ ")
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "mudarnm":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await client.groupUpdateSubject(from, `${q}`)
enviar("💦 Nome alterado com sucesso ✓ ")
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'listadm':
				if (!isGroup) return enviar(resposta.grupo)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'antilink':
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
					if (args.length < 1) return enviar('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return enviar('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
						enviar('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
						enviar('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						enviar('1 para ativar, 0 para desativar ')
					}
					break
					









case 'hidetag':
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
pp = args.join(" ")
if (pp < 1) enviar("coloque a mensagem de aviso...")
enviar(`${pp}`)
break

case "ping":
enviar(`Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *PC DA NASA*\nRAM: *300 Gb*\nData: 09/08/2734 d.c*\nRede: *9G*\nStatus: *Ainda não cobrado*\nTipo do bot: *Termux Somente*`)
break

case 'report':
case 'bug':
if (!q) return enviar('Ex: bug no menu..')
enviar(`Obrigada pela colaboração, o bug foi reportado ao meu criador...
<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './arquivos/fotos/menu2.jpg',
quoted: info},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
client.sendMessage("557598659560@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return enviar('Ex: novocmd coloca antilink')
enviar(`Obrigada pela colaboração, a sua idea foi reportada ao meu criador 😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './arquivos/fotos/menu2.jpg',
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
client.sendMessage("557598659560@s.whatsapp.net",templateMessage)
break


//******comandos de fotos**********\\
    
case 'loli' :{
enviar("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'neko':{
enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'neko!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'waifu':{
enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'waifu!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'megumin':{
enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/megumin')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'megumin!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'beijo':{
enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'kiss!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break




// sticker/figurinhas \\


case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src) 
			} catch (err) { return reject(new Error(String(err)))}})}

module.exports = { TelegraPh }
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
async function videoToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
   "-loop",
   "0",
   "-ss",
   "00:00:00",
   "-t",
   "00:00:05",
   "-preset",
   "default",
   "-an",
   "-vsync",
   "0"
  ])
  .toFormat("webp")
  .save(tmpFileOut) })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff }
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await client.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}
await client.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
async function imageToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

 fs.writeFileSync(tmpFileIn, media)

 await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
  ])
  .toFormat("webp")
  .save(tmpFileOut)
 })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff
}
async function writeExifImg (media, metadata) {
 let wMedia = await imageToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}
async function writeExifVid (media, metadata) {
 let wMedia = await videoToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}


const pacote = "Japa-V3.5"
//==================\\

const criador = "PAULO BOTS"
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
enviar('criando figurinha')
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguimg(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
enviar('criando figurinha')
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else return enviar(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
}
 break

/////////////DOWNLOADS////////////////
case 'cpf1':
case 'cpf2':
case 'cpf3':
case 'cpf4':
case 'score1':
case 'score2':
case 'parentes1':
case 'vizinhos1':
//@Paulo
addFilter(from);
if(q.length < 11 || q.length > 11)
enviar(`formato inválido, talvez seja pq vc colocou traços ou pontos, formato:
✅ -> 00000000000 (11 digitos)
❌ -> 000.000.000-00 (14 digitos)`);
enviar(`Aguarde, estou consultando`);
upp = await axios.get(`https://EnergeticCompleteTags.pauloconsultas0.repl.co/api/consultas?consult=${comando}&apikey=teste&msg=${q}`);
enviar(`${upp.data.message}
🔛 USÚARIO: ${pushname}

🔛 BY: ${nomeBot}`);
break;


default:

if (isCmd) {
const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}
]

const buttonMessage = {
    text: "comando nao existe ou vc digitou errado",
    footer: ' ',
    buttons: buttons,
    headerType: 1
}
client.sendMessage(from, buttonMessage)
}

}

} catch (e) {
console.log(e)
}

})

}
startjapa()
