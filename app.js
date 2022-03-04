const express = require('express');
const router = require('./routes/routes');
const ExpressError = require('./utils/ExpessError');
const app = express();
const PORT = 3000;

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/contact', router);
app.use('/register', router);
app.use('*', router);


app.use((err, req, res, next) => {
    res.status(err.statusCode).render('error', {err});
})
app.listen(PORT, () => {
    console.log('Listening ...');
});