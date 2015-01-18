// (C) Elia Contini 2015. All right reserved.
// Author: http://blog.eliacontini.info/post/105168451423/eliminate-render-blocking-css
var LazyLoader = {
   add: function(/*Object*/ attr) {
      var linkNode = document.createElement("link");
      for(var key in attr) {
         linkNode.setAttribute(key, attr[key]);
      }
      document.head.appendChild(linkNode);
   }            
};
