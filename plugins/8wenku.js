ExView.Plugins({info:{name:"\u516b\u53f7\u6587\u5e93",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAolBMVEX///8PVEUUV0kMUUOcvLWzycQGTT7X4uBijoVIfHHF1tLE1dGxyMNtl44bXE4RVUfZ5OKburSYt7GTsqx3npZbioBWhXxOgndLfnNEe3A4cmYpZ1smZFcjYlXw9fTi6ujP3drI2NW1y8atxcB7oppslIxolIpfjYNBeG0xbWAhYFMESzz1+Pfs8fHp7+6/0c68z8ymv7qCp591nZV1nJQ+dWqDhS6yAAAAvUlEQVQY0z2MR3LDQAwEBwtvEoOYk0jlLOfw/68ZK7ncBxy6eoD86Z+8kIPJ+xLed1vcWaDFA505fDiXQjUNM2PSs79CXVET1qRnaxwOiRT0hhVIBMZtRnMRBLCICIFaBAPLUBgTW0Mi8NyjpfhRnDGFwQuAyBh9L1ISlAo3vYandl8Qa/5KktdytyugjuqdzS2vyNhoFe+hkmPJlFF1c3bjLjL55hMvmauus/FpM8fY9+fL6NtmGD5/hkX9CxlLDDEBlRbzAAAAAElFTkSuQmCC",
author:"Gentle",type:"text",db:"8wenku",apihost:"http://www.8wenku.com/",pagetitle:["<br>","\u6536\u85cf","\u9996\u9875","\u7c7b\u578b","\u4e0b\u8f7d"],lazyload:!0,download:!0,setting:!0,nativeres:!0,typelistmode:!0,smallpicmode:!0,requestcookie:"",cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();ExView.workers.type.loader()}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost,method:"GET",
timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u9996\u9875",title:a.title,img:a.img}}},finder:function(a){return{reg:/\/book\/(\d+)">\s*<img\s*src="((?!\").*?)"(?!<).*?alt="((?!\").*?)"/g,str:a.result,find:{pid:"$1",
img:"$2",title:"$3"},successfn:function(a){console.log(JSON.stringify(a));array_count(a)?addcardlist({pid:a.pid,title:a.title,img:a.img,content:a.content,comment:1}):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)},errorfn:function(){a.page||setnowlistname("\u9996\u9875","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("\u7f51\u7edc\u9519\u8bef\uff01","ExView")}}},countloader:function(a){return!1},
countfinder:function(a){return{successfn:function(){mySession.nowlistpages="-1|\u9996\u9875|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},typeflag:{loader:function(a){return{successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){addtypelist({title:"\u9996\u9875",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u9996\u9875"});for(var b=[],c=0;26>c;c++)b.push(String.fromCharCode(97+c));b.forEach(function(b){addtypelist({tid:b,
title:b.toUpperCase(),img:pluginfo(a.plugin).icon,group:{name:"souyin",title:"\u7d22\u5f15"},content:b.toUpperCase()})});return!1}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"letter/"+a.keyword+"?page="+(a.page||1),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),
mySession.isloading=0,ExView.fw.alert("\u3010"+a.title+"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,name:"\u3010"+a.title+"\u3011",img:a.img}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',
1)}}},countloader:function(a){return!1},countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,find:plugfns(a.plugin).pagecountfind,successfn:function(b){mySession.nowlistpages=(b||"0")+"|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"site/search?keyword="+a.keyword+"&page="+(a.page||1),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},
successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:c})),setnowlistname("\u641c\u7d22\u3010"+a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+
a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b,c,f){console.log(b);array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{reg:plugfns(a.plugin).pagecountrule,str:a.result,
find:plugfns(a.plugin).pagecountfind,successfn:function(b){mySession.nowlistpages=(b||"0")+"|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages)}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"book/"+a.pid,method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=
0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u76ee\u5f55...",title:"\u5185\u5bb9\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){var b=[];a.result=getresult(a.result).replace(/<\/dd>/g,"</dd>\n");var c=getstrs(a.result,/<strong>\s*((?!<).*?)\s*<\/strong>\s*<\/h2>\s*<ul\s*class="lk-chapter-list(.*?)<\/dd>/g,"$1{{separator}}$2"),c=c.map(function(a){a=(a||"").split("{{separator}}");var c=a[0];getstrs(a[1],
/\&chapter_no=(\d+)"><span\s*class="lk-ellipsis inline">((?!<).*?)</g,"$1{{separator}}$2").map(function(a){a=(a||"").split("{{separator}}");b.push({group:{name:"type_"+ExView.tools.md5.hex_md5(c),title:c},item:{cid:a[0],title:a[1]}})})});return{successfn:function(c,e,d,g){console.log(typeof c);if(array_count(c)){if(a.checkupdate)return e=b,c=e[e.length-1],d=(c||{}).group.title,c=(c||{}).item,{pid:a.pid,cid:c.cid,title:d+" "+c.title};myContent.mhkey=ExView.modules.commentpage.duoshuoloader(a.result);
e=b;g=[];b.map(function(b,c){var d=b.item;g[c]=additemlist({id:c,newest:a.newest&&0==c,pid:a.pid,cid:d.cid,title:d.title,group:b.group,count:e.length,reverse:0});g[c].title=b.group.title+" "+d.title});return g}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{reg:/class="lk-book-cover(.*?)<dl>/g,
str:getresult(a.result),find:"$1",successfn:function(b,c,f,e){console.log(JSON.stringify(b));c=getstr(/<img(?!<).*?src="((?!\").*?)"/,b);f=getstr(/<strong>((?!<).*?)<\/strong>/,b);e=getstr(/width="140">((?!<).*?)</,b).trim();var d=getstrs(b,/'\/tag\/((?!').*?)'/g,"$1"),g=gettext(getstr(/\&chapter_no=\d+">((?!<).*?)</,b).trim()),h=getstr(/<td>([\d,\ ,\-,\:]+)<\/td>/,b).trim(),k=getstr(/\u6d4f\u89c8\uff1a<\/strong>(\d+)</,b).trim();b=gettext(getstr(/>\u5185\u5bb9\u7b80\u4ecb<\/strong>(.*?)<\/div>/,
b)).trim();var l=gettag(d),d=(d||[]).join(" ").trim();setlistpic({name:f,img:c,added:a.data,description:"<p>"+(e?"\u3010\u4f5c\u8005\u3011"+e+"<br>":"")+(d?"\u3010\u7c7b\u578b\u3011"+d+"<br>":"")+(k?"\u3010\u6d4f\u89c8\u3011"+k+"<br>":"")+(h?"\u3010\u66f4\u65b0\u3011"+h+"<br>":"")+(g?"\u3010\u6700\u65b0\u8bdd\u3011"+g+"<br>":"")+(b?"\u3010\u7b80\u4ecb\u3011"+b:"")+"</p>",sourceurl:pluginfo(a.plugin).apihost+"book/"+a.pid,comment:1,preview:0,tags:gettag(f)+l+gettag(e)});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"chapter/view?id="+a.pid+"&chapter_no="+a.cid,method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u6587\u7ae0\u4fe1\u606f...",title:"\u6587\u7ae0",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/<div id="J_view"(?!>).*?>(.*?)<\/div>/g,str:getresult(a.result),find:"$1",successfn:function(b){b?
(b=getarticle(b),console.log(b),a.download?chapterpredownload({type:"text",source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,type:"text",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u6587\u7ae0\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},
commentflag:{loader:function(a){myContent.mhkey||$$.ajax({url:pluginfo(a.plugin).apihost+"book/"+a.pid+"/",async:!1,success:function(a){myContent.mhkey=ExView.modules.commentpage.duoshuoloader(a)}});return{url:"http://8wenku.duoshuo.com/api/threads/listPosts.json?thread_key="+myContent.mhkey+"&max_depth=1&page="+parseInt(a.page||1),method:"GET",timeout:120,successfn:function(b,c){b?a.callback&&a.callback({result:b,header:c,commentbrowser:{url:pluginfo(a.plugin).apihost+"book/"+a.pid+"/",title:"\u8bc4\u8bba - "+
pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}}):a.callback&&a.callback()}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,f,e){if(array_count(b)){c=b.cursor.pages;b=b.parentPosts;for(var d in b)a.callback&&a.callback({page:a.page||1,pagecount:c,comment:{text:b[d].message,name:b[d].author.name,avatar:b[d].author.avatar_url,type:"received",label:b[d].created_at.replace(/T/g," ").replace(/\+/g," "),
day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return 1<a.page?(a.multupdate(),!1):{url:pluginfo(a.plugin).apihost,method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,
successfn:function(b){console.log(JSON.stringify(b));array_count(b)&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"letter/s?page="+(a.page||1),method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,header:{Cookie:pluginfo(a.plugin).requestcookie},successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,
successfn:function(b){console.log(JSON.stringify(b));array_count(b)&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{pagecountrule:/page=(\d+)">\u672b\u9875/,pagecountfind:"$1",pagerule:/\/book\/(\d+)">\s*<img\s*src="((?!\").*?)"(?!<).*?alt="((?!\").*?)".*?\&chapter_no=\d+">((?!<).*?)</g,pagefind:{pid:"$1",img:"$2",title:"$3",content:"$4"},pagedeal:function(a,b){b=b||{};var c=a.pid,f=a.img,e=a.title,d="\u66f4\u65b0\u81f3 "+a.content;if(b.multupdate)return b.multupdate(obj_contact(b,{pid:c,img:f,title:e,
content:d})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:c,img:f,title:e,content:d})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:f,title:e,content:d})),!1;addcardlist({pid:c,title:e,name:e,img:f,content:d,comment:1,preview:0,extrabutton:""})}}});