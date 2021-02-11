/** @jsx jsx */

import React from 'react';
import { Footer } from './footer/footer';
import { jsx } from '@emotion/react'

export const App = ({ input, something }: { input?: string, something?: string }): JSX.Element => {
    return (
        <React.Fragment>
            <h1 css={{ color: 'green' }}>{`${input || ''}`}</h1>
            <Footer />
        </React.Fragment>
    );
};
