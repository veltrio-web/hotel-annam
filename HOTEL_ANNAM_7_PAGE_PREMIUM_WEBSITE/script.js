const CONFIG = {
  restaurant: "HOTEL ANNAM",
  tagline: "Authentic Taste. Freshly Made. Made for You.",
  swiggy: "SWIGGY_LINK_HERE",
  zomato: "ZOMATO_LINK_HERE",
  phone: "PHONE_NUMBER_HERE",
  whatsapp: "WHATSAPP_NUMBER_HERE",
  maps: "GOOGLE_MAPS_LINK_HERE",
  hours: "OPENING_HOURS_HERE"
};

const menu = [
  {cat:"South Indian",name:"Idli",desc:"Soft steamed South Indian idlis",price:"₹—",img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85"},
  {cat:"South Indian",name:"Dosa",desc:"Crispy golden dosa",price:"₹—",img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85"},
  {cat:"South Indian",name:"Masala Dosa",desc:"Dosa filled with spiced potato masala",price:"₹—",img:"https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85"},
  {cat:"South Indian",name:"Vada",desc:"Crispy South Indian vada",price:"₹—",img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85"},
  {cat:"South Indian",name:"Pongal",desc:"Traditional comforting ven pongal",price:"₹—",img:"https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85"},
  {cat:"South Indian",name:"South Indian Meals",desc:"Complete traditional meal",price:"₹—",img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85"},
  {cat:"Non-Veg",name:"Chicken Biryani",desc:"Aromatic and flavourful chicken biryani",price:"₹—",img:"https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=900&q=85"},
  {cat:"Non-Veg",name:"Mutton Biryani",desc:"Rich and delicious mutton biryani",price:"₹—",img:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85"},
  {cat:"Non-Veg",name:"Chicken 65",desc:"Crispy spicy chicken",price:"₹—",img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85"},
  {cat:"Main Course",name:"Parotta",desc:"Layered and flaky parotta",price:"₹—",img:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=85"},
  {cat:"Main Course",name:"Chicken Fried Rice",desc:"Flavourful rice with chicken",price:"₹—",img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85"},
  {cat:"Main Course",name:"Egg Fried Rice",desc:"Freshly prepared egg fried rice",price:"₹—",img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85"},
  {cat:"Beverages",name:"Filter Coffee",desc:"South Indian filter coffee",price:"₹—",img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85"},
  {cat:"Beverages",name:"Tea",desc:"Freshly brewed tea",price:"₹—",img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"},
  {cat:"Beverages",name:"Fresh Juice",desc:"Chilled fresh fruit juice",price:"₹—",img:"https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=85"}
];

const gallery = [
 ["Traditional Meals","https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1500&q=88"],
 ["Biryani","https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=1500&q=88"],
 ["Dosa","https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1500&q=88"],
 ["Fresh Favourites","https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1500&q=88"],
 ["Tea & Coffee","https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1500&q=88"],
 ["Kitchen Favourites","https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1500&q=88"]
];

function linkify(){
  document.querySelectorAll("[data-swiggy]").forEach(a=>a.href=CONFIG.swiggy);
  document.querySelectorAll("[data-zomato]").forEach(a=>a.href=CONFIG.zomato);
  document.querySelectorAll("[data-maps]").forEach(a=>a.href=CONFIG.maps);
  document.querySelectorAll("[data-phone]").forEach(a=>{a.href=`tel:${CONFIG.phone}`; if(a.dataset.phoneText==="true") a.textContent=CONFIG.phone});
  document.querySelectorAll("[data-whatsapp]").forEach(a=>a.href=`https://wa.me/${CONFIG.whatsapp}`);
  document.querySelectorAll("[data-hours]").forEach(e=>e.textContent=CONFIG.hours);
}

function card(item){
 return `<article class="food-card reveal"><div class="food-img"><img src="${item.img}" alt="${item.name}" loading="lazy"><span>${item.cat}</span></div><div class="food-copy"><h3>${item.name}</h3><p>${item.desc}</p><div><b>${item.price}</b><a href="${CONFIG.swiggy}" target="_blank" rel="noopener">ORDER ↗</a></div></div></article>`;
}
function renderMenu(filter="All"){
 const grid=document.querySelector("#menuGrid"); if(!grid)return;
 grid.innerHTML=menu.filter(x=>filter==="All"||x.cat===filter).map(card).join("");
 observeReveals();
}
function renderGallery(){
 const grid=document.querySelector("#galleryGrid"); if(!grid)return;
 grid.innerHTML=gallery.map((g,i)=>`<button class="gallery-tile reveal ${i===0?'large':''}" data-full="${g[1]}"><img src="${g[1]}" alt="${g[0]}" loading="lazy"><span>${g[0]}</span></button>`).join("");
 grid.querySelectorAll(".gallery-tile").forEach(x=>x.onclick=()=>openLightbox(x.dataset.full));
 observeReveals();
}
function observeReveals(){
 document.querySelectorAll(".reveal:not(.observed)").forEach(el=>{
  el.classList.add("observed");
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.08});
  io.observe(el);
 });
}
function openLightbox(src){const box=document.querySelector("#lightbox"); if(!box)return; box.querySelector("img").src=src; box.classList.add("open");}
function closeLightbox(){document.querySelector("#lightbox")?.classList.remove("open");}
function setupNav(){
 const nav=document.querySelector(".site-nav"), toggle=document.querySelector(".hamburger"), links=document.querySelector(".nav-links");
 window.addEventListener("scroll",()=>nav?.classList.toggle("scrolled",scrollY>25),{passive:true});
 toggle?.addEventListener("click",()=>{links.classList.toggle("open");toggle.classList.toggle("active")});
 links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
}
document.addEventListener("DOMContentLoaded",()=>{
 linkify(); setupNav(); renderMenu(); renderGallery();
 document.querySelectorAll(".filter button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderMenu(b.dataset.filter)});
 document.querySelector("#lightboxClose")?.addEventListener("click",closeLightbox);
 document.querySelector("#lightbox")?.addEventListener("click",e=>{if(e.target.id==="lightbox")closeLightbox()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
});
