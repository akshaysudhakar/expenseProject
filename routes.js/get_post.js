const express = require('express');

const catroller = require('./../cantrollers/operations');

const ed_cantroller = require('./../cantrollers/operation');

const route = express();


route.post('/:id',ed_cantroller.delete);

route.post('/',catroller.post_method);

route.get('/',catroller.get_method);


module.exports = route