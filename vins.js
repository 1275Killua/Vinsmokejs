// View counter
$.each($(".post-view[data-id]"),function(c,f){var b=$(f).parent().find("#postviews").addClass("view-load"),d=new Firebase("https://nimeview-count-default-rtdb.firebaseio.com/pages/id"+$(f).attr("data-id"));d.once("value",function(e){var h=e.val(),g=!1;null==h&&(h={},h.value=0,h.url=window.location.href,h.id=$(f).attr("data-id"),g=!0),b.removeClass("view-load").text(h.value),h.value++,"/"!=window.location.pathname&&(g?d.set(h):d.child("value").set(h.value))})});

(function () {
  const e = document.querySelectorAll(".DagPlayOpt");
  e.length > 0 && (e.forEach(t => {
    t.addEventListener("click", function (t) {
      const n = t.currentTarget,
        c = n.dataset.embed;
      document.querySelector("#pembed iframe").src = c, document.querySelector("#pembed iframe").contentWindow.location.replace(c), e.forEach(e => e.classList.remove("on")), n.classList.add("on");
      const o = document.querySelectorAll(".resIn");
      o.length > 0 && o.forEach(e => {
        e.id == n.dataset.id ? e.style.display = "block" : e.style.display = "none"
      })
    })
  }), e[0].click());
  const t = document.getElementById("shadow"),
    n = document.querySelector(".DagLight");
  t && n && (t.style.display = "none", n.addEventListener("click", function (e) {
    const n = e.currentTarget;
    t.style.height = document.body.scrollHeight, "none" == t.style.display ? (n.querySelector("span").innerHTML = "Turn on Light", n.classList.add("turnedOff"), t.style.display = "block") : (n.querySelector("span").innerHTML = "Turn off Light", n.classList.remove("turnedOff"), t.style.display = "none")
  }));
  const c = document.querySelector(".DagShre");
  c.addEventListener("click", function (e) {
    const t = document.querySelector(".gta-ms");
    t && t.classList.toggle("expand")
  })
})();

  function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("serverEpisode");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("serverOpen").click();

jQuery.timeago.settings.allowFuture = !0;
$(document).ready(function() {
  $("time.timeago").addClass("post-timestamp").timeago();
  $("abbr.timeago").addClass("post-timestamp").timeago();
}),
function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && "object" == typeof module.exports ? e(require("jquery")) : e(jQuery)
}(function(e) {
  e.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "yang lalu",
    suffixFromNow: "dari sekarang",
    seconds: "New",
    minute: "1 menit",
    minutes: "%d menit",
    hour: "1 jam",
    hours: "%d jam",
    day: "1 hari",
    days: "%d hari",
    month: "1 bulan",
    months: "%d bulan",
    year: "± setahun",
    years: "%d tahun"
  }
});

// SliderOption
$(document).ready(function(){$(".owl_carouselle").owlCarousel({autoplay:true,loop:true,lazyLoad:true,dots:true,video:true,smartSpeed:1200,responsiveClass:true,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})});

