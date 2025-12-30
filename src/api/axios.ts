import axios from "axios";

const DEFAULT_API_URL = "https://tech-challenge-api-dzjy.onrender.com";

// Expo reads env vars prefixed with EXPO_PUBLIC_ at bundle time.
// Configure in a local `.env` file (not committed) e.g.:
// EXPO_PUBLIC_API_URL=http://localhost:3000
const API_URL =
	(process.env.EXPO_PUBLIC_API_URL || "").trim() || DEFAULT_API_URL;

const api = axios.create({
	baseURL: API_URL, // Define a URL base
	headers: {
		"Content-Type": "application/json", // Define o tipo de conteúdo padrão
	},
	timeout: 5000, // Define um tempo limite de 5 segundos para as requisições
});

export default api;
