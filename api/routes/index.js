import express from 'express';
const app = express();

app.get('/', (_, res) => {
  const interval = setInterval(() => {
    res.set('Content-Type', 'text/event-stream');
    res.send(`event: ping\ndata: {"time": ${~~(Date.now() / 1e3)}}\n\n`);

    clearInterval(interval);
  }, 3000);

});

export default app;