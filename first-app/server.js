const express = require('express');

const app = express()

app.use((req, res)=>{
    res.json({
        message:'Express Working',
        status: 204,
        error:'0000'
    })
});

module.exports = app;