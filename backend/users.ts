export class User {
    constructor(public email: string,
                public name: string,
                public password: string){}
    matches(another: User): boolean{
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}
export const users  = {
    "carlos@mail.com": new User('carlos@mail.com','Carlos','123'),
    "bruno@mail.com": new User('bruno@mail.com','Bruno','321'),
}