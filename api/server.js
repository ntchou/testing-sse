import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log('server started')
});