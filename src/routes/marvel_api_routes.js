const express = require('express');
const router = express.Router();
const controller = require('../controller/marvel_controller');

router.get('/', controller.listAll);

router.get('/comics/:id', controller.fetchComics);

router.get('/events/:id', controller.fetchEvents);

router.get('/series/:id', controller.fetchSeries);

router.get('/stories/:id', controller.fetchStories);

module.exports = router;
