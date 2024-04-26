const express = require('express');
const app = express();

app.use(express.static('web-3dmodel-threejs'));

app.listen(3000);