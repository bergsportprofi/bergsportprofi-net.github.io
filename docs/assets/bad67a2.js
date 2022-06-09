(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5,15,16],{256:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var o=r(18),n=r(109),l=r(140),c=r(257),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],r=n.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))}));r.key===e.toLowerCase()||(r=r.subCategories.find((function(t){return t.key===e.toLowerCase()})));var c=l.find((function(e){return e.name===t.product.brand}));return{config:o,categoryData:r,brandData:c}},methods:{decode:function(t){return c.decode(t)}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))])]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,r){"use strict";r.r(e);var o={name:"products",props:{products:Array}},n=r(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(256).default})},260:function(t,e,r){"use strict";r.r(e);r(20),r(10);var o=r(18),n=r(109),l=r(52);for(var c=[],i=0;i<=l.length;i++)try{c.push(l[i].brand)}catch(t){}c=c.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:o,categories:n}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,o){return r("div",{key:o,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,o){return r("a",{key:o,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,r){"use strict";r.r(e);r(43);var o=r(52),n=r(18),l={name:"categoryComponent",head:function(){return{title:n.seo.shop?n.seo.shop.title:n.seo.mainKeyword+" Shop",meta:[{hid:"description",name:"description",content:n.seo.shop&&n.seo.shop.metaDescription?n.seo.shop.metaDescription:n.seo.mainKeyword+" Shop"},{hid:"robots",name:"robots",content:n.seo.shop&&n.seo.shop.robots?n.seo.shop.robots:"noindex, follow"}]}},data:function(){return{products:o.slice(0,50)}}},c=r(19),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("Products",{attrs:{products:t.products}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(260).default,Products:r(258).default})}}]);