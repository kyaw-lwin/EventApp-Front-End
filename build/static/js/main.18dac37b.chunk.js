(this.webpackJsonpadvertapp=this.webpackJsonpadvertapp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),u=(a(24),a(2));var o=function(e){var t,a,r,c,o,i=Object(n.useState)(!1),m=Object(u.a)(i,2),s=m[0],d=m[1];return l.a.createElement(l.a.Fragment,null,e.currentEvent?"Update":"",l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),d(!0),(e.currentEvent?e.client.updateEvent(e.currentEvent._id,t.target.eName.value,t.target.eLocation.value,t.target.eDetails.value,t.target.eDate.value,t.target.price.value):e.client.addEvent(t.target.eName.value,t.target.eLocation.value,t.target.eDetails.value,t.target.eDate.value,t.target.price.value)).then((function(){d(!1),document.getElementById("addForm").reset(),e.refreshList()})).catch((function(){alert("error occured -incorrect input format, please try again"),d(!1)}))}(t)},id:"addForm"},"Event Name: ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",defaultValue:null===(t=e.currentEvent)||void 0===t?void 0:t.eventName,name:"eName",disabled:s}),l.a.createElement("br",null),"Event Location: ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",defaultValue:null===(a=e.currentEvent)||void 0===a?void 0:a.eventLocation,name:"eLocation",disabled:s}),l.a.createElement("br",null),"Event Details: ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",defaultValue:null===(r=e.currentEvent)||void 0===r?void 0:r.eventDetails,name:"eDetails",disabled:s}),l.a.createElement("br",null),"Event Date: DD/MM/YYY ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",defaultValue:null===(c=e.currentEvent)||void 0===c?void 0:c.eventDate,name:"eDate",disabled:s}),l.a.createElement("br",null),"Price:",l.a.createElement("br",null),l.a.createElement("input",{type:"text",defaultValue:null===(o=e.currentEvent)||void 0===o?void 0:o.price,name:"price",disabled:s}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"add-submitButton"},l.a.createElement("button",{className:"login-submit",type:"submit",disabled:s}," ","Submit"," "))))},i=(a(25),a(18));var m=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(void 0),s=Object(u.a)(m,2),d=s[0],v=s[1],E=function(){e.client.getEvents().then((function(e){return c(e.data)}))};return Object(n.useEffect)((function(){E()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{className:"mainPage  "},l.a.createElement("br",null),l.a.createElement("div",{className:"mainpage-header  col-md-12"},"Events"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"update-event col-md-12"},l.a.createElement("div",{className:"addForm col-md-6"},l.a.createElement(o,{client:e.client,refreshList:function(){E(),v(void 0)},currentEvent:d})),l.a.createElement("br",null),l.a.createElement("div",{className:"event-list col-md-6"},l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("thead",{className:"titles"},l.a.createElement("tr",null,l.a.createElement("th",null,"Event Name"),l.a.createElement("th",null,"Event Location"),l.a.createElement("th",null,"Event Details"),l.a.createElement("th",null,"Event Date"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,r.map((function(t){return l.a.createElement("tr",{key:t._id},l.a.createElement("td",null,t.eventName),l.a.createElement("td",null,t.eventLocation),l.a.createElement("td",null,t.eventDetails),l.a.createElement("td",null,t.eventDate),l.a.createElement("td",null,"\xa3",t.price),l.a.createElement("td",null,l.a.createElement("div",{className:"add-submit"},l.a.createElement("button",{className:"login-submit2",onClick:function(){return a=t._id,void e.client.removeEvent(a).then((function(){return E()}));var a}}," remove"),l.a.createElement("button",{className:"login-submit2",onClick:function(){v(t)}}," update"))))}))))))))},s=a(16),d=a(17),v=a(4),E=a.n(v),b="https://eventappproject.herokuapp.com",p=function(){function e(t,a){Object(s.a)(this,e),this.token=t,this.logoutHandler=a}return Object(d.a)(e,[{key:"authenticatedCall",value:function(e,t,a){var n=this;return E()({method:e,url:t,headers:{authorization:this.token},data:a}).catch((function(e){if(console.log("api error",n.token),403==e.response.status)return n.logoutHandler(),Promise.reject();throw e}))}},{key:"apiCall",value:function(e,t,a){return E()({method:e,url:t,data:a}).catch((function(e){throw e}))}},{key:"login",value:function(e,t){return console.log(e,t),this.apiCall("post","".concat(b,"auth"),{userName:e,password:t})}},{key:"getEvents",value:function(){return console.log(this.token),this.authenticatedCall("get",b)}},{key:"addEvent",value:function(e,t,a,n,l){return this.authenticatedCall("post",b,{eventName:e,eventLocation:t,eventDetails:a,eventDate:n,price:l})}},{key:"removeEvent",value:function(e){return this.authenticatedCall("delete","".concat(b).concat(e))}},{key:"updateEvent",value:function(e,t,a,n,l,r){return this.authenticatedCall("put","".concat(b).concat(e),{eventName:t,eventLocation:a,eventDetails:n,eventDate:l,price:r})}}]),e}();var g=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"loginarea"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"loginpage-header"},"Event Search"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"loginheader"},"Login"),l.a.createElement("br",null),l.a.createElement("div",{className:"logininput"},l.a.createElement("form",{onSubmit:function(t){return function(t){console.log("submit"),t.preventDefault(),c(!0),e.client.login(t.target.username.value,t.target.password.value).then((function(t){c(!1),e.loggedIn(t.data.token)})).catch((function(e){alert("An eeror has occured, pleae try again later"),console.log("Login error",e),c(!1)}))}(t)}},"Username",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",disabled:r}),l.a.createElement("br",null),"Password",l.a.createElement("br",null),l.a.createElement("input",{type:"password",name:"password",disabled:r}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"login-submitButton"},l.a.createElement("button",{className:"login-submit",type:"submit",disabled:r}," ","Submit"," "))))))};var h=function(){var e=Object(n.useState)(window.localStorage.getItem("token")),t=Object(u.a)(e,2),a=t[0],r=t[1],c=new p(a,(function(){window.localStorage.removeItem("token"),r(void 0)}));return l.a.createElement(l.a.Fragment,null,a?l.a.createElement(m,{client:c}):l.a.createElement(g,{loggedIn:function(e){window.localStorage.setItem("token",e),r(e)},client:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.18dac37b.chunk.js.map