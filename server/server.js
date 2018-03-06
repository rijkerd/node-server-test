const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.status(404).send({
        error:'Page not found.',
        name:'Todo App v1.0'
    });
});

app.get('/users',(req,res) => {
    res.send([{
        name:'Mike',
        age:27
    },{
        name:'Andrew',
        age:25
    },{
        name:'Jen',
        age:26
    }]);
});

app.listen(4000,() => {
    console.log("Server is Running on PORT 4000");
})

module.exports.app = app;

