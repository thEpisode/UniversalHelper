﻿/*----------

// Authors: Camilo Rodríguez
// Last Modification: 22/10/2014
// Version: 0.0.0.1

----------*/

var UniversalHelper = (function () {

    this.reloadPage = function () {
        window.location.reload();
    }

    this.cleanInputs= function (selectors) {
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).val('');
        }
    }

    this.cleanTable= function (selectorTable) {
        $(selectorTable).find('tbody>tr').remove();
    }

    this.cleanSelect = function (selectorSelectTag) {
        $(selectorSelectTag).find('option').remove();
    }

    this.showElements= function (selectors) {
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).show();
        }
    }

    this.slideOut = function (selector){
        $(selector).animate({ "left": "-=500px" }, "fast", "easein" );
        $(selector).fadeIn(100);
    }

    this.hideElements = function (selectors) {
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).hide();
        }
    }

    this.navigateTo = function (data) {
        window.location.assign(data);
    }

    /// Function used for generate internal exceptions into library
    /// Usage: 
    ///
    /// internalException = new InternalException(agent + " is not defined.");
    /// throw internalException;
    function InternalException(message) {
       throw message; 
    }

    return (this);

}).call({});