const config = {};

config.spotify = {
    scope: 'user-read-email user-read-recently-played user-top-read',
    authBaseUri: 'https://accounts.spotify.com',
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
};

config.host = {
    baseUri: process.env.SERVER_BASE_URI || 'http://localhost',
    port: process.env.SERVER_PORT || 5000,
    production: process.env.NODE_ENV === 'production',
};

config.client = {
    baseUri: process.env.CLIENT_BASE_URI || 'http://localhost:3000',
    errorPath: '/error',
    successPath: '/auth',
};

config.firebase = {
    serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,
    databaseUrl: process.env.FIREBASE_DATABASE_URL,
};

export default config;
