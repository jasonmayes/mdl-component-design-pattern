/**
 * An example Class constructor for a MDL component. Note capital camel case.
 * Implements MDL component design pattern defined at:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 * Which therefore works in conjunction with the ComponentHandler available in
 * global scope. This file is intentionally over commented / coded to show
 * potential example usage.
 * @param {HTMLElement} element The element that will be upgraded.
 */
function MaterialComponentClassname(element) {
  'use strict';

  // Example private variable. Uses underscore notation to denote private
  // variable.
  this.element_ = element;

  // Other private variables can go here as needed... For example:
  this.blah_ = 'something';

  // Initialize instance.
  this.init();
}


/**
 * Store constants in one place so they can be updated easily.
 * @enum {string | number}
 * @private
 */
MaterialComponentClassname.prototype.Constant_ = {
  /**
   * Name should be descriptive so no comment needed.
   */
  MEANING_OF_LIFE: 42,
  SPECIAL_WORD: 'HTML5'
};


/**
 * Store strings for class names defined by this component that are used in
 * JavaScript. This allows us to simply change it in one place should we
 * decide to modify at a later date.
 * @enum {string}
 * @private
 */
MaterialComponentClassname.prototype.CssClasses_ = {
  /**
   * Class names should use camelCase and be prefixed with the word "material"
   * to minimize conflict with 3rd party systems.
   */
  SHOW: 'materialShow',
  /**
   * Explain what the class is for.
   */
  HIDE: 'materialHidden'
};


/**
 * Example of a private function, note the underscore and 2 blank lines
 * between function definition and previous lines of code.
 * @param {Event} event The event that fired.
 * @private
 */
MaterialComponentClassname.prototype.privateFunction_ = function(event) {
  'use strict';
  // Your code here...
  console.log(this.Constant_.SPECIAL_WORD + ' is cool!');
};


// Other private functions could be defined here. 2 lines space between each.
// Public functions can also be defined here, simply without underscores at
// end of function name as shown next...


/**
 * Initialize element.
 */
MaterialComponentClassname.prototype.init = function() {
  // In this example we will add an event listener to the element.
  if (this.element_) {
    this.element_.addEventListener('click', this.privateFunction_.bind(this));
  }
}



// The component registers itself. It can assume componentHandler is
// available in the global scope.
componentHandler.register({
  constructor: MaterialComponentClassname,
  classAsString: 'MaterialComponentClassname',
  cssClass: 'mdlDemo'
});
