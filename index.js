var HPM = require('./lib')

module.exports = function (context, opts) {
  return new HPM(context, opts)
}

/**
 * Module dependencies.
 */
var express = require('express')
var proxy = HPM;

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy({
  target: 'http://aropool.com',
  changeOrigin: true // for vhosted sites, changes host header to match to target's host
})

var app = express()

/**
 * Add the proxy to express
 */
app.use('/', jsonPlaceholderProxy)

app.listen(process.env.PORT || 3000)

console.log('[DEMO] Server: listening on port 3000')
