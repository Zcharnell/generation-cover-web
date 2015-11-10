angular.module('GenCov').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/directives/catalog.tpl.html',
    "<div id=\"catalog\"><ul><li ng-repeat=\"song in list\"><div class=\"song-container\"><div class=\"song-title\">{{song.title}}</div><div class=\"song-artist\">{{song.artist}}</div></div></li></ul></div>"
  );


  $templateCache.put('templates/landing.tpl.html',
    "<div id=\"landing\"><div id=\"hero\"><div class=\"title-container\"><div class=\"pre-title\">New events coming soon</div><div class=\"title\">Generation Cover</div><div class=\"subtitle\">The best cover band</div><span class=\"know-more\">> <span class=\"underline\">Know More</span></span></div></div><div id=\"events-section\"><div class=\"title-container\"><div class=\"subtitle\">Shows and Times</div><div class=\"title\">Events</div></div><div class=\"events\"></div></div><div id=\"about-section\"><div class=\"container\"><div class=\"subtitle\">Generation Cover</div><div class=\"title\">Their Story</div><div class=\"desc\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.<br>Donec interdum at nisl id gravida. Etiam ut rutrum diam.</div><span class=\"know-more\">> <span class=\"underline\">Know More</span></span></div></div><div id=\"songs-section\"><div class=\"title-container\"><div class=\"subtitle\">Songs and covers</div><div class=\"title\">Catalog</div></div><div class=\"catalog\"><catalog list=\"LandingCtrl.catalog\"></catalog></div></div><div id=\"social-section\"><!-- <div class=\"title-container\">\n" +
    "            <div class=\"subtitle\">Catalog of songs</div>\n" +
    "            <div class=\"title\">Songlist</div>\n" +
    "        </div> --><a class=\"social facebook\" href=\"https://www.facebook.com/Generationcover\"></a> <a class=\"social contact\" href=\"mailto:generationcover@gmail.com\"></a> <a class=\"social media\" href=\"https://www.facebook.com/Generationcover/photos_stream\"></a></div></div>"
  );


  $templateCache.put('templates/nav.tpl.html',
    "<div id=\"nav\"><div class=\"container\"><div class=\"nav-container\"><span>Home</span> <span>About</span> <span>Events</span><div class=\"divider\"></div><span>Media</span> <span>News</span> <span>Store</span></div></div><!-- <div class=\"container left\">\n" +
    "\t\t<span class=\"title\">Generation Cover</span>\n" +
    "\t</div>\n" +
    "\t<div class=\"container right\">\n" +
    "\t\t<span>Home</span>\n" +
    "\t\t<span>About</span>\n" +
    "\t\t<span>Events</span>\n" +
    "\t\t<span>Media</span>\n" +
    "\t\t<span>News</span>\n" +
    "\t\t<span>Store</span>\n" +
    "\t</div> --></div>"
  );

}]);
