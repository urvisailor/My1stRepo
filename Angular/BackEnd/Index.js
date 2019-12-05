
var express = require('express');
var app = express();
//var path = require('path');
var cors=require('cors');
var body_parser=require('body-parser');
app.use(body_parser.urlencoded({extended:false}));
app.use(express.json());
app.use(body_parser.json());
//var multer=require('multer');


//var usersRouter = require('./routes/users');




//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');


app.use(cors({origin:'http://localhost:4200'}));


//app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

var EmpController = require('./Controller/EmpController');
app.use('/', EmpController);
//app.use('/users', usersRouter);



app.listen(8000);
