ExView.Plugins({info:{name:"\u52a8\u6f2b\u4e4b\u5bb6\u6587\u5e93",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABtklEQVQ4jZWTzWoUQRSFv1tV3WaCz+M+OGGMjiKKC0FFwSgaDS59BTeKE8MgY0AUF0JQCCaYKPoAPk5MKv0zdV1U/w0hSC4U1XX6nFP3nqYFYPDmr9rE4By4RHBOSFMhTSE5I6SJkKRgHVgriEAIgRfnUpHFURQbw6kMAMoy4MQYUNh+0APg2ocjAD5eTzmpnv+ZxgcVTA1eeusB+HJnjhC0IS/v5DzaK1j9XTZYWSploZQlOACt1uV3HmvBOmnIk4vHOynyKJgqOK3UOw/jCFc2PDJtybc2c1wC1sLGMJplmYKCqiL9tQM1EoP5/rjHcOL5ttw7cf667m3lqILRykkVLow9IbSkq+9jLjc+xWBvfs6ad9mRkmWKI3YTK0BHT6hyKwutZm/DLfJ4qQGou9hd6aEdh637cZSvd+O+eXuuNSiUotD4FWqTuCuDdc/uShQtjT0iIALbVdDDiW/4cv71gQL8XJ0HoD86bAR7T+aPhbc09jPnKsRZkioEhcW1wxl8sB5D7i7XJfRHUVB302ACAvx42uK1uSy82lcR0/Vpfpb/lYaAACy83FcxpzNRVX49Oyv/AAkByABrVBe1AAAAAElFTkSuQmCC",
author:"Gentle",type:"text",db:"dmzjxs",apihost:"http://q.dmzj.com/",pagetitle:["<br>","\u6536\u85cf","\u9996\u9875","\u7c7b\u578b","\u4e0b\u8f7d"],theme:"blue",lazyload:!0,download:!0,setting:!0,cacheheader:{Referer:"http://q.dmzj.com/"},typelistmode:!0,smallpicmode:!0,requestcookie:"",cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();ExView.workers.type.loader()}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"update_"+(a.page||1)+".shtml",method:"GET",timeout:120,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u9996\u9875",title:a.title,img:a.img}}},finder:function(a){return{reg:/<li\s*class=(?!<).*?><a\s*href="\/(\d+)\/index.shtml"(?!>).*?><img\s*src="((?!\").*?)"(?!>).*?><div\s*class="con"><h3>((?!<).*?)<\/h3><p>\s*((?!<).*?)\s*<\/p><p>\s*((?!<).*?)\s*<\/p><p>\s*((?!<).*?)\s*<\/p><p>\s*((?!<).*?)\s*<\/p><\/div><\/a><a(?!<).*?title="((?!\").*?)"(?!<).*?>/g,
str:getresult(a.result),find:{pid:"$1",img:"$2",title:"$3",author:"$4",type:"$5",status:"$6",update:"$7",content:"$8"},successfn:function(a){console.log(JSON.stringify(a));array_count(a)?addcardlist({pid:a.pid,title:a.title,img:a.img,content:a.author?"\u3010\u4f5c\u8005\u3011"+a.author+"<br>"+(a.type?"\u3010\u7c7b\u578b\u3011"+a.type+"<br>":"")+(a.status?"\u3010\u72b6\u6001\u3011"+a.status+"<br>":"")+(a.update?"\u3010\u66f4\u65b0\u3011"+a.update+"<br>":"")+(a.content?"\u3010\u6700\u65b0\u3011"+a.content+
"<br>":""):"",comment:1}):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)},errorfn:function(){a.page||setnowlistname("\u9996\u9875","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("\u7f51\u7edc\u9519\u8bef\uff01","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){mySession.nowlistpages="0|\u9996\u9875|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);
return!0}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"search.shtml",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){addtypelist({title:"\u9996\u9875",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u9996\u9875"});var b=[];getstrs(getresult(a.result),/<div class="se\d+">(.*?)<\/div>/g,"$1").forEach(function(a){var d=getstr(/<h5>((?!>).*?)<\/h5>/,a).replace(/\\uff1a/g,"").replace(/\u6309/g,
"").replace(/\u67e5\u627e/g,""),e=getstrs(a,/\/tags\/(\w+).shtml[\"|\'](?!>).*?title=[\"|\']((?![\"|\']).*?)[\"|\']/g,"$1{{separator}}$2");array_count(e)||(e=getstrs(a,/\/tags\/([\w,\d,\~]+).shtml">([\w,\d,\~]+)</g,"$1{{separator}}$2"));(e||[]).forEach(function(a){b.push({group:{name:"type_"+ExView.tools.md5.hex_md5(d),title:d},value:a})})});b.forEach(function(b){var d=b.value,d=(d||"").split("{{separator}}");addtypelist({tid:d[0],title:d[1],img:pluginfo(a.plugin).icon,group:b.group,content:d[1]})});
return!1}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"tags/js/"+a.keyword+".js",method:"GET",timeout:120,successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.title+"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,
name:"\u3010"+a.title+"\u3011",img:a.img}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){mySession.nowlistpages="-1|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);
return!0}}}},searchflag:{loader:function(a){return 1<parseInt(a.page)?(a.multsearch&&a.multsearch(),!1):{url:"http://s.acg.dmzj.com/lnovelsum/search.php?s="+a.keyword,method:"GET",timeout:120,successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:c})),setnowlistname("\u641c\u7d22\u3010"+a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+
a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b,c,d){console.log(b);b?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',
1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){mySession.nowlistpages="-1|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages)}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.pid+"/index.shtml",method:"GET",timeout:120,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01",
"ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u76ee\u5f55...",title:"\u5185\u5bb9\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){var b=[];a.result=getresult(a.result).replace(/<\/script>/g,"volume_list\n");var c=getstrs(a.result,/class="chapnamesub">((?!<).*?)<\/div>(.*?)volume_list/g,"$1{{separator}}$2"),c=c.map(function(a){a=(a||"").split("{{separator}}");var c=a[0];getstrs(a[1],/\/\d+\/([\d,\/]+).shtml"\s*alt="((?!\").*?)"/g,"$1{{separator}}$2").map(function(a){a=
(a||"").split("{{separator}}");b.push({group:{name:"type_"+ExView.tools.md5.hex_md5(c),title:c},item:{cid:(a[0]||"").replace(/\//g,"_"),title:a[1]}})})});return{successfn:function(c,e,g,f){console.log(typeof c);if(array_count(c)){if(a.checkupdate)return e=b,c=e[e.length-1],g=(c||{}).group.title,c=(c||{}).item,{pid:a.pid,cid:c.cid,title:g+" "+c.title};e=b;f=[];b.map(function(b,c){var d=b.item;f[c]=additemlist({id:c,newest:a.newest&&0==c,pid:a.pid,cid:d.cid,title:d.title,group:b.group,count:e.length,
reverse:0});f[c].title=b.group.title+" "+d.title});return f}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{reg:/class="pic">(.*?)<div\s*class="tool">/g,str:getresult(a.result),find:"$1",successfn:function(b,c,d,e){console.log(JSON.stringify(b));c=getstr(/<img(?!<).*?src="((?!\").*?)"/,
b);d=getstr(/<h3>((?!<).*?)<\/h3>/,b);e=getstr(/<p>\u72b6\u6001\uff1a((?!<).*?)<\/p>/,b).trim();var g=getstr(/<p>\u4f5c\u8005\uff1a((?!<).*?)<\/p>/,b).trim(),f=getstrs(b,/<p>\u7c7b\u578b\uff1a((?!<).*?)<\/p>/g,"$1");b=getstr(/<p>\u66f4\u65b0\uff1a((?!<).*?)<\/p>/,b).trim();var h=gettext(getstr(/<h3>\u5c0f\u8bf4\u4ecb\u7ecd\uff1a<\/h3>(.*?)<\/div>/,getresult(a.result))).trim(),k=gettag(f),f=(f||[]).join(" ").trim();setlistpic({name:d,img:c,added:a.data,description:"<p>"+(g?"\u3010\u4f5c\u8005\u3011"+
g+"<br>":"")+(f?"\u3010\u7c7b\u578b\u3011"+f+"<br>":"")+(e?"\u3010\u72b6\u6001\u3011"+e+"<br>":"")+(b?"\u3010\u66f4\u65b0\u3011"+b+"<br>":"")+(h?"\u3010\u7b80\u4ecb\u3011"+h:"")+"</p>",sourceurl:pluginfo(a.plugin).apihost+a.pid+"/index.shtml",comment:1,preview:0,tags:gettag(d)+k+gettag(g)+gettag(e)});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.pid+"/"+(a.cid||"").replace(/\_/g,"/")+".shtml",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,
header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u6587\u7ae0\u4fe1\u606f...",title:"\u6587\u7ae0",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/id="page_contents">(.*?)<div\s*class="section4"/g,str:getresult(a.result),find:"$1",successfn:function(b){b?(b=getarticle(b,!1,!1,function(a){return a.replace(/\.\.\/\.\.\//g,"http://xs.dmzj.com/")}),console.log(b),a.download?chapterpredownload({type:"text",source:b,download:a.download,plugin:a.plugin}):
chapterviewer({source:b,type:"text",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u6587\u7ae0\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},commentflag:{loader:function(a){return{url:"http://interface.dmzj.com/api/NewComment2/list?callback=comment_list_s&&type=1&obj_id="+
a.pid+"&hot=0&page_index="+(a.page||1),method:"GET",timeout:120,successfn:function(b,c){b?((b=b.replace("comment_list_s",""))&&(b=b.substr(2,b.length-3)),a.callback&&a.callback({result:b,header:c,commentbrowser:{url:"http://xs.dmzj.com/"+a.pid+"/index.shtml",title:"\u8bc4\u8bba - "+pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}})):a.callback&&a.callback()}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,
c,d,e){array_count(b)?a.callback&&a.callback({page:a.page||1,pagecount:0,comment:{text:b.content,name:b.nickname,avatar:getimgload(b.avatar_url,a.plugin),type:"received",label:getLocalTime(1E3*parseInt(b.create_time)),day:"",time:"",reverse:1,extra:""}}):a.callback&&a.callback({page:a.page||1,pagecount:-1})}}},send:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"update_"+(a.page||1)+".shtml",method:"GET",timeout:120,
successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:/<li\s*class=(?!<).*?><a\s*href="\/(\d+)\/index.shtml"(?!>).*?><img\s*src="((?!\").*?)"(?!>).*?><div\s*class="con"><h3>((?!<).*?)<\/h3><p>\s*((?!<).*?)\s*<\/p><p>\s*((?!<).*?)\s*<\/p><p>\s*((?!<).*?)\s*<\/p><p>\s*((?!<).*?)\s*<\/p><\/div><\/a><a(?!<).*?title="((?!\").*?)"(?!<).*?>/g,str:getresult(a.result),find:{pid:"$1",img:"$2",title:"$3",author:"$4",type:"$5",status:"$6",update:"$7",content:"$8"},
successfn:function(b){console.log(JSON.stringify(b));if(array_count(b)){if(a.multupdate)return a.multupdate(obj_contact(a,{pid:b.pid,img:b.img,title:b.title,content:b.content?"\u66f4\u65b0\u81f3 "+b.content:""})),!1}else addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)}}}},hotflag:{loader:function(a){return 1<a.page?(a.multhot(),!1):{url:pluginfo(a.plugin).apihost+"rank.shtml",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&
a.successfn({result:b,header:c})}}},finder:function(a){return{reg:/<li\s*class=(?!<).*?><a\s*href="\/(\d+)\/index.shtml"(?!>).*?><img\s*src="((?!\").*?)"(?!>).*?><div\s*class="con"><h3>(.*?)<\/h3><p>\s*(.*?)\s*<\/p><p>\s*(.*?)\s*<\/p>/g,str:getresult(a.result),find:{pid:"$1",img:"$2",title:"$3",author:"$4",type:"$5",status:"$6",update:"$7",content:"$8"},successfn:function(b){console.log(JSON.stringify(b));if(array_count(b)){if(a.multhot)return a.multhot(obj_contact(a,{pid:b.pid,img:b.img,title:b.title,
content:b.type?b.type:""})),!1}else addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)}}}}},fns:{pagecountrule:/page=(\d+)">\u672b\u9875/,pagecountfind:"$1",pagerule:/var\s*g_.*?=\s*\[(.*?)\];/g,pagefind:"$1",pagedeal:function(a,b){b=b||{};a=JSON.parse("["+a+"]"||[]);a.forEach(function(a){var d=getstr(/\/(\d+)\/index.shtml/,a.lnovel_url),e=a.m_image_url||a.image_url,g=a.full_name,f="\u66f4\u65b0\u81f3 "+a.fullc_name,h=a.author,k=a.types,
l=a.status,m=gettext(a.m_intro||a.description).replace(/\\u3000/g,"");if(b.multupdate)return b.multupdate(obj_contact(b,{pid:d,img:e,title:g,content:f})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:d,img:e,title:g,content:f})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:d,img:e,title:g,content:f})),!1;addcardlist({pid:d,title:g,name:g,img:e,content:(h?"\u3010\u4f5c\u8005\u3011"+h+"<br>":"")+(k?"\u3010\u7c7b\u578b\u3011"+k+"<br>":"")+(l?"\u3010\u72b6\u6001\u3011"+l+"<br>":"")+
(a.fullc_name?"\u3010\u66f4\u65b0\u3011"+a.fullc_name+"<br>":"")+(m?"\u3010\u7b80\u4ecb\u3011"+m+"<br>":""),comment:1,preview:0,extrabutton:""})})}}});
