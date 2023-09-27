import { CapabilityLead } from '../model/capabilityLead';
import { Application, Request, Response } from "express";
const capabilityService = require('../service/capabilityLeadService')

module.exports = function(app: Application){

    app.get('/view-capability-lead/:id', async (req: Request, res: Response) =>{
        let data:CapabilityLead;

        try {
            data = await capabilityService.getCapabilityLeadByCapabilityId(req.params.id)
            res.render('view-capability-lead', {capabilityLead: data})
        } catch (e) {
            res.status(404).render("404-error-page");
        }
    })

}