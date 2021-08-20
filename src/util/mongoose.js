module.exports = {
	multipleMongooseObject: function (mongooses) {
		return mongooses.map((mongoose) => mongoose.toObject());
	},
	mongooseObject: function (mongoose) {
		return mongoose ? mongoose.toObject() : mongoose;
	},
};
