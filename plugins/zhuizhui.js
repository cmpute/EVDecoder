ExView.Plugins({info:{name:"\u8ffd\u8ffd\u6f2b\u753b",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABxVBMVEX//f///vz////+/f/9/fv4//dWVVP9/v/8//vw/+7g+N3U09PQ/8uox6my/6h6f3tuqWdjYl9dXVtNTU30//Lu/+nZ+9jS/tHM/8fEy8TK/8PB/7q8ubexrayv+qiowaSe55WbzJWFioiM0oaN1IWG13x7tHhxc3V4vnRtbnBzumxobGttuWltpmhia2ZstmRkZGNbXV9aWlpZplNKo0H5//rz8fb07/Px8e/p5Oro9Obf4+bq/+Xl5eXk/+Tl5+Tj/N/e3t7d/9zc8tvU2Nvb59nX9dPQ0NDN+8zJyszN/8fJyMbCw8XFxMLF3L/C6b3Dvb2+3bvB2Lu/wLu/+rq9/7S5/bS787SxtrC3/66z966z9a2x4a2y76yv0aysy6yv26qsy6mq1aeozaSo76Os96KjqKKm15+m3J6kzp6k/pyjn5yXmJyj9pqe1Jif9peY546X4I6V/YyH+IKH2oKGz4CG5X+Ftn+A7Hx0eHt/53iBy3aBzXV2q3V6w3RwdXF63XBzqHBvb29wxm1wymhoy2FmsV9hul5lrFxevVlSU1dUWVVdrFNWoU5HS0xNkURER0BKpz8+mjc4mTAxli4wkC43lyz9HrqhAAABCklEQVQY0xXN07LDYBiF4e9PmlRxattut23btm3b9r7epifPwZp5ZwFCGIAkksQwpMiphgIcFVZBvlwuk3a8xL8qXhiNrOv5qBbDAeSt4WDyZX4wnAy+N+G4VKtJv0harHwilWqQEhlSC6xAWjv564TYgmQA0PPpigmWFZKN8W25K6JynKbt3e12emJKpcCA0EUe4qFI+j4UOL8JlOeBcvR3h9lc3n/amFs7/JvWgHb953h2zOZ9dQyM3H07VVC6+H853Nt3smWmzEzGWQ/aha/tXRN16hjqtzGZJRVoOt5u03uex7jH7fZ+dNUBoZz0+aIcx0Wvzg5mistAQSir9ZTB1Gxo1OtqKoqyKvEyh4KoggsAAAAASUVORK5CYII=",
author:"Gentle&\u54b8\u9c7c",db:"zhuizhui",apihost:"http://api.zhuizhuiyoyo.com/",pagetitle:["<br>","\u6536\u85cf","\u9996\u9875","\u7c7b\u578b","\u4e0b\u8f7d"],lazyload:!0,theme:"red",download:!0,setting:!0,theme:"green",cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();ExView.workers.type.loader()}})},flags:{indexflag:{loader:function(a){var b=getTimeNow(),c=plugfns(a.plugin).calcsig(b,'{"v":1}');return{url:pluginfo(a.plugin).apihost+
"/request.php?method=homepage&timestamp="+b+"&param="+encodeURIComponent('{"v":1}')+"&sig="+c,method:"GET",timeout:120,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,name:"\u9996\u9875",img:a.img}}},finder:function(a){return{json:!0,str:a.result,successfn:function(a){console.log(JSON.stringify(a));array_count(a)?
(a=a.lists,a.forEach(function(a){a.comics&&a.comics.forEach(function(a){addcardlist({pid:a.id,title:a.name,name:a.name,img:a.cover_img,stitle:"\u3010"+(a.finished?"\u5b8c\u7ed3":"\u8fde\u8f7d")+"\u3011 "+a.comic_score+"\u5206",content:"\u66f4\u65b0\u81f3 "+a.last_volume,comment:1})})})):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){mySession.nowlistpages=
"-1|\u9996\u9875|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},typeflag:{loader:function(a){var b=getTimeNow(),c=plugfns(a.plugin).calcsig(b,'{"v":1,"t":0}');return{url:pluginfo(a.plugin).apihost+"request.php?method=searchpage&timestamp="+b+"&param="+encodeURIComponent('{"v":1,"t":0}')+"&sig="+c,method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){addtypelist({title:"\u9996\u9875",img:pluginfo(a.plugin).icon,
content:"\u9996\u9875"});return{json:!0,str:a.result,successfn:function(a){array_count(a)?(a=a.themes)&&a.forEach(function(a){in_array(a.theme_id,[1712,3415,1011,1675])||addtypelist({tid:a.theme_id,title:a.name,img:a.cover,listbg:!0,content:a.name})}):addtypelist('<div align="center" class="list-block"><a href="javascript:void(0);" onclick="ExView.workers.type.loader();"><img src="img/logo.png"/><br>\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01</a></div>',2)}}}},listflag:{loader:function(a){var b=
getTimeNow(),c='{"id":"'+a.keyword+'","v":1,"t":0,"count":18,"page":'+(a.page||1)+',"filter":0}',d=plugfns(a.plugin).calcsig(b,c);return{url:pluginfo(a.plugin).apihost+"request.php?method=theme%2Finfo&timestamp="+b+"&param="+encodeURIComponent(c)+"&sig="+d,method:"GET",timeout:120,successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.title+
"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,name:"\u3010"+a.title+"\u3011",img:a.img}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){var b=
JSON.parse(a.result);mySession.nowlistpages=(Math.ceil(b.total/18)||"0")+"|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){var b=getTimeNow(),c='{"count":20,"page":'+(a.page||1)+',"keyword":"'+a.keyword+'"}',d=plugfns(a.plugin).calcsig(b,c);return{url:pluginfo(a.plugin).apihost+"request.php?method=comic%2Fsearch&timestamp="+b+"&param="+c+"&sig="+d,method:"GET",timeout:120,successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,
{result:b,header:c})),setnowlistname("\u641c\u7d22\u3010"+a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{json:!0,str:a.result,
successfn:function(b,c,d){console.log(b);array_count((b||{}).comics)?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){b=JSON.parse(a.result);mySession.nowlistpages=(Math.ceil(b.total/20)||"0")+"|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages)}}}},contentflag:{loader:function(a){var b=
getTimeNow(),c='{"id":'+a.pid+',"size_type":"webp"}',d=plugfns(a.plugin).calcsig(b,c);return{url:pluginfo(a.plugin).apihost+"request.php?method=comic%2Finfo&timestamp="+b+"&param="+c+"&sig="+d,method:"GET",timeout:120,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u5185\u5bb9\u9875...",title:"\u5185\u5bb9\u9875",
name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,e){console.log(typeof b);b=(b||{}).sections;if(array_count(b)){if(a.checkupdate)return{pid:a.pid,cid:b[0].id,title:b[0].name};e=[];for(d=0;d<b.length;d++)e[d]=additemlist({id:b.length-d-1,newest:a.newest&&0==d,pid:a.pid,cid:b[d].id,title:b[d].name,count:b.length,reverse:1});return e}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01",
"ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,d,e){b=b.comic;c=b.cover_image;d=b.name;e=b.category_name;var f=b.author;b="\u3010\u7c7b\u578b\u3011"+e+"<br>\u3010\u4f5c\u8005\u3011"+f+"<br>\u3010\u8bc4\u5206\u3011"+b.comic_score+"<br>\u3010\u6700\u65b0\u8bdd\u3011"+b.last_volume+"<br>\u3010"+(b.finished?"\u5b8c\u7ed3":"\u8fde\u8f7d")+"\u3011"+
getLocalTime(1E3*parseInt(b.last_volume_updated_at))+"<br>\u3010\u7b80\u4ecb\u3011"+b.introduction;setlistpic({name:d,img:c,added:a.data,description:b,comment:1,preview:0,tags:gettag(d)+gettag(e.split(","))+gettag(f)});return!0}}}},parseflag:{loader:function(a){var b=getTimeNow(),c='{"id":"'+a.cid+'","v":2}',d=plugfns(a.plugin).calcsig(b,c);return{url:pluginfo(a.plugin).apihost+"request.php?method=volume%2Fpictures&timestamp="+b+"&param="+c+"&sig="+d,method:"GET",timeout:120,successfn:function(b,
c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u56fe\u7247\u4fe1\u606f...",title:"\u56fe\u7247",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,d,e){var f=b.host;b=(b||{}).pictures;array_count(b)?(b=b.map(function(a){return f+a.url.substring(1)}),console.log(b),a.download?chapterpredownload({source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,type:"image",
startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u56fe\u7247\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},commentflag:{loader:function(a){var b=getTimeNow(),c='{"user_id":0,"count":20,"page":'+(a.page||1)+',"user_token":"","comic_id":'+a.pid+"}",d=plugfns(a.plugin).calcsig(b,
c);return{url:pluginfo(a.plugin).apihost+"request.php?method=comic_review%2Fin_comic&timestamp="+b+"&param="+c+"&sig="+d,method:"GET",timeout:120,successfn:function(b,c){b?a.callback&&a.callback({result:b,header:c,commentbrowser:!1}):a.callback&&a.callback()}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,d,e){if(array_count(b)){c=Math.ceil(parseInt(b.total)/20);b=b.comic_reviews;for(var f in b)a.callback&&a.callback({page:a.page||1,pagecount:c,comment:{text:b[f].content[0].content,
name:b[f].user_info.name,avatar:b[f].user_info.avatar,type:"received",label:b[f].created_at,day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){var b=getTimeNow(),c='{"id":"39","v":1,"t":0,"count":18,"page":'+(a.page||1)+',"filter":0}',d=plugfns(a.plugin).calcsig(b,c);return{url:pluginfo(a.plugin).apihost+"request.php?method=theme%2Finfo&timestamp="+b+"&param="+encodeURIComponent(c)+"&sig="+d,method:"GET",
timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){console.log(JSON.stringify(b));array_count(b)&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){var b=getTimeNow(),c='{"id":"38","v":1,"t":0,"count":18,"page":'+(a.page||1)+',"filter":0}',d=plugfns(a.plugin).calcsig(b,c);return{url:pluginfo(a.plugin).apihost+"request.php?method=theme%2Finfo&timestamp="+b+"&param="+encodeURIComponent(c)+
"&sig="+d,method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){console.log(JSON.stringify(b));array_count(b)&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{calcsig:function(a,b){return ExView.tools.md5.hex_md5("45667191c50941a1a777dfbd84345fe8"+a+b)},pagedeal:function(a,b){b=b||{};a.comics&&a.comics.forEach(function(a){var d=a.id,e=a.cover_img,f=a.name,g="\u3010"+(a.finished?"\u5b8c\u7ed3":
"\u8fde\u8f7d")+"\u3011 "+a.comic_score+"\u5206",h=a.name;a="\u66f4\u65b0\u81f3 "+a.last_volume;if(b.multupdate)return b.multupdate(obj_contact(b,{pid:d,img:e,title:f,content:a})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:d,img:e,title:f,content:a})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:d,img:e,title:f,content:a})),!1;addcardlist({pid:d,title:f,name:h,img:e,stitle:g,content:a,comment:1})})}}});
