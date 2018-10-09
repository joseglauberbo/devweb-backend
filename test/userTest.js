process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var User = require('../src/user/user.model');
var logger = require('mocha-logger');

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../src/app');
var should = chai.should();

chai.use(chaiHttp);

describe('User', function () {
    beforeEach(function (done) {
        User.remove({}, function (error) {
            done();
        });
    });


    describe('/GET Usuario', function () {
        it('Deve retornar todos os usuários cadastrados no sistema', function (done) {
            chai.request(app)
                .get('/user')
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    //adicionando um usuário no sistema com tudo desejado. o esperado é q se cadastre
    describe('/POST user', function () {
        it("Deve retornar o POST do user criado", function (done) {
            var user1 = {
                "username": "joseglauber",
                "email": "hahaha@gmail.com",
                "password": "hahahhehe"
            }
            chai.request(app)
                .post('/user')
                .send(user1)
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    //verificando se existe um usuário cadastrado no sistema
    describe('/GET user', function () {
        it('Deve retornar todos os meus usuários', function (done) {
            chai.request(app)
                .get('/user')
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    //adicionando usuario sem username, o esperado é que não cadastre.
    describe('/POST user', function () {
        it("Adicionando usuario sem username, o esperado é que não cadastre.", function (done) {
            var user1 = {
                "email": "hahaha@gmail.com",
                "password": "hahahhehe"
            }
            chai.request(app)
            .post('/user')
            .send(user1)
            .end(function (error, res) {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('erros');
                    res.body.erros.should.have.property('username');
                    res.body.errors.paginas.should.have.property('kind').eql('required');
                    done();
            });
        });

    });

    //adicionando usuario repetido, o esperado é que não cadastre.
    describe('/POST user', function () {
        it("Deve retornar o POST do user criado", function (done) {
            var user1 = {
                "username": "joseglauber",
                "email": "hahaha@gmail.com",
                "password": "hahahhehe"
            }
            chai.request(app)
                .post('/user')
                .send(user1)
                .end(function (error, res) {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    //verificando se existe um usuário cadastrado no sistema
    describe('/GET user', function () {
        it('Deve retornar todos os meus usuários', function (done) {
            chai.request(app)
                .get('/user')
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('/GET/:id user', function () {
        it('Deve retornar um usuário pelo id dado', function (done) {
            var user2 = {
                "username": "samara",
                "email": "samara@gmail.com",
                "password": "ssss"
            }
            chai.request(app)
                .get('/user/' + user2.id)
                .send(user2)
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('username');
                    res.body.should.have.property('email');
                    res.body.should.have.property('password');
                    done();
                });
        });
    });

    describe('/PUT/:id user', function () {
        it('Deve atualizar um usuário de acordo com um id', function (done) {
            var user1 = {
                "username": "joseglauber",
                "email": "hahaha@gmail.com",
                "password": "hahahhehe"
            }
            user1.save(function (error, user1) {
                chai.request(server)
                    .put('/user/' + user1.id)
                    .send({
                        username: "glauberbraz",
                        email: "hahaha@gmail.com",
                        password: "hahahhehe"
                    })
                    .end(function (error, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Usuário Atualizado com Sucesso');
                        done();
                    });
            });
        });
    });

    describe('/DELETE/:id user', function () {
        it('Deve excluir um usuário de acordo com o id', function (done) {
            var user3 = {
                "username": "matheus",
                "email": "hehehe@gmail.com",
                "password": "aaaaaaaaaa"
            }
            user3.save(function (error, user3) {
                chai.request(server)
                    .delete('/user/' + user3.id)
                    .end(function (error, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Usuário excluído com Sucesso!');
                        done();
                    });
            });
        });
    });
});