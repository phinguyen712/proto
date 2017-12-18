const accounts = require('./accounts.js'),
    guidelines = require('./guidelines.js');

module.exports = (app) => {
    accounts(app);
    guidelines(app);
}
