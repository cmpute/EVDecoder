ExView.Plugins({info:{name:"漫漫漫画",version:"2.2",author:"Gentle",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACGVBMVEX/9ej4k3b///b/9urn3dn82tK/w8T7zsH7vrH6taH5qZb3l372hGP1dU/yRRH///j/9vX/9e/59u7/+ez+9Of68uf57+X+6uTD2eH/7t786dzq29j81dDc0cv81Mr70cn8zsX7yr37yLz7xrne1Lj6v7W8tq+VqK24sqj6sp/5rJX6po3hkYP6jG/4jG79jWv3iGnjgmP1elj7fFT7eFP6aDvzXTXyTR7yUBfyTBTySRP////g///08ffg7vT/+PP//fHU5e6s3ev97eqs2urm6en7+Ojz7+f+7uXo5OP06uLU3+LS5d7h4979493t4d3939vf39rj4dna2djIzNfr4dbp3tXu3NXl2dX13dLBytHE08/iz8/Z087W0c3Z2czuzMj70cfh0cfZycbfysWswsXYusP7ycLcvMLOxsGqwsDNur6puLyvvLu2urirs7f7xLbBtLXRt7L7w7HVrK37vaz6tqv6u6qsqqqVparQ1Kferqf5tKX4raHMkZ39qpmknpfYmJbdcZPlm436n4r3n4fQkIV+gYLMj4H/m4DOhYD5nX/3k3+Gfn73kn3+lXz3lXvkhnjzj3Jrb3Dxg2z2i2nxiGbadGbYdWHzgGD3g1qUoFb2e1H2gFDcXE7zZTn5Yzj5ZTZ4nTL2YS/7Xy77gi30XCvyWij4WSb3UBnyVBjxPhLxPhH6cgnzXgf0cwL3aQL0ewDvOgBQgBdCAAABFUlEQVQY0wXBA4IDARAAsNnatm27Pdu2bdu2bdt8YRNAc3WsKimHZzm5XsBIeWhgFx2MrsyKMXuHJktjAwCw6/sKtgzp+eunmtXKtGIu0GPzojGslKSoueUJBlNcAsRFpxNBzlznl1SbzfH4AB9fv1YzWeH/+xlWTTG8NPA/fU+qSdibq/clAkl1F4TQzCaikOOpuwSTRIa10yDwKtMqlZKjf7xxQNviDkHgrXd7hJjre1GT8XX82yDQ3EQyNlvuoyIUwhDJ+wnPHpdnzb5jpVAc+8cbZiOk8kXVbThcFgqV09pcGkEHQCV06sf03cnCflzHoAiAqbmoKO8RCKbLDE1dOiFAzPh9e1xGZOF8bWZifA0HHQZxJkVVCgOWdwAAAABJRU5ErkJggg==",
db:"mmmh",apihost:"http://m.manmanapp.com/",pagetitle:["<br>","收藏","热门","类型","下载"],nosearch:!0,download:!0,lazyload:!0,setting:!0,vphotomode:!0,theme:"red",cdn:""},set:function(a){},unset:function(a){},init:function(a){ExView.workers.fav.listloader({callback:function(){}})},flags:{indexflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"site/get-category-info.html",method:"POST",data:"categoryId=22",postform:!0,timeout:120,successfn:function(b,c){a.callback({img:pluginfo(a.plugin).icon,
multpage:!0,result:b,header:c})}}},finder:function(a){var b=[];(JSON.parse(a.result||"{}").categoryInfo||[]).forEach(function(a){a.categoryInfo.forEach(function(a){b.push(a)})});return{json:!0,str:JSON.stringify(b),successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{successfn:function(b){a.callback({pagecount:-1})}}}},typeflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"comic/category.html",method:"GET",
timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){a.callback({title:"热门",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"热门"});a.callback({tid:"23",title:"独家",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"独家"});a.callback({tid:"25",title:"少女心",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"少女心"});
a.callback({tid:"26",title:"耽美魂",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"耽美魂"});a.callback({tid:"28",title:"爆笑日常",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"爆笑日常"});a.callback({tid:"29",title:"古风美",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"古风美"});a.callback({tid:"30",title:"暖萌萌",
img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"暖萌萌"});a.callback({tid:"31",title:"剧情追番",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"剧情追番"});a.callback({tid:"24",title:"完结",img:pluginfo(a.plugin).icon,group:{name:"daohang",title:"导航"},content:"完结"});return{query:!0,selector:".classification_tag li",str:a.result,successfn:function(b){if(array_count(b)){var c=
$$(b);b=getstr(/category-(\d+)\.html/,c.find("a").attr("href"));var d=c.find("h4").text(),c=c.find("img").attr("src");a.callback({tid:"",listflag:b,title:d,img:c,group:{name:"fenlei",title:"分类"},content:d})}}}}},listflag:{loader:function(a){return a.flag&&1==(a.page||1)?{url:pluginfo(a.plugin).apihost+"comic/category-"+a.flag+".html",method:"GET",timeout:120,successfn:function(b,c){a.callback({multpage:!0,result:b,header:c})}}:{url:pluginfo(a.plugin).apihost+(a.tid?"site/get-category-info.html":
"category/list-ajax.html"),method:"POST",data:a.tid?"categoryId="+a.tid:"id="+a.flag+"&page="+(a.page||1),postform:!0,timeout:120,successfn:function(b,c){a.callback({multpage:!0,result:b,header:c})}}},finder:function(a){if(a.flag&&1==(a.page||1))return{query:!0,selector:".classification_list li",str:a.result,successfn:function(b){b=$$(b);array_count(b)?a.callback({pid:getstr(/\/comic-(\d+)\.html/,b.find("a").attr("href")),title:b.find("h3").text(),img:b.find("img").attr("src"),stitle:b.find(".author").text(),
content:b.find(".story_plot").text(),comment:1}):a.callback()}};var b=JSON.parse(a.result||"{}").categoryInfo||[];if(array_count(b)){var c=[];b.forEach(function(a){a.categoryInfo.forEach(function(a){c.push(a)})})}else c=JSON.parse(a.result||"{}").data;return{json:!0,str:JSON.stringify(c),successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}},countloader:!1,countfinder:function(a){return{successfn:function(b){a.callback({pagecount:a.tid?-1:0})}}}},searchflag:{loader:!1,
finder:!1,countloader:!1,countfinder:!1},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"works/comic-list-ajax.html",method:"POST",data:"id="+a.pid+"&sort=0&page=1",postform:!0,timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{json:!0,str:a.result,successfn:function(b,c,d,f){b=b.data;myContent.itemarr=b;var e=function(b){$$.ajax({url:pluginfo(a.plugin).apihost+"works/comic-list-ajax.html ",method:"POST",data:"id="+a.pid+"&sort=0&page="+
b,async:!1,success:function(a){a=JSON.parse(a);a.code&&(a=a.data,myContent.itemarr=myContent.itemarr.concat(a),b++,e(b))}})};if(array_count(b)){if(a.checkupdate)return c=b[0],a.callback({pid:a.pid,cid:c.id,title:c.title}),!0;e(2);b=myContent.itemarr;f=[];b.forEach(function(c,d){f[d]=a.callback({id:b.length-1-d,newest:a.newest&&0==d,pid:a.pid,cid:c.id,title:c.title,count:b.length,reverse:1})});return f}a.callback()}}},infoloader:function(a){return{url:pluginfo(a.plugin).apihost+"comic-"+a.pid+".html",
method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},infofinder:function(a){return{query:!0,selector:".cartoon_introduce",str:a.result,successfn:function(b,c,d,f){b=$$(b);c=b.find(".pic img").attr("src");d=getstr(/^(.*?)</,b.find(".title").html());f=b.find(".author a").text();var e=b.find(".type").text().replace("类型：","").split(",");b=b.find(".introduce p").text();a.callback({name:d,img:c,added:a.data,description:"<p>"+(f?"【作者】"+f+
"<br>":"")+(e?"【类型】"+e.join(",")+"<br>":"")+(b?"【简介】"+b:"")+"</p>",comment:1,preview:0,tags:gettag(d)+gettag(f)+gettag(e||""),sourceurl:pluginfo(a.plugin).apihost+"comic-"+a.pid+".html"});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"comic/detail-"+a.cid+".html",method:"GET",timeout:120,successfn:function(b,c){a.callback({result:b,header:c})}}},finder:function(a){return{query:!0,selector:".cartoon img",str:a.result,successfn:function(b,
c,d,f){if(array_count(b)){b=[];for(d=0;d<c.length;d++)b.push($$(c[d]).attr("data-original").replace("https://","http://"));a.download?a.callback({source:b,download:a.download,plugin:a.plugin}):a.callback({source:b,type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})}else a.callback();return!0}}}},commentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"comic-"+a.pid+".html",method:"GET",timeout:120,successfn:function(b,c){b?a.callback({result:b,
header:c,commentbrowser:{url:pluginfo(a.plugin).apihost+"comic-"+a.pid+".html",title:"评论 - "+pluginfo(a.plugin).name+'<br><span style="font-size:16px">'+(myContent.name||"")+"</span>",browser:!1,flag:""}}):a.callback()}}},finder:function(a){return{query:!0,selector:".cartoon_comment",str:a.result,successfn:function(b,c,d,f){b=$$(b).find("li");c=[];for(d=0;d<b.length;d++)c.push({user:b.eq(d).find("strong").text(),img:b.eq(d).find("img").attr("src"),time:b.eq(d).find("b").text(),content:b.eq(d).find(".text").text()});
if(array_count(c))for(var e in c)a.callback({page:a.page||1,pagecount:-1,comment:{text:c[e].content,name:c[e].user,avatar:c[e].img,type:"received",label:c[e].time,day:"",time:"",reverse:1,extra:""}})}}},send:!1},previewflag:{loader:!1,finder:!1},pageimgflag:{parser:!1},updateflag:{loader:function(a){return 1<a.page?(a.multupdate(),!1):{url:pluginfo(a.plugin).apihost+"site/get-category-info.html",method:"POST",data:"categoryId=22",postform:!0,timeout:120,successfn:function(b,c){a.callback({result:b,
header:c})}}},finder:function(a){var b=[];(JSON.parse(a.result||"{}").categoryInfo||[]).forEach(function(a){a.categoryInfo.forEach(function(a){b.push(a)})});return{json:!0,str:JSON.stringify(b),successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}}},hotflag:{loader:function(a){return 1<a.page?(a.multhot(),!1):{url:pluginfo(a.plugin).apihost+"site/get-category-info.html",method:"POST",data:"categoryId=31",postform:!0,timeout:120,successfn:function(b,c){a.callback({result:b,
header:c})}}},finder:function(a){var b=[];(JSON.parse(a.result||"{}").categoryInfo||[]).forEach(function(a){a.categoryInfo.forEach(function(a){b.push(a)})});return{json:!0,str:JSON.stringify(b),successfn:function(b){array_count(b)?plugfns(a.plugin).pagedeal(b,a):a.callback()}}}}},fns:{pagedeal:function(a,b){b=b||{};console.log(a);var c=a.work_id||a.id,d=a.image_url||a.cover_image_url,f=a.title,e=(a.author||{}).nickname||a.add_user+(a.create_time?" "+getLocalTime(1E3*a.create_time):""),g=a.description;
if(b.multupdate||b.multhot||b.multsearch)return b.callback(obj_contact(b,{pid:c,img:d,title:f,content:e})),!1;b.callback({pid:c,title:f,img:d,stitle:e,content:g,comment:1})}}});
