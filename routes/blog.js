/*
 * Methods for the blog
 */

exports.news = function(req, res) {
	res.render('news', {title: 'News'});
};