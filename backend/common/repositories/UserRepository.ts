import { fetchData } from "../../database/database";
import { USERS_COLUMNS, USERS_TABLE } from "../../database/constants/users";

export class UserRepository
{
    public static async getUserIfActive( email: string, password: string ): Promise< User | null >
    {
        let sql = `select * from ${ USERS_TABLE }
                   where         ${ USERS_COLUMNS.EMAIL }    = $1 
                   and           ${ USERS_COLUMNS.PASSWORD } = crypt( $2, password ) 
                   and           ${ USERS_COLUMNS.ACTIVE }   = true;`;

        const result = await fetchData( sql, [ email, password ] );

        return result.rows.length != 0 ? result.rows[ 0 ] as User : 
                                         null;
    }
}