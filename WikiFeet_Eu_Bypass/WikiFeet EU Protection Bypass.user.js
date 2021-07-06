// ==UserScript==
// @name         WikiFeet EU Protection Bypass
// @namespace    http://github.com/PaaaulZ
// @version      0.1
// @description  Bypass EU GeoBLock
// @author       PaaaulZ
// @match        https://www.wikifeet.com/*
// @icon         https://www.google.com/s2/favicons?domain=wikifeet.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var method = 1;

    // 1: Slideshow
    // 2: Direct link to picture

    var thumbs = document.getElementsByClassName('thumb');
    var pics = document.getElementsByClassName('pic');

    for (var i = 0; i < pics.length; i++)
    {
        var id = thumbs[i].style.backgroundImage.replace('url(\"https:\/\/thumbs.wikifeet.com\/','').replace('\")','');
        switch (method)
        {
            case 1:
                id = id.replace('.jpg','');
                pics[i].getElementsByTagName('a')[0].href = "javascript:SlideByPid(null, " + id + ");";
                pics[i].getElementsByTagName('a')[0].target = "";
                break;
            case 2:
                pics[i].getElementsByTagName('a')[0].href = 'https://pics.wikifeet.com/' + id;
                break;
        }
    }
})();
