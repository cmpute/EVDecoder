ExView.Plugins({info:{name:"\u957f\u8005\u6f2b\u753b",version:"2.2",author:"\u86e4\u86e4",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAsVBMVEX9YwD5YwD5YgH2ZAD7ZQH6ZQH+ZAD9YgX5YwT9ZQL3ZAH7YwH+YgfsZQX9YwX1YQD5XwXxYwL/YwPyZgH3YQDxgzbfZQ3mZAztXwjuYgTzZAL/XwH0ZQDqsXHimVfffzfZcizfcSDWZxzhahfaZg3zXgPt1qn0v5Tfp2XXlFjhp1TqnVPhmEbggELfhT3bezbsgjXcgyrmayDjYx/aahniXhTtYxDybg/jXwrpYgL3aQBy0tNqAAAAvklEQVQY013ORZLDMBQE0P/FYFmSGcIwzDy5/8GicjZJuqo3b9MNmRAghMyLorBaawU5XERfA4Ns+F3XdTOS7Vv9ocoDZPKh7fvd/fyv33fzUYNUL/9+CDe3ZYjlYhAg6SK48PP53gY6uyMlyHy5itsn1z227vXLpVmm3He3XD2vm52jlKdZVpi42W8aXxlKbXpqNcMYK28IQeSQTf+M95SeAXCSABMgSDGJNcbMkFQTnMTiCUbGGOc2laFCro4A4A1a4jQ9JAAAAABJRU5ErkJggg==",
db:"ggmh",apihost:"http://113.107.150.45:21889/",pagetitle:["<br>","\u6536\u85cf","\u9996\u9875","\u7c7b\u578b","\u4e0b\u8f7d"],download:!0,lazyload:!0,setting:!0,cdn:""},set:function(b){},unset:function(b){},init:function(b){ExView.workers.fav.listloader({callback:function(){}})},flags:{indexflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/recom/hotlist?pagesize=30&page="+(b.page||1),method:"GET",timeout:120,successfn:function(a,c){b.callback({img:pluginfo(b.plugin).icon,multpage:!0,
result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).data;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}},countloader:!1,countfinder:function(b){return{json:!0,str:b.result,successfn:function(a){try{a=(a=(a||{}).data)?0:-1}catch(c){a=-1}b.callback({pagecount:a})}}}},typeflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/search/category",method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},
finder:function(b){b.callback({title:"\u9996\u9875",img:pluginfo(b.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u9996\u9875"});b.callback({tid:"",listflag:"android/search/recentupdate?pagesize=30&page={{page}}",title:"\u66f4\u65b0",img:pluginfo(b.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u66f4\u65b0"});b.callback({tid:"",listflag:"android/search/ranking?gender=1",title:"\u9a9a\u5e74\u6392\u884c",img:pluginfo(b.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},
content:"\u9a9a\u5e74\u6392\u884c"});b.callback({tid:"",listflag:"android/search/ranking?gender=2",title:"\u9a9a\u5973\u6392\u884c",img:pluginfo(b.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u9a9a\u5973\u6392\u884c"});b.callback({tid:"",listflag:"android/recom/hothklist?pagesize=30&page={{page}}",title:"\u7cbe\u5f69\u6e2f\u6f2b",img:pluginfo(b.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u7cbe\u5f69\u6e2f\u6f2b"});return{json:!0,str:b.result,successfn:function(a){a=
(a||{}).data||[];array_count(a)&&a.forEach(function(a){b.callback({tid:a.cateId,title:a.title,img:a.thumb,group:{name:"fenlei",title:"\u5206\u7c7b"},content:a.title})})}}}},listflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+(b.flag?b.flag.replace("{{page}}",b.page||1):"android/search/categorylist?cateId="+b.tid+"&pagesize=30&tophot=1&page="+(b.page||1)),method:"GET",timeout:120,successfn:function(a,c){b.callback({multpage:!0,result:a,header:c})}}},finder:function(b){return{json:!0,
str:b.result,successfn:function(a){a=(a||{}).data;a.search&&a.likes&&(a=(a.search||[]).concat(a.likes||[]));array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}},countloader:!1,countfinder:function(b){return{json:!0,str:b.result,successfn:function(a){try{var c=(a=(a||{}).data)?0:-1;a.search&&a.likes&&(c=-1)}catch(e){c=-1}b.callback({pagecount:c})}}}},searchflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/search/query?pagesize=30&page="+(b.page||1)+"&keyword="+encodeURIComponent(b.keyword),
method:"GET",timeout:120,successfn:function(a,c){b.callback({multpage:!0,result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).data;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}},countloader:!1,countfinder:function(b){return{json:!0,str:b.result,successfn:function(a){try{a=(a=(a||{}).data)?0:-1}catch(c){a=-1}b.callback({pagecount:a})}}}},contentflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/comic/info?gender=2&comicsrcid=0&comicid="+
b.pid,method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a,c,e,f){a=(a||{}).data;c=a.comicSrc||[];myContent.charpterlist=[];c.forEach(function(a){$$.ajax({url:getcdnload(pluginfo(b.plugin).apihost,pluginfo(b.plugin).cdn)+"android/comic/charpterlist?comicsrcid="+a.id+"&comicid="+b.pid,success:function(b){try{var c=JSON.parse(b)}catch(d){c={}}a=obj_contact(a,{cheaterlist:(c||{}).data});myContent.charpterlist.push(a)},
error:function(a){},async:!1})});console.log(myContent.charpterlist);if(array_count(a)){if(b.checkupdate){var d=myContent.charpterlist[0];try{myContent.charpterlist.forEach(function(a){try{var b=a.cheaterlist[0].sid||0}catch(c){b=0}(d.cheaterlist[0].sid||0)<b&&(d=a)})}catch(h){}try{a=d.cheaterlist[0]}catch(h){a={}}b.callback({pid:b.pid,cid:a.id,title:a.title+"("+a.counts+"P)_"+d.title});return!0}f=[];var g=e=0;(myContent.charpterlist||[]).forEach(function(a){g+=array_count(a.cheaterlist)});(myContent.charpterlist||
[]).forEach(function(a){a.cheaterlist.forEach(function(c){f[e]=b.callback({id:g-e-1,newest:b.newest&&0==e,pid:b.pid,cid:c.id,title:c.title+"("+c.counts+"P)_"+a.title,group:{name:"ggmh_type_"+a.id,title:a.title},count:g,reverse:1});e++})});return f}b.callback()}}},infoloader:!1,infofinder:function(b){return{json:!0,str:b.result,successfn:function(a,c,e,f){a=(a||{}).data;c=a.title;e=a.updateTime;f=a.authorName;var d=a.comicType,g=a.intro,h=a.areaName;b.callback({name:c,img:a.thumb,added:b.data,description:"<p>"+
(f?"\u3010\u4f5c\u8005\u3011"+f+"<br>":"")+(d?"\u3010\u7c7b\u578b\u3011"+d+"<br>":"")+(e?"\u3010\u66f4\u65b0\u3011"+e+"<br>":"")+(h?"\u3010\u5730\u533a\u3011"+h+"<br>":"")+(g?"\u3010\u7b80\u4ecb\u3011"+g:"")+"</p>",comment:a.tucaos,preview:0,tags:gettag(c)+gettag(f)+gettag((d||"").split(","))});return!0}}}},parseflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/comic/charpterinfo?charpterid="+b.cid,method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},
finder:function(b){return{json:!0,str:b.result,successfn:function(a,c,e,f){a=(a||{}).data;array_count(a)?(a=a.addrs,b.download?b.callback({source:a,download:b.download,plugin:b.plugin}):b.callback({source:a,type:"image",startindex:b.startindex||0,lazyload:pluginfo(b.plugin).lazyload,zoom:!0,title:b.title})):b.callback();return!0}}}},commentflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/comment/getCommentList?parent_id=0&pagesize=30&root_id=0&comicid="+b.pid+"&page="+(b.page||
1),method:"GET",timeout:120,successfn:function(a,c){a?b.callback({result:a,header:c,commentbrowser:!1}):b.callback()}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a,c,e,f){a=(a||{}).data;if(array_count(a)){c=Math.ceil(a.total/30);a=a.comment_list;for(var d in a)b.callback({page:b.page||1,pagecount:c,comment:{text:a[d].content,name:(a[d].nickname||"").replace("\u5471\u5471\u7528\u6237","\u957f\u8005\u7c89\u4e1d"),avatar:a[d].user_thumb,type:"received",label:getLocalTime(1E3*
parseInt(a[d].post_time||0)),day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1},pageimgflag:{parser:!1},updateflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"android/search/recentupdate?pagesize=30&page="+(b.page||1),method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).data;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}}},hotflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+
"android/recom/hotlist?pagesize=30&page="+(b.page||1),method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).data;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}}}},fns:{pagedeal:function(b,a){a=a||{};b.forEach(function(b){var e=b.comicId,f=b.thumb,d=b.title,g=b.authorName,h=b.comicType;b="\u66f4\u65b0\u81f3 "+(b.lastCharpter||"").title;if(a.multupdate||a.multhot||a.multsearch)return a.callback(obj_contact(a,
{pid:e,img:f,title:d,content:b})),!1;a.callback({pid:e,title:d,img:f,stitle:g||"",content:b+(h?"<br>"+function(a){var b="";(a.split(",")||[]).forEach(function(a){b+='<span style="font-size:10px;"><span class="color-white bg-'+getnowtheme()+'" style="padding:3px;border-radius:3px;margin-right:3px;">'+a+"</span></span>"});return b}(h):""),comment:1})})}}});