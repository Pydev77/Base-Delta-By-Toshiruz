/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧BAILEYS 7.0.0୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const { default: makeWASocket, downloadContentFromMessage,emitGroupParticipantsUpdate,emitGroupUpdate,makeInMemoryStore,prepareWAMessageMedia, MediaType,WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,useMultiFileAuthState, BufferJSON,WAMessageProto,MessageOptions, PHONENUMBER_MCC,	 WAFlag,WANode,	 WAMetric,	 ChatModification,MessageTypeProto,WALocationMessage, ReconnectMode,WAContextInfo,proto,	 WAGroupMetadata,ProxyAgent,	 waChatKey,MimetypeMap,MediaPathMap,WAContactMessage,WAContactsArrayMessage,WAGroupInviteMessage,WATextMessage,WAMessageContent,WAMessage,BaileysError,WA_MESSAGE_STATUS_TYPE,MediaConnInfo, generateWAMessageContent, URL_REGEX,Contact, WAUrlInfo,WA_DEFAULT_EPHEMERAL,WAMediaUpload,mentionedJid,processTime,	 Browser, makeCacheableSignalKeyStore ,MessageType,Presence,WA_MESSAGE_STUB_TYPES,Mimetype,relayWAMessage,	 Browsers,GroupSettingChange,delay,DisconnectReason,WASocket,getStream,WAProto,isBaileys,AnyMessageContent,generateWAMessageFromContent, fetchLatestBaileysVersion,processMessage,processingMutex } = require('baileys');

const { 'default': MessageRetryMap, extractGroupMetadata, otherOpts } = require('@whiskeysockets/baileys');


/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧MODULOS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
let pino = require('pino')
const fs = require('fs')
const axios = require('axios');
const chalk = require('chalk')
const Pino = require('pino')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone');
const os = require("os");
const path = require('path');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const stream = require('stream');
const { Buffer } = require('buffer');
const { fileTypeFromBuffer } = require('file-type');
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧MODULOS-GENERICOS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const { color, bgcolor } = require('./arquivos/js/color')

const conselhos = require("./arquivos/js/conselhos"); 

const { upload } = require(path.join(__dirname, './arquivos/js/uploads'));

const { banner2, banner3 } = require('./arquivos/funcoes/functions.js');

const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./arquivos/sticker/exif');

const { imageToWebp2, videoToWebp2, writeExifImg2, writeExifVid2 } = require('./arquivos/sticker/exif2')

const mensagens = require('./arquivos/js/mensagens');

const { audio_menu } = require('./arquivos/json/audios.json')

const pathNes = './dono/nescessario.json'; 
let nescessario = require(pathNes); 

const configPath = path.join(__dirname, './dono/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const { prefix, NomeDoBot, NomeDono, BLACKOUT_API, BLACKOUT_KEY, numerodono  } = config;

var { linklogos, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, thumbnail, fundoping, fundo1, fundo2 } = require("./arquivos/json/links_img.json");

const Modobn = path.join(__dirname, './arquivos/json/brincadeiras.json');

const logoslink = JSON.parse(fs.readFileSync('./arquivos/json/logos.json'));

const { getGroupSettings, setGp, initGroup, initWelcomeSystem } = require('./database/grupos/bemvindo.js');

const pastaGrupos = './database/gruposAtivos';
if (!fs.existsSync(pastaGrupos)) fs.mkdirSync(pastaGrupos);

const antiLinkFile = './arquivos/json/antilink.json';





/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CONEXAO-PAREAMENTO୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
let phoneNumber = "5511962390241"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))


