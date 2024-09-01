const express = require('express');

const table = require('./../models/expenditure');

const app = express();

app.use(express.json());

exports.post_method = (req,res,next)=>{
    console.log(req.body);
    table.create({
        amount : req.body.amount,
        description : req.body.description,
        catogory : req.body.catogory
    }).then(()=>{console.log('new data posted')}).catch(err=>console.log(err))
}

exports.get_method = (req,res,next)=>{
    table.findAll().then(data=>{
        res.json(data);
    }).catch(err=>console.log(err));
}