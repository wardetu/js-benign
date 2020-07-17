(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-1244922-1',{storage:'none',storeGAC:!1});ga('set','anonymizeIp',!0);ga('set','forceSSL',!0);ga('send','pageview');!function(){var e=window,t=e.document,n=t.documentElement
t.createElementNS&&t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")&&(!e.opera||-1!==navigator.userAgent.indexOf("Chrome"))&&(n.className+=n.className?" svg":"svg")}();"ontouchend"in window&&document.addEventListener("touchstart",function(){},!0);var platform_icons=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var r=t.document.createElement("link"),a=t.document.getElementsByTagName("script")[0],href=e[o&&n?0:o?1:2],sheets=t.document.styleSheets;r.rel="stylesheet",r.href=href,r.media="only x",a.parentNode.insertBefore(r,a);function toggleMedia(){var defined;for(var i=0;i<sheets.length;i++){if(sheets[i].href&&sheets[i].href.indexOf(href)>-1){defined=true;}}
if(defined){r.media="all";}
else{setTimeout(toggleMedia);}}
toggleMedia();},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
platform_icons([ "https://static.addtoany.com/css/picons.2.svg.css", "https://static.addtoany.com/css/picons.2.png.css", "https://static.addtoany.com/css/picons.2.old.css" ]);
(function(doc){
	function show(plat) {
		doc.addEventListener('DOMContentLoaded', function(e) {
			doc.getElementById('addons-main').style.display = 'block';
				doc.getElementById(plat + '-addon').style.display = 'block';
		});
	}
	var ua = navigator.userAgent;
	if (/Chrome/.test(ua) && ! /Edge/.test(ua) ) {
		show('chrome');
	} else if (/Firefox/.test(ua)) {
		show('firefox');
	} else if (/iPhone|iPad|iPod/.test(ua) && ! window.MSStream) {
		show('ios');
	}
})(document)

	function install_chrome_extension(event) {
		if (chrome && chrome.webstore) {
			chrome.webstore.install();
			event.preventDefault();
		}
	}

	