/* ----
  Web Blog Bookmark With Browser Local Storage
  Created by: igniel.com
  Source code: https://www.igniel.com/2022/12/widget-bookmark-blog.html
---- */
const bookmarks = {
  maxWidget: 5,
  maxAll: 100,
  emptyText: 'Tidak ada bookmark',
  moreText: 'Lihat selengkapnya',
  currentText: 'Anda sedang melihat halaman bookmark',
  morePage: '/p/bookmark.html',
  deleteText: '<svg viewBox="0 0 24 24"><path d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542"/><path d="M20.3651 6.47985H4.2146"/><path d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983"/></svg>'
};
/* DO NOT EDIT */
!function(d){let ignielbookmark = JSON.parse(localStorage.getItem("ignielBookmark")) || []; d.querySelector(".ignielBookmark").querySelector("i").innerHTML = ignielbookmark.length; const bmCek = () => {if (ignielbookmark.length > 0){ignielbookmark.forEach((e) => {if (d.getElementById("bm-" + e.id)) {d.getElementById("bm-" + e.id).checked = true;}});}}; const bmRender = () => {localStorage.setItem("ignielBookmark", JSON.stringify(ignielbookmark)); d.querySelector(".ignielBookmark").querySelector("i").innerHTML = ignielbookmark.length; let bmContainer = d.querySelector(".bookmark-inner"), bmContainerAll = d.querySelector(".ignielBookmarks"), bmBuild = ""; if (ignielbookmark.length > 0) {let max = bookmarks.maxWidget, more = false; if (d.location.pathname == bookmarks.morePage) {max = bookmarks.maxAll;} else {max = bookmarks.maxWidget; if (ignielbookmark.length > max) {more = true;}} ignielbookmark.slice(0, max).forEach((e) => {bmBuild += '<li data-id="' + e.id + '"><div class="bm-thumb"><a href="' + e.url + '" title="' + e.title + '"><img alt="' + e.title + '" src="' + e.img + '" title="' + e.title + '"></a></div><div class="bm-title"><a href="' + e.url + '" title="' + e.title + '">' + e.title + '</a></div><div class="bm-delete" role="button">' + bookmarks.deleteText + "</div>";}); bmContainer.innerHTML += "</ul>"; if (d.location.pathname == bookmarks.morePage) {bmContainer.innerHTML = bookmarks.currentText; if (bmContainerAll) bmContainerAll.innerHTML = "<ul>" + bmBuild + "</ul>";} else {bmContainer.innerHTML = "<ul>" + bmBuild; if (more) {bmContainer.innerHTML += '<li class="bm-more"><a href="' + bookmarks.morePage + '" title="' + bookmarks.moreText + '">' + bookmarks.moreText + " (+" + (ignielbookmark.length - max) + ")</a></li>";}}} else {bmContainer && (bmContainer.innerHTML = bookmarks.emptyText); bmContainerAll && (bmContainerAll.innerHTML = bookmarks.emptyText);} bmDel();}; const bmAdd = (a) => {ignielbookmark.push(a); bmRender();}; const bmRem = (id) => {ignielbookmark = ignielbookmark.filter((obj) => obj.id !== id); bmRender(); if (d.getElementById("bm-" + id)) {d.getElementById("bm-" + id).checked = false;}}; const bmDel = () => {const a = d.querySelectorAll(".bm-delete"); if (a.length > 0) {a.forEach((e) => {const dId = e.parentNode.getAttribute("data-id"); e.addEventListener("click", () => {bmRem(dId);});});}}; const ignielBookmark = () => {const a = d.querySelectorAll(".ignielBookmarkPost input"); if (a.length > 0) {a.forEach((e) => {e.addEventListener("change", () => {const bmId = e.id.split("-")[1], bmParent = e.parentNode, bookmarkItem = {id: bmId, img: bmParent.querySelector("label").getAttribute("data-img"), title: bmParent .querySelector("label") .getAttribute("data-title"), url: bmParent.querySelector("label").getAttribute("data-url"),}; if (ignielbookmark) {const findId = ignielbookmark.find((obj) => obj.id === bmId); if (findId) {bmRem(bmId);} else {bmAdd(bookmarkItem);}} else {bmAdd(bookmarkItem);}});});}}; d.location.pathname == bookmarks.morePage && bmRender(); d.querySelector(".ignielBookmark").addEventListener("click", () => {bmRender();}); d.addEventListener("scroll", () => {bmCek; ignielBookmark}); ignielBookmark(); bmCek();}(document);

