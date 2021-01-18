import { Application, Response } from "express";
import ReactDOMServer from "react-dom/server"
import { App } from "@album/webclient";
import React from 'react';
import fs from 'fs';

export const serveHTML = (app: Application) => app.get("/", (req, res: Response) => {
    const appComp = ReactDOMServer.renderToString(<App input={"Hello Web Client"} />);

    fs.readFile('./index.html', 'utf8', (err, html) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
    
        return res.send(
            html.replace('<div id="root"></div>', `<div id="root">${appComp}</div>`)
        );
      });
});
