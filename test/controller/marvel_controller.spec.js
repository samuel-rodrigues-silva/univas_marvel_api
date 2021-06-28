const controller = require('../../src/controller/marvel_controller');
const sinon = require('sinon');
const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const marvelId = '1011334';


describe('Marvel Controller', () => {
    it('Call getCredentials should return a object with timestamp and hash generated by md5', () => {
        const result = controller.getCredentials();
        expect(result).to.be.a('array')
    })

    it('Call fetchBy should return Json object data', () => {
        const option = 'comics';
        const res = {};
        res.status = () => res;
        res.send = sinon.stub();
        const result = controller.fetchBy(option, marvelId, res)
        res.send.returns(Promise.resolve());
        expect(result).to.eventually.equal(JSON);

    });

    it('Call listAll should return a json object populated by all marvel Characters', () => {
        const params = { id: marvelId }
        const req = {
            params: params.id
        }
        const res = {};
        res.status = () => res;
        res.send = sinon.spy();
        const result = controller.listAll(req, res)
        expect(Promise.resolve(result)).to.eventually.equal(JSON)
    });

    it('Call fetchCharacter should return a json object populated by defined marvel character', () => {
        const params = { id: marvelId }
        const req = {
            params: params.id
        }
        const res = {}
        res.status = () => res;
        res.send = sinon.stub();
        const result = controller.fetchCharacter(req, res)
        res.send.returns(Promise.resolve());
        expect(result).to.eventually.equal(JSON);

    });

    it('Call fetchComics should return a json object populated by marvel comics', () => {
        const params = { id: marvelId }
        const req = {
            params: params.id
        }
        const res = {};
        res.status = () => res;
        res.send = sinon.spy();
        const result = controller.fetchComics(req, res)
        expect(Promise.resolve(result)).to.eventually.equal(JSON)
    });

    it('Call fetchEvents should return a json object populated by marvel events', () => {
        const params = { id: marvelId }
        const req = {
            params: params.id
        }
        const res = {};
        res.status = () => res;
        res.send = sinon.spy();
        const result = controller.fetchEvents(req, res)
        expect(Promise.resolve(result)).to.eventually.equal(JSON)
    });

    it('Call fetchSeries should return a json object populated by marvel series', () => {
        const params = { id: marvelId }
        const req = {
            params: params.id
        }
        const res = {};
        res.status = () => res;
        res.send = sinon.spy();
        const result = controller.fetchSeries(req, res)
        expect(Promise.resolve(result)).to.eventually.equal(JSON)
    });

    it('Call fetchStories should return a json object populated by marvel stories', () => {
        const params = { id: marvelId }
        const req = {
            params: params.id
        }
        const res = {};
        res.status = () => res;
        res.send = sinon.spy();
        const result = controller.fetchStories(req, res)
        expect(Promise.resolve(result)).to.eventually.equal(JSON)
    });

});