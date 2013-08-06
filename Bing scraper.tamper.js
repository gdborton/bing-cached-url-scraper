// ==UserScript==
// @name       Bing scraper
// @namespace  http://www.garyborton.com
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js
// @version    1.0
// @description  Prints bing cache url for all search results on page to the console.
// @match      http://www.bing.com/*
// @copyright  2013+, Gary Borton
// ==/UserScript==
 
$(document).ready(function(){
    $('.sa_cc').each(
        function(index, element){
            var totalString = "";
            totalString = $(element).attr('u');
            if(totalString !== "" && totalString) {
                var attr = totalString.split('|');
                var link = "http://cc.bingj.com/cache.aspx" + location.search.split('&')[0] + "&d=" + attr[2] + "&mkt=en-US&setlang=en-US&w=" + attr[3];
                console.log(link);
            }
        }
    );
});