
const path = require('path');
module.exports = {
    mode:"development",
    entry:"./source/index.js",
    output:{
        path:path.resolve(__dirname,"public"),
        filename:'index_bundle.js'
    }
}