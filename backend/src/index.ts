import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware per il parsing del JSON
app.use(express.json());

// Route di base
app.get('/', (req: Request, res: Response) => {
  res.json({ messaggio: 'Server Express funzionante con successo!' });
});

// Route di esempio
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ 
    stato: 'successo',
    dati: {
      messaggio: 'API funzionante correttamente',
      timestamp: new Date().toISOString()
    }
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`🚀 Server avviato con successo sulla porta ${port}`);
  console.log(`📝 Endpoint principale: http://localhost:${port}`);
  console.log(`🔍 Endpoint di test: http://localhost:${port}/api/test`);
}); 