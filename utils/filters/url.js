const baseURL = process.env.APP_HOME || '/';

function getUrl(path){
    if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1)
    const pathPrefix = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
    return path.startsWith(pathPrefix) ? path : pathPrefix + path;
}

function getVersionUrl(path){
    return getUrl(path) + "?" + Math.random().toString(36).substr(2, 5);
}

function getAssetUrl(file){
    return getVersionUrl(`/assets${file}`);
}

function getImageUrl(file){
    return getVersionUrl(`/assets/images/${file}`);
}

module.exports = {
    url: getUrl,
    asset: getAssetUrl,
    image: getImageUrl
}