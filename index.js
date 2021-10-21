var express = require('express');
//var connect = require("./connect");

var app = express();
 let port = process.env.PORT || 3000;


var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'bpy54briqafhhx3vse0q-mysql.services.clever-cloud.com',
  user: 'ugxx5wme2klocxoj',
  password: 'nckEZ5TCQfhBPeet0Fk0',
  database: 'bpy54briqafhhx3vse0q',
});

var connect = function(){
  connection.connect( function(err) {
    if (!err){
      console.log ("Database is connected!!");
    } else{
      console.log("Database connect error");
    }
  })
}


// Lấy hết giá trị của bảng database
  app.get('/users', function (req, res) {
    connection.query('SELECT * FROM demo', function (error, results, fields) {
        if (error) throw error;
        return res.send({ message: 'users list: ', data: results  });
    });
  });


app.listen(port, function(){
    console.log('Node server running @ http://localhost:' + port)
  });