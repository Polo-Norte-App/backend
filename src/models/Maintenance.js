const moment = require('moment');
const utcNow = moment().utc().format();

module.exports = function Maintenance(data) {

    this.description = data.description;
    this.equipment_id = data.equipment_id;
    this.user_id = data.user_id;
    this.created_at = data.created_at || utcNow;
    this.updated_at = data.updated_at || utcNow;
};