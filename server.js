import 'dotenv';

import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT; 
const HOST = process.env.HOST;

app.use(cors());
app.use(express.json());

app.listen(PORT, HOST, () => {
    console.log('Start Server')
})