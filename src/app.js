const http = require("http");
const express = require('express');
const spoilersRoute = require('./routes/spoiler');
const sequelize = require('./database/database');

const app = express();

app.use('/api',spoilersRoute);

app.use((Request, Response,next) =>{
    Response.status(404).send();
});

app.use((Error,request, response, next) =>{
Response.status(500).json({error});
});

sequelize.sync({force: true}).then(() => {
    const port = process.env.PORT || 3000;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});