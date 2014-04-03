define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';
            feeds["news"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';    
            feeds["teaching-and-learning"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=2&format=raw';    
            feeds["student-supports"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=3&format=raw'; 
            feeds["student-leadership"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=4&format=raw'; 
            feeds["prospectus"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=5&format=raw'; 

            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});