!function(a){a.fn.BloggerDynamicSlider=function(b){var c=a.extend({blogURL:"",labelName:"Complete",maxItem:9,showPostTitle:!0,postTitleStyle:"overlayLight",imageWidth:728,imageHeight:480,animation:"slide",controlNav:!0,directionNav:!0,pauseOnHover:!1,slideshowSpeed:7e3,animationSpeed:600,animationLoop:!0},b);return this.each(function(){var b=a(this),d=b.attr("id"),e=c.blogURL+"/feeds/posts/summary/"+(0==c.labelName.length?"":"-/"+c.labelName.replace(/\,(\s+)?/g,"/"))+"?max-results="+c.maxItem+"&orderby=published&alt=json-in-script";a.ajax({type:"GET",url:e,async:!1,contentType:"application/json",dataType:"jsonp",success:function(a){var f,g,h,i,j,k,l,m,n,o,p,q,r,e=a.feed.entry||[];for(f="",f+='<div class="flexslider loading" style="max-width:100%">',f+='<ul class="slides">',g=0;g<e.length;++g){for(i=e[g],j=i.title.$t,k=i.media$thumbnail?i.media$thumbnail.url:"https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s72-c/nothumb_large.png",l=k.replace("s72-c","w"+c.imageWidth).replace(/.*?:\/\//g , "//"),m=i.link||[],h=0;h<m.length&&"alternate"!=m[h].rel;++h);n=m[h].href,o='<img src="'+l+'" width="'+c.imageWidth+'" height="'+c.imageHeight+'"/>',p=c.showPostTitle?'<p class="flex-caption'+("default"==c.postTitleStyle?"":" "+c.postTitleStyle)+'"><span>'+j+"</span></p>":"",r='<div class="overlay"></div>',q='<a href="'+n+'" target="_blank">'+o+p+"</a>",f+="<li>"+q+r+"</li>"}f+="</ul></div>",f+='<style type="text/css">#'+d+" .flexslider.loading {min-height:"+c.imageHeight+"px !important;}</style>",b.append(f)},error:function(a,c,d){b.append('<div class="error"><p>No Result! Or Error Loading Feed</p></div')},complete:function(){a("#"+d+" .flexslider").flexslider({animation:c.animation,controlNav:c.controlNav,directionNav:c.directionNav,pauseOnHover:c.pauseOnHover,slideshowSpeed:c.slideshowSpeed,animationSpeed:c.animationSpeed,animationLoop:c.animationLoop});var b=a("#"+d+" .flexslider ul.slides li a img"),e=0;b.on("load",function(){if(e++,e==b.length-1){var c=a("#"+d+" .flexslider").data("flexslider");c.animating=!1,c.flexAnimate(0),a("#"+d+" .flexslider").removeClass("loading")}})}})})}}(jQuery);
$(document).ready(function() {
    $("#slider1").BloggerDynamicSlider({
    });
});


var postResults=postPerPage;
var numOfPages=2;
var pageOf=["Page", "of"];
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 K;5 m;5 l;5 w;5 s=1p.9;5 y="/";1d();G 1b(a){5 b=\'\';J=M(W/2);4(J==W-J){W=J*2+1}D=l-J;4(D<1)D=1;j=M(a/n)+1;4(j-1==a/n)j=j-1;E=D+W-1;4(E>j)E=j;b+=\'<C 6="3-1u">\'+17[0]+\' \'+l+\' \'+17[1]+\' \'+j+\'</C>\';5 c=M(l)-1;4(l>1){4(l==2){4(m==\'3\'){b+=\'<a 6="3-7 3-U" 9="\'+y+\'"></a>\'}h{b+=\'<a 6="3-7 3-U" 9="/v/u/\'+w+\'?&i-o=\'+n+\'"></a>\'}}h{4(m==\'3\'){b+=\'<a 6="3-7 3-U" 9="#" z="L(\'+c+\');B x"></a>\'}h{b+=\'<a 6="3-7 3-U" 9="#" z="I(\'+c+\');B x"></a>\'}}}4(D>1){4(m=="3"){b+=\'<a 6="3-7" 9="\'+y+\'">1</a>\'}h{b+=\'<a 6="3-7" 9="/v/u/\'+w+\'?&i-o=\'+n+\'">1</a>\'}}4(D>2){b+=\'<C 6="3-7 3-16">...</C>\'}1a(5 d=D;d<=E;d++){4(l==d){b+=\'<C 6="3-7 3-1v">\'+d+\'</C>\'}h 4(d==1){4(m==\'3\'){b+=\'<a 6="3-7" 9="\'+y+\'">1</a>\'}h{b+=\'<a 6="3-7" 9="/v/u/\'+w+\'?&i-o=\'+n+\'">1</a>\'}}h{4(m==\'3\'){b+=\'<a 6="3-7" 9="#" z="L(\'+d+\');B x">\'+d+\'</a>\'}h{b+=\'<a 6="3-7" 9="#" z="I(\'+d+\');B x">\'+d+\'</a>\'}}}4(E<j-1){b+=\'<C 6="3-7 3-16">...</C>\'}4(E<j){4(m=="3"){b+=\'<a 6="3-7" 9="#" z="L(\'+j+\');B x">\'+j+\'</a>\'}h{b+=\'<a 6="3-7" 9="#" z="I(\'+j+\');B x">\'+j+\'</a>\'}}5 e=M(l)+1;4(l<j){4(m==\'3\'){b+=\'<a 6="3-7 3-15" 9="#" z="L(\'+e+\');B x"></a>\'}h{b+=\'<a 6="3-7 3-15" 9="#" z="I(\'+e+\');B x"></a>\'}}b+=\'\';5 f=A.1s(\'1t\');5 g=A.1r(\'1A-1D\');1a(5 p=0;p<f.O;p++){f[p].1c=b}4(f&&f.O>0){b=\'\'}4(g){g.1c=b}}G 12(a){5 b=a.1f;5 c=M(b.1E$1B.$t,10);1b(c)}G 1d(){5 a=s;4(a.k(\'/v/u/\')!=-1){4(a.k(\'?T-i\')!=-1){w=a.H(a.k(\'/v/u/\')+14,a.k(\'?T-i\'))}h{w=a.H(a.k(\'/v/u/\')+14,a.k(\'?&i\'))}}4(a.k(\'?q=\')==-1&&a.k(\'.1C\')==-1){4(a.k(\'/v/u/\')==-1){m=\'3\';4(s.k(\'#F=\')!=-1){l=s.H(s.k(\'#F=\')+8,s.O)}h{l=1}A.18(\'<r Q=\\\'\'+y+\'P/R/N?i-o=1&X=Y-S-r&V=12\\\'><\\/r>\')}h{m=\'u\';4(a.k(\'&i-o=\')==-1){n=1F}4(s.k(\'#F=\')!=-1){l=s.H(s.k(\'#F=\')+8,s.O)}h{l=1}A.18(\'<r Q="\'+y+\'P/R/N/-/\'+w+\'?X=Y-S-r&V=12&i-o=1" ><\\/r>\')}}}G L(a){Z=(a-1)*n;K=a;5 b=A.1h(\'1q\')[0];5 c=A.1o(\'r\');c.1e=\'1m/1n\';c.1i(\'Q\',y+\'P/R/N?1j-1k=\'+Z+\'&i-o=1&X=Y-S-r&V=13\');b.1l(c)}G I(a){Z=(a-1)*n;K=a;5 b=A.1h(\'1q\')[0];5 c=A.1o(\'r\');c.1e=\'1m/1n\';c.1i(\'Q\',y+\'P/R/N/-/\'+w+\'?1j-1k=\'+Z+\'&i-o=1&X=Y-S-r&V=13\');b.1l(c)}G 13(a){11=a.1f.1x[0];5 b=11.1g.$t.H(0,19)+11.1g.$t.H(1z,1w);5 c=1y(b);4(m==\'3\'){5 d=\'/v?T-i=\'+c+\'&i-o=\'+n+\'#F=\'+K}h{5 d=\'/v/u/\'+w+\'?T-i=\'+c+\'&i-o=\'+n+\'#F=\'+K}1p.9=d}',62,104,'|||page|if|var|class|num||href||||||||else|max|lastPageNo|indexOf|currentPageNo|currentPage|postResults|results|||script|locationUrl||label|search|postLabel|false|home_page|onclick|document|return|span|pageStart|pageEnd|PageNo|function|substring|getLabelPage|pageNumber|noPage|getPage|parseInt|summary|length|feeds|src|posts|in|updated|prev|callback|numOfPages|alt|json|jsonstart||post|dataFeed|findPostDate||next|dots|pageOf|write||for|startPagination|innerHTML|pageCurrentBlogger|type|feed|published|getElementsByTagName|setAttribute|start|index|appendChild|text|javascript|createElement|location|head|getElementById|getElementsByName|pageArea|of|active|29|entry|encodeURIComponent|23|blog|totalResults|html|pager|openSearch|20'.split('|'),0,{}))


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

 
 