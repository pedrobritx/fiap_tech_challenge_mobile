# EduPost (Mobile)

Expo (React Native) app for the FIAP Tech Challenge.

This repository also includes the backend API inside the folder `fiap_tech_challenge_api/`.

## Prerequisites

- Node.js + npm
- Docker + Docker Compose (recommended for the backend database)

## 1) Start the backend locally

From the backend folder:

```bash
cd fiap_tech_challenge_api
cp .env.example .env
docker compose up -d
```

Swagger UI:

```text
http://localhost:3000/api
```

## 2) Configure the mobile app to point to the backend

The mobile app reads the API base URL from `EXPO_PUBLIC_API_URL`.

Create a local env file (do not commit it):

```bash
cp .env.example .env
```

Set `EXPO_PUBLIC_API_URL` depending on how you run the app:

- iOS Simulator: `http://localhost:3000`
- Android Emulator: `http://10.0.2.2:3000`
- Physical device: `http://<YOUR_LAN_IP>:3000` (same Wi‑Fi)

After changing env vars, restart Expo.

## 3) Run the mobile app

```bash
npm install
npx expo start
```

## Notes

- If you run on the web (`expo start --web`), the browser enforces CORS. Prefer iOS/Android simulator/device for local backend testing.
