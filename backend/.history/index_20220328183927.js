const express = require("express")

const server = express();

server.listen(3003, () => 
    console.log('Servidor iniciado na porta 3000')
);
