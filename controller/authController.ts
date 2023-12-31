import { Request, Response, Application } from "express-serve-static-core";
import {Login, Register} from "../model/auth";

const authService = require('../service/authService')

module.exports = function (app: Application){
    
    app.get('/login', async (req: Request, res: Response)=>{
        res.render('login')
    })
    

    app.post('/login', async (req: Request, res: Response)=> {
        let data: Login = req.body

        try{
            const jwtToken = await authService.login(data);

            res.cookie('jwtToken', jwtToken, { maxAge: 28800, httpOnly: true }); 

            res.redirect('/');

        }catch (e) {

            res.locals.errormessage = e.message

            res.render('login', req.body)
        }
    })

    app.get('/register', async (req: Request, res: Response)=>{
        res.render('register')
    })

    app.post('/register', async (req: Request, res: Response)=> {
        let data: Register = req.body

        try{
            await authService.register(data)

            res.redirect('/login');
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message

            res.render('register', req.body)
        }
    })
    
}

