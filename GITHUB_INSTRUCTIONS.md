# 📋 Instruções para Criar o Repositório no GitHub

## ✅ Preparação Concluída!

O projeto Base-Delta foi preparado com sucesso e está pronto para ser enviado ao GitHub!

### 📁 Arquivos Criados:
- ✅ README.md (documentação completa)
- ✅ LICENSE (licença ISC)
- ✅ .gitignore (arquivos ignorados)
- ✅ config.example.json (exemplo de configuração)
- ✅ Repositório Git inicializado
- ✅ Primeiro commit realizado

---

## 🚀 Como Criar o Repositório no GitHub

### Opção 1: Via Interface Web (Recomendado)

1. **Acesse:** https://github.com/new

2. **Preencha os dados:**
   - **Repository name:** `Base-Delta`
   - **Description:** `🩸 Bot avançado para WhatsApp com Baileys 7.0 - Sistema de moderação, downloads, figurinhas e muito mais!`
   - **Visibility:** Escolha entre Public ou Private
   - ⚠️ **NÃO marque** "Initialize this repository with a README"
   - ⚠️ **NÃO adicione** .gitignore ou license (já temos)

3. **Clique em:** "Create repository"

4. **Execute os comandos abaixo no terminal:**

```bash
cd /root/Bots/Base-Delta
git remote add origin https://github.com/SEU-USUARIO/Base-Delta.git
git push -u origin main
```

⚠️ **Importante:** Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

---

### Opção 2: Usando GitHub CLI (Se preferir instalar)

1. **Instale o GitHub CLI:**
```bash
# Debian/Ubuntu
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

2. **Faça login:**
```bash
gh auth login
```

3. **Crie o repositório:**
```bash
cd /root/Bots/Base-Delta
gh repo create Base-Delta --public --source=. --remote=origin --push
```

---

## 🔐 Configuração Antes de Usar

Antes de compartilhar ou usar o bot, certifique-se de:

1. **Copiar o arquivo de exemplo:**
```bash
cd /root/Bots/Base-Delta
cp dono/config.example.json dono/config.json
```

2. **Editar suas configurações:**
```bash
nano dono/config.json
# ou use seu editor preferido
```

3. **Preencher com seus dados:**
   - `numerodono`: Seu número com DDI (ex: 5511999999999)
   - `NomeDono`: Seu nome
   - `BLACKOUT_KEY`: Sua chave da API

---

## 📦 Instalar Dependências

Após clonar o repositório em outro lugar:

```bash
cd Base-Delta
npm install
```

---

## ▶️ Executar o Bot

```bash
npm start
# ou
sh start.sh
```

---

## 📝 Atualizações Futuras

Para enviar atualizações ao GitHub:

```bash
cd /root/Bots/Base-Delta
git add .
git commit -m "Descrição da atualização"
git push
```

---

## 🎉 Pronto!

Seu bot Base-Delta está documentado e pronto para ser compartilhado no GitHub!

### Links Úteis:
- 📚 [Documentação do Baileys](https://github.com/WhiskeySockets/Baileys)
- 🔧 [Documentação do Node.js](https://nodejs.org/docs)
- 💬 [Suporte do WhatsApp](https://faq.whatsapp.com)

---

**Desenvolvido por ToshBlackout** 🩸
