const express = require('express');
const router = express.Router();
const controller = require('../controller/marvel_controller');

router.get('/', controller.listAll);

router.get('/comics/:charId', controller.fetchComics);

router.get('/events/:charId', controller.fetchEvents);

router.get('/series/:charId', controller.fetchSeries);

router.get('/stories/:charId', controller.fetchStories);

module.exports = router;
