var exports = module.exports = {};
const moment = require('moment');
require('moment/locale/fr');

exports.stringToDate = function(date) {
    let newDate = moment().toDate();

    let yesterdayRgx = new RegExp(/\b(\w*hier\w*)\b/g);
    let todayRgx = new RegExp(/\b(\w*il y\w*)\b/g);
    let nowRgx = new RegExp(/\b(\w*instant\w*)\b/g);

    if(yesterdayRgx.test(date)) {
        let newDate = moment().subtract(1, 'days').toDate();
        return newDate;
    }

    if(todayRgx.test(date) || nowRgx.test(date)) {
        return newDate;
    }

    let fullDateString = moment(date, 'Do MMMM YYYY').format();
    let dateConverted = moment(fullDateString).toDate();

    return dateConverted;
}

