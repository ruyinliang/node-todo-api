var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://13.251.247.143:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};
