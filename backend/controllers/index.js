require('moment/locale/fr');
var express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');
var router = express.Router();

// Model
var Article = require('../model/Article.js');

// Helpers
const dateHelper = require('../helpers/formatDate');

router.post('/scrap', async (req, res, next) => {
    try {
        const category = req.body.category;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;

        const url = `https://www.numerama.com/${category}`;
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        
        $('.recent-posts.posts-grid .recent-post-content article').map((i, el) => {
            const img = $(el).find('.cover-preview img').attr('src').slice(25)
            const title = $(el).find('h3').text();
            const link= $(el).find('a').attr('href');
    
            // Tag
            const tags= $(el).find('footer ul li a').map(function(i, el) {
                return $(this).text();
            }).get().join(',');
    
            // Date formating with helpers function
            let time = $(el).find('footer time').text();
            time = dateHelper.stringToDate(time);
            
            const formattedData = {
                title,
                link,
                time,
                img, 
                tags: tags.split(','),
                category
            }

            // SAVE IN DB
            if(moment(time).isBetween(startDate, endDate)) {
                let newArticles = new Article(formattedData);
                newArticles.save().then(response => {
                    res.status(200).send({response: "Vos articles sont prêt"})
                }).catch(err => {
                    res.status(400).send(err);
                });
            }
           
            
        });
    } catch(e) {
        next(e)
    }
});

router.get('/scrapedData', function(req, res, next) {
    try {
        Article.find({}).then((articles) => {
            res.status(200).send(articles);
        });
    } catch(e) {
        next(e)
    }
});

module.exports = router;