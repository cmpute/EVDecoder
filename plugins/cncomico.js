ExView.Plugins({info:{name:"Comico\u6f2b\u753b",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAkFBMVEXhEwDfEADjFgDjFgDhEwDeDwDgEgDeEADfEADeEADhFQDhEwDjFwDgEgD5+fncDwD08/Py8fHdrKnXdGzjFQDgEADv7u7eHgz19fXs6+vl5OXduLbXjIbZXVDaNibjEwD7+/vs397l2dniycjYm5bdlI7akYrbhn7Yg3vYdmzUZlvXT0LYUEHaKhrcHQzkGAAOkDAWAAAACXRSTlPx8fGgDKDt5Zd+/s6WAAAAtUlEQVQY0zWMh5LCMAxElcadJEtxHELgaNfp8P9/x8YzrO2x9q0kqpuiZR6YueV21tTUDJPJHq99p4JfGib2Rjka+5RSfzfmgmxvPK6ju8c1G4CqWh+9W3TxY2dGpGb24187u202CDECsvKDmmYRTdXK//Dt4TEiKvbt3VYv/VlMAUTmp/gZp6UiAHOQMXVLXy5+0V2SZG3/0/EqCInKEEQCDhw0oypkPUADbkV1hZ5cQ2VVPwFaDA3+mWJ6AwAAAABJRU5ErkJggg==",
db:"cncomico",apihost:"http://api.cncomico.com/",coverhost:"http://images.cncomico.com/",pagetitle:["<br>","\u6536\u85cf","\u9996\u9875","\u7c7b\u578b","\u4e0b\u8f7d"],lazyload:!0,download:!0,setting:!0,settingextra:getui([{name:"coverhost",title:"\u56fe\u7247\u670d\u52a1\u5668(http://xxx/xxx)",type:"input"}]),nativeres:!0,vphotomode:!0,cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();ExView.workers.type.loader()}})},
flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"home/get.nhn",method:"POST",data:"version=2",header:{"Content-Type":"application/x-www-form-urlencoded"},timeout:120,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,name:"\u9996\u9875",img:a.img}}},finder:function(a){return{json:!0,
str:a.result,successfn:function(b){console.log(JSON.stringify(b));b=b.data.rankingitems;array_count(b)?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)},errorfn:function(){a.page||setnowlistname("\u9996\u9875","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("\u7f51\u7edc\u9519\u8bef\uff01","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){return{pagecount:-1}}}}},
typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"genre/get.nhn",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){addtypelist({title:"\u9996\u9875",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u9996\u9875"});addtypelist({tid:"all",title:"\u5168\u90e8",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u5168\u90e8"});return{json:!0,str:a.result,successfn:function(a){a=
a.data;array_count(a)&&a.forEach(function(a){addtypelist({tid:a.genreNo,title:a.genreName,img:getcoverload(a.genreIcon,{loadingimg:"img/logo.png",errorimg:mySession.blankimg}),group:{name:"fenlei",title:"\u5206\u7c7b"},content:a.genreName+"("+a.count+")"})})}}}},listflag:{loader:function(a){var b=plugfns(a.plugin).typelist.all;return array_count(b)?{successfn:function(b,d){a.multsearch||ExView.workers.search.countfinder(obj_contact(a,{result:b,header:d}));a.successfn&&a.successfn({result:b,header:d})}}:
{url:pluginfo(a.plugin).apihost+"title/get.nhn",method:"GET",timeout:120,successfn:function(b,d){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:d})),a.successfn&&a.successfn({result:b,header:d})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.title+"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,name:"\u3010"+a.title+"\u3011",img:a.img}}},finder:function(a){return{json:!0,
str:a.result,successfn:function(b){plugfns(a.plugin).typelist.all?b=plugfns(a.plugin).typelist.all:(b=b.data.its,plugfns(a.plugin).typelist.all=b);if("all"!=a.keyword){var c=[];b.forEach(function(b){for(var e=b.tg||[],f=0;f<e.length;f++)if(e[f].genreNo.toString()==a.keyword){c.push(b);break}});b=c}array_count(b)?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){return{pagecount:-1}}}}},
searchflag:{loader:function(a){if(1<parseInt(a.page))return a.multsearch&&a.multsearch(),!1;var b=plugfns(a.plugin).typelist.all;return array_count(b)?{successfn:function(b,d){a.multsearch||ExView.workers.search.countfinder(obj_contact(a,{result:b,header:d}));a.successfn&&a.successfn({result:b,header:d})}}:{url:pluginfo(a.plugin).apihost+"title/get.nhn",method:"GET",timeout:120,successfn:function(b,d){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:d})),setnowlistname("\u641c\u7d22\u3010"+
a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:d})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){plugfns(a.plugin).typelist.all?
b=plugfns(a.plugin).typelist.all:(b=b.data.its,plugfns(a.plugin).typelist.all=b);var c=[];b.forEach(function(b){-1!=b.itl.indexOf(a.keyword)&&c.push(b)});b=c;array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){return{pagecount:-1,keyword:a.keyword}}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"article/get.nhn",method:"POST",data:"count=1000&titleNo="+a.pid+"&startedNo=0",header:{"Content-Type":"application/x-www-form-urlencoded"},timeout:120,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u5185\u5bb9\u9875...",title:"\u5185\u5bb9\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},
finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,e){console.log(typeof b);if(array_count(b)){c=b.data.its;if(a.checkupdate)return b=c[0],{pid:b.pid,cid:b.no,title:b.itl};e=[];c.forEach(function(b,d){e[d]=additemlist({id:c.length-d-1,newest:a.newest&&0==d,pid:a.pid,cid:b.no,title:b.itl,count:c.length,reverse:1})});return e}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},afterfn:function(){a.checkupdate||
ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return!1}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"article/getImgs.nhn",method:"POST",data:"articleNo="+a.cid+"&titleNo="+a.pid,header:{"Content-Type":"application/x-www-form-urlencoded"},timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u56fe\u7247\u4fe1\u606f...",title:"\u56fe\u7247",
name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,d,e){if(array_count(b)){var f=b.data.thm;b=b.data.ims;b=b.map(function(a){return f+a.url});console.log(b);a.download?chapterpredownload({source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})}else a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",
download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u56fe\u7247\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},commentflag:{loader:!1,finder:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){a.multupdate();return!1},finder:function(a){return!1}},hotflag:{loader:function(a){a.multhot();return!1},finder:function(a){return!1}}},fns:{typelist:{},pagedeal:function(a,b){b=b||{};a.forEach(function(a){var d=
a.tid,e=pluginfo(b.plugin).coverhost+(0==(a.thm_vl||"").indexOf("/")?a.thm_vl.substring(1):a.thm_vl),f=a.itl,g=a.pid,h=a.stit;a=(a=a.syp)?a:"";if(b.multsearch)return b.multsearch(obj_contact(b,{pid:d,img:e,title:f,content:h})),!1;addcardlist({pid:d,title:f,img:e,stitle:g,content:a})})}}});