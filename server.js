// load the things we need
var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'coffeeShop_db'
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
	connection.query('SELECT * FROM shops', function (error, results, fields) {
		if (error) res.send(error)
		else res.render('pages/index', {
			data: results,
		})
	});
});

app.get('/shop_form', function(req, res) {
	res.render('pages/shop_form');
});

// app.get('/shops_menu', function(req, res) {
// 	res.render('pages/shops_menu');
// });

// show shop menu
app.get('/shops/:id', function(req, res) {
	
	let query = 'SELECT * FROM shops WHERE id = ?';
	
	connection.query(query, [req.params.id], function (error, results, fields) {

		// //grabs the object out of the array
		// res.json(results)
		var o = {
			shops: results[0]
		}
	
		res.render('pages/shops_menu',o);
	});
});

app.get('/shops/sort/:name', function (req, res) {

	let query

	if (req.params.name === 'name') {
		query = 'SELECT * FROM shops ORDER BY shop_name ASC'
	} else {
		
		query = 'SELECT * FROM shops ORDER BY shop_name DESC'
	}

	connection.query(query, function (error, results, fields) {

		var o = {
			shops: results
		}

		res.render('pages/index', o);
	});
});




app.get('/query', function (req, res) {

	let query = 'SELECT * FROM shops WHERE id = ?';
	
	connection.query(query, [req.query.id], function (error, results, fields) {
		var o = {
			shops: results
		}

		res.render('pages/shops_menu', o);
	});

})

// http://localhost:3000/insert-shop?shop_name=test&item_name1=coke&item_name2=coke&item_name3=coke&item_name4=coke&item_name5=coke&status=open

app.get('/insert-shop', function (req, res) {

	let query = 'INSERT into shops(shop_name, item_name1, item_name2, item_name3, item_name4, item_name5, status) VALUES (?,?,?,?,?,?,?)';

	// req.query.shop_name
	// req.query.item_name1
	// req.query.item_name2
	// req.query.item_name3
	// req.query.item_name4
	// req.query.item_name5
	// req.query.status

	connection.query(query, [req.query.shop_name, req.query.item_name1, req.query.item_name2, req.query.item_name3, req.query.item_name4, req.query.item_name5, req.query.status], function (error, results, fields) {
		res.redirect('/')

	});


});

app.listen(3000, function(){
	console.log('listening on 3000')
	});