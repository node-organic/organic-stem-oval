/* global oval */
if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill()
}

module.exports = function (options, dna) {
  var _ = require('lodash')
  var Plasma = require('organic-plasma')

  window.onerror = window.handleException = window.onerror
  window.navigatePage = require('./navigate-page')

  window.plasma = new Plasma()

  window.plasma.debug = dna.debug

  if (options.organelles) {
    window.plasma.organelles = window.plasma.organelles.concat(options.organelles(window.plasma))
  }

  require('domready')(function () {
    oval.init()
    if (options.globalDirectives) {
      var oldBaseTag = oval.BaseTag
      oval.BaseTag = function (tag, tagName, rootEl, rootProps, rootAttributes) {
        oldBaseTag(tag, tagName, rootEl, rootProps, rootAttributes)
        tag.injectDirectives(options.globalDirectives)
      }
    }
    options.requireTags()
    oval.mountAll(document.body)
  })
}
