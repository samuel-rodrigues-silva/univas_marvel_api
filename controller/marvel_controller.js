const axios = require('axios');
const md5 = require('md5');
const MarvelApiHost = 'http://gateway.marvel.com/v1/public/characters';
const apikey = '6c4ed2deff05cc8ecbcf371162944db7';
var x = '?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150';

const listAll = (req, res) => {

    let ts = Number(Date.now());
    let hash = md5(ts + '95f18fa6ccae5a5dbf5f5d6749c83288b691b3ac' + apikey);
    let request = axios.get(`${MarvelApiHost}?ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
        res.send(JSON.stringify(response));
    }).catch(err => { console.log(err) });
};

const fetchComics = (req, res) => {

    res.send('comics')
};

const fetchEvents = (req, res) => {

    res.send('events')
};

const fetchSeries = (req, res) => {

    res.send('fetchseries')
};

const fetchStories = (req, res) => {

    res.send('stories')
};


module.exports = { listAll, fetchComics, fetchEvents, fetchSeries, fetchStories };