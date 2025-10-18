const axios = require('axios');
const FormData = require('form-data');

function detectarTipo(buffer) {
const assinaturas = {
jpg: [0xff, 0xd8, 0xff],
png: [0x89, 0x50, 0x4e, 0x47],
webp: [0x52, 0x49, 0x46, 0x46] };

for (const [ext, sig] of Object.entries(assinaturas)) {
const slice = buffer.slice(0, sig.length);
if (sig.every((b, i) => slice[i] === b)) {
const mime = {
jpg: 'image/jpeg',
png: 'image/png',
webp: 'image/webp'
 }[ext];
 return { ext, mime };
}}
return { ext: 'bin', mime: 'application/octet-stream' };
}

async function upload(midia) {
try {
const tipo = detectarTipo(midia);
const form = new FormData();
form.append('reqtype', 'fileupload');
form.append('fileToUpload', midia, {
filename: `upload.${tipo.ext}`,
contentType: tipo.mime });

const response = await axios.post('https://catbox.moe/user/api.php', form, { headers: form.getHeaders()  });

return response.data.trim();
} catch (erro) {
console.error('Erro ao fazer upload:', erro);
return 'Erro ao enviar arquivo.';
}}

module.exports = { upload };
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇̇·̣̇̇ ୨୧✘‿✘BASE-DELTA✘‿✘୨୧•• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
by: Tosh Blackout 
*/