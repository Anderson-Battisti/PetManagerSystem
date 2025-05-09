class User
{
    id:       number;
    name:     string;
    email:    string;
    password: string;
    active:   boolean;

    public setName( name: string ): void
    {
        this.name = name;
    }

    public getName(): string
    {
        return this.name;
    }
}