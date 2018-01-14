var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var usersSchema = new mongoose.Schema({
    local: {
        email: String,
        username: String,
        password: String
    },
    google: {
        id: String,
        token: String,
        name: String,
        email: String
    }

});
usersSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

usersSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', usersSchema);