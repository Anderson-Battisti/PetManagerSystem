import { Request, Response } from "express";

export class UserService
{
    static async authenticate( authorization: string, req: Request, res: Response ): Promise<boolean>
    {
        let decoded = Buffer.from( authorization, "base64" ).toString( "utf8" );

        let splittedLogin: string[] = decoded.split( ":" );

        let username = splittedLogin[ 0 ];
        let password = splittedLogin[ 1 ];

        // to do the call for service below;
        return true;
    }
}