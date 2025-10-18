# 🩸 Base-Delta WhatsApp Bot

<div align="center">
  
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![Baileys](https://img.shields.io/badge/baileys-7.0.0--rc.3-purple.svg)](https://github.com/WhiskeySockets/Baileys)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Bot-25D366?logo=whatsapp)](https://whatsapp.com)

Um bot completo para WhatsApp com funcionalidades avançadas, sistema de moderação, downloads multimídia e muito mais!

[Características](#-características) • [Instalação](#-instalação) • [Configuração](#%EF%B8%8F-configuração) • [Comandos](#-comandos) • [Suporte](#-suporte)

</div>

---

## 📋 Índice

- [Sobre](#-sobre)
- [Características](#-características)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
  - [Desktop/Servidor](#desktopservidor)
  - [Termux (Android)](#termux-android)
- [Configuração](#%EF%B8%8F-configuração)
- [Comandos](#-comandos)
  - [Menu Geral](#menu-geral)
  - [Menu de Downloads](#menu-de-downloads)
  - [Menu de Figurinhas](#menu-de-figurinhas)
  - [Menu de Brincadeiras](#menu-de-brincadeiras)
  - [Menu de Administração](#menu-de-administração)
  - [Menu do Dono](#menu-do-dono)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias](#-tecnologias)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Créditos](#-créditos)

---

## 🤖 Sobre

**Base-Delta** é um bot avançado para WhatsApp desenvolvido com Baileys 7.0, oferecendo uma ampla gama de funcionalidades para grupos e conversas privadas. Criado por **ToshBlackout**, o bot possui sistema de moderação, download de mídias, criação de figurinhas, jogos e muito mais!

## ✨ Características

- 🔐 **Sistema de Autenticação** - Pareamento por código QR ou número de telefone
- 👑 **Múltiplos Donos** - Suporte para até 6 donos diferentes
- 🛡️ **Moderação Avançada** - Anti-link (soft/hard), anti-PV, sistema de ban
- 📥 **Downloads** - YouTube (áudio/vídeo), Pinterest, gerador de links
- 🎨 **Figurinhas** - Criação personalizada e pacotes automáticos (emoji, memes, anime, etc)
- 🎮 **Brincadeiras** - Diversos comandos interativos e divertidos
- 👋 **Sistema de Boas-vindas** - Mensagens personalizadas para entradas e saídas
- 📊 **Gerenciamento de Grupos** - Controle completo (fechar, abrir, promover, rebaixar)
- 🔄 **Auto Resposta** - Configurável pelo dono
- 📸 **Upload de Mídias** - Conversão de arquivos em links diretos
- 🎵 **Menu de Áudio** - Opção de áudio no menu principal
- 👁️ **Visualizador de Mensagens Apagadas** - Sistema anti-delete

## 📦 Pré-requisitos

- **Node.js** >= 14.0.0
- **npm** ou **yarn**
- **Git**
- **FFmpeg** (para processar mídias)

## 🚀 Instalação

### Desktop/Servidor

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/Base-Delta.git
cd Base-Delta
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Configure o bot:**
Edite o arquivo `dono/config.json` com suas informações:
```json
{
  "prefix": "!",
  "NomeDoBot": "Base-Delta",
  "NomeDono": "Seu Nome",
  "numerodono": "55119XXXXXXXX",
  "BLACKOUT_API": "sua-api-aqui",
  "BLACKOUT_KEY": "sua-chave-aqui"
}
```

4. **Inicie o bot:**
```bash
npm start
# ou
sh start.sh
```

5. **Escaneie o QR Code** que aparecerá no terminal com seu WhatsApp

### Termux (Android)

1. **Configure o armazenamento:**
```bash
termux-setup-storage
```

2. **Atualize os pacotes:**
```bash
pkg update && pkg upgrade
```

3. **Instale as dependências:**
```bash
pkg install yarn
pkg install nodejs
pkg install git
pkg install ffmpeg -y
```

4. **Navegue até a pasta do bot:**
```bash
cd /storage/emulated/0/Download/Base-Delta
```

5. **Instale as dependências do projeto:**
```bash
npm install
```

6. **Inicie o bot:**
```bash
sh start.sh
# ou
npm start
```

> ⚠️ **Nota:** A primeira instalação no Termux pode demorar dependendo do dispositivo.

## ⚙️ Configuração

### Arquivo `dono/config.json`

```json
{
  "prefix": "!",
  "NomeDoBot": "Base-Delta",
  "NomeDono": "Seu Nome",
  "numerodono": "55119XXXXXXXX",
  "BLACKOUT_API": "https://sua-api.com",
  "BLACKOUT_KEY": "sua-chave-api"
}
```

### Arquivo `dono/nescessario.json`

Configure os donos adicionais e outras configurações necessárias neste arquivo.

### Estrutura de Diretórios

```
Base-Delta/
├── arquivos/          # Recursos do bot
│   ├── audios/       # Arquivos de áudio
│   ├── funcoes/      # Funções auxiliares
│   ├── image/        # Imagens
│   ├── js/           # Scripts JavaScript
│   ├── json/         # Arquivos de configuração JSON
│   ├── sticker/      # Sistema de figurinhas
│   └── videos/       # Vídeos
├── database/          # Banco de dados
│   ├── grupos/       # Configurações dos grupos
│   └── gruposAtivos/ # Grupos ativos
├── dono/             # Configurações do dono
│   ├── config.json
│   ├── menus.js
│   └── nescessario.json
├── node_modules/     # Dependências
├── index.js          # Arquivo principal
├── package.json      # Configurações do projeto
├── start.sh          # Script de inicialização
└── README.md         # Este arquivo
```

## 📝 Comandos

> 💡 **Dica:** Sempre use o prefixo configurado antes do comando (padrão: `!`)

### Menu Geral

| Comando | Descrição |
|---------|-----------|
| `!menu` | Exibe o menu principal |
| `!menudono` | Menu exclusivo do dono |
| `!menuadm` | Menu de administradores |
| `!ping` | Verifica o tempo de resposta |
| `!perfil` | Mostra suas informações |
| `!infogrupo` | Detalhes do grupo |
| `!suporte-dono` | Contato do criador |
| `!infodono` / `!criador` | Informações do dono |
| `!totalcmd` | Total de comandos disponíveis |

### Menu de Downloads

| Comando | Exemplo | Descrição |
|---------|---------|-----------|
| `!play` | `!play Alan Walker - Faded` | Baixa áudio do YouTube |
| `!playvideo` | `!playvideo Trailer Avengers` | Baixa vídeo do YouTube |
| `!gerarlink` | `!gerarlink [imagem]` | Gera link direto da imagem |
| `!uploads` | `!uploads [mídia]` | Upload de arquivo para link |
| `!metadinha` | `!metadinha` | Cria figurinha de casal |
| `!pinterest` | `!pinterest natureza` | Busca imagens no Pinterest |

### Menu de Figurinhas

| Comando | Exemplo | Descrição |
|---------|---------|-----------|
| `!s` | `!s [imagem/vídeo]` | Cria figurinha personalizada |
| `!figuemoji` | `!figuemoji 10` | Pacote de emojis |
| `!figumemes` | `!figumemes 5` | Pacote de memes |
| `!figuanime` | `!figuanime 15` | Pacote de anime |
| `!figubebe` | `!figubebe 8` | Pacote de bebês |
| `!figucoreana` | `!figucoreana 10` | Pacote k-pop |
| `!figuanimais` | `!figuanimais 12` | Pacote de animais |
| `!figudesenho` | `!figudesenho 10` | Pacote de desenhos |

### Menu de Brincadeiras

| Comando | Descrição |
|---------|-----------|
| `!nazista` / `!gay` / `!corno` | Respostas engraçadas aleatórias |
| `!feio` / `!gado` / `!bêbado` | Mais brincadeiras |
| `!gostosa` / `!gostoso` | Detector de beleza |
| `!tapa` / `!matar` / `!beijo` / `!chute` | Interações com @ |
| `!death [nome]` | Tela de morte estilizada |

### Menu de Administração

> 🔐 Apenas administradores podem usar

| Comando | Exemplo | Descrição |
|---------|---------|-----------|
| `!ban` | `!ban @user` | Remove usuário |
| `!promover` | `!promover @user` | Promove a admin |
| `!rebaixar` | `!rebaixar @user` | Remove admin |
| `!grupo` | `!grupo f` / `!grupo a` | Fecha/abre grupo |
| `!marcar` | `!marcar` | Menciona todos |
| `!totag` | `!totag [mensagem]` | Marca todos com mensagem |
| `!resetlink` | `!resetlink` | Gera novo link |
| `!nomegp` | `!nomegp Novo Nome` | Altera nome do grupo |
| `!descricaogp` | `!descricaogp Texto` | Altera descrição |
| `!modobrincadeira` | `!modobrincadeira 1` | Liga/desliga brincadeiras |
| `!bemvindo` | `!bemvindo 1` | Liga/desliga boas-vindas |
| `!antilink` | `!antilink soft on` | Ativa anti-link suave |
| `!antilink` | `!antilink hard on` | Ativa anti-link rígido |

### Menu do Dono

> 👑 Apenas o dono pode usar

| Comando | Exemplo | Descrição |
|---------|---------|-----------|
| `!fotomenu` | `!fotomenu [imagem]` | Troca foto do menu |
| `!fundobv` / `!fundosaiu` | `!fundobv [img]` | Define fundos personalizados |
| `!audio-menu` | `!audio-menu 1` | Liga/desliga áudio no menu |
| `!visualizar-msg` | `!visualizar-msg 1` | Ativa anti-delete |
| `!autorepo` / `!autofigu` | `!autorepo 1` | Auto resposta/figurinha |
| `!antipv` / `!antipv2` / `!antipv3` | `!antipv 1` | Bloqueia PV (3 níveis) |
| `!novodono1~6` | `!novodono1 5511999999999` | Adiciona dono |
| `!removerdono` | `!removerdono 2` | Remove dono |
| `!arquivargp` | `!arquivargp` | Arquiva dados do grupo |
| `!nuke` | `!nuke` | ⚠️ Remove todos os membros |
| `!seradm` / `!sermembro` | `!seradm` | Altera cargo do dono |
| `!sairgp` | `!sairgp` | Bot sai do grupo |

## 🏗️ Estrutura do Projeto

O bot é organizado de forma modular para facilitar manutenção e expansão:

- **`index.js`** - Arquivo principal com a lógica de conexão e processamento de mensagens
- **`dono/menus.js`** - Definição dos menus de comandos
- **`arquivos/funcoes/`** - Funções auxiliares reutilizáveis
- **`arquivos/js/`** - Scripts específicos (uploads, mensagens, conselhos)
- **`arquivos/sticker/`** - Sistema de criação de figurinhas com exif
- **`database/`** - Armazenamento de configurações de grupos

## 🛠️ Tecnologias

- **[Baileys](https://github.com/WhiskeySockets/Baileys)** - Biblioteca para WhatsApp Web
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[FFmpeg](https://ffmpeg.org/)** - Processamento de mídias
- **[Chalk](https://github.com/chalk/chalk)** - Coloração de terminal
- **[Moment.js](https://momentjs.com/)** - Manipulação de datas
- **[Pino](https://getpino.io/)** - Logger

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Créditos

- **Desenvolvedor:** ToshBlackout
- **Versão:** 1.0.0
- **Baileys:** 7.0.0-rc.3

---

<div align="center">

### 💬 Suporte

Se você encontrou algum bug ou tem sugestões, abra uma [issue](../../issues)!

**Feito com ❤️ por ToshBlackout**

⭐ Se você gostou deste projeto, não esqueça de dar uma estrela!

</div>
