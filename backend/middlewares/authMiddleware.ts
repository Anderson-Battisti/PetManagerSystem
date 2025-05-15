import { NextFunction, Router, Request, Response } from "express";
import { UserService } from "../common/services/UserService";

export const authRoute = Router();

authRoute.use( async ( req: Request, res: Response, next: NextFunction ) =>
{
    let authorization = req.get( "Authorization" )?.replace( "Basic ", "" );

    if ( authorization )
    {
        if ( await UserService.authenticate( authorization, req, res ) )
        {
            next();
            return;
        }

        else
        {
            res.status( 401 )
               .json( { "error": "Authentication failed! Invalid credentials or inactive user" } );
        }
    }

    else
    {
        res.status( 401 )
           .json( { "error": "Authorization header is missing or malformed." } );
    }
} );

authRoute.get( "/checkLogin", ( req: Request, res: Response ) =>
{
    res.status( 200 )
              .json( { success: true, message: "User and password matched. Login successful." } );
    
    return;
} );