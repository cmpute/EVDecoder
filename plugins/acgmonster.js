ExView.Plugins({info:{name:"AcgMonster",version:"2.2",author:"Black Moon",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABR1BMVEV0Sr9qRa1qO71wRb1fNal1S79oQ6z/6v+AWcVgNqtcNKdbM6NXL6D/7v9sPMFtRrNZL6T/9P//8f/96f/85f/Ehv+8fv/bxOtySL5nOLxjN7FfOKZdNaRVKqFbM6BQJ5xIIJT//v//+v//+f//+P//7f/pyP/Qn//v3fbv2vbq1fTcyemlbuWbfcN2TMN2S8OIY8FmOLpsQbmDYrVZLaplP6hYLqZULZpCF5PkwP/cs//Tpv++gv+4eP+zcf/Nmvz56fm0e/Lo2vHq3e/n1O7d0ebUxuTWv+TOteTOt+HGr9++pdy6n9eZZ9bAqdW0m9GMZcuojMiaesiojsark8WCWsS+s8KObMCYfbyHYLyPcrqFYrpjM7lfLravrLV7WbRpQq9eMq98Xa1nPqunmqhnRKRGG5d/eoJrZnVRQziIZDY0EQAdCQDvY8t7AAAA9klEQVQY0xWPw7LEYBgFv/yxJjbHNq9t2zbefz3J4lSd6kVXNTAtIAFPRuI2CS0G8AzqPhyDgxwG3aMMDhL7Iu8dBQQxetp9GyEATCa28x8Rz8ufW6vDAQlYsJ/TmrwgDK9qect7BsqvKLpYs6yqqtHZOw8w4bWu6rRYpOlC9TqkAOPig5Im0rpYeTyfcBhQRMOYL8/NFNd+/i87QQK8hmGai+Xs99/vJiVjiSNcMcyFkvr+tdGPiAQQ4fhmabag5JR+7KeA44XodvnwrH4S+zxHgeSy7OB0fTxp7nAs60ppHEJuB3cupC5K45g2ANg9m+zhyWkzUzi2IE7VEY7iAAAAAElFTkSuQmCC",
db:"acgmonster",apihost:"http://api.acgmonster.com/comics/",pagetitle:["<br>","Favorite","All","Type","Download"],download:!0,lazyload:!0,setting:!0,theme:"deeppurple",sign:"04d75e3819b4d539b5c928991371f446",cdn:""},set:function(a){},unset:function(a){},init:function(a){ExView.workers.fav.listloader({callback:function(){}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?page="+(a.page||1)+"&sign="+pluginfo(a.plugin).sign,method:"GET",timeout:120,successfn:function(b,
c){a.callback({img:pluginfo(a.plugin).icon,multpage:!0,result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){b=(b||{}).entries;array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{json:!0,str:a.result,successfn:function(b){try{b=(b=(b||{}).total_pages)||-1}catch(c){b=-1}a.callback({pagecount:b})}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"categories?sign="+pluginfo(a.plugin).sign,
method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){a.callback({title:"All",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"Nav"},content:"All"});a.callback({tid:"hot",title:"Hot",listflag:"features",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"Nav"},content:"Hot"});return{json:!0,str:a.result,successfn:function(b){array_count(b)&&a.callback({tid:getstr(/tags_id_eq%5D=(\d+)/,b.query),title:b.name,img:b.cover,group:{name:"fenlei",
title:"Type"},content:b.name})}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+(a.flag?a.flag+"?":"?q%5Btags_id_eq%5D="+a.tid+"&page="+(a.page||1)+"&")+"sign="+pluginfo(a.plugin).sign,method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){a.flag?(arr=[],b.slideshows.forEach(function(a){arr=arr.concat(a.comics)}),b.subjects.forEach(function(a){arr=arr.concat(a.comics)}),
b=arr):b=(b||{}).entries;array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{json:!0,str:a.result,successfn:function(b){if(a.flag)var c=-1;else try{c=(b=(b||{}).total_pages)||-1}catch(d){c=-1}a.callback({pagecount:c})}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?q[name_cont]="+encodeURIComponent(a.keyword)+"&page="+(a.page||1)+"&sign="+pluginfo(a.plugin).sign,method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,
result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){b=(b||{}).entries;array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{json:!0,str:a.result,successfn:function(b){try{b=(b=(b||{}).total_pages)||-1}catch(c){b=-1}a.callback({pagecount:b})}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.pid+"?sign="+pluginfo(a.plugin).sign,method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,
header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,e){b=(b||{}).chapters;if(array_count(b)){if(a.checkupdate)return b=b.pop(),a.callback({pid:a.pid,cid:b.index,title:b.name}),!0;e=[];for(d=0;d<b.length;d++)e[d]=a.callback({id:d,newest:a.newest&&0==d,pid:a.pid,cid:b[d].index,title:b[d].name,count:b.length,reverse:0});return e}a.callback()}}},infoloader:!1,infofinder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,e){c=b.cover;c=decodeURIComponent(c);
-1!=(c||"").indexOf("images.dmzj.com")&&(c=getcoverload(c,{cacheheader:{Referer:"http://m.dmzj.com/"},nativeres:!0}));d=b.name;e=b.updated_date;var f=b.author,l=b.hot,g=(b.category||"").split(",").concat(b.tag_list||[]),h=b.description,k=b.status,m=b.source;myContent.mirrors=b.mirrors;myContent.moresource=function(){var a='<div class="list-block" style="margin:0"><ul class="videosourcecheck">'+myContent.mirrors.map(function(a,b){return'<li><label class="label-radio item-content"><input '+(0==b?'checked="checked"':
"")+' type="radio" name="my-radio" value="'+b+'"><div class="item-media"><i class="icon icon-form-radio"></i></div><div class="item-inner"><div class="item-title">'+gettext(a.source)+"</div></div></label></li>"}).join("")+"</ul></div>";ExView.fw.confirm(a,"更换来源",function(){var a="";$$(".videosourcecheck input").each(function(){$$(this).prop("checked")&&(a=$$(this).val())});a&&contentloader({plugin:myContent.plugin,pid:myContent.mirrors[a].id})})};a.callback({name:d,img:c,added:a.data,
description:"<p>"+(m?getboxitem("来源")+" "+m+"<br>":"")+(f?getboxitem("作者")+" "+f+"<br>":"")+(g?getboxitem("类型")+" "+g+"<br>":"")+(l?getboxitem("热度")+" "+l+"<br>":"")+(e?getboxitem("更新")+" "+e+"<br>":"")+(k?getboxitem("状态")+" "+k+"<br>":"")+(h?getboxitem("简介")+" "+h:"")+"</p>",more:'<a href="#" class="button button-fill color-brown" onclick="myContent.moresource()">更换来源</a>',comment:0,preview:0,tags:gettag(d)+
gettag(f)+gettag(g||"")});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.pid+"/"+a.cid+"?sign="+pluginfo(a.plugin).sign,method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,e){b=(b||{}).pages;array_count(b)?(b=b.map(function(a){a=a.track_url;a=decodeURIComponent(a);a=a.replace("tupianku.333dm.com","images.333dm.com");-1!=(a||"").indexOf("images.dmzj.com")&&(a=
getcommonload(a,{cacheheader:{Referer:"http://m.dmzj.com/"},nativeres:!0}));-1!=(a||"").indexOf("i.hamreus.com")&&(a=getcommonload(a,{cacheheader:{Referer:"http://m.ikanman.com/"},nativeres:!0}));return a}),a.download?a.callback({source:b,download:a.download,plugin:a.plugin}):a.callback({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.callback();return!0}}}},commentflag:{loader:!1,finder:!1,send:!1},previewflag:{loader:!1,finder:!1},
pageimgflag:{parser:!1},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?page="+(a.page||1)+"&sign="+pluginfo(a.plugin).sign,method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){b=(b||{}).entries;array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?page="+(a.page||1)+"&sign="+pluginfo(a.plugin).sign,
method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){b=(b||{}).entries;array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}}}},fns:{pagedeal:function(a,b){b=b||{};a.forEach(function(a){var d=a.id,e=a.cover,e=decodeURIComponent(e);-1!=(e||"").indexOf("images.dmzj.com")&&(e=getcoverload(e,{cacheheader:{Referer:"http://m.dmzj.com/"},nativeres:!0}));var f=a.name,l=a.author,g=a.updated_date,h=a.status;
a=a.description;var k=(h?"【"+h+"】":"")+(g||"");if(b.multupdate||b.multhot||b.multsearch)return b.callback(obj_contact(b,{pid:d,img:e,title:f,content:k})),!1;b.callback({pid:d,title:f,img:e,stitle:l||"",content:getboxitem(h)+getboxitem(g)+a,comment:0})})}}});