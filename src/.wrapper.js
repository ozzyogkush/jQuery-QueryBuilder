(function(root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery', 'dot/doT', 'jquery-extendext'], factory);
    }
    else {
        factory(root.jQuery, root.doT);
    }
}(this, function($, doT) {
"use strict";

@@js

}));