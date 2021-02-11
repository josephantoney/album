import React from 'react';
import { familyMember } from '@album/domainlayer';

export const Footer = (): JSX.Element => {
    const something = familyMember.getAllFamilyMembers("123");
    return (<div>
        <div id="footer-copyright">Copyright Album</div>
    </div>
)};
