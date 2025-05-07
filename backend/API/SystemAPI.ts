import express, { Express } from "express";
import cors from "cors";
import { authRoute } from "../middlewares/authMiddleware";

let server: Express = express();

const serverPort: number = 9000;

server.use( cors() );
server.use( express.json() );
server.use( authRoute );

server.listen( serverPort, () => 
{
    console.log( "Server started on port " + serverPort );
} );