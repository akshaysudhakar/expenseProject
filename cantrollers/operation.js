const express = require('express');

const table = require('./../models/expenditure');

const app = express();

app.use(express.json());

exports.delete = (req,res,next)=>{
    const id = req.params.id;
    table.findByPk(id).then(expense=>{
        return expense.destroy()
    }).then(()=>console.log('expense deleted')).catch(err => console.log(err));
}