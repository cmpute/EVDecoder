ExView.Plugins({info:{name:"绅士漫画",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABTElEQVQ4jcXTsUuVURgG8N93/YiQiGi4SaP/gBAR0uSQDlcUKaOM8g9obzEa00UXwaUIhBLhgtTm4tTgKK41O9xA5GZw0evtfg3n9XaRvsmhdzrnvOd5zvM+73uyoihcJiqXQiOvvPsJNzCBK2hgJ/LTeI9B5NjDExz0CPwu4CE+xFkTI7iHjSA9j/vYDpIGjrPK6tFHPL+grB0vlpXYifynbGDl8FccrKOFYTztu7yPr7iOGqp9uWau3c3xHUtBcBez8cJrLIZHLVzFFh70PMjOuie4gx8XZH4J8Bpe4gSPMYdvuJkITrslZdrAaICnMC4ZfStKmkkE7dJBynHOfk1qZSf2PXPz7KxUwQtMYhmbOMYjDGHsL0G7lKCGt3iFN5IHVXyWOhIyyxXAgtTS3QCN9YOTgk5Rx7w0PP+K23gW61aUQprQevbff+Mf0PRSnPpQ2roAAAAASUVORK5CYII=",
db:"wnacg",apihost:"https://wnacg.org/",pagetitle:["<br>","收藏","首页","类型","下载"],lazyload:!0,download:!0,nativeres:!0,setting:!0,typelistmode:!0,cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader()}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+(1<parseInt(a.page)?"albums-index-page-"+a.page+".html":"albums.html"),method:"GET",timeout:120,
nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.front||a.page||ExView.workers.type.finder({result:b,plugin:a.plugin});a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',
2)},errorfn:function(){a.page||setnowlistname("首页","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("网络错误！","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(a){console.log(a);mySession.nowlistpages=(a||"-1")+"|首页|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);
return!0}}}},typeflag:{loader:function(a){return{successfn:function(){ExView.workers.index.loader()}}},finder:function(a){addtypelist({title:"首页",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"首页"});[{tid:5,title:"同人志全部",group:{name:"tongrenzhi",title:"同人志"}},{tid:1,title:"同人志漢化",group:{name:"tongrenzhi",title:"同人志"}},{tid:12,title:"同人志日語",
group:{name:"tongrenzhi",title:"同人志"}},{tid:2,title:"CG畫集",group:{name:"tongrenzhi",title:"同人志"}},{tid:3,title:"Cosplay",group:{name:"tongrenzhi",title:"同人志"}},{tid:6,title:"單行本全部",group:{name:"danhangben",title:"單行本"}},{tid:9,title:"單行本漢化",group:{name:"danhangben",title:"單行本"}},{tid:13,title:"單行本日語",group:{name:"danhangben",title:"單行本"}},
{tid:7,title:"雜誌全部",group:{name:"zazhi",title:"雜誌"}},{tid:10,title:"雜誌單篇漢化",group:{name:"zazhi",title:"雜誌"}},{tid:14,title:"雜誌日語",group:{name:"zazhi",title:"雜誌"}}].forEach(function(b){addtypelist(obj_contact(b,{img:pluginfo(a.plugin).icon}))});return!1}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"albums-index-"+(1<parseInt(a.page)?"page-"+a.page+"-":"")+"cate-"+a.keyword+".html",
method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("【"+a.title+"】<br>获取失败！","ExView"))}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,
successfn:function(b){b?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){console.log(b);mySession.nowlistpages=(b||"-1")+"|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"albums-index-page-"+(a.page||1)+"-sname-"+a.keyword+".html",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:c})),setnowlistname("搜索【"+a.keyword+"】")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("【"+
a.keyword+"】<br>获取搜索结果失败！","ExView"))}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b,c,d){console.log(b);b?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,
str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){console.log(b);mySession.nowlistpages=(b||"-1")+"|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"photos-index-aid-"+a.pid+".html",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){b?a.successfn&&a.successfn({result:b,
header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("内容页获取失败！","ExView"))},showinfo:{text:"正在加载内容页...",title:"内容页",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){b=b||1;console.log(typeof b);if(b){if(a.checkupdate)return{pid:a.pid,cid:b,
title:"第"+b+"话"};for(var c=[],d=0;d<parseInt(b);d++)c[d]=additemlist({id:d,newest:a.newest&&0==d,pid:a.pid,cid:d+1,title:"第"+(d+1)+"话",count:parseInt(b),reverse:0});return c}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("内容页获取失败！","ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{reg:/class="userwrap">(.*?)<div\s*id="bodywrap"/g,
str:getresult(a.result),find:"$1",successfn:function(b,c,d,e){console.log(JSON.stringify(b));c=getstr(/data-original="((?!\").*?)"/,b);d=getstr(/<h2>((?!<).*?)<\/h2>/,b);e=getstr(/<p>((?!<).*?)<\/p>\s*\r*\n\s*<p>投搞作品\s*</,a.result);var g=getstr(/<label>分類：((?!<).*?)<\/label>/,b).trim(),f=getstr(/<p>簡介：(.*?)<\/p>/,b).trim(),h=getstr(/<label>頁數：(\d+)P<\/label>/,b).trim();b=getstrs(b,/albums-index-tag-([\d,\w,\%]+)\.html/g,"$1")||[];b=
b.map(function(a){return decodeURI(a)});setlistpic({name:d,img:c,added:a.data,description:"<p>【作者】"+e+"<br>【类型】"+g+"<br>【标签】"+b.join(", ")+"<br>【页数】"+h+(f?"<br>【简介】"+gettext(f):"")+"</p>",comment:0,preview:1,tags:gettag(d)+gettag(g)+gettag(e)+gettag(b)});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"photos-index-page-"+a.cid+"-aid-"+a.pid+".html",method:"GET",timeout:120,
nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"正在加载图片信息...",title:"图片",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{query:!0,str:a.result,selector:".pic_box",successfn:function(b,c,d,e){if(array_count(c)){b=[];for(d=0;d<c.length;d++)e=$$(c[d]).find("a").attr("href"),
e=getstr(/\/photos-view-id-(\d+).html/,e),b.push(getpageload(pluginfo(a.plugin).apihost+"photos-view-id-"+e+".html",a.plugin||mySession.nowplugin,{cacheheader:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},nativeres:pluginfo(a.plugin).nativeres}));console.log(b);a.download?chapterpredownload({source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})}else a.download?chapterpredownload({error:"解析错误！",
download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("图片信息获取失败！","ExView"));return!0}}}},commentflag:{loader:!1,finder:!1},previewflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"photos-index"+(1<parseInt(a.page)?"-page-"+a.page:"")+"-aid-"+a.pid+".html",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},
successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.modules.previewpage.error(a),ExView.fw.alert("预览信息获取失败！","ExView"))},showinfo:{text:"正在获取预览信息...",title:"预览页",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{query:!0,str:a.result,selector:".pic_box",successfn:function(b,c,d,e){c=$$(b).find("img").attr("src");
c=pluginfo(a.plugin).apihost+(0==c.indexOf("/")?c.substring(1):c);c=getimgload(c,a.plugin,{cacheheader:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},nativeres:pluginfo(a.plugin).nativeres});b=$$(b).find("a").attr("href");b=getstr(/photos-view-id-(\d+).html/,b);addpreviewlist({page:a.page||1,pagecount:myContent.items.length,preview:{imgurl:c,pageurl:pluginfo(a.plugin).apihost+"photos-view-id-"+b+".html"}})}}}},pageimgflag:{parser:function(a){return{reg:/class="posselect"><img src="((?!").*?)"/g,
str:getresult(a.result),find:"$1",successfn:function(b){b=0==b.indexOf("/")?pluginfo(a.plugin).apihost+b.substring(1):b;b=getimgload(b,a.plugin,{cacheheader:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},nativeres:pluginfo(a.plugin).nativeres});console.log("xxx:"+b);a.loadimgurl(b)}}}},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+(1<parseInt(a.page)?"albums-index-page-"+a.page+".html":""),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{"User-Agent":"ExView",
Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"albums-index-"+(1<parseInt(a.page)?"page-"+a.page+"-":"")+"cate-3.html",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,
header:{"User-Agent":"ExView",Referer:pluginfo(a.plugin).apihost},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{pagecountrule:/>(\d+)<\/a>\s*<span\s*class="next"/g,pagecountfind:"$1",pagerule:/<li class="li\s*gallary_item">(.*?)<div\s*class="pic_ctl">/g,pagefind:"$1",
pagedeal:function(a,b){b=b||{};var c=getstr(/photos-index-aid-(\d+).html"/,a),d=getstr(/alt="((?!\").*?)"/,a);getstr(/(\d+)張照片/,a);var e=getstr(/src="((?!\").*?)"/,a),g=getstr(/創建於([\d,\-]+)/,a),f=getboxitem(getstr(/(\d+)張照片/,a)+"P"),e=0==e.indexOf("/")?pluginfo(b.plugin).apihost+e.substring(1):e,e=getimgload(e,b.plugin,{cacheheader:{"User-Agent":"ExView",Referer:pluginfo(b.plugin).apihost},nativeres:pluginfo(b.plugin).nativeres}),h=f,f=g;if(b.multupdate)return b.multupdate(obj_contact(b,
{pid:c,img:e,title:d,content:f})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:c,img:e,title:d,content:f})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:e,title:d,content:f})),!1;addcardlist({pid:c,title:d,img:e,content:h,stitle:g,comment:0,preview:1,extrabutton:""})}}});
