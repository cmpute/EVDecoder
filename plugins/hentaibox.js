ExView.Plugins({info:{name:"M\u7ec5\u58eb\u6f2b\u753b",version:"2.2",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAImSURBVDhPhZLRS1phGMaPqXVhpKSJXgh24YqRinqhJYplWGEcLwbRoiaCOfEmaIyxEUT0LyTdhdA/EFTYRQSWFbuQ3Xg1iILtYs2LxgbC1Hp6v+8cmi7XHngP3znneX/neb/vCPiHisWivHpaQjabhcPhQDAYfFSCILSU3+9HpVKRWyUJRnqhoNLr9f8FsFKpVHC5XPD5fBLglckEiGKLyW63PwB0Oh28Xi9v+Lvy+TyEl93duAsEuBnRKBpU72ktErRdU3OVy2UILyjSN7MZzzs6QEMCY2McFolE4Ha72zZqtVokenulEUQy346MAFYrMDiI3wMDHMBGmJ+bg68p/juC/6K0NfIrlUoJECbzMRUfoa+Pg9g6QMZ4PI7y0hKitGlndFJfhoZwNzmJz8PDUKvVEoCZv1K9YYD+flA+DmBfTCQSwOwsxsNhrFO6LYsFt9Rcm5nBFI3OAbs7O7zBywAKBUPye6fTidWFBSAUQo1OqkGbvd/TA8qOC9ovc1eXBGCXg7095Og/KFBU+iE4wGazIZlMgs4RUxMT+NnZiTo9nx8dhYmAmxsbfwBMR4eHMJPhg5zASnuRSqUeUoUoicfjwdvlZVxdXspdTQCmYqEAjUbDARaaN51Oo2Q0IhaLIUVpTk9O0KjXZbekFgDTx/NzPKP4BoMBmUwGrxcXsZ3LoVqtyo5WPQIwfSqVIE5PY21lBd+vr+Wn7dUWwPTj5kZePSXgHov4di0xuhFgAAAAAElFTkSuQmCC",
db:"hentaibox",apihost:"http://www.hentaibox.net/",pagetitle:["<br>","\u6536\u85cf","\u9996\u9875","\u7c7b\u578b","\u4e0b\u8f7d"],download:!0,lazyload:!0,setting:!0,settingextra:getui([{name:"typebox",title:"\u7c7b\u578b\u65b9\u5757\u754c\u9762",type:"checkbox"},{name:"nativeres",title:"\u4f7f\u7528\u672c\u5730\u8bf7\u6c42",type:"checkbox"}]),nativeres:!1,typebox:!1,theme:"bluegray",cdn:""},set:function(a){},unset:function(a){},init:function(){ExView.workers.fav.listloader({callback:function(){ExView.workers.index.loader();
ExView.workers.type.loader()}})},flags:{indexflag:{loader:function(a){a.front||a.page||setnowlistname("\u9996\u9875","",plugfns(a.plugin).typelistext.index.imgurl);return{url:pluginfo(a.plugin).apihost+"?re=&Series=&q=&num="+16*parseInt(a.page||1)+"&shownew=&pages=&color=&tag=&related=&art=",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){ExView.workers.index.countfinder(obj_contact(a,{result:b,header:c}));a.successfn&&a.successfn({result:b,header:c})},
errorfn:function(){a.page||setnowlistname("\u9996\u9875","",plugfns(a.plugin).typelistext.index.imgurl);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("\u7f51\u7edc\u9519\u8bef\uff01","ExView")},canclefn:function(){a.page||setnowlistname("\u9996\u9875","",plugfns(a.plugin).typelistext.index.imgurl)},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u9996\u9875",title:a.title,img:a.img}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,
str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',2)},errorfn:function(){a.page||setnowlistname("\u9996\u9875","",plugfns(a.plugin).typelistext.index.imgurl);ExView.fw.hidePreloader();mySession.isloading=0;ExView.fw.alert("\u7f51\u7edc\u9519\u8bef\uff01","ExView")}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(a){mySession.nowlistpages=
"0|\u9996\u9875|index";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},typeflag:{loader:function(a){return{successfn:function(){ExView.workers.type.finder()}}},finder:function(a){return{successfn:function(b){if(pluginfo(a.plugin).typebox){b='<table border="1" style="position:absolute;border-collapse:collapse;width:100%;height:100%;border:1px solid #000000"><tbody><tr>'+plugfns(a.plugin).gettypebox("",plugfns(a.plugin).typelistext.index.title,plugfns(a.plugin).typelistext.index.imgurl,
"")+plugfns(a.plugin).gettypebox("ntr",plugfns(a.plugin).typelistext.topfive.title,plugfns(a.plugin).typelistext.topfive.imgurl,"");var c=3,d;for(d in plugfns(a.plugin).typelist)b+=(1==c?"<tr>":"")+plugfns(a.plugin).gettypebox(d,plugfns(a.plugin).typelist[d].title,plugfns(a.plugin).typelist[d].imgurl,"")+(3==c?"</tr>":""),3==c?c=1:c++;addtypelist(b+"</tbody></table>",2);try{clearInterval(mySession.lazyload.typelistlazyloadser)}catch(e){}$$("#typelist").onscroll=""}else for(d in addtypelist("<ul></ul>",
2),addtypelist({listbg:!0,title:plugfns(a.plugin).typelistext.index.title,img:plugfns(a.plugin).typelistext.index.imgurl,content:plugfns(a.plugin).typelistext.index.title}),addtypelist({tid:"netorare",listbg:!0,title:plugfns(a.plugin).typelistext.topfive.title,img:plugfns(a.plugin).typelistext.topfive.imgurl,content:plugfns(a.plugin).typelistext.topfive.title}),plugfns(a.plugin).typelist)addtypelist({tid:d,listbg:!0,title:plugfns(a.plugin).typelist[d].title,img:plugfns(a.plugin).typelist[d].imgurl,
content:plugfns(a.plugin).typelist[d].title})}}}},listflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?re=&Series=&q="+a.keyword+"&num="+16*parseInt(a.page||1)+"&shownew=&pages=&color=&tag=&related=&art=",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){b?(ExView.workers.list.countfinder(obj_contact(a,{result:b,header:c})),a.successfn&&a.successfn({result:b,header:c})):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+
a.title+"\u3011<br>\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.title+"\u3011",title:a.title,img:a.img}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){b?plugfns(a.plugin).pagedeal(b):addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},
countfinder:function(a){return{successfn:function(b){mySession.nowlistpages="0|"+a.keyword+"|list";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},searchflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?re=&Series=&q="+a.keyword+"&num="+16*parseInt(a.page||1)+"&shownew=&pages=&color=&tag=&related=&art=",method:"GET",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){b?(a.multsearch||(ExView.workers.search.countfinder(obj_contact(a,
{result:b,header:c})),setnowlistname("\u641c\u7d22\u3010"+a.keyword+"\u3011")),a.successfn&&a.successfn({result:b,header:c})):a.multsearch?a.multsearch():(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u3010"+a.keyword+"\u3011<br>\u83b7\u53d6\u641c\u7d22\u7ed3\u679c\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u641c\u7d22..."+(1<a.page?"<br>\u7b2c"+a.page+"\u9875":""),name:"\u3010"+a.keyword+"\u3011",title:"\u641c\u7d22"}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,
str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b,c,d){console.log(b);b?plugfns(a.plugin).pagedeal(b,a):a.multsearch?a.multsearch():addcardlist('<div align="center" class="list-block"><img src="img/logo.png"/><br>\u6ca1\u6709\u5185\u5bb9</div>',1)}}},countloader:function(a){return!1},countfinder:function(a){return{successfn:function(b){mySession.nowlistpages="0|"+a.keyword+"|search";mySession.nowlistpage=1;console.log(mySession.nowlistpages);return!0}}}},contentflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+
"hentai-manga/"+a.pid+"&load=all",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):a.checkupdate||(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u5185\u5bb9\u9875\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u5185\u5bb9\u9875...",title:"\u5185\u5bb9\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){return{successfn:function(b){b=
a.pid;if(a.checkupdate)return{pid:b,cid:1,title:"\u51681\u8bdd"};for(var c=[],d=0;1>d;d++)c[d]=additemlist({id:d,newest:a.newest&&0==d,pid:b,cid:d+1,title:"\u5168"+(d+1)+"\u8bdd",count:1,reverse:0});console.log(c);return c},afterfn:function(){a.checkupdate||ExView.workers.content.infofinder(a)}}},infoloader:function(a){return!1},infofinder:function(a){console.log(a);return{reg:/<title>((?!<).*?)<\/title>/g,str:a.result,find:"$1",successfn:function(b,c,d,e){console.log(b);b=b.split("{{separator}}");
a.cid=1;a.str=a.result;a.name=b[0];c=gettags(a.result,/<a\s*href="(?!<).*?\/tags\/((?!<).*?)">/g,"$1");d=getstr(/<td\s*class="search_gallery_item"><a\s*href="(?!<).*?"><img\s*src="((?!<).*?)"\s*\/><br>Read\s*Online<\/a><\/td>/,a.result);d="//"==d.substr(0,2)?"http:"+d:d;d="/"==d.substr(0,1)?pluginfo(a.plugin).apihost.split("//")[0]+"//"+pluginfo(a.plugin).apihost.split("//")[1].split("/")[0]+"/"+d.substr(1):d;e=getstr(/"\s*class="pagination_number">\s*(\d+)\s*Images\s*<\/a>/,a.result);myContent.imgcount=
e||0;setlistpic({name:b[0],img:d,added:a.data,description:"<p>\u5171"+(e||0)+"\u5f20\u56fe\u7247</p>",comment:0,preview:1,tags:gettag(b[0])+c});return!0}}}},parseflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"hentai-manga/"+a.pid+"&load=all",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})},showinfo:{text:"\u6b63\u5728\u52a0\u8f7d\u56fe\u7247\u4fe1\u606f...",title:"\u56fe\u7247",name:getlistname(a.pid),
img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/<td\s*class="search_gallery_item"><a\s*href="((?!<).*?)"><img\s*src="((?!<).*?)"\s*\/><br>(\d+)<\/a><\/td>/g,str:a.result,find:"$1",successfn:function(b,c,d,e){array_count(e)?(b=[],b=e.map(function(b){return getpageload("/"==b.substring(0,1)?"http://"+pluginfo(a.plugin).apihost.replace("http://","").split("/")[0]+b:b,a.plugin)}),console.log(b),a.download?chapterpredownload({source:b,download:a.download,plugin:a.plugin}):chapterviewer({source:b,
type:"image",startindex:a.startindex||0,lazyload:pluginfo(a.plugin).lazyload,zoom:!0,title:a.title})):a.download?chapterpredownload({error:"\u89e3\u6790\u9519\u8bef\uff01",download:a.download,plugin:a.plugin}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u56fe\u7247\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"));return!0}}}},commentflag:{loader:!1,finder:!1},previewflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"hentai-manga/"+a.pid+"&load=all",method:"GET",
data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){b?a.successfn&&a.successfn({result:b,header:c}):(ExView.fw.hidePreloader(),mySession.isloading=0,ExView.fw.alert("\u9884\u89c8\u4fe1\u606f\u83b7\u53d6\u5931\u8d25\uff01","ExView"))},showinfo:{text:"\u6b63\u5728\u83b7\u53d6\u9884\u89c8\u4fe1\u606f...",title:"\u9884\u89c8\u9875",name:getlistname(a.pid),img:getlistimg(a.pid)}}},finder:function(a){console.log(a);return{reg:/<td\s*class="search_gallery_item"><a\s*href="((?!<).*?)"><img\s*src="((?!<).*?)"\s*\/><br>(\d+)<\/a><\/td>/g,
str:a.result,find:"$1{{separator}}$2",successfn:function(b,c,d,e){b=b.split("{{separator}}");c="//"==b[1].substr(0,2)?"http:"+b[1]:b[1];c="/"==c.substr(0,1)?pluginfo(a.plugin).apihost.split("//")[0]+"//"+pluginfo(a.plugin).apihost.split("//")[1].split("/")[0]+"/"+c.substr(1):c;b="/"==b[0].substr(0,1)?pluginfo(a.plugin).apihost.split("//")[0]+"//"+pluginfo(a.plugin).apihost.split("//")[1].split("/")[0]+"/"+b[0].substring(1):b[0];addpreviewlist({page:a.page||1,pagecount:myContent.items.length,preview:{imgurl:c,
pageurl:b}})}}}},pageimgflag:{parser:function(a){return{reg:/<img\s*src="((?!<).*?)"\s*\/><\/a><\/center>/g,str:a.result,find:"$1",successfn:function(b){a.loadimgurl(b)}}}},updateflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?re=&Series=&q=&num="+16*parseInt(a.page||1)+"&shownew=&pages=&color=&tag=&related=&art=",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,
str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}},hotflag:{loader:function(a){return{url:pluginfo(a.plugin).apihost+"?re=&Series=&q=color&num="+16*parseInt(a.page||1)+"&shownew=&pages=&color=&tag=&related=&art=",method:"GET",data:"",timeout:120,nativerequest:pluginfo(a.plugin).nativeres,successfn:function(b,c){a.successfn&&a.successfn({result:b,header:c})}}},finder:function(a){return{reg:plugfns(a.plugin).pagerule,
str:a.result,find:plugfns(a.plugin).pagefind,successfn:function(b){console.log(JSON.stringify(b));b&&plugfns(a.plugin).pagedeal(b,a)}}}}},fns:{gettypebox:function(a,b,c,d,e){return'<td style="overflow: hidden;width: 33%;"><div onclick="'+(a||e?e?e:"ExView.workers.list.loader({tid:'"+a+"',keyword:'"+a+"',img:'"+c+"',title:'"+b+"',flag:'"+d+"',turnpage:1})":"ExView.workers.index.loader({turnpage:1,front:1,img:'"+c+"',title:'"+b+"',flag:'"+d+"'})")+'" style="background-image:url('+c+');width:100%;height:100%;background-repeat:no-repeat;background-size:cover;text-align:center;background-size:100%100%;"></div><div style="font-size:16px;text-align:center;background-color: black;margin-top:-24px;opacity: 0.8;position: relative;color: white;">'+
b+"</div></td>"},typelistext:{index:{title:"\u9996\u9875",imgurl:getbaiduimg("d3304434970a304eeae53a66d7c8a786c8175c12")},topfive:{title:"NTR",imgurl:getbaiduimg("e65387c379310a5540bf2322b04543a983261036")}},typelist:{doujinshi:{title:"\u540c\u4eba",imgurl:getbaiduimg("1b309b19ebc4b745b51c4ac0c8fc1e17888215c5")},manga:{title:"\u6f2b\u753b",imgurl:getbaiduimg("61aa13c79f3df8dc6b797347ca11728b46102801")},loli:{title:"\u841d\u8389",imgurl:getbaiduimg("574621f790529822470fc615d0ca7bcb0b46d489")},game:{title:"\u6e38\u620fCG",
imgurl:getbaiduimg("9be791014a90f6038e4160913e12b31bb251eddd")},girl:{title:"\u5c11\u5973",imgurl:getbaiduimg("6a897ce736d12f2ec04351b648c2d56284356803")},"non-h":{title:"\u5168\u5e74\u9f84",imgurl:getbaiduimg("8137b022720e0cf3e088b12d0d46f21fbf09aa4a")},color:{title:"\u5168\u5f69",imgurl:getbaiduimg("3448fc2a2834349b48489153ceea15ce37d3be7b")},kantai:{title:"\u8230\u5a18",imgurl:getbaiduimg("20c8e3ef76094b36c7a8e53ba4cc7cd98c109d97")},TouHou:{title:"\u5e7b\u60f3\u4e61",imgurl:getbaiduimg("574621f790529822462bc715d0ca7bcb0b46d4b5")},
misc:{title:"\u6742\u9879",imgurl:getbaiduimg("574621f7905298224624c715d0ca7bcb0b46d4b2")}},pagerule:/<td\s*class="search_gallery_item"(?!<).*?>\s*\r*\n*\r*\s*<div\s*class="pagination"><a\s*href="(?!<).*?">((?!<).*?)<\/a><\/div>\s*\r*\n*\r*\s*<div\s*class="pagination">(\d+)\s*Pages\s*.*?>((?!<).*?)<\/b><\/div>(?:.|[\r\n])*?<a\s*href="(?!<).*?hentai-manga\/((?!<).*?)"><img\s*src="((?!<).*?)"\s*\/><img\s*src="(?!<).*?"(?:.|[\r\n])*?\/><div\s*class="pagination">((?!<).*?)<\/div><\/a><div\s*class="pagination">(.*?)<\/div><\/td>/g,
pagefind:"$1{{separator}}$2{{separator}}$3{{separator}}$4{{separator}}$5{{separator}}$6{{separator}}$7",pagecountrule:/<a\s*class="last"\s*href=".*?\/page\/(\d+)\/.*?">Last<\/a>/g,pagecountfind:"$1",pagedeal:function(a,b){b=b||{};"string"==typeof a&&(a=a.split("{{separator}}"));var c=a[3],d=a[5],e=a[4],g=a[1],f=a[0]+'<span style="position: absolute;float:right;right:10px;">'+a[2]+"</span>";if(b.multupdate)return b.multupdate(obj_contact(b,{pid:c,img:e,title:d,content:f})),!1;if(b.multhot)return b.multhot(obj_contact(b,
{pid:c,img:e,title:d,content:f})),!1;if(b.multsearch)return b.multsearch(obj_contact(b,{pid:c,img:e,title:d,content:f})),!1;addcardlist({pid:c,title:d,name:d+"\u3010"+g+"P\u3011",img:e,content:f,comment:0,preview:1,extrabutton:""})}}});
