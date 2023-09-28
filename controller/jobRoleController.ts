import { JobRole } from '../model/jobRole';
import { Application, Request, Response } from "express";
const jobRoleService = require('../service/jobRoleService')


module.exports = function(app: Application){

    app.get('/job-roles/', async (req: Request, res: Response) =>{
        let data: JobRole[] = []

        try {
            data = await jobRoleService.getJobRoles()
            
        } catch (e) {
            res.status(404).render("404-error-page");
        }
        res.render('job-roles', {jobRoles: data})
    })

}