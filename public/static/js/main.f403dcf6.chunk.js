(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);a(48),a(49);var s=a(0),n=a.n(s),c=a(43),r=a.n(c),o=a(6),l=a.n(o),i=a(8),u=a(1),h=a(2),d=a(4),m=a(3),p=a(5),b=a(14),g=(a(55),a(44)),f=a(12),v=a.n(f);v()(window).on("load",function(){v()("#navdrop").click(function(){v()("#closewrap").fadeIn(200),v()("#fullnav").fadeIn(200)}),v()("#closewrap").hover(function(){v()("#closebtn").css("border-color","hsl(0, 0%, 60%)")},function(){v()("#closebtn").css("border-color","hsl(0, 0%, 70%)")}),v()("#closewrap").click(function(){v()("#fullnav").fadeOut(200),v()(this).fadeOut(200)})});var E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"closewrap"},n.a.createElement("button",{id:"closebtn"}),n.a.createElement("img",{src:"grayx.png",id:"close"})),n.a.createElement("div",{id:"fullnav"},n.a.createElement("div",{className:"outer"},n.a.createElement("div",{className:"inner"},n.a.createElement("div",{id:"fullnavcont",className:"d-inline-block"},this.props.acc.student?n.a.createElement("div",null,n.a.createElement("a",{className:"fullnavlink",href:"/profile"},"Profile")):null,this.props.acc.club?n.a.createElement("div",null,n.a.createElement("a",{className:"fullnavlink",href:"/dashboard"},"Dashboard")):null,n.a.createElement("a",{className:"fullnavlink",href:"/clubs"}," Browse Clubs"),this.props.acc.club||this.props.acc.student?n.a.createElement("div",null,n.a.createElement("a",{className:"fullnavlink",href:"/accounts/logout"},"Log Out")):n.a.createElement("div",null,n.a.createElement("a",{className:"fullnavlink",href:"/accounts/login"},"Log In")))))),n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"navcont navleft"},n.a.createElement("div",{className:"position-relative d-inline-block"},n.a.createElement("a",{className:"mainlogonav",href:"/"}," clubsource"),n.a.createElement("div",{className:"triangledown",id:"navdrop"}))),n.a.createElement("div",{className:"navcont navright"},this.props.acc.student?n.a.createElement("a",{className:"navlink",href:"/profile"},"Profile"):null,this.props.acc.club?n.a.createElement("a",{className:"navlink",href:"/dashboard"},"Dashboard"):null,n.a.createElement("a",{className:"navlink",href:"/clubs"}," Browse Clubs"),this.props.acc.club||this.props.acc.student?n.a.createElement("a",{className:"navlink",href:"/accounts/logout"},"Log Out"):n.a.createElement("a",{className:"navlink",href:"/accounts/login"},"Log In"))))}}]),t}(s.Component),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"title"},"Page not found"))}}]),t}(s.Component);function w(e){if(!e.ok)throw new Error(e.statustext);return e.json()}a(96);var O={"":"Subscribe",subbed:"Unsubscribe",loading:"Loading..."},j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).subscribe=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=""===a.state.subbed,a.setState({subbed:"loading"}),fetch(a.state.url+"/searchData/subscribe",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({club:a.props._id,adding:t})}).then(w).then(function(e){t?a.setState({subbed:"subbed"}):a.setState({subbed:""})}).catch(function(e){return console.error(e)});case 3:case"end":return e.stop()}},e)})),a.state={subbed:a.props.subbed,url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.subbed!==this.props.subbed&&this.setState({subbed:e.subbed})}},{key:"render",value:function(){return n.a.createElement("div",{className:"clubwrapper"},n.a.createElement("div",{className:"info"},n.a.createElement("h2",{className:"clubtitle"},this.props.name),n.a.createElement("p",{className:"username"},this.props.username),n.a.createElement("div",{className:"text-center",style:{marginBottom:"10px"}},this.props.showsub?n.a.createElement("button",{className:"clubbutton subscribe "+this.state.subbed,id:"subscribe",onClick:this.subscribe,disabled:"loading"===this.state.subbed},O[this.state.subbed]):null,this.props.showedit?n.a.createElement("a",{className:"clubbutton edit",href:"/myclub/dashboard/edit"},"Edit"):null),n.a.createElement("div",{className:"middle"},n.a.createElement("p",null,"Tags: ",this.commaspace(this.props.tags)),n.a.createElement("p",null,"Officers: ",this.commaspace(this.props.officers)),n.a.createElement("p",{className:"nomargin"},"Meeting dates: ",this.props.meetingdates)),n.a.createElement("div",{className:"quillcontent"},this.props.description)))}},{key:"commaspace",value:function(e){return e?e.replace(/,/g,", "):""}}]),t}(s.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log(this.props),n.a.createElement("a",{href:this.props.url,target:"_blank"},n.a.createElement("img",{src:this.props.prefix+","+this.props.img}))}}]),t}(s.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={club:{},buttons:{subscribed:!1,edit:!1},exists:!0,url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"topadcontainer"},n.a.createElement("div",{className:"topad d-inline-block d-lg-none"},this.state.ads?n.a.createElement(k,this.state.ads[0]):null),n.a.createElement("div",{className:"topad d-inline-block d-lg-none"},this.state.ads?n.a.createElement(k,this.state.ads[1]):null)),n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col sidead d-none d-xl-block"},this.state.ads?n.a.createElement(k,this.state.ads[0]):null),n.a.createElement("div",{className:"col"},this.state.exists?n.a.createElement(j,Object.assign({},this.state.club,{showedit:this.state.buttons.isowner,showsub:this.props.accType.student,subbed:this.state.buttons.subscribed?"subbed":""})):n.a.createElement(y,null)),n.a.createElement("div",{className:"col sidead d-none d-xl-block"},this.state.ads?n.a.createElement(k,this.state.ads[1]):null)))}},{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a,s=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=new g.Parser,a=this.props.match.params.username,fetch(this.state.url+"/searchData/"+a,{credentials:"include"}).then(w).then(function(e){if("not found"===e)return console.log("page not found"),void s.setState({exists:!1});e.club.description=t.parse(e.club.description);var a={};a.subscribed=e.subscribed,a.edit=e.isowner,s.setState({club:e.club,ads:e.ads,buttons:a})}).catch(function(e){return console.error(e)});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(s.Component),x=(a(97),a(16)),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(x.b,{to:"clubs/"+this.props.username,className:"resultlink"},n.a.createElement("div",{className:"fullresult"},n.a.createElement("div",{className:"resulthead"},n.a.createElement("h1",{className:"resulttitle"},this.props.name),n.a.createElement("p",{className:"taglist"},"Tags: ",this.props.tags.replace(/,/g,", ")))))}}]),t}(s.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("p",{className:"text-center"},"Searching...")}}]),t}(s.Component),T=a(30),D=a.n(T),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).statusmap={"":null,good:n.a.createElement("h3",null,"Suggested Clubs"),"not signed in":n.a.createElement("div",null,n.a.createElement("h4",null,"You are not logged in. To get better club suggestions, ",n.a.createElement("a",{href:"/accounts/login"},"log in"),"."),n.a.createElement("h4",null,"Here are some popular clubs at your school:")),"not configured":n.a.createElement("div",null,n.a.createElement("h4",null,"You have not added any interests. To get club suggestions, configure your interests on your ",n.a.createElement("a",{href:"/profile"},"profile"),"."),n.a.createElement("h4",null,"Here are some popular clubs at your school:")),"failed search":n.a.createElement("p",null,"There was an error processing your search. Make sure you are connected to the internet and retry")},a.state={searchtext:"",clubs:[],searching:"",status:"",url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.location.search,console.log("query string: "+t),""==t){e.next=8;break}return(a=this.props.location.search.substring(1).split("search=")).shift(),console.log(a[0]),e.next=8,this.setState({searchtext:a[0].replace(/_/g," ")});case 8:this.search();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"processKeyPress",value:function(e){"Enter"==e.key&&this.search()}},{key:"search",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({clubs:[]}),this.setState({searching:n.a.createElement(C,null)}),console.log("qs stringification: "+D.a.stringify({search:this.state.searchtext})),""===this.state.searchtext){e.next=12;break}return t=D.a.stringify({search:this.state.searchtext}),e.next=7,this.props.history.push("?"+t);case 7:console.log("query string: "+t),console.log("searching for "+t),fetch(this.state.url+"/searchData/search/"+t).then(w).then(function(e){a.setState({clubs:e.clubs,ads:e.ads,searching:"",status:""})}).catch(function(e){console.error(e),a.setState({status:"failed search",searching:""})}),e.next=13;break;case 12:fetch(this.state.url+"/searchData/getdefault").then(w).then(function(e){console.log(e),a.setState({clubs:e.clubs,ads:e.ads,status:e.status,searching:""})}).catch(function(e){a.setState({status:"failed search",searching:""}),console.error(e)});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateSearchText",value:function(e){"_"!==e.target.value[e.target.value.length-1]&&this.setState({searchtext:e.target.value})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",{className:"title"},"Find Clubs"),n.a.createElement("div",{className:"fullsearchwrap"},n.a.createElement("div",{className:"searchbarwrap"},n.a.createElement("div",{className:"searchbar",onKeyPress:function(t){return e.processKeyPress(t)}},n.a.createElement("input",{id:"searchtext",type:"text",name:"search",placeholder:"Find a club...",autoComplete:"off",onChange:function(t){return e.updateSearchText(t)},value:this.state.searchtext}),n.a.createElement("button",{className:"bigbutton",id:"searchbutton",onClick:function(){return e.search()}},"Search")))),n.a.createElement("div",{className:"topadcontainer"},n.a.createElement("div",{className:"topad d-inline-block d-lg-none"},this.state.ads?n.a.createElement(k,this.state.ads[0]):null),n.a.createElement("div",{className:"topad d-inline-block d-lg-none"},this.state.ads?n.a.createElement(k,this.state.ads[1]):null)),n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col sidead d-none d-lg-block"},this.state.ads?n.a.createElement(k,this.state.ads[0]):null),n.a.createElement("div",{className:"col"},n.a.createElement("div",{style:{padding:"10px"}},this.state.searching,n.a.createElement("div",{className:"text-center"},this.statusmap[this.state.status]),this.state.clubs.map(function(e){return n.a.createElement(S,Object.assign({},e,{key:e.username}))}))),n.a.createElement("div",{className:"col sidead d-none d-lg-block"},this.state.ads?n.a.createElement(k,this.state.ads[1]):null)))}}]),t}(s.Component),J=a(20),B=["animals","art","business","community/local","competition","culture","debate","economics/finance","entertainment","government/politics","health","history","honor society","language","leadership","math","music","public speaking","science","social advocacy","sports","technology","volunteering/charity/community service","writing"];function I(e,t,a){var s=e[t];e[t]=e[a],e[a]=s}var L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).savecontent={"":"Save Changes",loading:"Saving...",saved:"Saved"},a.submittags=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({save:"loading"}),t=a.state.selectedtags,console.log(t),console.log(typeof t),console.log(JSON.stringify(t)),console.log(JSON.parse(JSON.stringify(t))),fetch(a.props.url+"/profileData/updatetags",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}).then(w).then(function(e){console.log("response"),console.log(e),a.originaltags=Object(J.a)(e),a.setState({save:"saved"})}).catch(function(e){return console.error(e)});case 7:case"end":return e.stop()}},e)})),a.state={save:"saved",selectedtags:a.props.interests},a.props.interests&&!a.originaltags&&(a.originaltags=Object(J.a)(a.props.interests).sort()),console.log("original tags in constructor"),console.log(a.originaltags),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(console.log("receiving props"),console.log(e),e.interests!==this.props.interests){var t=e.interests.sort();this.setState({selectedtags:t}),this.originaltags||(console.log("changing original tags from:"),console.log(this.originaltags),console.log("to:"),console.log(t),this.originaltags=Object(J.a)(t))}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"interestcontainer"},B.map(function(t){return n.a.createElement("div",{className:"interest"+(e.state.selectedtags&&-1!==e.state.selectedtags.indexOf(t)?" selected":""),onClick:function(){return e.update(t)},key:t},t)}),n.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},n.a.createElement("button",{className:"bigbutton savebutton "+this.state.save,onClick:this.submittags,disabled:this.state.save},this.savecontent[this.state.save])))}},{key:"update",value:function(e){var t=this.state.selectedtags,a=t.indexOf(e);-1===a?function(e,t){e.push(t);var a=e.length-1;for(;a>0&&e[a].localeCompare(e[a-1])<0;)I(e,a,a-1),a--}(t,e):t.splice(a,1),this.setState({selectedtags:t}),console.log("new tags"),console.log(t),console.log("old tags"),console.log(this.originaltags),t.join("")===this.originaltags.join("")?this.setState({save:"saved"}):this.setState({save:""}),console.log(this.state.selectedtags)}}]),t}(s.Component),M=(a(104),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={user:{subscriptions:[]},url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("printing user state object"),console.log(this.state.user),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h1",{className:"title"},"Profile"),n.a.createElement("div",{className:"row",style:{marginBottom:"40px"}},n.a.createElement("div",{className:"col-md profilesection",style:{marginLeft:"20px"}},n.a.createElement("h2",{className:"prosectionheader"},"Interests"),this.state.user.interests&&this.state.user.interests.length?null:n.a.createElement("p",{className:"gray"},n.a.createElement("em",null,"Configuring your interests allows Clubsource to suggest clubs that you might like.")),n.a.createElement("hr",null),this.state.user.interests?n.a.createElement(L,{interests:this.state.user.interests,url:this.state.url}):null),n.a.createElement("div",{className:"col-md profilesection",style:{marginRight:"20px"}},n.a.createElement("h2",{className:"prosectionheader"},"Subscriptions"),this.state.user.subscriptions&&this.state.user.subscriptions.length?null:n.a.createElement("p",{className:"gray"},n.a.createElement("em",null,"Clubs that you subscribe to will appear here so that you can easily find them. To suscribe to a club, visit its page and click the subscribe button. To find clubs, click browse clubs.")),n.a.createElement("hr",null),this.state.user.subscriptions?this.state.user.subscriptions.map(function(e){return n.a.createElement(S,Object.assign({},e,{key:e.username}))}):null)))}},{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.state.url),fetch(this.state.url+"/profileData/user").then(w).then(function(e){console.log("user data retrieved"),console.log(e),e||(window.location.href="/auth/google"),t.setState({user:JSON.parse(e)})}).catch(function(e){return console.error(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(s.Component)),q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname),accType:{club:!1,student:!1}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.state.url+"/accounts/type",{credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,this.setState({accType:a});case 8:console.log("club type:"),console.log(this.state.accType);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(E,{acc:this.state.accType}),n.a.createElement(b.c,null,n.a.createElement(b.a,{path:"/profile",component:M}),n.a.createElement(b.a,{exact:!0,path:"/clubs/:username",render:function(t){return n.a.createElement(N,Object.assign({},t,{accType:e.state.accType}))}}),n.a.createElement(b.a,{exact:!0,path:"/clubs",component:P})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(x.a,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){e.exports=a(105)},49:function(e,t,a){},55:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.f403dcf6.chunk.js.map