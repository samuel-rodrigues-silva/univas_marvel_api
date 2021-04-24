const axios = require('axios');
const md5 = require('md5');
const MarvelApiHost = 'http://gateway.marvel.com/v1/public/characters';
const apikey = '95f18fa6ccae5a5dbf5f5d6749c83288b691b3ac';
var x = '?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150';
var z = '?ts=${ts}&apikey=${apikey}&hash=${hash}';

const listAll = (req, res) => {
    let ts = new Date.now();
    let hash = md5(ts);
    let request = axios.get(`${MarvelApiHost}`).then(response => {
        console.log(response);
    });
    console.log('REQUEST: ' + request);
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