exports.pfComponentSystem=(self.webpackChunkpfComponentSystem=self.webpackChunkpfComponentSystem||[]).push([[179],{115:e=>{"use strict";e.exports=JSON.parse('{"compilerOptions":{"baseUrl":"./src","module":"es2015","target":"es6","paths":{"assets/*":["/assets/*"],"helpers/*":["/helpers/*"],"components/*":["/components/*"],"styles/*":["/styles/*"]}}}')},728:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Button:()=>G});const o=require("prop-types");var a=r.n(o);const n=(e=6)=>{const t="abcdefghijklmnopqrstuvxWYzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789_-",r=t.length;let o="id-";for(let a=0;a<e;a++){const e=Math.random(0,r-1),a=parseInt(e*r-1);o+=t.charAt(a)}return o},l=require("react");var s=r.n(l);const c=require("styled-components");var i=r.n(c);const d=e=>{const t=e.match(/\#/),r=e.match(/hsl/),o=e.match(/(rgb)/);return t?"hex":r?"hsl":o?"rgb":void 0},u=(e,t,r,o=1)=>{const a=r/100,n=e/60,l=t/100*(1-Math.abs(2*a-1)),s=l*(1-Math.abs(n%2-1)),c=a-l/2,i=o||1;let d,u,p;d=u=p=0,0!==a&&((n>=0||6===n)&&n<1&&(d=l,u=s),n>=1&&n<2&&(d=s,u=l),n>=2&&n<3&&(u=l,p=s),n>=3&&n<4&&(u=s,p=l),n>=4&&n<5&&(d=s,p=l),n>=5&&n<6&&(d=l,p=s));return[...[d,u,p].map((e=>{let t=255*(e+c);return Math.round(t)})),i]},p=([e,t,r,o])=>o?`hsla(${e}, ${t}%, ${r}%, ${o})`:`hsl(${e}, ${t}%, ${r}%)`,f=e=>{let t=e.replace(/(hsla|hsl)|\(|\)|%/gm,"").split(",").map((e=>parseInt(e.trim())));return 3===t.length&&t.push(1),t},m=e=>{let t;if(e.match(/(rgb)/))t=e.replace(/(rgba|rgb)|\(|\)/gm,"").split(",").map((e=>parseInt(e.trim())));else{const r=e.replace("#",""),{length:o}=e;t=o<5?r.match(/.{1}/g).map((e=>parseInt(e,16))):r.match(/.{2}/g).map((e=>parseInt(e,16)))}return 3===t.length&&t.push(1),t},h=([e,t,r,o])=>`#${e.toString(16).padEnd(2,"0")}${t.toString(16).padEnd(2,"0")}${r.toString(16).padEnd(2,"0")}${o?(255*o).toString(16).padEnd(2,"0"):""}`,b=(e,t,r,o=1)=>{const a=Math.min(e/255,1),n=Math.min(t/255,1),l=Math.min(r/255,1),s=o,c=Math.max(a,n,l),i=Math.min(a,n,l),d=c-i;let u=(c+i)/2,p=0,f=0;if(0!==d)switch(c){case a:p=(n-l)/d*60;break;case n:p=60*(2+(l-a)/d);break;case l:p=60*(4+(a-n)/d)}return 0!==d&&(f=d/(1-Math.abs(2*u-1))),p=Math.round(p),p=p<0?p+360:p,u=Math.round(100*u),f=Math.round(100*f),[p,f,u,s]},g=([e,t,r,o])=>o?`rgba(${e}, ${t}, ${r}, ${o})`:`rgb(${e}, ${t}, ${r})`,y=(e,t)=>{const r=d(t);let o,a,n,l,s,c,i;return"rgb"===r||"hex"===r?([l,s,c]=m(t),[o,a,n]=b(l,s,c),n=Math.max(n-e,0),[l,s,c]=u(o,a,n),i="rgb"===r?g([l,s,c]):h([l,s,c])):([o,a,n]=f(t),n=Math.max(n-e,0),i=p([o,a,n])),i},k=(e,t)=>{const r=d(t);let o,a,n,l,s,c,i;return"rgb"===r||"hex"===r?([l,s,c]=m(t),[o,a,n]=b(l,s,c),n=Math.min(n+e,100),[l,s,c]=u(o,a,n),i="rgb"===r?g([l,s,c]):h([l,s,c])):([o,a,n]=f(t),n=Math.min(n+e,100),i=p([o,a,n])),i},w=JSON.parse('{"colors":{"black":{"default":"#444444"},"grey":{"default":"#707070"},"white":{"default":"#f5f5f5"},"primary":{"default":"#edc44a"},"secondary":{"default":"#e0a905"},"success":{"default":"#7dba73"},"danger":{"default":"#c25a46"},"warn":{"default":"#d68024"}},"paddings":{"sm":"0.25rem","md":"0.5rem","lg":"0.75rem"},"borders":{"not":"none","sm":"1px solid","md":"2px solid","lg":"3px solid","radius":{"sm":"0.125rem","md":"0.25rem","lg":"0.50rem"}},"font":{"family":"\'NunitoSans\', \'Montserrat\', \'Open Sans\', \'Lato\', \'Raleway\'","size":{"sm":"0.75rem","md":"1rem","lg":"1.5rem"},"weight":{"light":300,"normal":400,"bold":700}}}'),$=e=>e?.constructor===Object,v=(e,...t)=>{if(0===t.length)return{...e};let r={...e};for(let e=0;e<t.length;e++){let o=t[e];for(let e in o)$(o[e])&&$(o[e])?r[e]=v(r[e],o[e]):r[e]=o[e]}return r},x=v,N=r(106);let E,R,z,M;const P=(e,t)=>{const r=parseFloat(t.match(/(\d+\.{0,1}\d+)|\d+/));return t.replace(r,e*r)},C=((()=>{let e={};for(const t of N.keys())"./theme.json"===t&&(e=N(t));const t=x(w,e);t.colors=Object.keys(t.colors).reduce(((e,r)=>({...e,[r]:{light:t.colors[r]?.light||k(10,t.colors[r].default),default:t.colors[r].default,dark:t.colors[r]?.dark||y(10,t.colors[r].default)}})),{}),t.borders.radius.rounded=t.borders.radius.rounded||P(4,t.borders.radius.lg),({borders:E,colors:R,font:z,paddings:M}=t)})(),(0,l.forwardRef)((function({className:e,color:t,id:r,label:o,labelAsPlaceholder:a,name:n,onChange:l,placeholder:s,type:c,value:i},d){return React.createElement("input",{className:e,id:r,"aria-label":o,onChange:l,placeholder:s,value:i,type:c,name:n,ref:d})}))),j=i()(C)`
  background: ${R.white.light};
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: ${E.sm} transparent;
  padding: ${M.md};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({labelAsPlaceholder:e})=>e?"transparent":R.grey.light};
  }
`,A=i()((({children:e,className:t,htmlFor:r,labelAsPlaceholder:o})=>React.createElement("label",{className:t,htmlFor:r},e)))`
  color: ${R.grey.default};
  bottom: ${({labelAsPlaceholder:e,suspended:t})=>(console.log(t),e?t?P(3.5,M.md):M.md:"unset")};
  font-family: ${z.family};
  left: ${({labelAsPlaceholder:e})=>e?M.md:"unset"};
  position: ${({labelAsPlaceholder:e})=>e?"absolute":"unset"};
  transition: all 0.3s ease-in-out;
  z-index: 1;
  .suspended {
    bottom: ${e=>e.labelAsPlaceholder?P(3.5,M.md):"unset"};
  }
`,O=i()((({children:e,className:t,color:r,labelAsPlaceholder:o})=>React.createElement("div",{className:t},e)))`
  width: 100%;
  background-position: center;
  box-sizing: border-box;

  position: relative;
  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    background-color: ${R.grey.default};
    height: 2px;
    bottom: 0;
    left: 0;
    transition: all 0s;
  }
  &:before {
    content: " ";
    position: absolute;
    width: 0%;
    z-index: 1;
    background-color: ${({color:e})=>R[e].default};
    height: 2px;
    bottom: 0;
    left: 50%;
    transition: all 0s;
  }
  &:focus-within {
    &:before {
      transition: all 0.3s ease;
      width: 100%;
      left: 0%;
    }
    ${A} {
      bottom: ${e=>e.labelAsPlaceholder?P(3.5,M.md):"unset"};
    }
  }
