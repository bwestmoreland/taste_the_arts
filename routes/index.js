 /*
 	* GET static pages
 	*/

exports.index = function(req, res) {
	res.render('index', { title: 'Home'});
};

exports.sponsorships = function(req, res) {
	res.render('sponsorships', { title: 'Sponsorships'});
};

exports.contact = function(req, res){
	res.render('contact', { title: 'Contact'});
};

exports.about = function(req, res) {
	res.render('about', { title: 'About'});
};

exports.success = function(req, res) {
	res.render('success', { title: 'Success'});
};