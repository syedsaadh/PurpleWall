var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    content: {
        type: String
    },
    excerpt: {
        type: String
    },
    author: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    tags: [{
        tag_name: String
    }]
});

var Blog = module.exports = mongoose.model('Blog', blogSchema);

// Get Blogs
module.exports.getBlogs = function (callback, limit) {
    Blog.find(callback).limit(limit).sort([['created_at', 'descending']]);
};

// Get Single Blog
module.exports.getBlogById = function (id, callback) {
    Blog.findById(id, callback);
};

// Get Blog from URL
module.exports.getBlogFromURL = function(url, callback) {
    url = url.toString();
    var title = url.replace(/-/g, ' ');
    Blog.findOne({title: title}, callback);
};
// Add Blog
module.exports.addBlog = function (article, callback) {
    Blog.create(article, callback);
};

// Update Blog
module.exports.updateBlog = function (query, update, options, callback) {
    Blog.findOneAndUpdate(query, update, options, callback);
};