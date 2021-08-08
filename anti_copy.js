//<![CDATA[
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
//]]>
