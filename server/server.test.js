const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// Server
    //GET /

    //GET /USERS
describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response',(done) =>{
            request(app)
             .get('/')
             .expect(404)
             .expect((res) => {
                 expect(res.body).toInclude({
                     error:'Page not found.'
                 });
             })
             .end(done);
        });
    });
    describe('GET /USERS', () => {
        it('should return a user object',(done) => {
            request(app)
             .get('/users')
             .expect(200)
             .expect((res) => {
                 expect(res.body).toInclude({
                     name:'Mike',
                     age:27
                 })
             })
             .end(done)
        });
    });
});





