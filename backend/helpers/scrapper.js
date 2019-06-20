// This file work with recursivity but don't upload data in Database, just export a file

// const axios = require('axios');
// const cheerio = require('cheerio');
// const dateHelper = require('./formatDate');
// const chalk = require('chalk');
// const fs = require('fs');

// const outputFile = 'data.json'
// const parsedResults = []
// const pageLimit = 10
// let pageCounter = 0
// let resultCount = 0
// const url = `https://www.numerama.com/sciences`;

// const exportResults = (parsedResults) => {
//   fs.writeFile(outputFile, JSON.stringify(parsedResults, null, 4), (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(chalk.yellow.bgBlue(`\n ${chalk.underline.bold(parsedResults.length)} Results exported successfully to ${chalk.underline.bold(outputFile)}\n`))
//   })
// }

// getWebsiteContent = async(url) => {
//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     $('.recent-posts.posts-grid .recent-post-content article').map((i, el) => {
//         const img = $(el).find('.cover-preview img').attr('src').slice(25)
//         const title = $(el).find('h3').text();
//         const link= $(el).find('a').attr('href');

//         // Tag
//         const tags= $(el).find('footer ul li a').map(function(i, el) {
//             return $(this).text();
//         }).get().join(',');

//         // Date formating with helpers function
//         let time = $(el).find('footer time').text();
//         time = dateHelper.stringToDate(time);

//         // Formating image
//         const formattedData = {
//             title,
//             link,
//             time: dateHelper.formatDate(time),
//             img, 
//             tags: tags.split(',')
//         }
        
//         parsedResults.push(formattedData)
//     })
    
//     const nextPageLink = $('.pagination').find('.active').parent().next().next().next().find('a').attr('href')
//     console.log(chalk.cyan(`  Scraping: ${nextPageLink}`))
//     pageCounter++
  
//     if (pageCounter === pageLimit) {
//       exportResults(parsedResults)
//       return false
//     }

//     getWebsiteContent(nextPageLink)

//   } catch (error) {
//     console.error(error)
//   }
// }

// getWebsiteContent(url)
