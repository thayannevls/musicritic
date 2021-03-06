/* @flow */

import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';
import authRouter from './spotify/spotifyAuthController';
import usersApi from './users/userController';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/auth', authRouter);
app.use(usersApi);

app.use('/app', express.static('public'));

const server = http.createServer(app);
const { port } = config.host;

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
