(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE HTML>\r\n<!--\r\n\tEditorial by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n-->\r\n<html>\r\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/head.html", false, "elements.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\t<body class=\"is-preload\">\r\n\r\n\t\t<!-- Wrapper -->\r\n\t\t\t<div id=\"wrapper\">\r\n\r\n\t\t\t\t<!-- Main -->\r\n\t\t\t\t\t<div id=\"main\">\r\n\t\t\t\t\t\t<div class=\"inner\">\r\n\r\n\t\t\t\t\t\t\t<!-- Header -->\r\n                            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/header-socialLinks.html", false, "elements.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\r\n\t\t\t\t\t\t\t<!-- Content -->\r\n\t\t\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t\t\t<header class=\"main\">\r\n\t\t\t\t\t\t\t\t\t\t<h1>Elements</h1>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\r\n\t\t\t\t\t\t\t\t\t<!-- Content -->\r\n\t\t\t\t\t\t\t\t\t\t<h2 id=\"content\">Sample Content</h2>\r\n\t\t\t\t\t\t\t\t\t\t<p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing.</p>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Sem turpis amet semper</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Magna odio tempus commodo</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 col-12-medium\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Interdum sapien gravida</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 col-12-medium\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Faucibus consequat lorem</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 col-12-medium\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Accumsan montes viverra</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<hr class=\"major\" />\r\n\r\n\t\t\t\t\t\t\t\t\t<!-- Elements -->\r\n\t\t\t\t\t\t\t\t\t\t<h2 id=\"elements\">Elements</h2>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row gtr-200\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-medium\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Text stuff -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Text</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis is <sup>superscript</sup> text and this is <sub>subscript</sub> text.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFinally, this is a <a href=\"#\">link</a>.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Heading Level 2</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Heading Level 3</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Heading Level 4</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Lists -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Lists</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Unordered</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Dolor etiam magna etiam.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Sagittis lorem eleifend.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Felis dolore viverra.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Alternate</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"alt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Dolor etiam magna etiam.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Sagittis lorem eleifend.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Felis feugiat viverra.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Ordered</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Dolor etiam magna etiam.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Etiam vel lorem sed viverra.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Felis dolore viverra.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Dolor etiam magna etiam.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Etiam vel lorem sed viverra.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>Felis dolore viverra.</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Icons</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"icons\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"icon brands fa-twitter\"><span class=\"label\">Twitter</span></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"icon brands fa-facebook-f\"><span class=\"label\">Facebook</span></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"icon brands fa-instagram\"><span class=\"label\">Instagram</span></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"icon brands fa-github\"><span class=\"label\">Github</span></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"icon brands fa-dribbble\"><span class=\"label\">Dribbble</span></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"icon brands fa-tumblr\"><span class=\"label\">Tumblr</span></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Definition</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<dl>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dt>Item1</dt>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dt>Item2</dt>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dt>Item3</dt>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dd>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</dd>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</dl>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Actions</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary small\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button small\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions stacked\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions stacked\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary small\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button small\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions stacked\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary fit\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button fit\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions stacked\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary small fit\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button small fit\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Pagination</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><span class=\"button disabled\">Prev</span></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page active\">1</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page\">2</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page\">3</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><span>&hellip;</span></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page\">8</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page\">9</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page\">10</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">Next</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Blockquote -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Blockquote</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<blockquote>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.</blockquote>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Table -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Table</h3>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Default</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Price</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Ante turpis integer aliquet porttitor.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>29.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item2</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Vis ac commodo adipiscing arcu aliquet.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>19.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item3</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Morbi faucibus arcu accumsan lorem.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>29.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item4</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Vitae integer tempus condimentum.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>19.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item5</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Ante turpis integer aliquet porttitor.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>29.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>100.00</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Alternate</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"alt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Price</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Ante turpis integer aliquet porttitor.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>29.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item2</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Vis ac commodo adipiscing arcu aliquet.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>19.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item3</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> Morbi faucibus arcu accumsan lorem.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>29.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item4</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Vitae integer tempus condimentum.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>19.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Item5</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Ante turpis integer aliquet porttitor.</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>29.99</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>100.00</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-medium\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Buttons</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary\">Primary</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button large\">Large</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button small\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary large\">Large</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary\">Default</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary small\">Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary fit\">Fit</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button fit\">Fit</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions fit small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary fit small\">Fit + Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button fit small\">Fit + Small</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button primary icon solid fa-search\">Icon</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button icon solid fa-download\">Icon</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><span class=\"button primary disabled\">Primary</span></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><span class=\"button disabled\">Default</span></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Form -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Form</h3>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form method=\"post\" action=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row gtr-uniform\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-xsmall\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"demo-name\" id=\"demo-name\" value=\"\" placeholder=\"Name\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-xsmall\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"demo-email\" id=\"demo-email\" value=\"\" placeholder=\"Email\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select name=\"demo-category\" id=\"demo-category\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">- Category -</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Manufacturing</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Shipping</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Administration</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Human Resources</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"demo-priority-low\" name=\"demo-priority\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo-priority-low\">Low</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"demo-priority-normal\" name=\"demo-priority\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo-priority-normal\">Normal</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"demo-priority-high\" name=\"demo-priority\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo-priority-high\">High</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"demo-copy\" name=\"demo-copy\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo-copy\">Email me a copy</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-6 col-12-small\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"demo-human\" name=\"demo-human\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"demo-human\">I am a human</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"demo-message\" id=\"demo-message\" placeholder=\"Enter your message\" rows=\"6\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><input type=\"submit\" value=\"Send Message\" class=\"primary\" /></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><input type=\"reset\" value=\"Reset\" /></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Image -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Image</h3>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Fit</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"image fit\"><img src=\"images/pic11.jpg\" alt=\"\" /></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box alt\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row gtr-50 gtr-uniform\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic01.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic02.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic03.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic03.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic01.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic02.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Break -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic02.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic03.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/pic01.jpg\" alt=\"\" /></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Left &amp; Right</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"image left\"><img src=\"images/pic01.jpg\" alt=\"\" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"image right\"><img src=\"images/pic02.jpg\" alt=\"\" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Box -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Box</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Preformatted Code -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Preformatted</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<pre><code>i = 0;\r\n\r\nwhile (!deck.isInOrder()) {\r\n    print 'Iteration ' + i;\r\n    deck.shuffle();\r\n    i++;\r\n}\r\n\r\nprint 'It took ' + i + ' iterations to sort the deck.';\r\n</code></pre>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- Sidebar & Footer -->\r\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/sidebar-footer.html", false, "elements.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\r\n\t\t\t</div>\r\n\r\n\t\t<!-- Scripts -->\r\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/scripts.html", false, "elements.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\r\n\t</body>\r\n</html>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
