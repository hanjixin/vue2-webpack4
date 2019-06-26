'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://testapi.rujian.net/kjob"'
        // BASE_API: '"http://192.168.1.124:8080/kjob_dev"'

})