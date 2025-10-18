const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const cfonts = require('cfonts');

const corzinhas = [
"red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray",
"redBright", "greenBright", "yellowBright", "blueBright",
"magentaBright", "cyanBright", "whiteBright" ];
const cor1 = corzinhas[Math.floor(Math.random() * corzinhas.length)];
const cor2 = corzinhas[Math.floor(Math.random() * corzinhas.length)];
const cor3 = corzinhas[Math.floor(Math.random() * corzinhas.length)];
const cor4 = corzinhas[Math.floor(Math.random() * corzinhas.length)];
const cor5 = corzinhas[Math.floor(Math.random() * corzinhas.length)];

const banner2 = cfonts.render('Tosh Blackout\nBot: Base-Delta\nCriador: +55 11 96239-0241', {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

const banner3 = cfonts.render('Base-Delta', {
font: 'block',
align: 'center',
gradient: ['red', 'magenta']
});

const color = (text, color) => !color ? chalk.green(text) : chalk.keyword(color)(text);
const bgcolor = (text, bgcolor) => !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text);

module.exports = { banner2, banner3, color, bgcolor, cor1, cor2,cor3, cor4, cor5 };
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇̇·̣̇̇ ୨୧✘‿✘BASE-DELTA✘‿✘୨୧•• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
by: Tosh Blackout 
*/