const baseURL = process.env.APP_HOME || '/';

function getURL(path = ""){
    const pathPrefix = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
    return pathPrefix + path;
}

function getVersionURL (path = ""){
    return getURL(path) + "?" + Math.random().toString(36).substr(2, 5);
}

module.exports = {baseURL, getURL, getVersionURL}