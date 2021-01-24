import { Application } from 'express';

// use this api from proxy server
export const healthCheck = (expressApp: Application): void => {
    expressApp.get('/health-check', (req, res) => {
        res.send('doing well');
    });
};