/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧MENUS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const { Menu, MenuAdm, MenuDono } = require("./dono/menus.js");

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧INICIO DO BOT୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function iniciarBlackout() {
const { state, saveCreds } = await useMultiFileAuthState('./database/QR-code')
const { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetryCounterCache = new NodeCache()
const client = makeWASocket({
version,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
},
logger: pino({ level: 'error' }),
printQRInTerminal: !process.argv.includes("--code"),
mobile: false,
browser: ['Ubuntu','Edge','125.0.0.0'],
generateHighQualityLinkPreview: true,
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 20000,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
},
});
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CONEXÃO POR CODIGO୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (!client.authState.creds.registered) {
console.clear();
console.log(chalk.bgHex('#1a1a1a').hex('#ff4d4d')('\n┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─'));
console.log(chalk.bgHex('#1a1a1a').hex('#ff1a1a')('┃       Conexão por Código        '));
  console.log(chalk.bgHex('#1a1a1a').hex('#ff4d4d')('╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─\n'));

console.log(chalk.hex('#ff6666')('Informe o número do bot ✘‿✘Exemplo: +554699376083✘‿✘\n'));

const phoneNumber = await question(chalk.hex('#ff3333')('Número: '));

if (!phoneNumber) {
console.log('\n' + chalk.bgHex('#8b0000')(chalk.white('Erro: Inclua o código do país, ex: +55...')));
    process.exit(1);
  }

const NumeroLimpo = phoneNumber.replace(/[^0-9]/g, '');

let code = await client.requestPairingCode(NumeroLimpo);

console.log(chalk.bgHex('#1a1a1a').hex('#ff4d4d')('\n┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─'));
console.log(chalk.bgHex('#1a1a1a').hex('#ff1a1a')('┃    Código de Emparelhamento       '));
console.log(chalk.bgHex('#1a1a1a').hex('#ff4d4d')('╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─\n'));

code = code?.match(/.{1,4}/g)?.join("-") || code;

console.log(chalk.bold.hex('#ff1a1a')('Código: ') + chalk.bold.hex('#ff4d4d')(code));
  console.log(chalk.hex('#aaaaaa')('\nAguardando conexão com o WhatsApp...\n'));
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CLIENTES୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
var sock = client;
var tosh = client;
var loli = client;
var con = client;

client.ev.on('chats.set', () => { console.log('setando conversas...'); })
client.ev.on('contacts.set', () => { console.log('setando contatos...'); })
client.ev.on('creds.update', saveCreds)
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ATT DE MENSAGENS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
client.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 

const key = {
remoteJid: info.key.remoteJid,
id: info.key.id, 
participant: info.key.participant 
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ATT DE ATIVAÇÃO•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const  isAudioMenu = nescessario.menu_audio;

const  isVisualizarmsg = nescessario.visualizarmsg;

const isAntipv  = nescessario.Antipv;   

const isAntipv2 = nescessario.Antipv2;  

const isAntipv3 = nescessario.Antipv3; 

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧VIZUALIZAR AS MENSAGENS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isVisualizarmsg) {
await client.readMessages([info.key]);
} else {
if(info.key.remoteJid == "status@broadcast") return;
}
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

const from = info.key.remoteJid

var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧GRUPO/DONO/MEMBROS/ADM ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const getGroupAdmins = (participants = []) => {
if (!Array.isArray(participants)) return [];
return participants
.filter(p => p.admin)
.map(p => p.phoneNumber || p.jid || p.id || p.lid);
};

const isAdmin2 = (userId, participants = []) => {
const admins = getGroupAdmins(participants);
const normalize = id => id?.split('@')[0];

  return admins.some(admin => normalize(admin) === normalize(userId));
};

const isGroup = from.endsWith('@g.us');
const groupMetadata = isGroup ? await client.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isCmd = body.startsWith(prefix)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const sendere2 = info.key.participant?.includes('@lid') ? info.key.participant : info.key.participantAlt;
const sendere = info.key.participantAlt?.includes('@s.whatsapp.net') ? info.key.participantAlt : info.key.participant;
const sender2 = sendere2 || from; //Sender puxando o Lid
const sender = sendere || from; //Sender puxando o Jid
const pushname = info.pushName ? info.pushName : ""
const numeroBot = client.user.id.split(":")[0]+"@s.whatsapp.net"
const args = body.trim().split(/ +/).slice(1);
const q = args.join(' ');
const donos = [config.numerodono, ...['numero_dono1','numero_dono2','numero_dono3', 'numero_dono4','numero_dono5','numero_dono6']  .map(key => nescessario[key]) ] .filter(n => n && n !== '.') .map(n => `${n}@s.whatsapp.net`);
const Dono = donos[0];
const isDono = donos.includes(sender);
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAdm = groupAdmins.includes(sender) || false  
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CONSTS-SISTEMAS ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function getBuffer(url) {//capitura link vidona e devolve 
const res = await axios.get(url, { responseType: "arraybuffer" });
return res.data;
}

function isModobn(from, client, seloMeta) {
const banco = JSON.parse(fs.readFileSync(Modobn, 'utf8'));
const estado = banco[from]?.ativo || false;
if (!estado) {
client.sendMessage(from, { text: "O modo brincadeira está *desativado* neste grupo. Use *modobrincadeira 1* para ativar antes de brincar!", quoted: seloMeta });
        return false;
    }
    return true;
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇̇·̇ •🩸•୨୧FUNÇAO-FETCHJSON୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const fetchJson = async (url, options = {}) => {
 try {
const res = await axios({ url, method: options.method || 'GET',
headers: options.headers || {},
data: options.body || undefined, responseType: 'json',
 });
return res.data;
} catch (err) {
        throw err;
    }
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧SIMULA ESCRITA୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function escrever (texto) {
await client.sendPresenceUpdate('composing', from) 
await esperar(1000) 
client.sendMessage(from, { text: texto }, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UMA MENSAGEM୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UMA IMAGEM SIMPLES ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarImg = async (link) => {
await client.sendMessage(from, {image: {url: link}}, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UMA IMAGEM COM TEXTO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarImg2 = async (link, texto) => {
await client.sendMessage(from, {image: {url: link}, caption: texto}, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UM GIF SIMPLES ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarGif = async (link) => {
await client.sendMessage(from, { video: {url: link}, gifPlayback: true}, { quoted: info })
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UM VÍDEO SIMPLES ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarVd = async (link) => {
await client.sendMessage(from, {video: {url: link }, mimetype: "video/mp4", fileName: "video.mp4"}, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UM VIDEO COM TEXTO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarVd2 = async (link, texto) => {
await client.sendMessage(from, {video: {url: link }, caption: texto, mimetype: "video/mp4", fileName: "video.mp4"}, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ENVIA UM ÁUDIO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarAd = async (link) => {
client.sendPresenceUpdate('recording', from)
await esperar(1000) 
await client.sendMessage(from, {audio: {url: link }, mimetype: "audio/mpeg"}, {quoted: info})
}

const enviarAd2 = async (link) => {
await client.sendMessage(from, {audio: {url: link }, mimetype: "audio/mpeg", ptt: true}, {quoted: info})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CAUSA UM DELAY ENTRE FUNÇÃO  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const esperar = async (tempo) => {
return new Promise(funcao => setTimeout(funcao, tempo));
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─<
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧REAGE A UMA MENSAGEM  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const reagir = (reassao) => {
client.sendMessage(from, {react: {text: reassao, key: info.key}})}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧SLEEP(1000) VAI DEMORAR 1 SEGUNDO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧DEFI-REPLY ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const reply = ( from, texto, quoted = null) => client.sendMessage(from, { text: texto }, { quoted });

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧FUNÇAO-MARCAÇOES  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
function gerarPossiveisIds(numero) {
if (!numero) return []; 
const cleanNum = numero.toString().replace(/[^0-9]/g, '');
if (!cleanNum) return [];
return [cleanNum + "@s.whatsapp.net", cleanNum + "@lid"];
}

function obterMembroValido(idOuNumero) {
const possiveisIds = gerarPossiveisIds(idOuNumero);
if (possiveisIds.length === 0) return null;
const membro = groupMembers.find(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.lid) || possiveisIds.includes(m.phoneNumber) );
return membro ? (membro.id || membro.lid) : null;
}

const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []).map(id => obterMembroValido(id));
const sender_ou_n = q.includes("@") ? menc_jid : sender;
const mrc_ou_numero = q.length > 6 && !q.includes("@") ? obterMembroValido(q) : menc_prt;
const menc_os2 = q.includes("@") ? menc_jid : menc_prt;
const marc_tds = q.includes("@") ? menc_jid : (q.length > 6 && !q.includes("@") ? obterMembroValido(q) : menc_prt);
const menc_prt_nmr = q.length > 12 ? obterMembroValido(q) : menc_prt;

const mencionarIMG = (texto = '', Url, ms) => {
let memberr = [];
const linhas = texto.includes('\n') ? texto.split('\n') : [texto];
for (let linha of linhas) {
for (let palavra of linha.split(' ')) {
if (palavra.includes('@')) {
const numero = palavra.replace(/[^0-9]/g, '');
const possiveisIds = [ numero + "@s.whatsapp.net", numero + "@lid" ];
const membroEncontrado = groupMembers.find(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.lid) || possiveisIds.includes(m.phoneNumber) );
if (membroEncontrado) {memberr.push(membroEncontrado.id || membroEncontrado.lid); } 
}}}
client.sendMessage(from, { image: { url: Url }, caption: texto.trim(), mentions: memberr }, { quoted: info });
}

async function mencaoLid (nun) {
const mencFormatado = nun.replace(/[^0-9]/g, '')
const possiveisIds = [mencFormatado + "@s.whatsapp.net", mencFormatado + "@lid"]
const existeNoGrupo = groupMembers.some(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.phoneNumber) || (m.lid && possiveisIds.includes(m.lid)))
return existeNoGrupo;
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧TEMPO MOMENTO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ISQUOTED/CONSTS ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
let content = ''; // Não apagar, pega upsert de forma segura
const typeMessageMap = {
'imageMessage': 'Image',
'videoMessage': 'Video',
'audioMessage': 'Audio',
'stickerMessage': 'Sticker',
'contactMessage': 'Contact',
'locationMessage': 'Location',
'productMessage': 'Product' };

const isImage = type === 'imageMessage';
const isVideo = type === 'videoMessage';
const isAudio = type === 'audioMessage';
const isSticker = type === 'stickerMessage';
const isContact = type === 'contactMessage';
const isLocation = type === 'locationMessage';
const isProduct = type === 'productMessage';
const isVisuU2 = type === 'viewOnceMessageV2';

const isMedia = ['imageMessage','videoMessage','audioMessage','viewOnceMessage','viewOnceMessageV2'].includes(type);

let typeMessage = typeMessageMap[type] || body.substr(0,50).replace(/\n/g,'');

function checkQuoted(quoted, key) { return quoted && quoted[key];
}

const quoted = info.message.extendedTextMessage?.contextInfo?.quotedMessage || null;

const isQuotedMsg       = checkQuoted(quoted, 'conversation') || checkQuoted(quoted, 'text');
const isQuotedImage     = checkQuoted(quoted, 'imageMessage');
const isQuotedVideo     = checkQuoted(quoted, 'videoMessage');
const isQuotedAudio     = checkQuoted(quoted, 'audioMessage');
const isQuotedSticker   = checkQuoted(quoted, 'stickerMessage');
const isQuotedContact   = checkQuoted(quoted, 'contactMessage');
const isQuotedLocation  = checkQuoted(quoted, 'locationMessage');
const isQuotedProduct   = checkQuoted(quoted, 'productMessage');
const isQuotedDocument  = checkQuoted(quoted, 'documentMessage');
const isQuotedDocW      = checkQuoted(quoted, 'documentWithCaptionMessage');
const isQuotedVisuU     = checkQuoted(quoted, 'viewOnceMessage');
const isQuotedVisuU2    = checkQuoted(quoted, 'viewOnceMessageV2');

function getQuotedMedia(info) {
const quoted = info.message.extendedTextMessage?.contextInfo?.quotedMessage || null;
if (!quoted) return null;
if (quoted.imageMessage) return { type: 'image', message: quoted.imageMessage };
if (quoted.videoMessage) return { type: 'video', message: quoted.videoMessage };
if (quoted.audioMessage) return { type: 'audio', message: quoted.audioMessage };
if (quoted.stickerMessage) return { type: 'sticker', message: quoted.stickerMessage };
if (quoted.documentMessage) return { type: 'document', message: quoted.documentMessage };
if (quoted.documentWithCaptionMessage) return { type: 'document', message: quoted.documentWithCaptionMessage };
if (quoted.viewOnceMessage) return { type: 'viewOnce', message: quoted.viewOnceMessage };
if (quoted.viewOnceMessageV2) return { type: 'viewOnce', message: quoted.viewOnceMessageV2 };
return null;
}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧FUNÇ/AlTOS ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
function ativarAuto(grupoId, tipo) {
const arquivoGrupo = path.join(pastaGrupos, `${grupoId}.json`);
let config = {};
if (fs.existsSync(arquivoGrupo)) {
try { config = JSON.parse(fs.readFileSync(arquivoGrupo)); } catch { config = {}; }
}
config[tipo] = true;
fs.writeFileSync(arquivoGrupo, JSON.stringify(config, null, 2));
console.log(`✅ ${tipo} ativado para o grupo ${grupoId}`);
}

function desativarAuto(grupoId, tipo) {
const arquivoGrupo = path.join(pastaGrupos, `${grupoId}.json`);
let config = {};
if (fs.existsSync(arquivoGrupo)) {
try { config = JSON.parse(fs.readFileSync(arquivoGrupo)); } catch { config = {}; }
}
config[tipo] = false;
fs.writeFileSync(arquivoGrupo, JSON.stringify(config, null, 2));
console.log(`❌ ${tipo} desativado para o grupo ${grupoId}`);
}

function isAtivo(grupoId, tipo) {
const arquivoGrupo = path.join(pastaGrupos, `${grupoId}.json`);
if (!fs.existsSync(arquivoGrupo)) return false;
try {
const config = JSON.parse(fs.readFileSync(arquivoGrupo));
return !!config[tipo];
} catch (e) {
return false;
  }
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ANTILINK ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const ensureFile = (p) => {
const dir = path.dirname(p);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(p)) fs.writeFileSync(p, JSON.stringify({}));
};
ensureFile(antiLinkFile);

const readAntiLink = () => {
try { return JSON.parse(fs.readFileSync(antiLinkFile, 'utf8') || '{}'); }
catch (e) { return {}; }
};
const writeAntiLink = (obj) => fs.writeFileSync(antiLinkFile, JSON.stringify(obj, null, 2));
const getAntiLinkConfig = (groupId) => {
const data = readAntiLink();
return data[groupId] || { mode: 'off' }; // mode: 'off' | 'soft' | 'hard'
};
const setAntiLinkConfig = (groupId, conf) => {
const data = readAntiLink();
data[groupId] = conf;
writeAntiLink(data);
};

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CRIAÇÃO DE STICK ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} catch (e) {
console.log(e)
}
}

const sendImageAsSticker = async (laura, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}

await client.sendMessage(jid, {sticker: {url: buffer}, ...options}, {quoted})
return buffer;
};

const sendVideoAsSticker = async (laura, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}

await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer;
}

const sendImageAsSticker2 = async (laura, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifImg2(buff, options);
} else {
buffer = await imageToWebp2(buff);
}

await client.sendMessage(jid, {sticker: {url: buffer}, ...options}, {quoted})
return buffer;
};

const sendVideoAsSticker2 = async (laura, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifVid2(buff, options);
} else {
buffer = await videoToWebp2(buff);
}

await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer;
}

async function DLT_FL(file) {
    try { 
        fs.unlinkSync(file);
    } catch (error) {}
}

if (isAtivo(from, 'AutoFigu')) {
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || 
 RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
 if (boij2 || (boij && boij.seconds < 11)) {
 let packin = `${NomeDoBot}`
let author23 = `${NomeDono}`
let owgi
let encmedia
if (boij2) {
owgi = await getFileBuffer(boij2, 'image')
encmedia = await sendImageAsSticker2(client, from, owgi, info, {
packname: packin,
author: author23
 })
} else if (boij) {
owgi = await getFileBuffer(boij, 'video')
encmedia = await sendVideoAsSticker2(client, from, owgi, info, {
packname: packin,
author: author23
  })
}

await DLT_FL(encmedia)
 return true
    }
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CONSOLE DO BOT  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : 
type == 'stickerMessage' ? 'Figurinha' : 
type == 'imageMessage' ? 'Imagem' : 
type == 'videoMessage' ? 'Vídeo' : 
type == 'documentMessage' ? 'Documento' : 
type == 'contactMessage' ? 'Contato' : 
type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem';

if (!isGroup && isCmd)
console.log( '\x1b[1;31m~\x1b[1;31m>', '[\x1b[1;32m COMANDO \x1b[1;31m]', color(comando, "white"), 'do', color(pushname, "white"), 'Horas:', color(time, "white")
);

if (isCmd && isGroup)
console.log( '\x1b[1;31m~\x1b[1;31m>', '[\x1b[1;32m COMANDO \x1b[1;31m]', color(comando, "white"), 'do',color(pushname, "white"), 'Grupo:', color(groupName, "white"), 'Horas:', color(time, "white")
);

if (!isCmd && isGroup && !info.key.fromMe)
console.log( '\x1b[1;31m~\x1b[1;31m>', '[\x1b[1;32m MENSAGEM \x1b[1;31m]', color(tipoMensagem, "white"), 'do', color(pushname, "white"), 'Grupo:', color(groupName, "white"), 'Horas:', color(time, "white")
);

if (!isGroup && !isCmd && !info.key.fromMe)
console.log( '\x1b[1;31m~\x1b[1;31m>', '[\x1b[1;32m MENSAGEM \x1b[1;31m]', color(tipoMensagem, "white"), 'do', color(pushname, "white"), 'Horas:', color(time, "white")
);

if (isGroup && info.message?.reactionMessage?.text)
console.log( '\x1b[1;31m~\x1b[1;31m>', '[\x1b[1;32m REAÇÃO \x1b[1;31m]', color(`Emoji: " ${info.message.reactionMessage.text} "`, "white"), 'do', color(pushname, "white"), 'Horas:', color(time, "white")
);
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧LOGS DE SESSÃO DO BAILEYS V.7 ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const originalConsoleLog = console.log;
console.log = (...args) => {
  const msg = args.join(' ');
if (
msg.includes('SessionEntry') ||
msg.includes('Removing old closed session') ||
msg.includes('ephemeralKeyPair') ||
msg.includes('rootKey') ||
msg.includes('remoteIdentityKey') ||
msg.includes('baseKey')
) {
return; 
}
originalConsoleLog(...args);
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CONSTS DE PERSONALIZAÇÃO   ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const carregamentoemojis = ['♨️','❤️','🩸','🤖','🫦','🧣','⛑️','👝'];
const emojiEscolhido = carregamentoemojis[Math.floor(Math.random() * carregamentoemojis.length)];
//
const seloMeta = {//Tosh Blackout 
key: { participant: sender, remoteJid: "status@broadcast", fromMe: false },message: {
contactMessage: {
displayName: pushname || "Usuário Desconhecido", vcard: `BEGIN:VCARD
VERSION:3.0
N:;Chat GPT;;;
FN:Meta IA
item1.TEL;waid=13135550002:13135550002
item1.X-ABLabel:Celular
END:VCARD`,
contextInfo: { forwardingScore: 1, isForwarded: true }}}}

const seloverificado = {
key: { participant: sender, remoteJid: "status@broadcast", fromMe: false }, message: {
contactMessage: {
displayName: pushname || "Usuário Desconhecido",
vcard: `BEGIN:VCARD
VERSION:3.0
N:;Chat GPT;;;
FN:Meta IA
item1.TEL;waid=${numerodono}:${numerodono}
item1.X-ABLabel:Celular
END:VCARD`,
contextInfo: { forwardingScore: 1, isForwarded: true }}}};
function getQuoted() {
return nescessario.Verificado === 1 ? seloverificado : info;
}

const totalCmd = (fs.readFileSync('./index.js', 'utf8').match(/case\s'(\w+)'/g) || []).length;

const adm = 'adm';
const membro = 'membro';
const pv = 'privado';

let tipoCargo = !isGroup ? pv : isGroupAdmins ? adm : membro;













/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS COM PREFIXO  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
switch(comando) {




/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS DE MEMBROS ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'menu': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: Menu(prefix, NomeDoBot, NomeDono, sender, hora, pushname, totalCmd, tipoCargo ), mentions: [sender]  }, { quoted: seloMeta });
}
break;

case 'menuadm': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: MenuAdm(prefix, NomeDoBot, NomeDono, sender, hora, pushname), mentions: [sender]  }, { quoted: seloMeta });
}
break;

case 'menudono': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: MenuDono(prefix, NomeDoBot, NomeDono, sender, hora, pushname), mentions: [sender]  }, { quoted: seloMeta });
}
break;

case 'ping': {//Tosh Blackout 
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
try {
const responseTime = (Date.now() / 1000) - info.messageTimestamp;
const uptime = process.uptime();
const hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const isTermux = os.platform() === 'android';
const ambiente = isTermux ? '📱 Termux (Android)' : '💻 Node.js (PC/Servidor)';
const estabilidade =
responseTime < 0.5 ? '✅ Estável' :
responseTime < 1.0 ? '⚠️ Leve atraso' :
'❌ Instável — Reinicie o bot';
const kyun = (seconds) => {
const pad = (s) => (s < 10 ? '0' : '') + s;
const hrs = Math.floor(seconds / (60 * 60));
const mins = Math.floor((seconds % (60 * 60)) / 60);
const secs = Math.floor(seconds % 60);
return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
};
const totalComandos = global.commands ? global.commands.length : 0;
let groupName = "Privado";
let participantes = "—";
if (isGroup) {
const groupMetadata = client.groupMetadata(from);
groupName = groupMetadata.subject || "Grupo Desconhecido";
participantes = groupMetadata.participants.length;
}
const acelerar = () => {
const inicio = Date.now();
for (let i = 0; i < 1e6; i++) Math.sqrt(i);
return (Date.now() - inicio) / 1000;
};
const tempoAcelerar = acelerar();
let perfil;
try {
perfil = await client.profilePictureUrl(sender, 'image');
} catch {
perfil = 'http://api.blackout.toshiruz.site/uploads/1760140014721.jpg'; // fallback
}
const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundoping)}&text1=>> ${encodeURIComponent(pushname)} <<&text2=${responseTime.toFixed(3)}s&text3=>>VELOCIDADE<<&avatar=${encodeURIComponent(perfil)}`;
const captionPing = `
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇•🩸•୨୧BASE-DELTA-ＰＩＮＧ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃│✘⋟ *Ping:* ${responseTime.toFixed(3)} segundos
┃│✘⋟ *Hora Atual:* ${hora}
┃│✘⋟ *Ativo há:* ${kyun(uptime)}
┃│✘⋟ *Estabilidade:* ${estabilidade}
┃│✘⋟ *Sistema:* ${ambiente}
┃│✘⋟ *Aceleração:* ${tempoAcelerar.toFixed(3)} seg
┃│✘⋟ *Total de Comandos:* ${totalComandos}
┃│✘⋟ *Grupo:* ${isGroup ? groupName : 'Privado'}
┃│✘⋟ *Participantes:* ${participantes}
┃│✘⋟ *Usuário:* @${sender.split('@')[0]}
┃╰✘¨*:·.─
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─`;
await client.sendMessage( from,{ image: { url: canvasUrl },caption: captionPing, mentions: [sender]},{ quoted: seloMeta });
console.log(`
⟬.·:*¨✘‿✘¨*:·.─.·:*¨✘‿✘¨*:·─.·:*¨✘‿✘¨*:·.⟭                      
💠 [ PING EXECUTADO ]
⚡ Ping: ${responseTime.toFixed(3)}s | ${estabilidade}
👥 Grupo: ${isGroup ? groupName : 'Privado'}
🧠 Ambiente: ${ambiente}
🕒 Hora: ${hora1}
⟬.·:*¨✘‿✘¨*:·.─.·:*¨✘‿✘¨*:·─.·:*¨✘‿✘¨*:·.⟭                      
`);
} catch (e) { console.error("ERRO NO COMANDO PING:", e);
await client.sendMessage(from, { text: `Ocorreu um erro ao medir a velocidade.` }, { quoted: info });
}}
break;

case 'totalcmd': // Tosh Blackout
 try {
enviar(mensagens.carregando);
const filePath = path.join(__dirname, 'index.js');
const data = fs.readFileSync(filePath, 'utf8');
const regex = /case\s*['"`]([^'"`]+)['"`]/g;
const comandos = [...data.matchAll(regex)].map(m => m[1]);
if (comandos.length === 0) {
return enviar('Nenhum comando encontrado.');
}
const total = comandos.length;
const lista = comandos.map(c => `✘⋟ ${c}`).join('\n');
const mensagem = `*${NomeDoBot}* tem *${total}* comandos ativos!*\n\n✘⋟ 📜 *Lista completa:*\n\n${lista}`;
try {
await client.sendMessage(from, { image: { url: logoslink.logo },caption: mensagem }, { quoted: seloMeta });
} catch {
enviar(mensagens.sucesso);
}
} catch (err) {
console.error('Erro no totalcmd:', err);
enviar(mensagens.erro);
}
break;

case 'perfil': { //Tosh Blackout
await client.sendMessage(from, { react: { text: '📸', key: info.key } });
try {
const safadeza = Math.floor(Math.random() * 101);
const golpe = Math.floor(Math.random() * 101);
const Puta = Math.floor(Math.random() * 101);
const gostozura = Math.floor(Math.random() * 101);
const conselhoBiblico = conselhos[Math.floor(Math.random() * conselhos.length)];
let perfil;
try {
  perfil = await client.profilePictureUrl(sender, 'image');
} catch {
perfil = 'http://api.blackout.toshiruz.site/uploads/1760140014721.jpg'; // fallback
}
const perfilMsg = `
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧SEU-PERFIL୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃│✘⋟😈 *Safadeza:* ${safadeza}%
┃│✘⋟💸 *Golpista:* ${golpe}%
┃│✘⋟🔥 *Puta:* ${Puta}%
┃│✘⋟😏 *gostozura:* ${gostozura}%
┃│✘⋟🕒 *Horário:* ${hora}
┃╰✘¨*:·.─
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
> ✘⋟ ${conselhoBiblico}
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
`;
await client.sendMessage( from, { image: { url: perfil }, caption: perfilMsg, mentions: [sender],
 },
{ quoted: seloMeta }
);
} catch (e) {
await client.sendMessage(from, { text: "Erro ao gerar o perfil." }, { quoted: info });
}}
break;

case 'infogrupo': // Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
await client.sendMessage(from, { react: { text: 'ℹ️', key: info.key } });
try {
let groupMetadata = await client.groupMetadata(from);
let groupName = groupMetadata.subject;
let participants = groupMetadata.participants.length;
let groupDesc = groupMetadata.desc || "Sem descrição";
let groupOwner = groupMetadata.owner || "Desconhecido";
let creationDate = groupMetadata.creation ? new Date(groupMetadata.creation * 1000).toLocaleString('pt-BR') : "Desconhecida";
let groupPic;
try {
groupPic = await client.profilePictureUrl(from, 'image');
} catch {
groupPic = 'https://i.imgur.com/1760140014721.jpg';
}
const grupoMsg = `
┌──.·:*¨✘‿✘¨*:·.───
┃│✘⋟ *Grupo:* ${groupName}
┃│✘⋟ *Participantes:* ${participants}
┃│✘⋟ *Dono do grupo:* @${groupOwner.split('@')[0]}
┃│✘⋟ *Descrição:* ${groupDesc}
┃│✘⋟ *Criado em:* ${creationDate}
└──.·:*¨✘‿✘¨*:·.───`;
await client.sendMessage( from, { image: { url: groupPic }, caption: grupoMsg, mentions: [groupOwner] }, { quoted: info }
 );
} catch (e) {
await client.sendMessage(from, { text: "Erro ao obter informações do grupo." }, { quoted: seloMeta });
console.error(e);
}
break; 

case 'owner': case 'odono': case 'dono': case 'infodono': {
const NomeDono = config.NomeDono || `${NomeDono}`;
const NomeDoBot = config.NomeDoBot || `${NomeDoBot}`;
const numerodono = config.numerodono || `${numerodono}`;
const msg = `┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇̇•🩸•୨୧INFORMAÇÕES DO DONO୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃│✘⋟ Nome: *${NomeDono}*
┃│✘⋟ Bot: *${NomeDoBot}*
┃│✘⋟ Contato: wa.me/${numerodono}
┃╰✘¨*:·.─
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─ 
✘‿✘Canal Oficial✘‿✘:\nhttps://whatsapp.com/channel/0029VazmYZk72WTneBn3b91t`;
await client.sendMessage(from, { image: { url: linklogos },
caption: msg, mentions: [sender] }, { quoted: seloMeta });
}
break;

case 'suporte-dono': case 'criador': {// Tosh Blackout
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;Tosh Blackout;;;
FN:Tosh Blackout
ORG:Blackout 
TITLE:Desenvolvedor do Bot
TEL;waid=5511961527811:+55 11 96152-7811
EMAIL:toshiruzdev@gmail.com
URL:https://whatsapp.com/channel/0029VazmYZk72WTneBn3b91t
END:VCARD`;
await client.sendMessage(from, { contacts: { displayName: 'Tosh Blackout - Suporte', contacts: [{ vcard }] }
}, { quoted: seloMeta });
}
break;

case 'donos': {// Tosh Blackout
if(!isDono) return enviar(mensagens.isDono);
const donosFormatados = donos.map((d, i) => `Dono ${i+1}: @${d.split('@')[0]}`).join('\n');
const legenda = `*DONOS:* ${NomeDoBot}\n

${donosFormatados} `;
await client.sendMessage(from, { image: { url: logoslink.logo[0] }, caption: legenda, mentions: donos }, { quoted: seloMeta });
}
break;




/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̇ •🩸•୨୧COMANDOS DE DOWNLOAD୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'play': // Tosh blackout 
try {
if (!q) return enviar(`Use: ${prefix}play nome da música`);
enviar(mensagens.carregando);
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
const resultados = Array.isArray(res?.resultado) ? res.resultado : [];
if (!resultados.length) return enviar("Nenhum resultado encontrado.");
const video = resultados.find(v => v.videoId || v.url);
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600)
return enviar("Vídeos acima de 1 hora não são suportados.");
const mensagem = `> *Música escolhida por:* ${pushname}

> ${video.title}
> 0:35 ━❍──────── - ${video.duration?.timestamp || '??'}
> ↻ ⊲ Ⅱ ⊳ ↺ *Postado:* ${video.ago || 'Desconhecido'}

> *VOLUME: ■■■■■□□□ 100%* ${video.author?.name || 'Desconhecido'}

  ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
> *Min- – – – – – – – – -●Max*\n
${NomeDoBot}
`.trim();
await client.sendMessage(from, { image: { url: video.thumbnail || video.image }, caption: mensagem
}, { quoted: seloMeta });
const audioUrl = `${BLACKOUT_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { audio: { url: audioUrl },mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: seloMeta });
} catch (e) { console.error("Erro no play:", e);
return enviar(mensagens.erro);
}
break;

case 'playvideo': { // Tosh blackout 
try {
if (!q) return enviar(`Use: ${prefix}playvideo nome da música`);
enviar(mensagens.carregando);
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
return enviar("Nenhum resultado encontrado.");
const video = res.resultado.find(v => v.type === 'video');
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600)
return enviar("Vídeos acima de 1 hora não são suportados.");
const mensagem = `> *Video escolhido por:* ${pushname}

> ${video.title}
> 0:35 ━❍──────── - ${video.duration?.timestamp || '??'}
> ↻ ⊲ Ⅱ ⊳ ↺ *Postado:* ${video.ago || 'Desconhecido'}

> *VOLUME: ■■■■■□□□ 100%* ${video.author?.name || 'Desconhecido'}

  ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
> *Min- – – – – – – – – -●Max*\n
${NomeDoBot}
`.trim();
await client.sendMessage(from, { image: { url: video.thumbnail || video.image }, caption: mensagem }, { quoted: seloMeta });
const videoUrl = `${BLACKOUT_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`; 
await client.sendMessage(from, { video: { url: videoUrl },mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: seloMeta });
} catch (e) { console.error("Erro no playvideo:", e);
return enviar(mensagens.erro);
}}
break;

