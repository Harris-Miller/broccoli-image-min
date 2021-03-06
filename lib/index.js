'use strict'

const BroccoliPluginAdapter = require('broccoli-plugin-adapter')
import Minifier from './sqoosh-minifier.js'

class BroccoliImageMin extends BroccoliPluginAdapter {

    constructor(inputNodes, options) {
        super(inputNodes, options)

        this.minifier = new Minifier(options)
    }

    handleContent(path, content) {
        if (this.minifier.matches(path)) {
            return this.minifier.minifyBuffer(content)
        } else {
            return content
        }
    }
}

module.exports = BroccoliImageMin