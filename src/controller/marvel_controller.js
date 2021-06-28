const axios = require('axios');
const md5 = require('md5');
const MarvelApiHost = 'http://gateway.marvel.com/v1/public/characters';
const apikey = '6c4ed2deff05cc8ecbcf371162944db7';

function getCredentials() {
    let ts = Number(Date.now());
    let hash = md5(ts + '95f18fa6ccae5a5dbf5f5d6749c83288b691b3ac' + apikey);
    return [ts, hash];
}

function fetchBy(option, charId = 1011334, res) {
    let credentials = getCredentials();
    return axios.get(`${MarvelApiHost}/${charId}/${option}?ts=${credentials[0]}&apikey=${apikey}&hash=${credentials[1]}`).then(response => {
        res.status(200).send(response.data);
    }).catch(err => { console.log(err) });
}

const listAll = (req, res) => {
    let credentials = getCredentials();
    axios.get(`${MarvelApiHost}?ts=${credentials[0]}&apikey=${apikey}&hash=${credentials[1]}`).then(response => {
        res.status(200).send(response.data);
    }).catch(err => { console.log(err) });
};

const fetchCharacter = (req, res) => {
    const charId = req.params.id;
    let credentials = getCredentials();
    return axios.get(`${MarvelApiHost}/${charId}?ts=${credentials[0]}&apikey=${apikey}&hash=${credentials[1]}`).then(response => {
        res.status(200).send(response.data);
    }).catch(err => { console.log(err) });
};

const fetchComics = (req, res) => {
    const charId = req.params.id;
    return fetchBy('comics', charId, res);

};

const fetchEvents = (req, res) => {
    const charId = req.params.id;
    fetchBy('events', charId, res);

};

const fetchSeries = (req, res) => {
    const charId = req.params.id;
    fetchBy('series', charId, res);

};

const fetchStories = (req, res) => {
    const charId = req.params.id;
    fetchBy('stories', charId, res);

};


module.exports = { listAll, fetchBy, fetchComics, fetchEvents, fetchSeries, fetchStories, fetchCharacter, getCredentials };