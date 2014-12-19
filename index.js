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
    var self          = this;
    this.el           = options.el;
    this.config       = options.config;
    this.model        = options.model;
    this.url          = options.url;
    this.title        = options.title;
    this.view         = options.view;
    ControlCollection.call(this, {name: options.name});

    //bind events
    this.view.on('submit', function() {
      self.emit('navigate', 'next');
    });

    this.view.on('back', function() {
      self.emit('navigate', 'previous');
    });

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
   * Show the page
   * @returns {Page}
   */
  show: function() {

    //make the page visible
    this.view.setVisible(true);

    //always scroll to the top of the page
    window.scrollTo(0, 0);

    this.emit('shown');
    return this;
  },

  /**
   * Hide the page
   * @returns {Page}
   */
  hide: function() {
    this.view.setVisible(false);
    this.emit('hidden');
    return this;
  }

});

module.exports = Page;