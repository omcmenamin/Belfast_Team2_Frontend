var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
require('dotenv').config();

const JobSpecService = require('../../../service/jobspecService');

const JobSpec = {
    jobRole : "Tester",
    specifications : "string"
}
describe('JobSpecService', function () {
    describe('getJobSpecById', function () {
      it('should return job specification from response', async () => {
        let id = 1
        var mock = new MockAdapter(axios);


        mock.onGet(process.env.URL+'/job-specification/'+ id).reply(200, JobSpec);

        var result = await JobSpecService.getJobspecById(id);

        expect(result).to.deep.equal(JobSpec)
      })

      it('should throw exception when 500 error returned from axios', async () => {
        let id = 1
        var mock = new MockAdapter(axios);

        mock.onGet(process.env.URL+'/job-specification/'+ id).reply(500);

        var error;

        try {
          await JobSpecService.getJobspecById(id);
        } catch (e) {
          var error = e.message
        }
        
        expect(error).to.equal('Could not get Job Specification')
      })

      it('should throw 400 exception when 400 error Employee does not exist', async () => {
        var id = 676767
        var mock = new MockAdapter(axios);
  
          const data = JobSpec;
  
          mock.onGet(process.env.URL+'/job-specification/'+ id).reply(400);
  
          let error;
  
          try {
             await JobSpecService.getJobspecById(id);;
          } catch (e) {
             error = e.message
          }
          
          expect(error).to.equal('Job does not exist')
      })

    })
})
