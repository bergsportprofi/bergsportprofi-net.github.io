(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,15,16],{256:function(t,e,r){var content=r(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("62f8c877",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(258);var n=r(18);function o(t){return(t*n.snipcart.factor).toFixed(2)}},258:function(t,e,r){"use strict";var n=r(5),o=r(1),l=r(3),c=r(56),d=r(193),f=r(192),m=r(4),h=o.RangeError,v=o.String,x=Math.floor,C=l(f),_=l("".slice),y=l(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},k=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=x(n/1e7)},D=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=x(r/t),r=r%t*1e7},T=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+C("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var e,r,n,o,l=d(this),f=c(t),data=[0,0,0,0,0,0],m="",x="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return v(l);if(l<0&&(m="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*w(2,69,1))-69)<0?l*w(2,-e,1):l/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(k(data,0,r),n=f;n>=7;)k(data,1e7,0),n-=7;for(k(data,w(10,n,1),0),n=e-1;n>=23;)D(data,1<<23),n-=23;D(data,1<<n),k(data,1,1),D(data,2),x=T(data)}else k(data,0,r),k(data,1<<-e,0),x=T(data)+C("0",f);return x=f>0?m+((o=x.length)<=f?"0."+C("0",f-o)+x:_(x,0,o-f)+"."+_(x,o-f)):m+x}})},259:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(18);function n(t){var e="/assets/images/"+(t.localThumbs&&t.localThumbs[0]?t.localThumbs[0]:t.localThumb?t.localThumb:""),r=e.lastIndexOf(".");return-1===r?e:e.substr(0,r)+".webp"}},260:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(18),o=r(68),l=r(140),c=r(257),d=r(259),f=r(263),m={name:"productItem",props:{product:Object},data:function(){return{config:n}},computed:{calculatedPrice:function(){return Object(c.a)(this.product.price)},productThumbnail:function(){return Object(d.a)(this.product)},categoryData:function(){var t=this.product.category||this.product.categories[this.product.categories.length-2];return o.find((function(e){return e.name===t||e.subCategories.find((function(e){return e.name===t}))}))},brandData:function(){var t=this;return l.find((function(e){return e.name===t.product.brand}))}},methods:{decode:function(t){return f.decode(t)}}},h=(r(261),r(19)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:t.productThumbnail,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.calculatedPrice)+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"630a0660",null);e.default=component.exports},261:function(t,e,r){"use strict";r(256)},262:function(t,e,r){var n=r(69)(!1);n.push([t.i,".course-item[data-v-630a0660]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-630a0660]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-630a0660]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=n},264:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(260).default})},266:function(t,e,r){"use strict";r.r(e);r(20),r(10);var n=r(18),o=r(68),l=r(50);for(var c=[],i=0;i<=l.length;i++)try{c.push(l[i].brand)}catch(t){}c=c.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:n,categories:o}}},f=r(19),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,n){return r("a",{key:n,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,r){r(268)},268:function(t,e,r){"use strict";var n=r(5),o=r(1),l=r(13),c=r(3),d=r(25),f=r(8),m=r(110),h=r(14),v=r(51),x=r(111),C=r(194),_=r(6),y=r(32),w=_("replace"),k=RegExp.prototype,D=o.TypeError,T=c(x),S=c("".indexOf),E=c("".replace),L=c("".slice),O=Math.max,P=function(t,e,r){return r>t.length?-1:""===e?r:S(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,c,x,_,j,I,M,N=d(this),R=0,$=0,U="";if(null!=t){if((r=m(t))&&(n=h(d("flags"in k?t.flags:T(t))),!~S(n,"g")))throw D("`.replaceAll` does not allow non-global regexes");if(o=v(t,w))return l(o,t,N,e);if(y&&r)return E(h(N),t,e)}for(c=h(N),x=h(t),(_=f(e))||(e=h(e)),j=x.length,I=O(1,j),R=P(c,x,0);-1!==R;)M=_?h(e(x,R,c)):C(x,c,R,[],void 0,e),U+=L(c,$,R)+M,$=R+j,R=P(c,x,R+I);return $<c.length&&(U+=L(c,$)),U}})},289:function(t,e,r){"use strict";r.r(e);r(33),r(71),r(267),r(30),r(20),r(10);var n=r(18),o=r(50),l=r(109),c={name:"singleBrandComponent",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title:n.brandSeo.defaultTitle.replaceAll("$HERSTELLER",this.brandData.name),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:n.brandSeo.defaultMetaDescription.replaceAll("$HERSTELLER",this.brandData.name)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:n.brandSeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=l.a.brands.getBrandFromSlug(t),r=l.a.seo.getSeoForBrand(e);return{filteredProducts:o.filter((function(t){return t.brand===e.name})),brandData:e,seoData:r,config:n}}},d=r(19),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n              "+t._s(t.config.seo.mainKeyword)+"\n            ")]),t._v(" "),r("h1",{staticClass:"mb-5 h2",domProps:{innerHTML:t._s(t.brandData.name)}})]),t._v(" "),r("Products",{attrs:{products:t.filteredProducts}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(266).default,Products:r(264).default})}}]);