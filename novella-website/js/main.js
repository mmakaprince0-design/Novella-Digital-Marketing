document.getElementById('y').textContent=new Date().getFullYear();
document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var d=new FormData(e.target);
  var b='Name: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nService: '+d.get('service')+'\n\n'+d.get('msg');
  window.location.href='mailto:mmakaprince0@gmail.com?subject='+encodeURIComponent('New enquiry: '+d.get('service'))+'&body='+encodeURIComponent(b);
  document.getElementById('status').textContent='Your email app should open with the enquiry ready to send.';
});

(function(){
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  function set(o){menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu');}
  btn.addEventListener('click',function(e){e.stopPropagation();set(!menu.classList.contains('open'));});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('click',function(e){if(!e.target.closest('nav'))set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);btn.focus();}});
  var links=[].slice.call(menu.querySelectorAll('a[href^="#"]:not(.btn)'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){
      if(en.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current');if(a.getAttribute('href')==='#'+en.target.id)a.setAttribute('aria-current','true');});}
    });},{rootMargin:'-35% 0px -55% 0px'});
    links.forEach(function(a){var t=document.querySelector(a.getAttribute('href'));if(t)io.observe(t);});
  }
})();
