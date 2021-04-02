(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("header");t.classList.add("header");const a=document.createElement("a");a.setAttribute("href","index.html"),a.setAttribute("title","home"),a.classList.add("logo");const n=document.createElement("img");n.setAttribute("src","./logo.png"),n.setAttribute("alt","fembe eats"),a.appendChild(n);const d=document.createElement("p");d.classList.add("tagline"),d.innerHTML="Eat fresh, stay healthy",a.appendChild(d),t.appendChild(a);const s=document.createElement("nav");s.classList.add("nav-wrap");const i=document.createElement("ul");i.classList.add("nav"),function(e,t,a){for(let a=0;a<t.length;a+=1){const n=document.createElement("li");n.classList.add("nav-items");const d=document.createElement("a");d.setAttribute("href","#"),d.innerHTML=t[a],n.appendChild(d),e.appendChild(n)}}(i,["Home","Order","About Us","Contact US"]),s.appendChild(i),t.appendChild(s),e.appendChild(t)})(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu-item-wrap");const a=document.createElement("h3");a.classList.add("contact-header"),a.innerHTML="Leave a Message",t.appendChild(a);const n=document.createElement("form");n.classList.add("contact-form"),n.setAttribute("action","?"),n.setAttribute("method","POST");const d=document.createElement("input");d.classList.add("form-inputs"),d.setAttribute("type","text"),d.setAttribute("placeholder","Enter Name"),n.appendChild(d);const s=document.createElement("input");s.classList.add("form-inputs"),s.setAttribute("type","email"),s.setAttribute("placeholder","Enter Email"),n.appendChild(s);const i=document.createElement("textarea");i.classList.add("text-area"),i.setAttribute("placeholder","Enter message"),n.appendChild(i);const c=document.createElement("button");c.classList.add("form-btn"),c.setAttribute("type","button"),c.innerHTML="Send",n.appendChild(c),t.appendChild(n),e.appendChild(t)})(),(e=>{const t=document.getElementById("content"),a=document.createElement("div");a.classList.add("menu-item-wrap");const n=document.createElement("h3");n.classList.add("menu-header"),n.innerHTML="Today's Menu",a.appendChild(n),function(e,t){for(let a=0;a<t.length;a+=1){const n=document.createElement("div");n.classList.add("menu-items");const d=document.createElement("div");d.classList.add("left");const s=document.createElement("img");s.classList.add("food-icon"),s.setAttribute("src",`${t[a].image}`),d.appendChild(s);const i=document.createElement("div");i.classList.add("right");const c=document.createElement("h3");c.classList.add("food-name"),c.innerHTML=t[a].name,i.appendChild(c);const l=document.createElement("div");l.classList.add("food-controls");const o=document.createElement("p");o.classList.add("regular-price"),o.innerHTML=`XAF ${t[a].regularPrice}`,l.appendChild(o);const r=document.createElement("p");r.classList.add("sale-price"),r.innerHTML=`XAF ${t[a].salePrice}`,l.appendChild(r);const m=document.createElement("button");m.classList.add("order-btn"),m.innerHTML="order",l.appendChild(m),i.appendChild(l);const p=document.createElement("p");p.classList.add("food-info"),p.innerHTML=t[a].info,i.appendChild(p),n.appendChild(d),n.appendChild(i),e.appendChild(n)}}(a,e),t.appendChild(a)})([{name:"Fufu and Eru",info:"This meal is made from casava, vegetable(eru and waterleaf), meat and cow skin",regularPrice:1200,salePrice:1e3,image:"./logo.png"},{name:"Ndole and Plantains",info:"This meal is made from plantains, vegetable(bitter leaf), egusi, meat and smooked fish",regularPrice:2e3,salePrice:1500,image:"./logo.png"},{name:"Garri and Okra Soup",info:"This meal is made from garri, okra, vegetable, egusi, meat and cow skin",regularPrice:1200,salePrice:1e3,image:"./logo.png"},{name:"Kwacoco and Mbanga Soup",info:"This meal is made of cocoyam, vegetable, palm fruits, meat and smooked fish",regularPrice:0,salePrice:2e3,image:"./logo.png"},{name:"Kati Kati",info:"This meal is made from cornfufu, vegetable and fried chicken",regularPrice:1500,salePrice:1e3,image:"./logo.png"}])})();