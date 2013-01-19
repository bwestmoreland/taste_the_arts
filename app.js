
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , blog = require('./routes/blog')
  , post = require('./routes/post')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/sponsorships', routes.sponsorships);
app.get('/news', blog.news);
app.get('/about', routes.about);
app.get('/success', routes.success);



app.post('/post', post.create);
app.get('/post/:post_id', post.show);
app.get('/posts', post.list);
app.get('/post/:post_id/edit', post.edit);
app.put('/post/:post_id', post.update);
app.delete('/post/:post_id', post.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
