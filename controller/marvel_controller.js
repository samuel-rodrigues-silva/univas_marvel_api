const http = require('http');
const { Md5 } = require('ts-md5/dist/md5');
const MarvelApiHost = 'https://gateway.marvel.com/v1/public/characters';
const apikey = '6c4ed2deff05cc8ecbcf371162944db7';
var x = '?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150';

const listAll = (req, res) => {
    let ts = new Date.now();
    let hash = Md5.hashStr(ts);
    let request = http.get(`${MarvelApiHost}?ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
        res.send(response);
        res.send(request);
    });
    res.send(request);
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