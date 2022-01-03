/* Data Layer declaration */
window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}
/* Get Cookie */
function getCookie(c_name) {
	var c_value = " " + document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value;
}
/* Use your Iubenda Policy ID */
var iubCookie = JSON.parse(getCookie('_iub_cs-000000'));
var consentCommand;

if (!iubCookie) {
	consentCommand = 'default'
} else {
	consentCommand = 'update'; 
	var analyticsPref = iubCookie.purposes[4],
	adsPref = iubCookie.purposes[5],
	personalizationPref = iubCookie.purposes[3];
}
/* Update Consent Mode options*/
gtag('consent', consentCommand, {
	'ad_storage': adsPref ?'granted':'denied',
	'analytics_storage': analyticsPref ?'granted':'denied',
	'personalization_storage': personalizationPref ?'granted':'denied'
});

/* Tag Manager or GTAG  - Change the ID */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.'+'js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-000000');


gtag('js', new Date());
gtag('config', 'UA-00000');
gtag('config', 'AW-00000');
gtag('config', 'G-00000');
