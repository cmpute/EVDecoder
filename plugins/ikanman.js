ExView.Plugins({info:{name:"看漫画",version:"2.2",db:"ikanman",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAAABAQGbz/L///9foc87Ozs0gLRXV1cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9vESkAAAAAXRSTlMkfOU8twAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABbSURBVAiZY2BgLweBAgbWchgjVAkIUgMYWINcgACVkQYEQEagIBiIMvyHAoZ4QWMgMPzKwCgMYth/ADLsPwMhiGH62T4YxPgMleL/D2L8/8AA1c/AABQCgg8MAJjvNAPeoyOHAAAAAElFTkSuQmCC",apihost:"http://m.ikanman.com/",pagetitle:["<br>","收藏",
"首页","类型","下载"],lazyload:!0,download:!0,setting:!0,typelistmode:!0,cacheheader:{Referer:"http://m.ikanman.com/"},nativeres:!0,cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader()}})},flags:{indexflag:{loader:function(a){a.front||a.page||setnowlistname("首页","",pluginfo(a.plugin).icon);a.front||a.page||addtypelist('<div align="center" class="list-block"><img src="img/logo.png"/><br>加载<br>正在类型...<div class="progress"></span></div>',
2);return{url:pluginfo(a.plugin).apihost,method:"GET",timeout:120,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));ExView.workers.type.finder({result:b,plugin:a.plugin});a.successfn&&a.successfn({result:b,header:c})},errorfn:function(){a.page||setnowlistname("首页","",pluginfo(a.plugin).icon);addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>加载失败，请刷新重试！</a></div>',
2);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("网络错误！","ExView")},canclefn:function(){a.page||setnowlistname("首页","",pluginfo(a.plugin).icon);addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>加载失败，请刷新重试！</a></div>',2)},showinfo:{text:"正在加载..."+(1<a.page?"<br>第"+a.page+
"页":""),title:a.title,name:"首页",img:a.img}}},finder:function(a){return{reg:/<li><a\s*href=\"\/comic\/(\d+)\/\"><img\s*data\-src\=\"((?!<).*?)\"\s*\/><h3>((?!<).*?)<\/h3><p>(.*?)<\/p><\/a><\/li>/g,str:a.result.replace(/<ul>/g,"<ul>\n"),find:{pid:"$1",img:"$2",title:"$3",content:"$4"},successfn:function(a){console.log(JSON.stringify(a));array_count(a)?addcardlist({pid:gettext(a.pid),title:gettext(a.title),img:htmlEncode(a.img),content:gettext(a.content),comment:1}):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',
2)},errorfn:function(){a.page||setnowlistname("首页","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("网络错误！","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){mySession.nowlistpages="-1|首页|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},typeflag:{loader:function(a){return{successfn:function(){ExView.workers.index.loader()}}},finder:function(a){addtypelist({title:"首页",
img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"首页"});addtypelist({tid:"",listflag:"update",title:"最新更新",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"最新更新"});addtypelist({tid:"",listflag:"rank",title:"排行榜",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"排行榜"});addtypelist({tid:"",title:"全部",img:pluginfo(a.plugin).icon,
group:{name:"fenlei",title:"分类"},content:"全部"});addtypelist({tid:"lianzai",title:"连载",img:pluginfo(a.plugin).icon,group:{name:"fenlei",title:"分类"},content:"连载"});addtypelist({tid:"wanjie",title:"完结",img:pluginfo(a.plugin).icon,group:{name:"fenlei",title:"分类"},content:"完结"});return{reg:/<li><a\s*href\=\"\/list\/([a-z]+)\/\">(.*?)<\/a>/g,str:a.result,find:"$1{{separator}}$2",successfn:function(b){b=b.split("{{separator}}");
array_count(b)?addtypelist({tid:b[0],title:b[1],img:pluginfo(a.plugin).icon,group:{name:"fenlei",title:"分类"},content:b[1]}):addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>加载失败，请刷新重试！</a></div>',2)}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+(a.flag?a.flag+"/":"list/"+(a.keyword?a.keyword+"/":""))+"?page="+
(a.page||1)+"&catid=0&ajax=1&order=0",method:"GET",timeout:120,successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("【"+a.title+"】<br>获取失败！","ExView"))},showinfo:{text:"正在加载..."+(1<a.page?"<br>第"+a.page+"页":""),title:a.title,name:"【"+a.title+"】",img:a.img}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,
str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){mySession.nowlistpages="0|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"s/"+a.keyword+
".html?page="+(a.page||1)+"&ajax=1&order=0&key="+a.keyword,method:"GET",timeout:120,successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:c})),setnowlistname("搜索【"+a.keyword+"】")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("【"+a.keyword+"】<br>获取搜索结果失败！","ExView"))},showinfo:{text:"正在搜索..."+
(1<a.page?"<br>第"+a.page+"页":""),name:"【"+a.keyword+"】",title:"搜索"}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b,c,q){console.log(b);b?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>没有内容</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){mySession.nowlistpages=
"0|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages)}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"comic/"+a.pid+"/",method:"GET",timeout:120,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("内容页获取失败！","ExView"))},showinfo:{text:"正在加载内容页...",title:"内容页",
name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){var b=function(){var a=String.fromCharCode,b={},c={decompressFromBase64:function(a){return null==a?"":""==a?null:c._0(a.length,32,function(c){c=a.charAt(c);if(!b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]){b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]={};for(var q=0;65>q;q++)b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q)]=
q}return b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="][c]})},_0:function(b,c,u){var g=[],n=4,t=4,v=3,f="",y=[],m,h,k,d,p,l=u(0),e=c,r=1;for(m=0;3>m;m+=1)g[m]=m;f=0;k=Math.pow(2,2);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=u(r++)),f|=(0<h?1:0)*d,d<<=1;switch(f){case 0:f=0;k=Math.pow(2,8);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=u(r++)),f|=(0<h?1:0)*d,d<<=1;p=a(f);break;case 1:f=0;k=Math.pow(2,16);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=u(r++)),f|=(0<h?1:0)*d,d<<=1;p=a(f);break;case 2:return""}m=
g[3]=p;for(y.push(p);;){if(r>b)return"";f=0;k=Math.pow(2,v);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=u(r++)),f|=(0<h?1:0)*d,d<<=1;switch(p=f){case 0:f=0;k=Math.pow(2,8);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=u(r++)),f|=(0<h?1:0)*d,d<<=1;g[t++]=a(f);p=t-1;n--;break;case 1:f=0;k=Math.pow(2,16);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=u(r++)),f|=(0<h?1:0)*d,d<<=1;g[t++]=a(f);p=t-1;n--;break;case 2:return y.join("")}0==n&&(n=Math.pow(2,v),v++);if(g[p])f=g[p];else if(p===t)f=m+m.charAt(0);else return null;
y.push(f);g[t++]=m+f.charAt(0);n--;m=f;0==n&&(n=Math.pow(2,v),v++)}}};return c}();String.prototype.splic=function(a){return b.decompressFromBase64(this).split(a)};if(/__VIEWSTATE/g.test(a.result)){var c=getquery(a.result,"#__VIEWSTATE").val();a.result=a.result.replace(c,b.decompressFromBase64(c))}return{reg:/<li><a\s*href\=\"\/comic\/(\d+)\/(\d+)\.html\".*?>(.*?)<\/a>/g,str:a.result,find:{pid:"$1",cid:"$2",title:"$3"},successfn:function(b,c,g,w){console.log(typeof b);if(array_count(b)){if(a.checkupdate)return{pid:b.pid,
cid:b.cid,title:gettext(b.title)};c=[];for(g=0;g<w.length;g++)b=w[g],c[g]=additemlist({id:w.length-g-1,newest:a.newest&&0==g,pid:b.pid,cid:b.cid,title:gettext(b.title),count:w.length,reverse:1});return c}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("内容页获取失败！","ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{reg:/<div\s*class="book-detail">((?:.|[\r\n])*?)<div\s*class="chapter">/g,
str:a.result,find:"$1",successfn:function(b,c,q,n){console.log(JSON.stringify(b));c=getstr(/<img\s*src="((?!\").*?)"/,b);q=getstr(/<h1>((?!<).*?)<\/h1>/,a.result);n=getstr(/<i>((?!<).*?)<\/i>/,b);var g=getstr(/<dt>更新至：<\/dt><dd>((?!<).*?)<\/dd>/,b),w=getstr(/<dt>更新于：<\/dt><dd>((?!<).*?)<\/dd>/,b),A=getstrs(b,/<a href="\/author\/\d+\/" title="((?!\").*?)">/g,"$1"),u=getstrs(b,/<a\s*href="\/list\/[\w,\d]+\/"\s*title="((?!<).*?)">/g,"$1"),z=gettext(getstr(/id="bookIntro">(.*?)<\/div>/,
b));b=gettags(b,/<a\s*href="\/list\/[\w,\d]+\/"\s*title="((?!<).*?)">/g,"$1");setlistpic({name:q,img:c,added:a.data,description:"<p>【作者】"+A+"<br>【类型】"+u+"<br>【"+n+"】"+w+"<br>【最新话】"+g+"<br>【简介】"+z+"</p>",sourceurl:pluginfo(a.plugin).apihost+"comic/"+a.pid+"/",comment:1,preview:0,tags:gettag(q)+gettag(n)+b+gettag(A)});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"comic/"+
a.pid+"/"+a.cid+".html",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"正在加载图片信息...",title:"图片",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/window\["\\x65\\x76\\x61\\x6c"\](.*?)\s*<\/script>/g,str:a.result,find:"$1",successfn:function(b){b?(console.log(b),plugfns(a.plugin).crack(b,function(b){b=b.images;b=b.map(function(a){return getimgload("http://p.yogajx.com/"+
("/"==a.substring(0,1)?a.substring(1):a))});console.log(b);a.download?chapterpredownload({source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})})):a.download?chapterpredownload({error:"解析错误！",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("图片信息获取失败！","ExView"));
return!0}}}},commentflag:{loader:function(a){return{url:1==parseInt(a.page||1)?"http://changyan.sohu.com/api/2/topic/load?client_id=cyrGRjNE5&topic_url="+encodeURIComponent(pluginfo(a.plugin).apihost+"comic/"+a.pid+"/")+"&page_size=30&hot_size=0&topic_source_id="+a.pid:"http://changyan.sohu.com/api/2/topic/comments?client_id=cyrGRjNE5&page_size=30&topic_id="+a.sid+"&page_no="+(a.page+1),method:"GET",timeout:120,successfn:function(b,c){if(b){var q={};1==parseInt(a.page||1)&&(q=JSON.parse(b));a.callback&&
a.callback({result:b,header:c,sid:q.topic_id||a.sid,commentbrowser:{url:pluginfo(a.plugin).apihost+"comic/"+a.pid+"/",title:"评论 - "+pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}})}else a.callback&&a.callback()}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,q,n){if(array_count(b)){c=b.comments;b=b.total_page_no;for(var g in c)a.callback&&a.callback({page:a.page||1,pagecount:b,comment:{text:c[g].content,
name:c[g].passport.nickname,avatar:c[g].passport.img_url,type:"received",label:(new Date(parseInt(c[g].create_time))).toLocaleString().replace(/:\d{1,2}$/," "),day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"update/?page="+(a.page||1)+"&catid=0&ajax=1&order=0",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,
str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"rank/?page="+(a.page||1)+"&catid=0&ajax=1&order=0",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));
b&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{pagerule:/<a\s*href=\"\/comic\/(\d+)\/\"><div\s*class=\"thumb\"><img\s*data-src=\"(.*?)\"\s*><i>(.*?)<\/i><\/div><h3>(.*?)<\/h3><dl><dt>作 者：<\/dt><dd>(.*?)<\/dd><\/dl><dl><dt>类 别：<\/dt><dd>(.*?)<\/dd><\/dl><dl><dt>更新至：<\/dt><dd>(.*?)<\/dd><\/dl><dl><dt>更新于：<\/dt><dd>(.*?)<\/dd><\/dl><\/a>/g,pagefind:"$1{{separator}}$2{{separator}}$3{{separator}}$4{{separator}}$5{{separator}}$6{{separator}}$7{{separator}}$8",
pagedeal:function(a,b){b=b||{};a=a.split("{{separator}}");var c=a[0],q=a[1],n=a[2],g=a[3],w=a[4],A=a[5],u=a[7],z=a[6];if(b.multupdate)return b.multupdate(obj_contact(b,{pid:c,img:q,title:g,content:z})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:c,img:q,title:g,content:z})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:q,title:g,content:z})),!1;addcardlist({pid:c,title:g,name:"【"+w+"】"+g+"【"+n+"】",img:q,content:"【"+A+"】更新至 "+z,
stitle:u,comment:1,preview:0,extrabutton:""})},crack:function(a,b){var c=function(){var a=String.fromCharCode,b={},c={decompressFromBase64:function(a){return null==a?"":""==a?null:c._0(a.length,32,function(c){c=a.charAt(c);if(!b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]){b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]={};for(var g=0;65>g;g++)b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)]=
g}return b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="][c]})},_0:function(b,c,g){var n=[],x=4,t=4,v=3,f="",y=[],m,h,k,d,p,l=g(0),e=c,r=1;for(m=0;3>m;m+=1)n[m]=m;f=0;k=Math.pow(2,2);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=g(r++)),f|=(0<h?1:0)*d,d<<=1;switch(f){case 0:f=0;k=Math.pow(2,8);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=g(r++)),f|=(0<h?1:0)*d,d<<=1;p=a(f);break;case 1:f=0;k=Math.pow(2,16);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=g(r++)),f|=(0<h?1:0)*d,d<<=1;p=a(f);break;case 2:return""}m=
n[3]=p;for(y.push(p);;){if(r>b)return"";f=0;k=Math.pow(2,v);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=g(r++)),f|=(0<h?1:0)*d,d<<=1;switch(p=f){case 0:f=0;k=Math.pow(2,8);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=g(r++)),f|=(0<h?1:0)*d,d<<=1;n[t++]=a(f);p=t-1;x--;break;case 1:f=0;k=Math.pow(2,16);for(d=1;d!=k;)h=l&e,e>>=1,0==e&&(e=c,l=g(r++)),f|=(0<h?1:0)*d,d<<=1;n[t++]=a(f);p=t-1;x--;break;case 2:return y.join("")}0==x&&(x=Math.pow(2,v),v++);if(n[p])f=n[p];else if(p===t)f=m+m.charAt(0);else return null;
y.push(f);n[t++]=m+f.charAt(0);x--;m=f;0==x&&(x=Math.pow(2,v),v++)}}};return c}();String.prototype.splic=function(a){return c.decompressFromBase64(this).split(a)};SMH={reader:function(a){return{preInit:function(){b(a)}}}};a="eval"+a;console.log(a);a&&eval(a)}}});
