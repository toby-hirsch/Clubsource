(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(96)},44:function(e,t,a){},50:function(e,t,a){},91:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);a(43),a(44);var n=a(0),r=a.n(n),c=a(38),s=a.n(c),l=a(2),i=a(3),o=a(5),u=a(4),h=a(6),m=a(11),p=a(12),d=a.n(p),b=a(17),f=(a(50),a(39)),v="https://clubsource.herokuapp.com";var E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navcont navleft"},r.a.createElement("a",{className:"mainlogonav",href:v}," clubsource")),r.a.createElement("div",{className:"navcont navright"},r.a.createElement("a",{className:"navlink",href:v+"/dashboard"},"Dashboard"),r.a.createElement("a",{className:"navlink",href:v+"/clubs/search"}," Browse Clubs"),r.a.createElement("a",{className:"navlink",href:v+"/accounts/logout"},"Log Out")))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Page not found"),r.a.createElement("p",null,"Shit"))}}]),t}(n.Component);var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={club:{},exists:!0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark(function e(){var t,a,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.Parser,a=this.props.match.params.username,console.log({DEV_URL:"https://clubsource.herokuapp.com"}),e.next=5,fetch("".concat("https://clubsource.herokuapp.com","/searchData/").concat(a));case 5:return n=e.sent,e.next=8,n.json();case 8:if(r=e.sent,console.log(r),"not found"!==r){e.next=15;break}return console.log("page not found"),this.setState({exists:!1}),this.forceUpdate(),e.abrupt("return");case 15:r.description=t.parse(r.description),this.setState({club:r});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.exists;return console.log(t),r.a.createElement("div",null,t?r.a.createElement(function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col sidead"},"Left Ad"),r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},e.state.club.clubname),r.a.createElement("p",{className:"username"},e.state.club.username),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"gray"},"Tags: ",e.state.club.tags),r.a.createElement("p",{className:"gray"},"Officers: ",e.state.club.officers),r.a.createElement("p",{className:"gray"},"Meeting dates: ",e.state.club.meetingdates),r.a.createElement("hr",null),r.a.createElement("div",{className:"quillcontent"},e.state.club.description)))),r.a.createElement("div",{className:"col sidead"},"Right Ad")))},null):r.a.createElement(g,null),";")}}]),t}(n.Component),O=(a(91),a(14)),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.b,{to:"clubs/"+this.props.username,className:"resultlink"},r.a.createElement("div",{className:"fullresult"},r.a.createElement("div",{className:"resulthead"},r.a.createElement("h1",{className:"resulttitle"},this.props.name),r.a.createElement("p",{className:"taglist"},"Tags: ",this.props.tags)),r.a.createElement("div",{className:"resultbody"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.description}}))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"Searching...")}}]),t}(n.Component);var y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={searchtext:"",clubs:[],searching:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.location.search,console.log("query string: "+t),""==t){e.next=9;break}return(a=this.props.location.search.substring(1).split("search=")).shift(),console.log(a[0]),e.next=8,this.setState({searchtext:a[0].replace(/_/g," ")});case 8:this.search();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"processKeyPress",value:function(e){"Enter"==e.key&&this.search()}},{key:"search",value:function(){var e=Object(b.a)(d.a.mark(function e(){var t,a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({clubs:[]}),this.setState({searching:r.a.createElement(k,null)}),""===this.state.searchtext){e.next=17;break}return e.next=5,this.props.history.push("?search="+this.state.searchtext.replace(/ /g,"_"));case 5:if(t=this.props.location.search,console.log("query string: "+t),""==t){e.next=17;break}return t=t.substring(1).toLowerCase().replace(/ /g,"_"),console.log("searching for "+t),e.next=12,fetch("http://localhost:3000/searchData/search/"+t);case 12:return a=e.sent,e.next=15,a.json();case 15:n=e.sent,this.setState({clubs:n.map(function(e){return r.a.createElement(N,Object.assign({},e,{key:e.username}))}),searching:""});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateSearchText",value:function(e){"_"!==e.target.value[e.target.value.length-1]&&this.setState({searchtext:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Find Clubs"),r.a.createElement("div",{className:"fullsearchwrap"},r.a.createElement("div",{className:"searchbarwrap"},r.a.createElement("div",{className:"searchbar",onKeyPress:function(t){return e.processKeyPress(t)}},r.a.createElement("input",{id:"searchtext",type:"text",name:"search",placeholder:"Find a club...",autoComplete:"off",onChange:function(t){return e.updateSearchText(t)},value:this.state.searchtext}),r.a.createElement("button",{className:"bigbutton",id:"searchbutton",onClick:function(){return e.search()}},"Search")))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col sidead"},"Left Ad"),r.a.createElement("div",{className:"col"},this.state.searching,this.state.clubs),r.a.createElement("div",{className:"col sidead"},"Right Ad"))))}}]),t}(n.Component);var x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/clubs/:username",component:j}),r.a.createElement(m.a,{exact:!0,path:"/clubs",component:y})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.5e90382b.chunk.js.map