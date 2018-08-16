/* @flow */

import config from '../config';

export const generateRandomState = (length: number) => {
    let state = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        + 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i += 1) {
        state += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return state;
};

export const getSpotifyAuthUrl =
    (urlPath: string) => `${config.spotify.authBaseUri}${urlPath}`;

export const getHostUrl = (urlPath: string) => {
    if (config.host.production) return `${config.host.baseUri}${urlPath}`;
    return `${config.host.baseUri}:${config.host.port}${urlPath}`;
};

export const getClientUrl = (urlPath: string) =>
    `${config.client.baseUrl}${urlPath}`;

const getApplicationToken = () => {
    let tokenToEncrypt = '';
    if (config.spotify.clientId && config.spotify.clientSecret) {
        tokenToEncrypt =
            `${config.spotify.clientId}:${config.spotify.clientSecret}`;
    }
    return `Basic ${Buffer.from(tokenToEncrypt).toString('base64')}`;
};

export const getTokenReqOptions = (form: any) => ({
    url: getSpotifyAuthUrl('/api/token'),
    headers: {
        Authorization: getApplicationToken(),
    },
    form,
    json: true,
});
