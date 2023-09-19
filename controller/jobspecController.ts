import { JobSpec } from '../model/jobSpec';
import { Application, Request, Response } from "express";
const jobService = require('../service/jobspecService')

module.exports = function(app: Application){

    app.get('/job-specification/:id', async (req: Request, res: Response) =>{
        let data:JobSpec;

        try {
            data = await jobService.getJobspecById(req.params.id)
            res.render('view-job-spec', {jobSpec: data})
        } catch (e) {
            res.status(404).render("404-error-page");
        }
    })

}