`,S=i()((({className:e,message:t})=>React.createElement("div",{className:e},t)))`
  color: ${R.danger.default};
`;C.defaultProps={className:"",color:"primary",id:"input",label:"",labelAsPlaceholder:!1,placeholder:"",showLabel:!0};const I=(0,l.forwardRef)((function({className:e,color:t,label:r,errorMessage:o,id:a,labelAsPlaceholder:s,name:c,onChange:i,placeholder:d,showLabel:u},p){const f=n(),[m,h]=(0,l.useState)(!1);return React.createElement(React.Fragment,null,React.createElement(O,{color:t,className:e,labelAsPlaceholder:s},u&&React.createElement(A,{htmlFor:a||f,labelAsPlaceholder:s,suspended:m,"data-testid":"textIpuntLabel"},r),React.createElement(j,{"aria-label":s&&r,color:t,id:a||f,labelAsPlaceholder:s,name:c,onChange:e=>{e.preventDefault(),e.target.value?h(!0):h(!1),i(e)},placeholder:d,ref:p,"data-testid":"textIpunt"})),o&&React.createElement(S,{message:o}))}));I.propTypes={className:a().string,color:a().oneOf(["primary","secondary","terciary","white","grey","black","success","warn","danger"]),id:a().string,label:a().string.isRequired,labelAsPlaceholder:a().bool,placeholder:a().string.isRequired,name:a().string,showLabel:a().bool,errorMessage:a().string},I.defaultProps={color:"primary",labelAsPlaceholder:!1,showLabel:!0};const D=e=>{const[t,r]=(0,l.useState)(!1),[o,a]=(0,l.useState)(!1),[n,s]=(0,l.useState)(!1),[c,i]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(e&&e.current){const t=e.current.onfocus,o=e.current.onblur,n=e.current.onclick,l=e.current.onmouseup,c=e.current.onmousedown,i=e.current.ondoubleClick,d=e.current.onkeydown,u=e.current.onkeypress,p=e.current.onkeyup;e.current.onfocus=e=>r(!0)||t&&t(e),e.current.onblur=e=>r(!1)||s(!1)||r(!1)||a(!1)||o&&o(e),e.current.onclick=e=>a(!0)||s(!1)||n&&n(e),e.current.onmouseup=e=>a(!0)||s(!1)||l&&l(e),e.current.onmousedown=e=>a(!0)||s(!1)||c&&c(e),e.current.ondoubleClick=e=>a(!0)||s(!1)||i&&i(e),e.current.onkeydown=e=>s(!0)||a(!1)||d&&d(e),e.current.onkeypress=e=>s(!0)||a(!1)||u&&u(e),e.current.onkeyup=e=>s(!0)||a(!1)||p&&p(e)}}),[]),(0,l.useEffect)((()=>{i(!(!t||o||!n))}),[t,o,n]),c},L=(require("material-design-icons/iconfont/material-icons.css"),({className:e,size:t,color:r,children:o})=>s().createElement("i",{size:t,color:r,className:`material-icons ${e}`},o));L.defaultProps={size:"md",color:"black"};const J=L,{size:q,family:V}=z,F=i()(J)`
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Outlined";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v22/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Round";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconsround/v22/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmP.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Sharp";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconssharp/v23/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvR.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Two Tone";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconstwotone/v21/hESh6WRmNCxEqUmNyh3JDeGxjVVyMg4tHGctNCu0.woff2)
      format("woff2");
  }

  color: ${({color:e})=>R[e].default};

  font-size: ${({size:e})=>q[e]};

  line-height: ${({size:e})=>q[e]};
