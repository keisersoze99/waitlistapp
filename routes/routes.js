const express = require('express');
const Router = express.Router();
const dbConnection = require('../model/dbConfigs');

Router.get('/', (req, res) => {
    res.render('home');
})

Router.get('/contact', (req, res) => {
    res.json({phn: 8675811997});
});

Router.post('/register', (req, res) => {
    
    let email = req.body.email;
    console.log(req.body);
    console.log(email);
    let queryString = 'INSERT INTO waitlist (\`email\`) VALUES ("'+email+'");';
    dbConnection.query(queryString, (err, result) => {
        if(err) {
            res. send(err);
        } else {
            let position = result.insertId;
            res.send({position});
        }
        
    })
})

module.exports = Router;