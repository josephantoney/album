import React from 'react';

export const App = ({ input }: { input?: string }): JSX.Element => {
    return (
        <>
            <h1>{`${input || ''}`}</h1>
        </>
    );
};
