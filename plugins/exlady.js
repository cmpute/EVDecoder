ExView.Plugins({info:{name:"E淑女漫画",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWklEQVQ4jWP8//8/AyWAiSLdDAwMLAwMDAzp7EIYzpj58x0jjA2Th4kh86njAmy2EgsodgF1vYAcOOgBhyxPOxcg24YtQNGjkSouoE0gMjAQnyYodgHjgOdGAGwOKyVznIrZAAAAAElFTkSuQmCC",db:"exlady",apihost:"https://e-hentai.org/",pagetitle:["<br>","收藏","首页","类型","下载"],download:!0,lazyload:!0,setting:!0,
webpage:{url:"https://e-hentai.org/bounce_login.php?b=d&bt=1-1",title:'E淑女漫画<br><span style="font-size:16px">登录</span>',browser:!1,flag:"",callbackname:"webpagefork"},settingextra:getui([{name:"typebox",title:"类型方块界面",type:"checkbox"},{name:"nativeres",title:"使用本地请求",type:"checkbox"},{name:"requestcookie",title:"网络请求Cookie",resizable:!0,type:"textarea"},{value:'<li><div class="col-50"><a href="#" class="button button-raised open-login-screen">登录E淑女</a></div></li>',
type:"html"}]),nativeres:!0,typebox:!1,commentbar:!0,commentbuttons:"",commentplaceholder:"Message",commentsendbutton:"发送",theme:"pink",requestcookie:"",cdn:""},set:function(a){},unset:function(a){setloginscreen(!1)},init:function(a){a=a||{};plugfns().initloginscreen({plugin:mySession.nowplugin});ExView.workers.fav.listloader({callback:function(){pluginfo(a.plugin,!1,"cacheheader",{Cookie:pluginfo(a.plugin).requestcookie})}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"?page="+(parseInt(a.page||1)-1),timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.callback&&a.callback({img:plugfns(a.plugin).typelistext.index.imgurl,multpage:!0,result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,
str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){b=(b||"").split("{{separator}}");a.callback&&a.callback({pagecount:array_count(b)?Math.ceil(parseInt(b[2].replace(/\,/g,""))/25):"-1"})}}}},typeflag:{loader:!1,finder:function(a){return{successfn:function(b){if(pluginfo(a.plugin).typebox){b='<table border="1" style="position: absolute;border-collapse: collapse;width: 100%;height:100%;border:1px solid #000000"><tbody><tr>'+plugfns(a.plugin).gettypebox("",plugfns(a.plugin).typelistext.index.title,
plugfns(a.plugin).typelistext.index.imgurl,"")+plugfns(a.plugin).gettypebox("advsearch",plugfns(a.plugin).typelistext.topfive.title,plugfns(a.plugin).typelistext.topfive.imgurl,"&f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_sname=on&f_stags=on&f_sdesc=on&f_storr=on&f_sdt2=on&f_sh=on&f_sr=on&f_srdd=5");var c=3,d;for(d in plugfns(a.plugin).typelist)b+=(1==c?"<tr>":"")+plugfns(a.plugin).gettypebox(d,plugfns(a.plugin).typelist[d].title,
plugfns(a.plugin).typelist[d].imgurl,"")+(3==c?"</tr>":""),3==c?c=1:c++;addtypelist(b+"</tbody></table>",2);try{clearInterval(mySession.lazyload.typelistlazyloadser)}catch(e){}$$("#typelist").onscroll=""}else for(d in a.callback({listbg:!0,title:plugfns(a.plugin).typelistext.index.title,img:plugfns(a.plugin).typelistext.index.imgurl,content:plugfns(a.plugin).typelistext.index.title}),a.callback({tid:"advsearch",listbg:!0,listflag:"&f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_sname=on&f_stags=on&f_sdesc=on&f_storr=on&f_sdt2=on&f_sh=on&f_sr=on&f_srdd=5",
title:plugfns(a.plugin).typelistext.topfive.title,img:plugfns(a.plugin).typelistext.topfive.imgurl,content:plugfns(a.plugin).typelistext.topfive.title}),plugfns(a.plugin).typelist)a.callback({tid:d,listbg:!0,title:plugfns(a.plugin).typelist[d].title,img:plugfns(a.plugin).typelist[d].imgurl,content:plugfns(a.plugin).typelist[d].title})}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?f_"+a.keyword+"=1&f_apply=Apply+Filter&page="+(parseInt(a.page||1)-1)+a.flag,method:"GET",timeout:120,
nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.callback&&a.callback({multpage:!0,result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){b=
(b||"").split("{{separator}}");a.callback&&a.callback({pagecount:array_count(b)?Math.ceil(parseInt(b[2].replace(/\,/g,""))/25):"-1"})}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_search="+a.keyword+"&f_apply=Apply+Filter&page="+(parseInt(a.page||1)-1),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},
successfn:function(b,c){a.callback&&a.callback({multpage:!0,result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b,c,d){console.log(b);b?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():a.callback()}}},countloader:!1,countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){b=(b||"").split("{{separator}}");a.callback&&
a.callback({pagecount:array_count(b)?Math.ceil(parseInt(b[2].replace(/\,/g,""))/25):"-1"})}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"g/"+a.pid.replace(/\_/g,"/")+"/?nw=always",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.callback&&a.callback({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,
successfn:function(b){if(b){b=b.split("{{separator}}");var c=a.pid;b=Math.ceil(parseInt(b[2].replace(/\,/g,""))/40);if(a.checkupdate)return{pid:c,cid:b,title:"第"+b+"话"};for(var d=[],e=0;e<b;e++)d[e]=a.callback({id:e,newest:a.newest&&0==e,pid:c,cid:e+1,title:"第"+(e+1)+"话",count:b,reverse:0});console.log(d);return d}a.checkupdate||a.callback()}}},infoloader:function(a){return{successfn:function(){a.callback&&a.callback({result:a.result,header:a.header})},showinfo:{text:"正在加载内容页...",
title:"内容页",name:getlistname(a.pid),img:getlistimg(a.pid)}}},infofinder:function(a){console.log(a);return{reg:/<div\s*id="gd1"><img\s*src="(.*?)"\s*alt=""\s*\/><\/div><\/div><div\s*id="gd2"><h1\s*id="gn">(.*?)<\/h1>/g,str:a.result,find:"$1{{separator}}$2",successfn:function(b,c,d,e){console.log(b);b=b.split("{{separator}}");a.str=a.result;a.name=b[1];c=gettags(a.result,/\/tag\/(.*?)\"/g,"$1");d="//"==b[0].substr(0,2)?"http:"+b[0]:b[0];e=getstr(/of\s*([\d,\,]+)\s*images<\/p>/,a.result);
d=getcoverload(d,{cachetime:0,cacheheader:{Cookie:pluginfo(a.plugin).requestcookie},nativeres:pluginfo(a.plugin).nativeres});myContent.imgcount=e||0;a.callback({name:b[1],img:d,added:a.data,description:"<p>共"+(e||0)+"张图片</p>",comment:1,preview:1,tags:gettag(b[1])+c,sourceurl:pluginfo(a.plugin).apihost+"g/"+a.pid.replace(/\_/g,"/")+"/?nw=always"});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"g/"+a.pid.replace(/\_/g,"/")+"?p="+(parseInt(a.cid||
1)-1)+(0==parseInt(a.cid||1)-1?"&nw=always":""),method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.callback&&a.callback({result:b,header:c})}}},finder:function(a){console.log(a);return{reg:/<div\s*class="gdtm"\s*style="height:(\d+)px"><div\s*style=".*?height:(\d+)px;\s*background:transparent\s*url\((.*?)\)\s*-(\d+)px\s*0\s*no-repeat"><a\s*href="(.*?)"/g,str:a.result,find:"$1{{separator}}$2{{separator}}$3{{separator}}$4{{separator}}$5",
successfn:function(b,c,d,e){array_count(e)?(b=[],b=e.map(function(b){b=b.split("{{separator}}");return getpageload(b[4],a.plugin,{cachetime:3600,cacheheader:{Cookie:pluginfo(a.plugin).requestcookie}})}),console.log(b),a.download?a.callback({source:b,download:a.download,plugin:a.plugin}):a.callback({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.callback();return!0}}}},commentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"g/"+a.pid.replace(/\_/g,"/")+"/?nw=always&hc=1",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){b?a.callback&&a.callback({result:b,header:c,commentbrowser:{url:pluginfo(a.plugin).apihost+"g/"+a.pid.replace(/\_/g,"/")+"/?nw=always&hc=1",title:"评论 - "+pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}}):a.callback&&a.callback()}}},finder:function(a){console.log(a);
return{reg:/<a\s*name="c\d+"><\/a><div\s*class="c1"><div\s*class="c2"><div\s*class="c3">Posted\s*on\s*(.*?)\s*UTC\s*by:\s*&nbsp;\s*<a\s*href=".*?">(.*?)<\/a><\/div><div\s*class="c\d+\s*nosel"(.*?)<div\s*class="c6"\s*id="comment_\d+">(.*?)<\/div><div\s*class="c7"/g,str:a.result,find:"$1{{separator}}$2{{separator}}$3{{separator}}$4",successfn:function(b,c,d,e){b&&(b=b.split("{{separator}}"),a.callback&&a.callback({page:a.page||1,pagecount:1,comment:{text:b[3]||"",name:gettext(b[1]||""),avatar:"",type:"-1"!=
b[2].indexOf(">Edit</a>")?"sent":"received",label:"",day:b[0].split(",")[0],time:b[0].split(",")[1],reverse:0,extra:"<style>.c8{padding-left:56px;white-space:nowrap;}</style>"}}))}}},send:function(a){return{url:pluginfo(a.plugin).apihost+"g/"+a.pid.replace(/\_/g,"/")+"/?nw=always&hc=1",method:"POST",data:a.value?"commenttext="+encodeURIComponent(a.value)+"&postcomment=Post+Comment":"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie,"Content-Type":"application/x-www-form-urlencoded"},
successfn:function(b,c){b?a.callback&&a.callback({text:a.value,name:"我",avatar:"",type:"sent",label:"",day:"",time:"",reverse:0,extra:"<style>.c8{padding-left:56px;white-space:nowrap;}</style>"}):a.callback()}}}},previewflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"g/"+a.pid.replace(/\_/g,"/")+"?p="+(parseInt(a.page||1)-1)+(0==parseInt(a.page||1)-1?"&nw=always":""),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},
successfn:function(b,c){b?a.callback&&a.callback({result:b,header:c}):a.callback&&a.callback()}}},finder:function(a){return{reg:/<div\s*class="gdtm"\s*style="height:\d+px"><div\s*style="margin:1px\s*auto\s*0;\s*width:(\d+)px;\s*height:(\d+)px;\s*background:transparent\s*url\((.*?)\)\s*([\-,\d]+)px\s*0\s*no-repeat"><a\s*href="(.*?)"/g,str:a.result,find:"$1{{separator}}$2{{separator}}$3{{separator}}$4{{separator}}$5",successfn:function(b,c,d,e){b&&(b=b.split("{{separator}}"),c="//"==b[2].substr(0,2)?
"http:"+b[2]:b[2],d="/"==b[4].substr(0,1)?pluginfo(a.plugin).apihost.split("//")[0]+"//"+pluginfo(a.plugin).apihost.split("//")[1].split("/")[0]+"/"+b[4].substring(1):b[4],a.callback({page:a.page||1,pagecount:myContent.items.length,preview:{imgurl:c,pageurl:d,width:b[0],height:b[1],leftoffset:b[3],topoffset:0}}))}}}},pageimgflag:{parser:function(a){return{reg:/<img(?!\<).*?src="(.*?)"\s*style="/g,str:(a.result||"").replace(/<img/g,"\n<img"),find:"$1",successfn:function(b){var c=getstr(/return\s*nl\('([\d-]+)'\)/,
a.result);c&&a.pagedom?(c=a.pageurl+(-1<(a.pageurl+"").indexOf("?")?"&":"?")+"nl="+c,c=getpageload(c,a.plugin,{cachetime:3600,cacheheader:{Cookie:pluginfo(a.plugin).requestcookie}})):c=a.url;a.callback({imgurl:b,otherurl:c})}}}},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?page="+(parseInt(a.page||1)-1),timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.callback&&a.callback({result:b,header:c})}}},
finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?f_advsearch=1&f_apply=Apply+Filter&page="+(parseInt(a.page||1)-1)+"&f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_sname=on&f_stags=on&f_sdesc=on&f_storr=on&f_sdt2=on&f_sh=on&f_sr=on&f_srdd=5",
method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.callback&&a.callback({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{webpagefork:function(a){if("string"==typeof a.container)$$(a.container)[0].onload=function(){if(0==this.contentWindow.location.href.indexOf("https://e-hentai.org/home.php")){var b=
($$(".webpage-iframe")[0].contentDocument||$$(".webpage-iframe")[0].document).cookie;b&&(pluginfo(a.plugin,1,"requestcookie",b),ExView.fw.alert("已经成功登录E淑女！","登录成功",function(){$$(".login-screen.modal-in").css("display","none")}))}};else{var b=a.container;b.addEventListener("loadstart",function(){});b.addEventListener("loadstop",function(){});b.addEventListener("loaderror",function(){});b.addEventListener("exit",function(){})}},initloginscreen:function(a){a=
a||{};setloginscreen('<div class="login-screen-title">EXLADY</div><form><div class="list-block inputs-list"><ul><li class="item-content"><div class="item-inner"><div class="item-title label">用户名</div><div class="item-input item-input-field"><input type="text" id="login-username" name="username" placeholder="Your Username"></div></div></li><li class="item-content"><div class="item-inner"><div class="item-title label">密码</div><div class="item-input item-input-field"><input id="login-password" type="password" name="password" placeholder="Your Password"></div></div></li></ul></div><div class="content-block"><a href="#" id="login-login" class="button button-big">登录</a><a href="#" id="login-weblogin" class="button button-big close-login-screen">WEB登录</a><a href="#" id="login-reg" class="button button-big">注册</a><a href="#" id="login-cancle" class="button button-big close-login-screen">取消</a></div><div style="position:absolute;bottom:0;text-align:center;margin:0;padding:0;width:100%"><div class="list-block-label">ExView不提供和传播任何资源，所有资源均来源于互联网！</div></div></form>');
var b=function(b,d){ExView.modules.curl({url:"https://forums.e-hentai.org/index.php?act=Login&CODE=01",method:"POST",data:"returntype=8&CookieDate=1&b=d&bt=pone&UserName="+b+"&PassWord="+d+"&ipb_login_submit=Login%21",timeout:120,header:{"Content-Type":"application/x-www-form-urlencoded"},nativerequest:!0,successfn:function(b,c){try{var d=c["Set-Cookie"],f="",h;for(h in d)f+=d[h].split(";")[0]+";";console.log(b);console.log(c);var l=getstr(/logged in as:((?!<).*?)</i,b);ExView.fw.hidePreloader();
if(!l)return ExView.fw.hidePreloader(),ExView.fw.alert("可能用户名和密码错误，或者尝试过多验证限制，晚点再试！","登录失败"),!1;ExView.modules.curl({url:mySession.nowpluginfo.apihost,method:"GET",timeout:120,header:{Cookie:f},nativerequest:!0,successfn:function(b,c){var d=c["Set-Cookie"],e;for(e in d)f+=(d[e]||"").split(";")[0]+";";ExView.fw.hidePreloader();try{f?(pluginfo(a.plugin,
1,"requestcookie",f),ExView.fw.alert("已经成功登录E淑女！","登录成功",function(){$$(".login-screen.modal-in").css("display","none");mySession.plugins[a.plugin].init(a)})):ExView.fw.alert("未知错误！","登录失败")}catch(g){ExView.fw.alert(g,"登录失败")}},showinfo:{text:"正在登录用户<br>"+l,title:"登录",img:pluginfo(a.plugin).icon}})}catch(m){ExView.fw.alert(m,"登录失败")}},
showinfo:{text:"正在登录E淑女...",title:"登录",img:pluginfo(a.plugin).icon}})};$$("#login-reg").on("click",function(){window.open("http://forums.e-hentai.org/index.php?act=Reg&CODE=00","_blank","location=no")});$$("#login-login").on("click",function(){$$("#login-username").val()&&$$("#login-password").val()?b($$("#login-username").val(),$$("#login-password").val()):ExView.fw.alert("用户名和密码不能为空！","ExView")});$$("#login-weblogin").on("click",
function(){$$(".open-webpage").trigger("click")});$$("#login-cancle").on("click",function(){})},gettypebox:function(a,b,c,d,e){return'<td style="overflow: hidden;width: 33%;"><div onclick="'+(a||e?"ExView.workers.list.loader({keyword:'"+a+"',img:'"+c+"',title:'"+b+"',flag:'"+d+"',turnpage:1})":"ExView.workers.index.loader({turnpage:1,front:1,img:'"+c+"',title:'"+b+"',flag:'"+d+"'})")+'" style="background-image:url('+c+');width:100%;height:100%;background-repeat:no-repeat;background-size:cover;text-align:center;background-size:100%100%;"></div><div style="font-size:16px;text-align:center;background-color: black;margin-top:-24px;opacity: 0.8;position: relative;color: white;">'+
b+"</div></td>"},typelistext:{index:{title:"首页",imgurl:getbaiduimg("d3304434970a304eeae53a66d7c8a786c8175c12")},topfive:{title:"五星推荐",imgurl:getbaiduimg("e65387c379310a5540bf2322b04543a983261036")}},typelist:{doujinshi:{title:"同人",imgurl:getbaiduimg("1b309b19ebc4b745b51c4ac0c8fc1e17888215c5")},manga:{title:"漫画",imgurl:getbaiduimg("61aa13c79f3df8dc6b797347ca11728b46102801")},artistcg:{title:"画家CG",imgurl:getbaiduimg("574621f790529822470fc615d0ca7bcb0b46d489")},
gamecg:{title:"游戏CG",imgurl:getbaiduimg("9be791014a90f6038e4160913e12b31bb251eddd")},western:{title:"西方风格",imgurl:getbaiduimg("6a897ce736d12f2ec04351b648c2d56284356803")},"non-h":{title:"全年龄",imgurl:getbaiduimg("8137b022720e0cf3e088b12d0d46f21fbf09aa4a")},imageset:{title:"图集",imgurl:getbaiduimg("3448fc2a2834349b48489153ceea15ce37d3be7b")},cosplay:{title:"角色扮演",imgurl:getbaiduimg("20c8e3ef76094b36c7a8e53ba4cc7cd98c109d97")},
asianporn:{title:"亚洲艺术",imgurl:getbaiduimg("574621f790529822462bc715d0ca7bcb0b46d4b5")},misc:{title:"杂项",imgurl:getbaiduimg("574621f7905298224624c715d0ca7bcb0b46d4b2")}},pagerule:/<td\s*class="itdc"><a\s*href="(.*?)"><img\s*src="(.*?)"\s*alt="(.*?)"\s*class="ic"\s*\/><\/a><\/td><td\s*class="itd"\s*style="white-space:nowrap">(.*?)<\/td><td\s*class="itd"\s*onmouseover="preload_pane_image_delayed\((.*?)\)"\s*onmouseout="preload_pane_image_cancel\(\)"><div\s*style="position:relative"><div\s*class="it2"\s*id="i(.*?)"\s*style="border:(.*?)(~|\/)t\/(.*?).jpg(~|")(.*?)<\/div><div\s*class="it3">(.*?)<\/div><div\s*class="it5"><a\s*href="(.*?)"\s*onmouseover="show_image_pane\((.*?)\)"\s*onmouseout="hide_image_pane\((.*?)\)">(.*?)<\/a><\/div><div\s*class="it4"><div\s*class="ir\s*it4r"\s*style="background-position:(.*?)"><\/div>\s*<\/div><\/div><\/td><td\s*class="itu"><div><a\s*href="(.*?)">(.*?)<\/a><\/div><\/td>/g,
pagefind:"$2{{separator}}$3{{separator}}$4{{separator}}$6{{separator}}$9{{separator}}$13{{separator}}$16{{separator}}$19{{separator}}$17",pagecountrule:/>Showing\s*(\d+)\s*-\s*(\d+)\s*of\s*([\d,]+)\s*(images|)<\/p>/g,pagecountfind:"$1{{separator}}$2{{separator}}$3",pagedeal:function(a,b){b=b||{};"string"==typeof a&&(a=a.split("{{separator}}"));for(var c=getstr(/\/g\/([\/,\d,\w]+)\//,a[5]).replace("/","_").replace("/",""),d=a[6],e=a[8].split("px"),g=-21==parseInt(e[1])?!0:!1,k=(80+parseInt(e[0]))/
16-(g?.5:0),e="",f=0;f<parseInt(k);f++)e+="★";e+=g?"☆":"";g="http://"+getstr(/init[s]*~([\w,\.,\/]+)~t/,b.result)+"/t/"+a[4]+".jpg";g=getcoverload(g,{cachetime:0,cacheheader:{Cookie:pluginfo(b.plugin).requestcookie},nativeres:pluginfo(b.plugin).nativeres});try{var h="【"+plugfns(b.plugin).typelist[a[1]].title+"】By "+a[7],f="【"+e+k+"星】"+h}catch(l){h="By "+a[7],f="【"+e+k+"星】"+h}if(b.multupdate)return b.multupdate(obj_contact(b,{pid:c,img:g,title:d,content:f})),
!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:c,img:g,title:d,content:f})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:g,title:d,content:f})),!1;b.callback&&b.callback({pid:c,title:d,img:g,content:h+"<br>【更新日期】"+a[2],stitle:"【"+e+k+"星】",comment:1,preview:1,extrabutton:""})}}});
