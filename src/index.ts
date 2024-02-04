import app from './app';
import config from './config';
import http from 'http';
import sockets from './sockets';
import { Server as WebSocketServer } from 'socket.io';
import { AppDataSource } from './dbConnection';

const server = http.createServer(app);
AppDataSource.initialize()
    .then(()=>{
        const httpServer = server.listen(config.port);
        const io = new WebSocketServer(httpServer, {
            cors : {
                origin : "*",
                credentials : true
            }
        });

        sockets(io);

        console.log(`Server is running on port ${config.port}`);
    })
    .catch((error)=>{
        console.log(error);
    })   