case 'pinterest'://Tosh blackout 
try {
if(!q) return enviar('Informe o nome da imagem!');
enviar(mensagens.carregando);
await client.sendMessage(from, {image: 
{url: `${BLACKOUT_API}/api/pesquisa/pinterest?apikey=${BLACKOUT_KEY}&query=${encodeURIComponent(q)}`}}, 
{quoted: info});
} catch (error) {
console.log(error);
return enviar(mensagens.erro);
}
break;

case 'metadinha': {//Tosh blackout
enviar(mensagens.carregando);
try {
const res = await fetchJson(`${BLACKOUT_API}/api/imagem/metadinha?apikey=${BLACKOUT_KEY}`);
if (!res.masculina || !res.feminina) return enviar("Não foi possível gerar as metadinhas no momento.");
await client.sendMessage(from, { image: { url: res.masculina },caption: `🧔 Metadinha Masculina` }, { quoted: seloMeta });
await client.sendMessage(from, { image: { url: res.feminina },caption: `👩 Metadinha Feminina` }, { quoted: seloMeta });
} catch (e) { console.error("Erro ao gerar metadinha:", e);
return enviar(mensagens.erro);
}}
break;

case 'gerarlink': case 'upload': {// Tosh Blackout
try {
const YSG = isQuotedImage || isImage;
if (!YSG) { return enviar('Você precisa marcar ou enviar uma imagem!');
}
await reagir(from, '🔗');
const limite = 209715200; // 200MB
let midiaBuffer;
if (isMedia && info.message.imageMessage.fileLength < limite) {
midiaBuffer = await getFileBuffer(info.message.imageMessage, 'image');
} else if (
isQuotedImage &&
info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileLength < limite
 ) {
const imgMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
midiaBuffer = await getFileBuffer(imgMsg, 'image');
} else {
return enviar('❗ O gerador de link só funciona com imagens abaixo de 200MB.');
}
await sleep(1000);
await reagir(from, '📷');
const res = await upload(midiaBuffer);
await client.sendMessage(from, { text: `✅ *Link gerado com sucesso!*\n${String(res)}`, linkPreview: false }, { quoted: info });
await reagir(from, '✅');
} catch (e) {
console.error('Erro no comando gerarlink:', e);
enviar('Erro ao gerar link. Verifique o console.');
}}
break;


