 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (JSON, Math, blockLoader, cssLoader, decache, escape, scriptLoader, version) {;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";













;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cbase href=\"..\u002F\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap.custom/css/bootstrap.min.css");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.css");
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldiconfont/dev/ldif.min.css");
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Mono");
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldcover/main/ldcv.min.css");
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("css/index.css");
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Rubik:wght@300;400;500&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto:wght@300;500&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "html,\nbody {\n  font-size: 14px;\n  font-family: roboto;\n  font-weight: 400;\n  width: 100%;\n  height: 100%;\n  color: #404244;\n}\ni {\n  font-size: 16px;\n}\n.navtop i {\n  font-size: 24px;\n}\n.root {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-template-rows: 64px 1fr;\n}\n.side-menu .item {\n  cursor: pointer;\n  padding: 0.7em 2em;\n  display: flex;\n  align-items: center;\n}\n.side-menu .item.active {\n  background: #f2f5ff;\n  border-radius: 0 2em 2em 0;\n  color: #00f;\n}\n.photo {\n  background: #ccc;\n  margin: 0 5px 5px 0;\n  height: 250px;\n}\n.albums {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(120px, 1fr));\n  gap: 40px;\n}\n.album-cats {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(60px, 1fr));\n  gap: 40px;\n}\nb {\n  font-weight: bold;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 root h-100\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"border-bottom w-100 h-100 d-flex align-items-center\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-4\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "Google 相簿\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"navtop border-bottom w-100 h-100 d-flex align-items-center\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control bg-light border-0 w-100\" placeholder=\"搜尋陽明山國家公園 ... \" style=\"padding:1.5em 1em\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-4\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-upload\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "上傳\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-4\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-question\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-4\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-gear\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-4\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-bars\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"side-menu w-100 h-100\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-4 pr-4 position-relative h-100\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"item active\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-4 text-lg\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "相片\u003C\u002Fspan\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate ["共享"]
;(function(){
  var $$obj = ["共享"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var name = $$obj[pug_index0];
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"item\" ld=\"photo-sitelink\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-4 text-lg\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var name = $$obj[pug_index0];
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"item\" ld=\"photo-sitelink\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-4 text-lg\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-4 pl-4 text-sm\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "相片庫\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate ["相簿","實用工具","封存","垃圾桶"]
;(function(){
  var $$obj = ["相簿","實用工具","封存","垃圾桶"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var name = $$obj[pug_index1];
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"item\" ld=\"album-sitelink\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-4 text-lg\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var name = $$obj[pug_index1];
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"item\" ld=\"album-sitelink\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-doc mr-4 text-lg\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute text-sm p-4\" style=\"bottom:0\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "隱私權\u003C\u002Fa\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "&nbsp;．&nbsp;\u003C\u002Fspan\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "條款\u003C\u002Fa\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "&nbsp;．&nbsp;\u003C\u002Fspan\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "政策\u003C\u002Fa\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "&nbsp;．&nbsp;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 overflow-hidden\" ld=\"photo-panel\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 pt-4 pb-4 pr-4\" style=\"overflow:scroll\"\u003E";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var i = $$obj[pug_index2];
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-2\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "10月31日 周六\u003C\u002Fdiv\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var i = $$obj[pug_index3];
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var j = $$obj[pug_index4];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var j = $$obj[pug_index4];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var i = $$obj[pug_index3];
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var j = $$obj[pug_index5];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var j = $$obj[pug_index5];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var i = $$obj[pug_index2];
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-2\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "10月31日 周六\u003C\u002Fdiv\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-wrap\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var i = $$obj[pug_index6];
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var j = $$obj[pug_index7];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var j = $$obj[pug_index7];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var i = $$obj[pug_index6];
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var j = $$obj[pug_index8];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var j = $$obj[pug_index8];
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"photo\""+pug_attr("style", pug_style(`flex:1 1 auto;width:${Math.random() * 200 + 80}px`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 overflow-hidden d-none position-relative\" ld=\"album-panel\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-3 d-flex border-bottom position-absolute z-fixed bg-white align-items-center\" style=\"top:0;width:100%\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 pl-4\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb class=\"text-lg\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "相簿\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-plus\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " 建立相簿\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-text\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-undo\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + " 最近的相片\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 pt-4 pb-4 pr-4\" style=\"overflow:scroll;margin-top:4em\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album-cats px-4 mb-4 pb-4\"\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7,8]
;(function(){
  var $$obj = [1,2,3,4,5,6,7,8];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var i = $$obj[pug_index9];
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album-cat\"\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-secondary rounded-lg mb-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:.9em\"\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-0\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-heart\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "人物與寵物\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var i = $$obj[pug_index9];
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album-cat\"\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-secondary rounded-lg mb-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:.9em\"\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-0\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-heart\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "人物與寵物\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"albums px-4\"\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var i = $$obj[pug_index10];
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var j = $$obj[pug_index11];
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-secondary rounded-lg mb-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:.9em\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-0\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "20191014 \u002F 八斗子忘幽谷\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "67 個項目．已共享\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var j = $$obj[pug_index11];
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-secondary rounded-lg mb-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:.9em\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-0\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "20191014 \u002F 八斗子忘幽谷\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "67 個項目．已共享\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var i = $$obj[pug_index10];
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
// iterate [1,2,3,4,5,6,7]
;(function(){
  var $$obj = [1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var j = $$obj[pug_index12];
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-secondary rounded-lg mb-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:.9em\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-0\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "20191014 \u002F 八斗子忘幽谷\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "67 個項目．已共享\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var j = $$obj[pug_index12];
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"album\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-secondary rounded-lg mb-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:.9em\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"my-0\"\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "20191014 \u002F 八斗子忘幽谷\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_html = pug_html + "67 個項目．已共享\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.native/main/bootstrap-native.min.js");
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldcover/main/ldcv.min.js");
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldview/main/ldview.min.js");
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fui.copycat\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002Fgoogle.photo\u002Findex.pug";
pug_mixins["script"]("js/google.photo/index.js");
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 