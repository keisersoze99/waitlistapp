const express = require('express');
const { append } = require('express/lib/response');
const Router = express.Router();
const dbConnection = require('../model/dbConfigs');
const ExpressError = require('../utils/ExpessError');

Router.get('/', (req, res) => {
    res.render('home');
})

Router.get('/contact', (req, res) => {
    res.json({phn: 8675811997});
});

Router.get('/waitlist/:id', (req, res) => {
    
    console.log(`id is ${req.params.id}`);
    let id = req.params.id;
    let query = 'SELECT * FROM waitlist WHERE \`sequence\` = \''+id+'\' ;';
    dbConnection.query(query, (err, result) => {
        if(err) {
            console.log('error');
        } 
        if(result) {
            if(result.length > 0) {
                let user = result[0];
                res.render('confirmation', {user});
            } else {
                let err = {
                    message : 'User not found'
                }
                res.render('error', {err});
            }
        }
    })
})

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
            res.redirect(`/waitlist/${position}`);
        }
        
    })
})

Router.all('*', (req, res, next) => {
    throw new ExpressError('Page Not Found', 404);
})

module.exports = Router;