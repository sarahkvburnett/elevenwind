const date = require('./date');
const page = require('./page');
const url = require('./url');


const encodeURL = (text) => {
    return encodeURI(text);
}

module.exports = {encodeURL: encodeURL, ...url, ...page, ...date}