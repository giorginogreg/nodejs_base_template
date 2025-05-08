import { createApp } from './createApp';

const app = createApp();
const port = process.env.PORT || 3000;
const API_PREFIX = process.env.API_PREFIX || '/api/v1'

// Avvio del server
app.listen(port, () => {
	console.log(`🚀 Server avviato con successo sulla porta ${port}`);
	console.log(`📝 Endpoint principale: http://localhost:${port}${API_PREFIX}/users`);
});

export default app;
