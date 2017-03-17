var chai = require('chai');
var chaiHttp = require('chai-http');
var server = 'http://localhost:3000/api'
var should = chai.should();
chai.use(chaiHttp);

describe('Get method', function () {
    it('should get all data user from database', function (done) {
        chai.request(server)
            .get('/users')
            .set("token", "isi token disini")
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('email');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('gender');
                done();
            });
    });
});

describe('post method', function () {
    it('Create new user & get the token', function (done) {
        chai.request(server)
            .post('/users')
            .set("token", "isi token disini")
            .send({
                fb_id: "1234",
                email: "adam@gmail.com",
                name: "adam",
                profilePic: "123",
                gender: "pria"
            })
            .end(function (err, res) {
                // console.log(res.body);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('token');
                done();
            });
    });
});

// describe('Put method', function () {
//     // Search by name
//     it('Should UPDATE some data from server', function (done) {
//         chai.request(server)
//             .put('/users')
//             .set("token", "isi token disini")
//             .send({
//                 fb_id: "1234",
//                 email: "firman@gmail.com",
//                 name: "firman",
//                 gender: "pria"
//             })
//             .end(function (err, res) {
//                 res.should.have.status(200);
//                 res.should.be.json;
//                 res.body.should.be.a('array');
//                 res.body[0].should.have.property('email');
//                 res.body[0].should.have.property('name');
//                 res.body[0].should.have.property('gender');
//                 done();
//             });
//     });
// });
//
// describe('Delete method', function () {
//     it('Should DELETE some data from server', function (done) {
//         chai.request(server)
//             .delete('/users')
//             .set("token", "isi token disini")
//             .send({
//                 _id: ""
//             })
//             .end(function (err, res) {
//                 res.should.have.status(200);
//                 res.body.should.have.property('message')
//                 done();
//             });
//     });
// });
