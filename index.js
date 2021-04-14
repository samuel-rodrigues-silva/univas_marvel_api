const express = require('express');
const app = express();
const port = process.env.PORT | 8080;
const router  = require('./marvel_api_routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/marvel',router);

app.listen(port, ()=>{
    console.log('BACKEND RUNNING ON PORT' + port);
});