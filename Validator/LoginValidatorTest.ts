import { Login } from "../model/auth";

module.exports.validateLogin = function (login: Login): string {
    if (login.email.length > 64) {
        return "Email greater than 64 characters";
    }

    if (!login.email.includes("@")) {
        return "Email must contain an '@' symbol";
    }

    if (login.password.length < 8 || login.password.length > 64) {
        return "Password length not between 8 and 64 characters";
    }

    return null;
}