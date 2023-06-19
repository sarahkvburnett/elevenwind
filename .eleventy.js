require('dotenv').config()

const filters = require('./utils/filters')
const transforms = require('./utils/transforms')
const shortcodes = require('./utils/shortcodes')

module.exports = function (config) {

    // Add Filters
    Object.keys(filters).forEach((filterName) => {
        config.addFilter(filterName, filters[filterName])
    })

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        config.addTransform(transformName, transforms[transformName])
    })

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        config.addShortcode(shortcodeName, shortcodes[shortcodeName])
    })

    // Asset Watch Targets
    config.addWatchTarget('./src/assets')

    //Tailwind
    config.addWatchTarget('./styles/tailwind.config.js')
    config.addWatchTarget('./styles/tailwind.css')
    config.addPassthroughCopy({ './_tmp/style.css': './assets/css/style.css' })

    // Pass-through files
    config.addPassthroughCopy('src/robots.txt')
    config.addPassthroughCopy('src/site.webmanifest')
    config.addPassthroughCopy('src/assets/images')
    config.addPassthroughCopy('src/assets/fonts')

    // Deep-Merge
    config.setDataDeepMerge(true)

    // Base Config
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            layouts: '_layouts',
            data: '_data'
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}
