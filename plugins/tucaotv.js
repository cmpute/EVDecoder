ExView.Plugins({info:{name:"\u5410\u69fd\u89c6\u9891",version:"2.2",author:"Gentle",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALhSURBVDhPPZHbUxIBGMX3X+wtZ3rqoYemGtMBlUUJUYYoL5ji4qoQZYEgauqK5S0d8AINyBI3g1ZYWHYXl5tuGLv7RT30mzPfzDkv38w5yERSNqfBGJeNpGSISR0brshcrVm8zNYrgqQosixDB0X5dwEZjsmjWRhOgu47dEchdvM356o8GTz9jvv4ZPav/88dICOkpE+C9kJGo9I+B1VRLKdz9Haw7DuMaGcy2AoTzzQajVILqi2ANiDHrITGYehCJhvQuKKu7Jvcaw/M+MHqh/ldaXb71krQTn8mHIuLQNUV5FdbfpEEfxnEApXTYNQzy7XpI7w/urP5f+M7om07b1r6PbV18dhUCoQPBEB8Bdl8Cexdm5rz8t1WGsUrQ46Majqpnk71TrVG3akeC9k7wfbhlMnJCHXEmAJHCSqVCqXDGRUmmN3coL2gtiX6JxmzUxr2FE329Ii1ib7LTbiqx98Qc0bxXQObSDHofM3w4YcGI57qx+49tKk1pB6jXzr3Mev4k+e+x2gG87RoFik3Fb4NVCAs6N4qsztXQ9hc30DogY6OxoqXcVEsnUzOk5YPfscSPTAnsDzSqbYDdRIVDEuA71XNrjix/mPli8gxAHWAWjlwUjo8r0RjNY2DDUQR6LQLUAiRNaOrOPKubdvlnQQVCUOLF+LR3CpRy2ckqF5HI7fDrp/OLaQlKp1x8wfn8hui0IdRmrl8P35umPq07k0tLDenPcx74qdnK9g7lsC8XDqLRKoKU7vh7YQ8uSEM2q/RBbbb2tz/qtWPOh6pyBls26hb17zI9WMCz4VuAdngocawxVcfBXSx0pF2ke/BSiv+JBkc0D5TDXb1oF1en0Owbdx8Dp0KbcR5pTQkJRs4S2uxugoX+vHbgQXDffXi22Vicw8bG7eMTa1Zljqfb3bOIvU2EhBA4NlMMFQIfKOPwvnjMH0aCeyfrK7tepYJt2vL5SaO/MdcJMHXm+4i/AFXwVFzBLfmrwAAAABJRU5ErkJggg==",
db:"tucaotv",type:"video",apihost:"http://www.tucao.tv/",pagetitle:["<br>","\u6536\u85cf","\u8fde\u8f7d\u65b0\u756a","\u7c7b\u578b","\u4e0b\u8f7d"],download:!1,lazyload:!0,setting:!0,theme:"red",cdn:""},set:function(a){},unset:function(a){},init:function(a){ExView.workers.fav.listloader({callback:function(){}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"list/11/index_"+(a.page||1)+".html",method:"GET",timeout:120,successfn:function(b,c){a.callback({img:pluginfo(a.plugin).icon,
multpage:!0,result:b,header:c})}}},finder:function(a){return{query:!0,selector:".lists_box .box",str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{query:!0,selector:".selectpages option:nth-last-child(1)",str:a.result,successfn:function(b){try{var c=$$(b).text(),d=parseInt(c)}catch(e){d=-1}a.callback({pagecount:d})}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost,method:"GET",timeout:120,
successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){a.callback({title:"\u8fde\u8f7d\u65b0\u756a",img:pluginfo(a.plugin).icon,group:{name:"S"+ExView.tools.md5.hex_md5("\u65b0\u756a"),title:"\u65b0\u756a"},content:"\u8fde\u8f7d\u65b0\u756a"});return{query:!0,selector:".header_nav",str:a.result,successfn:function(b){if(array_count(b)){b=$$(b).find(".nav_link");for(var c=0;c<b.length;c++)if(0!=c)for(var d=b.eq(c).text(),e="S"+ExView.tools.md5.hex_md5(d),f=getquery(a.result,"#nav_"+
c).find("a"),g=0;g<f.length;g++){var h=getstr(/\/list\/(\d+)\//,$$(f[g]).attr("href")),k=$$(f[g]).text();"\u8fde\u8f7d\u65b0\u756a"!=k&&a.callback({tid:h,title:k,img:pluginfo(a.plugin).icon,group:{name:e,title:d},content:k})}}}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"list/"+a.tid+"/index_"+(a.page||1)+".html",method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,result:b,header:c})}}},finder:function(a){return{query:!0,selector:".lists_box .box",str:a.result,
successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{query:!0,selector:".selectpages option:nth-last-child(1)",str:a.result,successfn:function(b){try{var c=$$(b).text(),d=parseInt(c)}catch(e){d=-1}a.callback({pagecount:d})}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"index.php?m=search&c=index&a=init2&q="+a.keyword+"&page="+(a.page||1),method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,
result:b,header:c})}}},finder:function(a){return{query:!0,selector:".search_list .list",str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{query:!0,selector:".pages a:nth-last-child(2)",str:a.result,successfn:function(b){try{var c=$$(b).text(),d=parseInt(c)}catch(e){d=-1}a.callback({pagecount:d})}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"play/h"+a.pid+"/",method:"GET",timeout:120,
successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,selector:"#player_code li:nth-child(1)",str:a.result,successfn:function(b,c,d,e){b=$$(b).text();b=b.split("**");if(array_count(b)){if(a.checkupdate)return c=b.pop().split("|"),a.callback({pid:a.pid,cid:c[0],title:"\u7b2c "+(c[1]||b.length+1)+" \u96c6"}),!0;e=[];b.forEach(function(c,d){var h=c.split("|");e[d]=a.callback({id:d,newest:a.newest&&0==d,pid:a.pid,cid:h[0],title:"\u7b2c "+(h[1]||d+1)+" \u96c6",count:b.length,
reverse:0})});return e}a.callback()}}},infoloader:!1,infofinder:function(a){return{query:!0,selector:".tab_mod",str:a.result,successfn:function(b,c,d,e){b=$$(b);c=getlistimg(a.pid,a.plugin);d=getlistname(a.pid,a.plugin);e=getquery(a.result,".show_time").text();for(var f=getquery(a.result,".r_user").text(),g=b.find(".show_key a"),h=[],k=0;k<g.length;k++)h.push($$(g[k]).text());b=b.find(".show_content").html();a.callback({name:d,img:c,added:a.data,description:"<p>"+(f?"\u3010\u4f5c\u8005\u3011"+f+"<br>":
"")+(h?"\u3010\u7c7b\u578b\u3011"+h.join(",")+"<br>":"")+(e?"\u3010\u66f4\u65b0\u3011"+e+"<br>":"")+(b?"\u3010\u7b80\u4ecb\u3011"+b:"")+"</p>",comment:1,preview:0,tags:gettag(d)+gettag(f)+gettag(h||""),sourceurl:pluginfo(a.plugin).apihost+"play/h"+a.pid+"/"});return!0}}}},parseflag:{loader:function(a){return{url:"http://api.tucao.tv/api/playurl?"+a.cid,method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,selector:"url",str:a.result,
successfn:function(b,c,d,e){if(array_count(b)){b=[];for(d=0;d<c.length;d++)b.push($$(c[d]).html().replace("\x3c!--[CDATA[","").replace("]]--\x3e",""));c=$$(".listcover img").attr("src");ExView.fw.hidePreloader();d=b[0].split(".").pop().split("?").shift();"flv"!=d.toLowerCase()&&(d="mp4");a.callback({poster:c,url:pluginfo(a.plugin).apihost+"play/h"+a.pid+"/",source:b,type:"video",videoType:d,title:a.title})}else a.callback();return!0}}}},commentflag:{loader:function(a){myContent.cmkey||$$.ajax({url:pluginfo(a.plugin).apihost+
"play/h"+a.pid+"/",async:!1,success:function(a){myContent.cmkey=getquery(a,"#player_code li:nth-last-child(1)").text()}});return{url:pluginfo(a.plugin).apihost+"index.php?m=comment&c=index&a=init&commentid=content_"+myContent.cmkey+"&hot=0&iframe=1&page="+(a.page||1),method:"GET",timeout:120,successfn:function(b,c){b?a.callback({result:b,header:c,commentbrowser:{url:pluginfo(a.plugin).apihost+"index.php?m=comment&c=index&a=init&commentid=content_"+myContent.cmkey+"&hot=0&iframe=1",title:"\u8bc4\u8bba - "+
pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}}):a.callback()}}},finder:function(a){return{query:!0,selector:".comment_list",str:a.result,successfn:function(b,c,d,e){b=$$(b).find("tr");c=[];for(d=0;d<b.length;d++)b.eq(d).find(".user").length?c.push({user:b.eq(d).find(".user").text(),img:b.eq(d).find("img").attr("src"),content:b.eq(d).find(".info.c").text()}):(c[c.length-1].floot=b.eq(d).find(".lch").text(),c[c.length-1].time=b.eq(d).find(".time").text());
if(array_count(c))for(var f in c)a.callback({page:a.page||1,pagecount:0,comment:{text:c[f].content,name:c[f].user,avatar:c[f].img,type:"received",label:c[f].floot,day:c[f].time,time:"",reverse:1,extra:""}})}}},send:!1},previewflag:{loader:!1,finder:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"list/11/index_"+(a.page||1)+".html",method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,
selector:".lists_box .box",str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"list/26/index_"+(a.page||1)+".html",method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,selector:".lists_box .box",str:a.result,successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}}}},fns:{pagedeal:function(a,b){b=
b||{};console.log(a);a=$$(a);var c=getstr(/\/h(\d+)\//,a.find(".pic").attr("href"))||getstr(/\/h(\d+)\//,a.find(".pic a").attr("href")),d=a.find("img").attr("src"),e=a.find("img").attr("alt"),f=(a.find(".user").text()||"").replace("UP:"," ")||(a.find(".c").text()||"").replace("\u6295\u7a3f:","").replace("\u53d1\u5e03\u4e8e\uff1a"," "),g=a.find(".description").text()||a.find(".d").text();if(b.multupdate||b.multhot||b.multsearch)return b.callback(obj_contact(b,{pid:c,img:d,title:e,content:f})),!1;b.callback({pid:c,
title:e,img:d,stitle:f,content:g,comment:1})}}});
