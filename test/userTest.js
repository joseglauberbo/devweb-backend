process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var User = require('../src/user/user.model');

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);
describe('User', function(){
    beforeEach(function(done) {
        User.remove({}, function(error) {
            done();
        });
    });
});

describe('/GET user', function() {
    it('Deve retornar todos os meus usuários', function(done) {
        chai.request(app)
        .get('/user')
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
        done();
        });
    });
});
