(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(71)},40:function(e,t,a){},41:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(31),o=a.n(s),r=(a(40),a(6)),c=a(7),i=a(9),u=a(8),m=a(10),h=a(11),p=a(12),d=(a(41),a(15)),b=a(13),g=a.n(b),E=a(16),k=a.n(E),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({message:"Loading"});var t=k.a.stringify({username:a.state.username,password:a.state.password});g.a.post("https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/register",t,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(e){a.setState({message:e.data.status,code:e.data.code})}).catch(function(e){console.log(e)})},a.handleInputChange=function(e){e.preventDefault(),a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleClick=function(){a.setState({linkToGo:"/login"})},a.state={username:"",password:"",code:"",message:"",linkToGo:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.linkToGo!==t.linkToGo&&this.setState({linkToGo:null})}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.code,s=e.linkToGo;return 0!==n&&null===s?l.a.createElement("div",{className:"board"},l.a.createElement("h2",null,"Daftarkan Dirimu"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("input",{className:"querybar",type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("input",{className:"querybar",type:"password",placeholder:"password",value:a,name:"password",onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("button",{className:"btnone",onClick:this.handleSubmit},"Register")),l.a.createElement("p",null,"atau Sudah Punya Akun?"),l.a.createElement("p",null,l.a.createElement("button",{className:"btntwo",onClick:this.handleClick},"Go To Login")),l.a.createElement("br",null),l.a.createElement("p",null,this.state.message))):l.a.createElement(p.a,{to:{pathname:"/login",state:{username:t}}})}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({message:"Loading..."});var t=k.a.stringify({username:a.state.username,password:a.state.password});g.a.post("https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/login",t,{"Content-Type":"application/x-www-form-urlencoded"}).then(function(e){a.setState({message:e.data.status,code:e.data.code,token:e.data.token})}).catch(function(e){console.log(e)})},a.handleInputChange=function(e){e.preventDefault(),a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleClick=function(){a.setState({linkToGo:"/register"})},a.state={username:"",password:"",code:"",message:"",token:"",linkToGo:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.linkToGo!==t.linkToGo&&this.setState({linkToGo:null})}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.code,s=e.token,o=e.message,r=e.linkToGo;return void 0===s||""===s||0!==n?null===r?l.a.createElement("div",{className:"board"},l.a.createElement("h2",null,"Login Dulu Ya"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,l.a.createElement("input",{className:"querybar",type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("input",{className:"querybar",type:"password",placeholder:"password",value:a,name:"password",onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("button",{className:"btnone",onClick:this.handleSubmit},"Login")),l.a.createElement("p",null,"atau Belum Punya Akun?"),l.a.createElement("p",null,l.a.createElement("button",{className:"btntwo",onClick:this.handleClick},"Go To Register")),l.a.createElement("p",null,o))):l.a.createElement(p.a,{to:"/register"}):(console.log(s),this.setState({code:1}),l.a.createElement(p.a,{to:{pathname:"/get",state:{token:s,username:t}}}))}}]),t}(n.Component),f=a(34),N=a.n(f);var S=function(e){return l.a.createElement("table",null,l.a.createElement("thead",{className:"tableheader"},l.a.createElement("tr",null,l.a.createElement("th",null,"Nama Mahasiswa"),l.a.createElement("th",null,"NIM TPB"),l.a.createElement("th",null,"NIM Jurusan"),l.a.createElement("th",null,"Program Studi"))),l.a.createElement("tbody",{className:"tablebody"},e.data.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.nim_tpb),l.a.createElement("td",null,e.nim_jur),l.a.createElement("td",null,e.prodi))})))},C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({load:!1,message:""}),console.log(a.state.token);var t="https://shrouded-cove-86222.herokuapp.com/https://api.stya.net/nim/";a.checkNumber(a.state.query[0])?t+="byid?query="+a.state.query:t+="byname?name="+a.state.query,a.state.size>0&&(t+="&count="+a.state.size),a.state.page>0&&(t+="&page="+a.state.page),console.log(document.cookie);var n={headers:{"Auth-Token":a.state.token}};g.a.get(t,n).then(function(e){console.log(e.data),a.setState({message:e.data.status,code:e.data.code,items:e.data.payload,load:!0})})},a.state={items:[],load:!0,query:"",size:0,page:0,token:null,code:0,message:"",username:null},N.a.set("token",a.state.token,{expires:1}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"checkNumber",value:function(e){return"1"===e||"2"===e||"3"===e||"4"===e||"5"===e||"6"===e||"7"===e||"8"===e||"9"===e||"0"===e}},{key:"componentWillMount",value:function(){console.log(this.props.location.state),this.props.location.state&&this.setState({token:this.props.location.state.token,username:this.props.location.state.username})}},{key:"updateQuery",value:function(e){this.setState({query:e.target.value})}},{key:"updateSize",value:function(e){this.setState({size:e.target.value})}},{key:"updatePage",value:function(e){this.setState({page:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.load,a=e.items,n=e.code,s=e.token,o=e.username;return void 0===s||null===s?(console.log("Redirect"),this.setState({token:""}),l.a.createElement(p.a,{to:"/login"})):t?n>=0?l.a.createElement("div",{className:"titlesec"},l.a.createElement("div",{className:"hello"},"Hello, ",o,"   |   ",l.a.createElement(h.b,{exact:!0,activeClassName:"hello",to:"/login"},"Logout")),l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"querybar",type:"text",name:"query",placeholder:"Masukkan Nama/NIM",onChange:this.updateQuery.bind(this)}),l.a.createElement("input",{className:"sizebar",type:"text",name:"size",placeholder:"Masukkan Jumlah",onChange:this.updateSize.bind(this)}),l.a.createElement("input",{className:"pagebar",type:"text",name:"page",placeholder:"Masukkan Halaman",onChange:this.updatePage.bind(this)}),l.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Search")),l.a.createElement(S,{data:a})):l.a.createElement("div",{className:"titlesec"},l.a.createElement("div",{className:"hello"},"Hello, ",o,"   |   ",l.a.createElement(h.b,{exact:!0,activeClassName:"hello",to:"/login"},"Logout")),l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"querybar",type:"text",name:"query",placeholder:"Masukkan Nama/NIM",onChange:this.updateQuery.bind(this)}),l.a.createElement("input",{className:"sizebar",type:"text",name:"size",placeholder:"Masukkan Jumlah",onChange:this.updateSize.bind(this)}),l.a.createElement("input",{className:"pagebar",type:"text",name:"page",placeholder:"Masukkan Halaman",onChange:this.updatePage.bind(this)}),l.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Search")),l.a.createElement("div",{className:"queryStyle"},l.a.createElement("p",null,"Cannot Load Data"))):l.a.createElement("div",{className:"titlesec"},l.a.createElement("div",{className:"hello"},"Hello, ",o,"   |   ",l.a.createElement(h.b,{exact:!0,activeClassName:"hello",to:"/login"},"Logout")),l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"querybar",type:"text",name:"query",placeholder:"Masukkan Nama/NIM",onChange:this.updateQuery.bind(this)}),l.a.createElement("input",{className:"sizebar",type:"text",name:"size",placeholder:"Masukkan Jumlah",onChange:this.updateSize.bind(this)}),l.a.createElement("input",{className:"pagebar",type:"text",name:"page",placeholder:"Masukkan Halaman",onChange:this.updatePage.bind(this)}),l.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Search")),l.a.createElement("div",{className:"queryStyle"},"Loading Data..."))}}]),t}(n.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404 Not Found"))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{basename:"/agwar_nimfinder"},l.a.createElement("div",null,l.a.createElement("div",{className:"banner"},l.a.createElement("img",{src:"https://github.com/SorrowInRain/agwar_nimfinder/blob/master/src/banner.png?raw=true"})),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/",exact:!0,component:C}),l.a.createElement(p.b,{path:"/register",exact:!0,component:y}),l.a.createElement(p.b,{path:"/login",exact:!0,component:v}),l.a.createElement(p.b,{path:"/get",exact:!0,component:C}),l.a.createElement(p.b,{component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.720e8453.chunk.js.map