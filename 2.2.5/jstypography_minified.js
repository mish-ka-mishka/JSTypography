/*!
 * JS Typograph
 * The Javascript Typography Correcter
 * 
 * @version   2.2.5 (build 26.06.2013)
 * @author    Даниил Ерошенко "-1.#IND0000" <buffer.overflow.x86@gmail.com> (based on JSTypograf by UnderShot <mail@undershot.ru>)
 * @link      http://www.starwars-galaxy.ru/forum/22-1008-1
 * @license   http://www.freebsd.org/copyright/freebsd-license.html
 * @example   jstypograf({obj:["my_button","button2"],nbspobj:"sub_button",bind:"click",language:"rus",type:"norm",txts:["textarea1","bl17~textarea2","+abc"],off:["quotes"]})
 */
(function(a){window.typo=window.jstypograf=window.jstypograph=jstypo=function(j){if(!Array.indexOf){Array.prototype.indexOf=function(t){for(var o=0;o<this.length;o++){if(this[o]==t){return o}}return -1}}if(!String.r){String.prototype.r=String.prototype.replace}var z=j.only?[]:!j.off?[]:j.off,p=["quotes","functions","chars","spaces","dashs","tabs","nbsptabs","nbsp","br","href","h1"],n=function(i){return z.indexOf(i)==-1};function c(i){i=i.r(/ /g,"&nbsp;");return i}function y(){if(n("nbsptabs")){if(d(j,"object")){if(j.txts){u=l(u,j.txts)}if(e(u,Array)){for(var i in u){u[i]=d(u[i],"string")?q(u[i]):u[i];if(u[i]&&u[i].value!=a){b=u[i];b.value=c(b.value)}}}else{b=q(u);b.value=c(b.value)}}}}var x=document,h=x.location.pathname.split("/")[1];var m,g;function v(){var B=h,A=B=="forum"||B=="gb"?"message":["brief","message"],t;if(d(j,"object")){if(j.txts){A=l(A,j.txts)}if(e(A,Array)){for(var D in A){A[D]=d(A[D],"string")?q(A[D]):A[D];if(A[D]&&A[D].value!=a){t=A[D];var C=t.scrollTop;t.value=k(t);t.scrollTop=C}}}else{t=q(A);var C=t.scrollTop;t.value=k(t);t.scrollTop=C}}}window.changeTypoConf=function(i){z=i.off;j.language=i.language;j.type=i.type};function q(i){return x.getElementById(i)}function s(o,i,A){try{o.addEventListener(i,A,false)}catch(t){o.attachEvent("on"+i,A)}}function w(o,i,A){try{if(o.addEventListener){o.removeEventListener(i,A,false)}else{o.detachEvent("on"+i,A)}}catch(t){}}function e(o,i){return o instanceof i}function d(o,i){return typeof(o)==i}function l(A,t){var B=d(t,"string")?[t]:t,A=d(A,"string")?[A]:A;for(var C=0,D;C<B.length;C++){B[C]=B[C];D=B.length==1?B[0]:B[C];if(/^\+/g.test(D)){A.push(D.r(/^\+/g,""))}else{if(/^-/g.test(D)){for(var E=0;E<A.length;E++){if(A[E]==D.r(/^-/g,"")){A.splice(E,A[E]==A[0]?E+1:E)}}}else{if(/~/g.test(D)){D=D.split("~");for(var E=0;E<A.length;E++){if(A[E]==D[0]){A[E]=D[1]}}}else{A=t}}}}return A}function k(o){m=true;g=true;var i="",C="",D;if(o&&o.value&&o.selectionStart!=a){var B=o.selectionStart;var A=o.selectionEnd;i=o.value.substring(B,A);if(i==""){C=f(o.value)}else{if(B!=0){if(o.value.charAt(B-1)!="\n"&&o.value.charAt(B-1)!="\r"){m=false}}if(A!=o.value.length){if(o.value.charAt(A)!="\n"&&o.value.charAt(A)!="\r"){g=false}}D=f(i);C=o.value.substring(0,B)+D+o.value.substring(A)}}else{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();i=t.text;if(i==""){C=f(o.value)}else{m=false;g=false;D=f(i);t.text=D;C=o.value}}else{C=f(o.value)}}return C}function f(Z){var M,E,Q=[],ab="untypo",J;var N=function(ac,i){return new RegExp(ac,i)};if(!d(j.type,"string")){j.type="norm"}if(j.type!="norm"&&j.type!="html"){j.type="norm"}var A=["—","«","»","…","©","®","™","←","→","↑","↓","↔","°","́","×","≠","±","↕","‘","’","−","–","“","”","„","≥","≤","§","€","£","″","√","∫","½","¼","¾"," ","‚","¹","²","³","⅓","⅔","⅕","⅖","⅗","⅘","⅙","⅚","⅛","⅜","⅝","⅞","≈",'"',"⁰","⁴","⁵","⁶","⁷","⁸","⁹","⁺","⁻","⁼","⁽","⁾","ⁿ","ⁱ","₀","₁","₂","₃","₄","₅","₆","₇","₈","₉","₊","₋","₌","₍","₎"];var X=["mdash","laquo","raquo","hellip","copy","reg","trade","larr","rarr","uarr","darr","harr","deg","#769","times","ne","plusmn","#8597","lsquo","rsquo","minus","ndash","ldquo","rdquo","bdquo","ge","le","sect","euro","pound","Prime","radic","int","frac12","frac14","frac34","nbsp","sbquo","sup1","sup2","sup3","#8531","#8532","#8533","#8534","#8535","#8536","#8537","#8538","#8539","#8540","#8541","#8542","#8776","quot","#8304","#8308","#8309","#8310","#8311","#8312","#8313","#8314","#8315","#8316","#8317","#8318","#8319","#8305","#8320","#8321","#8322","#8323","#8324","#8325","#8326","#8327","#8328","#8329","#8330","#8331","#8332","#8333","#8334"];if(j.only){var V=j.only;for(var L=0;L<p.length;L++){if(typeof V=="object"){if(p[L]!=V[L]){z.push(p[L])}}else{if(p[L]!=V){z.push(p[L])}}}}var C=N("([  \n\t\v]|^)(((ht|f)tps?://)?([\\-\\w]+:[\\-\\w]+@)?([0-9a-z][\\-0-9a-z]*[0-9a-z]\\.)+[a-z]{2,6}(:\\d{1,5})?([?/\\\\#][?!^$.(){}:|=[\\]+\\-/\\\\*;&~#@,%\\wА-Яа-я]*)?)([  \n\t\v]|$)","gi");var D=N("([  \n\t\v]|^)([\\-a-z0-9!#$%&'*+\\/=?^_`{|}~]+(\\.[\\-a-z0-9!#$%&'*+\\/=?^_`{|}~]+)*@([a-z0-9]([\\-a-z0-9]{0,61}[a-z0-9])?.)*([a-z]{2,6}))([  \n\t\v]|$)","gi");Z=Z.r(/(\r\n|\r)/g,"\n").r(/(\[code\]|\[quote[^\]$\n]*\]|<pre[^<>]*?>|\[img\])/g,"<"+ab+">$1").r(/(\[\/code\]|\[\/quote\]|<\/pre>|\[\/img\])/g,"$1</"+ab+">").r(/(<script[^<>]*?>|<style[^<>]*?>)/g,"<"+ab+">$1").r(/(<\/script>|<\/style>)/g,"$1</"+ab+">").r(/(<!--(.|\n)*?-->)/g,"<"+ab+">$1</"+ab+">").r(/(\[url[^\[\]]+?\])/g,"<"+ab+">$1</"+ab+">").r(/(="[^"\n\r]*")/g,"<"+ab+">$1</"+ab+">");for(var V=0;V<10;++V){Z=Z.r(N("(<"+ab+">)([\\s\\S]*?)(<\\/?"+ab+">)","g"),function(ac,i,ae,ad){if(ad.charAt(1)!="/"){return i+ae}else{return ac}});Z=Z.r(N("(<\\/"+ab+">)([\\s\\S]*?)(<\\/?"+ab+">)","g"),function(ac,i,ae,ad){if(ad.charAt(1)=="/"){return ae+ad}else{return ac}})}Z=Z.r(/(UNTYPO[\d]S+)/g,"<"+ab+">$1</"+ab+">");function I(ae){M=Z.match(N("<"+ab+">[\\s\\S]+?</"+ab+">","g"));var ac=0;if(M){for(;ac<M.length;ac++){var ad=M[ac].r(N("<\\/?"+ab+">","g"),"");Q.push(ad);Z=Z.r("<"+ab+">"+ad+"</"+ab+">","UNTYPO"+(ac+ae)+"S")}}return ac+ae}var F=I(0);if(j.type=="html"&&n("href")){for(var V=0;V<2;++V){Z=Z.r(C,"$1<"+ab+'><a href="$2">$2</a></'+ab+">$9");Z=Z.r(D,"$1<"+ab+'><a href="mailto:$2">$2</a></'+ab+">$7")}}else{for(var V=0;V<2;++V){Z=Z.r(C,"$1<"+ab+">$2</"+ab+">$9").r(D,"$1<"+ab+">$2</"+ab+">$7")}}F=I(F);for(var V=0;V<X.length;++V){Z=Z.r(N("&"+X[V]+";","g"),A[V])}if(n("br")){Z=Z.r(/<br( *[^\n>]*?)?\/?>/gi,"\n")}Z=Z.r(/<\/?p>/gi,"");Z=Z.r(/<\/?h1>/gi,"");if(n("chars")){Z=Z.r(/\(([\wА-яёЁ]+)\)/g,function(i,ac){return ac=="c"?"©":ac=="r"?"®":ac=="tm"?"™":i})}if(j.type!="html"&&n("chars")){Z=Z.r(/&lt;/g,"<").r(/&gt;/g,">")}if(n("quotes")){Z=Z.r(/«|»|”|“|„/g,'"');if(j.language!="eng"){Z=Z.r(/‚|‘/g,'"')}}if(n("functions")){var O=function(ae,ac,ah){var ad="ABGDEZHJIKLMNQCOPRSTYUFXVWabgdezhjiklmnqcoprstyufxvw",ag="ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΞΟΠΡΣΤΥΥΦΧΨΩαβγδεζηθικλμνξξοπρστυυφχψω";for(var af=0;af<52;++af){if(ah==ad.charAt(af)){return ag.charAt(af)}}return"?"};Z=Z.r(/(УДАР|ACNT)\(([\wА-яёЁ]?)\)/g,"$2́").r(/(СТРЛ|ARRW)\(([\wА-яёЁ]+?)\)/g,function(i,ad,ac){return ac=="В"||ac=="U"?"↑":ac=="Н"||ac=="D"?"↓":ac=="Л"||ac=="L"?"←":ac=="П"||ac=="R"?"→":ac=="ЛП"||ac=="LR"?"↔":ac=="ВН"||ac=="UD"?"↕":i}).r(/(ГРАД|DEGR)\(([0-9\.]*)\)/g,"$2°").r(/(ПАРА|SECT)\(([IVXLСDМ0-9]*)\)/g,"§ $2").r(/(ЕВРО|EURO)\(([0-9\.]*)\)/g,"$2€").r(/(ФУНТ|PUND)\(([0-9\.]*)\)/g,"$2£").r(/(ДЮЙМ|INCH)\(([0-9\.]*)\)/g,"$2″").r(/(КОРН|SQRT)\(([\w0-9]*)\)/g,"√$2").r(/(ИНТГ|INTG)\(([\w0-9]*)\)/g,"∫$2").r(/(ГРЕЧ|GREK)\(([A-Za-z])\)/g,O);M=Z.match(/(ВЕРХ|SUPS)\[([0-9+\-=\(\)ni]+)\]/g);if(M){for(var V=0;V<M.length;++V){var R="0123456789-=ni",W="⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁼ⁿⁱ";var P=M[V].r(/(ВЕРХ|SUPS)\[([0-9+\-=\(\)ni]+)\]/g,"$2");for(var T=0;T<14;++T){P=P.r(N(R.charAt(T),"g"),W.charAt(T))}P=P.r(/\+/g,"⁺").r(/\(/g,"⁽").r(/\)/g,"⁾");Z=Z.r(M[V],P)}}M=Z.match(/(НИЖН|SUBS)\[([0-9+\-=\(\)]+)\]/g);if(M){for(var V=0;V<M.length;++V){var R="0123456789-=",W="₀₁₂₃₄₅₆₇₈₉₋₌";var P=M[V].r(/(НИЖН|SUBS)\[([0-9+\-=\(\)]+)\]/g,"$2");for(var T=0;T<12;++T){P=P.r(N(R.charAt(T),"g"),W.charAt(T))}P=P.r(/\+/g,"₊").r(/\(/g,"₍").r(/\)/g,"₎");Z=Z.r(M[V],P)}}}if(n("spaces")){if(m){Z=Z.r(/(^)[ \t]+/g,"$1")}Z=Z.r(/([\d]) ?(€|£|л\.|[скм]?м[\/\^¹²³\.\s]|г[аг]?[\s\.]|ц\.|т[\s\.]|р\.|руб\.|уе|тыс\.|млн|млрд)/g,"$1 $2").r(/([\d]) г\.[  ]?г\./g,"$1 гг.").r(/([IVXLCDM]) ?(вв?\.)/g,"$1 $2").r(/([IVXLCDM]) в\.[  ]?в\./g,"$1 вв.");Z=Z.r(/([^\d]|^)([\d]+(?:[\.,][\d]+)?) ?\$/g,"$1$$$2").r(/(\,|;|:|!|\?|\))([^\d\s=?!:,\.'’‘‚"«»“”\[])/gi,"$1 $2").r(/(\[color=[^\n]*\])( | )( | )( | )( | )/g,"$2$3$4$5$1").r(/ {2,}/g," ").r(/\.([^\s\dA-Za-z\n=?:;,\.'’‘"»„“”\[]+)/gi,". $1").r(/([А-яёЁ])\.([^\sA-Za-z\n=?:;,\.'’‘"»„“”\[]+)/g,"$1. $2").r(/ (\.|,|!|\?|;|:)/g,"$1").r(/(—|–|-)\.{2,4} /g,"$1 ...").r(/(\n|^|&)( *)\.{2,4} /g,"$1$2...").r(/(['‘‚"«„“\(])\.{2,4} /g,"$1...").r(/\( /g,"(").r(/ \)/g,")").r(/([^\s])\(/g,"$1 (").r(/([^\d])(,|\.)([\d])/g,"$1$2 $3").r(/(!|\?|\))([^\s=?!:,\.'’‘‚"«»“”\[]+)/gi,"$1 $2").r(/ %/g,"%").r(/P\. ?P\. ?S\./g,"P. P. S.").r(/P\. ?S\./g,"P. S.").r(/и др\./g,"и др.").r(/([\s]|^)(гл?|ул|д|илл)\. ([A-Za-zА-яёЁ0-9])/g,"$1$2. $3").r(/(\s|^)([тнсюзв])\. ?([еочнпдшдэ])\./g,"$1$2. $3.").r(/(\s|^)т\.? ?([нпдч])\./g,"$1т. $2.").r(/ н\. э\./g," н. э").r(/([№§]) ?([\dIVXLCDM])/g,"$1 $2").r(/(\d)([lpd]pi)([\s,\.!?]|$)/g,"$1 $2$3").r(/ГОСТ /gi,"ГОСТ ").r(/ГОСТ Р /gi,"ГОСТ Р ").r(/([\s]|^)до[  ]нэ\./g,"$1до н. э.");Z=Z.r(/ {2,}/g," ");for(var V=0;V<2;++V){Z=Z.r(/([  \n\t\v]|^)([иаксуов]|же|до|из|н[аое]|по|о[тб]|за|как|что|при|над|под|про|или|ибо|для|без|если|едва|либо|зато|пока|дабы|ежели|когда|перед|чтобы|через|пусть|будто|однако|словно) ([А-яёЁ])/gi,"$1$2 $3")}}Z=Z.r(/(\n|^)[  \t]+/g,"$1");if(n("tabs")){if(j.type=="norm"){Z=Z.r(/(\n)([^\s])/g,"$1    $2").r(/(^|\n) +/g,"$1    ").r(/(\n|^) +\n/g,"$1\n");if(m){Z=Z.r(/(^)([^\s])/g,"$1    $2")}}}if(n("dashs")){if(j.language!="eng"){Z=Z.r(/(\s|^|<p>)([«"„‚]*)(-|–)([\s]|$)/g,"$1$2—$4");Z=Z.r(/([A-Za-zА-яёЁ0-9]) —/g,"$1 —");Z=Z.r(/([\.,!?] |\n|^|<p>)— ([A-Za-zА-яёЁ0-9«"„‚])/g,"$1— $2");var aa="(где|зачем|как|какая|какие|каким|каких|какое|какой|какого|каком|какому|кем|когда|кого|ком|кому|кто|куда|откуда|почему|чего|чем|чему|что|чём)";Z=Z.r(N("([^А-яёЁ]|^)"+aa+"[  ]?(то|либо|нибудь)([^А-яёЁ]|$)","gi"),"$1$2-$3$4").r(N("([^А-яёЁ]|^)"+aa+"[  ]?(то|либо|нибудь)([^А-яёЁ]|$)","gi"),"$1$2-$3$4").r(N("([^А-яёЁ]|^)(кое|кой)[  ]?"+aa+"([^А-яёЁ]|$)","gi"),"$1$2-$3$4").r(N("([^А-яёЁ]|^)(кое|кой)[  ]?"+aa+"([^А-яёЁ]|$)","gi"),"$1$2-$3$4").r(/([\s]|^)(из)[  ]?(за)([\s]|$)/gi,"$1$2-$3$4").r(/([\s]|^)(из)[  ]?(под)([\s]|$)/gi,"$1$2-$3$4").r(/([А-яёЁ]{2,}) (ка|кась)([\s,\.\?!]|$)/g,"$1-$2$3").r(/([^А-яёЁ]|^)(вс[ёе]|так)[  ]?(таки)([^А-яёЁ]|$)/gi,"$1$2-$3$4").r(/(ГОСТ(?:[  ]Р))?[  ]([\d\.]+)-([\d]+)/gi,"$1 $2–$3");Z=Z.r(/([IVXLCDM]{1,3})-([IVXLCDM]{1,3})[  ]?вв?\.?([\s\.,?!;\)])/g,"$1—$2 вв.$3").r(/([\d]{1,4})-([\d]{1,4})[  ]?гг?\.([\s\.,?!;\)])/g,"$1–$2 гг.$3").r(/([^\d]|^)([0-2][0-9]:[0-5][0-9])-([0-2][0-9]:[0-5][0-9])([^\d]|$)/g,"$1$2–$3$4");var S="(?:[ьяюе]|[её]м)";var B="(?:[ауе]|ом)";var Y="(январ"+S+"|феврал"+S+"|март"+B+"|апрел"+S+"|ма(?:[йяюе]|ем)|ию[нл]"+S+"август"+B+"|сентябр"+S+"|ноябр"+S+"|октябр"+S+"|декабр"+S+")";Z=Z.r(N("([\\s]|^)([1-3]?[\\d])-([1-3]?[\\d])[  ]?"+Y+"([^А-яёЁ]|$)","gi"),"$1$2–$3 $4$5").r(N("([^А-яёЁ]|^)"+Y+"-"+Y+"([^А-яёЁ]|&)","gi"),"$1$2—$3$4")}Z=Z.r(/(\d)--(\d)/g,"$1–$2").r(/([^-]|\s|^)--([^-]|$|\n)/g,"$1—$2").r(/([^-\d]|^)(\d+)-(\d+)([^-\d]|$)/g,"$1$2−$3$4").r(/([^a-z][a-z]|[Α-Ωα-ω+=*\/])-(\d)/g,"$1−$2")}if(n("chars")){Z=Z.r(/…/g,"...").r(/([^\.])\.{2,4}/g,"$1...").r(/(\?!|!\?)\.{3}/g,"?!.").r(/\?\.{3}/g,"?..").r(/!\.{3}/g,"!..").r(/(!+)(\?+)/g,"$2$1").r(/(\d+?)[xх](\d+?)/g,"$1×$2").r(/(\d+?)([  ])[xх]([  ])(\d+?)/g,"$1×$4").r(/([0-9a-zA-ZΑ-Ωα-ωА-яёЁ])\^([0-9]+)/g,function(ad,i,ah){var ac="0123456789",ag="⁰¹²³⁴⁵⁶⁷⁸⁹";var af=ah;for(var ae=0;ae<10;++ae){af=af.r(N(ac.charAt(ae),"g"),ag.charAt(ae))}return i+af}).r(/!=/g,"≠").r(/\+\/[\-−]/g,"±").r(/~=/g,"≈").r(/<=/g,"≤").r(/>=/g,"≥").r(/<->/g,"↔").r(/<-([^-]|&)/g,"←$1").r(/([^-]|^)->/g,"$1→").r(/(!+)(\?+)/g,"$2$1").r(/\?{3,}/g,"???").r(/!{3,}/g,"!!!");var H="([^0-9A-Za-zА-яёЁ/]|^)",G="([^0-9A-Za-zА-яёЁ/]|$)";Z=Z.r(N(H+"1/2"+G,"g"),"$1½$2").r(N(H+"1/4"+G,"g"),"$1¼$2").r(N(H+"2/4"+G,"g"),"$1½$2").r(N(H+"3/4"+G,"g"),"$1¾$2").r(N(H+"1/3"+G,"g"),"$1⅓$2").r(N(H+"2/3"+G,"g"),"$1⅔$2").r(N(H+"1/5"+G,"g"),"$1⅕$2").r(N(H+"2/5"+G,"g"),"$1⅖$2").r(N(H+"3/5"+G,"g"),"$1⅗$2").r(N(H+"4/5"+G,"g"),"$1⅘$2").r(N(H+"1/6"+G,"g"),"$1⅙$2").r(N(H+"2/6"+G,"g"),"$1⅓$2").r(N(H+"3/6"+G,"g"),"$1½$2").r(N(H+"4/6"+G,"g"),"$1⅔$2").r(N(H+"5/6"+G,"g"),"$1⅚$2").r(N(H+"1/8"+G,"g"),"$1⅛$2").r(N(H+"2/8"+G,"g"),"$1¼$2").r(N(H+"3/8"+G,"g"),"$1⅜$2").r(N(H+"4/8"+G,"g"),"$1½$2").r(N(H+"5/8"+G,"g"),"$1⅝$2").r(N(H+"6/8"+G,"g"),"$1¾$2").r(N(H+"7/8"+G,"g"),"$1⅞$2").r(/,+/g,",").r(/:+/g,":").r(/;+/g,";").r(/([a-zA-ZА-яёЁ0-9]) (а|но)([\s$,]|\.\.\.)/g,"$1, $2$3").r(/([a-zA-ZА-яёЁ0-9]) однако([\s$,\.!?:])/g,"$1, однако$2");Z=Z.r(/([^a-zА-яёЁ]|^)([a-zА-яёЁ]+)[  ](\2)([^a-zA-ZА-яёЁ]|$)/gi,"$1$2$4")}if(n("quotes")){Z=Z.r(/(^|\n|\s|—|-|\()"/g,"$1«").r(/"($|\n|\s|—|-|\.|,|!|\?|:|;|\))/g,"»$1").r(/«\)/g,"»)").r(/«( ?)/g,"«").r(/( ?)»/g,"»").r(/>"/g,">«").r(/"</g,"»<").r(/«""/g,"«««").r(/«"/g,"««").r(/""»/g,"»»»").r(/"»/g,"»»").r(/("{2}|"»)/g,"»»").r(/$"/g,"«").r(/([A-Za-zа-яА-ЯёЁ])'/g,"$1’");Z=Z.r(/[a-zA-ZА-яёЁ]"-/g,"$1»-").r(/-"[a-zA-ZА-яёЁ]/g,"-«$1");Z=Z.r(/(^[^«»]*)"/g,"$1«").r(/"([^«»]*$)/g,"»$1").r(/«([^«»]*)"/g,"«$1»").r(/"([^«»]*)»/g,"«$1»");if(j.language!="eng"){function K(ae,ad){var ac="",ag,af="";if(ae!=0){ac=Z.substring(0,ae)}if(ad!=Z.length-1){af=Z.substring(ad+1,Z.length)}ag=Z.substring(ae,ad+1);for(var ae=0;ae<32;++ae){ag=ag.r(/«([^«»]*)«([^»]*)»/g,"«$1„$2“");ag=ag.r(/„([^„“]*)„([^“]*)“/g,"„$1‚$2‘")}return ac+ag+af}var t=0;for(var V=0;V<Z.length;++V){if(Z.charAt(V)=="«"){++t;for(var T=V+1;T<Z.length;++T){if(Z.charAt(T)=="«"){++t}if(Z.charAt(T)=="»"){--t;if(t<=0){Z=K(V,T);V=T;break}}}t=0}}}else{Z=Z.r(/'([A-Za-zа-яА-ЯёЁ])/g,"‘$1")}}if(j.type=="html"){if(n("chars")){Z=Z.r(/<(?!\/?[A-Za-z][^\n$<>]*>|!--)/g,"&lt;").r(/(<\/?[A-Za-z][^\n$<>]*|--)?>/g,function(ac,i){return i?ac:"&gt;"})}if(n("tabs")){Z=Z.r(/(\n)(?!<p>)([^\n]*)(?!<\/p>)(\n)/g,"$1<p>$2</p>$3").r(/(\n)(?!<p>)([^\n]*)(?!<\/p>)(\n)/g,"$1<p>$2</p>$3").r(/ +<\/p>(\n)/g,"</p>$1");if(m){Z=Z.r(/(^)(?!<p>)([^\n]*)(?!<\/p>)(\n)/g,"$1<p>$2</p>$3");if(g){Z=Z.r(/(^)(?!<p>)([^\n]*)(?!<\/p>)($)/g,"$1<p>$2</p>$3")}}if(g){Z=Z.r(/(\n)(?!<p>)([^\n]*)(?!<\/p>)($)/g,"$1<p>$2</p>$3").r(/ +<\/p>(\n|$)/g,"</p>$1")}Z=Z.r(/<p>(UNTYPO[\d]+)<\/p>/g,"$1");Z=Z.r(/<p><\/p>/g,"").r(/<p>(UNTYPO[\d]+S)<\/p>/g,"$1");Z=Z.r(/<p>(.*?<\/?)([uo]l|li)(>.*?)<\/p>/g,"$1$2$3")}if(n("h1")){var U=n("tabs")?"<p>":"";var o=n("tabs")?"</p>":"";Z=Z.r(N("(\n|^)"+U+'([А-яёЁa-zA-Z0-9"«“][^\n]{1,50}[А-яёЁa-zA-Z0-9"»”)])'+o+"(\n|$)","g"),"$1<h1>$2</h1>$3").r(/<h1>([^а-яА-ЯёЁa-zA-Z§]+?)<\/h1>/g,U+"$1"+o).r(N("(\n|^)"+U+"(Глава|Chapter|Section|§)([  ]?[IVXLСDМ0-9][^\n]{0,43})"+o+"(\n|$)","g"),"$1<h1>$2$3</h1>$4").r(N("(\n|^)"+U+"(Эпилог|Пролог|Epilogue|Prologue)(.?)"+o+"(\n|$)","g"),"$1<h1>$2$3</h1>$4").r(/<h1>(UNTYPO[\d]+S)<\/h1>/g,"$1")}}if(j.language=="eng"){Z=Z.r(/(»|’)(\.|,|!|\?)/g,"$2$1").r(/«/g,"“").r(/»/g,"”")}if(!n("nbsp")){Z=Z.r(/ /g," ")}if(n("br")){Z=Z.r(/\n/g,"<br />")}Z=Z.r(/ (\))/g,"$1");if(j.type=="html"){for(var V=0;V<A.length;++V){Z=Z.r(N(A[V],"g"),"&"+X[V]+";")}}for(var V=Q.length-1;V>=0;--V){Z=Z.r("UNTYPO"+V+"S",Q[V])}Z=Z.r(N("(<\\/?"+ab+">)+","g"),"$1");return Z}if(j.bind){var u;if(j.obj){u=l(u,j.obj)}else{return 0}u=d(u,"object")?u:[u];for(var r in u){u[r]=d(u[r],"string")?q(u[r]):u[r];if(u[r]){w(u[r],j.bind,v);s(u[r],j.bind,v)}}if(n("tabs")){if(j.nbspobj){u=l(u,j.nbspobj);u=d(u,"object")?u:[u];for(var r in u){u[r]=d(u[r],"string")?q(u[r]):u[r];if(u[r]){w(u[r],j.bind,y);s(u[r],j.bind,y)}}}}}}})();