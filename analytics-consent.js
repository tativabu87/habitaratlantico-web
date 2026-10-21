/* Analytics is loaded only after explicit opt-in. */
(function(){
"use strict";
var ID="G-RXC8JQFFX7", KEY="ha_analytics_consent", en=document.documentElement.lang.toLowerCase().indexOf("en")===0;
var privacy=location.pathname.indexOf("/en/")===0?"/en/privacidad.html":"/privacidad.html";
function load(){
 if(window.__haAnalyticsLoaded){window["ga-disable-"+ID]=false;if(window.gtag)window.gtag("consent","update",{analytics_storage:"granted"});return;}window.__haAnalyticsLoaded=true;
 window["ga-disable-"+ID]=false;
 window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;
 gtag("consent","default",{analytics_storage:"denied"});
 gtag("consent","update",{analytics_storage:"granted"});
 gtag("js",new Date());gtag("config",ID,{anonymize_ip:true});
 var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(ID);document.head.appendChild(s);
 if(/\/(?:en\/)?gracias\.html$/.test(location.pathname)){try{if(!sessionStorage.getItem("ha_lead_sent")){gtag("event","generate_lead");sessionStorage.setItem("ha_lead_sent","1");}}catch(e){}}
}
function settings(){if(document.getElementById("ha-consent-settings"))return;var b=document.createElement("button");b.id="ha-consent-settings";b.type="button";b.textContent=en?"Cookie settings":"Configurar cookies";b.onclick=show;document.body.appendChild(b);}
function choose(v){try{localStorage.setItem(KEY,v);}catch(e){}if(v==="accepted"){load();}else{window["ga-disable-"+ID]=true;if(window.gtag)window.gtag("consent","update",{analytics_storage:"denied"});}var banner=document.getElementById("ha-consent-banner");if(banner)banner.remove();settings();}
function show(){
 if(document.getElementById("ha-consent-banner"))return;
 var b=document.createElement("section");b.id="ha-consent-banner";b.setAttribute("role","dialog");b.setAttribute("aria-labelledby","ha-consent-title");
 var h=document.createElement("h2");h.id="ha-consent-title";h.textContent=en?"Your privacy matters":"Tu privacidad importa";
 var p=document.createElement("p");p.textContent=en?"Optional Google Analytics helps us understand website use. It remains disabled unless you accept. You can reject it or change your choice at any time.":"Google Analytics nos ayuda de forma opcional a entender cómo se usa la web. No se activa si no aceptas. Puedes rechazarlo o cambiar tu elección cuando quieras.";
 var a=document.createElement("a");a.href=privacy;a.textContent=en?"Privacy policy":"Política de privacidad";
 var row=document.createElement("div");row.className="ha-consent-actions";
 function btn(label,cls,v){var x=document.createElement("button");x.type="button";x.className=cls;x.textContent=label;x.onclick=function(){choose(v);};return x;}
 row.appendChild(btn(en?"Reject optional":"Rechazar opcionales","ha-consent-secondary","rejected"));row.appendChild(btn(en?"Accept analytics":"Aceptar analítica","ha-consent-primary","accepted"));
 b.appendChild(h);b.appendChild(p);b.appendChild(a);b.appendChild(row);document.body.appendChild(b);
}
var c=null;try{c=localStorage.getItem(KEY);}catch(e){}
if(c==="accepted")load();if(c==="accepted"||c==="rejected"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",settings);else settings();}
else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show);else show();
})();