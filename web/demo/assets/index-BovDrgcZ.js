var Gd=Object.defineProperty;var Wd=(i,e,t)=>e in i?Gd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var z=(i,e,t)=>Wd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="173",ls={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,hc=1,Yd=2,cu=1,qd=2,bn=3,Ln=0,Qt=1,un=2,Sn=0,cs=1,Aa=2,uc=3,dc=4,jd=5,Li=100,Kd=101,$d=102,Zd=103,Jd=104,Qd=200,ef=201,tf=202,nf=203,Ra=204,Ca=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,hf=212,uf=213,df=214,Pa=0,Da=1,La=2,ps=3,Ia=4,Ua=5,Na=6,Oa=7,hu=0,ff=1,pf=2,vi=0,uu=1,du=2,fu=3,pu=4,mu=5,gu=6,_u=7,fc="attached",mf="detached",vu=300,ms=301,gs=302,Fa=303,Ba=304,Mo=306,xi=1e3,Rn=1001,no=1002,zt=1003,xu=1004,qs=1005,Rt=1006,qr=1007,Cn=1008,In=1009,yu=1010,Mu=1011,nr=1012,Il=1013,Fi=1014,kt=1015,At=1016,Ul=1017,Nl=1018,_s=1020,Su=35902,Eu=1021,Tu=1022,nn=1023,bu=1024,wu=1025,hs=1026,vs=1027,So=1028,Ol=1029,Au=1030,Fl=1031,Bl=1033,jr=33776,Kr=33777,$r=33778,Zr=33779,ka=35840,za=35841,Ha=35842,Va=35843,Ga=36196,Wa=37492,Xa=37496,Ya=37808,qa=37809,ja=37810,Ka=37811,$a=37812,Za=37813,Ja=37814,Qa=37815,el=37816,tl=37817,nl=37818,il=37819,sl=37820,rl=37821,Jr=36492,ol=36494,al=36495,Ru=36283,ll=36284,cl=36285,hl=36286,ir=2300,sr=2301,Io=2302,pc=2400,mc=2401,gc=2402,gf=2500,_f=0,Cu=1,ul=2,vf=3200,Pu=3201,Du=0,xf=1,Kn="",Tt="srgb",Lt="srgb-linear",io="linear",ut="srgb",Hi=7680,_c=519,yf=512,Mf=513,Sf=514,Lu=515,Ef=516,Tf=517,bf=518,wf=519,dl=35044,vc="300 es",Zn=2e3,so=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const $s=Math.PI/180,xs=180/Math.PI;function En(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function kl(i,e){return(i%e+e)%e}function Af(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rf(i,e,t){return i!==e?(t-i)/(e-i):0}function Zs(i,e,t){return(1-t)*i+t*e}function Cf(i,e,t,n){return Zs(i,e,1-Math.exp(-t*n))}function Pf(i,e=1){return e-Math.abs(kl(i,e*2)-e)}function Df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function If(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uf(i,e){return i+Math.random()*(e-i)}function Nf(i){return i*(.5-Math.random())}function Of(i){i!==void 0&&(xc=i);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ff(i){return i*$s}function Bf(i){return i*xs}function kf(i){return(i&i-1)===0&&i!==0}function zf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Iu={DEG2RAD:$s,RAD2DEG:xs,generateUUID:En,clamp:Qe,euclideanModulo:kl,mapLinear:Af,inverseLerp:Rf,lerp:Zs,damp:Cf,pingpong:Pf,smoothstep:Df,smootherstep:Lf,randInt:If,randFloat:Uf,randFloatSpread:Nf,seededRandom:Of,degToRad:Ff,radToDeg:Bf,isPowerOfTwo:kf,ceilPowerOfTwo:zf,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:Vf,normalize:dt,denormalize:xn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],x=s[0],m=s[3],p=s[6],T=s[1],y=s[4],M=s[7],L=s[2],C=s[5],O=s[8];return r[0]=o*x+a*T+l*L,r[3]=o*m+a*y+l*C,r[6]=o*p+a*M+l*O,r[1]=c*x+h*T+u*L,r[4]=c*m+h*y+u*C,r[7]=c*p+h*M+u*O,r[2]=d*x+f*T+v*L,r[5]=d*m+f*y+v*C,r[8]=d*p+f*M+v*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,v=t*u+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new $e;function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){const i=rr("canvas");return i.style.display="block",i}const yc={};function ns(i){i in yc||(yc[i]=!0,console.warn(i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Xf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const i={enabled:!0,workingColorSpace:Lt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?io:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lt]:{primaries:e,whitePoint:n,transfer:io,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}const it=qf();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class jf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=rr("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kf=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(No(s[o].image)):r.push(No(s[o]))}else r=No(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function No(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;class Bt extends Bi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Rn,s=Rn,r=Rt,o=Cn,a=nn,l=In,c=Bt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=En(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=vu;Bt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,L=(p+1)/2,C=(h+d)/4,O=(u+x)/4,I=(v+m)/4;return y>M&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=O/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=O/r,s=I/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zf extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Zf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ou extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jf extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==v){let m=1-a;const p=l*d+c*f+h*v+u*x,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),C=Math.atan2(L,p*T);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const M=a*T;if(l=l*m+d*M,c=c*m+f*M,h=h*m+v*M,u=u*m+x*M,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return e[t]=a*v+h*u+l*f-c*d,e[t+1]=l*v+h*d+c*u-a*f,e[t+2]=c*v+h*f+a*d-l*u,e[t+3]=h*v-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new B,Ec=new Ht;class ni{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),gr.subVectors(this.max,Fs),Gi.subVectors(e.a,Fs),Wi.subVectors(e.b,Fs),Xi.subVectors(e.c,Fs),si.subVectors(Wi,Gi),ri.subVectors(Xi,Wi),Ei.subVectors(Gi,Xi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!Fo(t,Gi,Wi,Xi,gr)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Gi,Wi,Xi,gr))?!1:(_r.crossVectors(si,ri),t=[_r.x,_r.y,_r.z],Fo(t,Gi,Wi,Xi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,mr=new ni,Gi=new B,Wi=new B,Xi=new B,si=new B,ri=new B,Ei=new B,Fs=new B,gr=new B,_r=new B,Ti=new B;function Fo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qf=new ni,Bs=new B,Bo=new B;class Un{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Bo)),this.expandByPoint(Bs.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new B,ko=new B,vr=new B,oi=new B,zo=new B,xr=new B,Ho=new B;class ws{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ko.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ko);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=oi.dot(this.direction),l=-oi.dot(vr),c=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,v;if(h>0)if(u=o*l-a,d=o*a-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ko).addScaledVector(vr,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){zo.subVectors(t,e),xr.subVectors(n,e),Ho.crossVectors(zo,xr);let o=this.direction.dot(Ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(xr.crossVectors(oi,xr));if(l<0)return null;const c=a*this.direction.dot(zo.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(Ho);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,v,x,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,v,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,v,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,v=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d+x*a,t[4]=v*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,v=a*h,x=a*u;t[0]=l*h,t[4]=v*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=v*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+v,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,v=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-v,t[2]=v*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),yr.crossVectors(on,ai),s[0]=ai.x,s[4]=yr.x,s[8]=on.x,s[1]=ai.y,s[5]=yr.y,s[9]=on.y,s[2]=ai.z,s[6]=yr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],x=n[6],m=n[10],p=n[14],T=n[3],y=n[7],M=n[11],L=n[15],C=s[0],O=s[4],I=s[8],b=s[12],S=s[1],F=s[5],q=s[9],X=s[13],Y=s[2],te=s[6],j=s[10],ce=s[14],J=s[3],de=s[7],ge=s[11],Re=s[15];return r[0]=o*C+a*S+l*Y+c*J,r[4]=o*O+a*F+l*te+c*de,r[8]=o*I+a*q+l*j+c*ge,r[12]=o*b+a*X+l*ce+c*Re,r[1]=h*C+u*S+d*Y+f*J,r[5]=h*O+u*F+d*te+f*de,r[9]=h*I+u*q+d*j+f*ge,r[13]=h*b+u*X+d*ce+f*Re,r[2]=v*C+x*S+m*Y+p*J,r[6]=v*O+x*F+m*te+p*de,r[10]=v*I+x*q+m*j+p*ge,r[14]=v*b+x*X+m*ce+p*Re,r[3]=T*C+y*S+M*Y+L*J,r[7]=T*O+y*F+M*te+L*de,r[11]=T*I+y*q+M*j+L*ge,r[15]=T*b+y*X+M*ce+L*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],v=e[12],x=e[13],m=e[14],p=e[15],T=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=v*d*c-h*m*c-v*l*f+o*m*f+h*l*p-o*d*p,M=h*x*c-v*u*c+v*a*f-o*x*f-h*a*p+o*u*p,L=v*u*l-h*x*l-v*a*d+o*x*d+h*a*m-o*u*m,C=t*T+n*y+s*M+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=T*O,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*O,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*O,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*O,e[4]=y*O,e[5]=(h*m*r-v*d*r+v*s*f-t*m*f-h*s*p+t*d*p)*O,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*p-t*l*p)*O,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*O,e[8]=M*O,e[9]=(v*u*r-h*x*r-v*n*f+t*x*f+h*n*p-t*u*p)*O,e[10]=(o*x*r-v*a*r+v*n*c-t*x*c-o*n*p+t*a*p)*O,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*O,e[12]=L*O,e[13]=(h*x*s-v*u*s+v*n*d-t*x*d-h*n*m+t*u*m)*O,e[14]=(v*a*s-o*x*s-v*n*l+t*x*l+o*n*m-t*a*m)*O,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,v=r*u,x=o*h,m=o*u,p=a*u,T=l*c,y=l*h,M=l*u,L=n.x,C=n.y,O=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+M)*L,s[2]=(v-y)*L,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(d+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(v+y)*O,s[9]=(m-T)*O,s[10]=(1-(d+x))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,v;if(a===Zn)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===so)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h;let v,x;if(a===Zn)v=(o+r)*u,x=-2*u;else if(a===so)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new B,mn=new Xe,ep=new B(0,0,0),tp=new B(1,1,1),ai=new B,yr=new B,on=new B,Tc=new Xe,bc=new Ht;class en{constructor(e=0,t=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let np=0;const wc=new B,qi=new Ht,Hn=new Xe,Mr=new B,ks=new B,ip=new B,sp=new Ht,Ac=new B(1,0,0),Rc=new B(0,1,0),Cc=new B(0,0,1),Pc={type:"added"},rp={type:"removed"},ji={type:"childadded",child:null},Vo={type:"childremoved",child:null};class Mt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new B,t=new en,n=new Ht,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new $e}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ks,Mr,this.up):Hn.lookAt(Mr,ks,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Hn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new B(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,Vn=new B,Go=new B,Gn=new B,Ki=new B,$i=new B,Dc=new B,Wo=new B,Xo=new B,Yo=new B,qo=new ct,jo=new ct,Ko=new ct;class yn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gn.subVectors(s,t),Vn.subVectors(n,t),Go.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Vn),l=gn.dot(Go),c=Vn.dot(Vn),h=Vn.dot(Go),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return qo.setScalar(0),jo.setScalar(0),Ko.setScalar(0),qo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(jo,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),Vn.subVectors(e,t),gn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,n),$i.subVectors(r,n),Wo.subVectors(e,n);const l=Ki.dot(Wo),c=$i.dot(Wo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,s);const h=Ki.dot(Xo),u=$i.dot(Xo);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ki,o);Yo.subVectors(e,r);const f=Ki.dot(Yo),v=$i.dot(Yo);if(v>=0&&f<=v)return t.copy(r);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector($i,a);const m=h*v-f*u;if(m<=0&&u-h>=0&&f-v>=0)return Dc.subVectors(r,s),a=(u-h)/(u-h+(f-v)),t.copy(s).addScaledVector(Dc,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ki,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function $o(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=kl(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$o(o,r,e+1/3),this.g=$o(o,r,e),this.b=$o(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return it.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Qe(Xt.r*255,0,255))*65536+Math.round(Qe(Xt.g*255,0,255))*256+Math.round(Qe(Xt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Tt){it.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Sr);const n=Zs(li.h,Sr.h,t),s=Zs(li.s,Sr.s,t),r=Zs(li.l,Sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ve;Ve.NAMES=Fu;let op=0;class Dn extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=En(),this.name="",this.type="Material",this.blending=cs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jn extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $n=ap();function ap(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function lp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Qe(i,-65504,65504),$n.floatView[0]=i;const e=$n.uint32View[0],t=e>>23&511;return $n.baseTable[t]+((e&8388607)>>$n.shiftTable[t])}function cp(i){const e=i>>10;return $n.uint32View[0]=$n.mantissaTable[$n.offsetTable[e]+(i&1023)]+$n.exponentTable[e],$n.floatView[0]}const rs={toHalfFloat:lp,fromHalfFloat:cp},bt=new B,Er=new Ee;let hp=0;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}}class Bu extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ku extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let up=0;const cn=new Xe,Zo=new Mt,Zi=new B,an=new ni,zs=new ni,Ft=new B;class sn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?ku:Bu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(an.min,zs.min),an.expandByPoint(Ft),Ft.addVectors(an.max,zs.max),an.expandByPoint(Ft)):(an.expandByPoint(zs.min),an.expandByPoint(zs.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),Ft.add(Zi)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;const c=new B,h=new B,u=new B,d=new Ee,f=new Ee,v=new Ee,x=new B,m=new B;function p(I,b,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),v.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),v.sub(d);const F=1/(f.x*v.y-v.x*f.y);isFinite(F)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(F),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(F),a[I].add(x),a[b].add(x),a[S].add(x),l[I].add(m),l[b].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,b=T.length;I<b;++I){const S=T[I],F=S.start,q=S.count;for(let X=F,Y=F+q;X<Y;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new B,M=new B,L=new B,C=new B;function O(I){L.fromBufferAttribute(s,I),C.copy(L);const b=a[I];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),M.crossVectors(C,b);const F=M.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,F)}for(let I=0,b=T.length;I<b;++I){const S=T[I],F=S.start,q=S.count;for(let X=F,Y=F+q;X<Y;X+=3)O(e.getX(X+0)),O(e.getX(X+1)),O(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[v++]=c[f++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new Xe,bi=new ws,Tr=new Un,Ic=new B,br=new B,wr=new B,Ar=new B,Jo=new B,Rr=new B,Uc=new B,Cr=new B;class jt extends Mt{constructor(e=new sn,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Jo.fromBufferAttribute(u,e),o?Rr.addScaledVector(Jo,h):Rr.addScaledVector(Jo.sub(t),h))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Tr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Tr,Ic)===null||bi.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Lc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,L=y;M<L;M+=3){const C=a.getX(M),O=a.getX(M+1),I=a.getX(M+2);s=Pr(this,p,e,n,c,h,u,C,O,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const T=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Pr(this,o,e,n,c,h,u,T,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,L=y;M<L;M+=3){const C=M,O=M+1,I=M+2;s=Pr(this,p,e,n,c,h,u,C,O,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){const T=m,y=m+1,M=m+2;s=Pr(this,o,e,n,c,h,u,T,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dp(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ln,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Pr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,br),i.getVertexPosition(l,wr),i.getVertexPosition(c,Ar);const h=dp(i,e,t,n,br,wr,Ar,Uc);if(h){const u=new B;yn.getBarycoord(Uc,br,wr,Ar,u),s&&(h.uv=yn.getInterpolatedAttribute(s,a,l,c,u,new Ee)),r&&(h.uv1=yn.getInterpolatedAttribute(r,a,l,c,u,new Ee)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};yn.getNormal(br,wr,Ar,d.normal),h.face=d,h.barycoord=u}return h}class lr extends sn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function v(x,m,p,T,y,M,L,C,O,I,b){const S=M/O,F=L/I,q=M/2,X=L/2,Y=C/2,te=O+1,j=I+1;let ce=0,J=0;const de=new B;for(let ge=0;ge<j;ge++){const Re=ge*F-X;for(let Ce=0;Ce<te;Ce++){const He=Ce*S-q;de[x]=He*T,de[m]=Re*y,de[p]=Y,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=C>0?1:-1,h.push(de.x,de.y,de.z),u.push(Ce/O),u.push(1-ge/I),ce+=1}}for(let ge=0;ge<I;ge++)for(let Re=0;Re<O;Re++){const Ce=d+Re+te*ge,He=d+Re+te*(ge+1),ee=d+(Re+1)+te*(ge+1),fe=d+(Re+1)+te*ge;l.push(Ce,He,fe),l.push(He,ee,fe),J+=6}a.addGroup(f,J,b),f+=J,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=ys(i[t]);for(const s in n)e[s]=n[s]}return e}function fp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Eo={clone:ys,merge:Zt};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hu extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new B,Nc=new Ee,Oc=new Ee;class Yt extends Hu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Oc),t.subVectors(Oc,Nc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class gp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const r=new Yt(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Vu extends Bt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _p extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new lr(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Sn});r.uniforms.tEquirect.value=t;const o=new jt(s,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Rt),new gp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class mi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fc extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new B;class Hl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bc=new B,kc=new ct,zc=new ct,yp=new B,Hc=new Xe,Dr=new B,ea=new Un,Vc=new Xe,ta=new ws;class Mp extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fc,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(s),e.ray.intersectsSphere(ea)!==!1&&(Vc.copy(s).invert(),ta.copy(e.ray).applyMatrix4(Vc),!(this.boundingBox!==null&&ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;kc.fromBufferAttribute(s.attributes.skinIndex,e),zc.fromBufferAttribute(s.attributes.skinWeight,e),Bc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=zc.getComponent(r);if(o!==0){const a=kc.getComponent(r);Hc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yp.copy(Bc).applyMatrix4(Hc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gu extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class To extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=zt,h=zt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gc=new Xe,Sp=new Xe;class Vl{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Sp;Gc.multiplyMatrices(a,t[r]),Gc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new To(t,e,e,nn,kt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gu),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class fl extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Xe,Wc=new Xe,Lr=[],Xc=new ni,Ep=new Xe,Hs=new jt,Vs=new Un;class Tp extends jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ep)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Xc.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(Xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Vs.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),Wc.multiplyMatrices(n,es),Hs.matrixWorld=Wc,Hs.raycast(e,Lr);for(let o=0,a=Lr.length;o<a;o++){const l=Lr[o];l.instanceId=r,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(s*this.count),s,this.count,So,kt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const na=new B,bp=new B,wp=new $e;class di{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=na.subVectors(n,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wp.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Un,Ir=new B;class Gl{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],v=s[9],x=s[10],m=s[11],p=s[12],T=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+o,d+h,m+v,M+T).normalize(),n[3].setComponents(l-o,d-h,m-v,M-T).normalize(),n[4].setComponents(l-a,d-u,m-x,M-y).normalize(),t===Zn)n[5].setComponents(l+a,d+u,m+x,M+y).normalize();else if(t===so)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wu extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ro=new B,oo=new B,Yc=new Xe,Gs=new ws,Ur=new Un,ia=new B,qc=new B;class Wl extends Mt{constructor(e=new sn,t=new Wu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ro.fromBufferAttribute(t,s-1),oo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ro.distanceTo(oo);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;Yc.copy(s).invert(),Gs.copy(e.ray).applyMatrix4(Yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let x=f,m=v-1;x<m;x+=c){const p=h.getX(x),T=h.getX(x+1),y=Nr(this,e,Gs,l,p,T,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(v-1),m=h.getX(f),p=Nr(this,e,Gs,l,x,m,v-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=f,m=v-1;x<m;x+=c){const p=Nr(this,e,Gs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Nr(this,e,Gs,l,v-1,f,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(ro.fromBufferAttribute(a,s),oo.fromBufferAttribute(a,r),t.distanceSqToSegment(ro,oo,ia,qc)>n)return;ia.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ia);if(!(c<e.near||c>e.far))return{distance:c,point:qc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const jc=new B,Kc=new B;class Ap extends Wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)jc.fromBufferAttribute(t,s),Kc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jc.distanceTo(Kc);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rp extends Wl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xu extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $c=new Xe,pl=new ws,Or=new Un,Fr=new B;class Cp extends Mt{constructor(e=new sn,t=new Xu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;$c.copy(s).invert(),pl.copy(e.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,x=f;v<x;v++){const m=c.getX(v);Fr.fromBufferAttribute(u,m),Zc(Fr,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let v=d,x=f;v<x;v++)Fr.fromBufferAttribute(u,v),Zc(Fr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zc(i,e,t,n,s,r,o){const a=pl.distanceSqToPoint(i);if(a<t){const l=new B;pl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yu extends Bt{constructor(e,t,n,s,r,o,a,l,c,h=hs){if(h!==hs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Fi),n===void 0&&h===vs&&(n=_s),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xl extends sn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const y=new B,M=new B,L=new B;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],M),f(t[C+2],L),l(y,M,L,T)}function l(T,y,M,L){const C=L+1,O=[];for(let I=0;I<=C;I++){O[I]=[];const b=T.clone().lerp(M,I/C),S=y.clone().lerp(M,I/C),F=C-I;for(let q=0;q<=F;q++)q===0&&I===C?O[I][q]=b:O[I][q]=b.clone().lerp(S,q/F)}for(let I=0;I<C;I++)for(let b=0;b<2*(C-I)-1;b++){const S=Math.floor(b/2);b%2===0?(d(O[I][S+1]),d(O[I+1][S]),d(O[I][S])):(d(O[I][S+1]),d(O[I+1][S+1]),d(O[I+1][S]))}}function c(T){const y=new B;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(T),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const T=new B;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];const M=m(T)/2/Math.PI+.5,L=p(T)/Math.PI+.5;o.push(M,1-L)}v(),u()}function u(){for(let T=0;T<o.length;T+=6){const y=o[T+0],M=o[T+2],L=o[T+4],C=Math.max(y,M,L),O=Math.min(y,M,L);C>.9&&O<.1&&(y<.2&&(o[T+0]+=1),M<.2&&(o[T+2]+=1),L<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,y){const M=T*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){const T=new B,y=new B,M=new B,L=new B,C=new Ee,O=new Ee,I=new Ee;for(let b=0,S=0;b<r.length;b+=9,S+=6){T.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),C.set(o[S+0],o[S+1]),O.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),L.copy(T).add(y).add(M).divideScalar(3);const F=m(L);x(C,S+0,T,F),x(O,S+2,y,F),x(I,S+4,M,F)}}function x(T,y,M,L){L<0&&T.x===1&&(o[y]=T.x-1),M.x===0&&M.z===0&&(o[y]=L/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.vertices,e.indices,e.radius,e.details)}}class Yl extends Xl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class bo extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],v=[],x=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let y=0;y<c;y++){const M=y*u-r;v.push(M,-T,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const y=T+c*p,M=T+c*(p+1),L=T+1+c*(p+1),C=T+1+c*p;f.push(y,M,C),f.push(M,L,C)}this.setIndex(f),this.setAttribute("position",new Gt(v,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new B,d=new B,f=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const T=[],y=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+M,1-y),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const y=h[p][T+1],M=h[p][T],L=h[p+1][T],C=h[p+1][T+1];(p!==0||o>0)&&f.push(y,M,C),(p!==n-1||l<Math.PI)&&f.push(M,L,C)}this.setIndex(f),this.setAttribute("position",new Gt(v,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pp extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wo extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends wo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qu extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dp extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Br(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ip(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Jc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ju(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class cr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Up extends cr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mc:r=e,a=2*t-n;break;case gc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mc:o=e,l=2*n-t;break;case gc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),x=v*v,m=x*v,p=-d*m+2*d*x-d*v,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*v+1,y=(-1-f)*m+(1.5+f)*x+.5*v,M=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+T*o[c+L]+y*o[l+L]+M*o[u+L];return r}}class Np extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Op extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Br(t,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Br(e.times,Array),values:Br(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Op(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Up(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Lp(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let v=0;v!==n;++v){const x=t[u+v];if(x!==t[d+v]||x!==t[f+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=sr;class As extends On{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ir;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ku extends On{}Ku.prototype.ValueTypeName="color";class Ms extends On{}Ms.prototype.ValueTypeName="number";class Fp extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ht.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ss extends On{InterpolantFactoryMethodLinear(e){return new Fp(this.times,this.values,this.getValueSize(),e)}}Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends On{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ir;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends On{}Es.prototype.ValueTypeName="vector";class Bp{constructor(e="",t=-1,n=[],s=gf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zp(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Ip(l);l=Jc(l,1,h),c=Jc(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,v,x){if(f.length!==0){const m=[],p=[];ju(f,m,p,v),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)f[d[v].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let T=0;T!==d[v].morphTargets.length;++T){const y=d[v];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ms(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Es,f+".position",d,"pos",s),n(Ss,f+".quaternion",d,"rot",s),n(Es,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Ku;case"quaternion":return Ss;case"bool":case"boolean":return As;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kp(i.type);if(i.times===void 0){const t=[],n=[];ju(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Hp{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],v=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const Vp=new Hp;class Mi{constructor(e){this.manager=e!==void 0?e:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Gp extends Error{constructor(e,t){super(e),this.response=t}}class or extends Mi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,v=f!==0;let x=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:y,value:M})=>{if(y)p.close();else{x+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:f});for(let C=0,O=h.length;C<O;C++){const I=h[C];I.onProgress&&I.onProgress(L)}p.enqueue(M),T()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Gp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{gi.add(e,c);const h=Wn[e];delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wp extends Mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=rr("img");function l(){h(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $u extends Mi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new To,a=new or(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Rn,o.wrapT=c.wrapT!==void 0?c.wrapT:Rn,o.magFilter=c.magFilter!==void 0?c.magFilter:Rt,o.minFilter=c.minFilter!==void 0?c.minFilter:Rt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Cn),c.mipmapCount===1&&(o.minFilter=Rt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class jl extends Mi{constructor(e){super(e)}load(e,t,n,s){const r=new Bt,o=new Wp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Kl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sa=new Xe,Qc=new B,eh=new B;class $l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xp extends $l{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yp extends Kl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const th=new Xe,Ws=new B,ra=new B;class qp extends $l{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class is extends Kl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ao extends Hu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jp extends $l{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zu extends Kl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new jp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kp extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,l),r.manager.itemStart(e)}}class $p extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Zp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nh(){return performance.now()}const Zl="\\[\\]\\.:\\/",Jp=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",Qp="[^"+Zl.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",Jl),tm=/(WCOD+)?/.source.replace("WCOD",Qp),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),sm=new RegExp("^"+em+tm+nm+im+"$"),rm=["material","materials","bones","map"];class om{constructor(e,t,n){const s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(e){const t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=om;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ql{constructor(e){this.value=e}clone(){return new Ql(this.value.clone===void 0?this.value:this.value.clone())}}const ih=new Xe;class am{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(sh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,n,t);return n.sort(sh),n}}function sh(i,e){return i.distance-e.distance}function ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],e,t,!0)}}class rh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lm extends jt{constructor(e,t,n){const s=new ql(t,4,2),r=new Jn({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class cm extends Bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function oh(i,e,t,n){const s=hm(n);switch(t){case Eu:return i*e;case bu:return i*e;case wu:return i*e*2;case So:return i*e/s.components*s.byteLength;case Ol:return i*e/s.components*s.byteLength;case Au:return i*e*2/s.components*s.byteLength;case Fl:return i*e*2/s.components*s.byteLength;case Tu:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Bl:return i*e*4/s.components*s.byteLength;case jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:case Va:return Math.max(i,16)*Math.max(e,8)/4;case ka:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jr:case ol:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ru:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hm(i){switch(i){case In:case yu:return{byteLength:1,components:1};case nr:case Mu:case At:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case Fi:case Il:case kt:return{byteLength:4,components:1};case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ju(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function um(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){const v=u[d],x=u[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:vm,aomap_pars_fragment:xm,batching_pars_vertex:ym,batching_vertex:Mm,begin_vertex:Sm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:bm,bumpmap_pars_fragment:wm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Dm,color_pars_fragment:Lm,color_pars_vertex:Im,color_vertex:Um,common:Nm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Bm,displacementmap_vertex:km,emissivemap_fragment:zm,emissivemap_pars_fragment:Hm,colorspace_fragment:Vm,colorspace_pars_fragment:Gm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:Ym,envmap_pars_vertex:qm,envmap_physical_pars_fragment:sg,envmap_vertex:jm,fog_vertex:Km,fog_pars_vertex:$m,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:og,lights_phong_fragment:ag,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:vg,map_pars_fragment:xg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Tg,morphcolor_vertex:bg,morphnormal_vertex:wg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Pg,normal_pars_fragment:Dg,normal_pars_vertex:Lg,normal_vertex:Ig,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Bg,opaque_fragment:kg,packing:zg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:Gg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:jg,shadowmap_vertex:Kg,shadowmask_pars_fragment:$g,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:s_,transmission_fragment:r_,transmission_pars_fragment:o_,uv_pars_fragment:a_,uv_pars_vertex:l_,uv_vertex:c_,worldpos_vertex:h_,background_vert:u_,background_frag:d_,backgroundCube_vert:f_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:__,depth_frag:v_,distanceRGBA_vert:x_,distanceRGBA_frag:y_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:E_,linedashed_frag:T_,meshbasic_vert:b_,meshbasic_frag:w_,meshlambert_vert:A_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:P_,meshnormal_vert:D_,meshnormal_frag:L_,meshphong_vert:I_,meshphong_frag:U_,meshphysical_vert:N_,meshphysical_frag:O_,meshtoon_vert:F_,meshtoon_frag:B_,points_vert:k_,points_frag:z_,shadow_vert:H_,shadow_frag:V_,sprite_vert:G_,sprite_frag:W_},xe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},An={basic:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Zt([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Zt([xe.lights,xe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};An.physical={uniforms:Zt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const kr={r:0,b:0,g:0},Ai=new en,X_=new Xe;function Y_(i,e,t,n,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function v(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function x(y){let M=!1;const L=v(y);L===null?p(a,l):L&&L.isColor&&(p(L,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){const L=v(M);L&&(L.isCubeTexture||L.mapping===Mo)?(h===void 0&&(h=new jt(new lr(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:ys(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(M.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(Ai)),h.material.toneMapped=it.getTransfer(L.colorSpace)!==ut,(u!==L||d!==L.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new jt(new bo(2,2),new qt({name:"BackgroundMaterial",uniforms:ys(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=it.getTransfer(L.colorSpace)!==ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(kr,zu(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,M,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m,dispose:T}}function q_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,F,q,X,Y){let te=!1;const j=u(X,q,F);r!==j&&(r=j,c(r.object)),te=f(S,X,q,Y),te&&v(S,X,q,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(S,F,q,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,F,q){const X=q.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let te=Y[F.id];te===void 0&&(te={},Y[F.id]=te);let j=te[X];return j===void 0&&(j=d(l()),te[X]=j),j}function d(S){const F=[],q=[],X=[];for(let Y=0;Y<t;Y++)F[Y]=0,q[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:X,object:S,attributes:{},index:null}}function f(S,F,q,X){const Y=r.attributes,te=F.attributes;let j=0;const ce=q.getAttributes();for(const J in ce)if(ce[J].location>=0){const ge=Y[J];let Re=te[J];if(Re===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),ge===void 0||ge.attribute!==Re||Re&&ge.data!==Re.data)return!0;j++}return r.attributesNum!==j||r.index!==X}function v(S,F,q,X){const Y={},te=F.attributes;let j=0;const ce=q.getAttributes();for(const J in ce)if(ce[J].location>=0){let ge=te[J];ge===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor));const Re={};Re.attribute=ge,ge&&ge.data&&(Re.data=ge.data),Y[J]=Re,j++}r.attributes=Y,r.attributesNum=j,r.index=X}function x(){const S=r.newAttributes;for(let F=0,q=S.length;F<q;F++)S[F]=0}function m(S){p(S,0)}function p(S,F){const q=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;q[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),Y[S]!==F&&(i.vertexAttribDivisor(S,F),Y[S]=F)}function T(){const S=r.newAttributes,F=r.enabledAttributes;for(let q=0,X=F.length;q<X;q++)F[q]!==S[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function y(S,F,q,X,Y,te,j){j===!0?i.vertexAttribIPointer(S,F,q,Y,te):i.vertexAttribPointer(S,F,q,X,Y,te)}function M(S,F,q,X){x();const Y=X.attributes,te=q.getAttributes(),j=F.defaultAttributeValues;for(const ce in te){const J=te[ce];if(J.location>=0){let de=Y[ce];if(de===void 0&&(ce==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),ce==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const ge=de.normalized,Re=de.itemSize,Ce=e.get(de);if(Ce===void 0)continue;const He=Ce.buffer,ee=Ce.type,fe=Ce.bytesPerElement,ue=ee===i.INT||ee===i.UNSIGNED_INT||de.gpuType===Il;if(de.isInterleavedBufferAttribute){const ve=de.data,me=ve.stride,Ie=de.offset;if(ve.isInstancedInterleavedBuffer){for(let ke=0;ke<J.locationSize;ke++)p(J.location+ke,ve.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ke=0;ke<J.locationSize;ke++)m(J.location+ke);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ke=0;ke<J.locationSize;ke++)y(J.location+ke,Re/J.locationSize,ee,ge,me*fe,(Ie+Re/J.locationSize*ke)*fe,ue)}else{if(de.isInstancedBufferAttribute){for(let ve=0;ve<J.locationSize;ve++)p(J.location+ve,de.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<J.locationSize;ve++)m(J.location+ve);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ve=0;ve<J.locationSize;ve++)y(J.location+ve,Re/J.locationSize,ee,ge,Re*fe,Re/J.locationSize*ve*fe,ue)}}else if(j!==void 0){const ge=j[ce];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(J.location,ge);break;case 3:i.vertexAttrib3fv(J.location,ge);break;case 4:i.vertexAttrib4fv(J.location,ge);break;default:i.vertexAttrib1fv(J.location,ge)}}}}T()}function L(){I();for(const S in n){const F=n[S];for(const q in F){const X=F[q];for(const Y in X)h(X[Y].object),delete X[Y];delete F[q]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const F=n[S.id];for(const q in F){const X=F[q];for(const Y in X)h(X[Y].object),delete X[Y];delete F[q]}delete n[S.id]}function O(S){for(const F in n){const q=n[F];if(q[S.id]===void 0)continue;const X=q[S.id];for(const Y in X)h(X[Y].object),delete X[Y];delete q[S.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function j_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*d[x];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function K_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==nn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const I=O===At&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==In&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==kt&&!I)}function l(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function $_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new di,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,y=T*4;let M=p.clippingState||null;l.value=M,M=h(v,d,y,f);for(let L=0;L!==y;++L)M[L]=t[L];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Z_(i){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=ms:a===Ba&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Ba)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _p(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const os=4,ah=[.125,.215,.35,.446,.526,.582],Ii=20,oa=new Ao,lh=new Ve;let aa=null,la=0,ca=0,ha=!1;const Di=(1+Math.sqrt(5))/2,ts=1/Di,ch=[new B(-Di,ts,0),new B(Di,ts,0),new B(-ts,0,Di),new B(ts,0,Di),new B(0,Di,-ts),new B(0,Di,ts),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,la,ca),this._renderer.xr.enabled=ha,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:At,format:nn,colorSpace:Lt,depthBuffer:!1},s=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J_(r)),this._blurMaterial=Q_(r,e,t)}return s}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,s){const a=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lh),h.toneMapping=vi,h.autoClear=!1;const f=new Jn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new jt(new lr,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(lh),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;zr(s,T*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ms||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ch[(s-r-1)%ch.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new jt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let T=0;for(let O=0;O<Ii;++O){const I=O/x,b=Math.exp(-I*I/2);p.push(b),O===0?T+=b:O<m&&(T+=2*b)}for(let O=0;O<p.length;O++)p[O]=p[O]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const M=this._sizeLods[s],L=3*M*(s>y-os?s-y+os:0),C=4*(this._cubeSize-M);zr(t,L,C,3*M,2*M),l.setRenderTarget(t),l.render(u,oa)}}function J_(i){const e=[],t=[],n=[];let s=i;const r=i-os+1+ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-os?l=ah[o-i+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,x=3,m=2,p=1,T=new Float32Array(x*v*f),y=new Float32Array(m*v*f),M=new Float32Array(p*v*f);for(let C=0;C<f;C++){const O=C%3*2/3-1,I=C>2?0:-1,b=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];T.set(b,x*v*C),y.set(d,m*v*C);const S=[C,C,C,C,C,C];M.set(S,p*v*C)}const L=new sn;L.setAttribute("position",new Vt(T,x)),L.setAttribute("uv",new Vt(y,m)),L.setAttribute("faceIndex",new Vt(M,p)),e.push(L),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(i,e,t){const n=new Jt(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Q_(i,e,t){const n=new Float32Array(Ii),s=new B(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function uh(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function dh(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Ba,h=l===ms||l===gs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new gl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new gl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function t0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n0(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,v=u.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let y=0,M=T.length;y<M;y+=3){const L=T[y+0],C=T[y+1],O=T[y+2];d.push(L,C,C,O,O,L)}}else if(v!==void 0){const T=v.array;x=v.version;for(let y=0,M=T.length/3-1;y<M;y+=3){const L=y+0,C=y+1,O=y+2;d.push(L,C,C,O,O,L)}}else return;const m=new(Uu(d)?ku:Bu)(d,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*o,v),t.update(f,n,v))}function h(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function u(d,f,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,v);let p=0;for(let T=0;T<v;T++)p+=f[T]*x[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function r0(i,e,t){const n=new WeakMap,s=new ct;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),v===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*L*4*u),O=new Ou(C,M,L,u);O.type=kt,O.needsUpdate=!0;const I=y*4;for(let S=0;S<u;S++){const F=m[S],q=p[S],X=T[S],Y=M*L*4*S;for(let te=0;te<F.count;te++){const j=te*I;f===!0&&(s.fromBufferAttribute(F,te),C[Y+j+0]=s.x,C[Y+j+1]=s.y,C[Y+j+2]=s.z,C[Y+j+3]=0),v===!0&&(s.fromBufferAttribute(q,te),C[Y+j+4]=s.x,C[Y+j+5]=s.y,C[Y+j+6]=s.z,C[Y+j+7]=0),x===!0&&(s.fromBufferAttribute(X,te),C[Y+j+8]=s.x,C[Y+j+9]=s.y,C[Y+j+10]=s.z,C[Y+j+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:O,size:new Ee(M,L)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function o0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Qu=new Bt,fh=new Yu(1,1),ed=new Ou,td=new Jf,nd=new Vu,ph=[],mh=[],gh=new Float32Array(16),_h=new Float32Array(9),vh=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ph[s];if(r===void 0&&(r=new Float32Array(s),ph[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ro(i,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function u0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;vh.set(n),i.uniformMatrix2fv(this.addr,!1,vh),Ut(t,n)}}function d0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;_h.set(n),i.uniformMatrix3fv(this.addr,!1,_h),Ut(t,n)}}function f0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;gh.set(n),i.uniformMatrix4fv(this.addr,!1,gh),Ut(t,n)}}function p0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function v0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function S0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=Lu,r=fh):r=Qu,t.setTexture2D(e||r,s)}function E0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||td,s)}function T0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nd,s)}function b0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ed,s)}function w0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return b0}}function A0(i,e){i.uniform1fv(this.addr,e)}function R0(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function C0(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function P0(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function D0(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function L0(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I0(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function U0(i,e){i.uniform1iv(this.addr,e)}function N0(i,e){i.uniform2iv(this.addr,e)}function O0(i,e){i.uniform3iv(this.addr,e)}function F0(i,e){i.uniform4iv(this.addr,e)}function B0(i,e){i.uniform1uiv(this.addr,e)}function k0(i,e){i.uniform2uiv(this.addr,e)}function z0(i,e){i.uniform3uiv(this.addr,e)}function H0(i,e){i.uniform4uiv(this.addr,e)}function V0(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qu,r[o])}function G0(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||td,r[o])}function W0(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nd,r[o])}function X0(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ed,r[o])}function Y0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return D0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return B0;case 36294:return k0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=w0(t.type)}}class j0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}}class K0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function xh(i,e){i.seq.push(e),i.map[e.id]=e}function $0(i,e,t){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xh(t,c===void 0?new q0(a,i,e):new j0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new K0(a),xh(t,u)),t=u}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function yh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Z0=37297;let J0=0;function Q0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Mh=new $e;function ev(i){it._getMatrix(Mh,it.workingColorSpace,i);const e=`mat3( ${Mh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case io:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(e),o)}else return s}function tv(i,e){const t=ev(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nv(i,e){let t;switch(e){case uu:t="Linear";break;case du:t="Reinhard";break;case fu:t="Cineon";break;case pu:t="ACESFilmic";break;case gu:t="AgX";break;case _u:t="Neutral";break;case mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new B;function iv(){it.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function rv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ov(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function js(i){return i!==""}function Eh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const av=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(av,cv)}const lv=new Map;function cv(i,e){let t=Ze[e];if(t===void 0){const n=lv.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(hv,uv)}function uv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function fv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function mv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hu:e="ENVMAP_BLENDING_MULTIPLY";break;case ff:e="ENVMAP_BLENDING_MIX";break;case pf:e="ENVMAP_BLENDING_ADD";break}return e}function gv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _v(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dv(t),c=fv(t),h=pv(t),u=mv(t),d=gv(t),f=sv(t),v=rv(r),x=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==vi?nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,tv("linearToOutputTexel",t.outputColorSpace),iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=_l(o),o=Eh(o,t),o=Th(o,t),a=_l(a),a=Eh(a,t),a=Th(a,t),o=bh(o),a=bh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+o,M=T+p+a,L=yh(s,s.VERTEX_SHADER,y),C=yh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function O(F){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(C).trim();let te=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,C);else{const ce=Sh(s,L,"vertex"),J=Sh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+ce+`
`+J)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(X===""||Y==="")&&(j=!1);j&&(F.diagnostics={runnable:te,programLog:q,vertexShader:{log:X,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(L),s.deleteShader(C),I=new Qr(s,x),b=ov(s,x)}let I;this.getUniforms=function(){return I===void 0&&O(this),I};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Z0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=C,this}let vv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yv(e),t.set(e,n)),n}}class yv{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}}function Mv(i,e,t,n,s,r,o){const a=new zl,l=new xv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,F,q,X){const Y=q.fog,te=X.geometry,j=b.isMeshStandardMaterial?q.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),J=ce&&ce.mapping===Mo?ce.image.height:null,de=v[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Re=ge!==void 0?ge.length:0;let Ce=0;te.morphAttributes.position!==void 0&&(Ce=1),te.morphAttributes.normal!==void 0&&(Ce=2),te.morphAttributes.color!==void 0&&(Ce=3);let He,ee,fe,ue;if(de){const at=An[de];He=at.vertexShader,ee=at.fragmentShader}else He=b.vertexShader,ee=b.fragmentShader,l.update(b),fe=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);const ve=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ie=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,pt=!!b.map,mt=!!b.matcap,Je=!!ce,k=!!b.aoMap,Kt=!!b.lightMap,tt=!!b.bumpMap,nt=!!b.normalMap,Be=!!b.displacementMap,_t=!!b.emissiveMap,Oe=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,K=b.clearcoat>0,re=b.dispersion>0,le=b.iridescence>0,ne=b.sheen>0,Ue=b.transmission>0,ye=E&&!!b.anisotropyMap,Te=K&&!!b.clearcoatMap,st=K&&!!b.clearcoatNormalMap,_e=K&&!!b.clearcoatRoughnessMap,we=le&&!!b.iridescenceMap,Le=le&&!!b.iridescenceThicknessMap,Ne=ne&&!!b.sheenColorMap,be=ne&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,ze=!!b.specularColorMap,qe=!!b.specularIntensityMap,V=Ue&&!!b.transmissionMap,$=Ue&&!!b.thicknessMap,Q=!!b.gradientMap,oe=!!b.alphaMap,Se=b.alphaTest>0,Me=!!b.alphaHash,je=!!b.extensions;let yt=vi;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Nt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:ee,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ke,batchingColor:ke&&X._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&X.instanceColor!==null,instancingMorph:Ie&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Lt,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:mt,envMap:Je,envMapMode:Je&&ce.mapping,envMapCubeUVHeight:J,aoMap:k,lightMap:Kt,bumpMap:tt,normalMap:nt,displacementMap:d&&Be,emissiveMap:_t,normalMapObjectSpace:nt&&b.normalMapType===xf,normalMapTangentSpace:nt&&b.normalMapType===Du,metalnessMap:Oe,roughnessMap:P,anisotropy:E,anisotropyMap:ye,clearcoat:K,clearcoatMap:Te,clearcoatNormalMap:st,clearcoatRoughnessMap:_e,dispersion:re,iridescence:le,iridescenceMap:we,iridescenceThicknessMap:Le,sheen:ne,sheenColorMap:Ne,sheenRoughnessMap:be,specularMap:Ye,specularColorMap:ze,specularIntensityMap:qe,transmission:Ue,transmissionMap:V,thicknessMap:$,gradientMap:Q,opaque:b.transparent===!1&&b.blending===cs&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:Se,alphaHash:Me,combine:b.combine,mapUv:pt&&x(b.map.channel),aoMapUv:k&&x(b.aoMap.channel),lightMapUv:Kt&&x(b.lightMap.channel),bumpMapUv:tt&&x(b.bumpMap.channel),normalMapUv:nt&&x(b.normalMap.channel),displacementMapUv:Be&&x(b.displacementMap.channel),emissiveMapUv:_t&&x(b.emissiveMap.channel),metalnessMapUv:Oe&&x(b.metalnessMap.channel),roughnessMapUv:P&&x(b.roughnessMap.channel),anisotropyMapUv:ye&&x(b.anisotropyMap.channel),clearcoatMapUv:Te&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(b.sheenRoughnessMap.channel),specularMapUv:Ye&&x(b.specularMap.channel),specularColorMapUv:ze&&x(b.specularColorMap.channel),specularIntensityMapUv:qe&&x(b.specularIntensityMap.channel),transmissionMapUv:V&&x(b.transmissionMap.channel),thicknessMapUv:$&&x(b.thicknessMap.channel),alphaMapUv:oe&&x(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(nt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!te.attributes.uv&&(pt||oe),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:me,skinning:X.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&b.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)S.push(F),S.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(T(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const S=v[b.type];let F;if(S){const q=An[S];F=Eo.clone(q.uniforms)}else F=b.uniforms;return F}function L(b,S){let F;for(let q=0,X=h.length;q<X;q++){const Y=h[q];if(Y.cacheKey===S){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new _v(i,S,b,r),h.push(F)),F}function C(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function O(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:O,programs:h,dispose:I}}function Sv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ev(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ah(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,v,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,v,x,m){const p=o(u,d,f,v,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,v,x,m){const p=o(u,d,f,v,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Ev),n.length>1&&n.sort(d||Ah),s.length>1&&s.sort(d||Ah)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Tv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rh,i.set(n,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function bv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ve};break;case"SpotLight":t={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Av=0;function Rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cv(i){const e=new bv,t=wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new Xe,o=new Xe;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,v=0,x=0,m=0,p=0,T=0,y=0,M=0,L=0,C=0,O=0;c.sort(Rv);for(let b=0,S=c.length;b<S;b++){const F=c[b],q=F.color,X=F.intensity,Y=F.distance,te=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=q.r*X,u+=q.g*X,d+=q.b*X;else if(F.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(F.sh.coefficients[j],X);O++}else if(F.isDirectionalLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ce=F.shadow,J=t.get(F);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=F.shadow.matrix,T++}n.directional[f]=j,f++}else if(F.isSpotLight){const j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(q).multiplyScalar(X),j.distance=Y,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,n.spot[x]=j;const ce=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,ce.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[x]=ce.matrix,F.castShadow){const J=t.get(F);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=te,M++}x++}else if(F.isRectAreaLight){const j=e.get(F);j.color.copy(q).multiplyScalar(X),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=j,m++}else if(F.isPointLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){const ce=F.shadow,J=t.get(F);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,J.shadowCameraNear=ce.camera.near,J.shadowCameraFar=ce.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=te,n.pointShadowMatrix[v]=F.shadow.matrix,y++}n.point[v]=j,v++}else if(F.isHemisphereLight){const j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(X),j.groundColor.copy(F.groundColor).multiplyScalar(X),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==O)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=O,I.directionalLength=f,I.pointLength=v,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=O,n.version=Av++)}function l(c,h){let u=0,d=0,f=0,v=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Ch(i){const e=new Cv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ch(i),e.set(s,[a])):r>=o.length?(a=new Ch(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iv(i,e,t){let n=new Gl;const s=new Ee,r=new Ee,o=new ct,a=new qu({depthPacking:Pu}),l=new Dp,c={},h=t.maxTextureSize,u={[Ln]:Qt,[Qt]:Ln,[un]:un},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Dv,fragmentShader:Lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(C,O,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Sn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const X=p!==bn&&this.type===bn,Y=p===bn&&this.type!==bn;for(let te=0,j=C.length;te<j;te++){const ce=C[te],J=ce.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const de=J.getFrameExtents();if(s.multiply(de),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,J.mapSize.y=r.y)),J.map===null||X===!0||Y===!0){const Re=this.type!==bn?{minFilter:zt,magFilter:zt}:{};J.map!==null&&J.map.dispose(),J.map=new Jt(s.x,s.y,Re),J.map.texture.name=ce.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ge=J.getViewportCount();for(let Re=0;Re<ge;Re++){const Ce=J.getViewport(Re);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),q.viewport(o),J.updateMatrices(ce,Re),n=J.getFrustum(),M(O,I,J.camera,ce,this.type)}J.isPointLightShadow!==!0&&this.type===bn&&T(J,I),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,F)};function T(C,O){const I=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jt(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(O,null,I,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(O,null,I,f,x,null)}function y(C,O,I,b){let S=null;const F=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)S=F;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const q=S.uuid,X=O.uuid;let Y=c[q];Y===void 0&&(Y={},c[q]=Y);let te=Y[X];te===void 0&&(te=S.clone(),Y[X]=te,O.addEventListener("dispose",L)),S=te}if(S.visible=O.visible,S.wireframe=O.wireframe,b===bn?S.side=O.shadowSide!==null?O.shadowSide:O.side:S.side=O.shadowSide!==null?O.shadowSide:u[O.side],S.alphaMap=O.alphaMap,S.alphaTest=O.alphaTest,S.map=O.map,S.clipShadows=O.clipShadows,S.clippingPlanes=O.clippingPlanes,S.clipIntersection=O.clipIntersection,S.displacementMap=O.displacementMap,S.displacementScale=O.displacementScale,S.displacementBias=O.displacementBias,S.wireframeLinewidth=O.wireframeLinewidth,S.linewidth=O.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=i.properties.get(S);q.light=I}return S}function M(C,O,I,b,S){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===bn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const X=e.update(C),Y=C.material;if(Array.isArray(Y)){const te=X.groups;for(let j=0,ce=te.length;j<ce;j++){const J=te[j],de=Y[J.materialIndex];if(de&&de.visible){const ge=y(C,de,b,S);C.onBeforeShadow(i,C,O,I,X,ge,J),i.renderBufferDirect(I,null,X,ge,C,J),C.onAfterShadow(i,C,O,I,X,ge,J)}}}else if(Y.visible){const te=y(C,Y,b,S);C.onBeforeShadow(i,C,O,I,X,te,null),i.renderBufferDirect(I,null,X,te,C,null),C.onAfterShadow(i,C,O,I,X,te,null)}}const q=C.children;for(let X=0,Y=q.length;X<Y;X++)M(q[X],O,I,b,S)}function L(C){C.target.removeEventListener("dispose",L);for(const I in c){const b=c[I],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Uv={[Pa]:Da,[La]:Na,[Ia]:Oa,[ps]:Ua,[Da]:Pa,[Na]:La,[Oa]:Ia,[Ua]:ps};function Nv(i,e){function t(){let V=!1;const $=new ct;let Q=null;const oe=new ct(0,0,0,0);return{setMask:function(Se){Q!==Se&&!V&&(i.colorMask(Se,Se,Se,Se),Q=Se)},setLocked:function(Se){V=Se},setClear:function(Se,Me,je,yt,Nt){Nt===!0&&(Se*=yt,Me*=yt,je*=yt),$.set(Se,Me,je,yt),oe.equals($)===!1&&(i.clearColor(Se,Me,je,yt),oe.copy($))},reset:function(){V=!1,Q=null,oe.set(-1,0,0,0)}}}function n(){let V=!1,$=!1,Q=null,oe=null,Se=null;return{setReversed:function(Me){if($!==Me){const je=e.get("EXT_clip_control");$?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const yt=Se;Se=null,this.setClear(yt)}$=Me},getReversed:function(){return $},setTest:function(Me){Me?ve(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!V&&(i.depthMask(Me),Q=Me)},setFunc:function(Me){if($&&(Me=Uv[Me]),oe!==Me){switch(Me){case Pa:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Se!==Me&&($&&(Me=1-Me),i.clearDepth(Me),Se=Me)},reset:function(){V=!1,Q=null,oe=null,Se=null,$=!1}}}function s(){let V=!1,$=null,Q=null,oe=null,Se=null,Me=null,je=null,yt=null,Nt=null;return{setTest:function(at){V||(at?ve(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(at){$!==at&&!V&&(i.stencilMask(at),$=at)},setFunc:function(at,rn,fn){(Q!==at||oe!==rn||Se!==fn)&&(i.stencilFunc(at,rn,fn),Q=at,oe=rn,Se=fn)},setOp:function(at,rn,fn){(Me!==at||je!==rn||yt!==fn)&&(i.stencilOp(at,rn,fn),Me=at,je=rn,yt=fn)},setLocked:function(at){V=at},setClear:function(at){Nt!==at&&(i.clearStencil(at),Nt=at)},reset:function(){V=!1,$=null,Q=null,oe=null,Se=null,Me=null,je=null,yt=null,Nt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,T=null,y=null,M=null,L=null,C=null,O=new Ve(0,0,0),I=0,b=!1,S=null,F=null,q=null,X=null,Y=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ce=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=ce>=1):J.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=ce>=2);let de=null,ge={};const Re=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),He=new ct().fromArray(Re),ee=new ct().fromArray(Ce);function fe(V,$,Q,oe){const Se=new Uint8Array(4),Me=i.createTexture();i.bindTexture(V,Me),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<Q;je++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D($+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Me}const ue={};ue[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(ps),tt(!1),nt(hc),ve(i.CULL_FACE),k(Sn);function ve(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function me(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Ie(V,$){return u[V]!==$?(i.bindFramebuffer(V,$),u[V]=$,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function ke(V,$){let Q=f,oe=!1;if(V){Q=d.get($),Q===void 0&&(Q=[],d.set($,Q));const Se=V.textures;if(Q.length!==Se.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,je=Se.length;Me<je;Me++)Q[Me]=i.COLOR_ATTACHMENT0+Me;Q.length=Se.length,oe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Q)}function pt(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const mt={[Li]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};mt[Zd]=i.MIN,mt[Jd]=i.MAX;const Je={[Qd]:i.ZERO,[ef]:i.ONE,[tf]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[sf]:i.DST_ALPHA,[nf]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[cf]:i.CONSTANT_COLOR,[hf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function k(V,$,Q,oe,Se,Me,je,yt,Nt,at){if(V===Sn){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(ve(i.BLEND),x=!0),V!==jd){if(V!==m||at!==b){if((p!==Li||M!==Li)&&(i.blendEquation(i.FUNC_ADD),p=Li,M=Li),at)switch(V){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}T=null,y=null,L=null,C=null,O.set(0,0,0),I=0,m=V,b=at}return}Se=Se||$,Me=Me||Q,je=je||oe,($!==p||Se!==M)&&(i.blendEquationSeparate(mt[$],mt[Se]),p=$,M=Se),(Q!==T||oe!==y||Me!==L||je!==C)&&(i.blendFuncSeparate(Je[Q],Je[oe],Je[Me],Je[je]),T=Q,y=oe,L=Me,C=je),(yt.equals(O)===!1||Nt!==I)&&(i.blendColor(yt.r,yt.g,yt.b,Nt),O.copy(yt),I=Nt),m=V,b=!1}function Kt(V,$){V.side===un?me(i.CULL_FACE):ve(i.CULL_FACE);let Q=V.side===Qt;$&&(Q=!Q),tt(Q),V.blending===cs&&V.transparent===!1?k(Sn):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const oe=V.stencilWrite;a.setTest(oe),oe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_t(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function nt(V){V!==Xd?(ve(i.CULL_FACE),V!==F&&(V===hc?i.cullFace(i.BACK):V===Yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),F=V}function Be(V){V!==q&&(j&&i.lineWidth(V),q=V)}function _t(V,$,Q){V?(ve(i.POLYGON_OFFSET_FILL),(X!==$||Y!==Q)&&(i.polygonOffset($,Q),X=$,Y=Q)):me(i.POLYGON_OFFSET_FILL)}function Oe(V){V?ve(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function P(V){V===void 0&&(V=i.TEXTURE0+te-1),de!==V&&(i.activeTexture(V),de=V)}function E(V,$,Q){Q===void 0&&(de===null?Q=i.TEXTURE0+te-1:Q=de);let oe=ge[Q];oe===void 0&&(oe={type:void 0,texture:void 0},ge[Q]=oe),(oe.type!==V||oe.texture!==$)&&(de!==Q&&(i.activeTexture(Q),de=Q),i.bindTexture(V,$||ue[V]),oe.type=V,oe.texture=$)}function K(){const V=ge[de];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(V){He.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),He.copy(V))}function be(V){ee.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function Ye(V,$){let Q=c.get($);Q===void 0&&(Q=new WeakMap,c.set($,Q));let oe=Q.get(V);oe===void 0&&(oe=i.getUniformBlockIndex($,V.name),Q.set(V,oe))}function ze(V,$){const oe=c.get($).get(V);l.get($)!==oe&&(i.uniformBlockBinding($,oe,V.__bindingPointIndex),l.set($,oe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,ge={},u={},d=new WeakMap,f=[],v=null,x=!1,m=null,p=null,T=null,y=null,M=null,L=null,C=null,O=new Ve(0,0,0),I=0,b=!1,S=null,F=null,q=null,X=null,Y=null,He.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:me,bindFramebuffer:Ie,drawBuffers:ke,useProgram:pt,setBlending:k,setMaterial:Kt,setFlipSided:tt,setCullFace:nt,setLineWidth:Be,setPolygonOffset:_t,setScissorTest:Oe,activeTexture:P,bindTexture:E,unbindTexture:K,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:we,texImage3D:Le,updateUBOMapping:Ye,uniformBlockBinding:ze,texStorage2D:st,texStorage3D:_e,texSubImage2D:ne,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:Te,scissor:Ne,viewport:be,reset:qe}}function Ov(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return f?new OffscreenCanvas(P,E):rr("canvas")}function x(P,E,K){let re=1;const le=Oe(P);if((le.width>K||le.height>K)&&(re=K/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(re*le.width),Ue=Math.floor(re*le.height);u===void 0&&(u=v(ne,Ue));const ye=E?v(ne,Ue):u;return ye.width=ne,ye.height=Ue,ye.getContext("2d").drawImage(P,0,0,ne,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ne+"x"+Ue+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,E,K,re,le=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=E;if(E===i.RED&&(K===i.FLOAT&&(ne=i.R32F),K===i.HALF_FLOAT&&(ne=i.R16F),K===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.R8UI),K===i.UNSIGNED_SHORT&&(ne=i.R16UI),K===i.UNSIGNED_INT&&(ne=i.R32UI),K===i.BYTE&&(ne=i.R8I),K===i.SHORT&&(ne=i.R16I),K===i.INT&&(ne=i.R32I)),E===i.RG&&(K===i.FLOAT&&(ne=i.RG32F),K===i.HALF_FLOAT&&(ne=i.RG16F),K===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.RG8UI),K===i.UNSIGNED_SHORT&&(ne=i.RG16UI),K===i.UNSIGNED_INT&&(ne=i.RG32UI),K===i.BYTE&&(ne=i.RG8I),K===i.SHORT&&(ne=i.RG16I),K===i.INT&&(ne=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),K===i.UNSIGNED_INT&&(ne=i.RGB32UI),K===i.BYTE&&(ne=i.RGB8I),K===i.SHORT&&(ne=i.RGB16I),K===i.INT&&(ne=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),K===i.UNSIGNED_INT&&(ne=i.RGBA32UI),K===i.BYTE&&(ne=i.RGBA8I),K===i.SHORT&&(ne=i.RGBA16I),K===i.INT&&(ne=i.RGBA32I)),E===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),E===i.RGBA){const Ue=le?io:it.getTransfer(re);K===i.FLOAT&&(ne=i.RGBA32F),K===i.HALF_FLOAT&&(ne=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ne=Ue===ut?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(P,E){let K;return P?E===null||E===Fi||E===_s?K=i.DEPTH24_STENCIL8:E===kt?K=i.DEPTH32F_STENCIL8:E===nr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Fi||E===_s?K=i.DEPTH_COMPONENT24:E===kt?K=i.DEPTH_COMPONENT32F:E===nr&&(K=i.DEPTH_COMPONENT16),K}function L(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),I(E),E.isVideoTexture&&h.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),S(E)}function I(P){const E=n.get(P);if(E.__webglInit===void 0)return;const K=P.source,re=d.get(K);if(re){const le=re[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(P),Object.keys(re).length===0&&d.delete(K)}n.remove(P)}function b(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const K=P.source,re=d.get(K);delete re[E.__cacheKey],o.memory.textures--}function S(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let le=0;le<E.__webglFramebuffer[re].length;le++)i.deleteFramebuffer(E.__webglFramebuffer[re][le]);else i.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)i.deleteFramebuffer(E.__webglFramebuffer[re]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=P.textures;for(let re=0,le=K.length;re<le;re++){const ne=n.get(K[re]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(K[re])}n.remove(P)}let F=0;function q(){F=0}function X(){const P=F;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function Y(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function te(P,E){const K=n.get(P);if(P.isVideoTexture&&Be(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(K,P,E);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function j(P,E){const K=n.get(P);if(P.version>0&&K.__version!==P.version){ee(K,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function ce(P,E){const K=n.get(P);if(P.version>0&&K.__version!==P.version){ee(K,P,E);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function J(P,E){const K=n.get(P);if(P.version>0&&K.__version!==P.version){fe(K,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}const de={[xi]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},ge={[zt]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},Re={[yf]:i.NEVER,[wf]:i.ALWAYS,[Mf]:i.LESS,[Lu]:i.LEQUAL,[Sf]:i.EQUAL,[bf]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function Ce(P,E){if(E.type===kt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rt||E.magFilter===qr||E.magFilter===qs||E.magFilter===Cn||E.minFilter===Rt||E.minFilter===qr||E.minFilter===qs||E.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,de[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ge[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zt||E.minFilter!==qs&&E.minFilter!==Cn||E.type===kt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const re=E.source;let le=d.get(re);le===void 0&&(le={},d.set(re,le));const ne=Y(E);if(ne!==P.__cacheKey){le[ne]===void 0&&(le[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),le[ne].usedTimes++;const Ue=le[P.__cacheKey];Ue!==void 0&&(le[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(E)),P.__cacheKey=ne,P.__webglTexture=le[ne].texture}return K}function ee(P,E,K){let re=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=i.TEXTURE_3D);const le=He(P,E),ne=E.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+K);const Ue=n.get(ne);if(ne.version!==Ue.__version||le===!0){t.activeTexture(i.TEXTURE0+K);const ye=it.getPrimaries(it.workingColorSpace),Te=E.colorSpace===Kn?null:it.getPrimaries(E.colorSpace),st=E.colorSpace===Kn||ye===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let _e=x(E.image,!1,s.maxTextureSize);_e=_t(E,_e);const we=r.convert(E.format,E.colorSpace),Le=r.convert(E.type);let Ne=y(E.internalFormat,we,Le,E.colorSpace,E.isVideoTexture);Ce(re,E);let be;const Ye=E.mipmaps,ze=E.isVideoTexture!==!0,qe=Ue.__version===void 0||le===!0,V=ne.dataReady,$=L(E,_e);if(E.isDepthTexture)Ne=M(E.format===vs,E.type),qe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ne,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ne,_e.width,_e.height,0,we,Le,null));else if(E.isDataTexture)if(Ye.length>0){ze&&qe&&t.texStorage2D(i.TEXTURE_2D,$,Ne,Ye[0].width,Ye[0].height);for(let Q=0,oe=Ye.length;Q<oe;Q++)be=Ye[Q],ze?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,we,Le,be.data):t.texImage2D(i.TEXTURE_2D,Q,Ne,be.width,be.height,0,we,Le,be.data);E.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(i.TEXTURE_2D,$,Ne,_e.width,_e.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,we,Le,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,_e.width,_e.height,0,we,Le,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,Ne,Ye[0].width,Ye[0].height,_e.depth);for(let Q=0,oe=Ye.length;Q<oe;Q++)if(be=Ye[Q],E.format!==nn)if(we!==null)if(ze){if(V)if(E.layerUpdates.size>0){const Se=oh(be.width,be.height,E.format,E.type);for(const Me of E.layerUpdates){const je=be.data.subarray(Me*Se/be.data.BYTES_PER_ELEMENT,(Me+1)*Se/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Me,be.width,be.height,1,we,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,_e.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ne,be.width,be.height,_e.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,_e.depth,we,Le,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ne,be.width,be.height,_e.depth,0,we,Le,be.data)}else{ze&&qe&&t.texStorage2D(i.TEXTURE_2D,$,Ne,Ye[0].width,Ye[0].height);for(let Q=0,oe=Ye.length;Q<oe;Q++)be=Ye[Q],E.format!==nn?we!==null?ze?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ne,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,we,Le,be.data):t.texImage2D(i.TEXTURE_2D,Q,Ne,be.width,be.height,0,we,Le,be.data)}else if(E.isDataArrayTexture)if(ze){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,Ne,_e.width,_e.height,_e.depth),V)if(E.layerUpdates.size>0){const Q=oh(_e.width,_e.height,E.format,E.type);for(const oe of E.layerUpdates){const Se=_e.data.subarray(oe*Q/_e.data.BYTES_PER_ELEMENT,(oe+1)*Q/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,_e.width,_e.height,1,we,Le,Se)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,we,Le,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,we,Le,_e.data);else if(E.isData3DTexture)ze?(qe&&t.texStorage3D(i.TEXTURE_3D,$,Ne,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,we,Le,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,we,Le,_e.data);else if(E.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(i.TEXTURE_2D,$,Ne,_e.width,_e.height);else{let Q=_e.width,oe=_e.height;for(let Se=0;Se<$;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ne,Q,oe,0,we,Le,null),Q>>=1,oe>>=1}}else if(Ye.length>0){if(ze&&qe){const Q=Oe(Ye[0]);t.texStorage2D(i.TEXTURE_2D,$,Ne,Q.width,Q.height)}for(let Q=0,oe=Ye.length;Q<oe;Q++)be=Ye[Q],ze?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,we,Le,be):t.texImage2D(i.TEXTURE_2D,Q,Ne,we,Le,be);E.generateMipmaps=!1}else if(ze){if(qe){const Q=Oe(_e);t.texStorage2D(i.TEXTURE_2D,$,Ne,Q.width,Q.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Le,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ne,we,Le,_e);m(E)&&p(re),Ue.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function fe(P,E,K){if(E.image.length!==6)return;const re=He(P,E),le=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);const ne=n.get(le);if(le.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+K);const Ue=it.getPrimaries(it.workingColorSpace),ye=E.colorSpace===Kn?null:it.getPrimaries(E.colorSpace),Te=E.colorSpace===Kn||Ue===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,we=[];for(let oe=0;oe<6;oe++)!st&&!_e?we[oe]=x(E.image[oe],!0,s.maxCubemapSize):we[oe]=_e?E.image[oe].image:E.image[oe],we[oe]=_t(E,we[oe]);const Le=we[0],Ne=r.convert(E.format,E.colorSpace),be=r.convert(E.type),Ye=y(E.internalFormat,Ne,be,E.colorSpace),ze=E.isVideoTexture!==!0,qe=ne.__version===void 0||re===!0,V=le.dataReady;let $=L(E,Le);Ce(i.TEXTURE_CUBE_MAP,E);let Q;if(st){ze&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$,Ye,Le.width,Le.height);for(let oe=0;oe<6;oe++){Q=we[oe].mipmaps;for(let Se=0;Se<Q.length;Se++){const Me=Q[Se];E.format!==nn?Ne!==null?ze?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Me.width,Me.height,Ne,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,Ye,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Me.width,Me.height,Ne,be,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,Ye,Me.width,Me.height,0,Ne,be,Me.data)}}}else{if(Q=E.mipmaps,ze&&qe){Q.length>0&&$++;const oe=Oe(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$,Ye,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(_e){ze?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,we[oe].width,we[oe].height,Ne,be,we[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,we[oe].width,we[oe].height,0,Ne,be,we[oe].data);for(let Se=0;Se<Q.length;Se++){const je=Q[Se].image[oe].image;ze?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,je.width,je.height,Ne,be,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,Ye,je.width,je.height,0,Ne,be,je.data)}}else{ze?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,be,we[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,Ne,be,we[oe]);for(let Se=0;Se<Q.length;Se++){const Me=Q[Se];ze?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Ne,be,Me.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,Ye,Ne,be,Me.image[oe])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),ne.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ue(P,E,K,re,le,ne){const Ue=r.convert(K.format,K.colorSpace),ye=r.convert(K.type),Te=y(K.internalFormat,Ue,ye,K.colorSpace),st=n.get(E),_e=n.get(K);if(_e.__renderTarget=E,!st.__hasExternalTextures){const we=Math.max(1,E.width>>ne),Le=Math.max(1,E.height>>ne);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ne,Te,we,Le,E.depth,0,Ue,ye,null):t.texImage2D(le,ne,Te,we,Le,0,Ue,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),nt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,le,_e.__webglTexture,0,tt(E)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,le,_e.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(P,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const re=E.depthTexture,le=re&&re.isDepthTexture?re.type:null,ne=M(E.stencilBuffer,le),Ue=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=tt(E);nt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ne,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,P)}else{const re=E.textures;for(let le=0;le<re.length;le++){const ne=re[le],Ue=r.convert(ne.format,ne.colorSpace),ye=r.convert(ne.type),Te=y(ne.internalFormat,Ue,ye,ne.colorSpace),st=tt(E);K&&nt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Te,E.width,E.height):nt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(E.depthTexture);re.__renderTarget=E,(!re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te(E.depthTexture,0);const le=re.__webglTexture,ne=tt(E);if(E.depthTexture.format===hs)nt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(E.depthTexture.format===vs)nt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const E=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=re}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");me(E.__webglFramebuffer,P)}else if(K){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=i.createRenderbuffer(),ve(E.__webglDepthbuffer[re],P,!1);else{const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ve(E.__webglDepthbuffer,P,!1);else{const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(P,E,K){const re=n.get(P);E!==void 0&&ue(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ie(P)}function pt(P){const E=P.texture,K=n.get(P),re=n.get(E);P.addEventListener("dispose",O);const le=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Ue=le.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=E.version,o.memory.textures++),ne){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let Te=0;Te<E.mipmaps.length;Te++)K.__webglFramebuffer[ye][Te]=i.createFramebuffer()}else K.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)K.__webglFramebuffer[ye]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ye=0,Te=le.length;ye<Te;ye++){const st=n.get(le[ye]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&nt(P)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const Te=le[ye];K.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ye]);const st=r.convert(Te.format,Te.colorSpace),_e=r.convert(Te.type),we=y(Te.internalFormat,st,_e,Te.colorSpace,P.isXRRenderTarget===!0),Le=tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,we,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,K.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ue(K.__webglFramebuffer[ye][Te],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else ue(K.__webglFramebuffer[ye],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ye=0,Te=le.length;ye<Te;ye++){const st=le[ye],_e=n.get(st);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Ce(i.TEXTURE_2D,st),ue(K.__webglFramebuffer,P,st,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(st)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),Ce(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ue(K.__webglFramebuffer[Te],P,E,i.COLOR_ATTACHMENT0,ye,Te);else ue(K.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ye,0);m(E)&&p(ye),t.unbindTexture()}P.depthBuffer&&Ie(P)}function mt(P){const E=P.textures;for(let K=0,re=E.length;K<re;K++){const le=E[K];if(m(le)){const ne=T(P),Ue=n.get(le).__webglTexture;t.bindTexture(ne,Ue),p(ne),t.unbindTexture()}}}const Je=[],k=[];function Kt(P){if(P.samples>0){if(nt(P)===!1){const E=P.textures,K=P.width,re=P.height;let le=i.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(P),ye=E.length>1;if(ye)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);const st=n.get(E[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,K,re,0,0,K,re,le,i.NEAREST),l===!0&&(Je.length=0,k.length=0,Je.push(i.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(ne),k.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);const st=n.get(E[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function tt(P){return Math.min(s.maxSamples,P.samples)}function nt(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function _t(P,E){const K=P.colorSpace,re=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Lt&&K!==Kn&&(it.getTransfer(K)===ut?(re!==nn||le!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=J,this.rebindTextures=ke,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=nt}function Fv(i,e){function t(n,s=Kn){let r;const o=it.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===kt)return i.FLOAT;if(n===At)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===nn)return i.RGBA;if(n===bu)return i.LUMINANCE;if(n===wu)return i.LUMINANCE_ALPHA;if(n===hs)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===Au)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Bl)return i.RGBA_INTEGER;if(n===jr||n===Kr||n===$r||n===Zr)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===za||n===Ha||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===qa||n===ja||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===el||n===tl||n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===ol||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===ll||n===cl||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qt({vertexShader:Bv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hv extends Bi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null;const x=new zv,m=t.getContextAttributes();let p=null,T=null;const y=[],M=[],L=new Ee;let C=null;const O=new Yt;O.viewport=new ct;const I=new Yt;I.viewport=new ct;const b=[O,I],S=new $p;let F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=y[ee];return fe===void 0&&(fe=new Qo,y[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=y[ee];return fe===void 0&&(fe=new Qo,y[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=y[ee];return fe===void 0&&(fe=new Qo,y[ee]=fe),fe.getHandSpace()};function X(ee){const fe=M.indexOf(ee.inputSource);if(fe===-1)return;const ue=y[fe];ue!==void 0&&(ue.update(ee.inputSource,ee.frame,c||o),ue.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",te);for(let ee=0;ee<y.length;ee++){const fe=M[ee];fe!==null&&(M[ee]=null,y[ee].disconnect(fe))}F=null,q=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ve=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?vs:hs,ve=m.stencil?_s:Fi);const Ie={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Jt(d.textureWidth,d.textureHeight,{format:nn,type:In,depthTexture:new Yu(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Jt(f.framebufferWidth,f.framebufferHeight,{format:nn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ee){for(let fe=0;fe<ee.removed.length;fe++){const ue=ee.removed[fe],ve=M.indexOf(ue);ve>=0&&(M[ve]=null,y[ve].disconnect(ue))}for(let fe=0;fe<ee.added.length;fe++){const ue=ee.added[fe];let ve=M.indexOf(ue);if(ve===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=M.length){M.push(ue),ve=Ie;break}else if(M[Ie]===null){M[Ie]=ue,ve=Ie;break}if(ve===-1)break}const me=y[ve];me&&me.connect(ue)}}const j=new B,ce=new B;function J(ee,fe,ue){j.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(ue.matrixWorld);const ve=j.distanceTo(ce),me=fe.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,ke=me[14]/(me[10]-1),pt=me[14]/(me[10]+1),mt=(me[9]+1)/me[5],Je=(me[9]-1)/me[5],k=(me[8]-1)/me[0],Kt=(Ie[8]+1)/Ie[0],tt=ke*k,nt=ke*Kt,Be=ve/(-k+Kt),_t=Be*-k;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(_t),ee.translateZ(Be),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),me[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Oe=ke+Be,P=pt+Be,E=tt-_t,K=nt+(ve-_t),re=mt*pt/P*Oe,le=Je*pt/P*Oe;ee.projectionMatrix.makePerspective(E,K,re,le,Oe,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function de(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let fe=ee.near,ue=ee.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),S.near=I.near=O.near=fe,S.far=I.far=O.far=ue,(F!==S.near||q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,q=S.far),O.layers.mask=ee.layers.mask|2,I.layers.mask=ee.layers.mask|4,S.layers.mask=O.layers.mask|I.layers.mask;const ve=ee.parent,me=S.cameras;de(S,ve);for(let Ie=0;Ie<me.length;Ie++)de(me[Ie],ve);me.length===2?J(S,O,I):S.projectionMatrix.copy(O.projectionMatrix),ge(ee,S,ve)};function ge(ee,fe,ue){ue===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(ue.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=xs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Re=null;function Ce(ee,fe){if(h=fe.getViewerPose(c||o),v=fe,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ve=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let ke=0;ke<ue.length;ke++){const pt=ue[ke];let mt=null;if(f!==null)mt=f.getViewport(pt);else{const k=u.getViewSubImage(d,pt);mt=k.viewport,ke===0&&(e.setRenderTargetTextures(T,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(T))}let Je=b[ke];Je===void 0&&(Je=new Yt,Je.layers.enable(ke),Je.viewport=new ct,b[ke]=Je),Je.matrix.fromArray(pt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(pt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(mt.x,mt.y,mt.width,mt.height),ke===0&&(S.matrix.copy(Je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Je)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const ke=u.getDepthInformation(ue[0]);ke&&ke.isValid&&ke.texture&&x.init(e,ke,s.renderState)}}for(let ue=0;ue<y.length;ue++){const ve=M[ue],me=y[ue];ve!==null&&me!==void 0&&me.update(ve,fe,c||o)}Re&&Re(ee,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const He=new Ju;He.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}}const Ri=new en,Vv=new Xe;function Gv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),y=T.envMap,M=T.envMapRotation;y&&(m.envMap.value=y,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Ri)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const M=y.program;n.uniformBlockBinding(T,M)}function c(T,y){let M=s[T.id];M===void 0&&(v(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(T,L);const C=e.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function h(T){const y=u();T.__bindingPointIndex=y;const M=i.createBuffer(),L=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],M=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,O=M.length;C<O;C++){const I=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,S=I.length;b<S;b++){const F=I[b];if(f(F,C,b,L)===!0){const q=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let te=0;te<X.length;te++){const j=X[te],ce=x(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,q+Y,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,Y),Y+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,y,M,L){const C=T.value,O=y+"_"+M;if(L[O]===void 0)return typeof C=="number"||typeof C=="boolean"?L[O]=C:L[O]=C.clone(),!0;{const I=L[O];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return L[O]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function v(T){const y=T.uniforms;let M=0;const L=16;for(let O=0,I=y.length;O<I;O++){const b=Array.isArray(y[O])?y[O]:[y[O]];for(let S=0,F=b.length;S<F;S++){const q=b[S],X=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,te=X.length;Y<te;Y++){const j=X[Y],ce=x(j),J=M%L,de=J%ce.boundary,ge=J+de;M+=de,ge!==0&&L-ge<ce.storage&&(M+=L-ge),q.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=ce.storage}}}const C=M%L;return C>0&&(M+=L-C),T.__size=M,T.__cache={},this}function x(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Xv{constructor(e={}){const{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=vi,this.toneMappingExposure=1;const M=this;let L=!1,C=0,O=0,I=null,b=-1,S=null;const F=new ct,q=new ct;let X=null;const Y=new Ve(0);let te=0,j=t.width,ce=t.height,J=1,de=null,ge=null;const Re=new ct(0,0,j,ce),Ce=new ct(0,0,j,ce);let He=!1;const ee=new Gl;let fe=!1,ue=!1;this.transmissionResolutionScale=1;const ve=new Xe,me=new Xe,Ie=new B,ke=new ct,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Je(){return I===null?J:1}let k=n;function Kt(_,A){return t.getContext(_,A)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){const A="webgl2";if(k=Kt(A,_),k===null)throw Kt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let tt,nt,Be,_t,Oe,P,E,K,re,le,ne,Ue,ye,Te,st,_e,we,Le,Ne,be,Ye,ze,qe,V;function $(){tt=new t0(k),tt.init(),ze=new Fv(k,tt),nt=new K_(k,tt,e,ze),Be=new Nv(k,tt),nt.reverseDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),_t=new s0(k),Oe=new Sv,P=new Ov(k,tt,Be,Oe,nt,ze,_t),E=new Z_(M),K=new e0(M),re=new um(k),qe=new q_(k,re),le=new n0(k,re,_t,qe),ne=new o0(k,le,re,_t),Ne=new r0(k,nt,P),_e=new $_(Oe),Ue=new Mv(M,E,K,tt,nt,qe,_e),ye=new Gv(M,Oe),Te=new Tv,st=new Pv(tt),Le=new Y_(M,E,K,Be,ne,f,l),we=new Iv(M,ne,nt),V=new Wv(k,_t,nt,Be),be=new j_(k,tt,_t),Ye=new i0(k,tt,_t),_t.programs=Ue.programs,M.capabilities=nt,M.extensions=tt,M.properties=Oe,M.renderLists=Te,M.shadowMap=we,M.state=Be,M.info=_t}$();const Q=new Hv(M,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const _=tt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=tt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(_){_!==void 0&&(J=_,this.setSize(j,ce,!1))},this.getSize=function(_){return _.set(j,ce)},this.setSize=function(_,A,R=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,ce=A,t.width=Math.floor(_*J),t.height=Math.floor(A*J),R===!0&&(t.style.width=_+"px",t.style.height=A+"px"),this.setViewport(0,0,_,A)},this.getDrawingBufferSize=function(_){return _.set(j*J,ce*J).floor()},this.setDrawingBufferSize=function(_,A,R){j=_,ce=A,J=R,t.width=Math.floor(_*R),t.height=Math.floor(A*R),this.setViewport(0,0,_,A)},this.getCurrentViewport=function(_){return _.copy(F)},this.getViewport=function(_){return _.copy(Re)},this.setViewport=function(_,A,R,N){_.isVector4?Re.set(_.x,_.y,_.z,_.w):Re.set(_,A,R,N),Be.viewport(F.copy(Re).multiplyScalar(J).round())},this.getScissor=function(_){return _.copy(Ce)},this.setScissor=function(_,A,R,N){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,A,R,N),Be.scissor(q.copy(Ce).multiplyScalar(J).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(_){Be.setScissorTest(He=_)},this.setOpaqueSort=function(_){de=_},this.setTransparentSort=function(_){ge=_},this.getClearColor=function(_){return _.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(_=!0,A=!0,R=!0){let N=0;if(_){let D=!1;if(I!==null){const H=I.texture.format;D=H===Bl||H===Fl||H===Ol}if(D){const H=I.texture.type,G=H===In||H===Fi||H===nr||H===_s||H===Ul||H===Nl,W=Le.getClearColor(),Z=Le.getClearAlpha(),ie=W.r,se=W.g,ae=W.b;G?(v[0]=ie,v[1]=se,v[2]=ae,v[3]=Z,k.clearBufferuiv(k.COLOR,0,v)):(x[0]=ie,x[1]=se,x[2]=ae,x[3]=Z,k.clearBufferiv(k.COLOR,0,x))}else N|=k.COLOR_BUFFER_BIT}A&&(N|=k.DEPTH_BUFFER_BIT),R&&(N|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Le.dispose(),Te.dispose(),st.dispose(),Oe.dispose(),E.dispose(),K.dispose(),ne.dispose(),qe.dispose(),V.dispose(),Ue.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ur),Q.removeEventListener("sessionend",dr),Fn.stop()};function oe(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const _=_t.autoReset,A=we.enabled,R=we.autoUpdate,N=we.needsUpdate,D=we.type;$(),_t.autoReset=_,we.enabled=A,we.autoUpdate=R,we.needsUpdate=N,we.type=D}function Me(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function je(_){const A=_.target;A.removeEventListener("dispose",je),yt(A)}function yt(_){Nt(_),Oe.remove(_)}function Nt(_){const A=Oe.get(_).programs;A!==void 0&&(A.forEach(function(R){Ue.releaseProgram(R)}),_.isShaderMaterial&&Ue.releaseShaderCache(_))}this.renderBufferDirect=function(_,A,R,N,D,H){A===null&&(A=pt);const G=D.isMesh&&D.matrixWorld.determinant()<0,W=Do(_,A,R,N,D);Be.setMaterial(N,G);let Z=R.index,ie=1;if(N.wireframe===!0){if(Z=le.getWireframeAttribute(R),Z===void 0)return;ie=2}const se=R.drawRange,ae=R.attributes.position;let he=se.start*ie,pe=(se.start+se.count)*ie;H!==null&&(he=Math.max(he,H.start*ie),pe=Math.min(pe,(H.start+H.count)*ie)),Z!==null?(he=Math.max(he,0),pe=Math.min(pe,Z.count)):ae!=null&&(he=Math.max(he,0),pe=Math.min(pe,ae.count));const Pe=pe-he;if(Pe<0||Pe===1/0)return;qe.setup(D,N,W,R,Z);let Ge,Fe=be;if(Z!==null&&(Ge=re.get(Z),Fe=Ye,Fe.setIndex(Ge)),D.isMesh)N.wireframe===!0?(Be.setLineWidth(N.wireframeLinewidth*Je()),Fe.setMode(k.LINES)):Fe.setMode(k.TRIANGLES);else if(D.isLine){let Ae=N.linewidth;Ae===void 0&&(Ae=1),Be.setLineWidth(Ae*Je()),D.isLineSegments?Fe.setMode(k.LINES):D.isLineLoop?Fe.setMode(k.LINE_LOOP):Fe.setMode(k.LINE_STRIP)}else D.isPoints?Fe.setMode(k.POINTS):D.isSprite&&Fe.setMode(k.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Fe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ae=D._multiDrawStarts,Ke=D._multiDrawCounts,De=D._multiDrawCount,lt=Z?re.get(Z).bytesPerElement:1,Ct=Oe.get(N).currentProgram.getUniforms();for(let ot=0;ot<De;ot++)Ct.setValue(k,"_gl_DrawID",ot),Fe.render(Ae[ot]/lt,Ke[ot])}else if(D.isInstancedMesh)Fe.renderInstances(he,Pe,D.count);else if(R.isInstancedBufferGeometry){const Ae=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Ke=Math.min(R.instanceCount,Ae);Fe.renderInstances(he,Pe,Ke)}else Fe.render(he,Pe)};function at(_,A,R){_.transparent===!0&&_.side===un&&_.forceSinglePass===!1?(_.side=Qt,_.needsUpdate=!0,zi(_,A,R),_.side=Ln,_.needsUpdate=!0,zi(_,A,R),_.side=un):zi(_,A,R)}this.compile=function(_,A,R=null){R===null&&(R=_),p=st.get(R),p.init(A),y.push(p),R.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),_!==R&&_.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const N=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const H=D.material;if(H)if(Array.isArray(H))for(let G=0;G<H.length;G++){const W=H[G];at(W,R,D),N.add(W)}else at(H,R,D),N.add(H)}),y.pop(),p=null,N},this.compileAsync=function(_,A,R=null){const N=this.compile(_,A,R);return new Promise(D=>{function H(){if(N.forEach(function(G){Oe.get(G).currentProgram.isReady()&&N.delete(G)}),N.size===0){D(_);return}setTimeout(H,10)}tt.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let rn=null;function fn(_){rn&&rn(_)}function ur(){Fn.stop()}function dr(){Fn.start()}const Fn=new Ju;Fn.setAnimationLoop(fn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(_){rn=_,Q.setAnimationLoop(_),_===null?Fn.stop():Fn.start()},Q.addEventListener("sessionstart",ur),Q.addEventListener("sessionend",dr),this.render=function(_,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(A),A=Q.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,A,I),p=st.get(_,y.length),p.init(A),y.push(p),me.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),ee.setFromProjectionMatrix(me),ue=this.localClippingEnabled,fe=_e.init(this.clippingPlanes,ue),m=Te.get(_,T.length),m.init(),T.push(m),Q.enabled===!0&&Q.isPresenting===!0){const H=M.xr.getDepthSensingMesh();H!==null&&Is(H,A,-1/0,M.sortObjects)}Is(_,A,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(de,ge),mt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,mt&&Le.addToRenderList(m,_),this.info.render.frame++,fe===!0&&_e.beginShadows();const R=p.state.shadowsArray;we.render(R,_,A),fe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=m.opaque,D=m.transmissive;if(p.setupLights(),A.isArrayCamera){const H=A.cameras;if(D.length>0)for(let G=0,W=H.length;G<W;G++){const Z=H[G];fr(N,D,_,Z)}mt&&Le.render(_);for(let G=0,W=H.length;G<W;G++){const Z=H[G];Us(m,_,Z,Z.viewport)}}else D.length>0&&fr(N,D,_,A),mt&&Le.render(_),Us(m,_,A);I!==null&&O===0&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),_.isScene===!0&&_.onAfterRender(M,_,A),qe.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],fe===!0&&_e.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Is(_,A,R,N){if(_.visible===!1)return;if(_.layers.test(A.layers)){if(_.isGroup)R=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(A);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||ee.intersectsSprite(_)){N&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(me);const G=ne.update(_),W=_.material;W.visible&&m.push(_,G,W,R,ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||ee.intersectsObject(_))){const G=ne.update(_),W=_.material;if(N&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),ke.copy(G.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(me)),Array.isArray(W)){const Z=G.groups;for(let ie=0,se=Z.length;ie<se;ie++){const ae=Z[ie],he=W[ae.materialIndex];he&&he.visible&&m.push(_,G,he,R,ke.z,ae)}}else W.visible&&m.push(_,G,W,R,ke.z,null)}}const H=_.children;for(let G=0,W=H.length;G<W;G++)Is(H[G],A,R,N)}function Us(_,A,R,N){const D=_.opaque,H=_.transmissive,G=_.transparent;p.setupLightsView(R),fe===!0&&_e.setGlobalState(M.clippingPlanes,R),N&&Be.viewport(F.copy(N)),D.length>0&&ki(D,A,R),H.length>0&&ki(H,A,R),G.length>0&&ki(G,A,R),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function fr(_,A,R,N){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new Jt(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?At:In,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const H=p.state.transmissionRenderTarget[N.id],G=N.viewport||F;H.setSize(G.z*M.transmissionResolutionScale,G.w*M.transmissionResolutionScale);const W=M.getRenderTarget();M.setRenderTarget(H),M.getClearColor(Y),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),mt&&Le.render(R);const Z=M.toneMapping;M.toneMapping=vi;const ie=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),fe===!0&&_e.setGlobalState(M.clippingPlanes,N),ki(_,R,N),P.updateMultisampleRenderTarget(H),P.updateRenderTargetMipmap(H),tt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ae=0,he=A.length;ae<he;ae++){const pe=A[ae],Pe=pe.object,Ge=pe.geometry,Fe=pe.material,Ae=pe.group;if(Fe.side===un&&Pe.layers.test(N.layers)){const Ke=Fe.side;Fe.side=Qt,Fe.needsUpdate=!0,pr(Pe,R,N,Ge,Fe,Ae),Fe.side=Ke,Fe.needsUpdate=!0,se=!0}}se===!0&&(P.updateMultisampleRenderTarget(H),P.updateRenderTargetMipmap(H))}M.setRenderTarget(W),M.setClearColor(Y,te),ie!==void 0&&(N.viewport=ie),M.toneMapping=Z}function ki(_,A,R){const N=A.isScene===!0?A.overrideMaterial:null;for(let D=0,H=_.length;D<H;D++){const G=_[D],W=G.object,Z=G.geometry,ie=N===null?G.material:N,se=G.group;W.layers.test(R.layers)&&pr(W,A,R,Z,ie,se)}}function pr(_,A,R,N,D,H){_.onBeforeRender(M,A,R,N,D,H),_.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(M,A,R,N,_,H),D.transparent===!0&&D.side===un&&D.forceSinglePass===!1?(D.side=Qt,D.needsUpdate=!0,M.renderBufferDirect(R,A,N,D,_,H),D.side=Ln,D.needsUpdate=!0,M.renderBufferDirect(R,A,N,D,_,H),D.side=un):M.renderBufferDirect(R,A,N,D,_,H),_.onAfterRender(M,A,R,N,D,H)}function zi(_,A,R){A.isScene!==!0&&(A=pt);const N=Oe.get(_),D=p.state.lights,H=p.state.shadowsArray,G=D.state.version,W=Ue.getParameters(_,D.state,H,A,R),Z=Ue.getProgramCacheKey(W);let ie=N.programs;N.environment=_.isMeshStandardMaterial?A.environment:null,N.fog=A.fog,N.envMap=(_.isMeshStandardMaterial?K:E).get(_.envMap||N.environment),N.envMapRotation=N.environment!==null&&_.envMap===null?A.environmentRotation:_.envMapRotation,ie===void 0&&(_.addEventListener("dispose",je),ie=new Map,N.programs=ie);let se=ie.get(Z);if(se!==void 0){if(N.currentProgram===se&&N.lightsStateVersion===G)return Os(_,W),se}else W.uniforms=Ue.getUniforms(_),_.onBeforeCompile(W,M),se=Ue.acquireProgram(W,Z),ie.set(Z,se),N.uniforms=W.uniforms;const ae=N.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ae.clippingPlanes=_e.uniform),Os(_,W),N.needsLights=ii(_),N.lightsStateVersion=G,N.needsLights&&(ae.ambientLightColor.value=D.state.ambient,ae.lightProbe.value=D.state.probe,ae.directionalLights.value=D.state.directional,ae.directionalLightShadows.value=D.state.directionalShadow,ae.spotLights.value=D.state.spot,ae.spotLightShadows.value=D.state.spotShadow,ae.rectAreaLights.value=D.state.rectArea,ae.ltc_1.value=D.state.rectAreaLTC1,ae.ltc_2.value=D.state.rectAreaLTC2,ae.pointLights.value=D.state.point,ae.pointLightShadows.value=D.state.pointShadow,ae.hemisphereLights.value=D.state.hemi,ae.directionalShadowMap.value=D.state.directionalShadowMap,ae.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ae.spotShadowMap.value=D.state.spotShadowMap,ae.spotLightMatrix.value=D.state.spotLightMatrix,ae.spotLightMap.value=D.state.spotLightMap,ae.pointShadowMap.value=D.state.pointShadowMap,ae.pointShadowMatrix.value=D.state.pointShadowMatrix),N.currentProgram=se,N.uniformsList=null,se}function Ns(_){if(_.uniformsList===null){const A=_.currentProgram.getUniforms();_.uniformsList=Qr.seqWithValue(A.seq,_.uniforms)}return _.uniformsList}function Os(_,A){const R=Oe.get(_);R.outputColorSpace=A.outputColorSpace,R.batching=A.batching,R.batchingColor=A.batchingColor,R.instancing=A.instancing,R.instancingColor=A.instancingColor,R.instancingMorph=A.instancingMorph,R.skinning=A.skinning,R.morphTargets=A.morphTargets,R.morphNormals=A.morphNormals,R.morphColors=A.morphColors,R.morphTargetsCount=A.morphTargetsCount,R.numClippingPlanes=A.numClippingPlanes,R.numIntersection=A.numClipIntersection,R.vertexAlphas=A.vertexAlphas,R.vertexTangents=A.vertexTangents,R.toneMapping=A.toneMapping}function Do(_,A,R,N,D){A.isScene!==!0&&(A=pt),P.resetTextureUnits();const H=A.fog,G=N.isMeshStandardMaterial?A.environment:null,W=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Lt,Z=(N.isMeshStandardMaterial?K:E).get(N.envMap||G),ie=N.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,se=!!R.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ae=!!R.morphAttributes.position,he=!!R.morphAttributes.normal,pe=!!R.morphAttributes.color;let Pe=vi;N.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pe=M.toneMapping);const Ge=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Fe=Ge!==void 0?Ge.length:0,Ae=Oe.get(N),Ke=p.state.lights;if(fe===!0&&(ue===!0||_!==S)){const vt=_===S&&N.id===b;_e.setState(N,_,vt)}let De=!1;N.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ke.state.version||Ae.outputColorSpace!==W||D.isBatchedMesh&&Ae.batching===!1||!D.isBatchedMesh&&Ae.batching===!0||D.isBatchedMesh&&Ae.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ae.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ae.instancing===!1||!D.isInstancedMesh&&Ae.instancing===!0||D.isSkinnedMesh&&Ae.skinning===!1||!D.isSkinnedMesh&&Ae.skinning===!0||D.isInstancedMesh&&Ae.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ae.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ae.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ae.instancingMorph===!1&&D.morphTexture!==null||Ae.envMap!==Z||N.fog===!0&&Ae.fog!==H||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_e.numPlanes||Ae.numIntersection!==_e.numIntersection)||Ae.vertexAlphas!==ie||Ae.vertexTangents!==se||Ae.morphTargets!==ae||Ae.morphNormals!==he||Ae.morphColors!==pe||Ae.toneMapping!==Pe||Ae.morphTargetsCount!==Fe)&&(De=!0):(De=!0,Ae.__version=N.version);let lt=Ae.currentProgram;De===!0&&(lt=zi(N,A,D));let Ct=!1,ot=!1,rt=!1;const We=lt.getUniforms(),St=Ae.uniforms;if(Be.useProgram(lt.program)&&(Ct=!0,ot=!0,rt=!0),N.id!==b&&(b=N.id,ot=!0),Ct||S!==_){Be.buffers.depth.getReversed()?(ve.copy(_.projectionMatrix),Xf(ve),Yf(ve),We.setValue(k,"projectionMatrix",ve)):We.setValue(k,"projectionMatrix",_.projectionMatrix),We.setValue(k,"viewMatrix",_.matrixWorldInverse);const Pt=We.map.cameraPosition;Pt!==void 0&&Pt.setValue(k,Ie.setFromMatrixPosition(_.matrixWorld)),nt.logarithmicDepthBuffer&&We.setValue(k,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&We.setValue(k,"isOrthographic",_.isOrthographicCamera===!0),S!==_&&(S=_,ot=!0,rt=!0)}if(D.isSkinnedMesh){We.setOptional(k,D,"bindMatrix"),We.setOptional(k,D,"bindMatrixInverse");const vt=D.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),We.setValue(k,"boneTexture",vt.boneTexture,P))}D.isBatchedMesh&&(We.setOptional(k,D,"batchingTexture"),We.setValue(k,"batchingTexture",D._matricesTexture,P),We.setOptional(k,D,"batchingIdTexture"),We.setValue(k,"batchingIdTexture",D._indirectTexture,P),We.setOptional(k,D,"batchingColorTexture"),D._colorsTexture!==null&&We.setValue(k,"batchingColorTexture",D._colorsTexture,P));const Ot=R.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&Ne.update(D,R,lt),(ot||Ae.receiveShadow!==D.receiveShadow)&&(Ae.receiveShadow=D.receiveShadow,We.setValue(k,"receiveShadow",D.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(St.envMap.value=Z,St.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&A.environment!==null&&(St.envMapIntensity.value=A.environmentIntensity),ot&&(We.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&Bn(St,rt),H&&N.fog===!0&&ye.refreshFogUniforms(St,H),ye.refreshMaterialUniforms(St,N,J,ce,p.state.transmissionRenderTarget[_.id]),Qr.upload(k,Ns(Ae),St,P)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Qr.upload(k,Ns(Ae),St,P),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&We.setValue(k,"center",D.center),We.setValue(k,"modelViewMatrix",D.modelViewMatrix),We.setValue(k,"normalMatrix",D.normalMatrix),We.setValue(k,"modelMatrix",D.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const vt=N.uniformsGroups;for(let Pt=0,Lo=vt.length;Pt<Lo;Pt++){const Si=vt[Pt];V.update(Si,lt),V.bind(Si,lt)}}return lt}function Bn(_,A){_.ambientLightColor.needsUpdate=A,_.lightProbe.needsUpdate=A,_.directionalLights.needsUpdate=A,_.directionalLightShadows.needsUpdate=A,_.pointLights.needsUpdate=A,_.pointLightShadows.needsUpdate=A,_.spotLights.needsUpdate=A,_.spotLightShadows.needsUpdate=A,_.rectAreaLights.needsUpdate=A,_.hemisphereLights.needsUpdate=A}function ii(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(_,A,R){Oe.get(_.texture).__webglTexture=A,Oe.get(_.depthTexture).__webglTexture=R;const N=Oe.get(_);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=R===void 0,N.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,A){const R=Oe.get(_);R.__webglFramebuffer=A,R.__useDefaultFramebuffer=A===void 0};const g=k.createFramebuffer();this.setRenderTarget=function(_,A=0,R=0){I=_,C=A,O=R;let N=!0,D=null,H=!1,G=!1;if(_){const Z=Oe.get(_);if(Z.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(k.FRAMEBUFFER,null),N=!1;else if(Z.__webglFramebuffer===void 0)P.setupRenderTarget(_);else if(Z.__hasExternalTextures)P.rebindTextures(_,Oe.get(_.texture).__webglTexture,Oe.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ae=_.depthTexture;if(Z.__boundDepthTexture!==ae){if(ae!==null&&Oe.has(ae)&&(_.width!==ae.image.width||_.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(_)}}const ie=_.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(G=!0);const se=Oe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(se[A])?D=se[A][R]:D=se[A],H=!0):_.samples>0&&P.useMultisampledRTT(_)===!1?D=Oe.get(_).__webglMultisampledFramebuffer:Array.isArray(se)?D=se[R]:D=se,F.copy(_.viewport),q.copy(_.scissor),X=_.scissorTest}else F.copy(Re).multiplyScalar(J).floor(),q.copy(Ce).multiplyScalar(J).floor(),X=He;if(R!==0&&(D=g),Be.bindFramebuffer(k.FRAMEBUFFER,D)&&N&&Be.drawBuffers(_,D),Be.viewport(F),Be.scissor(q),Be.setScissorTest(X),H){const Z=Oe.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+A,Z.__webglTexture,R)}else if(G){const Z=Oe.get(_.texture),ie=A;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.__webglTexture,R,ie)}else if(_!==null&&R!==0){const Z=Oe.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Z.__webglTexture,R)}b=-1},this.readRenderTargetPixels=function(_,A,R,N,D,H,G){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Oe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&G!==void 0&&(W=W[G]),W){Be.bindFramebuffer(k.FRAMEBUFFER,W);try{const Z=_.texture,ie=Z.format,se=Z.type;if(!nt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=_.width-N&&R>=0&&R<=_.height-D&&k.readPixels(A,R,N,D,ze.convert(ie),ze.convert(se),H)}finally{const Z=I!==null?Oe.get(I).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(_,A,R,N,D,H,G){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Oe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&G!==void 0&&(W=W[G]),W){const Z=_.texture,ie=Z.format,se=Z.type;if(!nt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=_.width-N&&R>=0&&R<=_.height-D){Be.bindFramebuffer(k.FRAMEBUFFER,W);const ae=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.bufferData(k.PIXEL_PACK_BUFFER,H.byteLength,k.STREAM_READ),k.readPixels(A,R,N,D,ze.convert(ie),ze.convert(se),0);const he=I!==null?Oe.get(I).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,he);const pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wf(k,pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,H),k.deleteBuffer(ae),k.deleteSync(pe),H}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,A=null,R=0){_.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,_=arguments[1]);const N=Math.pow(2,-R),D=Math.floor(_.image.width*N),H=Math.floor(_.image.height*N),G=A!==null?A.x:0,W=A!==null?A.y:0;P.setTexture2D(_,0),k.copyTexSubImage2D(k.TEXTURE_2D,R,0,0,G,W,D,H),Be.unbindTexture()};const w=k.createFramebuffer(),U=k.createFramebuffer();this.copyTextureToTexture=function(_,A,R=null,N=null,D=0,H=null){_.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,_=arguments[1],A=arguments[2],H=arguments[3]||0,R=null),H===null&&(D!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),H=D,D=0):H=0);let G,W,Z,ie,se,ae,he,pe,Pe;const Ge=_.isCompressedTexture?_.mipmaps[H]:_.image;if(R!==null)G=R.max.x-R.min.x,W=R.max.y-R.min.y,Z=R.isBox3?R.max.z-R.min.z:1,ie=R.min.x,se=R.min.y,ae=R.isBox3?R.min.z:0;else{const Ot=Math.pow(2,-D);G=Math.floor(Ge.width*Ot),W=Math.floor(Ge.height*Ot),_.isDataArrayTexture?Z=Ge.depth:_.isData3DTexture?Z=Math.floor(Ge.depth*Ot):Z=1,ie=0,se=0,ae=0}N!==null?(he=N.x,pe=N.y,Pe=N.z):(he=0,pe=0,Pe=0);const Fe=ze.convert(A.format),Ae=ze.convert(A.type);let Ke;A.isData3DTexture?(P.setTexture3D(A,0),Ke=k.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(P.setTexture2DArray(A,0),Ke=k.TEXTURE_2D_ARRAY):(P.setTexture2D(A,0),Ke=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,A.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,A.unpackAlignment);const De=k.getParameter(k.UNPACK_ROW_LENGTH),lt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ct=k.getParameter(k.UNPACK_SKIP_PIXELS),ot=k.getParameter(k.UNPACK_SKIP_ROWS),rt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ge.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ge.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,se),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ae);const We=_.isDataArrayTexture||_.isData3DTexture,St=A.isDataArrayTexture||A.isData3DTexture;if(_.isDepthTexture){const Ot=Oe.get(_),vt=Oe.get(A),Pt=Oe.get(Ot.__renderTarget),Lo=Oe.get(vt.__renderTarget);Be.bindFramebuffer(k.READ_FRAMEBUFFER,Pt.__webglFramebuffer),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,Lo.__webglFramebuffer);for(let Si=0;Si<Z;Si++)We&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(_).__webglTexture,D,ae+Si),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(A).__webglTexture,H,Pe+Si)),k.blitFramebuffer(ie,se,G,W,he,pe,G,W,k.DEPTH_BUFFER_BIT,k.NEAREST);Be.bindFramebuffer(k.READ_FRAMEBUFFER,null),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(D!==0||_.isRenderTargetTexture||Oe.has(_)){const Ot=Oe.get(_),vt=Oe.get(A);Be.bindFramebuffer(k.READ_FRAMEBUFFER,w),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let Pt=0;Pt<Z;Pt++)We?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ot.__webglTexture,D,ae+Pt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,D),St?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vt.__webglTexture,H,Pe+Pt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vt.__webglTexture,H),D!==0?k.blitFramebuffer(ie,se,G,W,he,pe,G,W,k.COLOR_BUFFER_BIT,k.NEAREST):St?k.copyTexSubImage3D(Ke,H,he,pe,Pe+Pt,ie,se,G,W):k.copyTexSubImage2D(Ke,H,he,pe,ie,se,G,W);Be.bindFramebuffer(k.READ_FRAMEBUFFER,null),Be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else St?_.isDataTexture||_.isData3DTexture?k.texSubImage3D(Ke,H,he,pe,Pe,G,W,Z,Fe,Ae,Ge.data):A.isCompressedArrayTexture?k.compressedTexSubImage3D(Ke,H,he,pe,Pe,G,W,Z,Fe,Ge.data):k.texSubImage3D(Ke,H,he,pe,Pe,G,W,Z,Fe,Ae,Ge):_.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,H,he,pe,G,W,Fe,Ae,Ge.data):_.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,H,he,pe,Ge.width,Ge.height,Fe,Ge.data):k.texSubImage2D(k.TEXTURE_2D,H,he,pe,G,W,Fe,Ae,Ge);k.pixelStorei(k.UNPACK_ROW_LENGTH,De),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ct),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rt),H===0&&A.generateMipmaps&&k.generateMipmap(Ke),Be.unbindTexture()},this.copyTextureToTexture3D=function(_,A,R=null,N=null,D=0){return _.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,N=arguments[1]||null,_=arguments[2],A=arguments[3],D=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,A,R,N,D)},this.initRenderTarget=function(_){Oe.get(_).__webglFramebuffer===void 0&&P.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?P.setTextureCube(_,0):_.isData3DTexture?P.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?P.setTexture2DArray(_,0):P.setTexture2D(_,0),Be.unbindTexture()},this.resetState=function(){C=0,O=0,I=null,Be.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function Yv(i,e){for(const[t,n]of Object.entries(e))i.addEventListener(t,n);return{destroy(){for(const[t,n]of Object.entries(e))i.removeEventListener(t,n)}}}function vl(i){if(typeof i!="object")return i;if(Array.isArray(i))return i.map(vl);switch(i.constructor){case DOMPoint:return DOMPoint.fromPoint(i);case DOMRect:return DOMRect.fromRect(i);case Object:{const e=Object.create(i);for(const t of Object.keys(i))e[t]=vl(i[t]);return e}}throw new Error(`Unsupported value type: ${i.constructor}`)}class id{clone(){const e=Object.create(this);for(const[t,n]of Object.entries(this))e[t]=vl(n);return Object.freeze(e)}}class tc{constructor(){z(this,"position",new DOMPoint)}get targetElement(){throw new Error("Not implemented")}get button(){throw new Error("Not implemented")}getLocalPosition(e){const t=this.targetElement.getBoundingClientRect(),{x:n,y:s}=this.position;return e??(e={}),e.x=n-t.x,e.y=s-t.y,e}get localPosition(){return this.getLocalPosition(new DOMPoint)}getRelativeLocalPosition(e){const{x:t,y:n}=this.localPosition,s=this.targetElement.getBoundingClientRect();return e??(e={}),e.x=(t-s.x)/s.width,e.y=(n-s.y)/s.height,e}get relativeLocalPosition(){return this.getRelativeLocalPosition(new DOMPoint)}}class qv extends tc{constructor(t=!1,n=!1,s=new DOMPoint,r=new DOMPoint,o=null){super();z(this,"entered");z(this,"pressed");z(this,"downPosition");z(this,"upPosition");z(this,"event");this.entered=t,this.pressed=n,this.downPosition=s,this.upPosition=r,this.event=o}get targetElement(){const t=this.event.target;if(t instanceof Element)return t;throw new Error("targetElement is not an Element")}get button(){return this.event instanceof MouseEvent?this.event.button:this.event instanceof PointerEvent?this.event.button:0}get localPosition(){const t=this.targetElement.getBoundingClientRect(),{x:n,y:s}=this.position;return new DOMPoint(n-t.x,s-t.y)}}const jv=["onDown","onUp","onChange","onEnter","onLeave"];function Kv(i){return jv.some(e=>e in i)}function $v(i,e){const t={touchStarted:!1,touchTimestamp:-1};function n(){return t.touchStarted||t.touchTimestamp>Date.now()-1e3}const s=new qv,r=(y,M,L)=>{var C;s.pressed=!0,s.downPosition.x=M,s.downPosition.y=L,a(y,M,L),(C=e.onDown)==null||C.call(e,s)},o=(y,M,L)=>{var C;s.pressed=!1,s.upPosition.x=M,s.upPosition.y=L,a(y,M,L),(C=e.onUp)==null||C.call(e,s),s.position.x=-1,s.position.y=-1},a=(y,M,L)=>{var C;(s.position.x!==M||s.position.y!==L)&&(s.event=y,s.position.x=M,s.position.y=L,(C=e.onChange)==null||C.call(e,s))},l=y=>{n()===!1&&r(y,y.clientX,y.clientY)},c=y=>{n()===!1&&o(y,y.clientX,y.clientY)},h=y=>{n()===!1&&a(y,y.clientX,y.clientY)},u=()=>{document.body.addEventListener("mouseup",f),v()},d=()=>{x()},f=()=>{s.pressed=!1,x(),document.documentElement.removeEventListener("mouseup",f)},v=()=>{var y;s.entered===!1&&(s.entered=!0,(y=e.onEnter)==null||y.call(e,s))},x=()=>{var y;s.entered&&s.pressed===!1&&(s.entered=!1,(y=e.onLeave)==null||y.call(e,s))},m=y=>{y.touches.length===1&&(t.touchStarted=!0,t.touchTimestamp=Date.now(),r(y,y.touches[0].clientX,y.touches[0].clientY))},p=y=>{y.touches.length===0&&(t.touchStarted=!1,t.touchTimestamp=Date.now(),o(y,y.changedTouches[0].clientX,y.changedTouches[0].clientY))},T=y=>{y.touches.length===1&&(t.touchTimestamp=Date.now(),a(y,y.touches[0].clientX,y.touches[0].clientY))};return i.addEventListener("mouseover",u),i.addEventListener("mouseout",d),i.addEventListener("mousedown",l),i.addEventListener("mouseup",c),i.addEventListener("mousemove",h),i.addEventListener("touchstart",m,{passive:!1}),i.addEventListener("touchend",p,{passive:!1}),i.addEventListener("touchmove",T,{passive:!1}),()=>{i.removeEventListener("mouseover",u),i.removeEventListener("mouseout",d),i.removeEventListener("mousedown",l),i.removeEventListener("mouseup",c),i.removeEventListener("mousemove",h),i.removeEventListener("touchstart",m),i.removeEventListener("touchend",p),i.removeEventListener("touchmove",T),document.body.removeEventListener("mouseup",f)}}function nc(i,e,t){return i<e?e:i>t?t:i}function Co(i){return i<0?0:i>1?1:i}function xl(i,e,t){return i+(e-i)*Co(t)}class ic{constructor(e,t,n=0){z(this,"_array");z(this,"_index");z(this,"_sum");z(this,"derivative",null);this._array=new Float64Array(e),this._array.fill(t),this._sum=e*t,this._index=0,n>0&&(this.derivative=new ic(e,0,n-1))}setValue(e,t){const{_array:n,_index:s}=this;if(this.derivative){const o=n[s],a=e-o;this.derivative.setValue(a,t)}const r=t?s+1<n.length?s+1:0:s;return this._sum+=e-n[r],n[r]=e,this._index=r,this}*values(){const{_array:e,_index:t}=this,{length:n}=e;for(let s=0;s<n;s++){const r=(t-s+n)%n;yield e[r]}}valuesArray(){const{_array:e,_index:t}=this,{length:n}=e,s=new Array(n);for(let r=0;r<n;r++){const o=(t-r+n)%n;s[r]=e[o]}return s}get sum(){return this._sum}get average(){return this._sum/this._array.length}}let eo=0,da=0;const _o=class _o{constructor(e=null,t=0,n=0,s=0,r=1,o=0,a=0,l=1,c=0,h=yi.defaultProps.activeDuration){z(this,"previousTick");z(this,"frame");z(this,"time");z(this,"deltaTime");z(this,"timeScale");z(this,"unscaledTime");z(this,"unscaledDeltaTime");z(this,"activeTimeScale");z(this,"activeTime");z(this,"activeDuration");this.previousTick=e,this.frame=t,this.time=n,this.deltaTime=s,this.timeScale=r,this.unscaledTime=o,this.unscaledDeltaTime=a,this.activeTimeScale=l,this.activeTime=c,this.activeDuration=h}get previousTime(){return this.time-this.deltaTime}cosTime({frequency:e=1,phase:t=0}={}){return Math.cos((this.time+t)*2*Math.PI*e)}sinTime({frequency:e=1,phase:t=0}={}){return Math.sin((this.time+t)*2*Math.PI*e)}cos01Time(...e){return this.cosTime(...e)*-.5+.5}sin01Time(...e){return this.sinTime(...e)*.5+.5}lerpCos01Time(e,t,...n){return xl(e,t,this.cos01Time(...n))}lerpSin01Time(e,t,...n){return xl(e,t,this.sin01Time(...n))}propagate(e,t){const{childrenAccessor:n}={..._o.defaultPropagateOptions,...t},s=typeof n=="function"?n:o=>o[n],r=[e];for(;r.length>0;){const o=r.shift();if(o&&typeof o=="object"){"onTick"in o&&o.onTick(this);const a=s(o);Array.isArray(a)&&r.push(...a)}}return this}toString(){return`frame: ${this.frame}, time: ${this.time.toFixed(2)}, deltaTime: ${this.deltaTime.toFixed(4)}`}};z(_o,"defaultPropagateOptions",{childrenAccessor:e=>e.children});let ao=_o;const vo=class vo{constructor(){z(this,"_sortDirty",!0);z(this,"_countDirty",!0);z(this,"_listeners",[]);z(this,"_lockedListeners",[])}add(e,t){this._sortDirty||(this._sortDirty=this._listeners.length>0&&e<this._listeners[this._listeners.length-1].order),this._countDirty=!0;const s={id:vo.listenerNextId++,order:e,callback:t};return this._listeners.push(s),s}remove(e){const t=this._listeners.findIndex(n=>n.callback===e);return t!==-1?(this._listeners.splice(t,1),this._countDirty=!0,!0):!1}removeById(e){const t=this._listeners.findIndex(n=>n.id===e);return t!==-1?(this._listeners.splice(t,1),this._countDirty=!0,!0):!1}_clearDirty(){this._sortDirty&&(this._listeners.sort((e,t)=>e.order-t.order),this._sortDirty=!1),this._countDirty&&(this._lockedListeners=[...this._listeners],this._countDirty=!1)}call(e){this._clearDirty();for(const{callback:t}of this._lockedListeners)t(e)==="stop"&&this.remove(t)}toDebugString(){this._clearDirty();const e=new Map;let t="";for(const r of this._lockedListeners){const o=r.order.toString();o.length>t.length&&(t=o),e.has(r.order)===!1?e.set(r.order,[r]):e.get(r.order).push(r)}return[...e.keys()].sort((r,o)=>r-o).map(r=>{const o=e.get(r);return`${`${r.toString().padStart(t.length)}:`} (${o.length})`}).join(`
`)}logDebugString(){console.log(this.toDebugString())}clear(){this._listeners.length=0,this._countDirty=!0}};z(vo,"listenerNextId",0);let Qs=vo,Zv=0;const wn=class wn{constructor(e={}){z(this,"id",Zv++);z(this,"name");z(this,"staticProps");z(this,"props");z(this,"internal",{active:!0,stopped:!1,caughtErrors:!1,timeScale:1,activeLastRequest:0,memorization:new ic(60,0),updateRegister:new Qs,deactivationRegister:new Qs,activationRegister:new Qs});z(this,"tick",new ao);z(this,"uTime",Object.defineProperty({},"value",{enumerable:!0,get:()=>this.tick.time}));z(this,"destroyed",!1);z(this,"destroy",()=>{if(this.destroyed===!1){this.destroyed=!0;const e=Yn.indexOf(this);if(e===-1)throw new Error("Ticker is already destroyed");Yn.splice(e,1)}});z(this,"requestActivation",()=>(this.internal.activeLastRequest=eo,this.internal.active===!1&&(this.internal.active=!0,this.internal.activationRegister.call(this.tick)),this));z(this,"requestAnimationFrame",(e,{order:t=0}={})=>{this.requestActivation();const{updateRegister:n}=this.internal,s=n.add(t,r=>{n.removeById(s.id),e(r.time*1e3)});return s.id});this.staticProps={...wn.defaultStaticProps},this.props={...wn.defaultProps};for(const[t,n]of Object.entries(e))t in this.staticProps?this.staticProps[t]=n:this.props[t]=n;this.name=this.staticProps.name??`Ticker#${this.id}`,Yn.push(this)}static current(){const e=Yn.length===0?new wn({name:"CurrentTicker"}):Yn[Yn.length-1];return e.requestActivation(),e}static get(e,{createIfNotFound:t=!0}={}){const n=Yn.find(s=>s.name===e);if(n)return n;if(t){const s=new wn({name:e});return s.requestActivation(),s}else return null}get frame(){return this.tick.frame}get time(){return this.tick.time}get deltaTime(){return this.tick.deltaTime}get timeScale(){return this.internal.timeScale}set timeScale(e){this.internal.timeScale=e}get stopped(){return this.internal.stopped}set stopped(e){e?this.stop():this.start()}start(){return this.internal.stopped=!1,this.requestActivation(),this}stop(){return this.internal.stopped=!0,this}toggle(e=this.internal.stopped){return e?this.start():this.stop()}set(e){const{requestActivation:t,minActiveDuration:n,order:s,...r}={...wn.defaultSetOptions,...e};return s!==void 0&&(this.props.order=s,yl.orderChanged=!0),n!==null&&(this.props.activeDuration=Math.max(this.props.activeDuration,n)),Object.assign(this.props,r),t&&this.requestActivation(),this}onTick(...e){function t(h){return h.length===1?[{},h[0]]:typeof h[0]=="number"?[{order:h[0]},h[1]]:h}const[n,s]=t(e),{order:r=0,frameInterval:o=0,timeInterval:a=0,once:l=!1}=n;if(l){const h=this.onTick({...n,once:!1},u=>{h.destroy(),s(u)});return h}if(o>0)return this.onTick({order:r},h=>{if(h.frame%o===0)return s(h)});if(a>0){let h=a;return this.onTick({order:r},u=>{if(h+=u.deltaTime,h>=a)return h+=-a,s(u)})}return this.internal.updateRegister.add(r,s),{destroy:()=>{this.internal.updateRegister.remove(s)},value:this}}offTick(e){return this.internal.updateRegister.remove(e)}onActivate(e){return this.requestActivation(),this.internal.activationRegister.add(0,e),{destroy:()=>{this.internal.activationRegister.remove(e)},value:this}}onDeactivate(e){return this.internal.deactivationRegister.add(0,e),{destroy:()=>{this.internal.deactivationRegister.remove(e)},value:this}}cancelAnimationFrame(e){const{updateRegister:t}=this.internal;return t.removeById(e)}nextTick(e=1/60,t=0,n=e){const{timeScale:s}=this.internal,{tickMaxCount:r}=this.staticProps,{activeDuration:o,activeFadeDuration:a}=this.props,{tick:l}=this,c=Co((t-o)/a),h=1-c*c,u=l.frame+1,d=l.time+e,f=l.unscaledTime+n;this.internal.memorization.setValue(e,!0),this.tick=new ao(l,u,d,e,s,f,n,h,t,o);let v=l,x=0;for(;v&&++x<r;)v=v.previousTick;v&&(v.previousTick=null);try{this.internal.updateRegister.call(this.tick)}catch(m){console.error(`Error in Ticker "${this.name}"`),console.error(this.tick.toString()),console.error(m),this.internal.caughtErrors=!0}return h===0&&(this.internal.active=!1,this.internal.deactivationRegister.call(this.tick)),this}getAverageDeltaTime(){return this.internal.memorization.average}};z(wn,"defaultStaticProps",{name:null,tickMaxCount:60,maxDeltaTime:1/10}),z(wn,"defaultProps",{order:0,activeDuration:10,activeFadeDuration:1}),z(wn,"defaultSetOptions",{requestActivation:!0,minActiveDuration:null});let yi=wn;const Yn=[],yl={orderChanged:!1};function Jv(i){da=i/1e3-eo,eo+=da,yl.orderChanged&&(Yn.sort((e,t)=>e.props.order-t.props.order),yl.orderChanged=!1);for(const e of Yn){const{active:t,activeLastRequest:n,stopped:s,timeScale:r,caughtErrors:o}=e.internal;if(o||t===!1||s)return;const{maxDeltaTime:a}=e.staticProps,{activeDuration:l,activeFadeDuration:c}=e.props,h=eo-n,d=1-Co((h-l)/c)**2;let f=Math.min(da,a);f=xl(e.tick.unscaledDeltaTime,f,.05);const v=f*r*d;e.nextTick(v,h,f)}}function sd(){window.requestAnimationFrame(sd),Jv(performance.now())}typeof window<"u"&&sd();var Ts;(function(i){i[i.Main=0]="Main",i[i.Aux=1]="Aux",i[i.Second=2]="Second",i[i.Fourth=3]="Fourth",i[i.Fifth=4]="Fifth",i[i.DoubleTouch=5]="DoubleTouch",i[i.Left=0]="Left",i[i.Middle=1]="Middle",i[i.Right=2]="Right"})(Ts||(Ts={}));class Qv extends tc{constructor(){super(...arguments);z(this,"direction","horizontal");z(this,"startPosition",new DOMPoint);z(this,"position",new DOMPoint);z(this,"positionOld",new DOMPoint);z(this,"movement",new DOMPoint);z(this,"delta",new DOMPoint);z(this,"deltaTime",1/60);z(this,"shiftKey",!1);z(this,"metaKey",!1);z(this,"altKey",!1);z(this,"ctrlKey",!1);z(this,"_button",0)}get button(){return this._button}}const ex={dragDistanceThreshold:10,dragSnapToInitialPosition:!1,dragPreventDefault:!1,dragButton:1<<Ts.Main,dragEaseFactor:1,dragTickOrder:void 0},tx=["onDragStart","onDragStop","onDrag","onVerticalDragStart","onVerticalDragStop","onVerticalDrag","onHorizontalDragStart","onHorizontalDragStop","onHorizontalDrag"];function nx(i){return tx.some(e=>e in i)}function ix(i,e){const{dragDistanceThreshold:t,dragSnapToInitialPosition:n,dragPreventDefault:s,dragButton:r,dragEaseFactor:o,dragTickOrder:a,onDragStart:l,onDragStop:c,onDrag:h,onVerticalDragStart:u,onVerticalDragStop:d,onVerticalDrag:f,onHorizontalDragStart:v,onHorizontalDragStop:x,onHorizontalDrag:m}={...ex,...e};let p=!1,T=!1,y=!1,M=-1;const L=new DOMPoint(0,0),C=new Qv,{startPosition:O,position:I,positionOld:b,movement:S,delta:F}=C,q=()=>{M=a===void 0?window.requestAnimationFrame(ge):yi.current().requestAnimationFrame(ge,{order:a})},X=()=>{a===void 0?window.cancelAnimationFrame(M):yi.current().cancelAnimationFrame(M)},Y=(me,Ie)=>{q(),p=!0,O.x=me,O.y=Ie,L.x=me,L.y=Ie},te=()=>{switch(T=!0,F.x=0,F.y=0,S.x=0,S.y=0,I.x=O.x,I.y=O.y,l==null||l(C),C.direction){case"horizontal":{v==null||v(C);break}case"vertical":{u==null||u(C);break}}},j=()=>{switch(T=!1,c==null||c(C),C.direction){case"horizontal":{x==null||x(C);break}case"vertical":{d==null||d(C);break}}},ce=(me,Ie)=>{b.x=I.x,b.y=I.y,I.x+=(me-I.x)*o,I.y+=(Ie-I.y)*o,F.x=I.x-b.x,F.y=I.y-b.y,S.x=I.x-O.x,S.y=I.y-O.y},J=()=>{switch(n&&y===!1?ce(O.x,O.y):ce(L.x,L.y),h==null||h(C),C.direction){case"horizontal":{m==null||m(C);break}case"vertical":{f==null||f(C);break}}};let de=0;const ge=me=>{if(C.deltaTime=(me-de)/1e3,de=me,p){q();const Ie=O.x-L.x,ke=O.y-L.y;y=Math.sqrt(Ie*Ie+ke*ke)>t,T===!1&&y&&(C.direction=Math.abs(Ie/ke)>=1?"horizontal":"vertical",te()),T&&J()}},Re=me=>{C._button=me.button,r&1<<me.button&&(window.addEventListener("mousemove",Ce,{passive:!1}),window.addEventListener("mouseup",He),Y(me.clientX,me.clientY))},Ce=me=>{L.x=me.clientX,L.y=me.clientY,C.shiftKey=me.shiftKey,C.metaKey=me.metaKey,C.altKey=me.altKey,C.ctrlKey=me.ctrlKey,T&&s&&me.preventDefault()},He=()=>{window.removeEventListener("mousemove",Ce),window.addEventListener("mouseup",He),T&&j(),p=!1};let ee=null;const fe=me=>{if(r&1<<Ts.Main){const Ie=me.changedTouches[0];ee===null&&(ee=Ie,window.addEventListener("touchmove",ue,{passive:!1}),window.addEventListener("touchend",ve),q(),p=!0,F.x=0,F.y=0,S.x=0,S.y=0,O.x=Ie.clientX,O.y=Ie.clientY,I.x=Ie.clientX,I.y=Ie.clientY,L.x=Ie.clientX,L.y=Ie.clientY)}},ue=me=>{const Ie=me.changedTouches[0];Ie.identifier===ee.identifier&&(L.x=Ie.clientX,L.y=Ie.clientY,C.shiftKey=me.shiftKey,C.metaKey=me.metaKey,C.altKey=me.altKey,C.ctrlKey=me.ctrlKey,T&&s&&me.preventDefault())},ve=me=>{me.changedTouches[0].identifier===ee.identifier&&(window.removeEventListener("touchmove",ue),window.removeEventListener("touchend",ve),T&&j(),p=!1,ee=null)};return i.addEventListener("mousedown",Re,{passive:!1}),i.addEventListener("touchstart",fe,{passive:!1}),()=>{i.removeEventListener("mousedown",Re),i.removeEventListener("touchstart",fe),window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",He),window.removeEventListener("touchmove",ue),window.removeEventListener("touchend",ve),X()}}const sx={},rx=["onFocusEnter","onFocusLeave"];function ox(i){return rx.some(e=>e in i)}function ax(i,e){const{onFocusEnter:t,onFocusLeave:n}={...sx,...e},s=()=>{i.addEventListener("blur",r),t==null||t({})},r=()=>{i.removeEventListener("blur",r),n==null||n({})};return i.addEventListener("focus",s),()=>{i.removeEventListener("focus",s),i.removeEventListener("blur",r)}}function fa(i){const[e,t]=i.split(".");if(t===void 0)return e;let n=t.length-1;for(;t[n]==="0";)n--;return t[n]==="."&&n--,n===-1?e:e+"."+t.slice(0,n+1)}function Xn(i,{maxDigits:e=8}={}){if(e<6)throw new Error("maxDigits must be at least 6");if(i===0)return"0";const t=i.toString(),[n,s]=t.split("."),r=n.length;let o=e-r-1;if(r>e||o<0){let[c,h]=i.toPrecision(e).split("e");return c=c.slice(0,e-h.length-1),`${fa(c)}e${h}`}return Math.abs(i)<1/Math.pow(10,e-2)?fa(i.toExponential(e-5)):s===void 0?n:fa(i.toFixed(o))}const rd={rad:1,deg:Math.PI/180,turn:Math.PI*2};function fi(i,e="rad"){let t=e,n=0;if(typeof i=="number")n=i;else{const s=i.match(/^\s*(-?[0-9.]+)\s*(\/\s*-?[0-9.]+)?\s*(rad|deg|turn)\s*$/);if(s){const[r,o,a,l]=s;n=Number.parseFloat(o),a&&(n/=Number.parseFloat(a.slice(1))),t=l}else n=Number.parseFloat(i)}return n*rd[t]}function Xs(i,e="rad"){return`${Xn(i/rd[e])}${e}`}function od(i){return typeof i=="number"}function Qn(i,e,t,n){if(t??(t=0),n??(n=od),e??(e={x:t,y:t}),i==null)return e;if(n(i))return e.x=i,e.y=i,e;if(Array.isArray(i)){const[o,a]=i;return e.x=o,e.y=a,e}if("width"in i){const{width:o,height:a}=i;return e.x=o,e.y=a,e}const{x:s,y:r}=i;return e.x=s,e.y=r,e}function lx(i,e,t,n){if(n??(n=od),t??(t=0),e??(e={x:t,y:t,z:t}),i==null)return e;if(n(i))return e.x=i,e.y=i,e.z=i,e;if(Array.isArray(i)){const[a,l,c=t]=i;return e.x=a,e.y=l,e.z=c,e}if("width"in i){const{width:a,height:l=t,depth:c=t}=i;return e.x=a,e.y=l,e.z=c,e}const{x:s=t,y:r=t,z:o=t}=i;return e.x=s,e.y=r,e.z=o,e}function pa(i){return i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.width=="number"&&typeof i.height=="number"}class er{constructor(e={}){z(this,"top",0);z(this,"right",0);z(this,"bottom",0);z(this,"left",0);this.set(e)}static from(e){return new er(e)}static ensure(e){return e instanceof er?e:new er(e)}*[Symbol.iterator](){yield this.top,yield this.right,yield this.bottom,yield this.left}setTRBL(e,t,n,s){return this.top=e,this.right=t,this.bottom=n,this.left=s,this}set(e={}){if(Array.isArray(e)){if(e.length===1){const[t]=e;this.top=t,this.right=t,this.bottom=t,this.left=t}else if(e.length===2){const[t,n]=e;this.top=t,this.right=n,this.bottom=t,this.left=n}else if(e.length===4){const[t,n,s,r]=e;this.top=t,this.right=n,this.bottom=s,this.left=r}}else if(typeof e=="number")this.top=e,this.right=e,this.bottom=e,this.left=e;else{const{all:t=0,vertical:n=t,horizontal:s=t,top:r=n,bottom:o=n,left:a=s,right:l=s}=e;this.top=r,this.right=l,this.bottom=o,this.left=a}}isHomogeneous(){return this.top===this.right&&this.top===this.bottom&&this.top===this.left}get horizontal(){return(this.left+this.right)/2}get vertical(){return(this.top+this.bottom)/2}get all(){return this.isHomogeneous()?this.top:(this.top+this.right+this.bottom+this.left)/4}get totalHorizontal(){return this.left+this.right}get totalVertical(){return this.top+this.bottom}toCSS({scalar:e=1}={}){return`${this.top*e}px ${this.right*e}px ${this.bottom*e}px ${this.left*e}px`}toStyle(e="padding all",{scalar:t=1}={}){const n=e.split(" "),s=n.includes("margin")===!1,r=n.includes("all"),o=r||n.includes("horizontal"),a=r||n.includes("vertical"),l=a||n.includes("top"),c=a||n.includes("bottom"),h=o||n.includes("left"),u=o||n.includes("right"),d=s?"padding":"margin",f=[];return l&&f.push([d+"Top",`${this.top*t}px`]),u&&f.push([d+"Right",`${this.right*t}px`]),c&&f.push([d+"Bottom",`${this.bottom*t}px`]),h&&f.push([d+"Left",`${this.left*t}px`]),Object.fromEntries(f)}}class sc{constructor(...e){z(this,"ox",0);z(this,"oy",0);z(this,"dx",1);z(this,"dy",0);e.length>0&&this.set(...e)}static from(...e){return new sc(...e)}getOrigin(e={x:0,y:0}){return e.x=this.ox,e.y=this.oy,e}setOrigin(e){return this.ox=e.x,this.oy=e.y,this}getDirection(e={x:0,y:0}){return e.x=this.dx,e.y=this.dy,e}setDirection(e,{normalize:t=!0}={}){let{x:n,y:s}=e;if(t){const r=Math.hypot(n,s);r===0?(n=1,s=0):(n/=r,s/=r)}return this.dx=n,this.dy=s,this}set(...e){if(e.length===4){const[t,n,s,r]=e;return this.setOrigin({x:t,y:n}).setDirection({x:s,y:r})}if(e.length===2)return this.setOrigin(e[0]).setDirection(e[1]);if(e.length===1)return this.setOrigin(e[0].origin??this.origin).setDirection(e[0].direction??this.direction);throw new Error("Not implemented")}get origin(){return this.getOrigin()}set origin(e){this.setOrigin(e)}get direction(){return this.getDirection()}set direction(e){this.setDirection(e)}}let Vr;class lo{static setScope(e){return Vr=e,lo}static toViewBox({scalar:e=1}={}){const[t,n,s,r]=Vr.tupple(e);return`${Xn(t)} ${Xn(n)} ${Xn(s)} ${Xn(r)}`}static toPathData({scalar:e=1,reversed:t=!1}={}){const[n,s,r,o]=Vr.tupple(e);return t?`M ${n},${s} v ${o} h ${r} v ${-o} Z`:`M ${n},${s} h ${r} v ${o} h ${-r} Z`}static toRectProps({scalar:e=1}={}){const[t,n,s,r]=Vr.tupple(e);return`x="${Xn(t)}" y="${Xn(n)}" width="${Xn(s)}" height="${Xn(r)}"`}}const cx={"top-left":{x:0,y:0},"top-center":{x:.5,y:0},"top-right":{x:1,y:0},"center-left":{x:0,y:.5},center:{x:.5,y:.5},"center-right":{x:1,y:.5},"bottom-left":{x:0,y:1},"bottom-center":{x:.5,y:1},"bottom-right":{x:1,y:1}};function ad(i){return typeof i=="string"?cx[i]:Qn(i)}const hx={x:0,y:0,width:1,height:1};function ux(i,e=new ei){if(i instanceof ei)return e.copy(i);if(Array.isArray(i)){if(i.length===2){const[h,u]=i;return e.set(h,u)}if(i.length===4){const[h,u,d,f]=i;return e.set(h,u,d,f)}throw new Error("Oops. Wrong parameters here.")}const{align:t,...n}=i,{x:s,y:r}=ad(t??0);if(Object.keys(n).length===0)return pa(i)?e.copy(i):(console.warn("Empty rectangle declaration. Using default values."),e.set(0,0,1,1));if(console.log(n,pa(n)),pa(n))return e.copy(n).relativeTranslate(-s,-r);if("aspect"in n&&"diagonal"in n){const{aspect:h,diagonal:u}=n;return e.setDiagonalAndAspect(u,h).relativeTranslate(-s,-r)}if("extent"in n){const{position:h=0,extent:u}=n,d=Qn(h),f=Qn(u);return e.set(d.x-f.x,d.y-f.y,f.x*2,f.y*2).relativeTranslate(-s,-r)}if("size"in n){const{position:h=0,size:u}=n,d=Qn(h),f=Qn(u);return e.setPosition(d.x,d.y).setSize(f.x,f.y).relativeTranslate(-s,-r)}const{x:o=0,y:a=0,width:l=0,height:c=0}=n;return e.set(o,a,l,c).relativeTranslate(-s,-r)}function Ph(i,e,t){const n=Math.min(e.x,t.x),s=Math.min(e.y,t.y),r=Math.max(e.x+e.width,t.x+t.width),o=Math.max(e.y+e.height,t.y+t.height);i.x=n,i.y=s,i.width=r-n,i.height=o-s}function dx(i,e,t,n,s,r){let o=0,a=0;n==="contain"?e.width/e.height>t?(a=e.height,o=a*t):(o=e.width,a=o/t):n==="cover"&&(e.width/e.height<t?(a=e.height,o=a*t):(o=e.width,a=o/t));const l=e.x+(e.width-o)*s,c=e.y+(e.height-a)*r;i.x=l,i.y=c,i.width=o,i.height=a}class ma{constructor(e,t,n,s){z(this,"ray");z(this,"intersects");z(this,"tmin");z(this,"tmax");z(this,"getPoint",this.getRayPoint);this.ray=e,this.intersects=t,this.tmin=n,this.tmax=s}getRayPoint(e,t={x:0,y:0}){return t.x=this.ray.origin.x+this.ray.direction.x*e,t.y=this.ray.origin.y+this.ray.direction.y*e,t}getPointMin(e={x:0,y:0},{offset:t=0}={}){return this.getRayPoint(this.tmin+t,e)}getPointMax(e={x:0,y:0},{offset:t=0}={}){return this.getRayPoint(this.tmax+t,e)}}class ei{constructor(...e){z(this,"x",0);z(this,"y",0);z(this,"width",0);z(this,"height",0);e.length>0&&this.set.apply(this,e)}static from(e){return ux(e??hx,new ei)}*[Symbol.iterator](){yield this.x,yield this.y,yield this.width,yield this.height}copy(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}clone(){return new ei().copy(this)}set(...e){if(e.length===4)return this.x=e[0],this.y=e[1],this.width=e[2],this.height=e[3],this;if(e.length===2)return this.width=e[0],this.height=e[1],this;if(e.length===1){const[t]=e;t instanceof ei&&this.copy(t)}if(e.length===0)return this.x=0,this.y=0,this.width=0,this.height=0,this;throw new Error("Oops. Wrong parameters here.")}fromRelativePoint(...e){if(typeof e[0]=="number"&&typeof e[1]=="number"){const[t,n,s={}]=e;return s.x=this.x+this.width*t,s.y=this.y+this.height*n,s}if(e.length>0){const[t,n]=e,{x:s,y:r}=ad(t);return this.fromRelativePoint(s,r,n)}throw new Error("Oops. Wrong parameters here.")}toRelativePoint(e,t){return t??(t={x:0,y:0}),t.x=(e.x-this.x)/this.width,t.y=(e.y-this.y)/this.height,t}getCenterX(){return this.x+this.width/2}setCenterX(e){return this.x=e-this.width/2,this}getCenterY(){return this.y+this.height/2}setCenterY(e){return this.y=e-this.height/2,this}getCenter(e={x:0,y:0}){return e.x=this.getCenterX(),e.y=this.getCenterY(),e}setCenter(e){const{x:t,y:n}=Qn(e);return this.setCenterX(t).setCenterY(n)}getMinX(){return this.x}setMinX(e,t="resize"){switch(t){case"resize":{e>this.left?(this.width=0,this.x=e):(this.width+=this.x-e,this.x=e);break}case"translate":{this.x=e;break}}return this}incrementMinX(e){return this.setMinX(this.getMinX()+e)}getMaxX(){return this.x+this.width}setMaxX(e,t="resize"){switch(t){case"resize":{e<this.x?(this.width=0,this.x=e):this.width=e-this.x;break}case"translate":{this.x=e-this.width;break}}return this}incrementMaxX(e){return this.setMaxX(this.getMaxX()+e)}getMinY(){return this.y}setMinY(e,t="resize"){switch(t){case"resize":{e>this.y+this.height?(this.height=0,this.y=e):(this.height+=this.y-e,this.y=e);break}case"translate":{this.y=e;break}}return this}incrementMinY(e){return this.setMinY(this.getMinY()+e)}getMaxY(){return this.y+this.height}setMaxY(e,t="resize"){switch(t){case"resize":{e<this.y?(this.height=0,this.y=e):this.height=e-this.y;break}case"translate":{this.y=e-this.height;break}}return this}incrementMaxY(e){return this.setMaxY(this.getMaxY()+e)}translate(...e){const{x:t,y:n}=Qn(e.length===1?e[0]:e);return this.x+=t,this.y+=n,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.width*=e,this.height*=e,this}multiply(...e){const{x:t,y:n}=Qn(e.length===1?e[0]:e);return this.x*=t,this.y*=n,this.width*=t,this.height*=n,this}setPosition(e,t,n){const s=(n==null?void 0:n.x)??0,r=(n==null?void 0:n.y)??0;return this.x=e-this.width*s,this.y=t-this.height*r,this}getSize(e={x:0,y:0}){return e.x=this.width,e.y=this.height,e}setWidth(e,t){const n=t??0;return this.x+=(this.width-e)*n,this.width=e,this}setHeight(e,t){const n=t??0;return this.y+=(this.height-e)*n,this.height=e,this}setSize(e,t,n){const s=(n==null?void 0:n.x)??0,r=(n==null?void 0:n.y)??0;return this.x+=(this.width-e)*s,this.y+=(this.height-t)*r,this.width=e,this.height=t,this}setArea(e,t){const n=Math.sqrt(e/this.area),s=this.width*n,r=this.height*n;return this.setSize(s,r,t)}setDiagonal(e,t){const n=this.width/this.height,s=Math.sqrt(e**2/(1+n**2)),r=s*n;return this.setSize(r,s,t)}setAspect(e,t){const{diagonal:n}=this,s=Math.sqrt(n**2/(1+e**2)),r=s*e;return this.setSize(r,s,t)}setDiagonalAndAspect(e,t,n){const s=Math.sqrt(e**2/(1+t**2)),r=s*t;return this.setSize(r,s,n)}applyPadding(e,t="shrink"){const{top:n,right:s,bottom:r,left:o}=er.ensure(e);return t==="shrink"?(this.x+=o,this.y+=n,this.width-=o+s,this.height-=n+r):(this.x-=o,this.y-=n,this.width+=o+s,this.height+=n+r),this}inflate(e){return this.applyPadding(e,"grow")}relativeTranslate(e,t){return this.x+=this.width*e,this.y+=this.height*t,this}flipX(){return this.x=-this.x-this.width,this}flipY(){return this.y=-this.y-this.height,this}union(e){return Ph(this,e,this),this}unionRectangles(e,t){return Ph(this,e,t),this}innerRectangle({aspect:e=1,sizeMode:t="contain",alignX:n=.5,alignY:s=.5,padding:r=0},o=new ei){return dx(o,fx.copy(this).applyPadding(r),e,t,n,s),o}relativeTo(e){return this.x-=e.x,this.y-=e.y,this.x/=e.width,this.y/=e.height,this.width/=e.width,this.height/=e.height,this}lerpRectangles(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.width=e.width+(t.width-e.width)*n,this.height=e.height+(t.height-e.height)*n,this}lerp(e,t){return this.lerpRectangles(this,e,t)}containsXY(e,t){return e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}containsPoint(e){return this.containsXY(e.x,e.y)}containsRect(e){return e.x>=this.x&&e.y>=this.y&&e.x+e.width<=this.x+this.width&&e.y+e.height<=this.y+this.height}contains(...e){if(e.length===2){const[t,n]=e;return this.containsXY(t,n)}if(e.length===1){const[t]=e;if(Array.isArray(t)){const[n,s]=t;return this.containsXY(n,s)}if(typeof t=="object"&&"x"in t&&"y"in t)return/vector2|point/.test(t.constructor.name)?this.containsPoint(t):"width"in t&&"height"in t?this.containsRect(t):this.containsPoint(t)}throw new Error("Oops. Wrong parameters here.")}uv({x:e,y:t},n){return n??(n={x:0,y:0}),n.x=(e-this.x)/this.width,n.y=(t-this.y)/this.height,n}linecast(...e){const{x:t,y:n,width:s,height:r}=this,o=sc.from(...e),{ox:a,oy:l,dx:c,dy:h}=o,u=(t-a)/c,d=(t+s-a)/c,f=(n-l)/h,v=(n+r-l)/h,x=Math.max(Math.min(u,d),Math.min(f,v)),m=Math.min(Math.max(u,d),Math.max(f,v)),p=x<=m;return new ma(o,p,x,m)}raycast(...e){const t=this.linecast(...e);if(t.intersects===!1)return t;let{tmin:n,tmax:s}=t;const r=s>=0;return r===!1?new ma(t.ray,r,n,s):(n=n<0?s:n,new ma(t.ray,r,n,s))}get centerX(){return this.getCenterX()}set centerX(e){this.setCenterX(e)}get centerY(){return this.getCenterY()}set centerY(e){this.setCenterY(e)}get center(){return this.getCenter()}set center(e){this.setCenter(e)}get minX(){return this.getMinX()}set minX(e){this.setMinX(e)}get maxX(){return this.getMaxX()}set maxX(e){this.setMaxX(e)}get minY(){return this.getMinY()}set minY(e){this.setMinY(e)}get maxY(){return this.getMaxY()}set maxY(e){this.setMaxY(e)}get left(){return this.getMinX()}set left(e){this.setMinX(e)}get right(){return this.getMaxX()}set right(e){this.setMaxX(e)}get top(){return this.getMinY()}set top(e){this.setMinY(e)}get bottom(){return this.getMaxY()}set bottom(e){this.setMaxY(e)}get size(){return this.getSize()}set size(e){this.setSize(e.x,e.y)}get area(){return this.width*this.height}set area(e){this.setArea(e)}get diagonal(){return Math.sqrt(this.width**2+this.height**2)}set diagonal(e){this.setDiagonal(e)}get aspect(){return this.width/this.height}set aspect(e){this.setAspect(e)}tupple(e=1){return[this.x*e,this.y*e,this.width*e,this.height*e]}get svg(){return lo.setScope(this)}toViewBox(){return console.warn("Use `svg.toViewBox()` instead."),lo.setScope(this).toViewBox()}toCSS(){return{left:`${this.x}px`,top:`${this.y}px`,width:`${this.width}px`,height:`${this.height}px`}}}const fx=new ei,px=["onPressStart","onPressStop","onPressFrame"];function mx(i){return px.some(e=>e in i)}function gx(i,e){const{onPressStart:t,onPressStop:n,onPressFrame:s}=e;let r=!1,o=-1;const a=new DOMPoint(0,0),l=new DOMPoint(0,0),c=new DOMPoint(0,0),h={position:l,delta:c,target:i,targetRectOnDown:new ei,get pointerIsInside(){return h.targetRectOnDown.contains(a.x,a.y)}},u=()=>{r&&(o=window.requestAnimationFrame(u),c.x=a.x-l.x,c.y=a.y-l.y,l.x+=c.x,l.y+=c.y,s==null||s(h))},d=T=>{window.addEventListener("mousemove",f),window.addEventListener("mouseup",v),o=window.requestAnimationFrame(u),r=!0,h.targetRectOnDown.copy(i.getBoundingClientRect()),c.x=0,c.y=0,l.x=T.clientX,l.y=T.clientY,a.x=T.clientX,a.y=T.clientY,t==null||t(h)},f=T=>{a.x=T.clientX,a.y=T.clientY},v=()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",v),r=!1,n==null||n(h)},x=T=>{T.preventDefault();const y=T.touches[0];y&&(window.addEventListener("touchmove",m),window.addEventListener("touchend",p),o=window.requestAnimationFrame(u),r=!0,h.targetRectOnDown.copy(i.getBoundingClientRect()),c.x=0,c.y=0,l.x=y.clientX,l.y=y.clientY,a.x=y.clientX,a.y=y.clientY,t==null||t(h))},m=T=>{const y=T.touches[0];y&&(a.x=y.clientX,a.y=y.clientY)},p=T=>{window.removeEventListener("touchmove",m),window.removeEventListener("touchend",p),r=!1,n==null||n(h)};return i.addEventListener("mousedown",d,{passive:!1}),i.addEventListener("touchstart",x,{passive:!1}),()=>{i.removeEventListener("mousedown",d),i.removeEventListener("touchstart",x),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",v),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",p),window.cancelAnimationFrame(o)}}class _x extends tc{constructor(t,n,s,r,o){super();z(this,"timestamp");z(this,"tapTarget");z(this,"downTarget");z(this,"downPosition");z(this,"orignalDownEvent");this.timestamp=t,this.tapTarget=n,this.downTarget=s,this.downPosition=r,this.orignalDownEvent=o,this.position=r}get targetElement(){return this.tapTarget}get button(){return this.orignalDownEvent.button}getLocalDownPosition(t){const{x:n,y:s}=this.localPosition;return t??(t={}),t.x=n,t.y=s,t}get localDownPosition(){return this.localPosition}}const vx={maxDistance:10,maxDuration:.3},xx=["onTap"];function yx(i){return xx.some(e=>e in i)}function Mx(i,e){const{maxDistance:t,maxDuration:n,onTap:s}={...vx,...e};let r=null;const o=l=>{r=new _x(Date.now(),i,l.target,new DOMPoint(l.clientX,l.clientY),l),window.addEventListener("pointerup",a)},a=l=>{window.removeEventListener("pointerup",a);const c=(Date.now()-r.timestamp)/1e3,h=l.clientX-r.downPosition.x,u=l.clientY-r.downPosition.y;Math.sqrt(h*h+u*u)<=t&&c<n&&(s==null||s(r))};return i.addEventListener("pointerdown",o),()=>{i.removeEventListener("pointerdown",o),window.removeEventListener("pointerup",a)}}class Sx extends id{constructor(){super(...arguments);z(this,"time",-1);z(this,"rawDeltaTime",-1);z(this,"deltaTime",-1);z(this,"delta",new DOMPoint);z(this,"phase","start");z(this,"event",null)}}const Ex={wheelPreventDefault:!1},Tx=["onWheel","onWheelStart","onWheelEnd"];function bx(i){return Tx.some(e=>e in i)}function wx(i){switch(i){default:case 0:return 1;case 1:return 16;case 2:return 1e3}}function Ax(i,e){const{wheelPreventDefault:t,onWheel:n,onWheelStart:s,onWheelEnd:r}={...Ex,...e},o={start:!1,timeout:-1,time:-1},a=new Sx,l=c=>{t&&c.preventDefault();const h=o.start===!1?"start":"continue",u=c.timeStamp/1e3,d=h==="start"?1/60:u-o.time;o.time=u,a.event=c,a.phase=h,a.time=u;const f=wx(c.deltaMode);a.delta.x=c.deltaX*f,a.delta.y=c.deltaY*f,a.delta.z=c.deltaZ*f;const v=nc(d,1/240,1/30);a.rawDeltaTime=d,a.deltaTime=v,h==="start"&&(o.start=!0,s==null||s(a)),n==null||n(a),window.clearTimeout(o.timeout),o.timeout=window.setTimeout(()=>{o.start=!1,a.phase="end",a.deltaTime=.1,a.time=u+.1,a.delta.x=0,a.delta.y=0,a.delta.z=0,r==null||r(a)},100)};return i.addEventListener("wheel",l,{passive:!t}),()=>{i.removeEventListener("wheel",l)}}const Rx=8,Cx=.1**30;class Px extends id{constructor(t=0,n=0,s=new DOMPoint,r="start"){super();z(this,"time");z(this,"deltaTime");z(this,"delta");z(this,"phase");this.time=t,this.deltaTime=n,this.delta=s,this.phase=r}}const Dx={preventDefault:!1,wheelFrameTickOrder:void 0},Lx=["onWheelFrame","onWheelFrameStart","onWheelFrameEnd"];function Ix(i){return Lx.some(e=>e in i)}class Ux{constructor(e=5){z(this,"capacity");z(this,"data",[]);z(this,"sum",new DOMPoint);z(this,"average",new DOMPoint);this.capacity=e}add(e){if(this.data.length===this.capacity){const n=this.data.shift();this.sum.x-=n.x,this.sum.y-=n.y,this.sum.z-=n.z}this.data.push(e),this.sum.x+=e.x,this.sum.y+=e.y,this.sum.z+=e.z;const t=this.data.length;this.average.x=this.sum.x/t,this.average.y=this.sum.y/t,this.average.z=this.sum.z/t}}function Nx(i,e){const{preventDefault:t,wheelFrameTickOrder:n,onWheelFrame:s,onWheelFrameStart:r,onWheelFrameEnd:o}={...Dx,...e},a={msOld:0,frame:0,frameID:0,deltaTime:0,time:0,position:new DOMPoint,positionOld:new DOMPoint,eventCount:0,eventCountOld:0,eventFrame:0,eventMsOld:0,eventPosition:new DOMPoint,eventVelocities:new Ux(5),eventVelocity:new DOMPoint},l=d=>{t&&d.preventDefault();const f=a.eventCount===0?1/60:(d.timeStamp-a.eventMsOld)/1e3;a.eventCount===0&&c(),a.eventPosition.x+=d.deltaX,a.eventPosition.y+=d.deltaY,a.eventPosition.z+=d.deltaZ;const v=new DOMPoint;v.x=d.deltaX/f,v.y=d.deltaY/f,v.z=d.deltaZ/f,a.eventVelocities.add(v),a.eventCount++,a.eventFrame=a.frame,a.eventMsOld=d.timeStamp},c=()=>{h(),a.frameID=n===void 0?window.requestAnimationFrame(u):yi.current().requestAnimationFrame(u,{order:n})},h=()=>{n===void 0?window.cancelAnimationFrame(a.frameID):yi.current().cancelAnimationFrame(a.frameID)},u=d=>{const f=a.eventCountOld===0?"start":a.frame===a.eventFrame+Rx?"end":"continue";console.log(f);const v=(d-a.msOld)/1e3,x=f==="start"?1/60:nc(v,1/240,1/30);if(a.deltaTime=x,a.msOld=d,f!=="end"?c():h(),a.time+=x,f==="end")a.position.x=a.eventPosition.x,a.position.y=a.eventPosition.y,a.position.z=a.eventPosition.z;else{const{x:T,y,z:M}=a.eventVelocities.average;a.position.x+=T*x*8,a.position.y+=y*x*8,a.position.z+=M*x*8;const L=Cx**x;a.position.x+=(a.eventPosition.x-a.position.x)*L,a.position.y+=(a.eventPosition.y-a.position.y)*L,a.position.z+=(a.eventPosition.z-a.position.z)*L}const m=new DOMPoint;m.x=a.position.x-a.positionOld.x,m.y=a.position.y-a.positionOld.y,m.z=a.position.z-a.positionOld.z;const p=new Px(a.time,x,m,f);f==="start"&&(r==null||r(p)),s==null||s(p),f!=="end"?(a.eventCountOld=a.eventCount,a.frame++,a.positionOld.x=a.position.x,a.positionOld.y=a.position.y,a.positionOld.z=a.position.z):(a.eventCount=0,a.eventCountOld=0,a.frame=0,o==null||o(p))};return i.addEventListener("wheel",l,{passive:!t}),()=>{i.removeEventListener("wheel",l),h()}}function Ox(i,e){const t=[],n="length"in i?Array.from(i):[i];for(const s of n)Kv(e)&&t.push($v(s,e)),nx(e)&&t.push(ix(s,e)),ox(e)&&t.push(ax(s,e)),mx(e)&&t.push(gx(s,e)),yx(e)&&t.push(Mx(s,e)),bx(e)&&t.push(Ax(s,e)),Ix(e)&&t.push(Nx(s,e));return()=>{for(const s of t)s()}}const ln=i=>{const e=typeof i;return e==="number"||e==="bigint"||e==="boolean"||e==="string"};class Fx{constructor(){z(this,"_valueMap",new Map);z(this,"_objectMap",new WeakMap);z(this,"_multiValueMap",new Map);z(this,"_multiObjectMap",new WeakMap)}get(e){if(Array.isArray(e)){const{_multiValueMap:t,_multiObjectMap:n}=this;for(let s=0,r=e.length;s<r;s++){const o=e[s],a=ln(o)?t.get(o):n.get(o);if(a)for(const l of a){const{keyCount:c,valueKeys:h,objectKeys:u,value:d}=l;if(c===r&&e.every(f=>ln(f)?h.has(f):u.has(f)))return d}}return}else return ln(e)?this._valueMap.get(e):this._objectMap.get(e)}delete(e){if(Array.isArray(e)){const{_multiValueMap:t,_multiObjectMap:n}=this;for(let s=0,r=e.length;s<r;s++){const o=e[s],a=ln(o)?t.get(o):n.get(o);if(a)for(const l of a){const{keyCount:c,valueKeys:h,objectKeys:u}=l;if(c===r&&e.every(d=>ln(d)?h.has(d):u.has(d)))return a.delete(l),a.size===0&&(ln(o)?t.delete(o):n.delete(o)),!0}}return!1}else return ln(e)?this._valueMap.delete(e):this._objectMap.delete(e)}set(e,t){if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid array length!");const{_multiValueMap:n,_multiObjectMap:s}=this,r=e.length;for(let h=0;h<r;h++){const u=e[h],d=ln(u)?n.get(u):s.get(u);if(d)for(const f of d){const{keyCount:v,valueKeys:x,objectKeys:m}=f;if(v===r&&e.every(p=>ln(p)?x.has(p):m.has(p))){f.value=t;return}}}const o=new Set,a=new WeakSet;for(let h=0;h<r;h++){const u=e[h];ln(u)?o.add(u):a.add(u)}const l={valueKeys:o,objectKeys:a,keyCount:r,value:t},c=e.find(h=>ln(h)===!1);if(c!==void 0){const h=s.get(c);if(h)h.add(l);else{const u=new Set;u.add(l),s.set(c,u)}}else{const h=e.find(d=>ln(d)),u=n.get(h);if(u)u.add(l);else{const d=new Set;d.add(l),n.set(h,d)}}}else ln(e)?this._valueMap.set(e,t):this._objectMap.set(e,t)}}function Pn(i){return i!==null&&typeof i=="object"}function co(i){if(Array.isArray(i)){const e=i.length,t=new Array(e);for(let n=0;n<e;n++){const s=i[n];t[n]=Pn(s)?co(s):s}return t}else{const e={};for(const t in i){const n=i[t];e[t]=Pn(n)?co(n):n}return e}}function ld(i){for(const e in i){let t=i[e];if(Pn(t)&&ld(t),e.includes(".")){delete i[e];const n=e.split(".");for(let s=n.length-1;s>=1;s--)t={[n[s]]:t};i[n[0]]=t;continue}}return i}function cd(i){for(const e in i){let t=i[e];if(Pn(t)&&cd(t),e.includes("|")){delete i[e];const n=e.split("|");for(let s=n.length-1;s>=0;s--)i[n[s]]=Pn(t)?co(t):t}}return i}function Dh(i){return Pn(i)===!1?i:cd(ld(co(i)))}function Bx(i,...e){return Object.fromEntries(Object.entries(i).filter(([t])=>!e.includes(t)))}const kx=i=>Math.sin(Math.PI*i),zx=i=>.5+.5*Math.cos(2*Math.PI*(i-.5)),Hx=(i,e)=>1-Math.abs(2*i-1)**e,Vx=(i,e,t)=>Math.pow(e+t,e+t)/(Math.pow(e,e)*Math.pow(t,t))*Math.pow(i,e)*Math.pow(1-i,t),Gx=(i,e=2,t=2)=>Math.sin(e*2*Math.PI*i)*Math.pow(1-i,t),Wx=(i,e=2,t=2)=>{const n=1/(4*e),s=2/3+.4*(e-1)/e;return(Math.pow(1-n,-t)*s+1-s)*Math.sin(e*2*Math.PI*i)*Math.pow(1-i,t)},Xx={sin:kx,cos:zx,pow:Hx,iqPower:Vx,unnormalizedElastic:Gx,elastic:Wx},hd=(i,e,t)=>{const n=1-t,s=t*t;return 3*n*n*t*i+3*n*s*e+s*t},Yx=(i,e,t,n=6,s=1e-4,r=0,o=1,a=0,l=1)=>{if(t<=s)return 0;if(t>=1-s)return 1;let c=0,h=0,u=0;for(let d=0;d<n;d++){if(u=(r+o)/2,h=hd(i,e,u),c=t-h,Math.abs(c)<=s)return u;c<0?(o=u,l=h):(r=u,a=h)}return r+(o-r)*(t-a)/(l-a)},qx=(i,e,t,n,s,r,o)=>{const a=Yx(i,t,s,r,o);return hd(e,n,a)},Tn=i=>i<0?0:i>1?1:i,Po=i=>Tn(i),jx=Po,Kx=i=>(i=Tn(i))*i,$x=i=>(i=Tn(i))*i*i,Zx=i=>(i=Tn(i))*i*i*i,Jx=i=>(i=Tn(i))*i*i*i*i,Qx=i=>(i=Tn(i))*i*i*i*i*i,ey=Po,ty=i=>1-(i=Tn(1-i))*i,ny=i=>1-(i=Tn(1-i))*i*i,iy=i=>1-(i=Tn(1-i))*i*i*i,sy=i=>1-(i=Tn(1-i))*i*i*i*i,ry=i=>1-(i=Tn(1-i))*i*i*i*i*i,oy=(i,e=3,t=.5)=>i<0?0:i>1?1:i<t?1/Math.pow(t,e-1)*Math.pow(i,e):1-1/Math.pow(1-t,e-1)*Math.pow(1-i,e),ay=Po,ly=i=>i<0?0:i>1?1:i<.5?2*i*i:1-2*(i=1-i)*i,cy=i=>i<0?0:i>1?1:i<.5?4*i*i*i:1-4*(i=1-i)*i*i,hy=i=>i<0?0:i>1?1:i<.5?8*i*i*i*i:1-8*(i=1-i)*i*i*i,uy=i=>i<0?0:i>1?1:i<.5?16*i*i*i*i*i:1-16*(i=1-i)*i*i*i*i,dy=i=>i<0?0:i>1?1:i<.5?32*i*i*i*i*i*i:1-32*(i=1-i)*i*i*i*i*i,fy=(i,e,t,n)=>{const r=Math.abs(e-1)<1e-6?1/Math.E:(1/e)**(1/(e-1)),o=Math.abs(t-1)<1e-6?1/Math.E:(1/t)**(1/(t-1)),a=(r+o)/(1-n),l=r/a,c=1-o/a,h=r**e,u=o**t,d=a-r+h-o+u;return i<0?0:i>1?1:n>=1?i:i<l?(i*a)**e/d:i>c?1-((1-i)*a)**t/d:(i*a-r+h)/d},py=(i,e,t)=>Math.pow(i,e)/(Math.pow(i,e)+Math.pow(1-i,t)),wt={linear:Po,in1:jx,in2:Kx,in3:$x,in4:Zx,in5:Jx,in6:Qx,out1:ey,out2:ty,out3:ny,out4:iy,out5:sy,out6:ry,inOut:oy,inOut1:ay,inOut2:ly,inOut3:cy,inOut4:hy,inOut5:uy,inOut6:dy,inLinearOut:fy,asymmetricalInOut:py},ud={linear:wt.linear,in1:wt.in1,in2:wt.in2,in3:wt.in3,in4:wt.in4,in5:wt.in5,in6:wt.in6,out1:wt.out1,out2:wt.out2,out3:wt.out3,out4:wt.out4,out5:wt.out5,out6:wt.out6,inOut1:wt.inOut1,inOut2:wt.inOut2,inOut3:wt.inOut3,inOut4:wt.inOut4,inOut5:wt.inOut5,inOut6:wt.inOut6};function my(i){return i in ud}function gy(i){return i.startsWith("cubic-bezier(")&&i.endsWith(")")}function _y(i){return i.startsWith("inOut(")&&i.endsWith(")")}function vy(i){return i==="elasticInPlace"||i.startsWith("elasticInPlace(")&&i.endsWith(")")}const ds=new Map;function xy(i){const[e,t,n,s]=i.slice(13,-1).trim().split(/\s*,\s*/).map(o=>Number.parseFloat(o)),r=o=>qx(e,t,n,s,o);return ds.set(i,r),r}function yy(i){const[e,t=.5]=i.trim().slice(6,-1).split(/\s*,\s*/).map(s=>Number.parseFloat(s)),n=s=>wt.inOut(s,e,t);return ds.set(i,n),n}function My(i){const[e=void 0,t=void 0]=i.trim().slice(15,-1).split(/\s*,\s*/).map(s=>Number.parseFloat(s)),n=s=>Xx.elastic(s,e,t);return ds.set(i,n),n}function dd(i){if(typeof i=="function")return i;if(my(i))return ud[i];if(gy(i))return ds.get(i)??xy(i);if(_y(i))return ds.get(i)??yy(i);if(vy(i))return ds.get(i)??My(i);throw new Error(`Invalid argument for Animation.ease(): "${i}"`)}function Sy(i,e,t,n,s,r="inOut2"){const o=(i-e)/(t-e),a=o<0?0:o>1?1:o,c=(typeof r=="function"?r:dd(r))(a);return n+(s-n)*c}const rc=dd,Ey=["pause","destroy"],xo=class xo{constructor(){z(this,"map",new Map)}add(e,t){const n=r=>{const o=new Set;return this.map.set(r,o),o};(this.map.get(e)??n(e)).add(t)}clear(e){var t;(t=this.map.get(e))==null||t.clear()}get(e){var t;return((t=this.map.get(e))==null?void 0:t[Symbol.iterator]())??xo.empty}};z(xo,"empty",[][Symbol.iterator]());let ho=xo;const oc=new ho,Ml=new ho,bs=new Fx;let Ty=0;class fd{constructor(e,t,n,s,r,o){z(this,"id",Ty++);z(this,"duration");z(this,"delay");z(this,"target");z(this,"prerun");z(this,"autoDestroy");z(this,"destroyHasBeenRequested",!1);z(this,"unclampedTime");z(this,"unclampedTimeOld");z(this,"frame");z(this,"timeScale");z(this,"paused",!1);z(this,"time",0);z(this,"timeOld",0);z(this,"progress",0);z(this,"destroy",()=>this.requestDestroy());z(this,"progressLerp",(e,t,n="linear")=>{const s=rc(n)(this.progress);return e+(t-e)*s});this.duration=e,this.delay=t,this.frame=0,this.timeScale=n,this.unclampedTimeOld=this.unclampedTime=-t,this.target=s,this.autoDestroy=r,this.prerun=o??t>0}get progressOld(){return this.timeOld/this.duration}get complete(){return this.progress===1}get delayed(){return this.unclampedTime<0}get deltaTime(){return this.time-this.timeOld}get direction(){return this.progress>=this.progressOld?"forward":"backward"}onUpdate(e){return oc.add(this.id,e),this}onStart(e){return this.onUpdate(({progress:t,progressOld:n})=>{t>0&&n===0&&e(this)})}onComplete(e){return this.onUpdate(()=>{this.progress===1&&e(this)})}onThreshold({threshold:e=.5,direction:t="both",mode:n="reach"},s){return this.onUpdate(({progress:r,progressOld:o})=>{if(t==="both"||this.direction===t){const a=n==="reach"?r>=e&&o<e:r>e&&o<=e,l=n==="reach"?r<=e&&o>e:r<e&&o>=e;(a||l)&&s(this)}})}onPass(e,t){return this.onThreshold({threshold:e,mode:"pass"},t)}onReach(e,t){return this.onThreshold({threshold:e,mode:"reach"},t)}onDestroy(e){return Ml.add(this.id,e),this}requestDestroy(){this.destroyHasBeenRequested=!0}set({paused:e,time:t,progress:n,timeScale:s,delay:r}={}){return n!==void 0&&Number.isFinite(n)&&(t=n*this.duration),t!==void 0&&Number.isFinite(t)&&(this.unclampedTime=t),e!==void 0&&(this.paused=e),s!==void 0&&(this.timeScale=s),r!==void 0&&this.applyDelay(r),this}applyDelay(e){return this.timeScale>0?this.unclampedTime=-e:this.unclampedTime=this.duration+e,this}pause(e){return typeof e=="number"&&(e={time:e}),this.set({...e,paused:!0})}play(e){return typeof e=="number"&&(e={time:e}),this.set({...e,paused:!1})}reverse(e){return typeof e=="number"&&(e={time:e}),this.set({...e,timeScale:-this.timeScale})}didPassAbove(e){const{time:t,progress:n}=e;return t!==void 0?this.timeOld<t&&this.time>=t:n!==void 0?this.progressOld<n&&this.progress>=n:!1}didPassBelow(e){const{time:t,progress:n}=e;return t!==void 0?this.timeOld>=t&&this.time<t:n!==void 0?this.progressOld>=n&&this.progress<n:!1}didPass(e){return this.didPassAbove(e)||this.didPassBelow(e)}}let Ni=[];const by=i=>{for(const e of Ml.get(i.id))e(i);oc.clear(i.id),Ml.clear(i.id),wy(i)},pd=i=>{const e=bs.get(i);if(e)for(const t of e)t.requestDestroy()};function wy(i){const{target:e}=i;if(e!==void 0){const t=bs.get(e);t&&(t.delete(i),t.size===0&&bs.delete(e))}}function Ay(i){const{target:e}=i;if(e!==void 0){let t=bs.get(e);t===void 0&&(t=new Set,bs.set(e,t)),t.add(i)}}const md=(i,e)=>{Ry();const{target:t}=e;return t!==void 0&&(i&&pd(t),Ay(e)),Ni.push(e),e},gd=i=>{for(let t=0,n=Ni.length;t<n;t++){const s=Ni[t];if(s.destroyHasBeenRequested)continue;s.paused===!1&&(s.timeScale>0?s.unclampedTime<s.duration:s.unclampedTime>0)&&(s.unclampedTime+=i*s.timeScale),s.timeOld=s.time,s.time=nc(s.unclampedTime,0,s.duration);const o=s.duration===0;s.progress=o?1:Number.isFinite(s.duration)?Co(s.time/s.duration):0;const a=s.unclampedTime!==s.unclampedTimeOld&&(s.unclampedTimeOld>=0&&s.unclampedTimeOld<=s.duration||s.unclampedTime>=0&&s.unclampedTime<=s.duration),l=s.frame===0&&s.prerun;if(a||l||o)for(const c of oc.get(s.id)){switch(c(s)){case"pause":s.pause();break;case"destroy":s.requestDestroy();break}s.frame++}s.unclampedTimeOld=s.unclampedTime}const e=new Set;Ni=Ni.filter(t=>t.destroyHasBeenRequested||t.autoDestroy&&t.complete?(e.add(t),!1):!0);for(const t of e)by(t)};let Sl=-1,_d=!1;function Ry(){_d===!1&&vd()}function vd(){_d=!0;let i=window.performance.now();const e=t=>{Sl=window.requestAnimationFrame(e);const n=(-i+(i=t))/1e3;gd(n)};Sl=window.requestAnimationFrame(e)}function Cy(){window.cancelAnimationFrame(Sl)}function Py(...i){const e=[];for(const t of i){const n=bs.get(t);n&&e.push(...n)}return e}function Dy(...i){for(const e of i)pd(e);return Ks}const xd={duration:1,delay:0,timeScale:1,target:void 0,clear:!1,autoDestroy:!0,prerun:void 0};function Ly(i){typeof i=="number"&&(i={duration:i});const{clear:e,duration:t,delay:n,timeScale:s,target:r,autoDestroy:o,prerun:a}={...xd,...i};return md(e,new fd(t,n,s,r,o,a))}const Iy={...Bx(xd,"target"),ease:"inOut2"};function El(i,e,t,n=[]){if(Array.isArray(i)){for(let s=0,r=i.length;s<r;s++)El(i[s],e,t,n);return n}if(Pn(i)===!1||Pn(e??t)===!1)return n;for(const s in e??t){const r=(e??i)[s],o=(t??i)[s];if(Pn(o)){if(Pn(r)===!1)throw new Error("Tween from/to pair association error!");El(i[s],e&&r,t&&o,n)}else n.push({from:r,to:o,key:s,target:i})}return n}class Uy extends fd{constructor(){super(...arguments);z(this,"entries",[])}add(t){const n=Array.isArray(t)?t:[t];for(const s of n)El(s.target,Dh(s.from),Dh(s.to),this.entries);return this}}function Ny(i){const{clear:e,duration:t,delay:n,timeScale:s,ease:r,autoDestroy:o,prerun:a,target:l,from:c,to:h}={...Iy,...i},u=md(e,new Uy(t,n,s,l,o,a));(c??h)&&u.add({target:l,from:c,to:h});const d=typeof r=="function"?r:rc(r);return u.onUpdate(({progress:f})=>{const v=d(f),{entries:x}=u;for(let m=0,p=x.length;m<p;m++){const{target:T,key:y,from:M,to:L}=x[m];T[y]=M+(L-M)*v}}),u}const Ks={remap:Sy,ease:rc,during:Ly,tween:Ny,existing:Py,clear:Dy,safewords:Ey,core:{instancesCount:()=>Ni.length,instances:()=>[...Ni],updateInstances:gd,startAnimationLoop:vd,stopAnimationLoop:Cy}};function Oy(i,e){const t=-Math.log(i);return 1-Math.exp(-t*e)}function yd(...i){for(const e of i.flat(2))"destroy"in e?e.destroy():e()}class Fy{constructor(){z(this,"destroyables",[]);z(this,"destroy",()=>{yd(this.destroyables),this.destroyables=[]})}collect(...e){for(const t of e)if(t)if(Symbol.iterator in t)for(const n of t)n&&this.destroyables.push(n);else this.destroyables.push(t)}}function Lh(i){return!!i.isEuler}function By(i){return!!i.isMatrix4}function Md(i){return!!i.isObject3D}function ky(i){return!!i.isMesh}function Ih(i){return typeof i=="string"&&/^(rad|deg|turn)$/.test(i)}function Uh(i){return typeof i=="string"&&/^(XYZ|XZY|YXZ|YZX|ZXY|ZYX)$/.test(i)}function zy(i,e=new Ee){return Qn(i,e)}function Mn(i,e=new B){return lx(i,e)}const Nh={defaultOrder:"XYZ"};function uo(...i){const e=()=>{if(i.length===1)return[i[0],Nh,new en];if(i.length===2)return Lh(i[1])?[i[0],Nh,i[1]]:[i[0],i[1],new en];if(i.length===3)return i;throw new Error("Invalid number of arguments")},[t,{defaultOrder:n},s]=e();if(Lh(t))return s.copy(t);if(Array.isArray(t)){const[h,u,d,f,v]=t,x=Ih(f)?f:Ih(v)?v:"rad",m=Uh(f)?f:Uh(v)?v:n;return s.set(fi(h,x),fi(u,x),fi(d,x),m)}const{x:r,y:o,z:a,order:l=n,unit:c="rad"}=t;return s.set(fi(r,c),fi(o,c),fi(a,c),l)}(()=>{const i=new B,e=new en,t=new B,n=new Ht;function s(r,o){const{x:a=0,y:l=0,z:c=0,position:h={x:a,y:l,z:c},rotationX:u=0,rotationY:d=0,rotationZ:f=0,rotationOrder:v="XYZ",rotation:x={x:u,y:d,z:f,order:v},scaleX:m=1,scaleY:p=1,scaleZ:T=1,scaleScalar:y=1,scale:M={x:m,y:p,z:T}}=r;if(By(o))return Mn(h,i),uo(x,e),Mn(M,t).multiplyScalar(y),n.setFromEuler(e),o.compose(i,n,t);if(Md(o))return Mn(h,o.position),uo(x,o.rotation),Mn(M,o.scale).multiplyScalar(y),o;throw new Error("Invalid out argument")}return s})();function Hy(i){return i!==null&&typeof i=="object"}const fo=new Map;fo.set(Date,i=>new Date(i.getTime()));fo.set(RegExp,i=>new RegExp(i.source,i.flags));typeof window<"u"&&(fo.set(DOMPoint,i=>DOMPoint.fromPoint(i)),fo.set(DOMRect,i=>DOMRect.fromRect(i)));var Oh;(function(i){i.None="none",i.NotAnObject="not-an-object",i.InvalidIndex="invalid-index",i.CannotCreateAscendants="cannot-create-ascendants",i.CannotPierceNullOrUndefined="cannot-pierce-null-or-undefined"})(Oh||(Oh={}));function Sd(i){if(Object.freeze(i),Hy(i))for(const e in i)Sd(i[e]);return i}const Gr=new Xe,Fh=new B,Bh=new Ht,kh=new Ht,Vy={fov:"45deg",perspective:1,zoom:1,focus:[0,0,0],size:[4,4],before:1e3,after:1e3,rotation:[0,0,0,"YXZ"],frame:"contain",allowOrthographic:!0,fovEpsilon:"1.5deg",nearMin:.1};class ar{constructor(e){z(this,"perspective");z(this,"fov");z(this,"zoom");z(this,"focus",new B);z(this,"size",new Ee);z(this,"before");z(this,"after");z(this,"rotation",new en);z(this,"frame");z(this,"allowOrthographic");z(this,"nearMin");z(this,"fovEpsilon");z(this,"computedNdcScalar",new Ee);z(this,"computedSize",new Ee);this.set({...Vy,...e})}static get default(){return Gy}set(e){const{perspective:t,fov:n,zoom:s,focus:r,size:o,before:a,after:l,rotation:c,frame:h,allowOrthographic:u,fovEpsilon:d,nearMin:f}=e;return t!==void 0&&(this.perspective=t),n!==void 0&&(this.fov=fi(n)),s!==void 0&&(this.zoom=s),r!==void 0&&Mn(r,this.focus),o!==void 0&&zy(o,this.size),a!==void 0&&(this.before=a),l!==void 0&&(this.after=l),c!==void 0&&uo(c,{defaultOrder:"YXZ"},this.rotation),h!==void 0&&(this.frame=typeof h=="string"?h==="cover"?0:1:h),u!==void 0&&(this.allowOrthographic=u),d!==void 0&&(this.fovEpsilon=fi(d)),f!==void 0&&(this.nearMin=f),this}copy(e){return this.perspective=e.perspective,this.fov=e.fov,this.zoom=e.zoom,this.focus.copy(e.focus),this.size.copy(e.size),this.before=e.before,this.after=e.after,this.rotation.copy(e.rotation),this.frame=e.frame,this.allowOrthographic=e.allowOrthographic,this.fovEpsilon=e.fovEpsilon,this.nearMin=e.nearMin,this}clone(){return new ar().copy(this)}lerpVertigos(e,t,n){this.perspective=e.perspective+(t.perspective-e.perspective)*n,this.fov=e.fov+(t.fov-e.fov)*n;const s=.001,r=Math.log(e.zoom)/Math.log(s),o=Math.log(t.zoom)/Math.log(s),a=r+(o-r)*n;return this.zoom=s**a,this.focus.lerpVectors(e.focus,t.focus,n),this.size.lerpVectors(e.size,t.size,n),this.before=e.before+(t.before-e.before)*n,this.after=e.after+(t.after-e.after)*n,Bh.setFromEuler(e.rotation),kh.setFromEuler(t.rotation),this.rotation.setFromQuaternion(Bh.slerp(kh,n)),this.frame=e.frame+(t.frame-e.frame)*n,this.allowOrthographic=n<.5?e.allowOrthographic:t.allowOrthographic,this.fovEpsilon=e.fovEpsilon+(t.fovEpsilon-e.fovEpsilon)*n,this.nearMin=e.nearMin+(t.nearMin-e.nearMin)*n,this}lerp(e,t){return this.lerpVertigos(this,e,t)}apply(e,t){const s=this.size.x/this.size.y/t,o=1+(s>1?this.frame:1-this.frame)*(s-1),a=this.size.y/this.zoom,l=a*o,c=this.fovEpsilon;let h=this.perspective*this.fov;!this.allowOrthographic&&h<c&&(h=c);const u=a/2/Math.tan(h/2),d=h>=c,f=d?u:this.before+this.nearMin;if(Gr.makeRotationFromEuler(this.rotation),Fh.set(Gr.elements[8],Gr.elements[9],Gr.elements[10]).multiplyScalar(f).add(this.focus),e.position.copy(Fh),e.rotation.copy(this.rotation),e.updateMatrix(),e.updateMatrixWorld(!0),e.isPerspectiveCamera=d,e.isOrthographicCamera=!d,d){const v=Math.max(this.nearMin/this.zoom,u-this.before),x=u+this.after,m=l*v/u/2,p=m*t;e.fov=h*180/Math.PI,e.projectionMatrix.makePerspective(-p,p,m,-m,v,x)}else{const v=-this.before,x=this.after+this.before,m=l/2,p=m*t;e.fov=0,e.projectionMatrix.makeOrthographic(-p,p,m,-m,v,x)}return e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.computedNdcScalar.set(o*t,o),this.computedSize.set(l*t,l),this}toDeclaration(){const e=[Xs(this.rotation.x,"deg"),Xs(this.rotation.y,"deg"),Xs(this.rotation.z,"deg"),this.rotation.order];return{perspective:this.perspective,fov:Xs(this.fov,"deg"),zoom:this.zoom,focus:this.focus.toArray(),size:this.size.toArray(),before:this.before,after:this.after,rotation:e,frame:this.frame,allowOrthographic:this.allowOrthographic,fovEpsilon:Xs(this.fovEpsilon,"deg"),nearMin:this.nearMin}}}const Gy=Sd(new ar),ga=new Ht,po=new B,mo=new B,Ed=new B;function _a(i){ga.setFromEuler(i),po.set(1,0,0).applyQuaternion(ga),mo.set(0,1,0).applyQuaternion(ga),Ed.crossVectors(po,mo)}const Wy=["shift","alt","control","meta"];function zh(i,e){return e.every(t=>i[`${t}Key`])}function Hh(i){return i.split("+").filter(t=>{if(t==="")return!1;const n=Wy.includes(t);return n||console.warn(`Invalid input: ${t}`),n})}class Xy extends Fy{constructor(t={}){super();z(this,"dampingDecayFactor",1e-4);z(this,"vertigo",new ar);z(this,"dampedVertigo",new ar);z(this,"element");z(this,"inputConfig",{wheel:"zoom"});z(this,"actions",{togglePerspective:()=>{const t=this.vertigo.perspective>.5?0:1;Ks.tween({target:[this.vertigo,"perspective"],to:{perspective:t},duration:1,ease:"inOut3"})},focus:t=>{Ks.tween({target:this.vertigo.focus,to:Mn(t),duration:1,ease:"inOut3"})},rotate:(t,n,s)=>{const r=new Ht().setFromEuler(this.vertigo.rotation),o=new Ht().setFromEuler(new en(t,n,s,"YXZ")),a=new Ht;Ks.during({target:[this.vertigo,"rotation"],duration:1}).onUpdate(({progress:l})=>{a.slerpQuaternions(r,o,Ks.ease("inOut3")(l)),this.vertigo.rotation.setFromQuaternion(a)})},positiveXAlign:()=>{this.actions.rotate(0,Math.PI/2,0)},negativeXAlign:()=>{this.actions.rotate(0,-Math.PI/2,0)},positiveYAlign:()=>{this.actions.rotate(-Math.PI/2,0,0)},negativeYAlign:()=>{this.actions.rotate(Math.PI/2,0,0)},positiveZAlign:()=>{this.actions.rotate(0,0,0)},negativeZAlign:()=>{this.actions.rotate(0,Math.PI,0)}});z(this,"panInputs",[]);z(this,"orbitInputs",[]);z(this,"started",!1);this.vertigo.set(t),this.dampedVertigo.set(t)}parsePanInputs(t){this.panInputs=Hh(t)}parseOrbitInputs(t){this.orbitInputs=Hh(t)}pan(t,n){_a(this.vertigo.rotation);const s=1/this.vertigo.zoom;this.vertigo.focus.addScaledVector(po,t*s).addScaledVector(mo,n*s)}dolly(t){_a(this.vertigo.rotation);const n=1/this.vertigo.zoom;this.vertigo.focus.addScaledVector(Ed,t*n)}orbit(t,n){this.vertigo.rotation.x+=t,this.vertigo.rotation.y+=n}rotate(...t){this.orbit(...t)}zoomAt(t,n){const s=this.vertigo.size.x/this.vertigo.zoom,r=this.vertigo.size.y/this.vertigo.zoom,o=this.vertigo.size.x/t,a=this.vertigo.size.y/t,l=o-s,c=a-r;_a(this.vertigo.rotation);const{x:h,y:u}=n;this.vertigo.focus.addScaledVector(po,l*-h).addScaledVector(mo,c*-u),this.vertigo.zoom=t}initialize(t=document.body){return this.element=t,this}*doStart(t=this.element??document.body){yield Yv(t,{contextmenu:s=>{s.preventDefault()}});const n=new Ee;yield Ox(t,{onChange:s=>{const r=t.getBoundingClientRect(),o=(s.localPosition.x-r.x)/r.width*2-1,a=-((s.localPosition.y-r.y)/r.height*2-1);n.set(o/2,a/2).multiply(this.dampedVertigo.computedNdcScalar)},dragButton:-1,onDrag:s=>{const r=s.altKey?.2:s.shiftKey?5:1;switch(s.button){case Ts.Left:{zh(s,this.orbitInputs)&&this.orbit(s.delta.y*-.01*r,s.delta.x*-.01*r);break}case Ts.Right:{zh(s,this.panInputs)&&this.pan(s.delta.x*-.025*r,s.delta.y*.025*r);break}}},wheelPreventDefault:!0,onWheel:s=>{switch(this.inputConfig.wheel){case"zoom":{const r=this.vertigo.zoom*(1-s.delta.y*.001);s.event.altKey?this.zoomAt(r,n):this.zoomAt(r,{x:0,y:0});break}case"dolly":{this.dolly(s.delta.y*.01);break}}}})}start(...t){return this.started===!1&&(this.started=!0,this.collect(this.doStart(...t))),this}stop(){this.started&&(this.started=!1,this.destroy())}toggle(t=!this.started){t?this.start():this.stop()}update(t,n,s=1/60){const r=Oy(this.dampingDecayFactor,s);this.dampedVertigo.lerp(this.vertigo,r).apply(t,n)}}const Td={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yy=new Ao(-1,1,1,-1,0,1);class qy extends sn{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const jy=new qy;class ac{constructor(e){this._mesh=new jt(jy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bd extends Ps{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Eo.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ac(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vh extends Ps{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ky extends Ps{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $y{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:At}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bd(Td),this.copyPass.material.blending=Sn,this.clock=new Zp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vh!==void 0&&(o instanceof Vh?n=!0:o instanceof Ky&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _i extends Ps{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Ve(1,1,1),this.hiddenEdgeColor=new Ve(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Jt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new qu,this.depthMaterial.side=un,this.depthMaterial.depthPacking=Pu,this.depthMaterial.blending=Sn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=un,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Jt(this.resolution.x,this.resolution.y,{type:At}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Jt(r,o,{type:At}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Jt(r,o,{type:At}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Jt(Math.round(r/2),Math.round(o/2),{type:At}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Jt(r,o,{type:At}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Jt(Math.round(r/2),Math.round(o/2),{type:At}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeparableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Td;this.copyUniforms=Eo.clone(c.uniforms),this.materialCopy=new qt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Sn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ve,this.oldClearAlpha=1,this.fsQuad=new ac(null),this.tempPulseColor1=new Ve,this.tempPulseColor2=new Ve,this.textureMatrix=new Xe;function h(u,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!n.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=_i.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=_i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=_i.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=_i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new qt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ee(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new qt({uniforms:{maskTexture:{value:null},texSize:{value:new Ee(.5,.5)},visibleEdgeColor:{value:new B(1,1,1)},hiddenEdgeColor:{value:new B(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeparableBlurMaterial(e){return new qt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new qt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Aa,depthTest:!1,depthWrite:!1,transparent:!0})}}_i.BlurDirectionX=new Ee(1,0);_i.BlurDirectionY=new Ee(0,1);const Zy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Jy extends Ps{constructor(){super();const e=Zy;this.uniforms=Eo.clone(e.uniforms),this.material=new Pp({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ac(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===du?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===mu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gh extends Ps{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Qy={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};var qn;(function(i){i[i.Render=0]="Render",i[i.PostProcessing=1e3]="PostProcessing",i[i.GizmoRender=2e3]="GizmoRender",i[i.Outline=3e3]="Outline",i[i.Output=4e3]="Output",i[i.Antialiasing=5e3]="Antialiasing"})(qn||(qn={}));function Wh(i){return i.isRenderPass}class eM{constructor(e,t,n,s){z(this,"composer");z(this,"basicPasses");z(this,"passMap");const r=new $y(e),o=new Map,a=new Gh(t,s);a.clearAlpha=0,o.set(a,{type:qn.Render,insertOrder:0}),r.addPass(a);const l=new Gh(n,s);o.set(l,{type:qn.GizmoRender,insertOrder:0}),l.clear=!1,l.clearDepth=!1,r.addPass(l);const c=new _i(new Ee,t,s);o.set(c,{type:qn.GizmoRender,insertOrder:0}),r.addPass(c);const h=new Jy;o.set(h,{type:qn.Output,insertOrder:0}),r.addPass(h);const u=new bd(Qy);o.set(u,{type:qn.Antialiasing,insertOrder:0}),r.addPass(u),this.composer=r,this.basicPasses={mainRender:a,gizmoRender:l,outline:c,output:h,fxaa:u},this.passMap=o}get passes(){return this.composer.passes}sortPasses(){const e=[...this.passMap];for(const[t]of e)this.composer.removePass(t);e.sort((t,n)=>{const s=t[1],r=n[1];return s.type!==r.type?s.type-r.type:s.insertOrder-r.insertOrder});for(const[t]of e)this.composer.addPass(t);return this}*getPassesByType(e){for(const[t,n]of this.passMap)n.type===e&&(yield[t,n])}addPass(e,{type:t=qn.Render,insertOrder:n=void 0}={}){var r,o;return n===void 0&&(n=(((o=(r=[...this.getPassesByType(t)].at(-1))==null?void 0:r[1])==null?void 0:o.insertOrder)??-1)+1),this.passMap.set(e,{type:t,insertOrder:n}),this.sortPasses(),{destroy:()=>this.removePass(e)}}removePass(e){return this.passMap.has(e)?(this.passMap.delete(e),this.composer.removePass(e),!0):(console.warn("The pass is not in the pipeline."),!1)}setSize(e,t,n){this.composer.setSize(e,t),this.composer.setPixelRatio(n),this.basicPasses.fxaa.uniforms.resolution.value.set(1/n/e,1/n/t)}setScene(e){const t=this.basicPasses.mainRender.scene;for(const n of this.composer.passes)Wh(n)&&n.scene===t&&(n.scene=e)}render(e){for(const t of this.composer.passes)Wh(t)&&t.scene.traverseVisible(n=>{"onTick"in n&&n.onTick(e)});this.composer.render(e.deltaTime)}getPassesInfo(){const e=[`${this.constructor.name} passes info:`],{composer:t,passMap:n}=this;for(const[s,r]of t.passes.entries()){const o=n.get(r);o?e.push(`- ${s}: ${qn[o.type]} (insertOrder: ${o.insertOrder}) ${r.constructor.name}`):e.push(`- ${s}: NO METADATA for ${r.constructor.name}`)}return e.join(`
`)}}const Xh={type:"change"},lc={type:"start"},wd={type:"end"},Wr=new ws,Yh=new di,tM=Math.cos(70*Iu.DEG2RAD),Dt=new B,tn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},va=1e-6;class qh extends cm{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ht,this._lastTargetPosition=new B,this._quat=new Ht().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rh,this._sphericalDelta=new rh,this._scale=1,this._panOffset=new B,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new B,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iM.bind(this),this._onPointerDown=nM.bind(this),this._onPointerUp=sM.bind(this),this._onContextMenu=uM.bind(this),this._onMouseWheel=aM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=cM.bind(this),this._onTouchMove=hM.bind(this),this._onMouseDown=rM.bind(this),this._onMouseMove=oM.bind(this),this._interceptControlDown=dM.bind(this),this._interceptControlUp=fM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xh),this.update(),this.state=gt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<tM?this.object.lookAt(this.target):(Yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(Yh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>va||this._lastTargetPosition.distanceToSquared(this.target)>va?(this.dispatchEvent(Xh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wd),this.state=gt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=gt.DOLLY;break;case ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}break;case ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(lc)}function oM(i){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function aM(i){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(i.preventDefault(),this.dispatchEvent(lc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wd))}function lM(i){this.enabled!==!1&&this._handleKeyDown(i)}function cM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=gt.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=gt.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(lc)}function hM(i){switch(this._trackPointer(i),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=gt.NONE}}function uM(i){this.enabled!==!1&&i.preventDefault()}function dM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pM(...i){const[e,t]=i.length===1?[window,i[0]]:i,n=()=>{t()};return e.addEventListener("mousemove",n,{passive:!0}),e.addEventListener("mousedown",n,{passive:!0}),e.addEventListener("mouseup",n,{passive:!0}),e.addEventListener("touchstart",n,{passive:!0}),e.addEventListener("touchmove",n,{passive:!0}),e.addEventListener("wheel",n,{passive:!0}),e.addEventListener("keydown",n,{passive:!0}),e.addEventListener("keyup",n,{passive:!0}),window.addEventListener("resize",n,{passive:!0}),{destroy:()=>{e.removeEventListener("mousemove",n),e.removeEventListener("mousedown",n),e.removeEventListener("mouseup",n),e.removeEventListener("touchstart",n),e.removeEventListener("touchmove",n),e.removeEventListener("wheel",n),e.removeEventListener("keydown",n),e.removeEventListener("keyup",n),window.removeEventListener("resize",n)}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var dn=Uint8Array,as=Uint16Array,mM=Int32Array,Ad=new dn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rd=new dn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),gM=new dn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cd=function(i,e){for(var t=new as(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new mM(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Pd=Cd(Ad,2),Dd=Pd.b,_M=Pd.r;Dd[28]=258,_M[258]=28;var vM=Cd(Rd,0),xM=vM.b,Tl=new as(32768);for(var xt=0;xt<32768;++xt){var hi=(xt&43690)>>1|(xt&21845)<<1;hi=(hi&52428)>>2|(hi&13107)<<2,hi=(hi&61680)>>4|(hi&3855)<<4,Tl[xt]=((hi&65280)>>8|(hi&255)<<8)>>1}var tr=function(i,e,t){for(var n=i.length,s=0,r=new as(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new as(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new as(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Tl[u]>>l]=c}else for(a=new as(n),s=0;s<n;++s)i[s]&&(a[s]=Tl[o[i[s]-1]++]>>15-i[s]);return a},hr=new dn(288);for(var xt=0;xt<144;++xt)hr[xt]=8;for(var xt=144;xt<256;++xt)hr[xt]=9;for(var xt=256;xt<280;++xt)hr[xt]=7;for(var xt=280;xt<288;++xt)hr[xt]=8;var Ld=new dn(32);for(var xt=0;xt<32;++xt)Ld[xt]=5;var yM=tr(hr,9,1),MM=tr(Ld,5,1),xa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},_n=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ya=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},SM=function(i){return(i+7)/8|0},EM=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new dn(i.subarray(e,t))},TM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vn=function(i,e,t){var n=new Error(e||TM[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,vn),!t)throw n;return n},bM=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new dn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new dn(s*3));var c=function(pt){var mt=t.length;if(pt>mt){var Je=new dn(Math.max(mt*2,pt));Je.set(t),t=Je}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,v=e.d,x=e.m,m=e.n,p=s*8;do{if(!f){h=_n(i,u,1);var T=_n(i,u+1,3);if(u+=3,T)if(T==1)f=yM,v=MM,x=9,m=5;else if(T==2){var C=_n(i,u,31)+257,O=_n(i,u+10,15)+4,I=C+_n(i,u+5,31)+1;u+=14;for(var b=new dn(I),S=new dn(19),F=0;F<O;++F)S[gM[F]]=_n(i,u+F*3,7);u+=O*3;for(var q=xa(S),X=(1<<q)-1,Y=tr(S,q,1),F=0;F<I;){var te=Y[_n(i,u,X)];u+=te&15;var y=te>>4;if(y<16)b[F++]=y;else{var j=0,ce=0;for(y==16?(ce=3+_n(i,u,3),u+=2,j=b[F-1]):y==17?(ce=3+_n(i,u,7),u+=3):y==18&&(ce=11+_n(i,u,127),u+=7);ce--;)b[F++]=j}}var J=b.subarray(0,C),de=b.subarray(C);x=xa(J),m=xa(de),f=tr(J,x,1),v=tr(de,m,1)}else vn(1);else{var y=SM(u)+4,M=i[y-4]|i[y-3]<<8,L=y+M;if(L>s){l&&vn(0);break}a&&c(d+M),t.set(i.subarray(y,L),d),e.b=d+=M,e.p=u=L*8,e.f=h;continue}if(u>p){l&&vn(0);break}}a&&c(d+131072);for(var ge=(1<<x)-1,Re=(1<<m)-1,Ce=u;;Ce=u){var j=f[ya(i,u)&ge],He=j>>4;if(u+=j&15,u>p){l&&vn(0);break}if(j||vn(2),He<256)t[d++]=He;else if(He==256){Ce=u,f=null;break}else{var ee=He-254;if(He>264){var F=He-257,fe=Ad[F];ee=_n(i,u,(1<<fe)-1)+Dd[F],u+=fe}var ue=v[ya(i,u)&Re],ve=ue>>4;ue||vn(3),u+=ue&15;var de=xM[ve];if(ve>3){var fe=Rd[ve];de+=ya(i,u)&(1<<fe)-1,u+=fe}if(u>p){l&&vn(0);break}a&&c(d+131072);var me=d+ee;if(d<de){var Ie=r-de,ke=Math.min(de,me);for(Ie+d<0&&vn(3);d<ke;++d)t[d]=n[Ie+d]}for(;d<me;++d)t[d]=t[d-de]}}e.l=f,e.p=Ce,e.b=d,e.f=h,f&&(h=1,e.m=x,e.d=v,e.n=m)}while(!h);return d!=t.length&&o?EM(t,0,d):t.subarray(0,d)},wM=new dn(0),AM=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&vn(6,"invalid zlib data"),(i[1]>>5&1)==1&&vn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Xr(i,e){return bM(i.subarray(AM(i),-4),{i:2},e,e)}var RM=typeof TextDecoder<"u"&&new TextDecoder,CM=0;try{RM.decode(wM,{stream:!0}),CM=1}catch{}class PM extends $u{constructor(e){super(e),this.type=At}parse(e){const b=Math.pow(2.7182818,2.2);function S(g,w){let U=0;for(let A=0;A<65536;++A)(A==0||g[A>>3]&1<<(A&7))&&(w[U++]=A);const _=U-1;for(;U<65536;)w[U++]=0;return _}function F(g){for(let w=0;w<16384;w++)g[w]={},g[w].len=0,g[w].lit=0,g[w].p=null}const q={l:0,c:0,lc:0};function X(g,w,U,_,A){for(;U<g;)w=w<<8|be(_,A),U+=8;U-=g,q.l=w>>U&(1<<g)-1,q.c=w,q.lc=U}const Y=new Array(59);function te(g){for(let U=0;U<=58;++U)Y[U]=0;for(let U=0;U<65537;++U)Y[g[U]]+=1;let w=0;for(let U=58;U>0;--U){const _=w+Y[U]>>1;Y[U]=w,w=_}for(let U=0;U<65537;++U){const _=g[U];_>0&&(g[U]=_|Y[_]++<<6)}}function j(g,w,U,_,A,R){const N=w;let D=0,H=0;for(;_<=A;_++){if(N.value-w.value>U)return!1;X(6,D,H,g,N);const G=q.l;if(D=q.c,H=q.lc,R[_]=G,G==63){if(N.value-w.value>U)throw new Error("Something wrong with hufUnpackEncTable");X(8,D,H,g,N);let W=q.l+6;if(D=q.c,H=q.lc,_+W>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)R[_++]=0;_--}else if(G>=59){let W=G-59+2;if(_+W>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;W--;)R[_++]=0;_--}}te(R)}function ce(g){return g&63}function J(g){return g>>6}function de(g,w,U,_){for(;w<=U;w++){const A=J(g[w]),R=ce(g[w]);if(A>>R)throw new Error("Invalid table entry");if(R>14){const N=_[A>>R-14];if(N.len)throw new Error("Invalid table entry");if(N.lit++,N.p){const D=N.p;N.p=new Array(N.lit);for(let H=0;H<N.lit-1;++H)N.p[H]=D[H]}else N.p=new Array(1);N.p[N.lit-1]=w}else if(R){let N=0;for(let D=1<<14-R;D>0;D--){const H=_[(A<<14-R)+N];if(H.len||H.p)throw new Error("Invalid table entry");H.len=R,H.lit=w,N++}}}return!0}const ge={c:0,lc:0};function Re(g,w,U,_){g=g<<8|be(U,_),w+=8,ge.c=g,ge.lc=w}const Ce={c:0,lc:0};function He(g,w,U,_,A,R,N,D,H){if(g==w){_<8&&(Re(U,_,A,R),U=ge.c,_=ge.lc),_-=8;let G=U>>_;if(G=new Uint8Array([G])[0],D.value+G>H)return!1;const W=N[D.value-1];for(;G-- >0;)N[D.value++]=W}else if(D.value<H)N[D.value++]=g;else return!1;Ce.c=U,Ce.lc=_}function ee(g){return g&65535}function fe(g){const w=ee(g);return w>32767?w-65536:w}const ue={a:0,b:0};function ve(g,w){const U=fe(g),A=fe(w),R=U+(A&1)+(A>>1),N=R,D=R-A;ue.a=N,ue.b=D}function me(g,w){const U=ee(g),_=ee(w),A=U-(_>>1)&65535,R=_+A-32768&65535;ue.a=R,ue.b=A}function Ie(g,w,U,_,A,R,N){const D=N<16384,H=U>A?A:U;let G=1,W,Z;for(;G<=H;)G<<=1;for(G>>=1,W=G,G>>=1;G>=1;){Z=0;const ie=Z+R*(A-W),se=R*G,ae=R*W,he=_*G,pe=_*W;let Pe,Ge,Fe,Ae;for(;Z<=ie;Z+=ae){let Ke=Z;const De=Z+_*(U-W);for(;Ke<=De;Ke+=pe){const lt=Ke+he,Ct=Ke+se,ot=Ct+he;D?(ve(g[Ke+w],g[Ct+w]),Pe=ue.a,Fe=ue.b,ve(g[lt+w],g[ot+w]),Ge=ue.a,Ae=ue.b,ve(Pe,Ge),g[Ke+w]=ue.a,g[lt+w]=ue.b,ve(Fe,Ae),g[Ct+w]=ue.a,g[ot+w]=ue.b):(me(g[Ke+w],g[Ct+w]),Pe=ue.a,Fe=ue.b,me(g[lt+w],g[ot+w]),Ge=ue.a,Ae=ue.b,me(Pe,Ge),g[Ke+w]=ue.a,g[lt+w]=ue.b,me(Fe,Ae),g[Ct+w]=ue.a,g[ot+w]=ue.b)}if(U&G){const lt=Ke+se;D?ve(g[Ke+w],g[lt+w]):me(g[Ke+w],g[lt+w]),Pe=ue.a,g[lt+w]=ue.b,g[Ke+w]=Pe}}if(A&G){let Ke=Z;const De=Z+_*(U-W);for(;Ke<=De;Ke+=pe){const lt=Ke+he;D?ve(g[Ke+w],g[lt+w]):me(g[Ke+w],g[lt+w]),Pe=ue.a,g[lt+w]=ue.b,g[Ke+w]=Pe}}W=G,G>>=1}return Z}function ke(g,w,U,_,A,R,N,D,H){let G=0,W=0;const Z=N,ie=Math.trunc(_.value+(A+7)/8);for(;_.value<ie;)for(Re(G,W,U,_),G=ge.c,W=ge.lc;W>=14;){const ae=G>>W-14&16383,he=w[ae];if(he.len)W-=he.len,He(he.lit,R,G,W,U,_,D,H,Z),G=Ce.c,W=Ce.lc;else{if(!he.p)throw new Error("hufDecode issues");let pe;for(pe=0;pe<he.lit;pe++){const Pe=ce(g[he.p[pe]]);for(;W<Pe&&_.value<ie;)Re(G,W,U,_),G=ge.c,W=ge.lc;if(W>=Pe&&J(g[he.p[pe]])==(G>>W-Pe&(1<<Pe)-1)){W-=Pe,He(he.p[pe],R,G,W,U,_,D,H,Z),G=Ce.c,W=Ce.lc;break}}if(pe==he.lit)throw new Error("hufDecode issues")}}const se=8-A&7;for(G>>=se,W-=se;W>0;){const ae=w[G<<14-W&16383];if(ae.len)W-=ae.len,He(ae.lit,R,G,W,U,_,D,H,Z),G=Ce.c,W=Ce.lc;else throw new Error("hufDecode issues")}return!0}function pt(g,w,U,_,A,R){const N={value:0},D=U.value,H=Ne(w,U),G=Ne(w,U);U.value+=4;const W=Ne(w,U);if(U.value+=4,H<0||H>=65537||G<0||G>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Z=new Array(65537),ie=new Array(16384);F(ie);const se=_-(U.value-D);if(j(g,U,se,H,G,Z),W>8*(_-(U.value-D)))throw new Error("Something wrong with hufUncompress");de(Z,H,G,ie),ke(Z,ie,g,U,W,G,R,A,N)}function mt(g,w,U){for(let _=0;_<U;++_)w[_]=g[w[_]]}function Je(g){for(let w=1;w<g.length;w++){const U=g[w-1]+g[w]-128;g[w]=U}}function k(g,w){let U=0,_=Math.floor((g.length+1)/2),A=0;const R=g.length-1;for(;!(A>R||(w[A++]=g[U++],A>R));)w[A++]=g[_++]}function Kt(g){let w=g.byteLength;const U=new Array;let _=0;const A=new DataView(g);for(;w>0;){const R=A.getInt8(_++);if(R<0){const N=-R;w-=N+1;for(let D=0;D<N;D++)U.push(A.getUint8(_++))}else{const N=R;w-=2;const D=A.getUint8(_++);for(let H=0;H<N+1;H++)U.push(D)}}return U}function tt(g,w,U,_,A,R){let N=new DataView(R.buffer);const D=U[g.idx[0]].width,H=U[g.idx[0]].height,G=3,W=Math.floor(D/8),Z=Math.ceil(D/8),ie=Math.ceil(H/8),se=D-(Z-1)*8,ae=H-(ie-1)*8,he={value:0},pe=new Array(G),Pe=new Array(G),Ge=new Array(G),Fe=new Array(G),Ae=new Array(G);for(let De=0;De<G;++De)Ae[De]=w[g.idx[De]],pe[De]=De<1?0:pe[De-1]+Z*ie,Pe[De]=new Float32Array(64),Ge[De]=new Uint16Array(64),Fe[De]=new Uint16Array(Z*64);for(let De=0;De<ie;++De){let lt=8;De==ie-1&&(lt=ae);let Ct=8;for(let rt=0;rt<Z;++rt){rt==Z-1&&(Ct=se);for(let We=0;We<G;++We)Ge[We].fill(0),Ge[We][0]=A[pe[We]++],nt(he,_,Ge[We]),Be(Ge[We],Pe[We]),_t(Pe[We]);Oe(Pe);for(let We=0;We<G;++We)P(Pe[We],Fe[We],rt*64)}let ot=0;for(let rt=0;rt<G;++rt){const We=U[g.idx[rt]].type;for(let St=8*De;St<8*De+lt;++St){ot=Ae[rt][St];for(let Ot=0;Ot<W;++Ot){const vt=Ot*64+(St&7)*8;N.setUint16(ot+0*2*We,Fe[rt][vt+0],!0),N.setUint16(ot+1*2*We,Fe[rt][vt+1],!0),N.setUint16(ot+2*2*We,Fe[rt][vt+2],!0),N.setUint16(ot+3*2*We,Fe[rt][vt+3],!0),N.setUint16(ot+4*2*We,Fe[rt][vt+4],!0),N.setUint16(ot+5*2*We,Fe[rt][vt+5],!0),N.setUint16(ot+6*2*We,Fe[rt][vt+6],!0),N.setUint16(ot+7*2*We,Fe[rt][vt+7],!0),ot+=8*2*We}}if(W!=Z)for(let St=8*De;St<8*De+lt;++St){const Ot=Ae[rt][St]+8*W*2*We,vt=W*64+(St&7)*8;for(let Pt=0;Pt<Ct;++Pt)N.setUint16(Ot+Pt*2*We,Fe[rt][vt+Pt],!0)}}}const Ke=new Uint16Array(D);N=new DataView(R.buffer);for(let De=0;De<G;++De){U[g.idx[De]].decoded=!0;const lt=U[g.idx[De]].type;if(U[De].type==2)for(let Ct=0;Ct<H;++Ct){const ot=Ae[De][Ct];for(let rt=0;rt<D;++rt)Ke[rt]=N.getUint16(ot+rt*2*lt,!0);for(let rt=0;rt<D;++rt)N.setFloat32(ot+rt*2*lt,$(Ke[rt]),!0)}}}function nt(g,w,U){let _,A=1;for(;A<64;)_=w[g.value],_==65280?A=64:_>>8==255?A+=_&255:(U[A]=_,A++),g.value++}function Be(g,w){w[0]=$(g[0]),w[1]=$(g[1]),w[2]=$(g[5]),w[3]=$(g[6]),w[4]=$(g[14]),w[5]=$(g[15]),w[6]=$(g[27]),w[7]=$(g[28]),w[8]=$(g[2]),w[9]=$(g[4]),w[10]=$(g[7]),w[11]=$(g[13]),w[12]=$(g[16]),w[13]=$(g[26]),w[14]=$(g[29]),w[15]=$(g[42]),w[16]=$(g[3]),w[17]=$(g[8]),w[18]=$(g[12]),w[19]=$(g[17]),w[20]=$(g[25]),w[21]=$(g[30]),w[22]=$(g[41]),w[23]=$(g[43]),w[24]=$(g[9]),w[25]=$(g[11]),w[26]=$(g[18]),w[27]=$(g[24]),w[28]=$(g[31]),w[29]=$(g[40]),w[30]=$(g[44]),w[31]=$(g[53]),w[32]=$(g[10]),w[33]=$(g[19]),w[34]=$(g[23]),w[35]=$(g[32]),w[36]=$(g[39]),w[37]=$(g[45]),w[38]=$(g[52]),w[39]=$(g[54]),w[40]=$(g[20]),w[41]=$(g[22]),w[42]=$(g[33]),w[43]=$(g[38]),w[44]=$(g[46]),w[45]=$(g[51]),w[46]=$(g[55]),w[47]=$(g[60]),w[48]=$(g[21]),w[49]=$(g[34]),w[50]=$(g[37]),w[51]=$(g[47]),w[52]=$(g[50]),w[53]=$(g[56]),w[54]=$(g[59]),w[55]=$(g[61]),w[56]=$(g[35]),w[57]=$(g[36]),w[58]=$(g[48]),w[59]=$(g[49]),w[60]=$(g[57]),w[61]=$(g[58]),w[62]=$(g[62]),w[63]=$(g[63])}function _t(g){const w=.5*Math.cos(.7853975),U=.5*Math.cos(3.14159/16),_=.5*Math.cos(3.14159/8),A=.5*Math.cos(3*3.14159/16),R=.5*Math.cos(5*3.14159/16),N=.5*Math.cos(3*3.14159/8),D=.5*Math.cos(7*3.14159/16),H=new Array(4),G=new Array(4),W=new Array(4),Z=new Array(4);for(let ie=0;ie<8;++ie){const se=ie*8;H[0]=_*g[se+2],H[1]=N*g[se+2],H[2]=_*g[se+6],H[3]=N*g[se+6],G[0]=U*g[se+1]+A*g[se+3]+R*g[se+5]+D*g[se+7],G[1]=A*g[se+1]-D*g[se+3]-U*g[se+5]-R*g[se+7],G[2]=R*g[se+1]-U*g[se+3]+D*g[se+5]+A*g[se+7],G[3]=D*g[se+1]-R*g[se+3]+A*g[se+5]-U*g[se+7],W[0]=w*(g[se+0]+g[se+4]),W[3]=w*(g[se+0]-g[se+4]),W[1]=H[0]+H[3],W[2]=H[1]-H[2],Z[0]=W[0]+W[1],Z[1]=W[3]+W[2],Z[2]=W[3]-W[2],Z[3]=W[0]-W[1],g[se+0]=Z[0]+G[0],g[se+1]=Z[1]+G[1],g[se+2]=Z[2]+G[2],g[se+3]=Z[3]+G[3],g[se+4]=Z[3]-G[3],g[se+5]=Z[2]-G[2],g[se+6]=Z[1]-G[1],g[se+7]=Z[0]-G[0]}for(let ie=0;ie<8;++ie)H[0]=_*g[16+ie],H[1]=N*g[16+ie],H[2]=_*g[48+ie],H[3]=N*g[48+ie],G[0]=U*g[8+ie]+A*g[24+ie]+R*g[40+ie]+D*g[56+ie],G[1]=A*g[8+ie]-D*g[24+ie]-U*g[40+ie]-R*g[56+ie],G[2]=R*g[8+ie]-U*g[24+ie]+D*g[40+ie]+A*g[56+ie],G[3]=D*g[8+ie]-R*g[24+ie]+A*g[40+ie]-U*g[56+ie],W[0]=w*(g[ie]+g[32+ie]),W[3]=w*(g[ie]-g[32+ie]),W[1]=H[0]+H[3],W[2]=H[1]-H[2],Z[0]=W[0]+W[1],Z[1]=W[3]+W[2],Z[2]=W[3]-W[2],Z[3]=W[0]-W[1],g[0+ie]=Z[0]+G[0],g[8+ie]=Z[1]+G[1],g[16+ie]=Z[2]+G[2],g[24+ie]=Z[3]+G[3],g[32+ie]=Z[3]-G[3],g[40+ie]=Z[2]-G[2],g[48+ie]=Z[1]-G[1],g[56+ie]=Z[0]-G[0]}function Oe(g){for(let w=0;w<64;++w){const U=g[0][w],_=g[1][w],A=g[2][w];g[0][w]=U+1.5747*A,g[1][w]=U-.1873*_-.4682*A,g[2][w]=U+1.8556*_}}function P(g,w,U){for(let _=0;_<64;++_)w[U+_]=rs.toHalfFloat(E(g[_]))}function E(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(b,Math.abs(g)-1)}function K(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function re(g){const w=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),U=new Uint8Array(Kt(w)),_=new Uint8Array(U.length);return Je(U),k(U,_),new DataView(_.buffer)}function le(g){const w=g.array.slice(g.offset.value,g.offset.value+g.size),U=Xr(w),_=new Uint8Array(U.length);return Je(U),k(U,_),new DataView(_.buffer)}function ne(g){const w=g.viewer,U={value:g.offset.value},_=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),A=new Uint8Array(8192);let R=0;const N=new Array(g.inputChannels.length);for(let ae=0,he=g.inputChannels.length;ae<he;ae++)N[ae]={},N[ae].start=R,N[ae].end=N[ae].start,N[ae].nx=g.columns,N[ae].ny=g.lines,N[ae].size=g.type,R+=N[ae].nx*N[ae].ny*N[ae].size;const D=Q(w,U),H=Q(w,U);if(H>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(D<=H)for(let ae=0;ae<H-D+1;ae++)A[ae+D]=Ye(w,U);const G=new Uint16Array(65536),W=S(A,G),Z=Ne(w,U);pt(g.array,w,U,Z,_,R);for(let ae=0;ae<g.inputChannels.length;++ae){const he=N[ae];for(let pe=0;pe<N[ae].size;++pe)Ie(_,he.start+pe,he.nx,he.size,he.ny,he.nx*he.size,W)}mt(G,_,R);let ie=0;const se=new Uint8Array(_.buffer.byteLength);for(let ae=0;ae<g.lines;ae++)for(let he=0;he<g.inputChannels.length;he++){const pe=N[he],Pe=pe.nx*pe.size,Ge=new Uint8Array(_.buffer,pe.end*2,Pe*2);se.set(Ge,ie),ie+=Pe*2,pe.end+=Pe}return new DataView(se.buffer)}function Ue(g){const w=g.array.slice(g.offset.value,g.offset.value+g.size),U=Xr(w),_=g.inputChannels.length*g.lines*g.columns*g.totalBytes,A=new ArrayBuffer(_),R=new DataView(A);let N=0,D=0;const H=new Array(4);for(let G=0;G<g.lines;G++)for(let W=0;W<g.inputChannels.length;W++){let Z=0;switch(g.inputChannels[W].pixelType){case 1:H[0]=N,H[1]=H[0]+g.columns,N=H[1]+g.columns;for(let se=0;se<g.columns;++se){const ae=U[H[0]++]<<8|U[H[1]++];Z+=ae,R.setUint16(D,Z,!0),D+=2}break;case 2:H[0]=N,H[1]=H[0]+g.columns,H[2]=H[1]+g.columns,N=H[2]+g.columns;for(let se=0;se<g.columns;++se){const ae=U[H[0]++]<<24|U[H[1]++]<<16|U[H[2]++]<<8;Z+=ae,R.setUint32(D,Z,!0),D+=4}break}}return R}function ye(g){const w=g.viewer,U={value:g.offset.value},_=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),A={version:ze(w,U),unknownUncompressedSize:ze(w,U),unknownCompressedSize:ze(w,U),acCompressedSize:ze(w,U),dcCompressedSize:ze(w,U),rleCompressedSize:ze(w,U),rleUncompressedSize:ze(w,U),rleRawSize:ze(w,U),totalAcUncompressedCount:ze(w,U),totalDcUncompressedCount:ze(w,U),acCompression:ze(w,U)};if(A.version<2)throw new Error("EXRLoader.parse: "+Bn.compression+" version "+A.version+" is unsupported");const R=new Array;let N=Q(w,U)-2;for(;N>0;){const he=Te(w.buffer,U),pe=Ye(w,U),Pe=pe>>2&3,Ge=(pe>>4)-1,Fe=new Int8Array([Ge])[0],Ae=Ye(w,U);R.push({name:he,index:Fe,type:Ae,compression:Pe}),N-=he.length+3}const D=Bn.channels,H=new Array(g.inputChannels.length);for(let he=0;he<g.inputChannels.length;++he){const pe=H[he]={},Pe=D[he];pe.name=Pe.name,pe.compression=0,pe.decoded=!1,pe.type=Pe.pixelType,pe.pLinear=Pe.pLinear,pe.width=g.columns,pe.height=g.lines}const G={idx:new Array(3)};for(let he=0;he<g.inputChannels.length;++he){const pe=H[he];for(let Pe=0;Pe<R.length;++Pe){const Ge=R[Pe];pe.name==Ge.name&&(pe.compression=Ge.compression,Ge.index>=0&&(G.idx[Ge.index]=he),pe.offset=he)}}let W,Z,ie;if(A.acCompressedSize>0)switch(A.acCompression){case 0:W=new Uint16Array(A.totalAcUncompressedCount),pt(g.array,w,U,A.acCompressedSize,W,A.totalAcUncompressedCount);break;case 1:const he=g.array.slice(U.value,U.value+A.totalAcUncompressedCount),pe=Xr(he);W=new Uint16Array(pe.buffer),U.value+=A.totalAcUncompressedCount;break}if(A.dcCompressedSize>0){const he={array:g.array,offset:U,size:A.dcCompressedSize};Z=new Uint16Array(le(he).buffer),U.value+=A.dcCompressedSize}if(A.rleRawSize>0){const he=g.array.slice(U.value,U.value+A.rleCompressedSize),pe=Xr(he);ie=Kt(pe.buffer),U.value+=A.rleCompressedSize}let se=0;const ae=new Array(H.length);for(let he=0;he<ae.length;++he)ae[he]=new Array;for(let he=0;he<g.lines;++he)for(let pe=0;pe<H.length;++pe)ae[pe].push(se),se+=H[pe].width*g.type*2;tt(G,ae,H,W,Z,_);for(let he=0;he<H.length;++he){const pe=H[he];if(!pe.decoded)switch(pe.compression){case 2:let Pe=0,Ge=0;for(let Fe=0;Fe<g.lines;++Fe){let Ae=ae[he][Pe];for(let Ke=0;Ke<pe.width;++Ke){for(let De=0;De<2*pe.type;++De)_[Ae++]=ie[Ge+De*pe.width*pe.height];Ge++}Pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(_.buffer)}function Te(g,w){const U=new Uint8Array(g);let _=0;for(;U[w.value+_]!=0;)_+=1;const A=new TextDecoder().decode(U.slice(w.value,w.value+_));return w.value=w.value+_+1,A}function st(g,w,U){const _=new TextDecoder().decode(new Uint8Array(g).slice(w.value,w.value+U));return w.value=w.value+U,_}function _e(g,w){const U=Le(g,w),_=Ne(g,w);return[U,_]}function we(g,w){const U=Ne(g,w),_=Ne(g,w);return[U,_]}function Le(g,w){const U=g.getInt32(w.value,!0);return w.value=w.value+4,U}function Ne(g,w){const U=g.getUint32(w.value,!0);return w.value=w.value+4,U}function be(g,w){const U=g[w.value];return w.value=w.value+1,U}function Ye(g,w){const U=g.getUint8(w.value);return w.value=w.value+1,U}const ze=function(g,w){let U;return"getBigInt64"in DataView.prototype?U=Number(g.getBigInt64(w.value,!0)):U=g.getUint32(w.value+4,!0)+Number(g.getUint32(w.value,!0)<<32),w.value+=8,U};function qe(g,w){const U=g.getFloat32(w.value,!0);return w.value+=4,U}function V(g,w){return rs.toHalfFloat(qe(g,w))}function $(g){const w=(g&31744)>>10,U=g&1023;return(g>>15?-1:1)*(w?w===31?U?NaN:1/0:Math.pow(2,w-15)*(1+U/1024):6103515625e-14*(U/1024))}function Q(g,w){const U=g.getUint16(w.value,!0);return w.value+=2,U}function oe(g,w){return $(Q(g,w))}function Se(g,w,U,_){const A=U.value,R=[];for(;U.value<A+_-1;){const N=Te(w,U),D=Le(g,U),H=Ye(g,U);U.value+=3;const G=Le(g,U),W=Le(g,U);R.push({name:N,pixelType:D,pLinear:H,xSampling:G,ySampling:W})}return U.value+=1,R}function Me(g,w){const U=qe(g,w),_=qe(g,w),A=qe(g,w),R=qe(g,w),N=qe(g,w),D=qe(g,w),H=qe(g,w),G=qe(g,w);return{redX:U,redY:_,greenX:A,greenY:R,blueX:N,blueY:D,whiteX:H,whiteY:G}}function je(g,w){const U=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],_=Ye(g,w);return U[_]}function yt(g,w){const U=Le(g,w),_=Le(g,w),A=Le(g,w),R=Le(g,w);return{xMin:U,yMin:_,xMax:A,yMax:R}}function Nt(g,w){const U=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],_=Ye(g,w);return U[_]}function at(g,w){const U=["ENVMAP_LATLONG","ENVMAP_CUBE"],_=Ye(g,w);return U[_]}function rn(g,w){const U=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],_=["ROUND_DOWN","ROUND_UP"],A=Ne(g,w),R=Ne(g,w),N=Ye(g,w);return{xSize:A,ySize:R,levelMode:U[N&15],roundingMode:_[N>>4]}}function fn(g,w){const U=qe(g,w),_=qe(g,w);return[U,_]}function ur(g,w){const U=qe(g,w),_=qe(g,w),A=qe(g,w);return[U,_,A]}function dr(g,w,U,_,A){if(_==="string"||_==="stringvector"||_==="iccProfile")return st(w,U,A);if(_==="chlist")return Se(g,w,U,A);if(_==="chromaticities")return Me(g,U);if(_==="compression")return je(g,U);if(_==="box2i")return yt(g,U);if(_==="envmap")return at(g,U);if(_==="tiledesc")return rn(g,U);if(_==="lineOrder")return Nt(g,U);if(_==="float")return qe(g,U);if(_==="v2f")return fn(g,U);if(_==="v3f")return ur(g,U);if(_==="int")return Le(g,U);if(_==="rational")return _e(g,U);if(_==="timecode")return we(g,U);if(_==="preview")return U.value+=A,"skipped";U.value+=A}function Fn(g,w){const U=Math.log2(g);return w=="ROUND_DOWN"?Math.floor(U):Math.ceil(U)}function Is(g,w,U){let _=0;switch(g.levelMode){case"ONE_LEVEL":_=1;break;case"MIPMAP_LEVELS":_=Fn(Math.max(w,U),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return _}function Us(g,w,U,_){const A=new Array(g);for(let R=0;R<g;R++){const N=1<<R;let D=w/N|0;_=="ROUND_UP"&&D*N<w&&(D+=1);const H=Math.max(D,1);A[R]=(H+U-1)/U|0}return A}function fr(){const g=this,w=g.offset,U={value:0};for(let _=0;_<g.tileCount;_++){const A=Le(g.viewer,w),R=Le(g.viewer,w);w.value+=8,g.size=Ne(g.viewer,w);const N=A*g.blockWidth,D=R*g.blockHeight;g.columns=N+g.blockWidth>g.width?g.width-N:g.blockWidth,g.lines=D+g.blockHeight>g.height?g.height-D:g.blockHeight;const H=g.columns*g.totalBytes,W=g.size<g.lines*H?g.uncompress(g):K(g);w.value+=g.size;for(let Z=0;Z<g.lines;Z++){const ie=Z*g.columns*g.totalBytes;for(let se=0;se<g.inputChannels.length;se++){const ae=Bn.channels[se].name,he=g.channelByteOffsets[ae]*g.columns,pe=g.decodeChannels[ae];if(pe===void 0)continue;U.value=ie+he;const Pe=(g.height-(1+D+Z))*g.outLineWidth;for(let Ge=0;Ge<g.columns;Ge++){const Fe=Pe+(Ge+N)*g.outputChannels+pe;g.byteArray[Fe]=g.getter(W,U)}}}}}function ki(){const g=this,w=g.offset,U={value:0};for(let _=0;_<g.height/g.blockHeight;_++){const A=Le(g.viewer,w)-Bn.dataWindow.yMin;g.size=Ne(g.viewer,w),g.lines=A+g.blockHeight>g.height?g.height-A:g.blockHeight;const R=g.columns*g.totalBytes,D=g.size<g.lines*R?g.uncompress(g):K(g);w.value+=g.size;for(let H=0;H<g.blockHeight;H++){const G=_*g.blockHeight,W=H+g.scanOrder(G);if(W>=g.height)continue;const Z=H*R,ie=(g.height-1-W)*g.outLineWidth;for(let se=0;se<g.inputChannels.length;se++){const ae=Bn.channels[se].name,he=g.channelByteOffsets[ae]*g.columns,pe=g.decodeChannels[ae];if(pe!==void 0){U.value=Z+he;for(let Pe=0;Pe<g.columns;Pe++){const Ge=ie+Pe*g.outputChannels+pe;g.byteArray[Ge]=g.getter(D,U)}}}}}}function pr(g,w,U){const _={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");_.version=g.getUint8(4);const A=g.getUint8(5);_.spec={singleTile:!!(A&2),longName:!!(A&4),deepFormat:!!(A&8),multiPart:!!(A&16)},U.value=8;let R=!0;for(;R;){const N=Te(w,U);if(N==0)R=!1;else{const D=Te(w,U),H=Ne(g,U),G=dr(g,w,U,D,H);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${D}'.`):_[N]=G}}if(A&-7)throw console.error("THREE.EXRHeader:",_),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return _}function zi(g,w,U,_,A){const R={size:0,viewer:w,array:U,offset:_,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Lt};switch(g.compression){case"NO_COMPRESSION":R.blockHeight=1,R.uncompress=K;break;case"RLE_COMPRESSION":R.blockHeight=1,R.uncompress=re;break;case"ZIPS_COMPRESSION":R.blockHeight=1,R.uncompress=le;break;case"ZIP_COMPRESSION":R.blockHeight=16,R.uncompress=le;break;case"PIZ_COMPRESSION":R.blockHeight=32,R.uncompress=ne;break;case"PXR24_COMPRESSION":R.blockHeight=16,R.uncompress=Ue;break;case"DWAA_COMPRESSION":R.blockHeight=32,R.uncompress=ye;break;case"DWAB_COMPRESSION":R.blockHeight=256,R.uncompress=ye;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}const N={};for(const W of g.channels)switch(W.name){case"Y":case"R":case"G":case"B":case"A":N[W.name]=!0,R.type=W.pixelType}let D=!1;if(N.R&&N.G&&N.B)D=!N.A,R.outputChannels=4,R.decodeChannels={R:0,G:1,B:2,A:3};else if(N.Y)R.outputChannels=1,R.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(R.type==1)switch(A){case kt:R.getter=oe;break;case At:R.getter=Q;break}else if(R.type==2)switch(A){case kt:R.getter=qe;break;case At:R.getter=V}else throw new Error("EXRLoader.parse: unsupported pixelType "+R.type+" for "+g.compression+".");R.columns=R.width;const H=R.width*R.height*R.outputChannels;switch(A){case kt:R.byteArray=new Float32Array(H),D&&R.byteArray.fill(1,0,H);break;case At:R.byteArray=new Uint16Array(H),D&&R.byteArray.fill(15360,0,H);break;default:console.error("THREE.EXRLoader: unsupported type: ",A);break}let G=0;for(const W of g.channels)R.decodeChannels[W.name]!==void 0&&(R.channelByteOffsets[W.name]=G),G+=W.pixelType*2;if(R.totalBytes=G,R.outLineWidth=R.width*R.outputChannels,g.lineOrder==="INCREASING_Y"?R.scanOrder=W=>W:R.scanOrder=W=>R.height-1-W,R.outputChannels==4?(R.format=nn,R.colorSpace=Lt):(R.format=So,R.colorSpace=Kn),g.spec.singleTile){R.blockHeight=g.tiles.ySize,R.blockWidth=g.tiles.xSize;const W=Is(g.tiles,R.width,R.height),Z=Us(W,R.width,g.tiles.xSize,g.tiles.roundingMode),ie=Us(W,R.height,g.tiles.ySize,g.tiles.roundingMode);R.tileCount=Z[0]*ie[0];for(let se=0;se<W;se++)for(let ae=0;ae<ie[se];ae++)for(let he=0;he<Z[se];he++)ze(w,_);R.decode=fr.bind(R)}else{R.blockWidth=R.width;const W=Math.ceil(R.height/R.blockHeight);for(let Z=0;Z<W;Z++)ze(w,_);R.decode=ki.bind(R)}return R}const Ns={value:0},Os=new DataView(e),Do=new Uint8Array(e),Bn=pr(Os,e,Ns),ii=zi(Bn,Os,Do,Ns,this.type);return ii.decode(),{header:Bn,width:ii.width,height:ii.height,data:ii.byteArray,format:ii.format,colorSpace:ii.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Rt,o.magFilter=Rt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}}function jh(i,e){if(e===_f)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ul||e===Cu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ul)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Id extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new KM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Js.extractUrlBase(e);o=Js.resolveURL(c,this.path)}else o=Js.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ud){try{o[et.KHR_BINARY_GLTF]=new $M(e)}catch(u){s&&s(u);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new cS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case et.KHR_MATERIALS_UNLIT:o[u]=new IM;break;case et.KHR_DRACO_MESH_COMPRESSION:o[u]=new ZM(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[u]=new JM;break;case et.KHR_MESH_QUANTIZATION:o[u]=new QM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function DM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LM{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Lt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new is(h),c.distance=u;break;case"spot":c=new Yp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class IM{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Lt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}}class UM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class NM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(r)}}class OM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class FM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class BM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Lt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class kM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class zM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Lt),Promise.all(r)}}class HM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class VM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Lt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}}class GM{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class XM{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class YM{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qM{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jM{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class KM{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const v of u){const x=new Xe,m=new B,p=new Ht,T=new B(1,1,1),y=new Tp(v.geometry,v.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&T.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,x.compose(m,p,T));for(const M in l)if(M==="_COLOR_0"){const L=l[M];y.instanceColor=new fl(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&v.geometry.setAttribute(M,l[M]);Mt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ud="glTF",Ys=12,Kh={JSON:1313821514,BIN:5130562};class $M{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ud)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ys,r=new DataView(e,Ys);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Kh.JSON){const c=new Uint8Array(e,Ys+o,a);this.content=n.decode(c)}else if(l===Kh.BIN){const c=Ys+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ZM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=bl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=bl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const v in f.attributes){const x=f.attributes[v],m=l[v];m!==void 0&&(x.normalized=m)}u(f)},a,c,Lt,d)})})}}class JM{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QM{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Nd extends cr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,v=e*c,x=v-c,m=-2*f+3*d,p=f-d,T=1-m,y=p-d+u;for(let M=0;M!==a;M++){const L=o[x+M+a],C=o[x+M+l]*h,O=o[v+M+a],I=o[v+M]*h;r[M]=T*L+y*C+m*O+p*I}return r}}const eS=new Ht;class tS extends Nd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return eS.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$h={9728:zt,9729:Rt,9984:xu,9985:qr,9986:qs,9987:Cn},Zh={33071:Rn,33648:no,10497:xi},Ma={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nS={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},Sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new wo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),i.DefaultMaterial}function Ci(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function rS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oS(i){let e;const t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ea(t.attributes):e=i.indices+":"+Ea(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ea(i.targets[n]);return e}function Ea(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lS=new Xe;class cS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new jl(this.options.manager):this.textureLoader=new Kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ci(r,a,s),jn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Js.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ma[s.type],a=fs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ma[s.type],c=fs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(T);y||(x=new c(a,p*f,s.count*f/h),y=new xp(x,f/h),t.cache.add(T,y)),m=new Hl(y,l,d%f/h,v)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Vt(x,l,v);if(s.sparse!==void 0){const p=Ma.SCALAR,T=fs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,L=new T(o[1],y,s.sparse.count*p),C=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let O=0,I=L.length;O<I;O++){const b=L[O];if(m.setX(b,C[O*l]),l>=2&&m.setY(b,C[O*l+1]),l>=3&&m.setZ(b,C[O*l+2]),l>=4&&m.setW(b,C[O*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=v}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=$h[d.magFilter]||Rt,h.minFilter=$h[d.minFilter]||Cn,h.wrapS=Zh[d.wrapS]||xi,h.wrapT=Zh[d.wrapT]||xi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Rt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const m=new Bt(x);m.needsUpdate=!0,d(m)}),t.load(Js.resolveURL(u,r.path),v,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),jn(u,o),u.userData.mimeType=o.mimeType||aS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xu,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wu,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return wo}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const u=s[et.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Lt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=un);const h=r.alphaMode||Sa.OPAQUE;if(h===Sa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Sa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Jn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jn){const u=r.emissiveFactor;a.emissive=new Ve().setRGB(u[0],u[1],u[2],Lt)}return r.emissiveTexture!==void 0&&o!==Jn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ci(s,u,r),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=oS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Jh(new sn,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?iS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,v=h.length;f<v;f++){const x=h[f],m=o[f];let p;const T=c[f];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Mp(x,T):new jt(x,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=jh(p.geometry,Cu):m.mode===hn.TRIANGLE_FAN&&(p.geometry=jh(p.geometry,ul));else if(m.mode===hn.LINES)p=new Ap(x,T);else if(m.mode===hn.LINE_STRIP)p=new Wl(x,T);else if(m.mode===hn.LINE_LOOP)p=new Rp(x,T);else if(m.mode===hn.POINTS)p=new Cp(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&rS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),jn(p,r),m.extensions&&Ci(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,v=u.length;f<v;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ci(s,u[0],r),u[0];const d=new mi;r.extensions&&Ci(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,v=u.length;f<v;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Iu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ao(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vl(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],v=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[v.input]:v.input,T=s.parameters!==void 0?s.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(v),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],v=u[2],x=u[3],m=u[4],p=[];for(let T=0,y=d.length;T<y;T++){const M=d[T],L=f[T],C=v[T],O=x[T],I=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const b=n._createAnimationTracks(M,L,C,O,I);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new Bp(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lS)});for(let f=0,v=u.length;f<v;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Gu:c.length>1?h=new mi:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),jn(h,r),r.extensions&&Ci(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new mi;n.name&&(r.name=s.createUniqueName(n.name)),jn(r,n),n.extensions&&Ci(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Dn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ui[r.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ui[r.path]){case ui.weights:c=Ms;break;case ui.rotation:c=Ss;break;case ui.position:case ui.scale:c=Es;break;default:switch(n.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=Es;break}break}const h=s.interpolation!==void 0?nS[s.interpolation]:sr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new c(l[d]+"."+ui[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ss?tS:Nd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hS(i,e,t){const n=e.attributes,s=new ni;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const h=wl(fs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const x=wl(fs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Jh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=bl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return it.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),jn(i,e),hS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sS(i,e.targets,t):i})}class Od extends $u{constructor(e){super(e),this.type=At}parse(e){const o=function(I,b){switch(I){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(b||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(b||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(b||""))}},h=`
`,u=function(I,b,S){b=b||1024;let q=I.pos,X=-1,Y=0,te="",j=String.fromCharCode.apply(null,new Uint16Array(I.subarray(q,q+128)));for(;0>(X=j.indexOf(h))&&Y<b&&q<I.byteLength;)te+=j,Y+=j.length,q+=128,j+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(q,q+128)));return-1<X?(I.pos+=Y+X+1,te+j.slice(0,X)):!1},d=function(I){const b=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,q=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,Y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let te,j;for((I.pos>=I.byteLength||!(te=u(I)))&&o(1,"no header found"),(j=te.match(b))||o(3,"bad initial token"),Y.valid|=1,Y.programtype=j[1],Y.string+=te+`
`;te=u(I),te!==!1;){if(Y.string+=te+`
`,te.charAt(0)==="#"){Y.comments+=te+`
`;continue}if((j=te.match(S))&&(Y.gamma=parseFloat(j[1])),(j=te.match(F))&&(Y.exposure=parseFloat(j[1])),(j=te.match(q))&&(Y.valid|=2,Y.format=j[1]),(j=te.match(X))&&(Y.valid|=4,Y.height=parseInt(j[1],10),Y.width=parseInt(j[2],10)),Y.valid&2&&Y.valid&4)break}return Y.valid&2||o(3,"missing format specifier"),Y.valid&4||o(3,"missing image size specifier"),Y},f=function(I,b,S){const F=b;if(F<8||F>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);F!==(I[2]<<8|I[3])&&o(3,"wrong scanline width");const q=new Uint8Array(4*b*S);q.length||o(4,"unable to allocate buffer space");let X=0,Y=0;const te=4*F,j=new Uint8Array(4),ce=new Uint8Array(te);let J=S;for(;J>0&&Y<I.byteLength;){Y+4>I.byteLength&&o(1),j[0]=I[Y++],j[1]=I[Y++],j[2]=I[Y++],j[3]=I[Y++],(j[0]!=2||j[1]!=2||(j[2]<<8|j[3])!=F)&&o(3,"bad rgbe scanline format");let de=0,ge;for(;de<te&&Y<I.byteLength;){ge=I[Y++];const Ce=ge>128;if(Ce&&(ge-=128),(ge===0||de+ge>te)&&o(3,"bad scanline data"),Ce){const He=I[Y++];for(let ee=0;ee<ge;ee++)ce[de++]=He}else ce.set(I.subarray(Y,Y+ge),de),de+=ge,Y+=ge}const Re=F;for(let Ce=0;Ce<Re;Ce++){let He=0;q[X]=ce[Ce+He],He+=F,q[X+1]=ce[Ce+He],He+=F,q[X+2]=ce[Ce+He],He+=F,q[X+3]=ce[Ce+He],X+=4}J--}return q},v=function(I,b,S,F){const q=I[b+3],X=Math.pow(2,q-128)/255;S[F+0]=I[b+0]*X,S[F+1]=I[b+1]*X,S[F+2]=I[b+2]*X,S[F+3]=1},x=function(I,b,S,F){const q=I[b+3],X=Math.pow(2,q-128)/255;S[F+0]=rs.toHalfFloat(Math.min(I[b+0]*X,65504)),S[F+1]=rs.toHalfFloat(Math.min(I[b+1]*X,65504)),S[F+2]=rs.toHalfFloat(Math.min(I[b+2]*X,65504)),S[F+3]=rs.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),T=p.width,y=p.height,M=f(m.subarray(m.pos),T,y);let L,C,O;switch(this.type){case kt:O=M.length/4;const I=new Float32Array(O*4);for(let S=0;S<O;S++)v(M,S*4,I,S*4);L=I,C=kt;break;case At:O=M.length/4;const b=new Uint16Array(O*4);for(let S=0;S<O;S++)x(M,S*4,b,S*4);L=b,C=At;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:y,data:L,header:p.string,gamma:p.gamma,exposure:p.exposure,type:C}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case kt:case At:o.colorSpace=Lt,o.minFilter=Rt,o.magFilter=Rt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}function Ta(i){let e,t;const n=new Promise((s,r)=>{e=()=>{s(i)},t=o=>{r(o)}});return Object.assign(i,{then:n.then.bind(n),catch:n.catch.bind(n),finally:n.finally.bind(n),resolve:e,reject:t}),i}const uS=["gltf","glb"];function dS(i){return uS.includes(i)}const fS=["png","jpg","jpeg","hdr","exr"];function pS(i){return fS.includes(i)}class mS{constructor(){z(this,"listeners",new Set)}add(e){return this.listeners.add(e),{destroy:()=>this.listeners.delete(e)}}call(...e){for(const t of this.listeners)t.apply(null,e)}}const pi=class pi{constructor({name:e}={}){z(this,"id",pi.nextId++);z(this,"name");z(this,"loaders",{gltf:new Id,texture:new jl,rgbeLoader:new Od,exrLoader:new PM});z(this,"path","");z(this,"_onAfterLoad",new mS);z(this,"textureCache",new Map);this.name=e??`UnifiedLoader-${this.id}`,pi.instances.push(this)}static current(){return this.instances[this.instances.length-1]??new pi}static get(e){return this.instances.find(t=>t.name===e)??new pi({name:e})}setPath(e){this.path=e}onAfterLoad(e){return this._onAfterLoad.add(e)}async loadGltf(e){return new Promise((t,n)=>{this.loaders.gltf.load(e,s=>{t(s),this._onAfterLoad.call()},void 0,n)})}async loadRgbe(e){const t=Ta(this.loaders.rgbeLoader.load(e,n=>{t.resolve(),this._onAfterLoad.call()},void 0,()=>{console.log(`Failed to load RGBE: ${e}`)}));return t}async loadExr(e){const t=Ta(this.loaders.exrLoader.load(e,n=>{t.resolve(),this._onAfterLoad.call()},void 0,()=>{console.log(`Failed to load EXR: ${e}`)}));return t}loadTexture(e,t){const n=new URL(this.path+e,window.location.href).href;if(this.textureCache.has(n)){const r=this.textureCache.get(n);return t==null||t(r),r}const s=Ta(this.loaders.texture.load(n,r=>{this.textureCache.set(n,s),t==null||t(r),s.resolve(),this._onAfterLoad.call()},void 0,()=>{console.log(`Failed to load texture: ${n}`)}));return s}async load(e){const t=e.split(".").pop();if(dS(t))return this.loadGltf(e);if(pS(t))return new Promise((s,r)=>{this.loaders.texture.load(e,o=>{s(o),this._onAfterLoad.call()},void 0,r)});throw new Error(`Unsupported extension: ${t}`)}};z(pi,"nextId",0),z(pi,"instances",[]);let Al=pi;var Ui;(function(i){i[i.Left=0]="Left",i[i.Middle=1]="Middle",i[i.Right=2]="Right"})(Ui||(Ui={}));class ba{constructor(){z(this,"buttons",0);z(this,"clientPosition",new Ee);z(this,"screenPosition",new Ee)}copy(e){return this.buttons=e.buttons,this.clientPosition.copy(e.clientPosition),this.screenPosition.copy(e.screenPosition),this}diff(e,t){return this.buttons=e.buttons^t.buttons,this.clientPosition.subVectors(e.clientPosition,t.clientPosition),this.screenPosition.subVectors(e.screenPosition,t.screenPosition),this}}class gS{constructor(){z(this,"state",new ba);z(this,"stateOld",new ba);z(this,"diffState",new ba);z(this,"downTimes",new Map);z(this,"upTimes",new Map);z(this,"event",new class{constructor(){z(this,"consumed",!1)}consume(){this.consumed=!0}reset(){this.consumed=!1}});z(this,"camera",null);z(this,"raycaster",new am)}get buttons(){return this.state.buttons}buttonDown(e=Ui.Left){return(this.state.buttons&1<<e)!==0}buttonDownOld(e=Ui.Left){return(this.stateOld.buttons&1<<e)!==0}buttonDownEnter(e=Ui.Left){return this.buttonDown(e)&&!this.buttonDownOld(e)}buttonDownExit(e=Ui.Left){return!this.buttonDown(e)&&this.buttonDownOld(e)}buttonTap(e=Ui.Left,t=.25){return this.buttonDownExit(e)===!1?!1:this.upTimes.get(e)-this.downTimes.get(e)<t}get clientPosition(){return this.state.clientPosition}get screenPosition(){return this.state.screenPosition}get ray(){return this.raycaster.ray}updatePosition(e,t,n){const{x:s,y:r}=t,o=(s-n.x)/n.width*2-1,a=(r-n.y)/n.height*-2+1;this.camera=e,this.clientPosition.set(s,r),this.screenPosition.set(o,a),this.raycaster.setFromCamera(this.screenPosition,e)}raycastScene(e){var s;const t=[];e.traverse(r=>{r.userData.ignorePointer!==!0&&((r.visible===!1||r.userData.helper===!0)&&r.userData.pointerArea!==!0||ky(r)&&this.raycaster.intersectObject(r,!1,t))}),t.sort((r,o)=>r.distance-o.distance);const[n]=t;if(n){const r=n.object.userData.onPointerTap??(n.object.userData.pointerArea&&((s=n.object.parent)==null?void 0:s.userData.onPointerTap));r&&this.buttonTap()&&r()}}update(e){this.diffState.diff(this.state,this.stateOld),this.raycastScene(e)}updateEnd(){this.stateOld.copy(this.state),this.event.reset()}initialize(e,t,n,s){const r=h=>{const u=e.getBoundingClientRect(),{clientX:d,clientY:f}=h;this.updatePosition(n,{x:d,y:f},u)},o=h=>{r(h)},a=h=>{r(h),this.state.buttons|=1<<h.button,this.downTimes.set(h.button,s.time)},l=h=>{this.state.buttons&=~(1<<h.button),this.upTimes.set(h.button,s.time)};return t.addEventListener("pointermove",o),t.addEventListener("pointerdown",a),t.addEventListener("pointerup",l),()=>{t.removeEventListener("pointermove",o),t.removeEventListener("pointerdown",a),t.removeEventListener("pointerup",l)}}}var Rl;(function(i){i.WebGL="webgl",i.WebGPU="webgpu"})(Rl||(Rl={}));const yo=class yo{constructor(){z(this,"type",Rl.WebGPU);z(this,"width",300);z(this,"height",150);z(this,"pixelRatio",1);z(this,"renderer",new Xv);z(this,"perspectiveCamera",new Yt);z(this,"orhtographicCamera",new Yt);z(this,"scene",new Fc);z(this,"gizmoScene",new Fc);z(this,"pointer",new gS);z(this,"skipRender",!1);z(this,"ticker",yi.get("three").set({minActiveDuration:8}));z(this,"pipeline",new eM(this.renderer,this.scene,this.gizmoScene,this.perspectiveCamera));z(this,"camera",this.perspectiveCamera);z(this,"internal",{size:new Ee,fullSize:new Ee,destroyables:[],orbitControls:null});z(this,"onTick",this.ticker.onTick.bind(this.ticker));z(this,"onDestroy",this.internal.destroyables.push.bind(this.internal.destroyables));z(this,"loader",Al.get("three"));z(this,"initialized",!1);z(this,"destroyed",!1);z(this,"destroy",()=>{if(this.destroyed){console.warn("ThreeWebglContext is already destroyed.");return}Object.defineProperty(this,"destroyed",{value:!0,writable:!1,configurable:!1,enumerable:!1}),yd(this.internal.destroyables),this.internal.destroyables=[],this.renderer.dispose()});z(this,"renderFrame",e=>{var r;const{scene:t,pipeline:n,pointer:s}=this;(r=this.internal.orbitControls)==null||r.update(e.deltaTime),s.update(t),t.traverse(o=>{"onTick"in o&&o.onTick(this.ticker,this)}),this.skipRender===!1&&n.render(e),s.updateEnd()});this.camera.position.set(0,1,10),this.camera.lookAt(0,0,0),yo.instances.push(this)}static current(){return this.instances[this.instances.length-1]}get aspect(){return this.width/this.height}get size(){return this.internal.size.set(this.width,this.height)}get fullSize(){return this.internal.fullSize.set(this.width*this.pixelRatio,this.height*this.pixelRatio)}setScene(e){this.scene=e}useOrbitControls({position:e=null,target:t=null,element:n=null}={}){var s;return(s=this.internal).orbitControls??(s.orbitControls=new qh(this.camera,this.renderer.domElement)),typeof n=="string"&&(n=document.querySelector(n)),n&&n!==this.internal.orbitControls.domElement&&(this.internal.orbitControls.dispose(),this.internal.orbitControls=new qh(this.camera,n)),e&&Mn(e,this.internal.orbitControls.object.position),t&&Mn(t,this.internal.orbitControls.target),this.internal.orbitControls.update(),this.internal.orbitControls}initialize(e,t=e){if(this.initialized)return console.warn("ThreeWebglContext is already initialized."),this;Object.defineProperty(this,"initialized",{value:!0,writable:!1,configurable:!1,enumerable:!1});const{onDestroy:n}=this;e.appendChild(this.renderer.domElement);const s=()=>{this.setSize({width:e.clientWidth,height:e.clientHeight,pixelRatio:window.devicePixelRatio})},r=new ResizeObserver(s);return r.observe(e),n(()=>{r.disconnect()}),s(),n(this.pointer.initialize(this.renderer.domElement,t,this.camera,this.ticker)),n(pM(this.ticker.requestActivation),this.ticker.onTick(this.renderFrame)),n(()=>{var o;(o=this.internal.orbitControls)==null||o.dispose()}),this}setSize(e){const{width:t,height:n,pixelRatio:s}={...this,...e};if(t===this.width&&n===this.height&&s===this.pixelRatio)return this;this.width=t,this.height=n,this.pixelRatio=s;const{renderer:r,perspectiveCamera:o,pipeline:a}=this;r.setSize(t,n),r.setPixelRatio(s),a.setSize(t,n,s);const l=t/n;return o.aspect=l,o.updateProjectionMatrix(),this}*findAll(e){const t=typeof e=="string"?s=>s.name===e:e instanceof RegExp?s=>e.test(s.name):e,n=[this.scene];for(;n.length>0;){const s=n.shift();t(s)&&(yield s),n.push(...s.children)}}find(e){for(const t of this.findAll(e))return t;return null}isPartOfScene(e){let t=e;for(;t;){if(t===this.scene)return!0;t=t.parent}return!1}};z(yo,"instances",[]);let Cl=yo;function _S(i){return i.replace(/#include <(.*)>/g,(e,t)=>{const n=Ze[t];if(!n)throw new Error(`Shader chunk "${t}" not found`);return n})}const vS=["common","uv_pars_vertex","displacementmap_pars_vertex","color_pars_vertex","fog_pars_vertex","normal_pars_vertex","morphtarget_pars_vertex","skinning_pars_vertex","shadowmap_pars_vertex","logdepthbuf_pars_vertex","clipping_planes_pars_vertex","uv_vertex","color_vertex","morphcolor_vertex","beginnormal_vertex","morphnormal_vertex","skinbase_vertex","skinnormal_vertex","defaultnormal_vertex","normal_vertex","begin_vertex","morphtarget_vertex","skinning_vertex","displacementmap_vertex","project_vertex","logdepthbuf_vertex","clipping_planes_vertex","worldpos_vertex","shadowmap_vertex","fog_vertex"],xS=["common","packing","dithering_pars_fragment","color_pars_fragment","uv_pars_fragment","map_pars_fragment","alphamap_pars_fragment","alphatest_pars_fragment","alphahash_pars_fragment","aomap_pars_fragment","lightmap_pars_fragment","emissivemap_pars_fragment","iridescence_fragment","cube_uv_reflection_fragment","envmap_common_pars_fragment","envmap_physical_pars_fragment","fog_pars_fragment","lights_pars_begin","normal_pars_fragment","lights_physical_pars_fragment","transmission_pars_fragment","shadowmap_pars_fragment","bumpmap_pars_fragment","normalmap_pars_fragment","clearcoat_pars_fragment","iridescence_pars_fragment","roughnessmap_pars_fragment","metalnessmap_pars_fragment","logdepthbuf_pars_fragment","clipping_planes_pars_fragment","clipping_planes_fragment","logdepthbuf_fragment","map_fragment","color_fragment","alphamap_fragment","alphatest_fragment","alphahash_fragment","roughnessmap_fragment","metalnessmap_fragment","normal_fragment_begin","normal_fragment_maps","clearcoat_normal_fragment_begin","clearcoat_normal_fragment_maps","emissivemap_fragment","lights_physical_fragment","lights_fragment_begin","lights_fragment_maps","lights_fragment_end","aomap_fragment","transmission_fragment","opaque_fragment","tonemapping_fragment","colorspace_fragment","fog_fragment","premultiplied_alpha_fragment","dithering_fragment"],yS=[...vS,...xS],go=new Map;let Pl=0;function Qh(i){Pl=i;for(const[e,{execTime:t,callback:n}]of go.entries())t<Pl&&(go.delete(e),n())}if("requestAnimationFrame"in globalThis&&typeof globalThis.requestAnimationFrame=="function"){const i=e=>{globalThis.requestAnimationFrame(i);const t=e/1e3;Qh(t)};globalThis.requestAnimationFrame(i)}else{const i=16.666666666666668,e=Date.now();globalThis.setInterval(()=>{const t=(Date.now()-e)/1e3;Qh(t)},i)}function MS(i,e,t){const n=typeof e=="number"?e:e.endsWith("ms")?Number.parseFloat(e.slice(0,-2))/1e3:Number.parseFloat(e.slice(0,-1)),s=Pl+n;go.set(i,{execTime:s,callback:t})}function SS(i){go.delete(i)}let eu=0;class ES{constructor(e,t){z(this,"_observableId",eu++);z(this,"_value");z(this,"_valueOld");z(this,"_valueMapper",null);z(this,"_listeners",new Set);z(this,"_hasChanged",!1);z(this,"_delayed",!1);z(this,"userData");z(this,"valueStringifier",null);z(this,"valueParser",null);z(this,"get",()=>this._value);z(this,"set",this.setValue.bind(this));this._value=e,this._valueOld=e;const{valueMapper:n=null,onChange:s,userData:r={}}=t??{};this._valueMapper=n,this.userData=r,s&&this.onChange(s)}static get nextId(){return eu}is(e){return this._value===e}_invokeListeners(){const e=this._listeners[Symbol.iterator]();for(;;){const{value:t,done:n}=e.next();if(n)break;t(this._value,this)}}_handleDelay(e,t){if((t==null?void 0:t.delay)!==void 0){const{delay:n,...s}=t;return MS(this,n,()=>{this.setValue(e,s)}),this._delayed=!0,!0}else return this._delayed&&SS(this),this._delayed=!1,!1}setValue(e,t){return this._handleDelay(e,t)?!1:(this._valueMapper&&(e=this._valueMapper(e,this)),e===this._value?(this._hasChanged=!1,!1):(this._valueOld=this._value,this._value=e,this._hasChanged=!0,this._invokeListeners(),!0))}initializeSerialization(e,t){return this.valueStringifier=e,this.valueParser=t,this}valueToString(){return this.valueStringifier?this.valueStringifier(this._value):String(this._value)}setValueFromString(e,t){if(this.valueParser){const s=this.valueParser(e);return this.setValue(s,t)}const n=typeof this._value;switch(n){case"string":return this.setValue(e,t);case"number":return this.setValue(Number(e),t);case"boolean":const s=/^true|1$/.test(e);return this.setValue(s,t);case"bigint":return this.setValue(BigInt(e),t);default:return console.warn(`Observable#setValueFromString: Unsupported type "${n}"`),!1}}setValueMapper(e){return this._valueMapper=e,e?this.setValue(e(this._value,this)):!1}clearListeners(){return this._listeners.clear(),this}onChange(...e){const[t,n]=e.length===2?e:[{},e[0]],{executeImmediately:s=!1,once:r=!1}=t;if(r){if(s)return n(this._value,this),{destroy:()=>{}};const a=this.onChange({...t,executeImmediately:!1,once:!1},(l,c)=>{a.destroy(),n(l,c)});return a}this._listeners.add(n);const o=()=>this._listeners.delete(n);return s&&n(this._value,this),{destroy:o}}onDerivativeChange(e,...t){let n=e(this._value);const[{executeImmediately:s=!1},r]=t.length===2?t:[{},t[0]];return s&&r(n,n,this._value,this),this.onChange(o=>{const a=n;n=e(o),n!==a&&r(n,a,o,this)})}onVerify(...e){const[t,n,s]=e.length===3?e:[{},...e];let r=n(this._value);return t.executeImmediately&&s(r,this._value,this),this.onChange(o=>{const a=n(o);a!==r&&(r=a,s(r,o,this))})}get observableId(){return this._observableId}get value(){return this._value}set value(e){this.setValue(e)}get valueOld(){return this._valueOld}log(...e){function t(){return e.length===1?typeof e[0]=="function"?{value:e[0]}:e[0]:{}}const{value:n=r=>(r==null?void 0:r.toString())??String(r),message:s=r=>`Obs#${this._observableId} value has changed: `}=t();return this.onChange(()=>{console.log(`${s(this)} ${n(this._value)}`)})}}class Oi{constructor(e,t){z(this,"name");z(this,"target");this.name=e,this.target=t}static from(e,t){if(t instanceof ES){if(typeof t.value=="number")return new Oi(e,t);throw new Error("Observable value must be a number")}const n=typeof t;return n==="object"&&(t.constructor===Object||t instanceof Ql)&&"value"in t?new Oi(e,t):n==="string"?new Oi(e,{value:new Ve(t)}):new Oi(e,{value:t})}get value(){return this.target.value}computeDeclaration(){const e=this.name;let t=this.target.value,n="";if(t instanceof Float32Array)return`uniform float ${e}[${t.length}];`;if(Array.isArray(t)&&(n=`[${t.length}]`,t=t[0]),typeof t=="number")return`uniform float ${e}${n};`;if(t.isVector2)return`uniform vec2 ${e}${n};`;if(t.isVector3||t.isColor)return`uniform vec3 ${e}${n};`;if(t.isVector4||t.isQuaternion)return`uniform vec4 ${e}${n};`;if(t.isMatrix3)return`uniform mat3 ${e}${n};`;if(t.isMatrix4)return`uniform mat4 ${e}${n};`;if(t.isTexture)return t.isCubeTexture?`uniform samplerCube ${e}${n};`:`uniform sampler2D ${e}${n};`;throw console.log("unhandled value:",t),new Error(`unhandled value: "${t==null?void 0:t.constructor.name}"`)}}let ht=null;const TS=(i,e)=>(i.onBeforeCompile=t=>{ht=t},i),tu=i=>(ht=i,Et),Fd="// ShaderForge (injected code) ->",Bd="// <- ShaderForge",Pi=i=>`${Fd}
${i.trim()}
${Bd}`,bS=i=>{const e=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),t=String.raw`${e(Bd)}\s*${e(Fd)}`,n=new RegExp(t,"g");return i.replaceAll(n,"")};class kd{constructor(e){z(this,"type");this.type=e}getPattern(e,{throwError:t=!0}={}){const n=`#include <${e}>`,s=this.type;if(t&&ht[s].includes(n)===!1)throw new Error(`"${n}" is not present in the shader template program.`);return{pattern:n,type:s}}replace(e,t){if(e instanceof RegExp){const{type:n}=this;ht[n].match(e),ht[n]=ht[n].replace(e,Pi(t))}else{const{type:n,pattern:s}=this.getPattern(e),r=Pi(t);ht[n]=ht[n].replace(s,r)}return Et}inject(e,t,n){const{type:s,pattern:r}=this.getPattern(t),o=e==="after"?`${r}
${Pi(n)}`:`${Pi(n)}
${r}`;return ht[s]=ht[s].replace(r,o),Et}injectTokenComments(){for(const e of yS){const{type:t,pattern:n}=this.getPattern(e,{throwError:!1});ht[t]=ht[t].replace(n,`
        ${n}
        // ShaderForge TOKEN: ${e}
      `)}return Et}header(e){const t=this.type;return ht[t]=`${e}
${ht[t]}`,Et}before(e,t){return this.inject("before",e,t)}after(e,t){return this.inject("after",e,t)}top(...e){return ht[this.type]=ht[this.type].replace("void main() {",`
      ${Pi(e.join(`

`))}
      void main() {
    `),Et}mainBeforeAll(e){return ht[this.type]=ht[this.type].replace("void main() {",`void main() {
        ${Pi(e)}`),Et}mainAfterAll(e){return ht[this.type]=ht[this.type].replace(/}\s*$/,`
      ${Pi(e)}
    }`),Et}uniforms(e){if(typeof e=="string")this.top(e);else{const t=[];for(const[n,s]of Object.entries(e)){const r=Oi.from(n,s);t.push(r.computeDeclaration())}this.top(t.join(`
`)),RS(e)}return Et}clean(){return ht[this.type]=bS(ht[this.type]),Et}printFinalCode(){const e=_S(ht[this.type]);return console.log(e),Et}}function wS(i){return ht.shaderName=`${i} (ShaderForge)`,Et}function AS(i){return ht.defines?Object.assign(ht.defines,i):ht.defines=i,Et}function RS(i){for(const[e,t]of Object.entries(i)){const n=Oi.from(e,t);if(e in ht.uniforms){if(n.value!==ht.uniforms[e].value)throw new Error("Shader redefinition! (Uniform values are not equal)")}else ht.uniforms[e]=n}return Et}function CS(i){return Ls.uniforms(i),Ds.uniforms(i),Et}function PS(i){let e="";if(typeof i=="string")e=i;else{const t=[];for(const[n,s]of Object.entries(i))t.push(`varying ${s} ${n};`);e=t.join(`
`)}return Ls.top(e),Ds.top(e),Et}function DS(i){return Ls.top(i),Ds.top(i),Et}function LS(i){return Ds.header(i),Ls.header(i),Et}function IS(){return Ds.clean(),Ls.clean(),Et}const Ds=new kd("fragmentShader"),Ls=new kd("vertexShader"),Et=Object.assign(function(i){return i&&tu(i),Et},{shaderName:wS,defines:AS,uniforms:CS,varying:PS,top:DS,vertex:Ls,fragment:Ds,header:LS,clean:IS,with:tu,wrap:TS}),US=new Ve;function nu(i){const{r:e,g:t,b:n}=US.set(i);return`vec3(${e.toFixed(3)}, ${t.toFixed(3)}, ${n.toFixed(3)})`}new B(0,0,0),new B(1,1,1);const NS={x:0,y:0,z:0,rotationX:0,rotationY:0,rotationZ:0,rotationOrder:"XYZ",rotationUnit:"rad",scaleX:1,scaleY:1,scaleZ:1,scaleScalar:1,pivot:void 0,visible:void 0,name:void 0,parent:void 0,userData:void 0},iu=new $e,su=new B;function OS(i,e){const{x:t,y:n,z:s,position:r=new B(t,n,s),rotationX:o,rotationY:a,rotationZ:l,rotationOrder:c,rotationUnit:h,rotation:u,scaleX:d,scaleY:f,scaleZ:v,scaleScalar:x,scale:m=new B(d,f,v).multiplyScalar(x),pivot:p,visible:T,name:y,parent:M,userData:L}={...NS,...e};return Mn(r,i.position),uo(u??[o,a,l,c,h],i.rotation),Mn(m,i.scale),p!==void 0&&(i.updateMatrix(),iu.setFromMatrix4(i.matrix),Mn(p,su).applyMatrix3(iu),i.position.sub(su)),T!==void 0&&(i.visible=T),y!==void 0&&(i.name=y),M!==void 0&&M!==i.parent&&(M===null?i.removeFromParent():M.add(i)),L!==void 0&&Object.assign(i.userData,L),i}function FS(i,e,t){return e&&(Md(e)?e.add(i):OS(i,e)),t==null||t(i),i}const BS={includeSelf:!1};function*zd(i,e){const{includeSelf:t}={...BS,...e};t&&(yield i);for(const n of i.children)yield*zd(n,{includeSelf:!0})}const kS={includeSelf:!1,root:null,includeRoot:!1};function*zS(i,e){const{includeSelf:t,root:n,includeRoot:s}={...kS,...e};let r=i;for(t&&(yield r);r.parent;)if(yield r.parent,r=r.parent,n&&r===n){s&&(yield r);break}}const Hd=`
#ifndef GLSL_BASIC
#define GLSL_BASIC

float clamp01(float x) {
  return x < 0.0 ? 0.0 : x > 1.0 ? 1.0 : x;
}

#endif
`,HS=`
#ifndef GLSL_EASING
#define GLSL_EASING

${Hd}

float easePow1(float x) {
  return x;
}

float easePow2(float x) {
  return x * x;
}

float easePow3(float x) {
  return x * x * x;
}

float easePow4(float x) {
  x *= x;
  return x *= x;
}

float easePow5(float x) {
  float x0 = x;
  x *= x;
  x *= x;
  return x0 * x;
}

float easePow6(float x) {
  x *= x * x;
  return x *= x;
}

float easePow7(float x) {
  float x0 = x;
  x *= x * x;
  x *= x;
  return x0 * x;
}

float easePow8(float x) {
  x *= x;
  x *= x;
  return x *= x;
}

float easePow9(float x) {
  x *= x * x;
  return x *= x * x;
}

float easePow10(float x) {
  float x0 = x;
  x *= x * x;
  x *= x * x;
  return x0 * x;
}

float linear(float x) {
  return clamp01(x);
}

${Array.from({length:10},(i,e)=>{const t=e+1;return`

float easeIn${t} (float x) {
  return easePow${t}(clamp01(x));
}
float easeOut${t} (float x) {
  return 1.0 - easePow${t}(clamp01(1.0 - x));
}
float easeInOut${t} (float x) {
  return x < 0.5 
    ? 0.5 * easePow${t}(2.0 * x) 
    : 1.0 - 0.5 * easePow${t}(2.0 * (1.0 - x));
}
float easeOutIn${t} (float x) {
  return x < 0.5
    ? 0.5 * (1.0 - easePow${t}(1.0 - x * 2.0))
    : 1.0 - 0.5 * (1.0 - easePow${t}(2.0 * x - 1.0));
}

`.trim()}).join(`

`)}


// https://www.desmos.com/calculator/mqou4lf9zc?lang=fr
float easeInOut(float x, float p, float i) {
  return  x <= 0.0 ? 0.0 :
          x >= 1.0 ? 1.0 :
          x <= i ? 1.0 / pow(i, p - 1.0) * pow(x, p) :
          1.0 - 1.0 / pow(1.0 - i, p - 1.0) * pow(1.0 - x, p);
}

// https://www.desmos.com/calculator/nrjlezusdv
float easeInThenOut(float x, float p) {
  return 1.0 - pow(abs(2.0 * x - 1.0), p);
}

#endif
`,ru={vecX:["float","vec2","vec3","vec4"]},to=(i,e)=>{const t=[],n=Array.isArray(i)?i:[i].map(s=>s in ru?ru[s]:s).flat();if(typeof e=="function")for(const s of n)t.push(e(s).replaceAll(/\bT\b/g,s));else for(const s of n)t.push(e.replaceAll(/\bT\b/g,s));return t.join(`
`)},VS=`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}





// 2D:

vec3 mod289_2d(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289_2d(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute_2d(vec3 x) {
  return mod289(((x*34.0)+10.0)*x);
}


float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289_2d(i); // Avoid truncation effects in permutation
  vec3 p = permute_2d( permute_2d( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// 3D: 

float snoise(vec3 v)
{ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}




// addons:
// Fractal noise, based on Stefan Gustavson's Simplex noise
${to(["vec2","vec3"],`
  float fnoise(T p, int octaves, float persistence) {
    float total = 0.0;           // Final noise value
    float amplitude = 1.0;       // Initial amplitude
    float frequency = 1.0;       // Initial frequency
    float maxValue = 0.0;        // Used for normalization

    for (int i = 0; i < octaves; i++) {
      total += snoise(p * frequency) * amplitude;

      maxValue += amplitude;   // Keep track of max amplitude
      amplitude *= persistence; // Reduce amplitude for next octave
      frequency *= 2.0;        // Increase frequency for next octave
    }

    // Normalize the result to stay within the range [0, 1]
    return total / maxValue;
  }
`)}
`,GS=`
  ${Hd}

  float sin01(float x) {
    return 0.5 + 0.5 * sin(x * 6.283185307179586);
  }

  vec2 scaleAround(vec2 p, vec2 c, float s) {
    return c + (p - c) / s;
  }

  // Same as mix, but clamped.
  ${to("vecX",`
    T lerp(in T a, in T b, in float x) {
      return mix(a, b, clamp01(x));
    }
  `)}

  float inverseLerpUnclamped(in float a, in float b, float x) {
    return (x - a) / (b - a);
  }

  float inverseLerp(in float a, in float b, float x) {
    return clamp01((x - a) / (b - a));
  }

  float threshold(in float x, in float thresholdValue) {
    return x < thresholdValue ? 0. : 1.;
  }

  float threshold(in float x, in float thresholdValue, in float width) {
    return width < 1e-9 
      ? (x < thresholdValue ? 0. : 1.)
      : clamp01((x - thresholdValue + width * .5) / width);
  }

  mat3 extractRotation(mat4 matrix) {
    return mat3(matrix[0].xyz, matrix[1].xyz, matrix[2].xyz);
  }

  vec2 rotate(vec2 p, float a) {
    float c = cos(a);
    float s = sin(a);
    float x = c * p.x + s * p.y;
    float y = -s * p.x + c * p.y;
    return vec2(x, y);
  }

  vec2 rotateAround(vec2 p, float a, vec2 c) {
    return c + rotate(p - c, a);
  }

  vec2 rotateScaleAround(vec2 p, float a, float s, vec2 c) {
    return c + rotate((p - c) / s, a);
  }
  
  float positiveModulo(float x) {
    x = mod(x, 1.0);
    return x < 0.0 ? x + 1.0 : x;
  }

  float positiveModulo(float x, float modulo) {
    x = mod(x, modulo);
    return x < 0.0 ? x + modulo : x;
  }

  // Limit a value to a maximum that the function tends to reach when x -> ∞
  // https://www.desmos.com/calculator/0vewkbnscu
  float limited(float x, float maxValue) {
    return x <= 0.0 ? x : maxValue * x / (maxValue + x);
  }

  // https://www.desmos.com/calculator/0vewkbnscu
  float limited(float x, float minValue, float maxValue) {
    float d = maxValue - minValue;
    float xd = x - minValue;
    return x <= minValue ? x : minValue + d * xd / (d + xd);
  }

  float sqLength(in vec2 p) {
    return p.x * p.x + p.y * p.y;
  }

  float sqLength(in vec3 p) {
    return p.x * p.x + p.y * p.y + p.z * p.z;
  }

  float pcurve(float x, float a, float b) {
    float k = pow(a + b, a + b) / (pow(a, a) * pow(b, b));
    return k * pow(x, a) * pow(1.0 - x, b);
  }

  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
  }

  ${to("vecX",`
    T min3(in T a, in T b, in T c) {
      return min(min(a, b), c);
    }
  `)}

  ${to("vecX",`
    T min4(in T a, in T b, in T c, in T d) {
      return min(min(a, b), min(c, d));
    }
  `)}
`,wa=new WeakMap;class WS extends Mi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new or(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt,n).catch(n)}decodeDracoFile(e,t,n,s,r=Lt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(wa.has(e)){const l=wa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),wa.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new sn;e.index&&t.setIndex(new Vt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new Vt(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;const n=new Ve;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),it.toWorkingColorSpace(n,Tt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new or(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=XS.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function XS(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),v=f.attributes.map(x=>x.array.buffer);f.index&&v.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},v)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const v=a.GetEncodedGeometryType(l);if(v===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(v===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let T,y;if(c.useUniqueIDs)y=h[m],T=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;T=a.GetAttribute(d,y)}const M=s(o,a,d,m,p,T);m==="color"&&(M.vertexColorSpace=c.vertexColorSpace),x.attributes.push(M)}return v===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,l,c,h,u){const d=u.num_components(),v=l.num_points()*d,x=v*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,m,x,p);const T=new h(o.HEAPF32.buffer,p,v).slice();return o._free(p),{name:c,array:T,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}let cc="";const YS=new jl,qS=new Od,Vd=new Id,jS=new WS().setDecoderPath("./assets/draco/").preload();let Dl=null;function KS(i){Dl=i}const $S=(()=>{let i=null;return()=>{if(!Dl)throw new Error("Renderer not initialized");return i||(i=new gl(Dl),i.compileEquirectangularShader()),i}})();Vd.setDRACOLoader(jS);async function ZS(i){return new Promise((e,t)=>{Vd.load(cc+i,e,void 0,t)})}async function JS(i){return new Promise((e,t)=>{YS.load(cc+i,e,void 0,t)})}async function Yr(i,{uvChannel:e=1}={}){const t=await JS(i);return t.flipY=!1,t.colorSpace=Tt,t.generateMipmaps=!1,t.channel=e,t}async function QS(i){return new Promise((e,t)=>{qS.load(cc+i,n=>{const s=$S().fromEquirectangular(n).texture;n.dispose(),e(s)},void 0,t)})}const ou=(()=>{const n=new Uint8Array(64).fill(255),s=new To(n,4,4,nn,In);return s.magFilter=zt,s.minFilter=zt,s.wrapS=xi,s.wrapT=xi,s.needsUpdate=!0,s})();new Ee;new B;new Xe;function eE({debug:i=!1}={}){const e=new mi,t=new is("#fff8e5",15,0,2);t.position.set(5,1.75,-6),e.add(t);const n=new is("#fff8e5",6.66,0,2);n.position.set(0,2.25,-6),e.add(n);const s=new is("#e5fdff",2.5,0,2);s.position.set(1.5,2,-1),e.add(s);const r=new is("#fff8e5",10,0,2);r.position.set(2,2.5,3),e.add(r);const o=new is("#f2e5ff",5,0,2);return o.position.set(5.5,2.5,2.5),e.add(o),i&&e.add(...e.children.map(a=>new lm(a))),{group:e}}var au,lu;const tE=/true|1/.test((lu=(au=import.meta)==null?void 0:au.env)==null?void 0:lu.VITE_PRODUCTION);async function nE(){const i=new Cl;i.initialize(document.body),KS(i.renderer),i.renderer.shadowMap.enabled=!0,i.renderer.shadowMap.type=bn;const e=new Xy({size:24,focus:[-1,4.75,-.75],rotation:["-40deg","-40deg","0"],perspective:.5}).initialize(document.body).start();i.ticker.onTick(m=>{e.update(i.camera,i.aspect,m.deltaTime)});const t=new Zu("#ffffff",2);t.position.set(-20,40,-10),t.castShadow=!0,t.shadow.intensity=1.25,t.shadow.mapSize.set(4096,4096),t.shadow.camera.far=100,t.shadow.camera.top=20,t.shadow.camera.bottom=-20,t.shadow.camera.left=-20,t.shadow.camera.right=20,t.shadow.bias=-1e-4,t.shadow.radius=5,i.scene.add(t),i.scene.add(eE().group);function n(){const m=new jt(new Yl(100,2),new Jn({color:"red",side:Qt}));return FS(m,{rotation:["-40deg","0deg","0"]}),m.material.onBeforeCompile=p=>Et.with(p).varying({vObjectPosition:"vec3"}).vertex.mainBeforeAll(`
      vObjectPosition = position;
    `).fragment.top(GS,HS,VS).fragment.after("color_fragment",`
      float x = inverseLerp(-66.0, 66.0, vObjectPosition.y);
      x += snoise(vObjectPosition.xyz * 12.445678) * .025;
      diffuseColor.rgb = mix(${nu("#06AEA7")}, ${nu("#034C5F")}, easeInOut3(x));
    `),m}i.scene.add(n());const s=await QS("assets/kloofendal_43d_clear_puresky_4k.hdr");i.scene.environment=s,i.scene.environmentIntensity=.25,Object.assign(window,{three:i,controls:e});const r=tE?"/Arkema-House/output":"http://localhost:4001/output",o=await ZS(`${r}/ArkemaHouse6-KOK-webp.glb`);i.scene.add(o.scene);const a=await Yr(`${r}/ArkemaHouse6-KOK-LM1-@512.png`),l=await Yr(`${r}/ArkemaHouse6-KOK-LM2-@512.png`),c=await Yr(`${r}/ArkemaHouse6-KOK-AO1-@512.png`),h=await Yr(`${r}/ArkemaHouse6-KOK-AO2-@512.png`),u=new Map;function d(m,p,T,{debug:y=!1}={}){if(u.has(m))return u.get(m);const M=(y?()=>new wo({color:"#000000",emissive:"#ffffff",emissiveMap:p}):()=>{const L=m.clone();return L.defines={USE_LIGHTMAP:""},L.aoMap=p,L.aoMapIntensity=.33,L.lightMap=T,L.lightMapIntensity=1,L.normalScale.setScalar(1.25),L.side=Ln,L})();return u.set(m,M),M}function f(m,p,...T){for(const y of T){y.receiveShadow=!0,y.castShadow=!0;const M=Array.isArray(y.material)?y.material:[y.material];for(const L of M)y.material=d(L,m,p)}}function v(m){for(const p of zS(m,{includeSelf:!0,root:o.scene})){const T=p.name.match(/_LM(\d+)$/);if(T)return Number(T[1])}return 0}for(const m of zd(o.scene))if(m.isMesh){const p=m,T=v(m),y=[ou,a,l][T],M=[ou,c,h][T];p.receiveShadow=!0,p.castShadow=!0,f(M,y,p)}Object.assign(window,{stage:{sun:t,gltf:o}})}nE();
