import { Register } from "../model/auth";

module.exports.validateRegister = function (register: Register): string {

        if (register.email.length > 64) {
            return "Email greater than 64 characters";
        }

        if (!register.email.includes("@")) {
            return "Email must contain an '@' symbol";
        }

        if (register.password.length < 8 || register.password.length > 64) {
            return "Password length not between 8 and 64 characters";
        }

        return null;
    }