case 'uploads':// Tosh Blackout
try {
 const qm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
 if (!qm) return enviar('Marque uma mídia.');
const map = { imageMessage:'jpg', videoMessage:'mp4', stickerMessage:'webp', audioMessage:'mp3' };
const key = Object.keys(map).find(k => qm[k]);
if (!key) return enviar('Mídia inválida.');
const { downloadContentFromMessage } = require('@adiwajshing/baileys');
const fetch = require('node-fetch'); const FormData = require('form-data');
let buffer = Buffer.from([]);
for await (const chunk of await downloadContentFromMessage(qm[key], key.replace('Message','').toLowerCase())) buffer = Buffer.concat([buffer, chunk]);
const form = new FormData(); form.append('reqtype','fileupload'); form.append('fileToUpload',buffer,{filename:`file.${map[key]}`});
const res = await fetch('https://catbox.moe/user/api.php',{method:'POST',body:form});
const url = await res.text();
if (!res.ok || !url.startsWith('https://')) throw 'Erro no upload';
enviar(`Aqui está o link:\n${url}`);
} catch (e) { enviar('Erro: '+e.message||e); }
break;





/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̇ •🩸•୨୧COMANDOS DE FIGURINHAS ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'figuemoji': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_emoji?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruz();
await sleep(680);}}
break;

case 'figumemes': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzfig() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_memes2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfig();
await sleep(680);}}
break;

case 'figubebe': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzfi() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_bebe?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfi();
await sleep(680);}}
break;

case 'figucoreana': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_coreana?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figucoreana2': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_coreanas2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figuanime': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzprasempre() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_anime2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzprasempre();
await sleep(680);}}
break;

case 'figuanimais': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversari() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_animais?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversari();
await sleep(680);}}
break;

case 'figudesenho': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversar() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_desenho?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversar();
await sleep(680);}}
break;

case 'figurinhas': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversa() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_aleatori?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversa();
await sleep(680);}}
break;

