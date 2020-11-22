(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{39:function(e,a,t){e.exports=t(51)},44:function(e,a,t){},45:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),o=t.n(r),i=(t(44),t(20)),s=t(21),c=t(26),m=t(25);t(45);function u(e){e.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("div",{className:"header-links"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact"))))))}var p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about",className:"about"},l.a.createElement("div",null,l.a.createElement("img",{className:"profile-pic",src:"/my_portfolio/imgs/profile.jpg",alt:"My Profile Images"})),l.a.createElement("div",{className:"main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.phone_number))))))}}]),t}(n.Component),d=t(70);function h(e){var a=e.resumeData;return l.a.createElement("section",{id:"resume",className:"resume"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("div",{className:"education"},l.a.createElement("div",{className:"header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",null,a.education&&a.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("p",null,l.a.createElement("b",null,e.degree)),l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"date"},e.DateOfIntegrating," - ",e.DateOfGraduating),l.a.createElement("p",{className:"info"},e.specialization),l.a.createElement("ul",null,e.Achievements&&e.Achievements.map((function(e){return l.a.createElement("li",null,e)})))))})))),l.a.createElement("div",{className:"works"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work and Experinces"))),l.a.createElement("div",{className:"nine columns main-col"},a.work&&a.work.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," - ",e.YearOfLeaving)),l.a.createElement("p",null,l.a.createElement("h4",null,e.theme),l.a.createElement("ul",{className:"achievements"},e.Achievements&&e.Achievements.map((function(e){return l.a.createElement("li",null,e)}))),e.Tools?l.a.createElement("h4",null,"Tools :"):"",l.a.createElement("ul",{className:"tools"},e.Tools&&e.Tools.map((function(e){return l.a.createElement("li",null,e)}))))))})))),l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"columns"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},a.skills&&a.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))),l.a.createElement("div",{className:"resume-link"},l.a.createElement("a",{href:"/my_portfolio/resume.pdf",target:"_blank"},l.a.createElement(d.a,{variant:"h3",gutterBottom:!0},"Download Resume"))))}var E=t(71),f=t(74),g=t(77),v=t(75),k=t(73),b=t(72);function N(e){var a=Object(E.a)({root:{maxWidth:500,minWidth:300},media:{height:300,minHeight:140}})(),t=e.resumeData;return l.a.createElement("section",{id:"portfolio",className:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"title"},"Check Out Some of My Works."),l.a.createElement("div",{className:"portfolio_works"},t.portfolio&&t.portfolio.map((function(e){return l.a.createElement(f.a,{m:1,p:1,className:"portfolio-work"},l.a.createElement(g.a,{className:a.root},l.a.createElement(v.a,null,l.a.createElement(b.a,{className:a.media,image:"/my_portfolio"+e.imgurl,title:"Contemplative Reptile"}),l.a.createElement(k.a,null,l.a.createElement(d.a,{gutterBottom:!0,variant:"h4",component:"h2"},e.name),l.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"h5"},e.description)))))})))))}var y=t(30),A=t.n(y),S=t(31),w=t.n(S),D=t(32),M=t.n(D),I=t(33),O=t.n(I),C=Object(E.a)({root:{width:"100%",maxWidth:1e3}});function L(e){var a=C(),t=e.resumeData;return l.a.createElement("section",{id:"contact",className:"contactMe"},l.a.createElement("div",{className:a.root},l.a.createElement(d.a,{variant:"h4",gutterBottom:!0},"Feel free to contact me for any work or suggestions below:")),l.a.createElement("div",null,l.a.createElement("aside",null,l.a.createElement("ul",{className:"contacts"},t.contacts&&t.contacts.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{className:"contact",href:e.url,target:""},l.a.createElement("span",null,"  ",function(e){switch(e){case"linkedIn":return l.a.createElement(A.a,{color:"secondary",fontSize:"large"});case"github":return l.a.createElement(w.a,{color:"secondary",fontSize:"large"});case"gmail":return l.a.createElement(M.a,{color:"secondary",fontSize:"large"});case"phoneNumber":return l.a.createElement(O.a,{color:"secondary",fontSize:"large"});case"upWork":return l.a.createElement("h4",{style:{display:"inline",color:"#ff2873"}},"UPW");default:return l.a.createElement("h1",null," ")}}(e.name),"   "),l.a.createElement("span",null,e.userId)))}))))))}var W={imagebaseurl:"https://lhoussaine-ouarhou.github.io/",name:"OUARHOU Lhoussaine",role:"Full Satck Developer",contacts:[{name:"phoneNumber",userId:"(+212)603708829"},{name:"gmail",url:"l.ouarhou.ensa@gmail.com",userId:"l.ouarhou.ensa@gmail.com"},{name:"linkedIn",url:"https://www.linkedin.com/in/lhoussaine-ouarhou/",userId:"@lhoussaine ouarhou"},{name:"github",url:"http://github.com/lhousaine",userId:"lhousaine"},{name:"upWork",url:"https://www.upwork.com/freelancers/~010088e6cba5d43556",userId:"@lhoussaine ouarhou"}],skypeid:"lhoussaine ouarhou",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/lhoussaine-ouarhou/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/lhousaine",className:"fa fa-github"}],aboutme:"I am a computer sciences engineer , graduated from the National School of Applied Sciences of Marrakech. I am interested in full-stack development & Microservices Architectures and everything in its orbit.I like to learn and create web applications in various parts of software development and like to learn about new technologies.",address:"DR AIT ALLA TAZARINE ZAGORA, MAROC",website:"https://lhousaine.github.io",phone_number:"(+212)603708829",education:[{degree:"Computer Sciences Engineer",UniversityName:"National School of Applied Sciences of Marrakech",specialization:"Computer Science",DateOfIntegrating:"September 2015",DateOfGraduating:"June 2020",Achievements:["3rd year Engineer's cycle","2 years preparatory cycle"]},{degree:"Bachelor's degree",UniversityName:"Sidi Amrou High School Tazarine zagora",specialization:"Physics Science ",DateOfIntegrating:"September 2012",DateOfGraduating:"June 2015"}],work:[{CompanyName:"SQLI ISC MAROC",specialization:"Developer Java/JEE/Microservices- Intern",MonthOfLeaving:"March - August",YearOfLeaving:"2020",theme:"Study and implementing of a Service Mesh solution, in an e-commerce context.",Achievements:["Study and comparison of Service Mesh solutions.","Design and development of an e-commerce application under the microservices architecture.","Deployment and integration of the best mesh service solution (Istio). "],Tools:["Service mesh solutions : Istio, Linkerd2, Consul.","Development technologies: Spring, Nodejs, JWT, MySQL, mongoDB, Redis, RabbitMQ, ... ","Payment : Stripe","Deployment technologies: docker, Kubernetes(Helm), Azure(AKS)..."]},{CompanyName:"Mohammed VI Polytechnic University Ben Guerir",specialization:"Web Developer-Intern",MonthOfLeaving:"Jully - August",YearOfLeaving:"2019",theme:"Web Programming:",Achievements:["Axis 1: Creation Under WordPress of the SIMLAB Department Website, and Configuration of its deployment in a nginx server.","Axis 2: Study and Design of a web service for dynamic inventory analysis and management."]},{CompanyName:"National School of Applied Sciences of Marrakech",specialization:"Web Developer-Intern",MonthOfLeaving:"Jully - September",YearOfLeaving:"2018",theme:"Web Programming:",Achievements:["Development of a news website with (HTML, CSS, JS, AngularJS, MySQL, and PHP)"]}],skillsDescription:"my professional skills",skills:[{skillname:"Java"},{skillname:"JEE (JPA, JSP, Hibernate, Struts,JSF)"},{skillname:"Spring and it's Modules(Boot,Data, MVC, Security, Batch, WebFlux, AOP)"},{skillname:"Javascript/Typescript"},{skillname:"Node.js/ExpressJS"},{skillname:"Angular"},{skillname:"NGXS"},{skillname:"Reactjs"},{skillname:"Redux"},{skillname:"HTML5"},{skillname:"CSS (Bootstrap)"},{skillname:"Docker"},{skillname:"Kubernetes (Helm)"},{skillname:"Gitlab CI/CD"},{skillname:"Cloud Plateforms (Azure, IBM, GCP)"},{skillname:"Service mesh (Istio, Linkerd2, Consul)"},{skillname:"Git, Gitlab, Github"},{skillname:"Databases: MySQL, MongoDB, Oracle,Postres, Firebaser"},{skillname:"Familiar with Android, Flutter, Python(Flask), PHP"}],portfolio:[{name:"um6p Intern",description:"the Home page of SIMLAB Site Web Application ",imgurl:"/imgs/AccueilSiteWebSimlab.png"},{name:"Trending Repositories web Application",description:"A web application developped in Microservices Architecture, It's an application for statics of trending repositories In Github",imgurl:"/imgs/trendingRepositoriesApp.png"},{name:"Bank Web App",description:"Design And development of a Web Application for managing on bank",imgurl:"/imgs/bankApp.png"},{name:"Gym Desktop App",description:"Design And development of a Desktop Application for Gym Management ",imgurl:"/imgs/gymDesktopApp.png"}]},P=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Portfolio OUARHOU lhoussaine"}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{resumeData:W}),l.a.createElement(p,{resumeData:W}),l.a.createElement(h,{resumeData:W}),l.a.createElement(N,{resumeData:W}),l.a.createElement(L,{resumeData:W}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.41c927c8.chunk.js.map