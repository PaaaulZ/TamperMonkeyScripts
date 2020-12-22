// ==UserScript==
// @name         Easy Instragram Post downloader
// @namespace    https://github.com/PaaaulZ
// @version      0.1
// @description  Download photo in a single click
// @author       PaaaulZ
// @match        https://www.instagram.com/
// @run-at       context-menu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     if (window.location.href.includes('/p/'))
     {
             var imageId = window.location.href.replace('https://www.instagram.com','');
             window.location.href = window.__additionalData[imageId].data.graphql.shortcode_media.display_url;
     }
     else
     {
         alert("Cannot find image, you need to open in a new tab. URL must be like https://www.instagram.com/p/xxxxxxxxx");
     }
})();