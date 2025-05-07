import { NextFunction, Router, Request, Response } from "express";
import { UserService } from "../common/services/UserService";

export const authRoute = Router();

authRoute.use( async ( req: Request, res: Response, next: NextFunction ) =>
{
    let authorization = req.get( "Authorization" )?.replace( "Basic ", "" );

    if ( authorization )
    {
        let successfulAuthentication: boolean = await UserService.authenticate( authorization, req, res );
        
        if ( successfulAuthentication )
        {
            next();
            return;
        }

        else
        {
            res.status( 401 )
               .json( { "error": "Authentication failed! Database hasn't returned any user with this credentials" } );
        }
    }
} );