case 'st': case 'stk': case 'sticker': case 's':{//Tosh Blackout 
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
let packin;
let author23;
if (`${sender.split("@")[0]}` === NomeDono) {
packin =  q ? q?.split("/")[0] : NomeDoBot
author23 = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `♥️ ${NomeDono}`
} else {
packin =  q ? q?.split("/")[0] : `💌Feito por: ${NomeDoBot}🤖Enviado por: ${numeroBot.split('@')[0]}`
author23 = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `\n\n☁️Pedido${pushname}\n💎Tosh Blackout`
}
if(boij2){
reagir('💭')
enviar(mensagens.carregando);
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(client, from, owgi, info, { packname:packin, author:author23})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(client, from, owgi, info, { packname:packin, author:author23})
await DLT_FL(encmedia)
reagir('♥️')
} else {
return enviar(`Marque uma foto ou o vídeo(menor que 10s) para fazer sua figurinha com o comando: ${prefix+comando}`)
}
}
break



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS DE DONO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'audio-menu': { // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
const estadoAtual = nescessario.menu_audio === 1;
const argumento = args[0];
if (!argumento) {
let statusMsg = estadoAtual
 ? "✘⋟ O áudio do menu está *ativado* ✅"
 : "✘⋟ O áudio do menu está *desativado* ❌";
statusMsg += `\n\nPara alterar o estado, use:\n`;
statusMsg += `> *!audio-menu 1* → ✘⋟ para ativar\n`;
statusMsg += `> *!audio-menu 0* → ✘⋟ para desativar`;
return enviar(statusMsg);
 }
if (argumento !== "1" && argumento !== "0") {
return enviar("✘⋟ Use apenas *!audio-menu 1* para ativar ou *!audio-menu 0* para desativar.");
}
const novoEstado = argumento === "1";
if (estadoAtual === novoEstado) {
return enviar(novoEstado
 ? "✘⋟ O áudio do menu já está *ativado*, não há necessidade de alterar."
 : "✘⋟ O áudio do menu já está *desativado*, não há necessidade de alterar.");
}
nescessario.menu_audio = novoEstado ? 1 : 0;
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
return enviar(novoEstado
 ? "✅ O áudio do menu foi *ativado* com sucesso! Use novamente o comando para desativar quando quiser."
 : "❌ O áudio do menu foi *desativado* com sucesso! Use novamente o comando para ativar quando quiser.");
}
break; 

case 'visualizar-msg': { // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
const argumento = args[0];
const enviar = (txt) => client.sendMessage(from, { text: txt }, { quoted: seloMeta });
const estadoAtual = nescessario.visualizarmsg === true || nescessario.visualizarmsg === 1;
if (!argumento) {
let statusMsg = estadoAtual
 ? "✘⋟ A visualização automática de mensagens está *ativada* ✅"
 : "✘⋟ A visualização automática de mensagens está *desativada* ❌";
statusMsg += `\n\nPara alterar o estado, use:\n`;
statusMsg += `> *${prefix}visualizar-msg 1* → ✘⋟ ativar visualização automática\n`;
statusMsg += `> *${prefix}visualizar-msg 0* → ✘⋟ desativar visualização automática`;
return enviar(statusMsg);
}
if (argumento !== "1" && argumento !== "0") {
return enviar(`⚠️ Use apenas:\n> *${prefix}visualizar-msg 1* para ativar\n> *${prefix}visualizar-msg 0* para desativar`);
}
const novoEstado = argumento === "1";
if (estadoAtual === novoEstado) {
return enviar(novoEstado
 ? "✘⋟ A visualização de mensagens já está *ativada*, não há necessidade de alterar."
 : "✘⋟ A visualização de mensagens já está *desativada*, não há necessidade de alterar.");
  }
nescessario.visualizarmsg = novoEstado;
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
isVisualizarmsg = novoEstado;
return enviar(novoEstado
 ? "✅ A visualização de mensagens foi *ativada* com sucesso!\nO bot agora marcará todas as mensagens como lidas automaticamente."
 : "❌ A visualização de mensagens foi *desativada* com sucesso!\nO bot não marcará mais mensagens como lidas automaticamente.");
}
break;

case 'autofigu': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
const flag = (args[0] || '').toString().trim();
if (!['1', '0'].includes(flag)) {
return enviar(`Exemplo: ${prefix}autofigu 1 (ativar) ou ${prefix}autofigu 0 (desativar)`);
}
if (flag === '1') {
ativarAuto(from, 'AutoFigu');
return enviar('✅ AutoFigu ATIVADO neste grupo!');
} else {
desativarAuto(from, 'AutoFigu');
return enviar('❌ AutoFigu DESATIVADO neste grupo!');
}}
break;

case 'autorepo': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
const flag = (args[0] || '').toString().trim();
if (!['1', '0'].includes(flag)) {
return enviar(`Exemplo: ${prefix}autorepo 1 (ativar) ou ${prefix}autorepo 0 (desativar)`);
}
if (flag === '1') {
ativarAuto(from, 'AutoRepo');
return enviar('✅ AutoRepo ATIVADO neste grupo!');
} else {
desativarAuto(from, 'AutoRepo');
return enviar('❌ AutoRepo DESATIVADO neste grupo!');
}}
break;

case 'antipv': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
const estadoAtual = nescessario.Antipv === 1;
const argumento = args[0];
if (!argumento) {
let statusMsg = estadoAtual
 ? "✘⋟ AutoPv está *ativado* ✅"
 : "✘⋟ AutoPv está *desativado* ❌";
statusMsg += `\n\nPara alterar o estado, use:\n`;
statusMsg += `> *!antipv 1* → ativar\n`;
statusMsg += `> *!antipv 0* → desativar`;
return enviar(statusMsg);
}
if (argumento !== "1" && argumento !== "0") {
return enviar("✘⋟ Use apenas *!antipv 1* para ativar ou *!antipv 0* para desativar.");
}
const novoEstado = argumento === "1";
if (estadoAtual === novoEstado) {
return enviar(novoEstado
 ? "✘⋟ AutoPv já está *ativado*, não há necessidade de alterar."
 : "✘⋟ AutoPv já está *desativado*, não há necessidade de alterar.");
}
nescessario.Antipv = novoEstado ? 1 : 0;
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
return enviar(novoEstado
 ? "✅ AutoPv foi *ativado* com sucesso!"
 : "❌ AutoPv foi *desativado* com sucesso!");
}
break;

case 'antipv2': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
const estadoAtual = nescessario.Antipv === 1;
const argumento = args[0];
if (!argumento) {
let statusMsg = estadoAtual
 ? "✘⋟ AutoPv2 está *ativado* ✅"
 : "✘⋟ AutoPv2 está *desativado* ❌";
statusMsg += `\n\nPara alterar o estado, use:\n`;
statusMsg += `> *!antipv2 1* → ativar\n`;
statusMsg += `> *!antipv2 0* → desativar`;
return enviar(statusMsg);
}
if (argumento !== "1" && argumento !== "0") {
return enviar("✘⋟ Use apenas *!antipv2 1* para ativar ou *!antipv2 0* para desativar.");
}
const novoEstado = argumento === "1";
if (estadoAtual === novoEstado) {
return enviar(novoEstado
 ? "✘⋟ AutoPv2 já está *ativado*, não há necessidade de alterar."
 : "✘⋟ AutoPv2 já está *desativado*, não há necessidade de alterar.");
}
nescessario.Antipv = novoEstado ? 1 : 0;
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
return enviar(novoEstado
 ? "✅ AutoPv2 foi *ativado* com sucesso!"
 : "❌ AutoPv2 foi *desativado* com sucesso!");
}
break;

case 'antipv3': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
const estadoAtual = nescessario.Antipv === 1;
const argumento = args[0];
if (!argumento) {
let statusMsg = estadoAtual
 ? "✘⋟ AutoPv3 está *ativado* ✅"
 : "✘⋟ AutoPv3 está *desativado* ❌";
statusMsg += `\n\nPara alterar o estado, use:\n`;
statusMsg += `> *!antipv3 1* → ativar\n`;
statusMsg += `> *!antipv3 0* → desativar`;
return enviar(statusMsg);
}
if (argumento !== "1" && argumento !== "0") {
return enviar("✘⋟ Use apenas *!antipv3 1* para ativar ou *!antipv3 0* para desativar.");
}
const novoEstado = argumento === "1";
if (estadoAtual === novoEstado) {
return enviar(novoEstado
 ? "✘⋟ AutoPv3 já está *ativado*, não há necessidade de alterar."
 : "✘⋟ AutoPv3 já está *desativado*, não há necessidade de alterar.");
}
nescessario.Antipv = novoEstado ? 1 : 0;
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
return enviar(novoEstado
 ? "✅ AutoPv3 foi *ativado* com sucesso!"
 : "❌ AutoPv3 foi *desativado* com sucesso!");
}
break;

case 'fotomenu': case 'fundomenu': { // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isQuotedImage && !isImage) {
return enviar("Marque ou envie uma imagem para alterar o fundo do menu.");
}
try {
await client.sendMessage(from, { text: mensagens.carregando }, { quoted: seloMeta });
const boij = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage
: info.message.imageMessage;
const owgi = await getFileBuffer(boij, 'image');
const res = await upload(owgi);
const caminhoLogos = './dono/logos.json';
let logoslink = { logo: [] };
if (fs.existsSync(caminhoLogos)) {
logoslink = JSON.parse(fs.readFileSync(caminhoLogos));
}
logoslink.logo = [res];
fs.writeFileSync(caminhoLogos, JSON.stringify(logoslink, null, 2));
await enviar(`✅ Foto do menu alterada com sucesso!\nNovo link: ${res}`);
} catch (e) {
console.error('[ERRO FOTOMENU]', e);
enviar('Ocorreu um erro ao tentar alterar a foto do menu.');
}}
break;

case 'fundobv': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isQuotedImage && !isImage) {
return enviar("Marque ou envie uma imagem para alterar o fundo do bem-vindo.");
}
try {
await client.sendMessage(from, { text: mensagens.carregando }, { quoted: seloMeta });
const imageMsg = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const bufferImg = await getFileBuffer(imageMsg, 'image');
const res = await upload(bufferImg); 
const caminhoLogos = './database/grupos/imgs_bemvidos.json';
let imgs = { fundo1: '', fundo2: '' };
if (fs.existsSync(caminhoLogos)) {
imgs = JSON.parse(fs.readFileSync(caminhoLogos));
}
imgs.fundo1 = res; // atualiza fundo1 (bem-vindo)
fs.writeFileSync(caminhoLogos, JSON.stringify(imgs, null, 2));
await enviar(`Fundo de boas-vindas alterado com sucesso!\nNovo link: ${res}`);
} catch (e) {
console.error('[ERRO FUNDO BV]', e);
enviar('Ocorreu um erro ao tentar alterar o fundo de boas-vindas.');
}}
break;

