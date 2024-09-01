const express = require('express');
const cors = require('cors');

const get_post_route = require('./routes.js/get_post')
const table = require('./models/expenditure');

const app = express();

app.use(cors());
app.use(express.json())

app.use('/entries', get_post_route);



table.sync().then(()=>{
    app.listen(4000, ()=>{console.log('port is active')})
}).catch(err=> console.log(err))

