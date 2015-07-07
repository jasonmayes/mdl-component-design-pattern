mdl-component-design-pattern
============================

A design pattern that elegantly handles the registration of new components such that DOM upgrades are automatically performed on document load, as well as making it super easy to handle upgrades of elements that may be added after initial page load. It even ensures elements can never be "double" (or more) upgraded, whilst allowing any HTMLElement to be upgraded to multiple component types. A good example of this would be an element that is an instance of a "button", but also a "ripple" special effect.

## How does it work in practice? Example?

Alright, lets say you have some HTML like this:

```html
<div class="myComponent">Some magical component</div>
<div class="myComponent">Another instance component - maybe it is a fancy button</div>
<div class="myComponent">You get the idea</div>
<div class="myComponent">There could be thousands...</div>
```

When the page loads, you would typically have some JavaScript to upgrade all instances of your component to add event handlers, extra elements for style, etc... Then you repeat this process for all the other components you have too.

But wait! What if you now add an instance of your component AFTER the page loaded? I hope you coded a function to upgrade a single element too... What if you call it twice? Does it get double upgraded? Oh no!

This process should be simpler - that is why this design pattern exists. Simply write your component in the same style as the template provided in this repository and then all you need to do is include the JavaScript for your component along with a  component handler (which can be used with all components you make). Like this:

```html
<div class="myComponent">Some magical component</div>
<div class="myComponent">Another instance of magical component</div>
<div class="someOtherComponent">Some other component</div>
<!-- Insert following just before closing <body> tag -->
<script type="text/javascript" src="js/ComponentHandler.js"></script>
<script type="text/javascript" src="js/myComponent.js"></script>
<script type="text/javascript" src="js/someOtherComponent.js"></script>
```

That is it! You are ready to rock. The component handler will automaticlly search for instances of components you imported and upgrade them as required.

If you want to create a new HTMLElement later that needs to be upgraded to any component you have imported you then just do this in JavaScript:

```javascript
// Simply pass a reference to the HTMLElement you want to upgrade along
// with the class name of the component you wish to upgrade it to. It
// will only upgrade an element once for each class type you assign to it.
ComponentHandler.upgradeElement(yourNewHtmlElement, 'myComponent');
```

Simple! Any questions, just ask.

## Why was this made?

I made this for Google's [Material Design Lite](https://github.com/google/material-design-lite "View the project on GitHub!") to ensure code consistency between all components submitted, as well as all the other benefits listed at the top of this readme.
