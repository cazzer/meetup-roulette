var utils = require('./_utils'),
	Meetup = require('meetup-api');

var meetup = new Meetup('223271720383c2625e3d52287b2d7b');

var categoriesCache = false;

module.exports = function(app) {
	app.get(utils.base + 'meetup/events', function(req, res) {
		meetup.getOpenEvents({
		//	category: 1,
			lat: '30.261038',
			lon: '-97.760641',
			time: '0,1d'
		}, function(err, events) {
			res.send(events.results[Math.floor((Math.random() * events.results.length))]);
		});
	});

	app.get(utils.base + 'meetup/categories', function(req, res) {
		if (categoriesCache) {
			res.send(categoriesCache);
		} else {
			meetup.getCategories(function(err, categories) {
				categoriesCache = categories;
				res.send(categories);
			});
		}
	});
};