case 'fundosaiu': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isQuotedImage && !isImage) {
return enviar("Marque ou envie uma imagem para alterar o fundo de saída.");
}
try {
await client.sendMessage(from, { text: mensagens.carregando }, { quoted: seloMeta });
const imageMsg = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const bufferImg = await getFileBuffer(imageMsg, 'image');
const res = await upload(bufferImg); 
const caminhoLogos = './database/grupos/imgs_bemvidos.json';
let imgs = { fundo1: '', fundo2: '' };
if (fs.existsSync(caminhoLogos)) {
imgs = JSON.parse(fs.readFileSync(caminhoLogos));
}
imgs.fundo2 = res; 
fs.writeFileSync(caminhoLogos, JSON.stringify(imgs, null, 2));
await enviar(`Fundo de saída alterado com sucesso!\nNovo link: ${res}`);
} catch (e) {
console.error('[ERRO FUNDO SAIU]', e);
enviar('Ocorreu um erro ao tentar alterar o fundo de saída.');
}}
break;

case 'nuke': case 'arquivargp': {//Tosh Blackout 
if(!isDono) return enviar(mensagens.isDono);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
let blup = [];
for (let i of groupMembers) {
if (!numerodono.includes(i.id) && i.id !== botNumber) blup.push(i.id);
}
for (let i = 0; i < blup.length; i++) {
try {
await client.groupParticipantsUpdate(from, [blup[i]], 'remove');
await sleep(500); 
} catch (err) {
console.log(`Erro ao remover ${blup[i]}:`, err);
}}
try {
await client.groupUpdateSubject(from, NomeDono);
} catch (err) {
console.log('Erro ao alterar o nome do grupo:', err);
}
try {
await client.groupUpdateProfilePicture(from, { url: linklogos });
} catch (err) {
console.log('❌ Erro ao alterar a foto do grupo:', err);
}
await enviar(`nuke realizado!\nTodos removidos exceto o dono e o bot.\nNome do grupo atualizado: ${NomeDono}`);
} 
break;

case 'sairgp': // Tosh Blackout
if(!isDono) return enviar(mensagens.isDono);
enviar(`👋 ${NomeDono}, estou saindo desse grupo...`);
try {
await client.groupLeave(from);
console.log(`Saiu do grupo: ${from}`);
} catch (erro) {
console.error("Erro ao sair do grupo:", erro);
enviar(`Erro ao tentar sair do grupo:\n${erro.message || erro}`);
}
break;

case 'seradm'://Tosh Blackout 
if(!isDono) return enviar(mensagens.isDono);
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador mestre..`, [sender], true)
client.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro'://Tosh Blackout 
if(!isDono) return enviar(mensagens.isDono);
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente chefia..`, [sender], true)
client.groupParticipantsUpdate(from, [sender], "demote")
break

case 'reiniciar'://Tosh Blackout
if(!isDono) return enviar(mensagens.isDono);
setTimeout(async () => {
enviar(`Reiniciando... ${NomeDoBot}`);
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'novodono': {
if (!args[0] || !args[1]) 
return enviar(`Exemplo: ${prefix}novodono 1 5511962390241 → adiciona ou atualiza o dono`);
if (!isDono) return enviar(mensagens.isDono);
const index = parseInt(args[0]); // número do dono (1-6)
if (isNaN(index) || index < 1 || index > 6) 
return enviar("Escolha um número de 1 a 6. para adicionar dono e coloque o número tel");
const numero = args[1].trim(); 
nescessario[`numero_dono${index}`] = numero;
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
enviar(`✅ Dono${index} alterado com sucesso para: ${numero}. Temos um novo dono agora!`);
}
break;

case 'removerdono': {//Tosh Blackout 
if (!args[0]) return enviar(`Exemplo: ${prefix}removerdono 5`);
if (!isDono) return enviar(mensagens.isDono);
const index = parseInt(args[0]);
if (isNaN(index) || index < 1 || index > 6) 
return enviar("Escolha um número de 1 a 6 para remover algum *Dono*");
nescessario[`numero_dono${index}`] = "."; 
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
enviar(`✅ Dono ${index} removido com sucesso.`);
}
break;


case 'verificado': { // 🩵 Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
const args = body.trim().split(/\s+/).slice(1);
const acao = args[0] ? args[0].toLowerCase() : '';
if (!['1', '0'].includes(acao)) {
return reply(`⚙️ Uso correto:\n${prefix}verificado 1 — ativar\n${prefix}verificado 0 — desativar`);
}
nescessario.Verificado = parseInt(acao);
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
if (acao === '1') {
await enviar('✅ Modo *Verificado* ativado 🩵✓ Tosh Blackout');
} else {
await enviar('❌ Modo *Verificado* desativado');
}}
break;



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS DE ADMINS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'modobrincadeira': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const banco = JSON.parse(fs.readFileSync(Modobn, 'utf8'));
const groupId = from;
const estadoAtual = banco[groupId]?.ativo || false;
const argumento = args[0];
if (!argumento) {
let statusMsg = estadoAtual
 ? "✘⋟ O *modo brincadeira* está *ativado* neste grupo ✅"
 : "✘⋟ O *modo brincadeira* está *desativado* neste grupo ❌";
statusMsg += `\n\n🧩 Para alterar o estado, use:\n`;
statusMsg += `> *${prefix}modobrincadeira 1* → Ativar ✅\n`;
statusMsg += `> *${prefix}modobrincadeira 0* → Desativar ❌`;
return client.sendMessage(from, { text: statusMsg }, { quoted: seloMeta });
 }
if (argumento !== "1" && argumento !== "0") {
return client.sendMessage(from, { text: "Use apenas:\n*1* para ativar ou *0* para desativar o modo brincadeira.", quoted: seloMeta });
}
const novoEstado = argumento === "1";
if (estadoAtual === novoEstado) {
return client.sendMessage(from, { text: novoEstado
 ? "✘⋟ O *modo brincadeira* já está *ativado* neste grupo."
 : "✘⋟ O *modo brincadeira* já está *desativado* neste grupo.", quoted: seloMeta });
 }
if (novoEstado) { 
banco[groupId] = {
ativo: true,
nomeGrupo: groupName || "Grupo Desconhecido",
ativadoPor: sender,
dataAtivacao: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
};
fs.writeFileSync(Modobn, JSON.stringify(banco, null, 2));
return client.sendMessage(from, { text: "✅ O *modo brincadeira* foi *ativado* com sucesso neste grupo! 🃏", quoted: seloMeta });
 }

if (banco[groupId]) {
delete banco[groupId];
fs.writeFileSync(Modobn, JSON.stringify(banco, null, 2));
 }
return client.sendMessage(from, { text: "O *modo brincadeira* foi *desativado* nesse grupo com sucesso! 😴", quoted: seloMeta });
}
break;

case 'ban': case 'kick'://Tosh Blackout
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.isGroupAdmins && !isDono);
try {
if(!menc_os2 || menc_jid2[1]) return enviar("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("Olha só! Já está pronto para brincar com os desafios")
if(numeroBot.includes(menc_os2)) return enviar("Oi! Não sou tão fácil de esquecer 😎")
if(numerodono.includes(menc_os2)) return enviar("Ih rapaz! Tá passando dos limites kk")
client.groupParticipantsUpdate(from, [menc_os2], "remove") 
client.sendMessage(from, {text: `"Eita! Esse aí tá pedindo confusão kkk ${pushname} corta as asa dele`, mentions: [sender]}) 
} catch (e) {
console.log(e)
}
break

case 'totag': case 'cita': case 'hidetag': // Tosh blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
client.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar': { // Tosh blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
try {
const groupData = await client.groupMetadata(from);
const participants = groupData.participants.map(p => p.id);
const groupAdmins = groupData.participants
.filter(p => p.admin !== null)
.map(p => p.id);
const membrosComuns = participants.filter(p => !groupAdmins.includes(p));
if (membrosComuns.length === 0) {
return enviar(`Olá *${pushname}* - Não contém nenhum membro comum no grupo, apenas administradores.`);
}
if (isAudioMenu) {
const audioPath = './arquivos/audios/marcar.mp3';
try {
if (fs.existsSync(audioPath)) {
const audioData = fs.readFileSync(audioPath);
await client.sendMessage(from, { audio: audioData,mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} else { console.warn("Áudio de marcar não encontrado:", audioPath);
}
} catch (err) { console.error("Erro ao enviar o áudio de marcar:", err);
}}
const vídeomenu = fs.readFileSync('./arquivos/videos/marcar.mp4');
let legenda = `✘⋟Adm ${pushname} Mencionando os *membros* comuns do grupo.${q ? `\n\n📢 *Mensagem:* ${q}` : ''}\n\n`;
membrosComuns.forEach(id => {
legenda += `✘⋟ @${id.split('@')[0]}\n`;
});
await client.sendMessage(from, { video: vídeomenu, mimetype: 'video/mp4', gifPlayback: true,
caption: legenda, mentions: membrosComuns}, { quoted: seloMeta });
} catch (e) { console.error(e);
enviar('Ocorreu um erro ao tentar marcar os membros.');
 }}
break;

case 'promover'://Tosh Blackout 
if (!isGroup) return enviar(msg.grupo)
if (!isBotGroupAdmins) return enviar(msg.botadm)
if (!isGroupAdmins && !isDono) return enviar(msg.adm)
if(!menc_os2 || menc_jid2[1]) return enviar("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("Este usuário foi removido do grupo ou saiu, não será possível promover..")
client.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
client.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar'://Tosh Blackout 
if (!isGroup) return enviar(msg.grupo)
if (!isBotGroupAdmins) return enviar(msg.botadm)
if (!isGroupAdmins && !isDono) return enviar(msg.adm)
if(!menc_os2 || menc_jid2[1]) return enviar("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
client.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
client.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'grupo'://Tosh Blackout
if (!isGroup) return enviar(msg.grupo)
if (!isBotGroupAdmins) return enviar(msg.botadm)
if (!isGroupAdmins && !isDono) return enviar(msg.adm)
try {
if (q === "a"){
await reagir("🔓")
await client.groupSettingUpdate(from, "not_announcement")
enviar(`Agora o grupo está aberto, bora interagir! 🔓`)
}
if (q === "f") {
await reagir("🔒")
await client.groupSettingUpdate(from, "announcement")
enviar(`Feito! O grupo está fechado, hora de descansar a conversa 🔒`)
} else {
if (!q) return enviar(`Use ${prefix}grupo a para abrir o grupo e ${prefix}grupo f para fechá-lo.`)
}
} catch(e) {
reagir("⚠️")
consoleErro(e)
enviar(mensagens.erro);
}
break

case 'resetlink': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
try {
await client.groupRevokeInvite(from)
enviar(`*Link de convite resetado com sucesso*`)
} catch(e) {
console.log(e)
enviar(mensagens.erro);
}}
break

case 'antilink': { // Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
const args = body.trim().split(/\s+/).slice(1); 
const sub = (args[0] || '').toLowerCase(); // 'soft' | 'hard'
const action = (args[1] || '').toLowerCase(); // 'on' | 'off'
const groupId = from;
if (!['soft', 'hard'].includes(sub) || !['on', 'off'].includes(action)) {
return await enviar(`*Sistema AntiLink - ${NomeDono}*\n
✘⋟ *Modos disponíveis:*
✘⋟ *soft* → Remove quem envia link (mensagem permanece)
✘⋟ *hard* → Remove quem envia link e apaga a mensagem

✘⋟ *Como usar:*
✘⋟ ${prefix}antilink soft on  → Ativa modo leve
✘⋟ ${prefix}antilink hard on  → Ativa modo forte
✘⋟ ${prefix}antilink soft off → Desativa modo leve
✘⋟ ${prefix}antilink hard off → Desativa modo forte

⚠️ Apenas administradores podem ativar ou desativar.`);
}
const mode = (action === 'on') ? sub : 'off';
setAntiLinkConfig(groupId, { mode });
let msg = '';
if (mode === 'soft') {
msg = '✘⋟ AntiLink modo *SOFT* ativado!\nUsuários que enviarem links serão removidos, mas as mensagens permanecerão.';
} else if (mode === 'hard') {
msg = '✘⋟ AntiLink modo *HARD* ativado!\nMensagens com links serão apagadas e os usuários removidos imediatamente.';
} else {
msg = '✅ AntiLink *desativado* neste grupo.';
}
await enviar(msg);
}
break;

case 'nomegp'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!q) return enviar(`Exemplo ${prefix}nomegp Tosh Blackout`);
await client.groupUpdateSubject(from, `${q}`)
await client.sendMessage(from, {text: "Feito! Novo nome no ar"})
break

case 'descricaogp': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!q) return enviar(`Exemplo: ${prefix}descricaogp Proibido nao seguir o canal do Tosh Blackout`);
try {
await client.groupUpdateDescription(from, q);
await client.sendMessage(from, { text: `Pronto! A nova descrição do grupo agora é:\n"${q}"` });
} catch (err) {
console.log(err);
await client.sendMessage(from, { text: "Eita! Não consegui alterar a descrição, algo deu errado." });
}}
break;

