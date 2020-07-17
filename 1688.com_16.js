define("lofty/alicn/suggestion/3.0/input",["jquery","lofty/alicn/suggestion/3.0/history","lofty/util/template/2.0/template","lofty/lang/class","lofty/lang/base","util/cookie/1.0","lofty/util/json/1.0/json","lofty/ui/tabs/2.0/tabs"],function(t,e,a,i,r,l,s,n){var g=!1;e.loaded?g=!0:(e.on("ready",function(){g=!0}),e.init(),e.enableHtmlEscape(!0));var o=["{{if left.length}}",'<div data-spm="suggestion" class="suggest_input_ctn fd-clr {{if (currentMod == "")}}suggest_input_ctn_no_mohe{{/if}}">','<div class="suggest_content_left fd-left">','<ul class="suggest_left_list">',"{{each left as item }}",'{{if (item.type=="brandSeller")}}',"{{if (item.useLogoUrl)}}",'<li class="suggest_left_list_item fd-clr brand_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="1" {{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','<a href="{{item.logo_url}}">','<span class="fd-left">','<img src="https://img.alicdn.com/tfs/TB1UrUbeeL2gK0jSZPhXXahvXXa-128-32.png" class="power_seller_icon fd-left" style="width:64px;"/>','<span class="power_seller_name">{{item.name}}</span>',"</span>","</a>","</li>","{{else}}",'<li class="suggest_left_list_item fd-clr brand_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','	<span class="fd-left">','<img src="https://img.alicdn.com/tfs/TB1UrUbeeL2gK0jSZPhXXahvXXa-128-32.png" class="power_seller_icon fd-left" style="width:64px;"/>','<span class="power_seller_name">{{item.name}}</span>',"</span>",'<span class="move_arrow">&gt;</span>',"</li>","{{/if}}",'{{else if (item.type=="powerfulSeller")}}','<li class="suggest_left_list_item fd-clr power_seller_list_item {{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}} data-action-param="{{item.leftExtendParams}}" data-value="{{item.val}}">','<span class="fd-left">','<img src="https://cbu01.alicdn.com/cms/upload/2017/401/741/4147104_532208266.png" class="power_seller_icon fd-left"/>','<span class="power_seller_name">{{#item.q}}{{item.name}}</span>',"</span>",'<span class="move_arrow">&gt;</span>',"</li>",'{{else if (item.type=="category")}}','<li class="suggest_left_list_item" data-action-param="{{item.extendParams}}" data-value="{{item.val}}">','<span class="cate_key">{{#item.q}}</span>','<span class="cate_name">\u5728{{item.cateName}}\u5206\u7c7b\u4e0b\u641c\u7d22</span>',"</li>",'{{else if (item.type=="topic")}}','<li data-action-url="{{item.topicSearchUrl}}" data-action-param="{{item.topicSearchParams}}" data-value="{{item.val}}" class="suggest_left_list_item{{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}}>','<span class="topic_key">{{#item.q}}</span>','<span class="topic_name">\u901b{{item.topicName}}</span>','<span class="static_arrow">&gt;&gt;</span>',"</li>",'{{else if (item.type=="history")}}','<li class="suggest_left_list_item history_list_item fd-clr" data-value="{{item.htmlKey}}" data-action-param="{{item.extendParams}}">','<span class="history_item fd-left">{{item.htmlKey}}</span>','<span class="history_item_remove fd-right" data-key="{{item.htmlKey}}">\u5220\u9664</span>',"</li>",'{{else if (item.type=="normal")}}','<li data-value="{{item.val}}" data-action-param="{{item.leftExtendParams}}" class="suggest_left_list_item fd-clr{{if (item.hasRight=="1")}} item_has_right" data-relation="{{item.relation}}"{{else}}"{{/if}}>','<span class="normal_item fd-left">{{#item.q}}</span>','<span class="move_arrow">&gt;</span>',"</li>",'{{else if (item.type=="bottom")}}','<li data-value="{{item.textDes}}" data-type="link" data-action-url="{{item.linkHref}}" data-action-param="{{item.extendParams}}" data-trace="{{item.trace}}" class="suggest_left_list_item">','<img src="{{item.linkImg}}" />',"</li>","{{/if}}","{{/each}}","</ul>","</div>",'<div class="suggest_content_right fd-left">',"{{if (right.length)}}",'<div class="suggest_right_ctn">',"{{each right as rightItem}}",'{{if (rightItem.type=="powerfulSeller" || rightItem.type=="brandSeller")}}',"{{if (rightItem.rightData.length > 5)}}",'<div class="suggest_right_item suggest_right_power_seller power_seller_tab {{rightItem.type}} relation_{{rightItem.relation}}">','<div class="tab_content">',"<ul>",'<li class="current">',"{{each rightItem.rightData as seller idx}}","{{if (idx % 5 == 0 && idx > 0)}}","</li>","<li>","{{/if}}",'<a class="seller_ctn" href="{{seller.url}}" data-action-param="{{rightItem.rightExtendParams}}">','<span class="company_name">{{seller.name}}</span>','<span class="company_type">{{seller.hint}}</span>',"</a>","{{/each}}","</li>","</ul>","</div>",'<div class="tab_action fd-clr">','<a href="#" class="next fd-right"><span>&#xe602;</span></a>','<a href="#" class="prev fd-right"><span>&#xe601;</span></a>',"</div>","</div>","{{else}}",'<div class="suggest_right_item suggest_right_power_seller relation_{{rightItem.relation}}">',"{{each rightItem.rightData as seller idx}}",'<a class="seller_ctn" href="{{seller.url}}" data-action-param="{{rightItem.rightExtendParams}}">','<span class="company_name">{{seller.name}}</span>','<span class="company_type">{{seller.hint}}</span>',"</a>","{{/each}}","</div>","{{/if}}",'{{else if (rightItem.type=="topic")}}','<div class="suggest_right_item suggest_right_topic relation_{{rightItem.relation}}" data-action-url="{{rightItem.topicMarketUrl}}" data-action-param="{{rightItem.topicMarketParams}}">','<img src="{{rightItem.topicPicUrl}}"></img>','<div style="position:absolute;height:75px;width:100%;bottom:20px;left:0;">','<div style="width:192px;height:65px;background-color:#000;background-color: rgba(0, 0, 0, 0.4);filter: alpha(opacity=40);margin:0 auto;padding-top:10px;">','<span style="display:block;height:40px;line-height:40px;color:#eee;font-size:20px;">{{rightItem.topicName}}</span>','<span style="display:block;height:1px;width:30px;margin:0 auto;background-color:#999;"></span>',"</div>","</div>","</div>",'{{else if (rightItem.type=="normal")}}','<div class="suggest_right_item suggest_right_normal relation_{{rightItem.relation}}">','<div class="suggest_right_title relation_{{rightItem.relation}}">{{#rightItem.q}}</div>',"{{each rightItem.rightData as group index}}","{{if (index>0)}}",'<hr class="right_group_split"/>',"{{/if}}",'<div class="suggest_right_normal_group fd-clr group{{index}}">',"{{each group.data as tag}}",'<span class="suggest_right_normal_tag fd-left {{if (tag.hot)}} hotTag {{/if}}" data-value="{{tag.val}}" data-action-param="{{rightItem.rightExtendParams}}">{{tag.q}}</span>',"{{/each}}","</div>","{{/each}}","</div>","{{/if}}","{{/each}}","</div>","{{/if}}","</div>","</div>","{{/if}}"].join(""),c="",h="",u=function(t,e,i){var r=this;r.tplRender||(r.tplRender=a.compile(o));var l=r.tplRender(t);e.trigger("htmlReady",{token:i,html:l})},m=function(t){var e=1,a=this.get("listCount"),i=0,r={currentMod:t.currentMod,left:[],right:[]};if(t.brandSeller)for(var l=0;l<t.brandSeller.length&&!(r.left.length>=a);l++){var n=t.brandSeller[l],g={type:"brandSeller"};if(g.q=n.q,g.val=n.val,g.leftExtendParams=n.leftExtendParams,g.name=n.name,g.logo_url=n.logo_url,g.useLogoUrl=n.useLogoUrl,n.rightData&&n.rightData.length){g.hasRight="1",e++,g.relation=e;var o={type:"brandSeller",relation:e};o.rightExtendParams=n.rightExtendParams,o.rightData=n.rightData,r.right.push(o)}r.left.push(g)}if(t.powerfulSeller)for(var l=0;l<t.powerfulSeller.length&&!(r.left.length>=a);l++){var n=t.powerfulSeller[l],g={type:"powerfulSeller"};if(g.q=n.q,g.val=n.val,g.leftExtendParams=n.leftExtendParams,g.name=n.name,g.logo_url=n.logo_url,n.rightData&&n.rightData.length){g.hasRight="1",e++,g.relation=e;var o={type:"powerfulSeller",relation:e};o.rightExtendParams=n.rightExtendParams,o.rightData=n.rightData,r.right.push(o)}r.left.push(g)}if(t.topic)for(var l=0;l<t.topic.length&&!(r.left.length>=a);l++){var n=t.topic[l];e++;var g={type:"topic",hasRight:"1",relation:e},o={type:"topic",relation:e};g.q=n.q,g.val=n.val,g.topicName=n.topicName,g.topicSearchParams=n.topicSearchParams,g.topicSearchUrl=n.topicSearchUrl,r.left.push(g),o.topicName=n.topicName,o.topicMarketParams=n.topicMarketParams,o.topicMarketUrl=n.topicMarketUrl,o.topicPicUrl=n.topicPicUrl,console.log("DEBUG2",o),r.right.push(o)}if(t.category)for(var l=0;l<t.category.length&&!(r.left.length>=a-i);l++){var n=t.category[l];n.type="category",r.left.push(n)}if(t.history)for(var l=0;l<t.history.length&&!(r.left.length>=a-i);l++){var n=t.history[l];n.type="history",n.extendParams=s.stringify({sug:"1_0"}),r.left.push(n)}if(t.normal)for(var l=0;l<t.normal.length&&!(r.left.length>=a-i);l++){var n=t.normal[l],g={type:"normal"};if(g.q=n.q,g.val=n.val,g.leftExtendParams=n.leftExtendParams,n.rightData&&n.rightData.length){g.hasRight="1",e++,g.relation=e;var o={type:"normal",relation:e};o.q=n.q,o.rightExtendParams=n.rightExtendParams,o.rightData=n.rightData,r.right.push(o)}r.left.push(g)}if(this.get("bottomBanner")){var c=this.get("bottomBanner");c.type="bottom",c.extendParams=s.stringify({sug:"0_0"}),r.left.push(c)}return r},p=function(a,i,r){var n=this;y.call(this),n.currentMod=n.get("mod"),"mohe"==n.currentMod&&a.getWidth()<450&&(n.currentMod=""),n.ajax&&n.ajax.abort();var o="";l.get("__cn_logon_id__")&&(o+="memberId="+decodeURIComponent(l.get("__cn_logon_id__",{raw:!0}))+"&"),l.get("ali_beacon_id")&&(o+="cookieId="+l.get("ali_beacon_id")+"&"),c&&(o+=c+"&"),"gbk"!==h.toLowerCase()&&"utf-8"!==h.toLowerCase()&&(h="gbk"),n.ajax=t.ajax({url:"//suggest.1688.com/bin/suggest",data:o+"type="+n.get("type")+"&industryFlag="+n.get("industryFlag")+"&q="+r.replace(/%/g,"%25").replace(/&/g,"%26")+"&ver=2&encode="+h,dataType:"script",contentType:"text/plain; charset="+h,scriptCharset:h,success:function(){var l=window._suggest_result_,o="sale_search_suggest_show",c={};if(l.result)for(var h=l.result.length,p=0;h>p;p++){var f,d=l.result[p];if("brand_seller"==d.type){c.brandSeller||(c.brandSeller=[]);var _=d.q.replace(/[_%]/g,"");if(f={q:d.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:_},d.left){var v;if(d.left.param&&(v=d.left.param),d.left.click)if(v)for(var y in d.left.click)v[y]=d.left.click[y];else v=d.left.click;v&&(f.leftExtendParams=s.stringify(v)),d.left.name&&(f.name=d.left.name),d.left.logo_url&&(f.logo_url=d.left.logo_url)}d.right&&(d.right.click&&(f.rightExtendParams=s.stringify(d.right.click)),d.right.shops&&(f.rightData=d.right.shops)),d.right&&d.right.shops||(f.useLogoUrl=!0),o+="_"+f.val,c.brandSeller.push(f)}else if("powerful_seller"==d.type){c.powerfulSeller||(c.powerfulSeller=[]);var _=d.q.replace(/[_%]/g,"");if(f={q:d.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:_},d.left){var v;if(d.left.param&&(v=d.left.param),d.left.click)if(v)for(var y in d.left.click)v[y]=d.left.click[y];else v=d.left.click;v&&(f.leftExtendParams=s.stringify(v)),d.left.name&&(f.name=d.left.name),d.left.logo_url&&(f.logo_url=d.left.logo_url)}d.right&&(d.right.click&&(f.rightExtendParams=s.stringify(d.right.click)),d.right.shops&&(f.rightData=d.right.shops)),o+="_"+f.val,c.powerfulSeller.push(f)}else if("category"==d.type)c.category||(c.category=[]),f={q:d.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:d.q.replace(/[_%]/g,"")},d.left&&(d.left.name&&(f.cateName=d.left.name),d.left.id&&(f.cateId=d.left.id),d.left.click&&(d.left.click.categoryId=d.left.id,f.extendParams=s.stringify(d.left.click))),o+="_"+f.val+"_cate_"+f.cateId,c.category.push(f);else if("topic"==d.type){if(c.topic||(c.topic=[]),f={q:d.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:d.q.replace(/[_%]/g,"")},d.left){d.left.name&&(f.topicName=d.left.name),d.left.id&&(f.topicId=d.left.id),d.left.url&&d.left.url.head&&(f.topicSearchUrl=d.left.url.head);var x;if(d.left.url&&d.left.url.param&&(x=d.left.url.param),d.left.click)if(x)for(var y in d.left.click)x[y]=d.left.click[y];else x=d.left.click;x&&(f.topicSearchParams=s.stringify(x))}d.right&&(d.right.pic_url&&(f.topicPicUrl=d.right.pic_url),d.right.land_url&&(f.topicMarketUrl=d.right.land_url),d.right.click&&(f.topicMarketParams=s.stringify(d.right.click))),o+="_"+f.val+"_topic_"+f.topicId,console.log("DEBUG:",f),c.topic.push(f)}else if("normal"==d.type){c.normal||(c.normal=[]);var _=d.q.replace(/[_%]/g,"");if(f={q:d.q.replace(/_/g,"<em>").replace(/%/g,"</em>"),val:_},d.left&&d.left.click&&(f.leftExtendParams=s.stringify(d.left.click)),d.right&&"tag"==d.right.type&&(d.right.click&&(f.rightExtendParams=s.stringify(d.right.click)),d.right.data)){f.rightData=[];for(var k=0,I=d.right.data.length;I>k;k++){var S=d.right.data[k],P=S.data;S.data=[];for(var C=0;C<P.length;C++){var T={q:P[C],val:_+" "+P[C]};C===S.hot&&(T.hot=!0),S.data.push(T)}f.rightData.push(S)}}o+="_"+f.val,c.normal.push(f)}}g&&(c.history=e.query(r,2)),"history"in c&&t.each(c.history,function(t,e){o+="_"+e.key+"history",e.val=e.value}),"undefined"!=typeof window.dmtrack?dmtrack.clickstat("//stat.1688.com/sectionexp.html","?sectionexp="+o):(new Image).src="//stat.1688.com/sectionexp.html?sectionexp="+o+"&time="+ +new Date,c.currentMod=n.currentMod;var L="se_keyword="+r.replace(/%/g,"%25").replace(/&/g,"%26")+"&area=left";for(var D in c)L=L+"&"+w(D,c[D]);b("EXP",L);var R=m.call(n,c);if(u.call(n,R,a,i),window.data&&window.data.promotionSuggestionData&&window.data.promotionSuggestionData.suggestionLink&&window.data.promotionSuggestionData.suggestionLink.linkImgUrl){var q=t(".suggest_left_list");q.append(function(){return"<li><a target='_blank' href="+window.data.promotionSuggestionData.suggestionLink.linkUrl+"><img src="+window.data.promotionSuggestionData.suggestionLink.linkImgUrl+"></a></li>"})}a.resetHeight()}})},f=function(e){var a=e.get("el"),i=this;if(i.$currentLi){if(i.$lastCurrentLi&&i.$lastCurrentLi.removeClass("list_item_hover"),i.$currentLi.addClass("list_item_hover"),i.$currentLi.hasClass("item_has_right")&&""!=i.currentMod){a.find(".suggest_input_ctn").addClass("ctn_has_right"),a.find(".suggest_right_item").hide();var r=t(".relation_"+i.$currentLi.data("relation"));r.show(),r.css("top","0px");var l=e.resetHeight(),s=r.outerHeight();if(r.hasClass("suggest_right_topic"))l>s&&r.css("top",parseInt((l-s)/2,10)+"px");else{var g=i.$currentLi.offset().top-a.offset().top,o=g-(s-26)/2;if(o>16){var c=l-20-s;o>c&&(o=c),o>16&&r.css("top",o-16+"px")}}r.hasClass("power_seller_tab")&&!r.data("hasInit")&&(r.data("hasInit",!0),i.powerSellerTabs.push(new n({tpl:r,boxSelector:".tab_content ul li",isLoop:!1,prev:".prev",next:".next",currentCls:"current"})))}else a.find(".suggest_input_ctn").removeClass("ctn_has_right"),e.resetHeight();y.call(i),i.$lastCurrentLi=i.$currentLi,i.$currentLi=null}},d=function(t){return t},_=function(a){var i,r=a.get("el"),l=this,s=!1,n=-1;r.on("mouseenter",".suggest_input_ctn .suggest_left_list .suggest_left_list_item",function(e){if(l.$currentLi=t(e.currentTarget),!s){var i=t(a.get("target")).val(),r=k(l.$currentLi),n="";try{var g=l.$currentLi.attr("data-relation"),o=document.getElementsByClassName("suggest_right_item suggest_right_normal relation_"+g)[0],c=Array.prototype.slice.call(o.querySelectorAll(".suggest_right_normal_tag")).map(function(t){return t.innerText});n=c.join(",")}catch(h){n=""}var u="se_keyword="+i+"&"+r+"="+(l.$currentLi&&l.$currentLi[0]?l.$currentLi[0].innerText.replace(/[\r\n]/g,""):"")+"&area=right&pandoraRightWords="+n;b("OTHER",u),f.call(l,a)}}),r.on("mouseleave",".suggest_input_ctn .suggest_left_list",function(t){i&&(clearTimeout(i),i=null)});var g;r.on("mousemove",".suggest_input_ctn .suggest_left_list",function(t){return""==l.currentMod?void(s=!1):void(g||(g=setTimeout(function(){g=null},10),i&&(clearTimeout(i),i=null),-1==n?n=t.pageX:(t.pageX>n?(s=!0,i=setTimeout(function(){i=null,s=!1,n=-1,f.call(l,a)},100)):s&&(s=!1,f.call(l,a)),n=t.pageX)))}),r.on("click",".suggest_content_left .suggest_left_list_item",function(e){var i=t(e.currentTarget),r=i.data(),s=t(a.get("target")).val();console.log("DEBUG3",r,r.actionParam),a.setTargetValue(i.data("value"));var n={actionParams:i.data("action-param"),trace:i.data("trace")};i.data("action-url")&&(n.actionUrl=i.data("action-url")),i.data("type")&&(n.type=i.data("type"));var g=k(i),o="se_keyword="+s+"&"+g+"="+i.data("value")+"&area=left";if(window&&window.goldlog)window.goldlog.record("/ctr.search.suggestion","CLK",o);else{var c=new Image;c.src="//gm.mmstat.com/ctr.search.suggestion?gmkey=CLK&gokey=_g_encode=utf-8"+o}a.trigger("submit",d.call(l,n)),a.hide()}),r.on("click",".suggest_content_left .history_item_remove",function(i){i.stopPropagation();var r=t(i.target),l=r.data("key")+"";e.remove(l),r.parent().remove(),a.resetHeight()}),r.on("click",".suggest_right_ctn .suggest_right_normal_tag",function(e){var i=t(e.target),r=t(a.get("target")).val(),s="se_keyword="+r+"&normal="+i.data("value")+"&area=right&pandora=1";b("CLK",s),a.setTargetValue(i.data("value")),a.trigger("submit",d.call(l,{actionParams:i.data("action-param")})),a.hide()}),r.on("click",".suggest_right_ctn .powerfulSeller .seller_ctn",function(e){e.preventDefault();var i=t(e.currentTarget),r=t(a.get("target")).val(),l="se_keyword="+r+"&powerfulSeller="+(i&&i[0]?i[0].innerText.replace(/[\r\n]/g,""):"")+"&area=right";b("CLK",l),a.trigger("submit",{type:"link",actionUrl:i.attr("href"),actionParams:i.data("action-param")}),a.hide()}),r.on("click",".suggest_right_ctn .brandSeller .seller_ctn",function(e){e.preventDefault();var i=t(e.currentTarget),r=t(a.get("target")).val(),l="se_keyword="+r+"&brand="+(i&&i[0]?i[0].innerText.replace(/[\r\n]/g,""):"")+"&area=right";b("CLK",l),a.trigger("submit",{type:"link",actionUrl:i.attr("href"),actionParams:i.data("action-param")}),a.hide()}),r.on("mouseenter",".suggest_right_ctn .suggest_right_normal_tag",function(e){t(e.target).addClass("suggest_right_tag_hover")}),r.on("mouseleave",".suggest_right_ctn .suggest_right_normal_tag",function(e){t(e.target).removeClass("suggest_right_tag_hover")}),r.on("click",".suggest_right_ctn .suggest_right_topic",function(e){var i=t(e.currentTarget);a.setTargetValue(""),a.trigger("submit",{type:"link",actionUrl:i.data("action-url"),actionParams:i.data("action-param")}),a.hide()})},v=function(e,a){var i=e.get("el").find(".suggest_content_left .suggest_left_list_item");if(i.length){var r=-1,l=this;l.$lastCurrentLi&&l.$lastCurrentLi.length&&(r=i.index(l.$lastCurrentLi[0])),r+=a,0>r?r=i.length-1:r>=i.length&&(r=0),l.$currentLi=t(i[r]),e.setTargetValue(l.$currentLi.data("value")),this.enterSubmitObj={};var s=l.$currentLi.data("action-url");s&&(this.enterSubmitObj.actionUrl=s);var n=l.$currentLi.data("type");n&&(this.enterSubmitObj.type=n),this.enterSubmitObj.actionParams=l.$currentLi.data("action-param"),d.call(this,this.enterSubmitObj),f.call(this,e)}},y=function(){this.curRightTagIndex>-1&&t(this.$allCurrentRightItems[this.curRightTagIndex]).removeClass("suggest_right_tag_hover"),this.rightItemKeyOver=!1,this.$allCurrentRightItems=null,this.curRightTagIndex=-1},x=function(e){this.curRightTagIndex>-1&&t(this.$allCurrentRightItems[this.curRightTagIndex]).removeClass("suggest_right_tag_hover"),this.curRightTagIndex+=e;var a=this.maxVisibleTagCount;this.maxVisibleTagCount>this.$allCurrentRightItems.length&&(a=this.$allCurrentRightItems.length),this.curRightTagIndex>a-1?this.curRightTagIndex=0:this.curRightTagIndex<0&&(this.curRightTagIndex=a-1);var i=t(this.$allCurrentRightItems[this.curRightTagIndex]);i.addClass("suggest_right_tag_hover"),this.enterSubmitObj={};var r=i.data("action-url");r&&(this.enterSubmitObj.actionUrl=r),this.enterSubmitObj.actionParams=i.data("action-param"),d.call(this,this.enterSubmitObj),this.context.setTargetValue(i.data("value"))},b=function(t,e){var a="visitorId="+l.get("__cn_logon_id__")+"&",i="fromSuggest=1&",r="";try{r=window.data.pageConfigData.requestId}catch(s){r=""}var n=r?"requestId="+r+"&":"";if(window&&window.goldlog)window.goldlog.record("/ctr.search.suggestion",t,i+n+a+e);else{var g=new Image;g.src="//gm.mmstat.com/ctr.search.suggestion?gmkey="+t+"&gokey=_g_encode=utf-8"+i+n+a+e}},w=function(t,e){var a="";if("currentMod"===t)return t+"="+e;if(e&&e.length>0)for(var i=0;i<e.length;i++){const r=e[i];r.val&&(a=""===a?r.val:a+","+r.val)}return t+"="+a},k=function(t){var e="normal";return t.hasClass("brand_list_item")?e="brand":t.hasClass("power_seller_list_item")?e="powerfulSeller":t.hasClass("history_list_item")&&(e="history"),e};return i(r,{options:{mod:"mohe",type:"offer",industryFlag:"",bottomBanner:null,listCount:13},init:function(t){r.prototype.init.call(this,t||{}),this.tplRender=null,this.$lastCurrentLi=null,this.$currentLi=null,this.enterSubmitObj=null,this.rightItemKeyOver=!1,this.$allCurrentRightItems=null,this.curRightTagIndex=-1,this.maxVisibleTagCount=null,this.powerSellerTabs=[],c=this.get("extraParams"),h=this.get("encoding")||"gbk"},setContext:function(t){this.context=t,_.call(this,t)},getSubmitInfo:function(){return this.enterSubmitObj},onTargetMouseDown:function(t,e){this.context._hasShow||(this.enterSubmitObj=null,p.call(this,this.context,t,e))},onTargetInput:function(t,e){this.enterSubmitObj=null,p.call(this,this.context,t,e)},onTargetKeyUp:function(t,e,a){this.context._hasShow&&(a.preventDefault(),v.call(this,this.context,-1))},onTargetKeyDown:function(t,e,a){this.context._hasShow&&(a.preventDefault(),v.call(this,this.context,1))},onTargetKeyEnter:function(t,e,a){a.preventDefault(),y.call(this),this.enterSubmitObj?this.context.trigger("submit",d.call(this,this.enterSubmitObj)):this.context.trigger("submit")},onTargetKeyLeft:function(t,e,a){this.rightItemKeyOver&&this.context._hasShow&&""!=this.currentMod&&(a.preventDefault(),x.call(this,-1))},onTargetKeyRight:function(t,e,a){if(""!=this.currentMod&&this.context._hasShow){var i=this;if(!this.rightItemKeyOver){if(!i.$lastCurrentLi)return;if(!i.$lastCurrentLi.hasClass("item_has_right"))return;var r=this.context.get("el").find(".suggest_content_right .relation_"+i.$lastCurrentLi.data("relation"));if(!r.hasClass("suggest_right_normal"))return;this.rightItemKeyOver=!0,this.maxVisibleTagCount=6*parseInt(r.width()/76,10),this.curRightTagIndex=-1,this.$allCurrentRightItems=r.find(".suggest_right_normal_tag")}a.preventDefault(),x.call(this,1)}},onShow:function(){if(this.powerSellerTabs.length){for(var t=0,e=this.powerSellerTabs.length;e>t;t++)this.powerSellerTabs[t].destroy();this.powerSellerTabs.length=0}}})});;