// ==UserScript==
// @name         YouTube original title
// @namespace    https://github.com/PaaaulZ
// @version      0.1
// @description  Restore original titles instead of YouTube's translation.
// @author       PaaaulZ
// @include      https://www.youtube.com/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    // Need to keep lastURL to check if Ajax changed the page and we didn't notice
    var lastURL = document.URL;
    'use strict';
    changedURL();

    function changedURL()
    {
        if (document.URL != lastURL)
        {
            // If Ajax changed the URL wait a couple seconds for the page to load and re-check for titles to change
            lastURL = document.URL;
            setTimeout(function() { (new MutationObserver(check)).observe(document, {childList: true, subtree: true}); }, 3000);
        }
        setTimeout(changedURL, 300);
    }

    (new MutationObserver(check)).observe(document, {childList: true, subtree: true});

    function check(changes, observer) {
        if(document.querySelector('.title.style-scope.ytd-video-primary-info-renderer')) {
            observer.disconnect();
            replaceTitle();
        }
    }

    function replaceTitle()
    {
        var titleParentDOM = document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0];
        var titleDOM = titleParentDOM.children[0];
        var originalTitle = document.title.replace(" - YouTube","");
        titleDOM.innerText = "";
        titleDOM.innerText = originalTitle;
    }

})();