case 'deletar': case 'del':  case 'd'://Tosh Blackout 
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!menc_prt) return enviar("Ei, não me deixa adivinhar, marque a mensagem kk")
await client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
reagir("🗑")
break

case 'bemvindo': case 'welcome': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
const dataGp = getGroupSettings(from);
const isWelkom1 = dataGp[0].wellcome[0].bemvindo1;
if (args.length < 1) return enviar('Use: 1 para ativar / 0 para desativar');
if (Number(args[0]) === 1) {
if (isWelkom1) return enviar('✅ Já está ativo.');
dataGp[0].wellcome[0].bemvindo1 = true;
dataGp[0].wellcome[1].bemvindo2 = false;
setGp(from, dataGp);
enviar('Bem-vindo ativado com sucesso!');
} else if (Number(args[0]) === 0) {
if (!isWelkom1) return enviar('Já está desativado bb calma.');
dataGp[0].wellcome[0].bemvindo1 = false;
setGp(from, dataGp);
enviar('Bem-vindo desativado com sucesso!');
} else {
enviar('Use: 1 para ativar / 0 para desativar');
}}
break;

case 'bemvindo2': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
const dataGp = getGroupSettings(from);
const isWelkom2 = dataGp[0].wellcome[1].bemvindo2;
if (args.length < 1) return enviar('Use: 1 para ativar / 0 para desativar');
if (Number(args[0]) === 1) {
if (isWelkom2) return enviar('Já está ativo delicio(a).');
dataGp[0].wellcome[1].bemvindo2 = true;
dataGp[0].wellcome[0].bemvindo1 = false;
setGp(from, dataGp);
enviar('✅ Bem-vindo sem imagem ativado com sucesso!');
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return enviar('Já está desativado delicio(a)');
dataGp[0].wellcome[1].bemvindo2 = false;
setGp(from, dataGp);
enviar('Bem-vindo sem imagem desativado com sucesso!');
} else {
enviar('Use: 1 para ativar / 0 para desativar');
}}
break;

case 'legendabv': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (args.length < 1)
return enviar(`Exemplo: ${prefix}legendabv mensagem\nExemplo: ${prefix}legendabv Olá bem vindos(a)`);
const dataGp = getGroupSettings(from);
const texto = body.slice(11).trim();

dataGp[0].wellcome[0].legendabv = texto;
setGp(from, dataGp);
enviar('Mensagem de boas-vindas  definida com sucesso!');
}
break;

case 'legendabv2': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
 if (args.length < 1)
return enviar(`Exemplo: ${prefix}legendabv2 mensagem\nExemplo: ${prefix}legendabv2 Seja bem-vindo `);
const dataGp = getGroupSettings(from);
const texto = body.slice(12).trim();
dataGp[0].wellcome[1].legendabv = texto;
setGp(from, dataGp);
enviar('Mensagem de boas-vindas definida com sucesso!');
}
break;

case 'legendasaiu': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (args.length < 1)
return enviar(`Use: ${prefix}legendasaiu mensagem\nExemplo: ${prefix}legendasaiu saiu do grupo nem pagou a coca`);
const dataGp = getGroupSettings(from);
const texto = body.slice(13).trim();
dataGp[0].wellcome[0].legendasaiu = Number(texto) === 0 ? "" : texto;
setGp(from, dataGp);
enviar(Number(texto) === 0 ? 'Mensagem de saída desativada.' : 'Mensagem de saída tipo 1 definida!');
}
break;

case 'legendasaiu2': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (args.length < 1)
 return enviar(`Exemplo: ${prefix}legendasaiu2 mensagem\nExemplo: ${prefix}legendasaiu2 saiu do grupo `);
const dataGp = getGroupSettings(from);
const texto = body.slice(15).trim();
dataGp[0].wellcome[1].legendasaiu = Number(texto) === 0 ? "" : texto;
setGp(from, dataGp);
enviar(Number(texto) === 0 ? 'Mensagem de saída desativada.' : '✅ Mensagem de saída definida!');
}
break;



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS DE BRINCADEIRAS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'nazista': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
let isQuoted = info.message?.extendedTextMessage?.contextInfo?.participant;
let alvo;
if (isQuoted) {
alvo = info.message.extendedTextMessage.contextInfo.participant; // pessoa da msg respondida
} else if (args.length && args[0].includes('@')) {
alvo = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
} else {
alvo = sender; 
}
const nomeAlvo = alvo === sender ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage(from, { 
text: `Pesquisando a ficha de nazista de ${nomeAlvo}... aguarde uns segundos.`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
 await client.sendMessage(from, { image: { url: imgnazista },
caption: `O quanto ${nomeAlvo} pode ser uma pessoa nazista?\n\n• Chance de ser nazista: *${random}%*`,
mentions: [alvo] }, { quoted: seloMeta });
}, 7000);
}
break;

case 'gay': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
let isQuoted = info.message?.extendedTextMessage?.contextInfo?.participant;
let alvo;
if (isQuoted) {
alvo = info.message.extendedTextMessage.contextInfo.participant; 
} else if (args.length && args[0].includes('@')) {
alvo = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
} else {
alvo = sender;
}
const nomeAlvo = alvo === sender ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage(from, {
text: `Pesquisando a ficha de gay de ${nomeAlvo}... aguarde uns segundos.`, mentions: [alvo]
}, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let bo;
if (random < 20) bo = 'hmm... você é hetero...';
else if (random < 30) bo = '+/- boiola';
else if (random < 40) bo = 'tenho minha desconfiança...';
else if (random < 50) bo = 'você é né?';
else if (random === 50) bo = 'você é ou não?';
else bo = 'você é gay...';
await client.sendMessage(from, {
image: { url: imggay },
caption: `Qual é a porcentagem de chance do(a) ${nomeAlvo} ser gay?\n\n• *${random}% homossexual*, ${bo}`,mentions: [alvo], thumbnail: null }, { quoted: seloMeta });
}, 7000);
}
break;

case 'corno': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
let isQuoted = info.message?.extendedTextMessage?.contextInfo?.participant;
let alvo;
if (isQuoted) {
alvo = info.message.extendedTextMessage.contextInfo.participant; 
} else if (args.length && args[0].includes('@')) {
alvo = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
} else {
alvo = sender; 
}
const nomeAlvo = alvo === sender ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage(from, {
text: `Pesquisando a ficha de corno de ${nomeAlvo}... aguarde uns segundos.`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Nem sinal de chifre.';
else if (random < 40) status = 'Talvez só um boato...';
else if (random < 60) status = 'A vizinhança comenta coisas...';
else if (random < 80) status = 'Tem chifre crescendo aí!';
else if (random < 100) status = 'Confirmado: chifrudo(a) com orgulho!';
else status = 'Ultra corno! O rei dos traídos!';
await client.sendMessage(from, {
image: { url: imgcorno },
caption: `O quanto ${nomeAlvo} pode ser uma pessoa chifruda?\n\n• *${random}% de chance de ser corno(a)*\n${status}`, mentions: [alvo], thumbnail: null }, { quoted: seloMeta });
}, 7000);
}
break;

