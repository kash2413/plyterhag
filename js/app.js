var menuWidthLimit=1000
function _getMenuElements(){return document.querySelectorAll('#head-menu > li');}
var menuMasonries=[];var windowWidth;var windowHeight;function getWindowWidth(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth);}
function getWindowHeight(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight);}
function menuMasonryAddHandlers(){_getMenuElements().forEach(function(elem){elem.addEventListener("mouseenter",menuMasonryAdd);});}
function menuMasonryRemoveHandlers(){_getMenuElements().forEach(function(elem){elem.removeEventListener("mouseenter",menuMasonryAdd);});}
function menuMasonryAdd(){if(!menuMasonries.length&&windowWidth>=1000){menuMasonryRemoveHandlers();var elements=document.querySelectorAll('#head-menu > li > div > ul')
elements.forEach(function(elem){menuMasonries.push(new Masonry(elem,{itemSelector:'.grid-item',percentPosition:true,}));});}}
function menuMasonryRemove(){if(menuMasonries.length){menuMasonries.forEach(function(elem){elem.destroy();});menuMasonries=[];}}
function showMenu(){menuMasonryRemove()
menuMasonryRemoveHandlers()
window.height=1000;menuElem.classList.add('menu-visible');hamburgerElem.classList.add('opened');}
function hideMenu(){menuElem.classList.remove('menu-visible');hamburgerElem.classList.remove('opened');}
var menuElem;var hamburgerElem;function hamburgerClick(e){if(menuElem.classList.contains('menu-visible'))
hideMenu();else
showMenu();}
function windowResize(){windowWidth=getWindowWidth()
windowHeight=getWindowHeight()
if(windowWidth>=menuWidthLimit){menuMasonryAddHandlers()
hideMenu()}else{menuMasonryRemoveHandlers()}}
function initMenuMore(){document.querySelectorAll('.menu-more, .menu-open').forEach(function(elem){elem.addEventListener("click",function(e){var liElem=e.target.closest('li')
if(liElem.classList.contains('opened'))
liElem.classList.remove('opened');else
liElem.classList.add('opened');});});}
function onEventScroll(e){}
function initTopics(){var topicsNavElem=document.getElementById('nav-head-topic')
if(typeof topicsNavElem==='undefined')
return;var scrollElem=topicsNavElem.querySelector('.scroll-element')
var scrollRightElem=topicsNavElem.querySelector('.scroll-right');var scrollLeftElem=topicsNavElem.querySelector('.scroll-left');scrollElem.addEventListener('scroll',function(){if(scrollElem.scrollLeft==0){scrollLeftElem.style.opacity=0;setTimeout(function(){scrollLeftElem.style.visibility='hidden';},800);}else{scrollLeftElem.style.opacity=1;scrollLeftElem.style.visibility='visible';}
if(scrollElem.scrollLeft==(scrollElem.scrollWidth-scrollElem.offsetWidth)){scrollRightElem.style.opacity=0;setTimeout(function(){scrollRightElem.style.visibility='hidden'},800)}else{scrollRightElem.style.opacity=1;scrollRightElem.style.visibility='visible'}})
scrollRightElem.addEventListener('click',function(e){scrollElem.scrollLeft=scrollElem.scrollLeft+204;scrollLeftElem.style.opacity=1;});scrollLeftElem.addEventListener('click',function(e){scrollElem.scrollLeft=scrollElem.scrollLeft-204;});}
function initDOM(){menuElem=document.getElementById('nav-head-menu')
hamburgerElem=document.getElementById('hamburger-menu');window.onresize=windowResize;windowResize();menuMasonryAddHandlers()
initMenuMore()
hamburgerElem.addEventListener('click',hamburgerClick);document.getElementById('menu-tint').addEventListener('click',hideMenu);}
document.addEventListener("DOMContentLoaded",function(event){initDOM();})