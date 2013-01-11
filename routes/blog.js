/*
 * Methods for the blog
 */

exports.news = function(req, res) {
	res.render('main/news', {title: 'News'});
};