(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);a(46),a(47);var n=a(0),s=a.n(n),c=a(41),r=a.n(c),o=a(6),i=a.n(o),l=a(8),u=a(1),h=a(2),m=a(4),p=a(3),b=a(5),d=a(13),f=(a(53),a(42)),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navbar"},s.a.createElement("div",{className:"navcont navleft"},s.a.createElement("a",{className:"mainlogonav",href:"/"}," clubsource")),s.a.createElement("div",{className:"navcont navright"},this.props.acc.student?s.a.createElement("a",{className:"navlink",href:"/profile"},"Profile"):null,this.props.acc.club?s.a.createElement("a",{className:"navlink",href:"/dashboard"},"Dashboard"):null,s.a.createElement("a",{className:"navlink",href:"/clubs"}," Browse Clubs"),this.props.acc.club||this.props.acc.student?s.a.createElement("a",{className:"navlink",href:"/accounts/logout"},"Log Out"):s.a.createElement("a",{className:"navlink",href:"/accounts/login"},"Log In")))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"Page not found"))}}]),t}(n.Component),E={"":"Subscribe",subbed:"Unsubscribe",loading:"Loading..."},w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).subscribe=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===a.state.subbed,a.setState({subbed:"loading"}),e.next=4,fetch(a.state.url+"/searchData/subscribe",{method:"post",headers:{"Content-Type":"application/json"},body:{club:a.props._id,adding:t}});case 4:return n=e.sent,e.next=7,n.json();case 7:e.sent,t?a.setState({subbed:"subbed"}):a.setState({subbed:""});case 9:case"end":return e.stop()}},e)})),a.state={subbed:a.props.subbed,url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"info"},s.a.createElement("h2",{className:"clubtitle"},this.props.name),s.a.createElement("p",{className:"username"},this.props.username),s.a.createElement("div",{className:"text-center",style:{marginBottom:"10px"}},this.props.showsub?s.a.createElement("button",{className:"clubbutton subscribe "+this.state.subbed,id:"subscribe",onClick:this.subscribe,disabled:"loading"===this.state.subbed},E[this.state.subbed]):null,this.props.showedit?s.a.createElement("a",{className:"clubbutton edit",href:"/myclub/dashboard/edit"},"Edit"):null),s.a.createElement("div",{className:"middle"},s.a.createElement("p",null,"Tags: ",this.commaspace(this.props.tags)),s.a.createElement("p",null,"Officers: ",this.commaspace(this.props.officers)),s.a.createElement("p",{className:"nomargin"},"Meeting dates: ",this.props.meetingdates)),s.a.createElement("div",{className:"quillcontent"},this.props.description))}},{key:"commaspace",value:function(e){return e?e.replace(/,/g,", "):""}}]),t}(n.Component);console.log("production");var y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={club:{},buttons:{subscribe:!1,edit:!1},exists:!0,url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col sidead"},"Left Ad"),s.a.createElement("div",{className:"col"},this.state.exists?s.a.createElement(w,Object.assign({},this.state.club,{showedit:!0,showsub:!0,subbed:""})):s.a.createElement(v,null)),s.a.createElement("div",{className:"col sidead"},"Right Ad")))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,n,s,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.Parser,a=this.props.match.params.username,e.next=4,fetch(this.state.url+"/searchData/"+a);case 4:return n=e.sent,e.next=7,n.json();case 7:if("not found"!==(s=e.sent)){e.next=12;break}return console.log("page not found"),this.setState({exists:!1}),e.abrupt("return");case 12:s.club.description=t.parse(s.club.description),this.setState({club:s.club}),(c={}).subscribe=s.subscribed,c.edit=s.isowner,this.setState({buttons:c});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),j=(a(94),a(15)),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement(j.b,{to:"clubs/"+this.props.username,className:"resultlink"},s.a.createElement("div",{className:"fullresult"},s.a.createElement("div",{className:"resulthead"},s.a.createElement("h1",{className:"resulttitle"},this.props.name),s.a.createElement("p",{className:"taglist"},"Tags: ",this.props.tags.replace(/,/g,", ")))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("p",{className:"text-center"},"Searching...")}}]),t}(n.Component),k=a(28),x=a.n(k),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={searchtext:"",clubs:[],searching:"",url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.location.search,console.log("query string: "+t),""==t){e.next=8;break}return(a=this.props.location.search.substring(1).split("search=")).shift(),console.log(a[0]),e.next=8,this.setState({searchtext:a[0].replace(/_/g," ")});case 8:this.search();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"processKeyPress",value:function(e){"Enter"==e.key&&this.search()}},{key:"search",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,n,c,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({clubs:[]}),this.setState({searching:s.a.createElement(N,null)}),console.log("qs stringification: "+x.a.stringify({search:this.state.searchtext})),""===this.state.searchtext){e.next=18;break}return t=x.a.stringify({search:this.state.searchtext}),e.next=7,this.props.history.push("?"+t);case 7:return console.log("query string: "+t),console.log("searching for "+t),e.next=11,fetch(this.state.url+"/searchData/search/"+t);case 11:return a=e.sent,e.next=14,a.json();case 14:n=e.sent,this.setState({clubs:n.map(function(e){return s.a.createElement(O,Object.assign({},e,{key:e.username}))}),searching:""}),e.next=26;break;case 18:return e.next=20,fetch(this.state.url+"/searchData/getdefault");case 20:return c=e.sent,e.next=23,c.json();case 23:r=e.sent,console.log(r),this.setState({clubs:r.map(function(e){return s.a.createElement(O,Object.assign({},e,{key:e.username}))}),searching:""});case 26:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateSearchText",value:function(e){"_"!==e.target.value[e.target.value.length-1]&&this.setState({searchtext:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"Find Clubs"),s.a.createElement("div",{className:"fullsearchwrap"},s.a.createElement("div",{className:"searchbarwrap"},s.a.createElement("div",{className:"searchbar",onKeyPress:function(t){return e.processKeyPress(t)}},s.a.createElement("input",{id:"searchtext",type:"text",name:"search",placeholder:"Find a club...",autoComplete:"off",onChange:function(t){return e.updateSearchText(t)},value:this.state.searchtext}),s.a.createElement("button",{className:"bigbutton",id:"searchbutton",onClick:function(){return e.search()}},"Search")))),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col sidead"},"Left Ad"),s.a.createElement("div",{className:"col"},this.state.searching,this.state.clubs),s.a.createElement("div",{className:"col sidead"},"Right Ad"))))}}]),t}(n.Component),C=["animals","art","business","community/local","competition","culture","debate","economics/finance","entertainment","government/politics","health","history","honor society","language","leadership","math","music","public speaking","science","social advocacy","sports","technology","volunteering/charity/community service","writing"],T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).submittags=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.selectedtags,console.log(t),console.log(typeof t),console.log(JSON.stringify(t)),console.log(JSON.parse(JSON.stringify(t))),fetch(a.props.url+"/profileData/updatetags",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log("response"),console.log(e),a.setState({originaltags:e})});case 6:case"end":return e.stop()}},e)})),a.state={selectedtags:a.props.interests,originaltags:a.props.interests},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){window.onbeforeunload=this.submittags}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"interestcontainer"},C.map(function(t){return s.a.createElement("div",{className:"interest"+(-1===e.state.selectedtags.indexOf(t)?"":" selected"),onClick:function(){return e.update(t)},key:t},t)}),s.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},s.a.createElement("button",{className:"bigbutton",onClick:this.submittags},"Save Changes ")))}},{key:"update",value:function(e){var t=this.state.selectedtags,a=t.indexOf(e);-1===a?t.push(e):t.splice(a,1),this.setState({selectedtags:t}),console.log(this.state.selectedtags)}},{key:"componentWillUnmount",value:function(){this.submittags(),window.onbeforeunload=void 0}}]),t}(n.Component),D=(a(101),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={user:{interests:[],subscriptions:[]},url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("props"),console.log(this.props),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("h1",{className:"title"},"Profile"),s.a.createElement("div",{className:"row",style:{marginBottom:"40px"}},s.a.createElement("div",{className:"col-md profilesection",style:{marginLeft:"20px"}},s.a.createElement("h2",{className:"prosectionheader"},"Interests"),this.state.user.interests.length?null:s.a.createElement("p",{className:"gray"},s.a.createElement("em",null,"Configuring your interests allows Clubsource to suggest clubs that you might like.")),s.a.createElement("hr",null),s.a.createElement(T,{interests:this.state.user.interests,url:this.state.url})),s.a.createElement("div",{className:"col-md profilesection",style:{marginRight:"20px"}},s.a.createElement("h2",{className:"prosectionheader"},"Subscriptions"),this.state.user.subscriptions.length?null:s.a.createElement("p",{className:"gray"},s.a.createElement("em",null,"Clubs that you subscribe to will appear here so that you can easily find them. To suscribe to a club, visit its page and click the subscribe button. To find clubs, click browse clubs.")),s.a.createElement("hr",null),this.state.user.subscriptions.map(function(e){return s.a.createElement(O,Object.assign({},e,{key:e.username}))}))))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.url),e.next=3,fetch(this.state.url+"/profileData/user");case 3:return t=e.sent,console.log("data fetched"),e.next=7,t.json();case 7:return a=e.sent,console.log("user data retrieved"),console.log(a),a||(window.location.href="/auth/google"),e.next=13,this.setState({user:a});case 13:console.log(this.state);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component)),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={url:window.location.protocol+"//"+("localhost"===window.location.hostname?"localhost:3000":window.location.hostname),accType:{club:!1,student:!1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.state.url+"/accounts/type");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,this.setState({accType:a});case 8:console.log("club type:"),console.log(this.state.accType);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(g,{acc:this.state.accType}),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/profile",component:D}),s.a.createElement(d.a,{exact:!0,path:"/clubs/:username",render:function(t){return s.a.createElement(y,Object.assign({},t,{accType:e.state.accType}))}}),s.a.createElement(d.a,{exact:!0,path:"/clubs",component:S})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j.a,null,s.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){e.exports=a(102)},47:function(e,t,a){},53:function(e,t,a){},94:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.28eff3e0.chunk.js.map