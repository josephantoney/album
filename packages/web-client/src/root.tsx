import React from 'react';
import ReactDom from 'react-dom';
import { App } from "./app";

const rootElement = document.getElementById('root');

if (rootElement) {
    rootElement.childNodes.length > 0 ?
        ReactDom.hydrate(<App input={"Hello World"}/>, rootElement) :
        ReactDom.render(<App input={"Hello World"} />, rootElement);
}