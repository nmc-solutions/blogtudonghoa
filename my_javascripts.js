
//replace image comment

var oldSrc = &#39;//resources.blogblog.com/img/blank.gif&#39;; //Default blogger image link
var newSrc = &#39;//4.bp.blogspot.com/-bixp2dJnPTA/YG0ybBAYcrI/AAAAAAAAEec/Oa6j_F309e8Dib7se_TRn5ZdXg8b_edtgCK4BGAYYCw/w80/user_btdh.png&#39;; //New image link
$(&#39;img[src=&quot;&#39; + oldSrc + &#39;&quot;]&#39;).attr(&#39;src&#39;, newSrc);
$(&#39;span[style=&quot;&#39; + oldSrc_1 + &#39;&quot;]&#39;).attr(&#39;src&#39;, newSrc_1);

  
//Anti Copy and View Source
  
 var options = {
  enableAlert: true, // Set this false to deactivate alert
  alertText: &quot;Xin lỗi, Blog đã tắt chức năng này !&quot; // Customize this to change alert text
}
   // To disable right click
document.addEventListener(&quot;contextmenu&quot;, function (e) {
  e.preventDefault();
  if(options.enableAlert) {
    alert(options.alertText);
  }
});

   // To disable F12 options
document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
alert(options.alertText);
return false;
}
}
document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
alert(options.alertText);
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
alert(options.alertText);
return false;
}
}
// To To Disable ctrl+c, ctrl+u
jQuery(document).ready(function($){
$(document).keydown(function(event) {
var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
if (event.ctrlKey &amp;&amp; (pressedKey == &quot;c&quot; || pressedKey == &quot;u&quot;)) {
alert(options.alertText);
return false;
}
});
});

// REMOVE M=1
var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&amp;m=1","&amp;m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&amp;m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
//

