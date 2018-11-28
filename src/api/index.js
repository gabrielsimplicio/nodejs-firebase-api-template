import * as functions from 'firebase-functions';

import express from 'express';
import cors from 'cors';

import { personRoutes } from './routes';
// import auth from './utils/auth';

const app = express();

var corsOptions = {
    origin: [
        'https://<MY-APP-ID>.firebaseapp.com',
        'http://localhost:3000'
    ]
}

app.use(cors(corsOptions));

// app.use(auth);

app.use('/person', personRoutes);

const api = functions.https.onRequest(app);

export default api;