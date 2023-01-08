const {getURL, getVersionURL} = require("./url");

module.exports = {
    image: function(file){
        return getVersionURL(`/assets/images/${file}`);
    },

    url: function(url){
        return getURL(url);
    },

    asset: function(file){
        return getVersionURL(`/assets${file}`);
    }

}