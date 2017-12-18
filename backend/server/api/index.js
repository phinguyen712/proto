const accounts = require('./accounts.js'),
    guidelines = require('./guideline.js');

module.exports = (app) => {
    accounts(app);
    guidelines(app);
}
