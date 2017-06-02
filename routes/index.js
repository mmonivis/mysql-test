var express = require('express');
var router = express.Router();

// Include the mysql module.
// We had to --save it because it is not part of the core.
// It is NOT mysql. It is a module that goes between MySQL and node.js
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'x',
  password : 'x',
  database : 'classicmodels' 
});

connection.connect(function(error){
	if(error){
		console.log(error.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
});

/* GET home page. */
router.get('/', function(req, res, next) {

	var selectQuery = 'SELECT * FROM customers;';
	connection.query(selectQuery, function(error, results, fields){
		if(error) throw error;
		console.log(results);
		res.render('index', { results: results });
	});
});

module.exports = router;
