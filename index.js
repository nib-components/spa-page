var extend            = require('extend');
var ControlCollection = require('control-collection');

/**
 * A page
 * @class
 */
var Page = extend(ControlCollection, {

  /**
   * Construct the page
   * @param options
   */
  construct: function(options) {
    this.el           = options.el;
    this.config       = options.config;
    this.model        = options.model;
    this.url          = options.url;
    this.title        = options.title;
    ControlCollection.call(this, {name: options.name});
  },

  /**
   * Get the page URL
   * @returns {String}
   */
  getUrl: function() {
    return this.url;
  },

  /**
   * Get the page title
   * @returns {String}
   */
  getTitle: function() {
    return this.title;
  },

  /**
   * Hide the page
   * @returns {Page}
   */
  hide: function() {
    this.view.setVisible(false);
    this.emit('hidden');
    return this;
  },

  /**
   * Show the page
   * @returns {Page}
   */
  show: function() {
    this.view.setVisible(true);
    this.emit('shown');
    return this;
  }

});

module.exports = Page;