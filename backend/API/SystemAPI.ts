import express, { Express } from "express";
import cors from "cors";
import { loginRoute } from "./LoginRoute";

let server: Express = express();

const serverPort: number = 9000;

server.use( cors() );
server.use( express.json() );
server.use( loginRoute );

server.listen( serverPort, () => 
{
    console.log( "Server started on port " + serverPort );
} );