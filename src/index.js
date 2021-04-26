const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const router = require('./routes/marvel_api_routes');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/marvel', router);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
    console.log('BACKEND RUNNING ON PORT' + port);
});

module.exports = app;