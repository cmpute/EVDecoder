ExView.Plugins({info:{name:"57漫画",version:"2.2",author:"Gentle",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAt1BMVEX////+/f38cTr9Zyz++/r8RwH+6uL9vKL9rY7+8+/+4NT90L/9o4D9ekf9d0IvLy/+9/P+9PH+7ebj4uH+2sz+1sb+yrb+x7KysrL+wan9tpr+tZn9sJL9poX9k2n9jmL9iVr9g1P9gE/9bTX8XB38VhX8UQ719fXt7e3+8ezp6eny6eX+5t3Y2Nj+3c/ExMTBwcH+zbn9zbn9w6yWlpZ/f3/9nnlzc3NfX19WVlY/Pz/8XyH8TQhbqlHNAAAAtElEQVQY0yVOBQ7DQAy7HJS2tWMuw5gZ/v+uxZ0VWY4VsACIuJggBTCXUp5GEmihb+dKqa2jGJ8MxswmrNVyirWWCdFBZhbYTc39f7HjY9bzPN9MamfY5H+Ndm+8kYWGEfVJ9K31O3g2zJB77WsSNo2Dx6tXOGzsI6amOASL41LN+Vo4YiNx9e26c6sB/neIJ2JNpOOcZTclwVxKx5HfAWsbMfltaUxVx0g4JrC62JZAwjPcHxkKCvVwfqosAAAAAElFTkSuQmCC",
db:"57mh",apihost:"http://m.57mh.com/",pagetitle:["<br>","收藏","首页","类型","下载"],download:!0,lazyload:!0,setting:!0,theme:"orange",cdn:""},set:function(a){},unset:function(a){},init:function(a){ExView.workers.fav.listloader({callback:function(){}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost,method:"GET",timeout:120,successfn:function(b,c){a.callback({img:pluginfo(a.plugin).icon,multpage:!0,result:b,header:c})}}},finder:function(a){return{query:!0,
selector:".main-list-wrap>#data_list>li",str:a.result,successfn:function(b){array_count(b)?$$(b).each(function(){var b=getstr(/\/(\d+)\//,$$(this).find("a").attr("href")),d=$$(this).find("h3").text(),e=$$(this).find("img").attr("data-cfsrc")||$$(this).find("img").attr("src"),f=$$(this).find("p").text();a.callback({pid:b,title:d,img:e,content:f,comment:1})}):a.callback()}}},countloader:!1,countfinder:function(a){return{successfn:function(b){a.callback({pagecount:-1})}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost,
method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){a.callback({title:"首页",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"首页"});a.callback({tid:"",listflag:"list/order-id-p-{{page}}",title:"最新发布",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"最新发布"});a.callback({tid:"",listflag:"list/order-addtime-p-{{page}}",title:"最近更新",
img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"最近更新"});a.callback({tid:"",listflag:"list/order-hits-p-{{page}}",title:"人气最旺",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"人气最旺"});a.callback({tid:"",listflag:"list/order-gold-p-{{page}}",title:"评分最高",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"评分最高"});
return{query:!0,selector:".cat-list>li",str:a.result,successfn:function(b){array_count(b)&&$$(b).each(function(b){b=$$(this).find("a").attr("href");var d=$$(this).find("a").text();"卖肉"!=d&&a.callback({tid:"",listflag:b+"-p-{{page}}",title:d,img:pluginfo(a.plugin).icon,group:{name:"fenlei",title:"分类"},content:d})})}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.flag.replace("{{page}}",a.page||1),method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,
result:b,header:c})}}},finder:function(a){return{query:!0,selector:"#contList>li",str:a.result,successfn:function(b){array_count(b)?$$(b).each(function(){var b=getstr(/\/(\d+)\//,$$(this).find("a").attr("href")),d=$$(this).find("a").attr("title"),e=$$(this).find(".updateon");e.find("em").remove();var e=e.text(),f=$$(this).find("img").attr("data-cfsrc")||$$(this).find("img").attr("src"),g=$$(this).find(".tt").text();a.callback({pid:b,title:d,img:f,stitle:e||"",content:g,comment:1})}):a.callback()}}},
countloader:!1,countfinder:function(a){return{query:!0,selector:".pager a:nth-last-child(2)",str:a.result,successfn:function(b){b=$$(b).text()||-1;a.callback({pagecount:b})}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"search/q_"+encodeURIComponent(a.keyword)+"-p-"+(a.page||1),method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,result:b,header:c})}}},finder:function(a){return{query:!0,selector:"#data_list>li",str:a.result,successfn:function(b){array_count(b)?
$$(b).each(function(){var b=getstr(/\/(\d+)\//,$$(this).find("a").attr("href")),d=$$(this).find("h3").text(),e=$$(this).find("dl:nth-child(2)>dd").text()+" "+$$(this).find("dl:nth-child(5)>dd").text(),f=$$(this).find("img").attr("data-src"),g=getboxitem($$(this).find(".thumb>i").text())+getboxitem($$(this).find("dl:nth-child(4)>dd").text())+getboxitem($$(this).find("dl:nth-child(2)>dd").text())+getboxitem($$(this).find("dl:nth-child(3)>dd").text());a.multsearch?a.callback({pid:b,title:d,img:f,content:$$(this).find(".thumb>i").text()+
" "+$$(this).find("dl:nth-child(4)>dd").text()+" "+$$(this).find("dl:nth-child(5)>dd").text()}):a.callback({pid:b,title:d,img:f,stitle:e||"",content:g,comment:1})}):a.callback()}}},countloader:!1,countfinder:function(a){return{query:!0,selector:".pager a:nth-last-child(2)",str:a.result,successfn:function(b){b=$$(b).text()||-1;a.callback({pagecount:b})}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.pid+"/",method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,
header:c})}}},finder:function(a){return{query:!0,selector:".chapter-list li",str:a.result,successfn:function(b,c,d,e){if(array_count(c)){if(a.checkupdate)return d=getstr(/(\d+)\.html/,$$(b).find("a").attr("href")),b=$$(b).find("a").text(),a.callback({pid:a.pid,cid:d,title:b}),!0;e=[];$$(c).each(function(b){var d=getstr(/(\d+)\.html/,$$(this).find("a").attr("href")),h=$$(this).find("a").text();e[b]=a.callback({id:c.length-b-1,newest:a.newest&&0==b,pid:a.pid,cid:d,title:h,count:c.length,reverse:1})});
return e}a.callback()}}},infoloader:!1,infofinder:function(a){return{query:!0,selector:".book-detail",str:a.result,successfn:function(b){var c=$$(b).find(".thumb>img").attr("data-cfsrc")||$$(b).find(".thumb>img").attr("src"),d=$$(b).find(".thumb>img").attr("title"),e=$$(b).find(".cont-list>dl:nth-child(8)>dd").text(),f=$$(b).find(".cont-list>dl:nth-child(4)>dd").text(),g=$$(b).find(".cont-list>dl:nth-child(5)>dd").text(),h=$$(b).find(".book-intro").text();b=$$(b).find(".cont-list>dl:nth-child(3)>dd").text();
a.callback({name:d,img:c,added:a.data,description:"<p>"+(f?"【作者】"+f+"<br>":"")+(g?"【类型】"+g+"<br>":"")+(e?"【更新】"+e+"<br>":"")+(b?"【地区】"+b+"<br>":"")+(h?"【简介】"+h:"")+"</p>",comment:1,preview:0,tags:gettag(d)+gettag(f)+gettag((g||"").split("/")),sourceurl:pluginfo(a.plugin).apihost+a.pid+"/"});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+a.pid+"/"+a.cid+".html",method:"GET",
timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{successfn:function(b,c,d,e){b=Function(getstr(/eval\((.*?)\)\n/,a.result,0)+";return cInfo;")();b=(b||{}).fs;array_count(b)?(b=b.map(function(a){return"http://images.720rs.com"+a}),a.download?a.callback({source:b,type:"image",download:a.download,plugin:a.plugin}):a.callback({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.callback();return!0}}}},
commentflag:{loader:function(a){return{url:1==parseInt(a.page||1)?"http://changyan.sohu.com/api/2/topic/load?client_id=cyrMpJ5Jn&topic_url="+encodeURIComponent(pluginfo(a.plugin).apihost+"/"+a.pid+"/")+"&page_size=30&hot_size=0&topic_source_id="+a.pid:"http://changyan.sohu.com/api/2/topic/comments?client_id=cyrMpJ5Jn&page_size=30&topic_id="+a.sid+"&page_no="+(a.page+1),method:"GET",timeout:120,successfn:function(b,c){if(b){var d={};1==parseInt(a.page||1)&&(d=JSON.parse(b));a.callback&&a.callback({result:b,
header:c,sid:d.topic_id||a.sid,commentbrowser:{url:pluginfo(a.plugin).apihost+"/"+a.pid+"/",title:"评论 - "+pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}})}else a.callback&&a.callback()}}},finder:function(a){console.log(a);return{json:!0,str:a.result,successfn:function(b,c,d,e){if(array_count(b)){c=b.comments;b=b.total_page_no;for(var f in c)a.callback&&a.callback({page:a.page||1,pagecount:b,comment:{text:c[f].content,name:c[f].passport.nickname,
avatar:c[f].passport.img_url,type:"received",label:(new Date(parseInt(c[f].create_time))).toLocaleString().replace(/:\d{1,2}$/," "),day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"list/order-id-p-"+(a.page||1),method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,selector:"#contList>li",str:a.result,successfn:function(b){array_count(b)?
$$(b).each(function(){var b=getstr(/\/(\d+)\//,$$(this).find("a").attr("href")),d=$$(this).find("a").attr("title"),e=$$(this).find(".updateon");e.find("em").remove();var e=e.text(),f=$$(this).find("img").attr("src")||$$(this).find("img").attr("data-cfsrc"),g=$$(this).find(".tt").text();a.callback({pid:b,title:d,img:f,stitle:e||"",content:g,comment:1})}):a.callback()}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"list/order-hits-p-"+(a.page||1),method:"GET",timeout:120,successfn:function(b,
c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,selector:"#contList>li",str:a.result,successfn:function(b){array_count(b)?$$(b).each(function(){var b=getstr(/\/(\d+)\//,$$(this).find("a").attr("href")),d=$$(this).find("a").attr("title"),e=$$(this).find(".updateon");e.find("em").remove();var e=e.text(),f=$$(this).find("img").attr("src")||$$(this).find("img").attr("data-cfsrc"),g=$$(this).find(".tt").text();a.callback({pid:b,title:d,img:f,stitle:e||"",content:g,comment:1})}):
a.callback()}}}}},fns:{}});
