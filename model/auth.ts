export class Login{
    username: string
    password: string
}

export class User{
    username: string
    password: string
    role: string
}

export class ActiveSession{
    token: string
    username: string
    password: string
}