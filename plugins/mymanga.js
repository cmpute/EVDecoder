ExView.Plugins({info:{name:"MyManga\u6f2b\u753b",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAsVBMVEUAAAATHW1Nl+IfN4ggJG1RouxRoetNmOJUo+xFhtIkOoNGh9RbpOlCf8onJnFJjdZKlN5IkNtDhtFRoetLlN1OnulGidU/f80lR5pLmOQoS5tOmOIRJX42Z7JGidIXKoBDf8dHjtpBfMZPnuhHj9wcLntYpu0sT5w0Yq9Ii9ZBd8E6bbUbNIY7ZaoZKX05X6cqTppTqPJUp/BTpO5SpvBRoexPnulNmuVKlOBKj9g2bbztXC+4AAAAMXRSTlMADacTBvvu67RvUTgiGQT28vHq4t3Szc3HvLSxsbCfn5mMh4J/fHFgX1hNSEZDOjEldBQS8QAAAJBJREFUGNOdjkcWwjAMRGU7PRB6770XS3YC3P9g2IYHOxb8hd7M12bgPzwG6XK2WJfePeW9uIUoMXIm2zWk9ElaorIRcWAjKXuRGzNAF7UxiIoLmPvSogpFhBjs4dJEZ/KC8tu90gdvqs0fpX7Uu5NVcgY4hUika53hkWWvWWNS1VEi2GfoIWxvTPsitlf4wRPsmxOnb02v1QAAAABJRU5ErkJggg==",
db:"mymanga",apihost:"http://www.mymanga.me/",pagetitle:["<br>","Favorite","Index","Type","Download"],lazyload:!0,download:!0,setting:!0,gallerymode:!0,typelistmode:!0,theme:"bluegray",cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();ExView.workers.type.loader()}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost,method:"GET",timeout:120,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,
{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"Index",title:a.title,img:a.img}}},finder:function(a){return{reg:/class="col-md(.*?)<exview>/g,str:getresult(a.result).replace(/<footer/g,"<exview><footer").replace(/class="col-md/g,'<exview>class="col-md'),find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b,a,1):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',
1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){mySession.nowlistpages="-1|Index|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"manga-directory/",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){addtypelist({title:"Index",img:pluginfo(a.plugin).icon,group:{name:"navigation",title:"Navigation"},
content:"Index"});addtypelist({tid:"",title:"Latest-Release",listflag:"latest-release",img:pluginfo(a.plugin).icon,group:{name:"navigation",title:"Navigation"},content:"Latest-Release"});addtypelist({tid:"",title:"Hot-Manga",listflag:"hot-manga",img:pluginfo(a.plugin).icon,group:{name:"navigation",title:"Navigation"},content:"Hot-Manga"});addtypelist({tid:"all",title:"All",img:pluginfo(a.plugin).icon,group:{name:"manga-directory",title:"Manga Directory"},content:"All"});return{reg:/<option\s*value="(\w+)">([\w,\/]+)<\/option>/g,
str:a.result,find:{name:"$1",title:"$2"},successfn:function(b){if(array_count(b)){if("views"==b.name)return!1;addtypelist({tid:b.name,title:b.title,img:pluginfo(a.plugin).icon,group:{name:"manga-directory",title:"Manga Directory"},content:b.title})}else addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01</a></div>',2)}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
("latest-release"==a.flag||"hot-manga"==a.flag?a.flag+"/"+(a.page||1):"manga-directory/"+a.keyword+"/views"),method:"GET",timeout:120,successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.title+"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),
name:"\u3010"+a.title+"\u3011",title:a.title,img:a.img}}},finder:function(a){return{reg:"latest-release"!=a.flag?plugfns(a.plugin).pagerule:/<div\s*class="col-md(.*?)><\/span>/g,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b,a,"latest-release"==a.flag?1:0):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{reg:/totalPages:\s*(\d+)\s*,/g,
str:a.result,find:"$1",successfn:function(b){mySession.nowlistpages=(b||"0")+"|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){return 1<parseInt(a.page)?(a.multsearch&&a.multsearch(),!1):{url:pluginfo(a.plugin).apihost+"inc/search.php?keyword="+a.keyword,method:"GET",timeout:120,successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:c})),setnowlistname("\u641c\u7d22\u3010"+
a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d){console.log(b);array_count(b)?
plugfns(a.plugin).pagedeal(b,a,2):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){mySession.nowlistpages="-1|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages)}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"manga/"+a.pid,method:"GET",timeout:120,successfn:function(b,
c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u5185\u5bb9\u9875...",title:"\u5185\u5bb9\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){return{reg:/<a href="\/manga\/([\w,\d,\_]+)\/(\d+)\/1">\s*(?!<).*?\s*(\d+)\s*<\/a>/g,str:getresult(a.result),find:{pid:"$1",cid:"$2",title:"Chapter $3"},
successfn:function(b,c,d,f){console.log(typeof b);if(array_count(b)){if(a.checkupdate)return{pid:b.pid,cid:b.cid,title:b.title};additemlist({id:c.length-d-1,newest:a.newest&&0==d,pid:b.pid,cid:b.cid,title:b.title,count:c.length,reverse:1})}else a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);
return{reg:/<div\s*class="manga-cover">(.*?)<div\s*class="fb-like/g,str:getresult(a.result),find:"$1",successfn:function(b,c,d,f){console.log(JSON.stringify(b));c=getstr(/<img(?!<).*?src="((?!\").*?)"/,b);d=gettext(getstr(/<b>Name:\s*<\/b>((?!<).*?)<br/,b));f=gettext(getstr(/<b>Year\s*of\s*Release:\s*<\/b>((?!<).*?)<br/,b));var g=gettext(getstr(/<b>Author:\s*<\/b>((?!<).*?)<br/,b)),e=gettext(getstr(/<b>Genre:\s*<\/b>(.*?)<br/,b).trim().replace(/<\/a>/g,"</a>,")),k=gettext(getstr(/<b>Status:\s*<\/b>((?!<).*?)<br/,
b));b=getstr(/<b>Sypnosis:\s*<\/b>(.*?)<a\s*id="btnAddToMangaList/,b);var h=gettag(e),h=e.split(",").map(function(a){return gettag(a.trim())}).join(""),h=h+g.split(",").map(function(a){return gettag(a.trim())}).join("");setlistpic({name:d,img:c,added:a.data,description:"<p>\u3010Author\u3011"+g+"<br>\u3010Type\u3011"+e.split(",").join(" ").trim().split(" ").join(",")+"<br>\u3010Status\u3011"+k+"<br>\u3010Year of Release\u3011"+f+"<br>\u3010Sypnosis\u3011"+b+"</p>",comment:0,preview:0,tags:gettag(d)+
gettag(status)+h,sourceurl:pluginfo(a.plugin).apihost+"manga/"+a.pid});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"manga/"+a.pid+"/"+a.cid+"/1",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u56fe\u7247\u4fe1\u606f...",title:"\u56fe\u7247",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/>(\d+)<\/option>\s*<\/select>/g,str:a.result,
find:"$1",successfn:function(b,c,d,f){if(parseInt(b)){b=parseInt(b);c=[];for(d=1;d<b+1;d++)c.push(getpageload(pluginfo(a.plugin).apihost+"manga/"+a.pid+"/"+a.cid+"/"+d,a.plugin||mySession.nowplugin,{cache:!1}));console.log(c);a.download?chapterpredownload({source:c,download:a.download,plugin:a.plugin}):chapterviewer({source:c,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})}else a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",
download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u56fe\u7247\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},commentflag:{loader:!1,finder:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:function(a){return{reg:/'((?!\').*?)'"\s*itemprop="image"/g,str:a.result,find:"$1",successfn:function(b){a.loadimgurl(b)}}}},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"latest-release/"+(a.page||
1),method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:/<div\s*class="col-md(.*?)><\/span>/g,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a,1)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"hot-manga/"+(a.page||1),method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},
finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:getresult(a.result),find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a,0)}}}}},fns:{pagerule:/<div\s*class="col-md(.*?)><\/a>/g,pagefind:"$1",pagedeal:function(a,b,c){b=b||{};switch(c){default:case 0:c=getstr(/data-src="((?!\").*?)"/,a);var d=getstr(/class="manga-details(?!\").*?">\s*((?!<).*?)\s*</,a),f=getstr(/\/manga\/((?!\").*?)"/,a),g=getstr(/"label">(\d+)\s*views<\/span>/,
a)+" Views",e=g,g="";break;case 1:c=getstr(/data-src="((?!\").*?)"/,a);(d=getstr(/class="manga-details\s*hot">\s*((?!<).*?)\s*</,a))?(f=getstr(/\/manga\/((?!\").*?)"/,a),g=getstr(/"label">(\d+)\s*views<\/span>/,a)+" Views",e=gettext(getstr(/class="latest-hot-chapter">(.*?)<\/div>/,a)),e=e.split(" "),e="Chapter "+e.pop()):(d=getstr(/class="manga-details(?!\").*?">\s*((?!<).*?)\s*</,a),d=d.split(" "),e="Chapter "+d.pop(),d=d.join(" "),f=getstr(/\/manga\/((?!\").*?)[\/,\"]+/,a),g=getstr(/class="timeago"\s*title="((?!\").*?)"/,
a).split("+")[0].replace("T"," "));break;case 2:f=a.permalink,d=a.manga,c="img/nopic.png",e=g=""}if(b.multupdate)return b.multupdate(obj_contact(b,{pid:f,img:c,title:d,content:e})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:f,img:c,title:d,content:e})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:f,img:c,title:d,content:e})),!1;d||alert(a);addcardlist({pid:f,title:d,name:d,img:c,content:e,stitle:g,comment:0,preview:0,extrabutton:""})}}});