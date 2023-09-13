import { JobSpec } from '../model/jobSpec';
import { Application, Request, Response } from "express";
const jobService = require('../service/jobspecService')

module.exports = function(app: Application){

    app.get('/job-spec/:id', async (req: Request, res: Response) =>{
        let data:JobSpec;

        try {
            data = await jobService.getJobspecById(req.params.id)
        } catch (e) {
            console.error(e);
            
        }

        res.render('view-job-spec', {jobSpec: data})
    })

}