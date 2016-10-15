

// Requires
var express = require('express'),
    app     = express(),
    meli    = require('mercadolibre');

// Assets & views
app.use('/', express.static(__dirname + '/app/views'));
app.set('views', __dirname + '/app/views');


var meliObject = new meli.Meli(1213949921402143, 'VT2tlhth0TLDe99pojRvhtb4szSSVhhq');

var redirect_uri = 'http://localhost:3000/success';
var redirect_uri_success = 'http://localhost:3000';
var callback = function(){
  console.log('conecto!')
};

// Routes
app.get('/', function(request, response) {
  response.render('index.html');
});

app.get('/enter', function(request, response){
  // var code = meliObject.getAuthURL(redirect_uri);
  // response.redirect( meliObject.authorize(code, redirect_uri_success, callback) );
  // response.send(code);
  response.redirect(meliObject.getAuthURL(redirect_uri));
})

app.get('/success', function(request, response){
  response.send('OK!');
})

// Server
app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
