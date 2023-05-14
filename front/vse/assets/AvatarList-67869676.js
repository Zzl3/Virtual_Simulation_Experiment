import{d as L,r as k,a7 as G,ce as J,s as K,a9 as Q,c5 as Y,x as $,aW as N,o as Z,am as M,a5 as i,g as v,a8 as g,aU as ee,aa as ae,cf as te,ah as re,aB as ne,l as se,c as B,e as F,F as oe,h as le,k as ie,z as ce,m as ue}from"./index-74898ef0.js";import{u as ve}from"./useBreakpoint-a031231d.js";import{e as fe}from"./eagerComputed-a29f2f4d.js";var de=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:ae.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},me=L({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:de(),slots:["icon"],setup:function(e,x){var p=x.slots,n=x.attrs,c=k(!0),h=k(!1),_=k(1),l=k(null),S=k(null),E=G("avatar",e),y=E.prefixCls,O=J(),s=K(function(){return e.size==="default"?O.value:e.size}),j=ve(),f=fe(function(){if(Q(e.size)==="object"){var a=Y.find(function(r){return j.value[r]}),t=e.size[a];return t}}),T=function(t){return f.value?{width:"".concat(f.value,"px"),height:"".concat(f.value,"px"),lineHeight:"".concat(f.value,"px"),fontSize:"".concat(t?f.value/2:18,"px")}:{}},d=function(){if(!(!l.value||!S.value)){var t=l.value.offsetWidth,r=S.value.offsetWidth;if(t!==0&&r!==0){var u=e.gap,C=u===void 0?4:u;C*2<r&&(_.value=r-C*2<t?(r-C*2)/t:1)}}},P=function(){var t=e.loadError,r=t==null?void 0:t();r!==!1&&(c.value=!1)};return $(function(){return e.src},function(){N(function(){c.value=!0,_.value=1})}),$(function(){return e.gap},function(){N(function(){d()})}),Z(function(){N(function(){d(),h.value=!0})}),function(){var a,t,r=e.shape,u=e.src,C=e.alt,H=e.srcset,w=e.draggable,D=e.crossOrigin,b=M(p,e,"icon"),m=y.value,q=(a={},i(a,"".concat(n.class),!!n.class),i(a,m,!0),i(a,"".concat(m,"-lg"),s.value==="large"),i(a,"".concat(m,"-sm"),s.value==="small"),i(a,"".concat(m,"-").concat(r),r),i(a,"".concat(m,"-image"),u&&c.value),i(a,"".concat(m,"-icon"),b),a),U=typeof s.value=="number"?{width:"".concat(s.value,"px"),height:"".concat(s.value,"px"),lineHeight:"".concat(s.value,"px"),fontSize:b?"".concat(s.value/2,"px"):"18px"}:{},R=(t=p.default)===null||t===void 0?void 0:t.call(p),A;if(u&&c.value)A=v("img",{draggable:w,src:u,srcset:H,onError:P,alt:C,crossorigin:D},null);else if(b)A=b;else if(h.value||_.value!==1){var I="scale(".concat(_.value,") translateX(-50%)"),V={msTransform:I,WebkitTransform:I,transform:I},X=typeof s.value=="number"?{lineHeight:"".concat(s.value,"px")}:{};A=v(ee,{onResize:d},{default:function(){return[v("span",{class:"".concat(m,"-string"),ref:l,style:g(g({},X),V)},[R])]}})}else A=v("span",{class:"".concat(m,"-string"),ref:l,style:{opacity:0}},[R]);return v("span",g(g({},n),{},{ref:S,class:q,style:[U,T(!!b),n.style]}),[A])}}});const z=me;var ge=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},pe=L({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:ge(),setup:function(e,x){var p=x.slots,n=x.attrs,c=G("avatar-group",e),h=c.prefixCls,_=c.direction;return te(e),function(){var l,S=e.maxPopoverPlacement,E=S===void 0?"top":S,y=e.maxCount,O=e.maxStyle,s=e.maxPopoverTrigger,j=s===void 0?"hover":s,f=(l={},i(l,h.value,!0),i(l,"".concat(h.value,"-rtl"),_.value==="rtl"),i(l,"".concat(n.class),!!n.class),l),T=M(p,e),d=re(T).map(function(r,u){return ne(r,{key:"avatar-key-".concat(u)})}),P=d.length;if(y&&y<P){var a=d.slice(0,y),t=d.slice(y,P);return a.push(v(se,{key:"avatar-popover-key",content:t,trigger:j,placement:E,overlayClassName:"".concat(h.value,"-popover")},{default:function(){return[v(z,{style:O},{default:function(){return["+".concat(P-y)]}})]}})),v("div",g(g({},n),{},{class:f,style:n.style}),[a])}return v("div",g(g({},n),{},{class:f,style:n.style}),[d])}}});const W=pe;z.Group=W;z.install=function(o){return o.component(z.name,z),o.component(W.name,W),o};const ye={class:"avatar-list"},xe=L({__name:"AvatarList",props:{source:Array,size:{type:Number,default:22,required:!1}},setup(o){return(e,x)=>{const p=z;return B(),F("div",ye,[(B(!0),F(oe,null,le(o.source,(n,c)=>(B(),ie(p,{style:ce(`margin-left: -${o.size/2}px`),size:o.size,key:c,src:n.avatar},null,8,["style","size","src"]))),128))])}}});const Pe=ue(xe,[["__scopeId","data-v-77a25ce2"]]);export{Pe as A};
//# sourceMappingURL=AvatarList-67869676.js.map
