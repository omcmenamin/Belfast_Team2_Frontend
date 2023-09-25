import { Application } from "express";
import { Request, Response } from "express";
import { Job } from "../model/job";

const jobService = require('../service/jobService')

module.exports = function(app: Application){

    app.get('/job-roles', async (req: Request, res: Response) => {
        let data: Job;

        try {
            data = await jobService.getJobRoles()
        } catch (e) {
            console.error(e)
        }
        res.render('list-job-roles', {JobRoles: data})
    }) 
}