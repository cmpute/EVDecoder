ExView.Plugins({info:{name:"\u4e45\u7231\u6f2b\u753b",version:"2.2",db:"92mh",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABcVBMVEUAAACdm4ILPos7Wn1gm8sFeMgCTZ0dhM0WYqQTQH8TRY0Scr0gb7EfjswYabRzw+YuhMQyTHYyYYoDit0EnO4GZ7cFO4fnTCERTJYWdsEKXasCR5Y1ldcHleTmcS4sfMAEVqZPw/chjtNTksUJarYJPIUMPoNhxvULfMoSbrIwsPIQWaMKP4wNdsYbjtopaKkJR5Lolz6jCxYNk90JQo9NntQ5uvkSQX4qlNcRabQaZqsKQIkWQYCmDxQZg8IeXZmfDxsVQHxRuuqq2vARZKsShtBMaZgcd70YQnoWlN0PSZOwJCUUYKgcQ3ibNTsYn+fgs0oTitbMQTQuWocgRXcvp+XWSjMUlt4dj8kXW6EWQ4KiFB4tSW4sgL4bSorcWDQgTJC91+Mwi8Zvc3gAOosAOooCU6MAPI0AhdgBfdEefMQAbL8AT6AASJkBRZYAQJENl+gDk+YJidkViNcAgNIBc8QBZrkAXK7aOh7IJxyyFRhZDUunAAAAZHRSTlMABMgUCv7+/Z+QW1hXQjcyKiEb/vz8/Pz6+Pj49PLy8PDs5OTk4N7S0MrGwMC+vLa0tLCsrKakpKKamJiYmJaWlI6KiIiGhoB6dHRybGxsaGZkZGJaVFROTkxMSEA+MjAsKiAIPulWKAAAANVJREFUGNNNjtW6glAYBX8Qu093d3en3d0dbMDufHoB9dO5mllXC8YQSblcRcAUzfNWS3gu+fULxm0WNxd/FjjL8/3eYbaVMMPRLTQicy3YKzGPvGHpkM8eBxtVYsJsee53VvuD4QM8lYttpVqd1Z9evJlc33+AVw6FXky3/xK0HhQ37jJwVbtdPyPAvVS/0RhEdAo+yU3J0XUOjAXxblSGA8QQWb38UKgUyz1qTcbdwxGqVcoUJarSSAos2mOShaZJhL4m115XuAmdBGCK1vkvtSQw3kfaqyp327cEXwAAAABJRU5ErkJggg==",
apihost:"http://app.92mh.cc/",pagetitle:["<br>","\u6536\u85cf","\u6700\u65b0\u66f4\u65b0","\u7c7b\u578b","\u4e0b\u8f7d"],download:!0,lazyload:!0,theme:"blue",setting:!0,cacheheader:{Referer:"http://app.92mh.cc/"},nativeres:!0,cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();ExView.workers.type.loader()}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"api/do.php?act=load&mod=update&page="+
(parseInt(a.page||1)-1),method:"GET",timeout:120,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u6700\u65b0\u66f4\u65b0",title:a.title,img:a.img}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',
2)},errorfn:function(){a.page||setnowlistname("\u6700\u65b0\u66f4\u65b0","",pluginfo(a.plugin).icon);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("\u7f51\u7edc\u9519\u8bef\uff01","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(){return{pagecount:0}}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"classify.html",method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},
finder:function(a){addtypelist({title:"\u6700\u65b0\u66f4\u65b0",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u6700\u65b0\u66f4\u65b0"});addtypelist({tid:"rank",listflag:"api/do.php?act=load&mod=rank&flag=0-0-0-{{page}}",title:"\u4eba\u6c14\u6392\u884c",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u4eba\u6c14\u6392\u884c"});addtypelist({tid:"rank",listflag:"api/do.php?act=load&mod=rank&flag=1-0-0-{{page}}",title:"\u5410\u69fd\u6392\u884c",
img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u5410\u69fd\u6392\u884c"});addtypelist({tid:"rank",listflag:"api/do.php?act=load&mod=rank&flag=2-0-0-{{page}}",title:"\u8ba2\u9605\u6392\u884c",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"\u5bfc\u822a"},content:"\u8ba2\u9605\u6392\u884c"});return{reg:/<div\s*class="classopen"((?:.|[\r\n])*?)<\/div>/g,str:a.result,find:"$1",successfn:function(b){if(b){var c=["\u9898\u6750","\u8bfb\u8005\u7fa4","\u8fdb\u5ea6",
"\u5730\u57df"];ExView.modules.rulefind({reg:/<ul>((?:.|[\r\n])*?)<\/ul>/g,str:getresult(b),find:"$1",successfn:function(b,e,f){ExView.modules.rulefind({reg:/<li><a\s*onclick="itemClickAction\(([\d,\,,\ ]+)\)">((?!<).*?)<\/a><\/li>/g,str:b,find:"$1{{separator}}$2",successfn:function(b){b=b.split("{{separator}}");var d="\u5168\u90e8"==b[1]?c[f]:b[1];addtypelist({tid:b[0],title:d,img:pluginfo(a.plugin).icon,group:{name:"fenlei_"+f,title:c[f]},content:d})}})}})}}}}},listflag:{loader:function(a){var b=
"0-0-0-0-0";if(!a.flag){for(var b=a.keyword.split(",")[0].trim(),c=a.keyword.split(",")[1].trim(),d=[],e=0;5>e;e++)e==parseInt(b)?d[e]=c:d[e]="0";b=d.join("-")}return{url:pluginfo(a.plugin).apihost+(a.flag?a.flag.replace(/{{page}}/g,parseInt(a.page||1)-1):"api/do.php?act=load&mod=classify&flag="+b+"-"+(parseInt(a.page||1)-1)),method:"GET",timeout:120,successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),
mySession.isloading=0,ExView.fw.alert("\u3010"+a.title+"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),title:a.title,name:"\u3010"+a.title+"\u3011",img:a.img}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},
countfinder:function(a){return{successfn:function(){return{pagecount:0}}}}},searchflag:{loader:function(a){return 1<parseInt(a.page)?(a.multsearch&&a.multsearch(),!1):{url:pluginfo(a.plugin).apihost+"api/search_act.php?q="+encodeURIComponent(a.keyword),method:"GET",timeout:120,successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,{result:b,header:c})),setnowlistname("\u641c\u7d22\u3010"+a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?
a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{json:!0,str:JSON.stringify((JSON.parse(a.result)||{}).serchArry),successfn:function(b,c,d){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():
addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(a){return{pagecount:-1}}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"api/comic.php?id="+a.pid,method:"GET",timeout:120,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01",
"ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u5185\u5bb9\u9875...",title:"\u5185\u5bb9\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,e){if(!b.chapter_list)return ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u8fd9\u6f2b\u753b\u5df2\u7ecf\u4e0b\u67b6\u4e86~"),!1;c=b.chapter_list[0].data;console.log(typeof c);if(array_count(c)){if(a.checkupdate)return{pid:a.pid,cid:c[0].id,title:c[0].chapter_name};
e=[];for(d=0;d<c.length;d++)e[d]=additemlist({id:c.length-d-1,newest:a.newest&&0==d,pid:a.pid,cid:c[d].id,title:c[d].chapter_name,count:c.length,reverse:1});return e}a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,
c,d,e){c=b.title;d=b.newstime;e=b.zz;var f=b.status,g=b.lastchapter,l=b.stext,h=b.mytag;setlistpic({name:c,img:"http://pic.ishenman.com"+b.titlepic,added:a.data,description:"<p>"+(e?"\u3010\u4f5c\u8005\u3011"+e+"<br>":"")+(f?"\u3010\u72b6\u6001\u3011"+f+"<br>":"")+(h?"\u3010\u7c7b\u578b\u3011"+h+"<br>":"")+(g?"\u3010\u6700\u65b0\u8bdd\u3011"+g+"<br>":"")+(d?"\u3010\u66f4\u65b0\u65e5\u671f\u3011"+d+"<br>":"")+(l?"\u3010\u7b80\u4ecb\u3011"+l:"")+"</p>",sourceurl:pluginfo(a.plugin).apihost+"api/comic.php?id="+
a.pid,comment:1,preview:0,tags:gettag(h.split(","))+gettag(c)+gettag(e)});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"api/chapter.php?id="+a.cid,method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u56fe\u7247\u4fe1\u606f...",title:"\u56fe\u7247",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,
c,d,e){b=(b||{}).page_url;array_count(b)?(b=b.map(function(a){return(0==a.indexOf("/store_file_download")?"http://s2.fast.zh868.com":"http://s2.img.zh868.com")+a}),console.log(b),a.download?chapterpredownload({source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),
mySession.isloading=0,ExView.fw.alert("\u56fe\u7247\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},commentflag:{loader:function(a){return{url:1==parseInt(a.page||1)?"http://changyan.sohu.com/api/2/topic/load?client_id=cyrL0X7ih&topic_url="+encodeURIComponent(pluginfo(a.plugin).apihost+"comment.html?id="+a.pid)+"&page_size=30&hot_size=0&topic_source_id="+a.pid.substring(2):"http://changyan.sohu.com/api/2/topic/comments?client_id=cyrL0X7ih&page_size=30&topic_id="+a.sid+"&page_no="+
(a.page+1),method:"GET",timeout:120,successfn:function(b,c){if(b){var d={};1==parseInt(a.page||1)&&(d=JSON.parse(b));a.callback&&a.callback({result:b,header:c,sid:d.topic_id||a.sid,commentbrowser:{url:pluginfo(a.plugin).apihost+"comment.html?id="+a.pid,title:"\u8bc4\u8bba - "+pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}})}else a.callback&&a.callback()}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,
c,d,e){if(array_count(b)){c=b.comments;b=b.total_page_no;for(var f in c)a.callback&&a.callback({page:a.page||1,pagecount:b,comment:{text:c[f].content,name:c[f].passport.nickname,avatar:c[f].passport.img_url,type:"received",label:(new Date(parseInt(c[f].create_time))).toLocaleString().replace(/:\d{1,2}$/," "),day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1,more:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"api/do.php?act=load&mod=update&page="+
(parseInt(a.page||1)-1),method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b){console.log(JSON.stringify(b));array_count(b)&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"api/do.php?act=load&mod=rank&flag=0-0-0-"+(parseInt(a.page||1)-1),method:"GET",timeout:120,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},
finder:function(a){return{json:!0,str:a.result,successfn:function(b){console.log(JSON.stringify(b));array_count(b)&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{pagedeal:function(a,b){b=b||{};var c=a.id,d=a.title,e="http://pic.ishenman.com"+a.titlepic,f=a.status?"\u5b8c\u7ed3":"\u8fde\u8f7d",g=a.mytag,l=getLocalTime(1E3*parseInt(a.newstime)),h=a.zz,k=a.lastchapter,g=(h?"\u3010\u4f5c\u8005\u3011"+h+"<br>":"")+(f?"\u3010\u72b6\u6001\u3011"+f+"<br>":"")+(g?"\u3010\u7c7b\u578b\u3011"+g+"<br>":"")+(k?"\u3010\u6700\u65b0\u8bdd\u3011"+
k:"");if(b.multupdate)return b.multupdate(obj_contact(b,{pid:c,img:e,title:d,content:"\u3010"+(f||"\u66f4\u65b0\u65e5\u671f")+"\u3011"+l})),!1;if(b.multhot)return b.multhot(obj_contact(b,{pid:c,img:e,title:d,content:k?"\u3010"+(f||"\u6700\u65b0\u8bdd")+"\u3011\u66f4\u65b0\u81f3 "+k:""})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:e,title:d,content:k?"\u3010"+(f||"\u6700\u65b0\u8bdd")+"\u3011\u66f4\u65b0\u81f3 "+k:""})),!1;addcardlist({pid:c,title:d,img:e,stitle:l,content:g,comment:1})}}});
