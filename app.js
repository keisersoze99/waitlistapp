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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
})

db.connect(err => {
    if(err) {
        throw err;
    }
})

app.post('/register', (req, res) => {
    
    let email = req.body.email;
    console.log(req.body);
    console.log(email);
    let queryString = 'INSERT INTO waitlist (\`email\`) VALUES ("'+email+'");';
    db.query(queryString, (err, result) => {
        if(err) {
            res. send(err);
        } else {
            let position = result.insertId;
            res.send({position});
        }
        
    })
})

app.listen(PORT, () => {
    console.log('Listening ...');
})

var connectDb = () => {
    
}