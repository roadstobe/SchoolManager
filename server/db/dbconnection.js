const mongoose = require('mongoose');

const keys = require('../config/keys')

module.exports.connect = () => {
  mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => console.log('connected to db'))
    .catch(err => console.log(err))
}



