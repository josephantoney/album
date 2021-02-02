import React from 'react';
import { Footer } from './footer/footer';

export const App = ({ input }: { input?: string }): JSX.Element => {
    return (
        <>
            <h1>{`${input || ''}`}</h1>
            <Footer />
        </>
    );
};
