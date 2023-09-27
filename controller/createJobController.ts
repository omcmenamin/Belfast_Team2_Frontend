import { createIncrementalCompilerHost } from 'typescript';
import { createJob } from '../model/createJob';
import { Application, Request, Response } from "express";
const createJobService = require('../service/createJobService')

module.exports = function(app: Application){

    app.post('/job-roles', async (req: Request, res: Response) =>{
        let data:createJob;

        try {
            data = await createJobService.createJob()
            res.render('create-job-roles', {createJob: data})
        } catch (e) {
            res.status(404).render("404-error-page");
        }
    })

}