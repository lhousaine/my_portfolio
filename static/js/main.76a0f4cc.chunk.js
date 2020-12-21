(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{44:function(e,a,t){e.exports=t(56)},49:function(e,a,t){},50:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),i=t.n(r),l=(t(49),t(50),t(76)),c=t(77),s=t(78),m=t(87),u=t(79),p=Object(l.a)({header:{width:"100%",backgroundColor:"#203040",color:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",padding:"0.5rem"},links:{display:"flex",flexDirection:"row"},link:{display:"inline-block",justifyContent:"space-between",color:"#ffffff",textDecoration:"none",padding:"1rem","&:hover":{color:"#f1951c",textDecoration:"none"}}});function f(){var e=p();return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:e.header,id:"home"},o.a.createElement(c.a,null,o.a.createElement(s.a,{className:e.links},o.a.createElement(m.a,{className:"current"},o.a.createElement(u.a,{className:e.link,href:"#"},"Home")),o.a.createElement(m.a,null,o.a.createElement(u.a,{className:e.link,href:"#about"},"About")),o.a.createElement(m.a,null,o.a.createElement(u.a,{className:e.link,href:"#resume"},"Resume")),o.a.createElement(m.a,null,o.a.createElement(u.a,{className:e.link,href:"#portfolio"},"Works")),o.a.createElement(m.a,null,o.a.createElement(u.a,{className:e.link,href:"#contact"},"Contact"))))))}var d=t(23),h=Object(l.a)({about:{backgroundColor:"#7B17E5",color:"white",display:"flex",flexDirection:"row"},aboutChilds:{paddingRight:"10px"},aboutme:{fontFamily:"Times New Roman , Times, serif",paddingLeft:"20px",color:"#c9c9c9"},childElement:{paddingLeft:"20px",color:"#c9c9c9"}});function g(e){var a=h(),t=a.about,n=a.aboutChilds,r=a.aboutme,i=a.childElement,l=e.resumeData;return o.a.createElement("section",{id:"about",className:t},o.a.createElement(c.a,{className:n},o.a.createElement("img",{className:"profile-pic",src:"/my_portfolio/imgs/profile.jpg",alt:"My Profile Images"})),o.a.createElement(c.a,{className:n},o.a.createElement(d.a,{color:"inherit",variant:"h3",component:"h2"},"About Me"),o.a.createElement(d.a,{className:r,variant:"h4",component:"p"},l.aboutme),o.a.createElement(d.a,{color:"inherit",variant:"h3",component:"h2"},"Contact Details"),o.a.createElement(c.a,{className:i},o.a.createElement(d.a,{variant:"h4",component:"p"},l.name),o.a.createElement(d.a,{variant:"h4",component:"p"},l.address),o.a.createElement(d.a,{variant:"h4",component:"p"},l.phone_number),o.a.createElement(d.a,{variant:"h4",component:"p"},l.email))))}var E=t(84),v=t(80),k=Object(l.a)({education:{backgroundColor:"#FBFBFB",borderRadius:"20px",color:"201A23",display:"flex",flexDirection:"column",padding:"5px"},title:{color:"201A23",textAlign:"center"},formationDetails:{paddingLeft:"10px","& .university":{fontWeight:"bold",fontSize:"20px"}},achievement:{color:"#fff",backgroundColor:"#813273",marginTop:"5px",fontWeight:"bold",borderRadius:"10px","&:hover":{background:"#fff",color:"#202020"}}});function b(e){var a=e.education,t=k();return o.a.createElement(E.a,{className:t.education},o.a.createElement(d.a,{variant:"h1",component:"h2",className:t.title},"Education"),o.a.createElement(E.a,null,a&&a.map((function(e){return o.a.createElement(E.a,null,o.a.createElement(d.a,{variant:"h4",component:"h4",color:"primary"},e.degree),o.a.createElement(E.a,{className:t.formationDetails},o.a.createElement(d.a,{className:"university"},e.UniversityName),o.a.createElement(d.a,{variant:"h4",component:"h4",className:"date"},e.DateOfIntegrating," - ",e.DateOfGraduating),o.a.createElement(d.a,{variant:"h4",component:"h4",className:"info"},e.specialization),o.a.createElement(s.a,null,e.Achievements&&e.Achievements.map((function(e){return o.a.createElement(m.a,{variant:"h2",className:t.achievement},o.a.createElement(v.a,{primary:e}))})))))}))))}var y=Object(l.a)((function(e){return{works:{backgroundColor:"#FBFBFB",borderRadius:"20px",color:"201A23",display:"flex",flexDirection:"column",padding:"5px"},title:{color:"201A23",textAlign:"center"},specialization:{fontWeight:"bold",fontSize:"20px"},achievement:{color:"#000",margin:"0 20px",fontWeight:"bold",fontSize:"20px",padding:0},tool:{color:"#fff",backgroundColor:"#813273",marginTop:"5px",fontWeight:"bold",borderRadius:"10px","&:hover":{background:"#fff",color:"#202020"}}}}));function N(e){var a=e.works,t=y();return o.a.createElement(E.a,{className:t.works},o.a.createElement(d.a,{variant:"h1",component:"h2",className:t.title},"Work and Experiences"),o.a.createElement(E.a,null,a&&a.map((function(e){return o.a.createElement(E.a,null,o.a.createElement(E.a,null,o.a.createElement(d.a,{variant:"h3",component:"h4",color:"primary"},e.CompanyName),o.a.createElement(d.a,{variant:"p",className:t.specialization},e.specialization,o.a.createElement("span",null,"\u2022")," ",o.a.createElement("em",{className:"date"},e.MonthOfLeaving," - ",e.YearOfLeaving)),o.a.createElement(E.a,null,o.a.createElement(d.a,{variant:"h4",component:"h4"},o.a.createElement("i",null,e.theme)),o.a.createElement(s.a,{component:"nav",className:t.list},e.Achievements&&e.Achievements.map((function(e){return o.a.createElement(m.a,{className:t.achievement},o.a.createElement(v.a,{primary:e}))}))),e.Tools?o.a.createElement(d.a,{variant:"h3"},o.a.createElement("b",null,"Tools :")):"",o.a.createElement("ul",{className:"tools"},e.Tools&&e.Tools.map((function(e){return o.a.createElement(m.a,{variant:"h3",className:t.tool},o.a.createElement(v.a,{primary:e}))}))))))}))))}var A=Object(l.a)({skills:{backgroundColor:"#FBFBFB",borderRadius:"20px",color:"201A23",display:"flex",flexDirection:"column",padding:"5px"},title:{color:"201A23",textAlign:"center"},skill:{color:"#fff",backgroundColor:"#813273",marginTop:"5px",borderRadius:"10px","&:hover":{background:"#fff",color:"#202020"}}});function x(e){var a=A(),t=e.skills;return o.a.createElement(E.a,{className:a.skills},o.a.createElement(d.a,{variant:"h1",component:"h2",className:a.title},"Skills"),o.a.createElement(E.a,null,o.a.createElement(s.a,{component:"nav",className:a.root},t&&t.map((function(e){return o.a.createElement(m.a,{variant:"h3",className:a.skill},o.a.createElement(v.a,{primary:e.skillname}))})))))}var D=Object(l.a)({resumeLinks:{width:"100%",display:"flex",flexDirection:"row","& a":{display:"block",width:"100%",textDecoration:"none",textlign:"center",color:"#a19a7b"}},inactiveLink:{pointerEvents:"none",cursor:"default",color:"#ffffff"},"@keyframes animateLink":{"0%":{color:"#ff8800"},"25%":{color:"red"},"50%":{color:"blue"},"75%":{color:"#103610"},"100%":{color:"#ffffff"}},activeLink:{animationName:"$animateLink",animationDuration:"5s",animationIterationCount:"infinite"}});function S(){var e=D();return o.a.createElement(E.a,{className:e.resumeLinks},o.a.createElement(u.a,{href:"/my_portfolio/resume_LhoussaineOUARHOU.pdf",target:"_blank",rel:"noopener noreferrer",className:e.inactiveLink},o.a.createElement(d.a,{variant:"h3",gutterBottom:!0},"Download Resume :")),o.a.createElement(u.a,{href:"/my_portfolio/cv_LhoussaineOUARHOU.pdf",target:"_blank",rel:"noopener noreferrer",className:e.activeLink},o.a.createElement(d.a,{variant:"h4",gutterBottom:!0},"French Version")),o.a.createElement(u.a,{href:"/my_portfolio/resume_LhoussaineOUARHOU.pdf",target:"_blank",rel:"noopener noreferrer",className:e.activeLink},o.a.createElement(d.a,{variant:"h4",gutterBottom:!0},"English Version")))}var w=Object(l.a)({resume:{backgroundColor:"#00A5D0",color:"#010101"},resumeContent:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"nowrap"}});function C(e){var a=e.resumeData,t=w();return o.a.createElement("section",{id:"resume",className:t.resume},o.a.createElement(E.a,{className:t.resumeContent},o.a.createElement(b,{education:a.education}),o.a.createElement(N,{works:a.work}),o.a.createElement(x,{skills:a.skills})),o.a.createElement(S,null))}var O=t(86),L=t(81),I=t(83),M=t(82),W=Object(l.a)({portfolio:{backgroundColor:"#8D99AE"},title:{color:"#000",textAlign:"center",fontWeight:"bold"},portfolioWorks:{textAlign:"center"},portfolioWork:{width:"40%",height:"400px",display:"inline-block",margin:"0 2%"},card:{maxWidth:500,minWidth:300},media:{height:300,minHeight:140,width:"100%"}});function B(e){var a=W(),t=e.resumeData;return o.a.createElement("section",{id:"portfolio",className:a.portfolio},o.a.createElement(E.a,null,o.a.createElement(d.a,{className:a.title,variant:"h2",component:"p"},"Check Out Some of My Works."),o.a.createElement(E.a,{className:a.portfolioWorks},t.portfolio&&t.portfolio.map((function(e){return o.a.createElement(E.a,{m:1,p:1,display:"flex",flexWrap:"nowrap",alignContent:"flex-start",className:a.portfolioWork},o.a.createElement(O.a,{className:a.card},o.a.createElement(L.a,null,o.a.createElement(M.a,{className:a.media,image:"/my_portfolio"+e.imgurl,title:"Contemplative Reptile"}),o.a.createElement(I.a,null,o.a.createElement(d.a,{gutterBottom:!0,variant:"h4",component:"h2"},e.name),o.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"h5"},e.description)))))})))))}var R=t(34),z=t.n(R),T=t(35),F=t.n(T),P=t(36),J=t.n(P),j=t(37),H=t.n(j),_=Object(l.a)({contactMe:{backgroundColor:"#203040",color:"white"},title:{textAlign:"center"},contactContents:{padding:"0 40%"},contacts:{listStyleType:"none"},contact:{textDecoration:"solid",textDecorationLine:"none",color:"#ffffff",fontSize:"medium",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontStyle:"inherit",display:"flex",flexDirection:"row"},icon:{color:"#ff2873",textAlign:"center"},contactText:{marginLeft:"10%"}});function G(e){var a=_(),t=e.resumeData;return o.a.createElement("section",{id:"contact",className:a.contactMe},o.a.createElement(c.a,{className:a.title},o.a.createElement(d.a,{variant:"h3",gutterBottom:!0},"Feel free to contact me for any work or suggestions below:")),o.a.createElement(c.a,{className:a.contactContents},o.a.createElement(s.a,{className:a.contacts},t.contacts&&t.contacts.map((function(e){return o.a.createElement(m.a,{key:e.name},o.a.createElement(u.a,{className:a.contact,href:e.url,rel:"noopener noreferrer",target:"_blank"},function(e){switch(e){case"linkedIn":return o.a.createElement(z.a,{className:a.icon,color:"secondary",fontSize:"large"});case"github":return o.a.createElement(F.a,{className:a.icon,color:"secondary",fontSize:"large"});case"gmail":return o.a.createElement(J.a,{className:a.icon,color:"secondary",fontSize:"large"});case"phoneNumber":return o.a.createElement(H.a,{className:a.icon,color:"secondary",fontSize:"large"});case"upWork":return o.a.createElement(d.a,{className:a.icon,variant:"h3",component:"h1",fontSize:"large"},"uPw");default:return o.a.createElement(d.a,null," ")}}(e.name),o.a.createElement(d.a,{className:a.contactText,variant:"h4",component:"p"},e.userId)))})))))}var U={imagebaseurl:"https://lhoussaine-ouarhou.github.io/",name:"OUARHOU Lhoussaine",role:"Full Satck Developer",contacts:[{name:"phoneNumber",userId:"(+212)603708829"},{name:"gmail",url:"l.ouarhou.ensa@gmail.com",userId:"l.ouarhou.ensa@gmail.com"},{name:"linkedIn",url:"https://www.linkedin.com/in/lhoussaine-ouarhou/",userId:"@lhoussaine ouarhou"},{name:"github",url:"http://github.com/lhousaine",userId:"lhousaine"},{name:"upWork",url:"https://www.upwork.com/freelancers/~010088e6cba5d43556",userId:"@lhoussaine ouarhou"}],skypeid:"lhoussaine ouarhou",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/lhoussaine-ouarhou/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/lhousaine",className:"fa fa-github"}],aboutme:"I am a computer sciences engineer , graduated from the National School of Applied Sciences of Marrakech. I am interested in full-stack development & Microservices Architectures and everything in its orbit. I like to learn and create web applications in various parts of software development and like to learn about new technologies.",address:"DR AIT ALLA TAZARINE ZAGORA, MAROC",website:"https://lhousaine.github.io",phone_number:"(+212)603708829",email:"l.ouarhou.ensa@gmail.com",education:[{degree:"Computer Sciences Engineer",UniversityName:"National School of Applied Sciences of Marrakech",specialization:"Computer Science",DateOfIntegrating:"September 2015",DateOfGraduating:"June 2020",Achievements:["3rd year Engineer's cycle","2 years preparatory cycle"]},{degree:"Bachelor's degree",UniversityName:"Sidi Amrou High School Tazarine zagora",specialization:"Physics Science ",DateOfIntegrating:"September 2012",DateOfGraduating:"June 2015"}],work:[{CompanyName:"SQLI ISC MAROC",specialization:"Developer Java/JEE/Microservices- Intern",MonthOfLeaving:"March - August",YearOfLeaving:"2020",theme:"Study and implementing of a Service Mesh solution, in an e-commerce context.",Achievements:["Study and comparison of Service Mesh solutions.","Design and development of an e-commerce application under the microservices architecture.","Deployment and integration of the best mesh service solution (Istio). "],Tools:["Service mesh solutions : Istio, Linkerd2, Consul.","Development technologies: Spring, Nodejs, JWT, MySQL, mongoDB, Redis, RabbitMQ, ... ","Payment : Stripe","Deployment technologies: docker, Kubernetes(Helm), Azure(AKS)..."]},{CompanyName:"Mohammed VI Polytechnic University Ben Guerir",specialization:"Web Developer-Intern",MonthOfLeaving:"Jully - August",YearOfLeaving:"2019",theme:"Web Development:",Achievements:["Axis 1: Creation Under WordPress of the SIMLAB Department Website, and Configuration of its deployment in a nginx server.","Axis 2: Study and Design of a web service for dynamic inventory analysis and management."]},{CompanyName:"National School of Applied Sciences of Marrakech",specialization:"Web Developer-Intern",MonthOfLeaving:"Jully - September",YearOfLeaving:"2018",theme:"Web Development:",Achievements:["Development of a news website with (HTML, CSS, JS, AngularJS, MySQL, and PHP)"]}],skillsDescription:"my professional skills",skills:[{skillname:"Java"},{skillname:"JEE (JPA, JSP, Hibernate, Struts,JSF)"},{skillname:"Spring(Boot,Data, MVC, Security, Batch, WebFlux, AOP)"},{skillname:"Javascript/Typescript"},{skillname:"Node.js/ExpressJS"},{skillname:"Angular"},{skillname:"NGXS"},{skillname:"Reactjs"},{skillname:"Redux"},{skillname:"HTML5"},{skillname:"CSS (Bootstrap)"},{skillname:"Docker"},{skillname:"Kubernetes (Helm)"},{skillname:"Gitlab CI/CD"},{skillname:"Cloud Plateforms (Azure, IBM, GCP)"},{skillname:"Service mesh (Istio, Linkerd2, Consul)"},{skillname:"Git, Gitlab, Github"},{skillname:"Databases: MySQL, MongoDB, Oracle,Postres, Firebaser"},{skillname:"Familiar with Android, Flutter, Python(Flask), PHP"}],portfolio:[{name:"um6p Intern",description:"the Home page of SIMLAB Site Web Application ",imgurl:"/imgs/AccueilSiteWebSimlab.png"},{name:"Trending Repositories web Application",description:"A web application developped in Microservices Architecture, It's an application for statics of trending repositories In Github",imgurl:"/imgs/trendingRepositoriesApp.png"},{name:"Bank Web App",description:"Design And development of a Web Application for managing on bank",imgurl:"/imgs/bankApp.png"},{name:"Gym Desktop App",description:"Design And development of a Desktop Application for Gym Management ",imgurl:"/imgs/gymDesktopApp.png"}]};function Q(){return Object(n.useEffect)((function(){return document.title="Portfolio OUARHOU lhoussaine",function(){}}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(g,{resumeData:U}),o.a.createElement(C,{resumeData:U}),o.a.createElement(B,{resumeData:U}),o.a.createElement(G,{resumeData:U}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.76a0f4cc.chunk.js.map