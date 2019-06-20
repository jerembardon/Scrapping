var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    time: {
      type: Date,
      required: true
    },
    img: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }, 
    createdAt: {
      type: Date, 
      default: Date.now
    },
    category: {
      type: String,
      required: true
    }
  });

  ArticleSchema.pre("save", function(next) {
    Article.collection.drop();
    next();
  })
  
  var Article = mongoose.model("Article", ArticleSchema);
  
  

  //export model
  module.exports = Article;