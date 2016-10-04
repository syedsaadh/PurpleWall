var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Editor Schema
var editorSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    join_date: {
        type: Date
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

var Editor = module.exports = mongoose.model('Editor', editorSchema);

// Get editor by id
module.exports.getEditorById = function(id, callback) {
    Editor.findById(id, callback);
};

module.exports.getEditorByUsername = function(username, callback) {
    Editor.findOne({username: username}, callback);
};

// Compare Password
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) {
            return callback(err);
        } else {
            callback(null, isMatch);
        }
    });
};

// Add Editor
module.exports.addEditor = function (editor, callback) {
    Editor.create(editor, callback);
};