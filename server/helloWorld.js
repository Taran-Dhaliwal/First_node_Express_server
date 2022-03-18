var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//Routes
app.get('/', function(req, res){
    res.render('form');
});

//route to post the data

app.post('/process-form', function(req, res){
    res.send('data has been sent to server and you can view it in server console')
    console.log(req.body)
})

app.get('/style.css', function(req, res){
    res.render('style.css');
});
app.get('/img/meme.jpg', function(req, res){
    res.render('img/meme.jpg');
});

// rendering notfound page in case of error 404(requested page does not exist)
app.use(function(req, res){
    res.status(404);
    res.render('notfound');
});




app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});

