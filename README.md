# EduPost (Mobile)

Expo (React Native) app for the FIAP Tech Challenge.

This repository also includes the backend API inside the folder `fiap_tech_challenge_api/`.

## Prerequisites

- Node.js + npm
- Docker + Docker Compose (recommended for the backend database)

## 1) Start the backend locally

# EduPost (Mobile)

Aplicativo mobile (Expo + React Native) usado no desafio FIAP Tech Challenge.

Este repositório contém o frontend mobile e espera um backend disponível em `fiap_tech_challenge_api/` para testes locais.

**Objetivo deste README:** explicar, em passos claros, como instalar, configurar e testar o app no seu computador ou em dispositivo físico.

**Requisitos (mínimos)**

- Node.js (recomendado 16+ ou 18+)
- npm ou yarn
- Expo CLI (opcional, você pode usar `npx expo`)
- iOS Simulator (Xcode) ou Android Emulator (Android Studio) para emulação, ou um dispositivo físico com Expo Go

## 1. Clonar o repositório

```bash
git clone https://github.com/pedrobritx/fiap_tech_challenge_mobile.git
cd fiap_tech_challenge_mobile
```

> Se o repositório já estiver local, apenas posicione-se na pasta do projeto.

## 2. Instalar dependências

Usando npm:

```bash
npm install
```

Ou usando yarn:

```bash
yarn install
```

## 3. Configurar variáveis de ambiente

Existe um arquivo exemplo `.env.example` na raiz. Crie um `.env` local (NÃO comite este arquivo):

```bash
cp .env.example .env
```

Edite o `.env` e ajuste `EXPO_PUBLIC_API_URL` para apontar ao backend:

- iOS Simulator: `http://localhost:3000`
- Android Emulator: `http://10.0.2.2:3000`
- Dispositivo físico: `http://<SEU_IP_LOCAL>:3000` (mesma rede Wi‑Fi)

Depois de alterar o `.env`, reinicie o servidor do Expo se estiver rodando.

## 4. Scripts úteis

Os scripts disponíveis em `package.json` são:

- `npm start` / `npx expo start` — iniciar Metro / painel do Expo
- `npm run ios` — abre o projeto no iOS Simulator (`expo start --ios`)
- `npm run android` — abre no Android Emulator (`expo start --android`)
- `npm run web` — abre no navegador (`expo start --web`)
- `npm run lint` — rodar lint do Expo

Exemplo para iniciar:

```bash
npm install
npx expo start
```

Use o QR Code no painel do Expo para abrir no Expo Go (dispositivo físico) ou escolha a opção de abrir no emulador.

## 5. Testar no dispositivo / emulador

- iOS Simulator: execute `npm run ios` (precisa ter Xcode instalado)
- Android Emulator: execute `npm run android` (precisa ter AVD configurado)
- Dispositivo físico: abra o app Expo Go e escaneie o QR code do `expo start`

Observação sobre o backend local:

- Se usar dispositivo físico, o backend deve estar acessível via IP da rede local (ex.: `192.168.0.10`).

## 6. EAS / builds na nuvem (opcional)

Se for gerar builds (APK/IPA) com EAS, será necessário possuir uma conta Expo e possivelmente credenciais de Apple/Google.

Comandos úteis:

```bash
npx eas login
npx eas build --platform android
npx eas build --platform ios
```

Para workflows de CI, gere um token em https://expo.dev/accounts/<sua-conta>/settings e exporte em `EXPO_TOKEN`.

## 7. Problemas comuns e soluções rápidas

- Erro ao commitar no VSCode: configure `git user.name` e `git user.email`:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

- Problema com sessão do Expo (autenticação):

```bash
npx expo whoami
npx expo logout
npx expo login
```

- Se o app não consegue acessar o backend:
  - Verifique `EXPO_PUBLIC_API_URL` no `.env`
  - Se estiver em dispositivo físico, use o IP da sua máquina (não `localhost`)

## 8. Contribuindo

- Faça um fork, crie uma branch e abra um pull request.
- Siga os padrões de lint com `npm run lint`.

---

Arquivo alterado: [README.md](README.md)

Se quiser, posso também preparar um pequeno checklist de testes manuais baseados no documento de requisitos para você executar passo a passo.
