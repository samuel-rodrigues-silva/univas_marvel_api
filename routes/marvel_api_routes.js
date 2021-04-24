const express = require('express');
const router = express.Router();
const controller = require('../controller/marvel_controller');

router.get('/', controller.listAll);

router.get('/comics/:char', controller.fetchComics);

router.get('/events/:char', controller.fetchEvents);

router.get('/series/:char', controller.fetchSeries);

router.get('/stories/:char', controller.fetchStories);

module.exports = router;
