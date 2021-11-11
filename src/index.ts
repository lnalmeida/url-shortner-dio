import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/routes';
import  MongoConnection  from './database/MongoConnection'

const app = express();
const database = new MongoConnection();

database.connect();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

export default app;
