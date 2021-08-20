const Course = require('../app/models/Course');
const { multipleMongooseObject } = require('../util/mongoose');

class SiteController {
	// Get news
	index(req, res, next) {
		Course.find({})
			.then((courses) => {
				res.render('home', {
					courses: multipleMongooseObject(courses),
				});
			})
			.catch(next);
	}
	search(req, res) {
		res.render('search');
	}
}

module.exports = new SiteController();
