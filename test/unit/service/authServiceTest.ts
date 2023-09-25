const { Login, Register } = require('../../../model/auth'); 
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
import { expect } from 'chai';

const AuthService = require('../../../service/authService');

describe('AuthService', () => {
    // it('should login successfully', async () => {
    //     const loginData = { email: "test@example.com", password: "password123" };
    //     var mock = new MockAdapter(axios);

    //     mock.onPost(process.env.API_URL+'/login/', loginData).reply(200);
    
    //     var result = await AuthService.login(loginData)
    //     expect(result).equal()
    
    // });
    it('should throw error when login fails', async () => {
        const loginData = { email: "test@example.com", password: "password123" };
        var mock = new MockAdapter(axios);
    
        mock.onPost(process.env.URL+'/login/', loginData).reply(500);
    
        try {
            await AuthService.login(loginData)
        } catch (e) {
            expect(e.message).to.equal('Unable to Login');
        }
    });
    
    // it('should register successfully', async () => {
    //     const registerData = { email: "test@example.com", password: "password123", role: "Admin" };
    //     var mock = new MockAdapter(axios);

    //     mock.onPost(process.env.URL+'/register/', registerData).reply(200);
    
    //     try {
    //         await Register(registerData);
    //     } catch (e) {
    //         throw new Error('Expected register not to throw an error');
    //     }
    // });
    
    it('should throw error when registration fails', async () => {
        const registerData = { email: "test@example.com", password: "password123", role: "Admin" };
        var mock = new MockAdapter(axios);

        mock.onPost(process.env.URL+'/register/', registerData).reply(500);
    
        try {
            await AuthService.register(registerData);
        } catch (e) {
            expect(e.message).to.equal('Registration failure, please try again and make sure to enter a valid email and password');
        }
    });
})