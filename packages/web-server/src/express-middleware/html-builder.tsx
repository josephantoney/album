import { Application, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import { App } from '@album/webclient';
import React from 'react';
import fs from 'fs';
import path from 'path';

export const serveHTML = (app: Application): void => {
    app.get('/server.html', (req, res: Response) => {
        const appComp = ReactDOMServer.renderToString(
            <App input={'Hello World'} />
        );

        fs.readFile(
            path.resolve('..', 'public', 'index.html'),
            'utf8',
            (err, html) => {
                if (err) {
                    console.error('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                }

                return res.send(
                    html.replace(
                        '<div id="root"></div>',
                        `<div id="root">${appComp}</div>`
                    )
                );
            }
        );
    });
};
