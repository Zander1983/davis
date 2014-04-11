define(function (require) {

    "use strict";

    var Backbone            = require('backbone'),
      
    
        DeviceNotification = Backbone.Model.extend({  

            urlRoot: "/devicenotification",   

        });



    return {
        DeviceNotification: DeviceNotification
    };

});