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

//iniciando o sistema com nenhum usuário cadastrado
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

//adicionando um usuário no sistema com tudo desejado. o esperado é q se cadastre
describe('/POST user', function(){
    it("Deve retornar o POST do user criado", function(done){
       var user1 = {
            "username" : "joseglauber",
            "email" : "hahaha@gmail.com",
            "password": "hahahhehe"
        }
        chai.request(app)
        .post('/user')
        .send(user1)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

//verificando se existe um usuário cadastrado no sistema
describe('/GET user', function() {
    it('Deve retornar todos os meus usuários', function(done) {
        chai.request(app)
        .get('/user')
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
        done();
        });
    });
});

//adicionando usuario sem username, o esperado é que não cadastre.
describe('/POST user', function(){
    it("Deve retornar o POST do user criado", function(done){
       var user1 = {
            "email" : "hahaha@gmail.com",
            "password": "hahahhehe"
        }
        chai.request(app)
        .post('/user')
        .send(user1)
        .end(function(error, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('erros');
            res.body.erros.should.have.property('username');
            done();
        });
    });
});

//adicionando usuario repetido, o esperado é que não cadastre.
describe('/POST user', function(){
    it("Deve retornar o POST do user criado", function(done){
       var user1 = {
            "username" : "joseglauber",
            "email" : "hahaha@gmail.com",
            "password": "hahahhehe"
        }
        chai.request(app)
        .post('/user')
        .send(user1)
        .end(function(error, res) {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
        });
    });
});

//verificando se existe um usuário cadastrado no sistema
describe('/GET user', function() {
    it('Deve retornar todos os meus usuários', function(done) {
        chai.request(app)
        .get('/user')
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
        done();
        });
    });
});

describe('/GET/:id user', function() {
    it('Deve retornar um usuário pelo id dado', function(done) {
        var user2 = {
            "username" : "samara",
            "email" : "samara@gmail.com",
            "password": "ssss"
        }
        chai.request(app)
        .get('/user/' + user2.id)
        .send(user2)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
               res.body.should.have.property('email');
               res.body.should.have.property('password');
        done();
        });
    });
});
