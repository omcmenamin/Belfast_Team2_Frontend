import { createIncrementalCompilerHost } from 'typescript';
import { createJob } from '../model/createJob';
import { Application, Request, Response } from "express";
const createJobService = require('../service/createJobService')

module.exports = function(app: Application){

    app.get('/create-job-roles', async (req: Request, res: Response) =>{
        res.render('create-job-roles')
    })

    app.post('/create-job-roles', async (req: Request, res: Response) =>{
        let data:createJob = req.body
        let id: Number

        try {
            id = await createJobService.createJob(data)

            res.redirect('/')
        } catch (e) {
            console.error(e);

            res.locals.errormessage = e.message
            res.render('create-job-roles', req.body)
        }
        
    })

}