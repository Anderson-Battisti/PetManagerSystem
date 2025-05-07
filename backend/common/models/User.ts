class User
{
    name:     string;
    email:    string;
    password: string;

    public setName( name: string ): void
    {
        this.name = name;
    }

    public getName(): string
    {
        return this.name;
    }
}