case 'gostosa': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
let isQuoted = info.message?.extendedTextMessage?.contextInfo?.participant;
let alvo;
if (isQuoted) {
alvo = info.message.extendedTextMessage.contextInfo.participant;
} else if (args.length && args[0].includes('@')) {
alvo = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
} else {
alvo = sender;
}
const nomeAlvo = alvo === sender ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage(from, { text: `Calculando o nível de gostosura de ${nomeAlvo}... aguarde uns segundos`,mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Sem sal... precisa de um upgrade';
else if (random < 40) status = 'Bonitinha, mas sem impacto.';
else if (random < 60) status = 'Dá pra olhar duas vezes 👀';
else if (random < 80) status = 'Tá pegando fogo, bicho!';
else if (random < 100) status = 'QUE ISSO! Uma verdadeira deusa';
else status = 'Nível supremo de gostosura — impossível resistir!';
await client.sendMessage(from, { image: { url: imggostosa },
caption: `Nível de gostosura de ${nomeAlvo}\n\n• *${random}% gostosa*\n${status}`, mentions: [alvo], thumbnail: null }, { quoted: seloMeta });
}, 7000);
}
break;

case 'gostoso': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
let isQuoted = info.message?.extendedTextMessage?.contextInfo?.participant;
let alvo;
if (isQuoted) {
alvo = info.message.extendedTextMessage.contextInfo.participant;
} else if (args.length && args[0].includes('@')) {
alvo = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
} else {
alvo = sender;
}
const nomeAlvo = alvo === sender ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage(from, { text: `Calculando o nível de gostosura de ${nomeAlvo}... segura o coração`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Nem o espelho te quer';
else if (random < 40) status = 'Tem potencial, mas falta confiança.';
else if (random < 60) status = 'Chamando atenção discretamente';
else if (random < 80) status = 'Um verdadeiro colírio!';
else if (random < 100) status = 'As pessoas desmaiam quando te veem';
else status = 'De tão gostoso, até o sol pede autógrafo!';
await client.sendMessage(from, { image: { url: imggostoso },caption: `Nível de gostosura de ${nomeAlvo}\n\n• *${random}% gostoso*\n${status}`, mentions: [alvo], thumbnail: null }, { quoted: seloMeta });
}, 7000);
}
break;

case 'feio'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
client.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: seloMeta})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
client.sendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: seloMeta})
}, 7000)
break 

case 'gado'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
client.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: seloMeta})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: seloMeta})
}, 7000)
break 

case 'vesgo'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
client.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: seloMeta})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: seloMeta})
}, 7000)
break 

case 'bebado'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
client.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: seloMeta})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: seloMeta})
}, 7000)
break 

case 'tapa'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
if(!menc_os2 || menc_jid2[1]) return enviar('Marque o alvo que você quer da um tapa, a mensagem ou o @')
client.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: seloMeta})
break

case 'matar': case 'mata'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
if(!menc_os2 || menc_jid2[1]) return enviar('marque o alvo que você quer matar, a mensagem ou o @')
client.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: seloMeta})
break 

case 'beijo'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
if(!menc_os2 || menc_jid2[1]) return enviar('marque a pessoa que você quer beijar, a mensagem ou o @')
client.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: seloMeta})
break

case 'chute'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
if(!menc_os2 || menc_jid2[1]) return enviar('Marque o alvo que você quer da um chute, a mensagem ou o @')
client.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de da um chute certeiro em *@${menc_os2.split('@')[0]}*. 💥`, mentions: [menc_os2]}, {quoted: seloMeta})
break

case 'morte': case 'death'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn(from, client, seloMeta)) return;
if (args.length == 0) return await enviar(`Está faltando o nome da pessoa! Por exemplo: ${prefix}morte Tosh Blackout`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await enviar(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
death = `@${sender.split('@')[0]} — Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos de idade.`;
client.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: seloMeta})
break;	
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧CASES ACIMA  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
default:

if (isCmd) {
reagir("💌");
const uptime = process.uptime();
const mensagem = { text: `Acho que você errou o comando, use ${prefix}menu`, contextInfo: { externalAdReply: { title: `Bot: ${NomeDoBot}`, body: `Olá ${pushname}, comando não existente no sistema.`, thumbnail: await getBuffer(thumbnail),mediaType: 1, sourceUrl: `https://api.blackout.toshiruz.site` } },
mentions: [sender] };
await client.sendMessage(from, mensagem, { quoted: seloMeta });
}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS SEM PREFIXO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─tosh.id
*/
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧COMANDOS SEM PREFIXO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
client.ev.on('messages.upsert', async ({ messages }) => {
const msg = messages[0];
const from = msg.key.remoteJid;
const isPV = from.endsWith('@s.whatsapp.net'); 
const sender = msg.key.participant || msg.key.remoteJid;

if (!msg.message) return;

if (isAntipv === 1 && isPV) {
await client.sendMessage(from, { text: "Mensagem automática: não é permitido enviar mensagem no PV!" });
await client.updateBlockStatus(sender, "block");
 return;
}

if (isAntipv2 === 1 && isPV) {
await client.sendMessage(from, { text: "Meu dono nao permite ninguém no meu privado você será bloqueado!" });
await client.updateBlockStatus(sender, "block");
 return;
}

if (isAntipv3 === 1 && isPV) {
await client.sendMessage(from, { text: "Pv nao liberado Todas suas mensagens serão apagadas!" });
await client.sendMessage(from, { delete: msg.key }); 
await client.updateBlockStatus(sender, "block");
 return;
    }
});
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ANTILINK ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const inviteRegex = /chat\.whatsapp\.com\/[A-Za-z0-9]+/i;
const urlRegex = /(https?:\/\/[^\s]+)/i;

if (isGroup && !info.key.fromMe) {
const cfg = getAntiLinkConfig(from);
const mode = cfg.mode || 'off'; // 'off' | 'soft' | 'hard'
if (mode !== 'off') {
const msgText = (body || '').toString();
const hasInvite = inviteRegex.test(msgText);
const hasUrl = urlRegex.test(msgText);
const shouldAct = hasInvite || hasUrl;
if (shouldAct) {
try {
 if (hasInvite) {
const linkCode = await client.groupInviteCode(from).catch(() => null);
if (linkCode && msgText.includes(linkCode)) {
   return;
     }
   }
} catch (e) {
    
 }
if (isGroupAdmins.includes(sender) || sender === client.user?.id) return;
if (!isBotGroupAdmins) return;
if (isCmd) return;
if (mode === 'hard') {
try {
await client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }});
} catch (e) {

}
try {
await client.groupParticipantsUpdate(from, [sender], 'remove');
await client.sendMessage(from, { text: `Usuário removido por enviar link proibido.` }, { quoted: null });
} catch (e) {
console.error('Falha ao remover participante:', e);
await client.sendMessage(from, { text: `Falha ao remover ${sender}. Verifique se o bot é admin.` });
 }
} else if (mode === 'soft') {
try {
await client.groupParticipantsUpdate(from, [sender], 'remove');
await client.sendMessage(from, { text: `${pushname} proibido enviar link nesse grupo irei te remover` });
} catch (e) {
console.error('Falha ao remover participante (soft):', e);
await client.sendMessage(from, { text: `Não foi possível remover ${pushname}.` });
    }
   }
  }
 }
}



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧AUTO-REPO  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (isAtivo(from, 'AutoRepo')) {
if (body.toLowerCase().startsWith('prefixo')) {
const prefixoBuffer = fs.readFileSync('./arquivos/image/prefixo.jpg');
const mensagem = {
text: `  Bot: ${NomeDoBot}`,
contextInfo: {
externalAdReply: {
title: `Olá ${pushname}  meu prefixo [ ${prefix} ]`,
body: `Bot: ${NomeDoBot}`,
thumbnail: prefixoBuffer, // imagem local
mediaType: 1,
sourceUrl: 'https://api.blackout.toshiruz.site' }}, mentions: [sender] }; await client.sendMessage(from, mensagem, { quoted: seloMeta });
}}

if (isAtivo(from, 'AutoRepo')) {
if (body && body.toLowerCase().startsWith('conselho')) {
const conselhoBiblico = conselhos[Math.floor(Math.random() * conselhos.length)];
await enviar(conselhoBiblico);
}}

      
    



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧IFS ACIMA  ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
} catch (erro) {
console.log(erro)
}})
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧DEFINIÇAO DA CONEXÃO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
client.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'open') {//CONEXÃO ABERTA
console.log("✅ Conexão estabelecida, ativando sistema de boas-vindas...");
    initWelcomeSystem(client);
client.updateProfileStatus(`${NomeDoBot} online Criador: ${NomeDono} dominando tudo`)
console.log("[ LOG ] - Bot conectado com sucesso ✅")
if (typeof banner3 !== 'undefined') console.log(banner3.string || banner3);
if (typeof banner2 !== 'undefined') console.log(banner2.string || banner2);
} else if (connection === "connecting") {
console.log(``)
console.log("[ CONEXÃO ] - Estabelecendo conexão com o whatsapp...")
} else if (connection === 'close') {//CONEXÃO FECHADA
const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
if (shouldReconnect) {
console.log('[ LOG ] - Tentando reconectar...');
iniciarBlackout();
} else {
console.log('Desconectado. Finalizando...');
}}
})
}
iniciarBlackout()
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧REINICIAÇÃO AUTOMÁTICA ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
fs.watchFile(__filename, (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧BASE-DELTA ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
como usar as if de dono adm grupo etc...
caso for colocar comando de outro bot é so colocar essas no lugar para nao da indefinido 😏


MSG ADIMINS ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

if(!isGroup) return enviar(mensagens.isGroup);


if(!isDono) return enviar(mensagens.isDono);


if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);


if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);


MSG MEMBROS ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

if(!Donin) return enviar(mensagens.Donin);

return enviar(mensagens.erro);


return enviar(mensagens.sucesso);


return enviar(mensagens.carregando);


COMO MUDAR CLIENTE DA BASE ─.·:*¨✘‿✘¨*:·──.·:*¨✘‿✘¨*:·.─

var sock = client;
var tosh = client;
var loli = client;
var con = client;

JA ESTA DEFINIDO ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

if(isAudioMenu) { 

if (!isModobn(from, client, seloMeta)) return;

*/




