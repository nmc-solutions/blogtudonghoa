//replace image comment
var oldSrc = &#39;//resources.blogblog.com/img/blank.gif&#39;; //Default blogger image link
var newSrc = &#39;//4.bp.blogspot.com/-bixp2dJnPTA/YG0ybBAYcrI/AAAAAAAAEec/Oa6j_F309e8Dib7se_TRn5ZdXg8b_edtgCK4BGAYYCw/w80/user_btdh.png&#39;; //New image link
$(&#39;img[src=&quot;&#39; + oldSrc + &#39;&quot;]&#39;).attr(&#39;src&#39;, newSrc);
$(&#39;span[style=&quot;&#39; + oldSrc_1 + &#39;&quot;]&#39;).attr(&#39;src&#39;, newSrc_1);

