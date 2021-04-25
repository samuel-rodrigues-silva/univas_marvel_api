const axios = require('axios');
const md5 = require('md5');
const MarvelApiHost = 'http://gateway.marvel.com/v1/public/characters';
const apikey = '6c4ed2deff05cc8ecbcf371162944db7';
var x = '?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150';

function getCredentials() {
    let ts = Number(Date.now());
    let hash = md5(ts + '95f18fa6ccae5a5dbf5f5d6749c83288b691b3ac' + apikey);
    return [ts, hash];
}

const listAll = (req, res) => {
    let credentials = getCredentials();
    axios.get(`${MarvelApiHost}?ts=${credentials[0]}&apikey=${apikey}&hash=${credentials[1]}`).then(response => {
        res.status(200).send(response.data);
    }).catch(err => { console.log(err) });
};

const fetchComics = (req, res) => {
    const charId = req.body;
    let credentials = getCredentials();

    axios.get(`${MarvelApiHost}/${charId.id}/comics?ts=${credentials[0]}&apikey=${apikey}&hash=${credentials[1]}`).then(response => {
        res.status(200).send(response.data);
    }).catch(err => { console.log(err) });
};

const fetchEvents = (req, res) => {
    const charId = req.body;
    let credentials = getCredentials();

    axios.get(`${MarvelApiHost}/${charId.id}/comics?ts=${credentials[0]}&apikey=${apikey}&hash=${credentials[1]}`).then(response => {
        res.status(200).send(response.data);
    }).catch(err => { console.log(err) });
    res.send('events')
};

const fetchSeries = (req, res) => {

    res.send('fetchseries')
};

const fetchStories = (req, res) => {

    res.send('stories')
};


module.exports = { listAll, fetchComics, fetchEvents, fetchSeries, fetchStories };