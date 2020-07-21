var express = require('express');
var app = express();

app.use(express.static("public"));

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tJvnjAtbMWtqW9HmmZBDGiZk',
    database: 'coffeeShop_db'
});

connection.connect();

app.get('/shops.json', function (req, res) {
    connection.query('SELECT * FROM shops', function (error, results, fields) {
        if (error) res.send(error)
        else res.json(results);
    });
});

app.listen(3001, function(){
	console.log('listening on 3001');
});