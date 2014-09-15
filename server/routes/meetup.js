var utils = require('./_utils'),
	meetup = require('meetup-api');

module.exports = function(app) {
	app.get(utils.base + 'meetup/', function(req, res) {
		if (utils.paramExists(req, 'id')) {
			samples.findOne({
				_id: db.ObjectId(req.params.id)
			}, function(err, samples) {
				res.send(samples);
			});
		} else {
			utils.getAll(samples, res);
		}
	});
};