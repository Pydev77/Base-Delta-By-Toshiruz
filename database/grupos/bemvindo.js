/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧BEM VINDO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const dirGroup = path.join(__dirname, './activation_gp');
if (!fs.existsSync(dirGroup)) fs.mkdirSync(dirGroup, { recursive: true });

const linksPath = path.join(__dirname, 'imgs_bemvidos.json');
const { fundo1, fundo2 } = JSON.parse(fs.readFileSync(linksPath, 'utf-8'));

const getGroupSettings = (groupId) => {
if (!groupId || typeof groupId !== 'string') throw new Error(' groupId inválido!');
const filePath = path.join(dirGroup, `${groupId}.json`);

if (!fs.existsSync(filePath)) {
const defaultConfig = [{
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem-vindo(a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
 },
{
bemvindo2: false,
legendabv: "Seja bem-vindo(a) #numerodele# ao grupo: #nomedogp#",
legendasaiu: "#numerodele# deixou o grupo: #nomedogp#"
                }
            ]
        }];
fs.writeFileSync(filePath, JSON.stringify(defaultConfig, null, 2));
 return defaultConfig;
    }
return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const setGp = (groupId, data) => {
if (!groupId || typeof groupId !== 'string') throw new Error('groupId inválido!');
fs.writeFileSync(path.join(dirGroup, `${groupId}.json`), JSON.stringify(data, null, 2));
};

const initGroup = (groupId, tipo = 1) => {
const dataGp = getGroupSettings(groupId);
dataGp[0].wellcome[0].bemvindo1 = false;
dataGp[0].wellcome[1].bemvindo2 = false;
if (tipo === 1) dataGp[0].wellcome[0].bemvindo1 = true;
if (tipo === 2) dataGp[0].wellcome[1].bemvindo2 = true;
setGp(groupId, dataGp);

console.log(`
──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
[ GRUPO ] ➜ ${groupId}
[ STATUS ] ➜ Bem-vindo 1: ${dataGp[0].wellcome[0].bemvindo1 ? '✅ Ativado' : '❌ Desativado'}
[ STATUS ] ➜ Bem-vindo 2: ${dataGp[0].wellcome[1].bemvindo2 ? '✅ Ativado' : '❌ Desativado'}
──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
`);
    return dataGp;
};

const initWelcomeSystem = (client) => {
client.ev.on("group-participants.update", async (tosh) => {
try {
const groupId = tosh.id;
const configPath = path.join(dirGroup, `${groupId}.json`);
if (!fs.existsSync(configPath)) return;

const config = JSON.parse(fs.readFileSync(configPath));
const mdata = await client.groupMetadata(groupId);
const groupName = mdata.subject;
const groupDesc = mdata.desc || "Sem descrição.";
 const mem = tosh.participants[0];

if (mem.startsWith(client.user.id.split(':')[0])) return;

let pushname;
try {
const contact = await client.fetchUser(mem); 
pushname = contact.name || '@' + mem.split('@')[0];
} catch {
pushname = '@' + mem.split('@')[0];
 }

const getProfilePic = async (jid) => {
try {
return await client.profilePictureUrl(jid, 'image');
} catch {
return 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
 }
};
const ppimg = await getProfilePic(mem);

console.log(`[EVENTO] ${tosh.action} | Grupo: ${groupName} | Usuário: ${pushname}`);

if (config[0].wellcome[0].bemvindo1) {
const frasesBV = [
 `ao grupo ${encodeURIComponent(groupName)}`,
 `O membro ${pushname} chegou quem faltava...`,
 `Leia as regras xuxu.`,
 `E lá vamos nós!`,
 `Aqui é um Hospício kkk!`,
 `Aqui ninguém é normal kkk`,
 `Gostou de mim me aluga bb`,
 `Não contavam com minha astúcia!` ];
 
 const frasesBYE = [
 `saiu e nem deu tchau...`,
 `Menos um gado `,
 `Saiu nem faz falta `,
 `Segurança tira ele daqui!`,
 `Adeus ${pushname}` ];

if (tosh.action === 'add') {
const texto = config[0].wellcome[0].legendabv
.replace('#hora#', new Date().toLocaleTimeString())
.replace('#nomedogp#', groupName)
.replace('#numerodele#', pushname)
.replace('#descrição#', groupDesc);
console.log(`🟢 Enviando boas-vindas (modo 1) para ${pushname}`);
await client.sendMessage(groupId, {
image: { url: `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo1)}&text1=${encodeURIComponent(pushname)}&text2=BEM-VINDO(A)&text3=${encodeURIComponent(frasesBV[Math.floor(Math.random() * frasesBV.length)])}&avatar=${encodeURIComponent(ppimg)}` }, caption: texto, mentions: [mem]   });
}

if (tosh.action === 'remove') {
const texto = config[0].wellcome[0].legendasaiu
.replace('#hora#', new Date().toLocaleTimeString())
.replace('#nomedogp#', groupName)
.replace('#numerodele#', pushname)
.replace('#descrição#', groupDesc);

console.log(`Enviando mensagem de saída (modo 1) para ${pushname}`);

 await client.sendMessage(groupId, { image: { url: `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo2)}&text1=${encodeURIComponent(pushname)}&text2=SAIU&text3=${encodeURIComponent(frasesBYE[Math.floor(Math.random() * frasesBYE.length)])}&avatar=${encodeURIComponent(ppimg)}` },
caption: texto, mentions: [mem] });
 }
}

if (config[0].wellcome[1].bemvindo2) {
if (tosh.action === 'add') {
const texto = config[0].wellcome[1].legendabv
.replace('#hora#', new Date().toLocaleTimeString())
.replace('#nomedogp#', groupName)
.replace('#numerodele#', pushname)
.replace('#descrição#', groupDesc);

console.log(`🟢 Enviando boas-vindas (modo 2) para ${pushname}`);

await client.sendMessage(groupId, { text: texto, mentions: [mem]  });
 }

if (tosh.action === 'remove') {
const texto = config[0].wellcome[1].legendasaiu
.replace('#hora#', new Date().toLocaleTimeString())
.replace('#nomedogp#', groupName)
.replace('#numerodele#', pushname)
.replace('#descrição#', groupDesc);

console.log(`Enviando saída (modo 2) para ${pushname}`);

await client.sendMessage(groupId, { image: { url: ppimg },  caption: texto, mentions: [mem] });
  }
}

console.log(`✅ [EVENTO FINALIZADO] ${groupName} | ${tosh.action}`);
console.log('──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.──');

} catch (err) {
console.error('Erro em group-participants.update:', err);
        }
    });
};

module.exports = { getGroupSettings, setGp, initGroup, initWelcomeSystem };
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇̇·̣̇̇ ୨୧✘‿✘BASE-DELTA✘‿✘୨୧•• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
by: Tosh Blackout 
*/
