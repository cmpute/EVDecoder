ExView.Plugins({info:{name:"半次元绘画图库",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAAD/cKP/daX/utb/t9T/////s9H/b6L/utb/////////////daX/utb/b6L/caR1qzmHAAAAC3RSTlMA/fXu/QP+8vEJBupgDmwAAABbSURBVAjXY2DgCWBg4DzAwMBwGkgwbQcK7N7DEHV69wMgY/eZM7vBDCCAMAR373bbLQBkyO/efWX3AagUKkN79+69YMY+YeNuEOMMSOYuXA2miAIDwxkQuMsAAARdRpkQ7tigAAAAAElFTkSuQmCC",db:"bcyillust",apihost:"https://bcy.net/illust/",pagetitle:["<br>","收藏",
"本周排行榜","类型","下载"],lazyload:!0,download:!0,setting:!0,nativeres:!0,search:!1,gallerymode:!0,galleryopen:!0,vphotomode:!0,theme:"pink",cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader()}})},flags:{indexflag:{loader:function(a){a.front||a.page||addtypelist('<div align="center" class="list-block"><img src="img/logo.png"/><br>类型<br>正在加载...<div class="progress"></span></div>',
2);return{url:pluginfo(a.plugin).apihost+"toppost100",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.front||a.page||ExView.workers.type.finder({result:b,plugin:a.plugin});a.successfn&&a.successfn({result:b,header:c})},errorfn:function(){a.page||addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>加载失败，请刷新重试！</a></div>',
2);ExView.fw.alert("网络错误！","ExView")},canclefn:function(){a.page||addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>加载失败，请刷新重试！</a></div>',2)},showinfo:{text:"正在加载..."+(1<a.page?"<br>第"+a.page+"页":""),name:"首页",title:a.title,img:a.img}}},finder:function(a){return{reg:/\/illust\/(.*?)<\/a>/g,
str:getresult(a.result),find:"$1",successfn:function(a){if(a){var c=getstr(/detail\/([\w,\/]+)/,a).replace(/\//g,"_"),d=getstr(/alt="((?!\").*?)"/,a).split(" "),e=1<d.length?d.pop():"",d=d.join(" ");(a=getstr(/src="((?!\").*?)"/,a))&&addcardlist({pid:c,title:d,img:a,stitle:e,comment:0})}else addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',2)},errorfn:function(){a.page||setnowlistname("首页","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();
mySession.isloading=0;ExView.fw.alert("网络错误！","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){mySession.nowlistpages="-1|首页|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},typeflag:{loader:function(a){return{successfn:function(){ExView.workers.index.loader()}}},finder:function(a){addtypelist({title:"本周排行榜",img:pluginfo(a.plugin).icon,content:"本周排行榜"});
addtypelist({tid:"lastday",listflag:"toppost100?type=lastday",title:"今日排行榜",img:pluginfo(a.plugin).icon,content:"今日排行榜"});addtypelist({tid:"artwork",listflag:"toppost100?type=artwork",title:"原创榜",img:pluginfo(a.plugin).icon,content:"原创榜"});addtypelist({tid:"newPeople",listflag:"toppost100?type=newPeople",title:"新人榜",img:pluginfo(a.plugin).icon,content:"新人榜"});addtypelist({tid:"discover",listflag:"discover?",
title:"精选绘本",img:pluginfo(a.plugin).icon,content:"精选绘本"});addtypelist({tid:"allfanart",listflag:"allfanart?",title:"最新同人",img:pluginfo(a.plugin).icon,content:"最新同人"});addtypelist({tid:"allartwork",listflag:"allartwork?",title:"最新原创",img:pluginfo(a.plugin).icon,content:"最新原创"});return!1}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.flag+"&p="+(a.page||1),
method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("【"+a.title+"】获取失败！","ExView"))},showinfo:{text:"正在加载..."+(1<a.page?"<br>第"+a.page+"页":""),name:"【"+
a.title+"】",title:a.title,img:a.img}}},finder:function(a){var b=plugfns(a.plugin).getrule(a.keyword),c=b.pagefind,d=b.pagedeal;return{reg:b.pagerule,str:getresult(a.result),find:c,successfn:function(b){b?d(b,a):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{reg:/&p=(\d+)">尾页<\/a>/,str:a.result,find:"$1",successfn:function(b){mySession.nowlistpages=
(b||"-1")+"|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){a.multsearch?a.callback():ExView.fw.alert("此插件不支持搜索功能！")},finder:!1,countloader:!1,countfinder:!1},contentflag:{loader:function(a){return{successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"正在加载内容页...",title:"内容页",name:getlistname(a.pid),
img:getlistimg(a.pid)}}},finder:function(a){return{successfn:function(b,c,d,e){console.log(typeof b);if(a.checkupdate)return{pid:a.pid,cid:"1",title:"全1话"};e=[];e[0]=additemlist({id:0,newest:a.newest&&0==d,pid:a.pid,cid:"1",title:"全1话",count:1,reverse:0});return e}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return!1}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"detail/"+(a.pid||"").replace(/\_/g,"/"),method:"GET",timeout:120,
nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"正在加载图片信息...",title:"图片",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/detail_clickable'\s*src='((?!\').*?)'/g,str:a.result,find:"$1",successfn:function(b,c,d,e){array_count(c)?(console.log(e),a.download?chapterpredownload({source:e,
download:a.download,plugin:a.plugin}):chapterviewer({source:e,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.download?chapterpredownload({error:"解析错误！",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("图片信息获取失败！","ExView"));return!0}}}},commentflag:{loader:!1,finder:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},
updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"allfanart?&p="+(a.page||1),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){var b,c,d,e=plugfns(a.plugin).getrule("allfanart");b=e.pagerule;c=e.pagefind;d=e.pagedeal;return{reg:b,str:getresult(a.result),find:c,successfn:function(b){b&&d(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"discover?&p="+(a.page||1),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){var b,c,d,e=plugfns(a.plugin).getrule("discover");b=e.pagerule;c=e.pagefind;d=e.pagedeal;return{reg:b,str:getresult(a.result),find:c,successfn:function(b){b&&d(b,a)}}}}},fns:{getrule:function(a){switch(a){default:case "lastday":case "artwork":case "newPeople":case "allfanart":a=
/\/illust\/(.*?)<\/a>/g;var b="$1",c=function(a,b){var c=getstr(/detail\/([\w,\/]+)/,a).replace(/\//g,"_"),f=getstr(/alt="((?!\").*?)"/,a).split(" "),g=1<f.length?f.pop():"",f=f.join(" "),h=getstr(/src="((?!\").*?)"/,a);c&&plugfns(b.plugin).pagedeal({pid:c,title:f,img:h,stitle:g},b)};break;case "allartwork":a=/\/illust\/(.*?)<\/a>/g;b="$1";c=function(a,b){var c=getstr(/detail\/([\w,\/]+)/,a).replace(/\//g,"_"),f=getstr(/title="((?!\").*?)"/,a).split(" "),g=1<f.length?f.pop():"",f=f.join(" "),h=getstr(/src="((?!\").*?)"/,
a);c&&plugfns(b.plugin).pagedeal({pid:c,title:f,img:h,stitle:g},b)};break;case "discover":a=/\/illust\/(.*?)<\/a>/g,b="$1",c=function(a,b){var c=getstr(/detail\/([\w,\/]+)/,a).replace(/\//g,"_"),f=getstr(/title="((?!\").*?)"/,a),g=getstr(/mr5\s*">((?!<).*?)<\/span>/,a),h=getstr(/src="((?!\").*?)"/,a);c&&plugfns(b.plugin).pagedeal({pid:c,title:f,img:h,stitle:g},b)}}return{pagerule:a,pagefind:b,pagedeal:c}},pagedeal:function(a,b){b=b||{};var c=a.pid,d=a.title,e=a.img,k=a.stitle;if(c&&d&&e){if(b.multupdate)return b.multupdate(obj_contact(b,
{pid:c,img:e,title:d,content:k})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:c,img:e,title:d,content:k})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:e,title:d,content:k})),!1;addcardlist({pid:c,title:d,name:d,img:e,content:"",stitle:k,comment:0,preview:0,extrabutton:""})}}}});
