(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{88:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),c=n(31),s=n.n(c),r=n(11),l=n(12),o=n(14),j=n(13),d=n(118),b=n(119),h=n(111),p=n(120),x=n(15),u=n.n(x),f=n(16),O=n(17),m=n.n(O),y=n(112),g=n(124),v=n(55),k=n.n(v),w=n(56),S=n.n(w),L=n(57),C=n.n(L),_=n(58),z=n.n(_),R=(n(88),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,fbIconColor:"#3b5998",twitterIconColor:"#00acee",instaIconColor:"#405de6",linkeinIconColor:"#0e76a8"},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/profile");case 2:(t=e.sent).status&&this.setState({fullname:t.data.fullname,position:t.data.position,currcompany:t.data.currcompany,city:t.data.city,state:t.data.state,emailid:t.data.emailid,facebookURL:t.data.facebookURL,twitterURL:t.data.twitterURL,instagramURL:t.data.instagramURL,linkedinURL:t.data.linkedinURL,profilePic:t.data.profilePic,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(a.jsx)("div",{className:"profile__parent__div",children:Object(a.jsx)(h.a,{})}):Object(a.jsx)("div",{className:"profile__parent__div",children:Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsx)(y.a,{item:!0,xs:12,md:2,children:Object(a.jsx)(g.a,{className:"profile__avatar",alt:"SP",src:this.state.profilePic})}),Object(a.jsxs)(y.a,{item:!0,xs:12,md:8,className:"profile__text",children:[Object(a.jsxs)("h2",{children:["Hey, I am ",this.state.fullname]}),Object(a.jsxs)(h.a,{children:["I am currently based out of ",this.state.city,",",this.state.state," ","working @",Object(a.jsx)("b",{children:this.state.currcompany})," as ",this.state.position,"."]}),Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsx)(y.a,{item:!0,xs:12,className:"profile__text",children:Object(a.jsx)(h.a,{style:{color:"green",fontWeight:"bold",fontSize:"15px"},children:"Connect with me on:"})}),Object(a.jsxs)(y.a,{item:!0,xs:12,children:[Object(a.jsx)("a",{href:this.state.facebookURL,target:"_blank",children:Object(a.jsx)(k.a,{style:{color:this.state.fbIconColor,fontSize:"40px",padding:"10px"}})}),Object(a.jsx)("a",{href:this.state.twitterURL,target:"_blank",children:Object(a.jsx)(S.a,{style:{color:this.state.twitterIconColor,fontSize:"40px",padding:"10px"}})}),Object(a.jsx)("a",{href:this.state.instagramURL,target:"_blank",children:Object(a.jsx)(C.a,{style:{color:this.state.instaIconColor,fontSize:"40px",padding:"10px"}})}),Object(a.jsx)("a",{href:this.state.linkedinURL,target:"_blank",children:Object(a.jsx)(z.a,{style:{color:this.state.linkeinIconColor,fontSize:"40px",padding:"10px"}})})]})]})]})]})})}}]),n}(i.Component)),U=n(113),I=n(114),W=n(28),A=n.n(W),T=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,data:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/projects");case 2:(t=e.sent).status&&this.setState({data:t.data,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Projects"}),Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsx)(y.a,{item:!0,xs:12,md:5,style:{margin:"10px"},children:this.state.data.map((function(e,t){return t%2===0?Object(a.jsxs)(U.a,{elevation:10,children:[Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(h.a,{componen:"h6",variant:"h6",style:{fontWeight:"bold"},children:[e.title," "]}),Object(a.jsxs)(h.a,{children:["Status:"," ","Live"===e.status?Object(a.jsx)("b",{style:{fontSize:"14px",color:"green"},children:e.status}):Object(a.jsx)("b",{style:{fontSize:"12px",color:"black"},children:e.status})]})]}),Object(a.jsx)(I.a,{style:{paddingTop:"0px",marginTop:"0px"},children:e.description}),Object(a.jsxs)(I.a,{style:{paddingTop:"0px",marginTop:"0px"},children:[Object(a.jsxs)("a",{href:e.githubURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#388E3C",fontWeight:"bold",display:"inline-block"},children:["Github repo",Object(a.jsx)(A.a,{style:{display:"inline-block",float:"left",fontSize:"17px"}})]}),"null"===e.websiteURL?"":Object(a.jsxs)("a",{href:e.websiteURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#388E3C",fontWeight:"bold",display:"inline-block",marginLeft:"10px"},children:["Website",Object(a.jsx)(A.a,{style:{display:"inline-block",float:"left",fontSize:"17px"}})]})]})]},t):null}))}),Object(a.jsx)(y.a,{item:!0,xs:12,md:5,style:{margin:"10px"},children:this.state.data.map((function(e,t){return t%2===1?Object(a.jsxs)(U.a,{elevation:10,children:[Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(h.a,{componen:"h6",variant:"h6",style:{fontWeight:"bold"},children:[e.title," "]}),Object(a.jsxs)(h.a,{children:["Status:"," ","Live"===e.status?Object(a.jsx)("b",{style:{fontSize:"14px",color:"green"},children:e.status}):Object(a.jsx)("b",{style:{fontSize:"12px",color:"black"},children:e.status})]})]}),Object(a.jsx)(I.a,{style:{paddingTop:"0px",marginTop:"0px"},children:e.description}),Object(a.jsxs)(I.a,{children:[Object(a.jsxs)("a",{href:e.githubURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#388E3C",fontWeight:"bold",display:"inline-block"},children:["Github repo",Object(a.jsx)(A.a,{style:{display:"inline-block",float:"left",fontSize:"17px"}})]}),"null"===e.websiteURL?"":Object(a.jsxs)("a",{href:e.websiteURL,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#388E3C",fontWeight:"bold",display:"inline-block",marginLeft:"10px"},children:["Website",Object(a.jsx)(A.a,{style:{display:"inline-block",float:"left",fontSize:"17px"}})]})]})]},t):null}))})]})]})}}]),n}(i.Component),D=n(123),E=n(122),N=n(38),P=n.n(N),M=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,data:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/skills");case 2:(t=e.sent).status&&this.setState({data:t.data,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Technical Languanges / Frameworks"}),Object(a.jsxs)(y.a,{container:!0,children:[Object(a.jsx)(y.a,{item:!0,xs:12,md:2,children:this.state.data.map((function(e,t){if(t%3===0)return Object(a.jsxs)(E.a,{component:"fieldset",mb:3,children:[Object(a.jsx)(h.a,{component:"legend",children:e.skillcode}),Object(a.jsx)(D.a,{name:"customized-empty",style:{color:"#e53935"},defaultValue:e.value,precision:.5,emptyIcon:Object(a.jsx)(P.a,{fontSize:"inherit"}),disabled:!0})]},t)}))}),Object(a.jsx)(y.a,{item:!0,xs:12,md:2,children:this.state.data.map((function(e,t){if(t%3===1)return Object(a.jsxs)(E.a,{component:"fieldset",mb:3,children:[Object(a.jsx)(h.a,{component:"legend",children:e.skillcode}),Object(a.jsx)(D.a,{style:{color:"#e53935"},name:"customized-empty",defaultValue:e.value,value:e.value,precision:.5,emptyIcon:Object(a.jsx)(P.a,{fontSize:"inherit"}),disabled:!0})]},t)}))}),Object(a.jsx)(y.a,{item:!0,xs:12,md:3,children:this.state.data.map((function(e,t){if(t%3===2)return Object(a.jsxs)(E.a,{component:"fieldset",mb:3,children:[Object(a.jsx)(h.a,{component:"legend",children:e.skillcode}),Object(a.jsx)(D.a,{name:"customized-empty",style:{color:"#e53935"},defaultValue:e.value,precision:.5,emptyIcon:Object(a.jsx)(P.a,{fontSize:"inherit"}),disabled:!0})]},t)}))})]})]})}}]),n}(i.Component),F=n(115),V=n(125),G=n(117),J=n(116),q=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,data:[]},e.COLORS=["#c62828","#673AB7","#E64A19","#F57F17","#0091EA"],e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/timeline");case 2:(t=e.sent).status&&this.setState({data:t.data,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?Object(a.jsx)("div",{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{paddingLeft:"10px"},children:Object(a.jsx)("h2",{children:"Career Timeline"})}),Object(a.jsx)(F.a,{align:"left",style:{textAlign:"left",padding:"0px"},children:this.state.data.map((function(t,n){return Object(a.jsx)(U.a,{elevation:5,style:{margin:"5px",padding:"0px"},children:Object(a.jsx)(I.a,{children:Object(a.jsxs)(V.a,{style:{textAlign:"left",display:"inline-block"},children:[Object(a.jsx)(J.a,{style:{textAlign:"left",width:"50px"},children:Object(a.jsx)(h.a,{style:{fontWeight:"bold",color:e.COLORS[n%5],fontSize:"20px",width:"50px"},children:t.year})}),Object(a.jsxs)(G.a,{children:[Object(a.jsx)(h.a,{style:{fontWeight:"bold",color:"black"},children:t.title}),Object(a.jsx)("div",{children:t.summary.map((function(e,t){return Object(a.jsx)("div",{style:{color:"black"},children:"- "+e},t)}))})]})]},n)})},n)}))})]})}}]),n}(i.Component),B=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(d.a,{elevation:1,style:{backgroundColor:"white",color:"black"},children:Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{style:{color:"black",fontWeight:"bold",fontSize:"20px"},children:"Carpe diem"})})}),Object(a.jsxs)(p.a,{style:{marginTop:"70px"},children:[Object(a.jsx)(R,{}),Object(a.jsx)(q,{}),Object(a.jsx)(T,{}),Object(a.jsx)(M,{})]})]})}}]),n}(i.Component),H=(n(94),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(B,{})})}}]),n}(i.Component));s.a.render(Object(a.jsx)(H,{}),document.querySelector("#root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.2ff7f656.chunk.js.map