`,U=({borderRadius:e,className:t,children:r,color:o,href:a,isDark:n,icon:s,onClick:c,type:i,size:d})=>{const u=(0,l.useRef)(null),p=D(u);return a?React.createElement("a",{href:a,className:`${t} ${p?"focusVisible":""}`,ref:u},s&&React.createElement(F,{size:d,color:o},s)," ",r):React.createElement("button",{className:`${t} ${p?"focusVisible":""}`,ref:u,onClick:c},s&&React.createElement(F,{size:d,color:o},s)," ",r)};U.defaultProps={borderRadius:"sm",className:void 0,children:void 0,color:"primary",href:void 0,isDark:!1,icon:void 0,onClick:void 0,type:"default",size:"md"},U.propTypes={borderRadius:a().oneOf(["sm","md","lg","rounded"]),classNAme:a().string,children:a().node,color:a().oneOf(["black","grey","white","primary","secondary","terciary","success","warn","danger"]),href:a().string,icon:a().string,onClick:function(e,t,r){return e.href&&e.onClick?new Error("Invalid prop `"+t+"` of value `"+e[t]+"` supplied to `"+r+"`, expected `undefined` while the prop `href` is defined"):e.href||e.onClick?void(!e.href&&e.onClick):new Error("Invalid prop `"+t+"` of value `"+e[t]+"` supplied to `"+r+"`, expected a `function`")},size:a().oneOf(["sm","md","lg"]),type:a().oneOf(["default","outlined","text","link"])};const W=U,{size:B,family:T}=z,_=i()(W)`
  background: ${({color:e,type:t})=>"default"===t?R[e].default:"none"};

  background-position: center;

  border: ${({color:e,type:t})=>"outlined"===t?`${E.sm} ${R[e].default}`:"transparent"};

  border-radius: ${({borderRadius:e})=>"rounded"===e?P(4,E.radius.lg):E.radius[e]};

  color: ${({type:e,color:t})=>"default"!==e?R[t].default:"inherit"};

  display: flex;

  font-size: ${({size:e})=>B[e]};

  font-weight: 600;

  line-height: ${({size:e})=>B[e]};

  margin: 0;

  padding: ${({size:e,type:t,icon:r})=>"default"===t||"outlined"===t?`${M[e]} ${P(r?2:4,M[e])}`:"none"};

  transition: background 0.8s;

  text-decoration: ${({type:e})=>"link"===e?"underline":"none"};

  cursor: pointer;

  ${F} {
    color: ${({type:e,color:t})=>"default"!==e?R[t].default:"inherit"};
    margin-right: ${({size:e,children:t})=>t?P(2,M[e]):0};
  }

  &:focus {
    outline: none;
  }
  &.focusVisible,
  &:hover {
    background: ${({color:e,type:t})=>"default"===t?`${R[e].dark} radial-gradient(circle, transparent 1%, ${R[e].dark} 1%) center/15000%`:"transparent"};
    border-color: ${({color:e,type:t})=>"outlined"===t?R[e].dark:"transparent"};
    color: ${({color:e,type:t})=>"default"!==t?R[e].dark:"inherit"};
  }
  &:active {
    background-color: ${({color:e,type:t})=>"default"===t?R[e].light:"transparent"};
    background-size: 100%;
    transition: background 0s;
  }
