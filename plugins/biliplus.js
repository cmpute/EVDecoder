ExView.Plugins({info:{name:"BiliPlus视频",version:"2.2",author:"Gentle",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUziP/h7f+ZxP94sP/////y9/+EuP9boP9bn//W6P/q8/+92P+axP9wrP9pqP9gov87WRrDAAAAK0lEQVQI12MgAyQwMDC72AdpXZsGZMhJCCkWbAAyYjyADAMgIxLEYCATAAAVAQcc4jPzZgAAAABJRU5ErkJggg==",db:"biliplus",type:"video",apihost:"https://www.biliplus.com/",pagetitle:["<br>","收藏","首页","类型","下载"],typelistmode:!0,download:!1,lazyload:!0,
setting:!0,cdn:""},set:function(b){},unset:function(b){},init:function(b){ExView.workers.fav.listloader({callback:function(){}})},flags:{indexflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"api/list.php?callback=showlist&page="+(b.page||1),method:"GET",timeout:120,successfn:function(a,c){b.callback({img:pluginfo(b.plugin).icon,multpage:!0,result:getstr(/showlist\((.*?)\)\;/g,a),header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).list;array_count(a)?
plugfns(b.plugin).pagedeal(a,b):b.callback()}}},countloader:!1,countfinder:function(b){return{json:!0,str:b.result,successfn:function(a){try{a=(a=(a||{}).pages)||0}catch(c){a=-1}b.callback({pagecount:a})}}}},typeflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"?list",method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},finder:function(b){b.callback({title:"全区",img:pluginfo(b.plugin).icon,group:{name:"daohang",title:"导航"},content:"全区"});
b.callback({tid:"cached",title:"已缓存的投稿",img:pluginfo(b.plugin).icon,listflag:"api/cached?page={{page}}",group:{name:"daohang",title:"导航"},content:"已缓存的投稿"});var a=[];getstr(/tidTree=([\s\S]*)chklist/,b.result).split("\n").forEach(function(b){"\t"==b[0]&&(b=b.split(":"),b.shift(),a.push(b.join(":")))});a=JSON.parse("["+a.join("")+"]");console.log(a);return{successfn:function(c){c=a;array_count(c)&&c.forEach(function(a,c){var e="s"+
ExView.tools.md5.hex_md5(a.name),g=a.name;(function(a,c){(a.child||[]).forEach(function(c,d){b.callback({tid:c,title:a.child_name[d],img:pluginfo(b.plugin).icon,group:{name:e,title:g},content:a.child_name[d]})})})(a,c)});$$.get(pluginfo(b.plugin).apihost+"?bangumi",function(a){a=getstr(/bangumis=(.*?)\;\r*\n/g,a);a=JSON.parse(a);console.log(a);var c="周日 周一 周二 周三 周四 周五 周六".split(" ");(a||[]).forEach(function(a,g){(function(c){(a||
[]).forEach(function(a){b.callback({tid:"week",listflag:a.link,title:a.title,img:0==a.cover.indexOf("//")?"https:"+a.cover:a.cover,group:{name:"s_"+ExView.tools.md5.hex_md5(c),title:c},content:a.title+"("+a.count+")"+(a.lastUpdate?"<br>"+getLocalTime(1E3*a.lastUpdate):"")})})})(c[g])})})}}}},listflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+(b.flag?"week"==b.tid?"api/bangumi?season="+b.flag.substring(2):b.flag.replace("{{page}}",b.page||1):"api/list.php?callback=showlist&tid="+b.tid+
"&page="+(b.page||1)),method:"GET",timeout:120,successfn:function(a,c){b.callback({multpage:!0,result:b.flag?a:getstr(/showlist\((.*?)\)\;/g,a),header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){"cached"==b.tid?(a=(a||{}).data,(a||[]).forEach(function(a){b.callback({pid:a[0],title:a[1],img:"img/nopic.png",stitle:a[2]+" "+a[3],content:"",comment:1})})):"week"==b.tid?(a=(a||{}).result.episodes,(a||[]).forEach(function(a){var f=a.av_id,d=b.title,e=0==a.cover.indexOf("//")?
"https:"+a.cover:a.cover;b.callback({pid:f,title:d,img:e,stitle:"AV"+f,content:"第"+a.index+"集 "+a.index_title,comment:1})})):(a=(a||{}).list,array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback())}}},countloader:!1,countfinder:function(b){return{json:!0,str:b.result,successfn:function(a){try{a=(a=(a||{}).pages)||0}catch(c){a=-1}"week"==b.tid&&(a=-1);b.callback({pagecount:a})}}}},searchflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"api/search_api?word="+encodeURIComponent(b.keyword)+
"&o=default&n=20&source=biliplus&p="+(b.page||1),method:"GET",timeout:120,successfn:function(a,c){b.callback({multpage:!0,result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).result;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}},countloader:!1,countfinder:function(b){return{json:!0,str:b.result,successfn:function(a){try{a=(a=(a||{}).page)||0}catch(c){a=-1}b.callback({pagecount:a})}}}},contentflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+
"video/av"+b.pid+"/",method:"GET",timeout:120,successfn:function(a,c){a=(getstr(/view\((.*?)\);\}\);\r*\n/g,a)||"").replace(/\<\/\"\+\"script\>/g,"\x3c/script>");b.callback({result:a,header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a,c,f,d){console.log(a);a=(a||{}).list;if(array_count(a)){if(b.checkupdate)return a=a.pop(),b.callback({pid:b.pid,cid:a.cid,title:a.part}),!0;d=[];a.forEach(function(a,c){d[c]=b.callback({id:c,newest:b.newest&&0==c,pid:b.pid,cid:a.cid,title:a.part,
count:a.length,reverse:0})});return d}b.callback()}}},infoloader:!1,infofinder:function(b){return{json:!0,str:b.result,successfn:function(a,c,f,d){c=0==a.pic.indexOf("//")?"https:"+a.pic:a.pic;f=a.title;d=a.lastupdate;var e=a.author,g=a.typename,h=a.description||"",h=h.replace(/<script>(.*?)<\/script>/g,""),h=(gettext(h)||"").replace(/\n/g,"<br>");a=a.tag;b.callback({name:f,img:c,added:b.data,description:"<p>AV"+b.pid+"<br>"+(e?"【作者】"+e+"<br>":"")+(g?"【类型】"+
g+"<br>":"")+(a?"【标签】"+a+"<br>":"")+(d?"【更新】"+d+"<br>":"")+(h?"【简介】"+h:"")+"</p>",comment:1,preview:0,tags:gettag(f)+gettag(e)+gettag((g||"").split(","))+gettag((a||"").split(","))});return!0}}}},parseflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"api/geturl?bangumi=0&av="+b.pid+"&page=1",method:"GET",timeout:120,successfn:function(a,c){b.callback({result:a,header:c})}}},finder:function(b){console.log(JSON.parse(b.result));
return{successfn:function(a,c,f,d){a=JSON.parse(b.result);videolength=a.length;a=(a||{}).data;array_count(a)&&!b.download?(ExView.fw.hidePreloader(),c='<div class="list-block" style="margin:0"><div>时长: '+videolength+'</div><ul class="videosourcecheck"><li><label class="label-radio item-content"><input type="radio" name="my-radio" value="web" checked="checked"><div class="item-media"><i class="icon icon-form-radio"></i></div><div class="item-inner"><div class="item-title">弹幕播放器</div></div></label></li>'+
a.map(function(a,b){return'<li><label class="label-radio item-content"><input type="radio" name="my-radio" value="'+b+'"><div class="item-media"><i class="icon icon-form-radio"></i></div><div class="item-inner"><div class="item-title">'+gettext(a.name)+("split"==a.type?"【分段】":"")+"</div></div></label></li>"}).join("")+"</ul></div>",ExView.fw.confirm(c,myContent.name,function(){var c="web";$$(".videosourcecheck input").each(function(){$$(this).prop("checked")&&(c=$$(this).val())});
if("web"==c)window.open(pluginfo(b.plugin).apihost+"api/h5play.php?iframe&name&cid="+b.cid+"&type=vupload&vid=vupload_"+b.cid+"&bangumi=0","_blank","location=no,zoom=no");else{if(a[c].parts)var d=a[c],d=d.parts.map(function(a){return a.url});else d=a[c].url;var f=$$(".listcover img").attr("src");ExView.fw.hidePreloader();var k=/\/flv\/|\.flv/.test(d[0]),k=k?"flv":"mp4";b.callback({poster:f,url:pluginfo(b.plugin).apihost+"api/h5play.php?iframe&name&cid="+b.cid+"&type=vupload&vid=vupload_"+b.cid+"&bangumi=0",
source:d,type:"video",videoType:k,title:b.title})}})):b.callback();return!0}}}},commentflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"api/reply?isReply=0&type=1&sort=0&oid="+b.pid+"&pn="+(b.page||1)+"&callback=review&_="+getTimeNow(),method:"GET",timeout:120,successfn:function(a,c){a?b.callback({result:a,header:c,commentbrowser:!1}):b.callback()}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a,c,f,d){a=(a||{}).data;if(array_count(a)){c=Math.ceil(a.page.count/
a.page.size);a=a.replies;for(var e in a)b.callback({page:b.page||1,pagecount:c,comment:{text:a[e].content.message,name:a[e].member.uname||"",avatar:a[e].member.avatar,type:"received",label:getLocalTime(1E3*parseInt(a[e].ctime||0)),day:"",time:"",reverse:1,extra:""}})}}}},send:!1},previewflag:{loader:!1,finder:!1},pageimgflag:{parser:!1},updateflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"api/list.php?callback=showlist&page="+(b.page||1),method:"GET",timeout:120,successfn:function(a,
c){b.callback({result:getstr(/showlist\((.*?)\)\;/g,a),header:c})}}},finder:function(b){return{json:!0,str:b.result,successfn:function(a){a=(a||{}).list;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}}},hotflag:{loader:function(b){return{url:pluginfo(b.plugin).apihost+"api/list.php?callback=showlist&tid=33&page="+(b.page||1),method:"GET",timeout:120,successfn:function(a,c){b.callback({result:getstr(/showlist\((.*?)\)\;/g,a),header:c})}}},finder:function(b){return{json:!0,str:b.result,
successfn:function(a){a=(a||{}).list;array_count(a)?plugfns(b.plugin).pagedeal(a,b):b.callback()}}}}},fns:{pagedeal:function(b,a){a=a||{};b.forEach(function(b){var f=b.aid,d=b.pic,d=0==d.indexOf("//")?"https:"+d:d,e=b.title,g=b.author+" "+(b.create||getLocalTime(1E3*parseInt(b.pubdate))),h=b.duration||"";b=getboxitem(b.typename)+(h?getboxitem("时长"+h)+b.description:"");if(a.multupdate||a.multhot||a.multsearch)return a.callback(obj_contact(a,{pid:f,img:d,title:e,content:g})),!1;a.callback({pid:f,
title:e,img:d,stitle:g,content:b,comment:1})})}}});
