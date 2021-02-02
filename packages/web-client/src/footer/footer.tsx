import React from 'react';

const styles = require('./footer.less');

export const Footer = (): JSX.Element => (
    <div className={styles.footerContainer}>
        <div id="footer-copyright">Copyright Album</div>
    </div>
);
