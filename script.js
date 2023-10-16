    // Reload the webflow js script 0.2 seconds after the page has finished loading
	document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        Webflow.require("ix2").init();
    }, 150);
});