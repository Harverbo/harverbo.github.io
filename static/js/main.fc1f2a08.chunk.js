(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,r){e.exports=r.p+"static/media/Proofread.16da654a.jpg"},function(e,a,r){e.exports=r.p+"static/media/carrionlogo.68819cca.png"},,,function(e,a,r){e.exports=r.p+"static/media/harold.3363d5c5.jpg"},function(e,a,r){e.exports=r.p+"static/media/article-write.2ef0ce6b.jpg"},function(e,a,r){e.exports=r(19)},,,,,,function(e,a,r){},function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(9),c=r.n(o),l=(r(18),r(1)),i=r(2),s=r(4),m=r(3),u=r(5),p=r(10),d=r.n(p),f=function(e){return n.a.createElement("header",null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/Harverbo"},n.a.createElement("i",{className:"fab fa-facebook-f"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HaroldAHatake"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/haroldhatake/"},n.a.createElement("i",{className:"fab fa-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/harverbo/"},n.a.createElement("i",{className:"fab fa-linkedin-in"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fiverr.com/harverbo"},n.a.createElement("i",{className:"fiverr"},"Fi"))))),n.a.createElement("div",{className:"foto"},n.a.createElement("img",{src:d.a,alt:"Foto de Harold"})),n.a.createElement("h1",null,e.titulo),n.a.createElement("h2",null,n.a.createElement("span",null,"Desarrollador Web BackEnd"),n.a.createElement("span",null,"(PHP ",n.a.createElement("i",{className:"fab fa-php"})," - Laravel ",n.a.createElement("i",{className:"fab fa-laravel"})," - ReactJS ",n.a.createElement("i",{className:"fab fa-react"}),")")))},b=function(e){var a="Imagen de proyecto ".concat(e.proyecto.nombre);return n.a.createElement("div",{className:"carta"},n.a.createElement("h3",null,e.proyecto.nombre),n.a.createElement("img",{src:e.proyecto.img,alt:a,className:"logo-proyectos"}),n.a.createElement("p",null,e.proyecto.descripcion),n.a.createElement("a",{href:e.proyecto.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Visitar"))},E=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Proyectos"),n.a.createElement("article",null,this.props.proyectos.map(function(e){return n.a.createElement(b,{key:e.nombre,proyecto:e})})))}}]),a}(t.Component),h=function(e){var a="Imagen de servicio ".concat(e.servicio.nombre);return n.a.createElement("div",{className:"carta"},n.a.createElement("h3",null,e.servicio.nombre),n.a.createElement("img",{src:e.servicio.img,alt:a,className:"logo-proyectos"}),n.a.createElement("p",null,e.servicio.descripcion),n.a.createElement("a",{href:e.servicio.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Solicitar"))},v=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Servicios"),n.a.createElement("article",null,this.props.servicios.map(function(e){return n.a.createElement(h,{key:e.nombre,servicio:e})})))}}]),a}(t.Component),w=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Aprendizaje"),n.a.createElement("article",null,e.aprendizaje.map(function(e){return n.a.createElement("div",{className:"carta",key:e.url},n.a.createElement("h3",null,e.nombre),n.a.createElement("p",null,e.descripcion),n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Ver certificado"))})))},g=function(e){var a=e.mensaje;return n.a.createElement("div",null,n.a.createElement("p",{className:"error"},a))},j=function(e){function a(){var e,r;Object(l.a)(this,a);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return(r=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={error:!1},r.nombreRef=n.a.createRef(),r.correoRef=n.a.createRef(),r.mensajeRef=n.a.createRef(),r.contactMsg=function(e){e.preventDefault();var a={nombre:r.nombreRef.current.value,correo:r.correoRef.current.value,mensaje:r.mensajeRef.current.value};if(""!==a.nombre&&""!==a.correo&&""!==a.mensaje){var t={user_name:a.nombre,user_email:a.correo,text:a.mensaje};window.emailjs.send("default_service","harverbo",t).then(function(e){console.log("SUCCESS!",e.status,e.text)},function(e){console.log("FAILED...",e)})}else r.setState({error:!0},function(){setTimeout(function(){r.setState({error:!1})},3e3)})},r}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.error?n.a.createElement(g,{mensaje:"Todos los campos son obligatorios"}):"";return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Contacto"),n.a.createElement("article",null,n.a.createElement("div",{className:"carta"},e,n.a.createElement("form",{onSubmit:this.contactMsg},n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"nombre"},"Nombre"),n.a.createElement("input",{className:"form-control",ref:this.nombreRef,type:"text",id:"nombre",placeholder:"Nombre de pila"})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"correo"},"Correo"),n.a.createElement("input",{className:"form-control",ref:this.correoRef,type:"email",id:"correo",placeholder:"Correo electr\xf3nico"})),n.a.createElement("div",{className:"input-field"},n.a.createElement("label",{htmlFor:"mensaje"},"Mensaje"),n.a.createElement("textarea",{className:"form-control",ref:this.mensajeRef,id:"mensaje",cols:"30",rows:"10",placeholder:"Mensaje"})),n.a.createElement("div",{className:"input-field input-btn"},n.a.createElement("input",{type:"submit",className:"btn",value:"Enviar"}))))))}}]),a}(t.Component),y=r(7),N=r.n(y),k=r(6),O=r.n(k),C=r(11),S=r.n(C),R=function(e){function a(){var e,r;Object(l.a)(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={proyectos:[],servicios:[],aprendizaje:[]},r.cargarProyectos=function(){var e=[{nombre:"Carri\xf3n Soluciones",img:N.a,descripcion:"Sitio web de la empresa Carri\xf3n Soluciones, dedicada a la venta e instalaci\xf3n de puertas automatizadas, operadores y shutters.",url:"http://www.carrionsoluciones.com"}],a=[{nombre:"Desarrollo de aplicaci\xf3n web",img:O.a,descripcion:"Desarrollo de sitio o aplicaci\xf3n web completa con OOP PHP, Laravel o ReactJS",url:"#"},{nombre:"Correcci\xf3n de BackEnd",img:O.a,descripcion:"Correcci\xf3n de cualquier funci\xf3n o parte de BackEnd de un sitio o aplicaci\xf3n web desarrollado en PHP o Laravel",url:"#"},{nombre:"Redacci\xf3n de art\xedculo",img:O.a,descripcion:"Redacci\xf3n de art\xedculo de cualquier tema",url:"https://www.fiverr.com/harverbo/write-a-400-or-more-words-spanish-article"},{nombre:"Correcci\xf3n de art\xedculo o documento",img:S.a,descripcion:"Correcci\xf3n de errores de cualquier art\xedculo o documento en espa\xf1ol",url:"https://www.fiverr.com/harverbo/proofread-or-edit-your-spanish-document"}],t=[{nombre:"Desarrollo Web Completo",img:N.a,descripcion:"Desarrollo Web Completo con HTML5, CSS3, JavaScript, JQuery, Ajax, PHP y MySQL",url:"https://www.udemy.com/certificate/UC-H16XIP7C/"}];r.setState({proyectos:e,servicios:a,aprendizaje:t})},r}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.cargarProyectos()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{titulo:"Harold Abreu Ram\xedrez"}),n.a.createElement(E,{proyectos:this.state.proyectos}),n.a.createElement(v,{servicios:this.state.servicios}),n.a.createElement(w,{aprendizaje:this.state.aprendizaje}),n.a.createElement(j,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.fc1f2a08.chunk.js.map