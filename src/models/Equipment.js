const moment = require('moment');
const utcNow = moment().utc().format();

module.exports = function Equipment(data) {

    this.model = data.model;
    this.brand = data.brand;
    this.year = data.year;
    this.created_at = data.created_at || utcNow;
    this.updated_at = data.updated_at || utcNow;
};