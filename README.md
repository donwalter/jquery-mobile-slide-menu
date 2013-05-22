jQuery Mobile Slide Menu
------------------------
This is a simple side aligned sliding menu for jQuery Mobile. You can access the menu either by hitting the menu icon or by swiping your finger from left to right, to slide the menu out. Likewise, you can hide it with the menu icon, or by swiping your finger from right to left to slide the menu back in.

Usage
-----
Include the following files:
```html
<link rel="stylesheet" href="css/jquery-mobile-slide-menu.css" type="text/css" />
<script type="text/javascript" src="js/jquery-mobile-slide-menu.js"></script>
```

Then insert your menu, before your `<div data-role="page">` tag:
```html
<div id="side-menu">
	<ul>
		<li><a href="/">Main</a><span class="icon"></span></li>
		<li><a href="/page-2/">Page 2</a><span class="icon"></span></li>
		<li><a href="/page-3/">Page 3</a><span class="icon"></span></li>
		<li><a href="/page-4/">Page 4</a><span class="icon"></span></li>
	</ul>
</div>
```

Then add this to initiate the menu:
```javascript
$(function(){
	$('#side-menu').slideMenu();
});
```

Demo
----
Can also be seen at http://jsfiddle.net/gh/gist/jquery/1.9.1/5624435/ or in `index.html`

License
-------
Copyright (c) 2013 Don Walter. Licensed under the MIT license.