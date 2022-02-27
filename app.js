const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rghk1999",
    database: "udemy"
});
const PORT = 3000;

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
})



app.listen(PORT, () => {
    console.log('Listening ...');
})