(window.webpackJsonp=window.webpackJsonp||[]).push([[27,5,15,16],{256:function(t,e,r){var content=r(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("9363f7fc",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(258);var o=r(18);function n(t){return(t*o.snipcart.factor).toFixed(2)}},258:function(t,e,r){"use strict";var o=r(5),n=r(1),c=r(3),l=r(56),d=r(193),f=r(192),m=r(4),h=n.RangeError,v=n.String,x=Math.floor,C=c(f),_=c("".slice),y=c(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},k=function(data,t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=x(o/1e7)},T=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=x(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+C("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var e,r,o,n,c=d(this),f=l(t),data=[0,0,0,0,0,0],m="",x="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return v(c);if(c<0&&(m="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*w(2,69,1))-69)<0?c*w(2,-e,1):c/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(k(data,0,r),o=f;o>=7;)k(data,1e7,0),o-=7;for(k(data,w(10,o,1),0),o=e-1;o>=23;)T(data,1<<23),o-=23;T(data,1<<o),k(data,1,1),T(data,2),x=j(data)}else k(data,0,r),k(data,1<<-e,0),x=j(data)+C("0",f);return x=f>0?m+((n=x.length)<=f?"0."+C("0",f-n)+x:_(x,0,n-f)+"."+_(x,n-f)):m+x}})},259:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(18);function o(t){var e="/assets/images/"+(t.localThumbs&&t.localThumbs[0]?t.localThumbs[0]:t.localThumb?t.localThumb:""),r=e.lastIndexOf(".");return-1===r?e:e.substr(0,r)+".webp"}},260:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var o=r(18),n=r(68),c=r(140),l=r(257),d=r(259),f=r(263),m={name:"productItem",props:{product:Object},data:function(){return{config:o}},computed:{calculatedPrice:function(){return Object(l.a)(this.product.price)},productThumbnail:function(){return Object(d.a)(this.product)},categoryData:function(){var t=this.product.category;return!t&&this.product.categories&&this.product.categories.length>1&&(t=this.product.categories[this.product.categories.length-2]),n.find((function(e){return e.name===t}))},brandData:function(){var t=this;return c.find((function(e){return e.name===t.product.brand}))}},methods:{decode:function(t){return f.decode(t)}}},h=(r(261),r(19)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:t.productThumbnail,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.calculatedPrice)+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"1e2775d0",null);e.default=component.exports},261:function(t,e,r){"use strict";r(256)},262:function(t,e,r){var o=r(69)(!1);o.push([t.i,".course-item[data-v-1e2775d0]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-1e2775d0]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-1e2775d0]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=o},264:function(t,e,r){"use strict";r.r(e);var o={name:"products",props:{products:Array}},n=r(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(260).default})},266:function(t,e,r){"use strict";r.r(e);r(20),r(10);var o=r(18),n=r(68),c=r(50);for(var l=[],i=0;i<=c.length;i++)try{l.push(c[i].brand)}catch(t){}l=l.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:o,categories:n}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,o){return r("div",{key:o,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,o){return r("a",{key:o,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){"use strict";r.r(e);r(43);var o=r(50),n=r(18),c={name:"categoryComponent",head:function(){return{title:n.seo.shop?n.seo.shop.title:n.seo.mainKeyword+" Shop",meta:[{hid:"description",name:"description",content:n.seo.shop&&n.seo.shop.metaDescription?n.seo.shop.metaDescription:n.seo.mainKeyword+" Shop"},{hid:"robots",name:"robots",content:n.seo.shop&&n.seo.shop.robots?n.seo.shop.robots:"noindex, follow"}]}},data:function(){return{products:o.slice(0,50)}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("Products",{attrs:{products:t.products}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(266).default,Products:r(264).default})}}]);