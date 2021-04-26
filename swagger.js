const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/marvel_api_routes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Marvel API",
        description: "Documentation Marvel API consumed by original Marvel API"
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Marvel",
            "description": "Characters"
        }
    ],
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/index.js')
}).catch(err => {
    console.log(err);
})