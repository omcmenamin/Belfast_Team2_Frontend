const { Login, Register } = require('../../../model/auth'); 
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
import { expect } from 'chai';

const AuthService = require('../../../service/authService');

describe('AuthService', () => {
    it('should login successfully', async () => {
        const loginData = { email: 'test12345@example.com', password: "password123" };
        var mock = new MockAdapter(axios);

        let id = 1
        mock.onPost(process.env.API_URL+'/api/login', loginData).reply(200,id);
    
        var result = await AuthService.login(loginData)
        expect(result).equal(id)

    });
    it('should throw error when login fails', async () => {
        const loginData = { email: "test@example.com", password: "password123" };
        var mock = new MockAdapter(axios);
    
        mock.onPost(process.env.API_URL+'/api/login', loginData).reply(500);
    
        try {
            await AuthService.login(loginData)
        } catch (e) {
            expect(e.message).to.equal('Unable to Login');
        }
    });
    
    it('should register successfully', async () => {
        const registerData = { email: 'test12345@example.com', password: "password123" };
        var mock = new MockAdapter(axios);

        let id = 1
        mock.onPost(process.env.API_URL+'/api/register', registerData).reply(200,id);
    
        var result = await AuthService.register(registerData)
        expect(result).equal(id)
    });
    
    it('should throw error when registration fails', async () => {
        const registerData = { email: "test@example.com", password: "password123", role: "Admin" };
        var mock = new MockAdapter(axios);

        mock.onPost(process.env.URL+'/api/register/', registerData).reply(500);
    
        try {
            await AuthService.register(registerData);
        } catch (e) {
            expect(e.message).to.equal('Registration failure, please try again and make sure to enter a valid email and password');
        }
    });
})