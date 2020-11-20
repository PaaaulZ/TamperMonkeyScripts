// ==UserScript==
// @name         Twitch Auto Redeem Points
// @namespace    http://paaaulz.altervista.org/
// @version      0.1
// @description  Automatically Redeems Twitch points (chests)
// @author       PaaaulZ
// @match        https://www.twitch.tv/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function redeem()
    {
        if (document.getElementsByClassName('tw-button tw-button--success tw-interactive').length > 0)
        {
            document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0].click();
            console.log('[TARC] Redeemed');
        }
    }

    window.setInterval(
        function()
        {
            redeem();
        }, 15000);
})();