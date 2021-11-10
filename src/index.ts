import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/routes';

const app = express();
const db = process.env.MONGODB_URI;

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

export default app;
