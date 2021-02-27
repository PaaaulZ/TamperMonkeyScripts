// ==UserScript==
// @name         Roll20 english abilities
// @namespace    https://github.com/PaaaulZ
// @version      0.1
// @description  Shows roll20 abilities in english
// @author       PaaaulZ
// @match        https://app.roll20.net/
// @run-at       context-menu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    for (var i = 0; i < document.getElementsByClassName('sheet-table-header-left').length; i++)
    {
        var index = 0;
        if ((i >= 20 && i <= 32) || (i >= 39 && i <= 49))
        {
            index = 1;
        }
        else
        {
            index = 0;
        }
        var abilityName = document.getElementsByClassName('sheet-table-header-left')[i].childNodes[index].dataset.i18n;
        var abilityTag = "attr_" + abilityName + "classskill";
        document.getElementsByClassName('sheet-table-header-left')[i].childNodes[index].innerText = " " + capitalizeFirstLetter(abilityName);
        document.getElementsByName(abilityTag)[0].style.marginRight = '5px';
        if (abilityName == 'use-rope')
        {
            break;
        }
    }

    function capitalizeFirstLetter(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
})();