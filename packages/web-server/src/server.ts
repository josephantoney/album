import express from 'express';
import { healthCheck } from './express-middleware/health-check';
// import { familyMember } from '@album/domainlayer';
import { serveHTML } from './express-middleware/html-builder';

const app = express();

healthCheck(app);

// app.get("/", (req, res) => {
//     res.send(familyMember.getAllFamilyMembers("123"));
// })

serveHTML(app);

app.listen(4000, () => {
    console.log("digi frame web app listening on port 4000")
});