`;_.defaultProps={borderRadius:"md",className:"",children:"Button",color:"primary",isDark:!1,href:"",type:"default",size:"md"};const G=_},306:e=>{"use strict";e.exports=JSON.parse('{"name":"another-react-ui","version":"1.0.0","main":"index.js","author":"@pfmartins4","license":"MIT","private":false,"scripts":{"start":"NODE_ENV=development webpack serve --env=dev","build":"NODE_ENV=production webpack --env=prod","test":"jest --watch","storybook":"start-storybook -p 6006","build-storybook":"build-storybook"},"peerDependencies":{"material-design-icons":"3.x","react":">= 17","react-dom":">= 17","styled-components":">= 5"},"devDependencies":{"material-design-icons":"3.x","react":">= 17","react-dom":">= 17","styled-components":">= 5","@babel/core":"^7.12.7","@babel/plugin-transform-react-jsx":"^7.12.7","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.7","@babel/preset-react":"^7.12.10","@babel/runtime-corejs3":"^7.12.5","@storybook/addon-actions":"^6.1.9","@storybook/addon-essentials":"^6.1.9","@storybook/addon-links":"^6.1.9","@storybook/react":"^6.1.9","@types/jest":"^26.0.16","babel-eslint":"^10.1.0","babel-jest":"^26.6.3","babel-loader":"^8.2.1","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^6.3.2","css-loader":"^5.0.1","dotenv-webpack":"^5.1.0","eslint":"^7.14.0","eslint-config-airbnb":"^18.2.1","eslint-config-prettier":"^6.15.0","eslint-import-resolver-alias":"^1.1.2","eslint-plugin-html":"^6.1.1","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","file-loader":"^6.2.0","html-webpack-plugin":"^5.0.0-alpha.14","jest":"^26.6.3","jest-dom":"^4.0.0","json-loader":"^0.5.7","json5-loader":"^4.0.1","prettier":"^2.2.0","style-loader":"^2.0.0","terser-webpack-plugin":"^5.0.3","webpack":"^5.6.0","webpack-bundle-analyzer":"^4.1.0","webpack-cli":"^4.2.0","webpack-dev-server":"^3.11.0","webpack-merge":"^5.4.0"},"prettier":{"files":["*.js","*.jsx"],"trailingComma":"es5","printWidth":80,"tabWidth":2,"semi":true,"singleQuote":false,"jsxBracketSameLine":false,"arrowParens":"avoid"},"dependencies":{"webpack-node-externals":"^2.5.2"}}')},934:e=>{"use strict";e.exports=JSON.parse('{"colors":{"white":{"default":"#E5E5E5"},"primary":{"default":"#DBCBBD"},"secondary":{"default":"#C87941"},"terciary":{"default":"#4A2510"},"black":{"default":"#292929"}}}')},106:(e,t,r)=>{var o={"./jsconfig.json":115,"./package.json":306,"./theme.json":934};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id=106}},0,[[728,666]]]);