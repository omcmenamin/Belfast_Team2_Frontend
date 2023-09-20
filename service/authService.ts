import {Login, ActiveSession, User } from "../model/auth";
const axios =require('axios');
require('dotenv').config();

module.exports.login = async function (login: Login): Promise<ActiveSession>{
    try{
        const response= await axios.post(process.env.URL+'/login/', login)
        
        return response.data
    }catch (e) {
        console.error(e);

        throw new Error ('Unable to Login')
       
    }
}

module.exports.register = async function (user: User): Promise<void>{
    try{
        const response= await axios.post(process.env.URL+'/register/', user)
        
        return response.data
    }catch (e) {
        throw new Error ('Registration failure, please try again and make sure to enter a valid email and password')
    }
}