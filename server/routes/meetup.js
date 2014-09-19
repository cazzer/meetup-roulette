var utils = require('./_utils'),
	Meetup = require('meetup-api');

var meetup = new Meetup('223271720383c2625e3d52287b2d7b');

var categoriesCache = false,
	meetupCache = false,
	cacheTime = false;

module.exports = function(app) {
	app.get(utils.base + 'meetup/events', function(req, res) {
		if (meetupCache && cacheTime > (new Date).getTime() - (1000 * 60 * 60)) {
			res.send(meetupCache[Math.floor((Math.random() * meetupCache.length))]);
		} else {
			meetup.getOpenEvents({
				lat: req.query.lat,
				lon: req.query.lon,
				time: '0,1d'
			}, function(err, events) {
				meetupCache = events.results;
				cacheTime = (new Date).getTime();
				res.send(events.results[Math.floor((Math.random() * events.results.length))]);
			});
		}

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