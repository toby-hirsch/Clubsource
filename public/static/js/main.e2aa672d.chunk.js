(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);a(47),a(48);var s=a(0),n=a.n(s),c=a(41),r=a.n(c),o=a(1),i=a.n(o),l=a(8),u=a(2),h=a(3),m=a(5),p=a(4),d=a(6),b=a(13),g=(a(54),a(42)),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"navcont navleft"},n.a.createElement("a",{className:"mainlogonav",href:"/"}," clubsource")),n.a.createElement("div",{className:"navcont navright"},this.props.acc.student?n.a.createElement("a",{className:"navlink",href:"/profile"},"Profile"):null,this.props.acc.club?n.a.createElement("a",{className:"navlink",href:"/dashboard"},"Dashboard"):null,n.a.createElement("a",{className:"navlink",href:"/clubs"}," Browse Clubs"),this.props.acc.club||this.props.acc.student?n.a.createElement("a",{className:"navlink",href:"/accounts/logout"},"Log Out"):n.a.createElement("a",{className:"navlink",href:"/accounts/login"},"Log In")))}}]),t}(s.Component),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"title"},"Page not found"))}}]),t}(s.Component),E={"":"Subscribe",subbed:"Unsubscribe",loading:"Loading..."},y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).subscribe=Object(l.a)(i.a.mark(function e(){var t,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===a.state.subbed,a.setState({subbed:"loading"}),e.next=4,fetch(a.state.url+"/searchData/subscribe",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({club:a.props._id,adding:t})});case 4:return s=e.sent,e.next=7,s.json();case 7:e.sent,t?a.setState({subbed:"subbed"}):a.setState({subbed:""});case 9:case"end":return e.stop()}},e)})),a.state={subbed:a.props.subbed,url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.subbed!==this.props.subbed&&this.setState({subbed:e.subbed})}},{key:"render",value:function(){return n.a.createElement("div",{className:"info"},n.a.createElement("h2",{className:"clubtitle"},this.props.name),n.a.createElement("p",{className:"username"},this.props.username),n.a.createElement("div",{className:"text-center",style:{marginBottom:"10px"}},this.props.showsub?n.a.createElement("button",{className:"clubbutton subscribe "+this.state.subbed,id:"subscribe",onClick:this.subscribe,disabled:"loading"===this.state.subbed},E[this.state.subbed]):null,this.props.showedit?n.a.createElement("a",{className:"clubbutton edit",href:"/myclub/dashboard/edit"},"Edit"):null),n.a.createElement("div",{className:"middle"},n.a.createElement("p",null,"Tags: ",this.commaspace(this.props.tags)),n.a.createElement("p",null,"Officers: ",this.commaspace(this.props.officers)),n.a.createElement("p",{className:"nomargin"},"Meeting dates: ",this.props.meetingdates)),n.a.createElement("div",{className:"quillcontent"},this.props.description))}},{key:"commaspace",value:function(e){return e?e.replace(/,/g,", "):""}}]),t}(s.Component);console.log("production");var w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={club:{},buttons:{subscribe:!1,edit:!1},exists:!0,url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col sidead"},"Left Ad"),n.a.createElement("div",{className:"col"},this.state.exists?n.a.createElement(y,Object.assign({},this.state.club,{showedit:this.state.buttons.isowner,showsub:this.props.accType.student,subbed:this.state.buttons.subscribed?"subbed":""})):n.a.createElement(v,null)),n.a.createElement("div",{className:"col sidead"},"Right Ad")))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,s,n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new g.Parser,a=this.props.match.params.username,e.next=4,fetch(this.state.url+"/searchData/"+a,{credentials:"include"});case 4:return s=e.sent,e.next=7,s.json();case 7:if("not found"!==(n=e.sent)){e.next=12;break}return console.log("page not found"),this.setState({exists:!1}),e.abrupt("return");case 12:n.club.description=t.parse(n.club.description),this.setState({club:n.club}),(c={}).subscribed=n.subscribed,c.edit=n.isowner,this.setState({buttons:c});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(s.Component),j=(a(95),a(15)),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(j.b,{to:"clubs/"+this.props.username,className:"resultlink"},n.a.createElement("div",{className:"fullresult"},n.a.createElement("div",{className:"resulthead"},n.a.createElement("h1",{className:"resulttitle"},this.props.name),n.a.createElement("p",{className:"taglist"},"Tags: ",this.props.tags.replace(/,/g,", ")))))}}]),t}(s.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("p",{className:"text-center"},"Searching...")}}]),t}(s.Component),k=a(28),x=a.n(k),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).statusmap={"":n.a.createElement("h3",null),good:n.a.createElement("h3",null,"Suggested Clubs"),"not signed in":n.a.createElement("div",null,n.a.createElement("h4",null,"You are not logged in. To get better club suggestions, ",n.a.createElement("a",{href:"/accounts/login"},"log in"),"."),n.a.createElement("h4",null,"Here are some popular clubs at your school:")),"not configured":n.a.createElement("div",null,n.a.createElement("h4",null,"You have not added any interests. To get club suggestions, configure your interests on your ",n.a.createElement("a",{href:"/profile"},"profile"),"."),n.a.createElement("h4",null,"Here are some popular clubs at your school:"))},a.state={searchtext:"",clubs:[],searching:"",status:"",url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.location.search,console.log("query string: "+t),""==t){e.next=8;break}return(a=this.props.location.search.substring(1).split("search=")).shift(),console.log(a[0]),e.next=8,this.setState({searchtext:a[0].replace(/_/g," ")});case 8:this.search();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"processKeyPress",value:function(e){"Enter"==e.key&&this.search()}},{key:"search",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,s,c,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({clubs:[]}),this.setState({searching:n.a.createElement(N,null)}),console.log("qs stringification: "+x.a.stringify({search:this.state.searchtext})),""===this.state.searchtext){e.next=18;break}return t=x.a.stringify({search:this.state.searchtext}),e.next=7,this.props.history.push("?"+t);case 7:return console.log("query string: "+t),console.log("searching for "+t),e.next=11,fetch(this.state.url+"/searchData/search/"+t);case 11:return a=e.sent,e.next=14,a.json();case 14:s=e.sent,this.setState({clubs:s.map(function(e){return n.a.createElement(O,Object.assign({},e,{key:e.username}))}),searching:""}),e.next=26;break;case 18:return e.next=20,fetch(this.state.url+"/searchData/getdefault");case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r),this.setState({clubs:r.clubs,status:r.status,searching:""});case 26:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateSearchText",value:function(e){"_"!==e.target.value[e.target.value.length-1]&&this.setState({searchtext:e.target.value})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",{className:"title"},"Find Clubs"),n.a.createElement("div",{className:"fullsearchwrap"},n.a.createElement("div",{className:"searchbarwrap"},n.a.createElement("div",{className:"searchbar",onKeyPress:function(t){return e.processKeyPress(t)}},n.a.createElement("input",{id:"searchtext",type:"text",name:"search",placeholder:"Find a club...",autoComplete:"off",onChange:function(t){return e.updateSearchText(t)},value:this.state.searchtext}),n.a.createElement("button",{className:"bigbutton",id:"searchbutton",onClick:function(){return e.search()}},"Search")))),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col sidead"},"Left Ad"),n.a.createElement("div",{className:"col"},this.state.searching,n.a.createElement("div",{className:"text-center"},this.statusmap[this.state.status]),this.state.clubs.map(function(e){return n.a.createElement(O,Object.assign({},e,{key:e.username}))})),n.a.createElement("div",{className:"col sidead"},"Right Ad"))))}}]),t}(s.Component),C=a(45),T=["animals","art","business","community/local","competition","culture","debate","economics/finance","entertainment","government/politics","health","history","honor society","language","leadership","math","music","public speaking","science","social advocacy","sports","technology","volunteering/charity/community service","writing"];function D(e,t,a){var s=e[t];e[t]=e[a],e[a]=s}var P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).savecontent={"":"Save Changes",loading:"Saving...",saved:"Saved"},a.submittags=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({save:"loading"}),t=a.state.selectedtags,console.log(t),console.log(typeof t),console.log(JSON.stringify(t)),console.log(JSON.parse(JSON.stringify(t))),fetch(a.props.url+"/profileData/updatetags",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}).then(function(e){return e.json()}).then(function(e){console.log("response"),console.log(e),a.setState({originaltags:e,saving:"saved"})});case 7:case"end":return e.stop()}},e)})),a.state={save:"saved"},a.originaltags=Object(C.a)(a.props.interests).sort(),console.log("original tags in constructor"),console.log(a.originaltags),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(console.log("receiving props"),console.log(e),e.interests!==this.props.interests){var t=e.interests.sort();this.setState({selectedtags:t}),this.originaltags||(this.originaltags=t)}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"interestcontainer"},T.map(function(t){return n.a.createElement("div",{className:"interest"+(-1===e.state.selectedtags.indexOf(t)?"":" selected"),onClick:function(){return e.update(t)},key:t},t)}),n.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},n.a.createElement("button",{className:"bigbutton savebutton "+this.state.save,onClick:this.submittags,disabled:this.state.save},this.savecontent[this.state.save])))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({selectedtags:this.props.interests,originaltags:this.props.interests});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(e){var t=this.state.selectedtags,a=t.indexOf(e);-1===a?function(e,t){e.push(t);var a=e.length-1;for(;a>0&&e[a].localeCompare(e[a-1])<0;)D(e,a,a-1),a--}(t,e):t.splice(a,1),this.setState({selectedtags:t}),console.log("new tags"),console.log(t),console.log("old tags"),console.log(this.originaltags),t.join("")===this.originaltags.join("")?this.setState({save:"saved"}):this.setState({save:""}),console.log(this.state.selectedtags)}}]),t}(s.Component),J=(a(102),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={user:{},url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("props"),console.log(this.props),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h1",{className:"title"},"Profile"),n.a.createElement("div",{className:"row",style:{marginBottom:"40px"}},n.a.createElement("div",{className:"col-md profilesection",style:{marginLeft:"20px"}},n.a.createElement("h2",{className:"prosectionheader"},"Interests"),this.state.user.interests.length?null:n.a.createElement("p",{className:"gray"},n.a.createElement("em",null,"Configuring your interests allows Clubsource to suggest clubs that you might like.")),n.a.createElement("hr",null),n.a.createElement(P,{interests:this.state.user.interests,url:this.state.url})),n.a.createElement("div",{className:"col-md profilesection",style:{marginRight:"20px"}},n.a.createElement("h2",{className:"prosectionheader"},"Subscriptions"),this.state.user.subscriptions.length?null:n.a.createElement("p",{className:"gray"},n.a.createElement("em",null,"Clubs that you subscribe to will appear here so that you can easily find them. To suscribe to a club, visit its page and click the subscribe button. To find clubs, click browse clubs.")),n.a.createElement("hr",null),this.state.user.subscriptions.map(function(e){return n.a.createElement(O,Object.assign({},e,{key:e.username}))}))))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.url),e.next=3,fetch(this.state.url+"/profileData/user");case 3:return t=e.sent,console.log("data fetched"),e.next=7,t.json();case 7:return a=e.sent,console.log("user data retrieved"),console.log(a),a||(window.location.href="/auth/google"),e.next=13,this.setState({user:a});case 13:console.log(this.state);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(s.Component)),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname),accType:{club:!1,student:!1}},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.state.url+"/accounts/type",{credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,this.setState({accType:a});case 8:console.log("club type:"),console.log(this.state.accType);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(f,{acc:this.state.accType}),n.a.createElement(b.c,null,n.a.createElement(b.a,{path:"/profile",component:J}),n.a.createElement(b.a,{exact:!0,path:"/clubs/:username",render:function(t){return n.a.createElement(w,Object.assign({},t,{accType:e.state.accType}))}}),n.a.createElement(b.a,{exact:!0,path:"/clubs",component:S})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(j.a,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a(103)},48:function(e,t,a){},54:function(e,t,a){},95:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.e2aa672d.chunk.js.map