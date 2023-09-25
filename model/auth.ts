export class Login{
    email: string
    password: string
}

export class Register extends Login {
    role: string
}

export class ActiveSession{
    token: string
    email: string
    password: string
}