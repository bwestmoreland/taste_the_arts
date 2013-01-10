
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , blog = require('./routes/blog')
  , gallery = require('./routes/gallery')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
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
app.get('/users', user.list);
app.get('/blog', blog.index);
app.get('/post', blog.post);
app.get('/about', routes.about);
app.get('/services', routes.services);
app.get('/faq', routes.faq);
app.get('/docs', routes.docs);
app.get('/pricing', routes.pricing);
app.get('/testimonials', routes.testimonials);
app.get('/login', user.login);
app.get('/404', routes.filenotfound);
app.get('/sidebar-left', routes.sidebarleft);
app.get('/sidebar-right', routes.sidebarright);
app.get('/fullwidth', routes.fullwidth);
app.get('/contact', routes.contact);
app.get('/portfolio-3col', gallery.threecol);
app.get('/portfolio-4col', gallery.fourcol);
app.get('/portfolio-featured', gallery.featured);
app.get('/portfolio-item', gallery.item);



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
