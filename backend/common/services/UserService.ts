import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export class UserService
{
    static async authenticate( authorization: string, req: Request, res: Response ): Promise<boolean>
    {
        try
        {
            let decoded = Buffer.from( authorization, "base64" ).toString( "utf8" );
    
            let splittedLogin: string[] = decoded.split( ":" );
    
            let email    = splittedLogin[ 0 ];
            let password = splittedLogin[ 1 ];

            if ( ! email || ! password )
            {
                throw new Error( "Invalid authorization format." )
            }
    
            let user: User | null = await UserRepository.getUserIfActive( email, password );
    
            return user != null;
        }

        catch ( error )
        {
            console.error( "Authentication failed: " + error )

            return false;
        }
    }
}