const { validate } = require('../../../validator/Validator');
const { Login, Register } = require('../../../model/auth'); 
var chai = require('chai');  
const expect = chai.expect;

describe('validate', () => {
    it('isValidLogin_EmailTooLong', () => {
        let login = {
            email: "ssssssssssssssssssandjbfsdhjbfdhsjbfhjsdbfhjdsbfjhbsdhfjbsdhjfbsdhjfbdsjhfbsdjhbfdshjfbjhsdbf@example.com",
            password: "password123"
        }

        const result = validate(login);
        expect(result).to.equal("Email greater than 64 characters");
    });

    it('isValidLogin_EmailMissingAtSymbol', () => {
        let login = {
            email: "noAtSymbol.com",
            password: "password123"
                }
        const result = validate(login);
        expect(result).to.equal("Email must contain an '@' symbol");
    });

    it('isValidLogin_PasswordTooShort', () => {
        let login = {
            email: "test@example.com",
            password: "123"
                }
        const result = validate(login);
        expect(result).to.equal("Password length not between 8 and 64 characters");
    });

    it('isValidLogin_ValidLogin', () => {
        let login = {
            email: "sucess@example.com",
            password: "password123"
                }
        const result = validate(login);
        expect(result).to.equal(null);
    });

    it('isValidRegister_EmailTooLong', () => {
        let register = {
            email: "ssssssssssssssssssandjbfsdhjbfdhsjbfhjsdbfhjdsbfjhbsdhfjbsdhjfbsdhjfbdsjhfbsdjhbfdshjfbjhsdbf@example.com",
            password: "password123"
        }
        const result = validate(register);
        expect(result).to.equal("Email greater than 64 characters");
    });

    it('isValidRegister_EmailMissingAtSymbol', () => {
        let register = {
            email: "noAtSymbol.com",
            password: "password123"
                }
        const result = validate(register);
        expect(result).to.equal("Email must contain an '@' symbol");
    });

    it('isValidRegister_PasswordTooShort', () => {
        let register = {
            email: "test@example.com",
            password: "123"
                }        
        const result = validate(register);
        expect(result).to.equal("Password length not between 8 and 64 characters");
    });

    it('isValidRegister_ValidRegister', () => {
        let register = {
            email: "sucess@example.com",
            password: "password123"
                }        
        const result = validate(register);
        expect(result).to.equal(null);
    });
});
