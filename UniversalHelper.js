/*----------

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

    this.cleanSelect = function (selectors) {
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).find('option').remove();
        };
        
    }

    this.showElements= function (selectors) {
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).show();
        }
    }

    this.hideElements = function (selectors) {
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).hide();
        }
    }

    this.enableElements = function(selectors){
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).prop('disabled', false);            
        }
    }

    this.disableElements = function(selectors){
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).prop('disabled', true);            
        }
    }

    this.slideOut = function (selector){
        $(selector).animate({ "left": "-500px" }, { duration: 500, queue: false }, "easeOutExpo" );
        $(selector).fadeOut(200);
    }

    this.slideIn = function (selector){
        $(selector).css("left", "500px");

        $(selector).animate({ "left": "0px" }, { duration: 200, queue: false }, "easeOutExpo" );
        $(selector).fadeIn(500);
    }

    this.navigateTo = function (data) {
        window.location.assign(data);
    }

    this.validateRegularExpression = function(expression, message){
        var pattern = new RegExp(expression)
        return pattern.test(message);
    }

    /// Function used for generate internal exceptions into library
    /// Usage: 
    ///
    /// internalException = new InternalException(agent + " is not defined.");
    /// throw internalException;
    function InternalException(message) {
       throw message; 
    }

    this.GPSWatcher = function () {
        options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };

        if ("geolocation" in navigator) {
            /* geolocation is available */
            var watchID = navigator.geolocation.watchPosition(function (position) {
                $(document).trigger("GPSPositionChanged", [position.coords.latitude, position.coords.longitude]);
            }, function (err) {
                $(document).trigger('GPSMessage', 'Usted debe habilitar el GPS para usar esta aplicación.');
            }, options);
        } else {
            /* geolocation IS NOT available */
            $(document).trigger('GPSMessage', 'Su dispositivo no soporta GPS, por lo tanto no podrá usar esta aplicación.');
        }
    }

    return (this);

}).call({});