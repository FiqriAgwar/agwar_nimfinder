(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=(n(17),n(1)),u=n(2),l=n(4),i=n(3),p=n(5),h=(n(18),a.Component,n(6)),m=n.n(h),d=n(9),f=n(10);function v(){return(v=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://api.stya.net/nim/register",{method:"POST",body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state;console.log(t);var a=function(e){return v.apply(this,arguments)}(t);console.log(a)},n.handleInputChange=function(e){e.preventDefault(),n.setState(Object(d.a)({},e.target.name,e.target.value))},n.state={username:"",password:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"titlesec"},r.a.createElement("h2",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"Username",value:t,name:"username",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("input",{type:"password",placeholder:"password",value:n,name:"password",onChange:this.handleInputChange})),r.a.createElement("p",null,r.a.createElement("button",null,"Register"))))}}]),t}(a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.dedd78fb.chunk.js.map