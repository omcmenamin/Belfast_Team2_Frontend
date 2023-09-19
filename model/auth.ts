export class Login{
    email: string
    password: string
}

export class User{
    email: string
    password: string
    role: string
}

export class ActiveSession{
    token: string
    email: string
    password: string
}