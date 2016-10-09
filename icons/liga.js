/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'pencil': '&#xe905;',
            'write': '&#xe905;',
            'image': '&#xe90d;',
            'picture': '&#xe90d;',
            'spades': '&#xe917;',
            'cards': '&#xe917;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'map': '&#xe94b;',
            'guide': '&#xe94b;',
            'drive': '&#xe963;',
            'save3': '&#xe963;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'earth': '&#xe9ca;',
            'globe2': '&#xe9ca;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'smile2': '&#xe9e2;',
            'emoticon4': '&#xe9e2;',
            'tongue2': '&#xe9e4;',
            'emoticon6': '&#xe9e4;',
            'cool2': '&#xe9ec;',
            'emoticon14': '&#xe9ec;',
            'evil2': '&#xe9f0;',
            'emoticon18': '&#xe9f0;',
            'hipster2': '&#xe9fa;',
            'emoticon28': '&#xe9fa;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'onedrive': '&#xeaaf;',
            'brand39': '&#xeaaf;',
            'github': '&#xeab0;',
            'brand40': '&#xeab0;',
            'tux': '&#xeabd;',
            'brand52': '&#xeabd;',
            'android': '&#xeac0;',
            'brand55': '&#xeac0;',
            'firefox': '&#xeada;',
            'browser2': '&#xeada;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
