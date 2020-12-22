# Blocks Sizing

Appends a label with size to elements matched by a CSS selector, defaults to immediate children of `.sizing`.
 * Default labels contains width and height and are floated to the right.
 * Responsive 

Sample on big screen

![Sample on big screen](images/big-screen.png) 

Sample on small screen

![Sample on small screen](images/small-screen.png)

Default with `zIndex` parameter as `true`

![Sample with z-index](images/z-index.png)

## Installation

Just add `sizing.js` to your project, it will match by default all parent containers with `.sizing` class.
`
<div class="sizing">
	<div class="child"></div>
	<div class="child"></div>
	<div class="child"></div>
	<!-- and so on... ->
</div>
`

You can provide another CSS selector using the `Sizing(<selector>)` initialiser.

Optionally, add `sizing.css` stylesheet, it sets default styling for size labels.

###Custom parent selector

**HTML**
`
<div class="parent">
	<div class="child"></div>
	<div class="child"></div>
	<div class="child"></div>
	<!-- and so on... ->
</div>
`

**JS**

`
Sizing('.parent');
`

## Usage
The Sizing function has the following signature
 
`Sizing(<CSS selector>, [zIndex])`

Where

`<CSS selector>` **string**: any CSS selector

`zIndex` **boolean** *optional*: adds `z-index` value to the labels.

Thank's.
  
