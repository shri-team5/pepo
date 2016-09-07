switch (process.env.NODE_ENV || 'development') {
    case 'development':
        module.exports = require('./environments/development.js');
        break;
    case 'grimfri':
        module.exports = require('./environments/grimfri.js');
        break;
    case 'basilred':
        module.exports = require('./environments/basilred.js');
        break;
    case 'production':
        module.exports = require('./environments/production.js');
        break;
}
