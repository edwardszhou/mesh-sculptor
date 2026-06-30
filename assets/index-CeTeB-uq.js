(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,ee=1028,k=1029,te=1030,ne=1031,A=1033,re=33776,j=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,fe=37496,pe=37488,me=37489,he=37490,ge=37491,_e=37808,ve=37809,ye=37810,be=37811,xe=37812,Se=37813,Ce=37814,we=37815,Te=37816,Ee=37817,De=37818,Oe=37819,ke=37820,Ae=37821,je=36492,M=36494,Me=36495,Ne=36283,Pe=36284,N=36285,Fe=36286,P=2300,F=2301,Ie=2302,Le=2303,Re=2400,ze=2401,Be=2402,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={},tt=null;function nt(...e){let t=`THREE.`+e.shift();tt?tt(`log`,t,...e):console.log(t,...e)}function rt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=rt(e);let t=`THREE.`+e.shift();if(tt)tt(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=rt(e);let t=`THREE.`+e.shift();if(tt)tt(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in et||(et[t]=!0,I(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),lt=1234567,ut=Math.PI/180,dt=180/Math.PI;function ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+`-`+ct[t&255]+ct[t>>8&255]+`-`+ct[t>>16&15|64]+ct[t>>24&255]+`-`+ct[n&63|128]+ct[n>>8&255]+`-`+ct[n>>16&255]+ct[n>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function pt(e,t){return(e%t+t)%t}function mt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ht(e,t,n){return e===t?0:(n-e)/(t-e)}function gt(e,t,n){return(1-n)*e+n*t}function _t(e,t,n,r){return gt(e,t,1-Math.exp(-n*r))}function vt(e,t=1){return t-Math.abs(pt(e,t*2)-t)}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function St(e,t){return e+Math.random()*(t-e)}function Ct(e){return e*(.5-Math.random())}function wt(e){e!==void 0&&(lt=e);let t=lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tt(e){return e*ut}function Et(e){return e*dt}function Dt(e){return(e&e-1)==0&&e!==0}function Ot(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function At(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Nt={DEG2RAD:ut,RAD2DEG:dt,generateUUID:ft,clamp:R,euclideanModulo:pt,mapLinear:mt,inverseLerp:ht,lerp:gt,damp:_t,pingpong:vt,smoothstep:yt,smootherstep:bt,randInt:xt,randFloat:St,randFloatSpread:Ct,seededRandom:wt,degToRad:Tt,radToDeg:Et,isPowerOfTwo:Dt,ceilPowerOfTwo:Ot,floorPowerOfTwo:kt,setQuaternionFromProperEuler:At,normalize:Mt,denormalize:jt},z=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(It.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(It.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ft.copy(this).projectOnVector(e),this.sub(Ft)}reflect(e){return this.sub(Ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ft=new B,It=new Pt,V=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lt.makeScale(e,t)),this}rotate(e){return this.premultiply(Lt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lt=new V,Rt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var H=Bt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Qe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}else return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Gt++}),this.uuid=ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new B,Xt=class e extends st{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:Jt++}),this.uuid=ft(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*j,i[12]=a*w+o*O+s*ne+c*ie,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*j,i[13]=l*w+u*O+d*ne+f*ie,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*j,i[14]=p*w+m*O+h*ne+g*ie,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*j,i[15]=_*w+v*O+y*ne+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new B,an=new nn,on=new B(0,0,0),sn=new B(1,1,1),cn=new B,ln=new B,un=new B,dn=new nn,fn=new Pt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},hn=0,gn=new B,_n=new Pt,vn=new nn,yn=new B,bn=new B,xn=new B,Sn=new Pt,Cn=new B(1,0,0),wn=new B(0,1,0),Tn=new B(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:hn++}),this.uuid=ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new pn,r=new Pt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new V}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};An.DEFAULT_UP=new B(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,H.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=H.workingColorSpace){return this.r=e,this.g=t,this.b=n,H.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=H.workingColorSpace){if(e=pt(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return H.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Pn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return H.workingToColorSpace(Rn.copy(this),e),Math.round(R(Rn.r*255,0,255))*65536+Math.round(R(Rn.g*255,0,255))*256+Math.round(R(Rn.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=H.workingColorSpace){H.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,r=Rn.g,i=Rn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=H.workingColorSpace){return H.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=He){H.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,r=Rn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=gt(Fn.h,In.h,t),r=gt(Fn.s,In.s,t),i=gt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new U;U.NAMES=Pn;var zn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new B,new B,new B,new B,new B,new B,new B,new B],nr=new B,rr=new er,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B,fr=new B,pr=new B;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new B,gr=new z,_r=0,vr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new B,wr=new B,Tr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new nn,Or=new An,kr=new B,Ar=new er,jr=new er,Mr=new B,Nr=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:Er++}),this.uuid=ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xe(e)?br:yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new vr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=0,Fr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Pr++}),this.uuid=ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ir=new B,Lr=new B,Rr=new B,zr=new B,Br=new B,Vr=new B,Hr=new B,Ur=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lr.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Lr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=zr.dot(this.direction),s=-zr.dot(Rr),c=zr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lr).addScaledVector(Rr,d),f}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);let n=Ir.dot(this.direction),r=Ir.dot(Ir)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,n,r,i){Br.subVectors(t,e),Vr.subVectors(n,e),Hr.crossVectors(Br,Vr);let a=this.direction.dot(Hr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zr.subVectors(this.origin,e);let s=o*this.direction.dot(Vr.crossVectors(zr,Vr));if(s<0)return null;let c=o*this.direction.dot(Br.cross(zr));if(c<0||s+c>a)return null;let l=-o*zr.dot(Hr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gr=new nn,Kr=new Ur,qr=new Tr,Jr=new B,Yr=new B,Xr=new B,Zr=new B,Qr=new B,$r=new B,ei=new B,ti=new B,ni=class extends An{constructor(e=new Nr,t=new Wr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$r.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qr.fromBufferAttribute(s,e),a?$r.addScaledVector(Qr,r):$r.addScaledVector(Qr.sub(t),r))}t.add($r)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),Kr.copy(e.ray).recast(e.near),!(qr.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(qr,Jr)===null||Kr.origin.distanceToSquared(Jr)>(e.far-e.near)**2))&&(Gr.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Gr),!(n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ti.copy(s),ti.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ti);return l<n.near||l>n.far?null:{distance:l,point:ti.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yr),e.getVertexPosition(c,Xr),e.getVertexPosition(l,Zr);let u=ri(e,t,n,r,Yr,Xr,Zr,ei);if(u){let e=new B;$n.getBarycoord(ei,Yr,Xr,Zr,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};$n.getNormal(Yr,Xr,Zr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Xt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new nn,ci=new nn,li=[],ui=new er,di=new nn,fi=new ni,pi=new Tr,mi=class extends ni{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,ee,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new B,gi=new B,_i=new V,vi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hi.subVectors(n,t).cross(gi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_i.getNormalMatrix(e),r=this.coplanarPoint(hi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Tr,bi=new z(.5,.5),xi=new B,Si=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,i=new vi,a=new vi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476+bi.distanceTo(e.center),yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xi.x=r.normal.x>0?e.max.x:e.min.x,xi.y=r.normal.y>0?e.max.y:e.min.y,xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ci=class extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wi=new B,Ti=new B,Ei=new nn,Di=new Ur,Oi=new Tr,ki=new B,Ai=new B,ji=class extends An{constructor(e=new Nr,t=new Ci){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)wi.fromBufferAttribute(t,e-1),Ti.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=wi.distanceTo(Ti);e.setAttribute(`lineDistance`,new xr(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(r),Oi.radius+=i,e.ray.intersectsSphere(Oi)===!1)return;Ei.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Ei);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Mi(this,e,Di,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Mi(this,e,Di,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Mi(this,e,Di,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Mi(this,e,Di,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Mi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(wi.fromBufferAttribute(s,i),Ti.fromBufferAttribute(s,a),n.distanceSqToSegment(wi,Ti,ki,Ai)>r)return;ki.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ki);if(!(c<t.near||c>t.far))return{distance:c,point:Ai.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ni=new B,Pi=new B,Fi=class extends ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ni.fromBufferAttribute(t,e),Pi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ni.distanceTo(Pi);e.setAttribute(`lineDistance`,new xr(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ii=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Li=class extends Xt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ri=class extends Li{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zi=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bi=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vi=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hi=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ui=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Wi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Gi(e){let t={};for(let n=0;n<e.length;n++){let r=Wi(e[n]);for(let e in r)t[e]=r[e]}return t}function Ki(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:H.workingColorSpace}var Ji={clone:Wi,merge:Gi},Yi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zi=class extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yi,this.fragmentShader=Xi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Ki(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qi=class extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},$i=class extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ea=class extends $i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,`reflectivity`,{get:function(){return R(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ta=class extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},na=class extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ra(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var ia=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},aa=class extends ia{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},oa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},sa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ca=class extends ia{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},la=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ca(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case P:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return P;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};la.prototype.ValueTypeName=``,la.prototype.TimeBufferType=Float32Array,la.prototype.ValueBufferType=Float32Array,la.prototype.DefaultInterpolation=F;var ua=class extends la{constructor(e,t,n){super(e,t,n)}};ua.prototype.ValueTypeName=`bool`,ua.prototype.ValueBufferType=Array,ua.prototype.DefaultInterpolation=P,ua.prototype.InterpolantFactoryMethodLinear=void 0,ua.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends la{constructor(e,t,n,r){super(e,t,n,r)}};da.prototype.ValueTypeName=`color`;var fa=class extends la{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName=`number`;var pa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ma=class extends la{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName=`quaternion`,ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends la{constructor(e,t,n){super(e,t,n)}};ha.prototype.ValueTypeName=`string`,ha.prototype.ValueBufferType=Array,ha.prototype.DefaultInterpolation=P,ha.prototype.InterpolantFactoryMethodLinear=void 0,ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends la{constructor(e,t,n,r){super(e,t,n,r)}};ga.prototype.ValueTypeName=`vector`;var _a=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},va=class{constructor(e){this.manager=e===void 0?_a:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ya=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ba=new nn,xa=new B,Sa=new B,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xa.setFromMatrixPosition(e.matrixWorld),t.position.copy(xa),Sa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sa),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wa=new B,Ta=new Pt,Ea=new B,Da=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ea.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wa,Ta,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oa=new B,ka=new z,Aa=new z,ja=class extends Da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ut*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(ut*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,t){return this.getViewBounds(e,ka,Aa),t.subVectors(Aa,ka)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ut*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ma=class extends Da{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Na=class extends Ca{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Na}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fa=class extends ya{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Ia=-90,La=1,Ra=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ja(Ia,La,e,t);r.layers=this.layers,this.add(r);let i=new ja(Ia,La,e,t);i.layers=this.layers,this.add(i);let a=new ja(Ia,La,e,t);a.layers=this.layers,this.add(a);let o=new ja(Ia,La,e,t);o.layers=this.layers,this.add(o);let s=new ja(Ia,La,e,t);s.layers=this.layers,this.add(s);let c=new ja(Ia,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},za=class extends ja{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ba=`\\[\\]\\.:\\/`,Va=RegExp(`[`+Ba+`]`,`g`),Ha=`[^`+Ba+`]`,Ua=`[^`+Ba.replace(`\\.`,``)+`]`,Wa=`((?:WC+[\\/:])*)`.replace(`WC`,Ha),Ga=`(WCOD+)?`.replace(`WCOD`,Ua),Ka=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ha),qa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ha),Ja=RegExp(`^`+Wa+Ga+Ka+qa+`$`),Ya=[`material`,`materials`,`bones`,`map`],Xa=class{constructor(e,t,n){let r=n||Za.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Za=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Va,``)}static parseTrackName(e){let t=Ja.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ya.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Za.Composite=Xa,Za.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Za.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Za.prototype.GetterByBindingType=[Za.prototype._getValue_direct,Za.prototype._getValue_array,Za.prototype._getValue_arrayElement,Za.prototype._getValue_toArray],Za.prototype.SetterByBindingTypeAndVersioning=[[Za.prototype._setValue_direct,Za.prototype._setValue_direct_setNeedsUpdate,Za.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Za.prototype._setValue_array,Za.prototype._setValue_array_setNeedsUpdate,Za.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Za.prototype._setValue_arrayElement,Za.prototype._setValue_arrayElement_setNeedsUpdate,Za.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Za.prototype._setValue_fromArray,Za.prototype._setValue_fromArray_setNeedsUpdate,Za.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Float32Array(1);var Qa=new nn,$a=class{constructor(e,t,n=0,r=1/0){this.ray=new Ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Qa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qa),this}intersectObject(e,t=!0,n=[]){return to(e,this,n,t),n.sort(eo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)to(e[r],this,n,t);return n.sort(eo),n}};function eo(e,t){return e.distance-t.distance}function to(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)to(r[e],t,n,!0)}}var no=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=R(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(R(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ro=class extends Fi{constructor(e=10,t=10,n=4473924,r=8947848){n=new U(n),r=new U(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Nr;l.setAttribute(`position`,new xr(s,3)),l.setAttribute(`color`,new xr(c,3));let u=new Ci({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},io=class extends st{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){I(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ao(e,t,n,r){let i=oo(r);switch(n){case w:return e*t;case ee:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case A:return e*t*4/i.components*i.byteLength;case re:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case he:case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case je:case M:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case N:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function oo(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`183`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`183`);function so(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function co(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},lo={basic:{uniforms:Gi([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Gi([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Gi([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Gi([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Gi([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Gi([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Gi([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Gi([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Gi([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Gi([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Gi([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:Gi([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:Gi([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};lo.physical={uniforms:Gi([lo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var uo={r:0,b:0,g:0},fo=new pn,po=new nn;function mo(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ni(new Bi(1,1,1),new Zi({name:`BackgroundCubeMaterial`,uniforms:Wi(lo.backgroundCube.uniforms),vertexShader:lo.backgroundCube.vertexShader,fragmentShader:lo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),fo.copy(n.backgroundRotation),fo.x*=-1,fo.y*=-1,fo.z*=-1,i.isCubeTexture&&i.isRenderTargetTexture===!1&&(fo.y*=-1,fo.z*=-1),l.material.uniforms.envMap.value=i,l.material.uniforms.flipEnvMap.value=i.isCubeTexture&&i.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(po.makeRotationFromEuler(fo)),l.material.toneMapped=H.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ni(new Hi(2,2),new Zi({name:`BackgroundMaterial`,uniforms:Wi(lo.background.uniforms),vertexShader:lo.background.vertexShader,fragmentShader:lo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=H.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(uo,qi(e)),n.buffers.color.setClear(uo.r,uo.g,uo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ho(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function go(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function _o(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function vo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vi,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var yo=4,bo=[.125,.215,.35,.446,.526,.582],xo=20,So=256,Co=new Ma,wo=new U,To=null,Eo=0,Do=0,Oo=!1,ko=new B,Ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ko}=i;To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(To,Eo,Do),this._renderer.xr.enabled=Oo,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ue,depthBuffer:!1},r=Mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jo(r)),this._blurMaterial=Fo(r,e,t),this._ggxMaterial=Po(r,e,t)}return r}_compileMaterial(e){let t=new ni(new Nr,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,r,i){let a=new ja(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(wo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new Bi,new Wr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(wo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;No(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;No(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-yo?n-d+yo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,No(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Co),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,No(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Co)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&L(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*xo-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):xo;m>xo&&I(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xo}`);let h=[],g=0;for(let e=0;e<xo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];No(t,3*v*(r>_-yo?r-_+yo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Co)}};function jo(e){let t=[],n=[],r=[],i=e,a=e-yo+1+bo.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-yo?s=bo[o-e+yo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Nr;h.setAttribute(`position`,new vr(f,3)),h.setAttribute(`uv`,new vr(p,2)),h.setAttribute(`faceIndex`,new vr(m,1)),r.push(new ni(h,null)),i>yo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Mo(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function No(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Po(e,t,n){return new Zi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:So,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fo(e,t,n){let r=new Float32Array(xo),i=new B(0,1,0);return new Zi({name:`SphericalGaussianBlur`,defines:{n:xo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Io(){return new Zi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lo(){return new Zi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}var zo=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new Ii([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bi(5,5,5),i=new Zi({name:`CubemapFromEquirect`,uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ni(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new Ra(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Bo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new zo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ao(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ao(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Vo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ho(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Uo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Wo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Go(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ko(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var qo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Jo(e,t,n,r,i){let a=new $t(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),o=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),s=new Nr;s.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let c=new Qi({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ni(s,c),u=new Ma(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},H.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=qo[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var Yo=new Xt,Xo=new Li(1,1),Zo=new en,Qo=new tn,$o=new Ii,es=[],ts=[],ns=new Float32Array(16),rs=new Float32Array(9),is=new Float32Array(4);function as(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=es[i];if(a===void 0&&(a=new Float32Array(i),es[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function os(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ss(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function cs(e,t){let n=ts[t];n===void 0&&(n=new Int32Array(t),ts[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ls(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(os(n,t))return;e.uniform2fv(this.addr,t),ss(n,t)}}function ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(os(n,t))return;e.uniform3fv(this.addr,t),ss(n,t)}}function fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(os(n,t))return;e.uniform4fv(this.addr,t),ss(n,t)}}function ps(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(os(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ss(n,t)}else{if(os(n,r))return;is.set(r),e.uniformMatrix2fv(this.addr,!1,is),ss(n,r)}}function ms(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(os(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ss(n,t)}else{if(os(n,r))return;rs.set(r),e.uniformMatrix3fv(this.addr,!1,rs),ss(n,r)}}function hs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(os(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ss(n,t)}else{if(os(n,r))return;ns.set(r),e.uniformMatrix4fv(this.addr,!1,ns),ss(n,r)}}function gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(os(n,t))return;e.uniform2iv(this.addr,t),ss(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(os(n,t))return;e.uniform3iv(this.addr,t),ss(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(os(n,t))return;e.uniform4iv(this.addr,t),ss(n,t)}}function bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(os(n,t))return;e.uniform2uiv(this.addr,t),ss(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(os(n,t))return;e.uniform3uiv(this.addr,t),ss(n,t)}}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(os(n,t))return;e.uniform4uiv(this.addr,t),ss(n,t)}}function ws(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Xo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Xo):a=Yo,n.setTexture2D(t||a,i)}function Ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Qo,i)}function Es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||$o,i)}function Ds(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Zo,i)}function Os(e){switch(e){case 5126:return ls;case 35664:return us;case 35665:return ds;case 35666:return fs;case 35674:return ps;case 35675:return ms;case 35676:return hs;case 5124:case 35670:return gs;case 35667:case 35671:return _s;case 35668:case 35672:return vs;case 35669:case 35673:return ys;case 5125:return bs;case 36294:return xs;case 36295:return Ss;case 36296:return Cs;case 35678:case 36198:case 36298:case 36306:case 35682:return ws;case 35679:case 36299:case 36307:return Ts;case 35680:case 36300:case 36308:case 36293:return Es;case 36289:case 36303:case 36311:case 36292:return Ds}}function ks(e,t){e.uniform1fv(this.addr,t)}function As(e,t){let n=as(t,this.size,2);e.uniform2fv(this.addr,n)}function js(e,t){let n=as(t,this.size,3);e.uniform3fv(this.addr,n)}function Ms(e,t){let n=as(t,this.size,4);e.uniform4fv(this.addr,n)}function Ns(e,t){let n=as(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ps(e,t){let n=as(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fs(e,t){let n=as(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Is(e,t){e.uniform1iv(this.addr,t)}function Ls(e,t){e.uniform2iv(this.addr,t)}function Rs(e,t){e.uniform3iv(this.addr,t)}function zs(e,t){e.uniform4iv(this.addr,t)}function Bs(e,t){e.uniform1uiv(this.addr,t)}function Vs(e,t){e.uniform2uiv(this.addr,t)}function Hs(e,t){e.uniform3uiv(this.addr,t)}function Us(e,t){e.uniform4uiv(this.addr,t)}function Ws(e,t,n){let r=this.cache,i=t.length,a=cs(n,i);os(r,a)||(e.uniform1iv(this.addr,a),ss(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Xo:Yo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Gs(e,t,n){let r=this.cache,i=t.length,a=cs(n,i);os(r,a)||(e.uniform1iv(this.addr,a),ss(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Qo,a[e])}function Ks(e,t,n){let r=this.cache,i=t.length,a=cs(n,i);os(r,a)||(e.uniform1iv(this.addr,a),ss(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||$o,a[e])}function qs(e,t,n){let r=this.cache,i=t.length,a=cs(n,i);os(r,a)||(e.uniform1iv(this.addr,a),ss(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Zo,a[e])}function Js(e){switch(e){case 5126:return ks;case 35664:return As;case 35665:return js;case 35666:return Ms;case 35674:return Ns;case 35675:return Ps;case 35676:return Fs;case 5124:case 35670:return Is;case 35667:case 35671:return Ls;case 35668:case 35672:return Rs;case 35669:case 35673:return zs;case 5125:return Bs;case 36294:return Vs;case 36295:return Hs;case 36296:return Us;case 35678:case 36198:case 36298:case 36306:case 35682:return Ws;case 35679:case 36299:case 36307:return Gs;case 35680:case 36300:case 36308:case 36293:return Ks;case 36289:case 36303:case 36311:case 36292:return qs}}var Ys=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Os(t.type)}},Xs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Js(t.type)}},Zs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Qs=/(\w+)(\])?(\[|\.)?/g;function $s(e,t){e.seq.push(t),e.map[t.id]=t}function ec(e,t,n){let r=e.name,i=r.length;for(Qs.lastIndex=0;;){let a=Qs.exec(r),o=Qs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$s(n,l===void 0?new Ys(s,e,t):new Xs(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Zs(s),$s(n,e)),n=e}}}var tc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ec(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function nc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var rc=37297,ic=0;function ac(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var oc=new V;function sc(e){H._getMatrix(oc,H.workingColorSpace,e);let t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(H.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function cc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ac(e.getShaderSource(t),r)}else return i}function lc(e,t){let n=sc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var uc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function dc(e,t){let n=uc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var fc=new B;function pc(){return H.getLuminanceCoefficients(fc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${fc.x.toFixed(4)}, ${fc.y.toFixed(4)}, ${fc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function mc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(_c).join(`
`)}function hc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function gc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _c(e){return e!==``}function vc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bc=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(e){return e.replace(bc,Cc)}var Sc=new Map;function Cc(e,t){let n=W[t];if(n===void 0){let e=Sc.get(t);if(e!==void 0)n=W[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return xc(n)}var wc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(e){return e.replace(wc,Ec)}function Ec(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Dc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Oc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function kc(e){return Oc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ac={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function jc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ac[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Mc={302:`ENVMAP_MODE_REFRACTION`};function Nc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Mc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Pc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Fc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Pc[e.combine]||`ENVMAP_BLENDING_NONE`}function Ic(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Lc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=kc(n),l=jc(n),u=Nc(n),d=Fc(n),f=Ic(n),p=mc(n),m=hc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_c).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_c).join(`
`),_.length>0&&(_+=`
`)):(g=[Dc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(_c).join(`
`),_=[Dc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:dc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,lc(`linearToOutputTexel`,n.outputColorSpace),pc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(_c).join(`
`)),o=xc(o),o=vc(o,n),o=yc(o,n),s=xc(s),s=vc(s,n),s=yc(s,n),o=Tc(o),s=Tc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=nc(i,i.VERTEX_SHADER,y),S=nc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=cc(i,x,`vertex`),n=cc(i,S,`fragment`);L(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new tc(i,h),T=gc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,rc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ic++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Rc=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bc(e),t.set(e,n)),n}},Bc=class{constructor(e){this.id=Rc++,this.code=e,this.usedTimes=0}};function Vc(e,t,n,r,i,a){let o=new mn,s=new zc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h){let g=u.fog,_=h.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=b&&b.mapping===306?b.image.height:null,S=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(S){let e=lo[S];E=e.vertexShader,D=e.fragmentShader}else E=i.vertexShader,D=i.fragmentShader,s.update(i),O=s.getVertexShaderID(i),ee=s.getFragmentShaderID(i);let k=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,re=!!i.map,j=!!i.matcap,ie=!!b,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,M=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,N=!!i.extensions,Fe=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let P={shaderID:S,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ue,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:j,envMap:ie,envMapMode:ie&&b.mapping,envMapCubeUVHeight:x,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:M,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||pe),vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!_.attributes.uv&&(re||Me),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&H.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&H.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:N&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(N&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return P.vertexUv1s=c.has(1),P.vertexUv2s=c.has(2),P.vertexUv3s=c.has(3),c.clear(),P}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=lo[t];n=Ji.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Lc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Hc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Uc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Uc),r.length>1&&r.sort(t||Wc),i.length>1&&i.sort(t||Wc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Kc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Gc,e.set(t,[i])):n>=r.length?(i=new Gc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function Jc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Yc=0;function Xc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Zc(e){let t=new qc,n=Jc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Xc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Yc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Qc(e){let t=new Zc(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function $c(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Qc(e),t.set(n,[a])):r>=i.length?(a=new Qc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var el=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nl=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],rl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],il=new nn,al=new B,ol=new B;function sl(e,t,n){let r=new Si,i=new z,o=new z,s=new Zt,l=new ta,u=new na,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:el,fragmentShader:tl}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Nr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ni(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:te,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Li(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new zo(i.x),p.map.depthTexture=new Ri(i.x,g)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new Li(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),al.setFromMatrixPosition(d.matrixWorld),e.position.copy(al),ol.copy(e.position),ol.add(nl[t]),e.up.copy(rl[t]),e.lookAt(ol),e.updateMatrixWorld(),n.makeTranslation(-al.x,-al.y,-al.z),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(il,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new $t(i.x,i.y,{format:te,type:v})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function cl(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new U(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,A=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=A>=1);let j=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Zt().fromArray(ae),ce=new Zt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(fe(e.BLEND),h=!1);return}if(h===!1&&(de(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(ge[n],ge[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function Se(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(ee!==n||k!==r)&&(ee=n,k=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+te-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+te-1:j);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function De(){let t=ie[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function M(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function P(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function F(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},j=null,ie={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new U(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Fe,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:M,compressedTexSubImage3D:Me,scissor:P,viewport:F,reset:Re}}function ll(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):Qe(`canvas`)}function w(e,t,n){let r=1,i=N(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?We:H.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&y.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function ie(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ae=0;function oe(){ae=0}function se(){let e=ae;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,n){let r=f.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){be(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){be(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){xe(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let pe={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},me={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=ce(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=ve(r.start,n.width,4),c=ve(t.start,n.width,4);r.start<=i+1&&s===c&&ve(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=e.getParameter(e.UNPACK_ROW_LENGTH),c=e.getParameter(e.UNPACK_SKIP_PIXELS),l=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,s),e.pixelStorei(e.UNPACK_SKIP_PIXELS,c),e.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function be(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=_e(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=H.getPrimaries(H.workingColorSpace),c=n.colorSpace===``?null:H.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=Pe(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=ee(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);ge(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=te(n,u);if(n.isDepthTexture)g=k(n.format===O,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture)if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&ye(n,u,f,h)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023)if(f!==null)if(y){if(x)if(n.layerUpdates.size>0){let r=ao(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0);else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}else if(n.isDataArrayTexture)if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x)if(n.layerUpdates.size>0){let t=ao(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b)if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}else if(v.length>0){if(y&&b){let t=N(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=N(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function xe(t,n,r){if(n.image.length!==6)return;let i=_e(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=H.getPrimaries(H.workingColorSpace),s=n.colorSpace===``?null:H.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Pe(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=ee(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=te(n,h);ge(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=N(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Se(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=ee(r.internalFormat,s,c,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Me(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,M(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,M(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,M(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=ee(a.internalFormat,o,s,a.colorSpace);Me(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,M(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,M(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,ne)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ge(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else le(n.depthTexture,0);let o=a.__webglTexture,s=M(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Me(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Me(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`Unknown depthTexture format`)}function Te(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)we(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(n.__webglFramebuffer[0],t,0):we(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Ce(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){let i=f.get(t);n!==void 0&&Se(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Te(t)}function De(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Me(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=ee(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=M(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ge(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Se(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Se(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ge(s,i),Se(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),T(i)&&E(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ge(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Se(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Se(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=D(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Me(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ke.push(o),Ae.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function M(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(H.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function N(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function ul(e,t){function n(n,r=``){let i,a=H.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var dl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fl=`
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

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zi({vertexShader:dl,fragmentShader:fl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new pl,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new z,ee=null,k=new ja;k.viewport=new Zt;let te=new ja;te.viewport=new Zt;let ne=[k,te],A=new za,re=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getHandSpace()};function ie(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,j=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $t(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new Li(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $t(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=te.near=k.near=t,A.far=te.far=k.far=n,(re!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,j=A.far),A.layers.mask=e.layers.mask|6,k.layers.mask=A.layers.mask&-5,te.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,k,te):A.projectionMatrix.copy(k.projectionMatrix),de(e,A,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new ja,o.layers.enable(n),o.viewport=new Zt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new zi,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let me=new so;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},hl=new pn,gl=new nn;function _l(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,hl.copy(o),hl.x*=-1,hl.y*=-1,hl.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(hl.y*=-1,hl.z*=-1),e.envMapRotation.value.setFromMatrix4(gl.makeRotationFromEuler(hl)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function vl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var yl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bl=null;function xl(){return bl===null&&(bl=new ai(yl,16,16,te,v),bl.name=`DFG_LUT`,bl.minFilter=c,bl.magFilter=c,bl.wrapS=r,bl.wrapT=r,bl.generateMipmaps=!1,bl.needsUpdate=!0),bl}var Sl=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([A,ne,k]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=null,O=null,ee=[],te=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ie=!1;this._outputColorSpace=He;let ae=0,oe=0,se=null,ce=-1,le=null,ue=new Zt,de=new Zt,fe=null,pe=new U(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Zt(0,0,he,ge),xe=new Zt(0,0,he,ge),Se=!1,Ce=new Si,we=!1,Te=!1,Ee=new nn,De=new B,Oe=new Zt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return se===null?_e:1}let M=n;function Me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r183`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),M===null){let t=`webgl2`;if(M=Me(t,e),M===null)throw Me(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw L(`WebGLRenderer: `+e.message),e}let Ne,Pe,N,Fe,P,F,Ie,Le,Re,ze,Be,Ve,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,tt,rt;function ot(){Ne=new Vo(M),Ne.init(),et=new ul(M,Ne),Pe=new _o(M,Ne,e,et),N=new cl(M,Ne),Pe.reversedDepthBuffer&&p&&N.buffers.depth.setReversed(!0),Fe=new Wo(M),P=new Hc,F=new ll(M,Ne,N,P,Pe,et,Fe),Ie=new Bo(j),Le=new co(M),tt=new ho(M,Le),Re=new Ho(M,Le,Fe,tt),ze=new Ko(M,Re,Le,tt,Fe),Xe=new Go(M,Pe,F),Ke=new vo(P),Be=new Vc(j,Ie,Ne,Pe,tt,Ke),Ve=new _l(j,P),We=new Kc,Ge=new $c(Ne),Je=new mo(j,Ie,N,ze,_,s),qe=new sl(j,ze,Pe),rt=new vl(M,Fe,Pe,N),Ze=new go(M,Ne,Fe),Qe=new Uo(M,Ne,Fe),Fe.programs=Be.programs,j.capabilities=Pe,j.extensions=Ne,j.properties=P,j.renderLists=We,j.shadowMap=qe,j.state=N,j.info=Fe}ot(),S!==1009&&(re=new Jo(S,t.width,t.height,r,i));let st=new ml(j,M);this.xr=st,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(st.isPresenting){I(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),N.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),N.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){N.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(se!==null){let t=se.texture.format;e=C.has(t)}if(e){let e=se.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,M.clearBufferuiv(M.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,M.clearBufferiv(M.COLOR,0,E))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Je.dispose(),We.dispose(),Ge.dispose(),P.dispose(),Ie.dispose(),ze.dispose(),tt.dispose(),rt.dispose(),Be.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,gt),st.removeEventListener(`sessionend`,_t),vt.stop()};function ct(e){e.preventDefault(),nt(`WebGLRenderer: Context Lost.`),ie=!0}function lt(){nt(`WebGLRenderer: Context Restored.`),ie=!1;let e=Fe.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;ot(),Fe.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function ut(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){R(e),P.remove(e)}function R(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Dt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Le.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*je()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*je()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)it(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,n),e.side=0,e.needsUpdate=!0,wt(e,t,n),e.side=2):wt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=Ge.get(n),O.init(t),te.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];pt(a,n,e),r.add(a)}else pt(t,n,e),r.add(t)}),O=te.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new so;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,st.setAnimationLoop(e),e===null?vt.stop():vt.start()},st.addEventListener(`sessionstart`,gt),st.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;let n=st.enabled===!0&&st.isPresenting===!0,r=re!==null&&(se===null||n)&&re.begin(j,se);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,se),O=Ge.get(e,te.length),O.init(t),te.push(O),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,Ye,t.reversedDepth),Te=this.localClippingEnabled,we=Ke.init(this.clippingPlanes,Te),D=We.get(e,ee.length),D.init(),ee.push(D),st.enabled===!0&&st.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,j.sortObjects)}yt(e,t,0,j.sortObjects),D.finish(),j.sortObjects===!0&&D.sort(ve,ye),Ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ae&&Je.addToRenderList(D,e),this.info.render.frame++,we===!0&&Ke.beginShadows();let i=O.state.shadowsArray;if(qe.render(i,e,t),we===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&re.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ae&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(D,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ae&&Je.render(e),bt(D,e,t)}se!==null&&oe===0&&(F.updateMultisampleRenderTarget(se),F.updateRenderTargetMipmap(se)),r&&re.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),tt.resetDefaultState(),ce=-1,le=null,te.pop(),te.length>0?(O=te[te.length-1],we===!0&&Ke.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,ee.pop(),D=ee.length>0?ee[ee.length-1]:null};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Ce.intersectsSprite(e)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let t=ze.update(e),i=e.material;i.visible&&D.push(e,t,i,n,Oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ce.intersectsObject(e))){let t=ze.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&D.push(e,t,s,n,Oe.z,o)}}else i.visible&&D.push(e,t,i,n,Oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),we===!0&&Ke.setGlobalState(j.clippingPlanes,n),r&&N.viewport(ue.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:H.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(pe),me=j.getClearAlpha(),me<1&&j.setClearColor(16777215,.5),j.clear(),Ae&&Je.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),we===!0&&Ke.setGlobalState(j.clippingPlanes,r),St(e,n,r),F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(pe,me),p!==void 0&&(r.viewport=p),j.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=ke);let r=P.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Be.getUniforms(e),e.onBeforeCompile(s,j),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Et(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=tc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=ke),F.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=se===null?j.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ue,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=O.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===ce;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h?v.morphTargetsCount!==_&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(N.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),S||le!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(M,`projectionMatrix`,e.projectionMatrix),T.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(M,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,F),y.state.spotShadowMap.length>0&&T.setValue(M,`spotShadowMap`,y.state.spotShadowMap,F),y.state.pointShadowMap.length>0&&T.setValue(M,`pointShadowMap`,y.state.pointShadowMap,F)),i.isSkinnedMesh){T.setOptional(M,i,`bindMatrix`),T.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(M,`boneTexture`,e.boneTexture,F))}i.isBatchedMesh&&(T.setOptional(M,i,`batchingTexture`),T.setValue(M,`batchingTexture`,i._matricesTexture,F),T.setOptional(M,i,`batchingIdTexture`),T.setValue(M,`batchingIdTexture`,i._indirectTexture,F),T.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(M,`batchingColorTexture`,i._colorsTexture,F));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=xl()),C&&(T.setValue(M,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&Ve.refreshFogUniforms(E,a),Ve.refreshMaterialUniforms(E,r,_e,ge,O.state.transmissionRenderTarget[e.id]),tc.upload(M,Tt(v),E,F)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(tc.upload(M,Tt(v),E,F),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(M,`center`,i.center),T.setValue(M,`modelViewMatrix`,i.modelViewMatrix),T.setValue(M,`normalMatrix`,i.normalMatrix),T.setValue(M,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let At=M.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){se=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,N.viewport(ue),N.scissor(de),N.setScissorTest(fe),ce=-1;return}else if(o.__webglFramebuffer===void 0)F.setupRenderTarget(e);else if(o.__hasExternalTextures)F.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);F.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&F.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=At),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(ue),N.scissor(de),N.setScissorTest(fe),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}ce=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(c)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Pe.textureTypeReadable(l)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=se===null?null:P.get(se).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Pe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,et.convert(l),et.convert(u),0);let f=se===null?null:P.get(se).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,f);let p=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await at(M,p,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(d),M.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;F.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()};let jt=M.createFramebuffer(),Mt=M.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(F.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(F.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(F.setTexture2D(t,0),v=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(M.UNPACK_ROW_LENGTH),b=M.getParameter(M.UNPACK_IMAGE_HEIGHT),x=M.getParameter(M.UNPACK_SKIP_PIXELS),S=M.getParameter(M.UNPACK_SKIP_ROWS),C=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,l),M.pixelStorei(M.UNPACK_SKIP_ROWS,u),M.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,jt),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,Mt);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(M.UNPACK_ROW_LENGTH,y),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(M.UNPACK_SKIP_PIXELS,x),M.pixelStorei(M.UNPACK_SKIP_ROWS,S),M.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&F.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?F.setTextureCube(e,0):e.isData3DTexture?F.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?F.setTexture2DArray(e,0):F.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ae=0,oe=0,se=null,N.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=H._getDrawingBufferColorSpace(e),t.unpackColorSpace=H._getUnpackColorSpace()}},Cl=typeof self<`u`?self:{};function wl(e,t){t:{for(var n=[`CLOSURE_FLAGS`],r=Cl,i=0;i<n.length;i++)if((r=r[n[i]])==null){n=null;break t}n=r}return(e=n&&n[e])??t}function Tl(){throw Error(`Invalid UTF8`)}function El(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Dl,Ol,kl=typeof TextDecoder<`u`,Al,jl=typeof TextEncoder<`u`;function Ml(e){if(jl)e=(Al||=new TextEncoder).encode(e);else{let n=0,r=new Uint8Array(3*e.length);for(let i=0;i<e.length;i++){var t=e.charCodeAt(i);if(t<128)r[n++]=t;else{if(t<2048)r[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&i<e.length){let a=e.charCodeAt(++i);if(a>=56320&&a<=57343){t=1024*(t-55296)+a-56320+65536,r[n++]=t>>18|240,r[n++]=t>>12&63|128,r[n++]=t>>6&63|128,r[n++]=63&t|128;continue}i--}t=65533}r[n++]=t>>12|224,r[n++]=t>>6&63|128}r[n++]=63&t|128}}e=n===r.length?r:r.subarray(0,n)}return e}function Nl(e){Cl.setTimeout((()=>{throw e}),0)}var Pl,Fl=wl(610401301,!1),Il=wl(748402147,!0),Ll=wl(824648567,!0),Rl=wl(824656860,wl(1,!0));function zl(){var e=Cl.navigator;return(e&&=e.userAgent)?e:``}var Bl=Cl.navigator;function Vl(e){return Vl[` `](e),e}Pl=Bl&&Bl.userAgentData||null,Vl[` `]=function(){};var Hl={},Ul=null;function Wl(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):`=.`.indexOf(e[t-1])!=-1&&(n=`=.`.indexOf(e[t-2])==-1?n-1:n-2);let r=new Uint8Array(n),i=0;return function(e,t){function n(t){for(;r<e.length;){let t=e.charAt(r++),n=Ul[t];if(n!=null)return n;if(!/^[\s\xa0]*$/.test(t))throw Error(`Unknown base64 encoding at char: `+t)}return t}Gl();let r=0;for(;;){let e=n(-1),r=n(0),i=n(64),a=n(64);if(a===64&&e===-1)break;t(e<<2|r>>4),i!=64&&(t(r<<4&240|i>>2),a!=64&&t(i<<6&192|a))}}(e,(function(e){r[i++]=e})),i===n?r:r.subarray(0,i)}function Gl(){if(!Ul){Ul={};var e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(``),t=[`+/=`,`+/`,`-_=`,`-_.`,`-_`];for(let n=0;n<5;n++){let r=e.concat(t[n].split(``));Hl[n]=r;for(let e=0;e<r.length;e++){let t=r[e];Ul[t]===void 0&&(Ul[t]=e)}}}}var Kl=typeof Uint8Array<`u`,ql=!(!(Fl&&Pl&&Pl.brands.length>0)&&(zl().indexOf(`Trident`)!=-1||zl().indexOf(`MSIE`)!=-1))&&typeof btoa==`function`,Jl=/[-_.]/g,Yl={"-":`+`,_:`/`,".":`=`};function Xl(e){return Yl[e]||``}function Zl(e){if(!ql)return Wl(e);e=Jl.test(e)?e.replace(Jl,Xl):e,e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Ql(e){return Kl&&e!=null&&e instanceof Uint8Array}var $l={};function eu(){return ru||=new nu(null,$l)}function tu(e){au($l);var t=e.g;return(t=t==null||Ql(t)?t:typeof t==`string`?Zl(t):null)==null?t:e.g=t}var nu=class{h(){return new Uint8Array(tu(this)||0)}constructor(e,t){if(au(t),this.g=e,e!=null&&e.length===0)throw Error(`ByteString should be constructed with non-empty values`)}},ru,iu;function au(e){if(e!==$l)throw Error(`illegal external caller`)}function ou(e,t){e.__closure__error__context__984382||={},e.__closure__error__context__984382.severity=t}function su(e){return ou(e=Error(e),`warning`),e}function cu(e,t){if(e!=null){var n=iu??={},r=n[e]||0;r>=t||(n[e]=r+1,ou(e=Error(),`incident`),Nl(e))}}function lu(){return typeof BigInt==`function`}var uu=typeof Symbol==`function`&&typeof Symbol()==`symbol`;function du(e,t,n=!1){return typeof Symbol==`function`&&typeof Symbol()==`symbol`?n&&Symbol.for&&e?Symbol.for(e):e==null?Symbol():Symbol(e):t}var fu=du(`jas`,void 0,!0),pu=du(void 0,`0di`),mu=du(void 0,`1oa`),hu=du(void 0,Symbol()),gu=du(void 0,`0ub`),_u=du(void 0,`0ubs`),vu=du(void 0,`0ubsb`),yu=du(void 0,`0actk`),bu=du(`m_m`,`Pa`,!0),xu=du(),Su={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Cu=Object.defineProperties,K=uu?fu:`Ga`,wu,Tu=[];function Eu(e,t){uu||K in e||Cu(e,Su),e[K]|=t}function Du(e,t){uu||K in e||Cu(e,Su),e[K]=t}function Ou(e){return Eu(e,34),e}function ku(e){return Eu(e,8192),e}Du(Tu,7),wu=Object.freeze(Tu);var Au={};function ju(e,t){return t===void 0?e.h!==Mu&&!!(2&(0|e.v[K])):!!(2&t)&&e.h!==Mu}var Mu={};function Nu(e,t){if(e!=null){if(typeof e==`string`)e=e?new nu(e,$l):eu();else if(e.constructor!==nu)if(Ql(e))e=e.length?new nu(new Uint8Array(e),$l):eu();else{if(!t)throw Error();e=void 0}}return e}var Pu=class{constructor(e,t,n){this.g=e,this.h=t,this.l=n}next(){let e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}},Fu=Object.freeze({});function Iu(e,t,n){let r=128&t?0:-1,i=e.length;var a;(a=!!i)&&(a=(a=e[i-1])!=null&&typeof a==`object`&&a.constructor===Object);let o=i+(a?-1:0);for(t=128&t?1:0;t<o;t++)n(t-r,e[t]);if(a){e=e[i-1];for(let t in e)!isNaN(t)&&n(+t,e[t])}}var Lu={};function Ru(e){return 128&e?Lu:void 0}function zu(e){return e.Na=!0,e}var Bu=zu((e=>typeof e==`number`)),Vu=zu((e=>typeof e==`string`)),Hu=zu((e=>typeof e==`boolean`)),Uu=typeof Cl.BigInt==`function`&&typeof Cl.BigInt(0)==`bigint`;function Wu(e){var t=e;if(Vu(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Bu(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Uu?BigInt(e):e=Hu(e)?e?`1`:`0`:Vu(e)?e.trim()||`0`:String(e)}var Gu=zu((e=>Uu?e>=qu&&e<=Yu:e[0]===`-`?Xu(e,Ku):Xu(e,Ju))),Ku=(-(2**53-1)).toString(),qu=Uu?BigInt(-(2**53-1)):void 0,Ju=(2**53-1).toString(),Yu=Uu?BigInt(2**53-1):void 0;function Xu(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r>i)return!1;if(r<i)return!0}}var Zu=typeof Uint8Array.prototype.slice==`function`,Qu,$u=0,ed=0;function td(e){let t=e>>>0;$u=t,ed=(e-t)/4294967296>>>0}function nd(e){if(e<0){td(-e);let[t,n]=fd($u,ed);$u=t>>>0,ed=n>>>0}else td(e)}function rd(e){let t=Qu||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),ed=0,$u=t.getUint32(0,!0)}function id(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:cd(e,t)}function ad(e,t){return Wu(lu()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):cd(e,t))}function od(e,t){let n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=id(e,t))==`number`?n?-e:e:n?`-`+e:e}function sd(e,t){return lu()?Wu(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):Wu(ud(e,t))}function cd(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=``+(4294967296*t+e);else lu()?n=``+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+ld(n)+ld(e));return n}function ld(e){return e=String(e),`0000000`.slice(e.length)+e}function ud(e,t){if(2147483648&t)if(lu())e=``+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,r]=fd(e,t);e=`-`+cd(n,r)}else e=cd(e,t);return e}function dd(e){if(e.length<16)nd(Number(e));else if(lu())e=BigInt(e),$u=Number(e&BigInt(4294967295))>>>0,ed=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]===`-`);ed=$u=0;let n=e.length;for(let r=t,i=(n-t)%6+t;i<=n;r=i,i+=6){let t=Number(e.slice(r,i));ed*=1e6,$u=1e6*$u+t,$u>=4294967296&&(ed+=Math.trunc($u/4294967296),ed>>>=0,$u>>>=0)}if(t){let[e,t]=fd($u,ed);$u=e,ed=t}}}function fd(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function pd(e){return Array.prototype.slice.call(e)}var md=typeof BigInt==`function`?BigInt.asIntN:void 0,hd=typeof BigInt==`function`?BigInt.asUintN:void 0,gd=Number.isSafeInteger,_d=Number.isFinite,vd=Math.trunc,yd=Wu(0);function bd(e){if(e!=null&&typeof e!=`number`)throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function xd(e){return e==null||typeof e==`number`?e:e===`NaN`||e===`Infinity`||e===`-Infinity`?Number(e):void 0}function Sd(e){if(e!=null&&typeof e!=`boolean`){var t=typeof e;throw Error(`Expected boolean but got ${t==`object`?e?Array.isArray(e)?`array`:t:`null`:t}: ${e}`)}return e}function Cd(e){return e==null||typeof e==`boolean`?e:typeof e==`number`?!!e:void 0}var wd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Td(e){switch(typeof e){case`bigint`:return!0;case`number`:return _d(e);case`string`:return wd.test(e);default:return!1}}function Ed(e){if(e==null)return e;if(typeof e==`string`&&e)e=+e;else if(typeof e!=`number`)return;return _d(e)?0|e:void 0}function Dd(e){if(e==null)return e;if(typeof e==`string`&&e)e=+e;else if(typeof e!=`number`)return;return _d(e)?e>>>0:void 0}function Od(e){let t=e.length;return(e[0]===`-`?t<20||t===20&&e<=`-9223372036854775808`:t<19||t===19&&e<=`9223372036854775807`)?e:(dd(e),ud($u,ed))}function kd(e){return e=vd(e),gd(e)||(nd(e),e=od($u,ed)),e}function Ad(e){var t=vd(Number(e));return gd(t)?String(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),Od(e))}function jd(e){var t=vd(Number(e));return gd(t)?Wu(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),lu()?Wu(md(64,BigInt(e))):Wu(Od(e)))}function Md(e){return gd(e)?e=Wu(kd(e)):(e=vd(e),gd(e)?e=String(e):(nd(e),e=ud($u,ed)),e=Wu(e)),e}function Nd(e){return e==null?e:typeof e==`bigint`?(Gu(e)?e=Number(e):(e=md(64,e),e=Gu(e)?Number(e):String(e)),e):Td(e)?typeof e==`number`?kd(e):Ad(e):void 0}function Pd(e){let t=typeof e;return e==null?e:t===`bigint`?Wu(md(64,e)):Td(e)?t===`string`?jd(e):Md(e):void 0}function Fd(e){if(typeof e!=`string`)throw Error();return e}function Id(e){if(e!=null&&typeof e!=`string`)throw Error();return e}function Ld(e){return e==null||typeof e==`string`?e:void 0}function Rd(e,t,n,r){return e!=null&&e[bu]===Au?e:Array.isArray(e)?((r=(n=0|e[K])|32&r|2&r)!==n&&Du(e,r),new t(e)):(n?2&r?((e=t[pu])||(Ou((e=new t).v),e=t[pu]=e),t=e):t=new t:t=void 0,t)}function zd(e,t,n){if(t)t:{if(!Td(t=e))throw su(`int64`);switch(typeof t){case`string`:t=jd(t);break t;case`bigint`:t=Wu(md(64,t));break t;default:t=Md(t)}}else t=Pd(e);return(e=t)??(n?yd:void 0)}var Bd={},Vd=function(){try{return Vl(new class extends Map{constructor(){super()}}),!1}catch{return!0}}(),Hd=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}},Ud=Vd?(Object.setPrototypeOf(Hd.prototype,Map.prototype),Object.defineProperties(Hd.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Hd):class extends Map{constructor(){super()}};function Wd(e){return e}function Gd(e){if(2&e.J)throw Error(`Cannot mutate an immutable Map`)}var Kd=class extends Ud{constructor(e,t,n=Wd,r=Wd){super(),this.J=0|e[K],this.K=t,this.S=n,this.fa=this.K?qd:r;for(let i=0;i<e.length;i++){let a=e[i],o=n(a[0],!1,!0),s=a[1];t?s===void 0&&(s=null):s=r(a[1],!1,!0,void 0,void 0,this.J),super.set(o,s)}}V(e){return ku(Array.from(super.entries(),e))}clear(){Gd(this),super.clear()}delete(e){return Gd(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Pu(e,Jd,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Pu(e,Kd.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,r,i)=>{e.call(t,i.get(r),r,i)})):super.forEach(e,t)}set(e,t){return Gd(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function qd(e,t,n,r,i,a){return e=Rd(e,r,n,a),i&&(e=gf(e)),e}function Jd(e){return[e,this.get(e)]}var Yd;function Xd(){return Yd||=new Kd(Ou([]),void 0,void 0,void 0,Bd)}function Zd(e){return hu?e[hu]:void 0}function Qd(e,t){for(let n in e)!isNaN(n)&&t(e,+n,e[n])}Kd.prototype.toJSON=void 0;var $d=class{},ef={Ka:!0};function tf(e,t){t<100||cu(_u,1)}function nf(e,t,n,r){let i=r!==void 0;r=!!r;var a,o=hu;!i&&uu&&o&&(a=e[o])&&Qd(a,tf),o=[];var s=e.length;let c;a=4294967295;let l=!1,u=!!(64&t),d=u?128&t?0:-1:void 0;1&t||(c=s&&e[s-1],typeof c==`object`&&c&&c.constructor===Object?a=--s:c=void 0,!u||128&t||i||(l=!0,a=a-d+d)),t=void 0;for(var f=0;f<s;f++){let i=e[f];if(i!=null&&(i=n(i,r))!=null)if(u&&f>=a){let e=f-d;(t??={})[e]=i}else o[f]=i}if(c)for(let e in c){if((s=c[e])==null||(s=n(s,r))==null)continue;let i;f=+e,u&&!Number.isNaN(f)&&(i=f+d)<a?o[i]=s:(t??={})[e]=s}return t&&(l?o.push(t):o[a]=t),i&&hu&&(e=Zd(e))&&e instanceof $d&&(o[hu]=function(e){let t=new $d;return Qd(e,((e,n,r)=>{t[n]=pd(r)})),t.da=e.da,t}(e)),o}function rf(e){return e[0]=af(e[0]),e[1]=af(e[1]),e}function af(e){switch(typeof e){case`number`:return Number.isFinite(e)?e:``+e;case`bigint`:return Gu(e)?Number(e):``+e;case`boolean`:return e?1:0;case`object`:if(Array.isArray(e)){var t=0|e[K];return e.length===0&&1&t?void 0:nf(e,t,af)}if(e!=null&&e[bu]===Au)return of(e);if(e instanceof nu){if((t=e.g)==null)e=``;else if(typeof t==`string`)e=t;else{if(ql){for(var n=``,r=0,i=t.length-10240;r<i;)n+=String.fromCharCode.apply(null,t.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?t.subarray(r):t),t=btoa(n)}else{n===void 0&&(n=0),Gl(),n=Hl[n],r=Array(Math.floor(t.length/3)),i=n[64]||``;let e=0,l=0;for(;e<t.length-2;e+=3){var a=t[e],o=t[e+1],s=t[e+2],c=n[a>>2];a=n[(3&a)<<4|o>>4],o=n[(15&o)<<2|s>>6],s=n[63&s],r[l++]=c+a+o+s}switch(c=0,s=i,t.length-e){case 2:s=n[(15&(c=t[e+1]))<<2]||i;case 1:t=t[e],r[l]=n[t>>2]+n[(3&t)<<4|c>>4]+s+i}t=r.join(``)}e=e.g=t}return e}return e instanceof Kd?e=e.size===0?void 0:e.V(rf):void 0}return e}function of(e){return nf(e=e.v,0|e[K],af)}var sf,cf;function lf(e,t){return uf(e,t[0],t[1])}function uf(e,t,n,r=0){if(e==null){var i=32;n?(e=[n],i|=128):e=[],t&&(i=-16760833&i|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error(`narr`);if(i=0|e[K],Il&&1&i)throw Error(`rfarr`);if(2048&i&&!(2&i)&&function(){if(Il)throw Error(`carr`);cu(yu,5)}(),256&i)throw Error(`farr`);if(64&i)return(i|r)!==i&&Du(e,i|r),e;if(n&&(i|=128,n!==e[0]))throw Error(`mid`);t:{i|=64;var a=(n=e).length;if(a){var o=a-1;let e=n[o];if(typeof e==`object`&&e&&e.constructor===Object){if((o-=t=128&i?0:-1)>=1024)throw Error(`pvtlmt`);for(var s in e)(a=+s)<o&&(n[a+t]=e[s],delete e[s]);i=-16760833&i|(1023&o)<<14;break t}}if(t){if((s=Math.max(t,a-(128&i?0:-1)))>1024)throw Error(`spvt`);i=-16760833&i|(1023&s)<<14}}}return Du(e,64|i|r),e}function df(e,t){if(typeof e!=`object`)return e;if(Array.isArray(e)){var n=0|e[K];return e.length===0&&1&n?void 0:ff(e,n,t)}if(e!=null&&e[bu]===Au)return mf(e);if(e instanceof Kd){if(2&(t=e.J))return e;if(!e.size)return;if(n=Ou(e.V()),e.K)for(e=0;e<n.length;e++){let r=n[e],i=r[1];i=typeof i!=`object`||!i?void 0:i!=null&&i[bu]===Au?mf(i):Array.isArray(i)?ff(i,0|i[K],!!(32&t)):void 0,r[1]=i}return n}return e instanceof nu?e:void 0}function ff(e,t,n){return 2&t||(!n||4096&t||16&t?e=hf(e,t,!1,n&&!(16&t)):(Eu(e,34),4&t&&Object.freeze(e))),e}function pf(e,t,n){return e=new e.constructor(t),n&&(e.h=Mu),e.m=Mu,e}function mf(e){let t=e.v,n=0|t[K];return ju(e,n)?e:bf(e,t,n)?pf(e,t):hf(t,n)}function hf(e,t,n,r){return r??=!!(34&t),e=nf(e,t,df,r),r=32,n&&(r|=2),Du(e,t=16769217&t|r),e}function gf(e){let t=e.v,n=0|t[K];return ju(e,n)?bf(e,t,n)?pf(e,t,!0):new e.constructor(hf(t,n,!1)):e}function _f(e){if(e.h!==Mu)return!1;var t=e.v;return Eu(t=hf(t,0|t[K]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function vf(e){if(!_f(e)&&ju(e,0|e.v[K]))throw Error()}function yf(e,t){t===void 0&&(t=0|e[K]),32&t&&!(4096&t)&&Du(e,4096|t)}function bf(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Du(t,2|n),e.h=Mu,!0)}var xf=Wu(0),Sf={};function Cf(e,t,n,r,i){if((t=wf(e.v,t,n,i))!==null||r&&e.m!==Mu)return t}function wf(e,t,n,r){if(t===-1)return null;let i=t+(n?0:-1),a=e.length-1,o,s;if(!(a<1+(n?0:-1))){if(i>=a)if(o=e[a],typeof o==`object`&&o&&o.constructor===Object)n=o[t],s=!0;else{if(i!==a)return;n=o}else n=e[i];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return s?o[t]=r:e[i]=r,r}return n}}function Tf(e,t,n,r){vf(e),Ef(e=e.v,0|e[K],t,n,r)}function Ef(e,t,n,r,i){let a=n+(i?0:-1);var o=e.length-1;if(o>=1+(i?0:-1)&&a>=o){let i=e[o];if(typeof i==`object`&&i&&i.constructor===Object)return i[n]=r,t}return a<=o?(e[a]=r,t):(r!==void 0&&(n>=(o=(t??=0|e[K])>>14&1023||536870912)?r!=null&&(e[o+(i?0:-1)]={[n]:r}):e[a]=r),t)}function Df(){return Fu===void 0?2:4}function Of(e,t,n,r,i){let a=e.v,o=0|a[K];r=ju(e,o)?1:r,i=!!i||r===3,r===2&&_f(e)&&(a=e.v,o=0|a[K]);let s=(e=Af(a,t))===wu?7:0|e[K],c=jf(s,o);var l=!(4&c);if(l){4&c&&(e=pd(e),s=0,c=Jf(c,o),o=Ef(a,o,t,e));let r=0,i=0;for(;r<e.length;r++){let t=n(e[r]);t!=null&&(e[i++]=t)}i<r&&(e.length=i),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==s&&(Du(e,c),2&c&&Object.freeze(e)),kf(e,c,a,o,t,r,l,i)}function kf(e,t,n,r,i,a,o,s){let c=t;return a===1||a===4&&(2&t||!(16&t)&&32&r)?Mf(t)||((t|=!e.length||o&&!(4096&t)||32&r&&!(4096&t||16&t)?2:256)!==c&&Du(e,t),Object.freeze(e)):(a===2&&Mf(t)&&(e=pd(e),c=0,t=Jf(t,r),r=Ef(n,r,i,e)),Mf(t)||(s||(t|=16),t!==c&&Du(e,t))),2&t||!(4096&t||16&t)||yf(n,r),e}function Af(e,t,n){return e=wf(e,t,n),Array.isArray(e)?e:wu}function jf(e,t){return 2&t&&(e|=2),1|e}function Mf(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function Nf(e){return Nu(e,!0)}function Pf(e){e=pd(e);for(let t=0;t<e.length;t++){let n=e[t]=pd(e[t]);Array.isArray(n[1])&&(n[1]=Ou(n[1]))}return ku(e)}function Ff(e,t,n,r){vf(e),Ef(e=e.v,0|e[K],t,(r===`0`?Number(n)===0:n===r)?void 0:n)}function If(e,t,n){if(2&t)throw Error();let r=Ru(t),i=Af(e,n,r),a=i===wu?7:0|i[K],o=jf(a,t);return(2&o||Mf(o)||16&o)&&(o===a||Mf(o)||Du(i,o),i=pd(i),a=0,o=Jf(o,t),Ef(e,t,n,i,r)),o&=-13,o!==a&&Du(i,o),i}function Lf(e,t){var n=ng;return Bf(Rf(e=e.v),e,void 0,n)===t?t:-1}function Rf(e){if(uu)return e[mu]??(e[mu]=new Map);if(mu in e)return e[mu];let t=new Map;return Object.defineProperty(e,mu,{value:t}),t}function zf(e,t,n,r,i){let a=Rf(e),o=Bf(a,e,t,n,i);return o!==r&&(o&&(t=Ef(e,t,o,void 0,i)),a.set(n,r)),t}function Bf(e,t,n,r,i){let a=e.get(r);if(a!=null)return a;a=0;for(let e=0;e<r.length;e++){let o=r[e];wf(t,o,i)!=null&&(a!==0&&(n=Ef(t,n,a,void 0,i)),a=o)}return e.set(r,a),a}function Vf(e,t,n){let r=0|e[K],i=Ru(r),a=wf(e,n,i),o;if(a!=null&&a[bu]===Au){if(!ju(a))return _f(a),a.v;o=a.v}else Array.isArray(a)&&(o=a);if(o){let e=0|o[K];2&e&&(o=hf(o,e))}return o=lf(o,t),o!==a&&Ef(e,r,n,o,i),o}function Hf(e,t,n,r,i){let a=!1;if((r=wf(e,r,i,(e=>{let r=Rd(e,n,!1,t);return a=r!==e&&r!=null,r})))!=null)return a&&!ju(r)&&yf(e,t),r}function Uf(e,t,n,r){let i=e.v,a=0|i[K];if((t=Hf(i,a,t,n,r))==null)return t;if(a=0|i[K],!ju(e,a)){let o=gf(t);o!==t&&(_f(e)&&(i=e.v,a=0|i[K]),a=Ef(i,a,n,t=o,r),yf(i,a))}return t}function Wf(e,t,n,r,i,a,o,s){var c=ju(e,n);a=c?1:a,o=!!o||a===3,c=s&&!c,(a===2||c)&&_f(e)&&(n=0|(t=e.v)[K]);var l=(e=Af(t,i))===wu?7:0|e[K],u=jf(l,n);if(s=!(4&u)){var d=e,f=n;let t=!!(2&u);t&&(f|=2);let i=!t,a=!0,o=0,s=0;for(;o<d.length;o++){let e=Rd(d[o],r,!1,f);if(e instanceof r){if(!t){let t=ju(e);i&&=!t,a&&=t}d[s++]=e}}s<o&&(d.length=s),u|=4,u=a?-4097&u:4096|u,u=i?8|u:-9&u}if(u!==l&&(Du(e,u),2&u&&Object.freeze(e)),c&&!(8&u||!e.length&&(a===1||a===4&&(2&u||!(16&u)&&32&n)))){for(Mf(u)&&(e=pd(e),u=Jf(u,n),n=Ef(t,n,i,e)),r=e,c=u,l=0;l<r.length;l++)(d=r[l])!==(u=gf(d))&&(r[l]=u);c|=8,Du(e,u=c=r.length?4096|c:-4097&c)}return kf(e,u,t,n,i,a,s,o)}function Gf(e,t,n){let r=e.v;return Wf(e,r,0|r[K],t,n,Df(),!1,!0)}function Kf(e){return e??=void 0,e}function q(e,t,n,r,i){return Tf(e,n,r=Kf(r),i),r&&!ju(r)&&yf(e.v),e}function qf(e,t,n,r){t:{var i=r=Kf(r);vf(e);let a=e.v,o=0|a[K];if(i==null){let e=Rf(a);if(Bf(e,a,o,n)!==t)break t;e.set(n,0)}else o=zf(a,o,n,t);Ef(a,o,t,i)}r&&!ju(r)&&yf(e.v)}function Jf(e,t){return-273&(2&t?2|e:-3&e)}function Yf(e,t,n,r){var i=r;vf(e),e=Wf(e,r=e.v,0|r[K],n,t,2,!0),i??=new n,e.push(i),t=n=e===wu?7:0|e[K],(i=ju(i))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&Du(e,n),i||yf(r)}function Xf(e,t,n){return Ed(Cf(e,t,void 0,n))}function Zf(e){return(Rl?Cf(e,2,void 0,void 0,Pd):Pd(Cf(e,2)))??xf}function Qf(e,t){return Cf(e,t,void 0,void 0,xd)??0}function $f(e,t,n){if(n!=null){if(typeof n!=`number`||!_d(n))throw su(`int32`);n|=0}Tf(e,t,n)}function J(e,t,n){Tf(e,t,bd(n))}function ep(e,t,n){Ff(e,t,Id(n),``)}function tp(e,t,n){{vf(e);let o=e.v,s=0|o[K];if(n==null)Ef(o,s,t);else{var r=e=n===wu?7:0|n[K],i=Mf(e),a=i||Object.isFrozen(n);for(i||(e=0),a||=(n=pd(n),r=0,e=Jf(e,s),!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??(Rl?1024:0),i=0;i<n.length;i++){let t=n[i],o=Fd(t);Object.is(t,o)||(a&&=(n=pd(n),r=0,e=Jf(e,s),!1),n[i]=o)}e!==r&&(a&&(n=pd(n),e=Jf(e,s)),Du(n,e)),Ef(o,s,t,n)}}}function np(e,t,n){vf(e),Of(e,t,Ld,2,!0).push(Fd(n))}var rp=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function ip(e,t){if(typeof e==`string`)return new rp(Zl(e),t);if(Array.isArray(e))return new rp(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new rp(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new rp(e,!1);if(e.constructor===nu)return t=tu(e)||new Uint8Array,new rp(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new rp(e,!1);throw Error()}function ap(e,t){let n,r=0,i=0,a=0,o=e.h,s=e.g;do n=o[s++],r|=(127&n)<<a,a+=7;while(a<32&&128&n);if(a>32)for(i|=(127&n)>>4,a=3;a<32&&128&n;a+=7)n=o[s++],i|=(127&n)<<a;if(dp(e,s),!(128&n))return t(r>>>0,i>>>0);throw Error()}function op(e){let t=0,n=e.g,r=n+10,i=e.h;for(;n<r;){let r=i[n++];if(t|=r,!(128&r))return dp(e,n),!!(127&t)}throw Error()}function sp(e){let t=e.h,n=e.g,r=t[n++],i=127&r;if(128&r&&(r=t[n++],i|=(127&r)<<7,128&r&&(r=t[n++],i|=(127&r)<<14,128&r&&(r=t[n++],i|=(127&r)<<21,128&r&&(r=t[n++],i|=r<<28,128&r&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return dp(e,n),i}function cp(e){return sp(e)>>>0}function lp(e){var t=e.h;let n=e.g;var r=t[n],i=t[n+1];let a=t[n+2];return t=t[n+3],dp(e,e.g+4),e=2*((i=(r<<0|i<<8|a<<16|t<<24)>>>0)>>31)+1,r=i>>>23&255,i&=8388607,r==255?i?NaN:e*(1/0):r==0?1401298464324817e-60*e*i:e*2**(r-150)*(i+8388608)}function up(e){return sp(e)}function dp(e,t){if(e.g=t,t>e.l)throw Error()}function fp(e,t){if(t<0)throw Error();let n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function pp(e,t){if(t==0)return eu();var n=fp(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array:Zu?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?eu():new nu(n,$l)}var mp=[];function hp(e,t,n,r){if(wp.length){let i=wp.pop();return i.o(r),i.g.init(e,t,n,r),i}return new Cp(e,t,n,r)}function gp(e){e.g.clear(),e.l=-1,e.h=-1,wp.length<100&&wp.push(e)}function _p(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=cp(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function vp(e){switch(e.h){case 0:e.h==0?op(e.g):vp(e);break;case 1:dp(e=e.g,e.g+8);break;case 2:if(e.h!=2)vp(e);else{var t=cp(e.g);dp(e=e.g,e.g+t)}break;case 5:dp(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!_p(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}vp(e)}break;default:throw Error()}}function yp(e,t,n){let r=e.g.l;var i=cp(e.g);let a=(i=e.g.g+i)-r;if(a<=0&&(e.g.l=i,n(t,e,void 0,void 0,void 0),a=i-e.g.g),a)throw Error();return e.g.g=i,e.g.l=r,t}function bp(e){var t=cp(e.g),n=fp(e=e.g,t);if(e=e.h,kl){var r,i=e;(r=Ol)||(r=Ol=new TextDecoder(`utf-8`,{fatal:!0})),t=n+t,i=n===0&&t===i.length?i:i.subarray(n,t);try{var a=r.decode(i)}catch(e){if(Dl===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),Dl=!0}catch{Dl=!1}}throw!Dl&&(Ol=void 0),e}}else{t=(a=n)+t,n=[];let s,c=null;for(;a<t;){var o=e[a++];o<128?n.push(o):o<224?a>=t?Tl():(s=e[a++],o<194||(192&s)!=128?(a--,Tl()):n.push((31&o)<<6|63&s)):o<240?a>=t-1?Tl():(s=e[a++],(192&s)!=128||o===224&&s<160||o===237&&s>=160||(192&(r=e[a++]))!=128?(a--,Tl()):n.push((15&o)<<12|(63&s)<<6|63&r)):o<=244?a>=t-2?Tl():(s=e[a++],(192&s)!=128||s-144+(o<<28)>>30||(192&(r=e[a++]))!=128||(192&(i=e[a++]))!=128?(a--,Tl()):(o=(7&o)<<18|(63&s)<<12|(63&r)<<6|63&i,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Tl(),n.length>=8192&&(c=El(c,n),n.length=0)}a=El(c,n)}return a}function xp(e){let t=cp(e.g);return pp(e.g,t)}function Sp(e,t,n){var r=cp(e.g);for(r=e.g.g+r;e.g.g<r;)n.push(t(e.g))}var Cp=class{constructor(e,t,n,r){if(mp.length){let i=mp.pop();i.init(e,t,n,r),e=i}else e=new class{constructor(e,t,n,r){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(e,t,n,r)}init(e,t,n,{Y:r=!1,ea:i=!1}={}){this.Y=r,this.ea=i,e&&(e=ip(e,this.ea),this.h=e.buffer,this.j=e.g,this.m=t||0,this.l=n===void 0?this.h.length:this.m+n,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,r);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(r)}o({ha:e=!1}={}){this.ha=e}},wp=[];function Tp(e){return e?/^\d+$/.test(e)?(dd(e),new Ep($u,ed)):null:Dp||=new Ep(0,0)}var Ep=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},Dp;function Op(e){return e?/^-?\d+$/.test(e)?(dd(e),new kp($u,ed)):null:Ap||=new kp(0,0)}var kp=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},Ap;function jp(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Mp(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Np(e,t){if(t>=0)Mp(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Pp(e){var t=$u;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Fp(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Ip(e,t,n){Mp(e.g,8*t+n)}function Lp(e,t){return Ip(e,t,2),t=e.g.end(),Fp(e,t),t.push(e.h),t}function Rp(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function zp(e,t,n){Ip(e,t,2),Mp(e.g,n.length),Fp(e,e.g.end()),Fp(e,n)}function Bp(e,t,n,r){n!=null&&(t=Lp(e,t),r(n,e),Rp(e,t))}function Vp(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Hp=Vp(),Up=Vp(),Wp=Vp(),Gp=Vp(),Kp=Vp(),qp=Vp(),Jp=Vp(),Yp=Vp(),Xp=Vp(),Zp=Vp();function Qp(e,t,n){var r=e.v;hu&&hu in r&&(r=r[hu])&&delete r[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var Y=class{constructor(e,t){this.v=uf(e,t,void 0,2048)}toJSON(){return of(this)}j(){var e=Jg,t=this.v,n=e.g,r=hu;if(uu&&r&&t[r]?.[n]!=null&&cu(gu,3),t=e.g,xu&&hu&&xu===void 0&&(r=(n=this.v)[hu])&&(r=r.da))try{r(n,t,ef)}catch(e){Nl(e)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){let e=this.v,t=0|e[K];return bf(this,e,t)?pf(this,e,!0):new this.constructor(hf(e,t,!1))}};Y.prototype[bu]=Au,Y.prototype.toString=function(){return this.v.toString()};var $p=class{constructor(e,t,n){this.g=e,this.h=t,e=Hp,this.l=!!e&&n===e||!1}};function em(e,t){return new $p(e,t,Hp)}function tm(e,t,n,r,i){Bp(e,n,pm(t,r),i)}var nm=em((function(e,t,n,r,i){return e.h===2&&(yp(e,Vf(t,r,n),i),!0)}),tm),rm=em((function(e,t,n,r,i){return e.h===2&&(yp(e,Vf(t,r,n),i),!0)}),tm),im=Symbol(),am=Symbol(),om=Symbol(),sm=Symbol(),cm=Symbol(),lm,um;function dm(e,t,n,r){var i=r[e];if(i)return i;(i={}).qa=r,i.T=function(e){switch(typeof e){case`boolean`:return sf||=[0,void 0,!0];case`number`:return e>0?void 0:e===0?cf||=[0,void 0]:[-e,void 0];case`string`:return[0,e];case`object`:return e}}(r[0]);var a=r[1];let o=1;a&&a.constructor===Object&&(i.ba=a,typeof(a=r[++o])==`function`&&(i.ma=!0,lm??=a,um??=r[o+1],a=r[o+=2]));let s={};for(;a&&Array.isArray(a)&&a.length&&typeof a[0]==`number`&&a[0]>0;){for(var c=0;c<a.length;c++)s[a[c]]=a;a=r[++o]}for(c=1;a!==void 0;){let e;typeof a==`number`&&(c+=a,a=r[++o]);var l=void 0;if(a instanceof $p?e=a:(e=nm,o--),e?.l){a=r[++o],l=r;var u=o;typeof a==`function`&&(a=a(),l[u]=a),l=a}for(u=c+1,typeof(a=r[++o])==`number`&&a<0&&(u-=a,a=r[++o]);c<u;c++){let r=s[c];l?n(i,c,e,l,r):t(i,c,e,r)}}return r[e]=i}function fm(e){return Array.isArray(e)?e[0]instanceof $p?e:[rm,e]:[e,void 0]}function pm(e,t){return e instanceof Y?e.v:Array.isArray(e)?lf(e,t):void 0}function mm(e,t,n,r){let i=n.g;e[t]=r?(e,t,n)=>i(e,t,n,r):i}function hm(e,t,n,r,i){let a=n.g,o,s;e[t]=(e,t,n)=>a(e,t,n,s||=dm(am,mm,hm,r).T,o||=gm(r),i)}function gm(e){let t=e[om];if(t!=null)return t;let n=dm(am,mm,hm,e);return t=n.ma?(e,t)=>lm(e,t,n):(e,t)=>{for(;_p(t)&&t.h!=4;){var r=t.l,i=n[r];if(i==null){var a=n.ba;(a&&=a[r])&&(a=vm(a))!=null&&(i=n[r]=a)}if(i==null||!i(t,e,r)){if(i=(a=t).m,vp(a),a.ha)var o=void 0;else o=a.g.g-i,a.g.g=i,o=pp(a.g,o);i=void 0,a=e,o&&((i=a[hu]??(a[hu]=new $d))[r]??(i[r]=[])).push(o)}}return(e=Zd(e))&&(e.da=n.qa[cm]),!0},e[om]=t,e[cm]=_m.bind(e),t}function _m(e,t,n,r){var i=this[am];let a=this[om],o=lf(void 0,i.T),s=Zd(e);if(s){var c=!1,l=i.ba;if(l){if(i=(t,n,i)=>{if(i.length!==0)if(l[n])for(let e of i){t=hp(e);try{c=!0,a(o,t)}finally{gp(t)}}else r?.(e,n,i)},t==null)Qd(s,i);else if(s!=null){let e=s[t];e&&i(s,t,e)}if(c){let r=0|e[K];if(2&r&&2048&r&&!n?.Ka)throw Error();let i=Ru(r),a=(t,a)=>{if(wf(e,t,i)!=null){if(n?.Qa===1)return;throw Error()}a!=null&&(r=Ef(e,r,t,a,i)),delete s[t]};t==null?Iu(o,0|o[K],((e,t)=>{a(e,t)})):a(t,wf(o,t,i))}}}}function vm(e){let t=(e=fm(e))[0].g;if(e=e[1]){let n=gm(e),r=dm(am,mm,hm,e).T;return(e,i,a)=>t(e,i,a,r,n)}return t}function ym(e,t,n){e[t]=n.h}function bm(e,t,n,r){let i,a,o=n.h;e[t]=(e,t,n)=>o(e,t,n,a||=dm(im,ym,bm,r).T,i||=xm(r))}function xm(e){let t=e[sm];if(!t){let n=dm(im,ym,bm,e);t=(e,t)=>Sm(e,t,n),e[sm]=t}return t}function Sm(e,t,n){Iu(e,0|e[K],((e,r)=>{if(r!=null){var i=function(e,t){var n=e[t];if(n)return n;if((n=e.ba)&&(n=n[t])){var r=(n=fm(n))[0].h;if(n=n[1]){let t=xm(n),i=dm(im,ym,bm,n).T;n=e.ma?um(i,t):(e,n,a)=>r(e,n,a,i,t)}else n=r;return e[t]=n}}(n,e);i?i(t,r,e):e<500||cu(vu,3)}})),(e=Zd(e))&&Qd(e,((e,n,r)=>{for(Fp(t,t.g.end()),e=0;e<r.length;e++)Fp(t,tu(r[e])||new Uint8Array)}))}var Cm=Wu(0);function wm(e,t){if(Array.isArray(t)){var n=0|t[K];if(4&n)return t;for(var r=0,i=0;r<t.length;r++){let n=e(t[r]);n!=null&&(t[i++]=n)}return i<r&&(t.length=i),(e=-1537&(5|n))!==n&&Du(t,e),2&e&&Object.freeze(t),t}}function Tm(e,t,n){return new $p(e,t,n)}function Em(e,t,n){return new $p(e,t,n)}function Dm(e,t,n){Ef(e,0|e[K],t,n,Ru(0|e[K]))}var Om=em((function(e,t,n,r,i){if(e.h!==2)return!1;if(e=pd(e=yp(e,lf([void 0,void 0],r),i)),i=Ru(r=0|t[K]),2&r)throw Error();let a=wf(t,n,i);if(a instanceof Kd)2&a.J?(a=a.V(),a.push(e),Ef(t,r,n,a,i)):a.Ma(e);else if(Array.isArray(a)){var o=0|a[K];8192&o||Du(a,o|=8192),2&o&&(a=Pf(a),Ef(t,r,n,a,i)),a.push(e)}else Ef(t,r,n,ku([e]),i);return!0}),(function(e,t,n,r,i){if(t instanceof Kd)t.forEach(((t,a)=>{Bp(e,n,lf([a,t],r),i)}));else if(Array.isArray(t)){for(let a=0;a<t.length;a++){let o=t[a];Array.isArray(o)&&Bp(e,n,lf(o,r),i)}ku(t)}}));function km(e,t,n){(t=xd(t))!=null&&(Ip(e,n,5),e=e.g,rd(t),Pp(e))}function Am(e,t,n){if(t=function(e){if(e==null)return e;let t=typeof e;if(t===`bigint`)return String(md(64,e));if(Td(e)){if(t===`string`)return Ad(e);if(t===`number`)return kd(e)}}(t),t!=null&&(typeof t==`string`&&Op(t),t!=null))switch(Ip(e,n,0),typeof t){case`number`:e=e.g,nd(t),jp(e,$u,ed);break;case`bigint`:n=BigInt.asUintN(64,t),n=new kp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),jp(e.g,n.h,n.g);break;default:n=Op(t),jp(e.g,n.h,n.g)}}function jm(e,t,n){(t=Ed(t))!=null&&t!=null&&(Ip(e,n,0),Np(e.g,t))}function Mm(e,t,n){(t=Cd(t))!=null&&(Ip(e,n,0),e.g.g.push(t?1:0))}function Nm(e,t,n){(t=Ld(t))!=null&&zp(e,n,Ml(t))}function Pm(e,t,n,r,i){Bp(e,n,pm(t,r),i)}function Fm(e,t,n){(t=t==null||typeof t==`string`||t instanceof nu?t:void 0)!=null&&zp(e,n,ip(t,!0).buffer)}function Im(e,t,n){return(e.h===5||e.h===2)&&(t=If(t,0|t[K],n),e.h==2?Sp(e,lp,t):t.push(lp(e.g)),!0)}var Lm=Tm((function(e,t,n){return e.h===5&&(Dm(t,n,lp(e.g)),!0)}),km,Yp),Rm=Em(Im,(function(e,t,n){if((t=wm(xd,t))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Ip(r,i,5),r=r.g,rd(a),Pp(r))}}),Yp),zm=Em(Im,(function(e,t,n){if((t=wm(xd,t))!=null&&t.length){Ip(e,n,2),Mp(e.g,4*t.length);for(let r=0;r<t.length;r++)n=e.g,rd(t[r]),Pp(n)}}),Yp),Bm=Tm((function(e,t,n){return e.h===5&&(Dm(t,n,(e=lp(e.g))===0?void 0:e),!0)}),km,Yp),Vm=Tm((function(e,t,n){return Ll?(e.h===0?(Dm(t,n,ap(e.g,sd)),e=!0):e=!1,e):e.h===0&&(Dm(t,n,ap(e.g,od)),!0)}),Am,qp),Hm=Tm((function(e,t,n){return Ll?(e.h===0?(Dm(t,n,(e=ap(e.g,sd))===Cm?void 0:e),t=!0):t=!1,t):e.h===0&&(Dm(t,n,(e=ap(e.g,od))===0?void 0:e),!0)}),Am,qp),Um=Tm((function(e,t,n){return Ll?(e.h===0?(Dm(t,n,ap(e.g,ad)),e=!0):e=!1,e):e.h===0&&(Dm(t,n,ap(e.g,id)),!0)}),(function(e,t,n){if(t=function(e){if(e==null)return e;var t=typeof e;if(t===`bigint`)return String(hd(64,e));if(Td(e)){if(t===`string`)return t=vd(Number(e)),gd(t)&&t>=0?e=String(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),(t=e[0]!==`-`&&((t=e.length)<20||t===20&&e<=`18446744073709551615`))||(dd(e),e=cd($u,ed))),e;if(t===`number`)return(e=vd(e))>=0&&gd(e)||(nd(e),e=id($u,ed)),e}}(t),t!=null&&(typeof t==`string`&&Tp(t),t!=null))switch(Ip(e,n,0),typeof t){case`number`:e=e.g,nd(t),jp(e,$u,ed);break;case`bigint`:n=BigInt.asUintN(64,t),n=new Ep(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),jp(e.g,n.h,n.g);break;default:n=Tp(t),jp(e.g,n.h,n.g)}}),Jp),Wm=Tm((function(e,t,n){return e.h===0&&(Dm(t,n,sp(e.g)),!0)}),jm,Gp),Gm=Em((function(e,t,n){return(e.h===0||e.h===2)&&(t=If(t,0|t[K],n),e.h==2?Sp(e,sp,t):t.push(sp(e.g)),!0)}),(function(e,t,n){if((t=wm(Ed,t))!=null&&t.length){n=Lp(e,n);for(let n=0;n<t.length;n++)Np(e.g,t[n]);Rp(e,n)}}),Gp),Km=Tm((function(e,t,n){return e.h===0&&(Dm(t,n,(e=sp(e.g))===0?void 0:e),!0)}),jm,Gp),qm=Tm((function(e,t,n){return e.h===0&&(Dm(t,n,op(e.g)),!0)}),Mm,Up),Jm=Tm((function(e,t,n){return e.h===0&&(Dm(t,n,!1===(e=op(e.g))?void 0:e),!0)}),Mm,Up),Ym=Em((function(e,t,n){return e.h===2&&(e=bp(e),If(t,0|t[K],n).push(e),!0)}),(function(e,t,n){if((t=wm(Ld,t))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&zp(r,i,Ml(a))}}),Wp),Xm=Tm((function(e,t,n){return e.h===2&&(Dm(t,n,(e=bp(e))===``?void 0:e),!0)}),Nm,Wp),Zm=Tm((function(e,t,n){return e.h===2&&(Dm(t,n,bp(e)),!0)}),Nm,Wp),Qm=function(e,t,n=Hp){return new $p(e,t,n)}((function(e,t,n,r,i){return e.h===2&&(r=lf(void 0,r),If(t,0|t[K],n).push(r),yp(e,r,i),!0)}),(function(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)Pm(e,t[a],n,r,i);1&(e=0|t[K])||Du(t,1|e)}})),$m=em((function(e,t,n,r,i,a){if(e.h!==2)return!1;let o=0|t[K];return zf(t,o,a,n,Ru(o)),yp(e,t=Vf(t,r,n),i),!0}),Pm),eh=Tm((function(e,t,n){return e.h===2&&(Dm(t,n,xp(e)),!0)}),Fm,Xp),th=Em((function(e,t,n){return(e.h===0||e.h===2)&&(t=If(t,0|t[K],n),e.h==2?Sp(e,cp,t):t.push(cp(e.g)),!0)}),(function(e,t,n){if((t=wm(Dd,t))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Ip(r,i,0),Mp(r.g,a))}}),Kp),nh=Tm((function(e,t,n){return e.h===0&&(Dm(t,n,(e=cp(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=Dd(t))!=null&&t!=null&&(Ip(e,n,0),Mp(e.g,t))}),Kp),rh=Tm((function(e,t,n){return e.h===0&&(Dm(t,n,sp(e.g)),!0)}),(function(e,t,n){(t=Ed(t))!=null&&(t=parseInt(t,10),Ip(e,n,0),Np(e.g,t))}),Zp),ih=class{constructor(e,t){var n=Sh;this.g=e,this.h=t,this.m=Uf,this.j=q,this.defaultValue=void 0,this.l=n.Oa==null?void 0:Lu}register(){Vl(this)}};function ah(e,t){return new ih(e,t)}function oh(e,t){return(n,r)=>{{let a={ea:!0};r&&Object.assign(a,r),n=hp(n,void 0,void 0,a);try{let r=new e,a=r.v;gm(t)(a,n);var i=r}finally{gp(n)}}return i}}function sh(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let e=this.g;return this.g=[],e}}}};Sm(this.v,t,dm(im,ym,bm,e)),Fp(t,t.g.end());let n=new Uint8Array(t.h),r=t.l,i=r.length,a=0;for(let e=0;e<i;e++){let t=r[e];n.set(t,a),a+=t.length}return t.l=[n],n}}var ch=class extends Y{constructor(e){super(e)}},lh=[0,Xm,Tm((function(e,t,n){return e.h===2&&(Dm(t,n,(e=xp(e))===eu()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Y){let r=t.Ra;r?(t=r(t),t!=null&&zp(e,n,ip(t,!0).buffer)):cu(vu,3);return}if(Array.isArray(t))return void cu(vu,3)}Fm(e,t,n)}),Xp)],uh,dh=globalThis.trustedTypes;function fh(e){var t;return uh===void 0&&(uh=function(){let e=null;if(!dh)return e;try{let t=e=>e;e=dh.createPolicy(`goog#html`,{createHTML:t,createScript:t,createScriptURL:t})}catch{}return e}()),e=(t=uh)?t.createScriptURL(e):e,new class{constructor(e){this.g=e}toString(){return this.g+``}}(e)}function ph(e,...t){if(t.length===0)return fh(e[0]);let n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return fh(n)}var mh=[0,Wm,rh,qm,-1,Gm,rh,-1,qm],hh=class extends Y{constructor(e){super(e)}},gh=[0,qm,Zm,qm,rh,-1,Em((function(e,t,n){return(e.h===0||e.h===2)&&(t=If(t,0|t[K],n),e.h==2?Sp(e,up,t):t.push(sp(e.g)),!0)}),(function(e,t,n){if((t=wm(Ed,t))!=null&&t.length){n=Lp(e,n);for(let n=0;n<t.length;n++)Np(e.g,t[n]);Rp(e,n)}}),Zp),Zm,-1,[0,qm,-1],rh,qm,-1],_h=[0,3,qm,-1,2,[0,Wm],[0,rh,qm],[0,Zm,-1],[0]],vh=[0,Zm,-2],yh=class extends Y{constructor(e){super(e)}},bh=[0],xh=[0,Wm,qm,1,qm,-4],Sh=class extends Y{constructor(e){super(e,2)}},Ch={};Ch[336783863]=[0,Zm,qm,-1,Wm,[0,[1,2,3,4,5,6,7,8,9],$m,bh,$m,gh,$m,vh,$m,xh,$m,mh,$m,[0,Zm,-2],$m,[0,Zm,rh],$m,_h,$m,[0,rh,-1,qm]],[0,Zm],qm,[0,[1,3],[2,4],$m,[0,Gm],-1,$m,[0,Ym],-1,Qm,[0,Zm,-1]],Zm];var wh=[0,Hm,-1,Jm,-3,Hm,Gm,Xm,Km,Hm,-1,Jm,Km,Jm,-2,Xm];function Th(e,t){np(e,3,t)}function X(e,t){np(e,4,t)}var Eh=class extends Y{constructor(e){super(e,500)}o(e){return q(this,0,7,e)}},Dh=[-1,{}],Oh=[0,Zm,1,Dh],kh=[0,Zm,Ym,Dh];function Ah(e,t){Yf(e,1,Eh,t)}function jh(e,t){np(e,10,t)}function Mh(e,t){np(e,15,t)}var Nh=class extends Y{constructor(e){super(e,500)}o(e){return q(this,0,1001,e)}},Ph=[-500,Qm,[-500,Xm,-1,Ym,-3,[-2,Ch,qm],Qm,lh,Km,-1,Oh,kh,Qm,[0,Xm,Jm],Xm,wh,Km,Ym,987,Ym],4,Qm,[-500,Zm,-1,[-1,{}],998,Zm],Qm,[-500,Zm,Ym,-1,[-2,{},qm],997,Ym,-1],Km,Qm,[-500,Zm,Ym,Dh,998,Ym],Ym,Km,Oh,kh,Qm,[0,Xm,-1,Dh],Ym,-2,wh,Xm,-1,Jm,[0,Jm,nh],978,Dh,Qm,lh];Nh.prototype.g=sh(Ph);var Fh=oh(Nh,Ph),Ih=class extends Y{constructor(e){super(e)}},Lh=class extends Y{constructor(e){super(e)}g(){return Gf(this,Ih,1)}},Rh=[0,Qm,[0,Wm,Lm,Zm,-1]],zh=oh(Lh,Rh),Bh=class extends Y{constructor(e){super(e)}},Vh=class extends Y{constructor(e){super(e)}},Hh=class extends Y{constructor(e){super(e)}l(){return Uf(this,Bh,2)}g(){return Gf(this,Vh,5)}},Uh=oh(class extends Y{constructor(e){super(e)}},[0,Ym,Gm,zm,[0,rh,[0,Wm,-3],[0,Lm,-3],[0,Wm,-1,[0,Qm,[0,Wm,-2]]],Qm,[0,Lm,-1,Zm,Lm]],Zm,-1,Vm,Qm,[0,Wm,Lm],Ym,Vm]),Wh=class extends Y{constructor(e){super(e)}},Gh=oh(class extends Y{constructor(e){super(e)}},[0,Qm,[0,Lm,-4]]),Kh=class extends Y{constructor(e){super(e)}},qh=oh(class extends Y{constructor(e){super(e)}},[0,Qm,[0,Lm,-4]]),Jh=class extends Y{constructor(e){super(e)}},Yh=[0,Wm,-1,zm,rh],Xh=class extends Y{constructor(e){super(e)}};Xh.prototype.g=sh([0,Lm,-4,Vm]);var Zh=class extends Y{constructor(e){super(e)}},Qh=oh(class extends Y{constructor(e){super(e)}},[0,Qm,[0,1,Wm,Zm,Rh],Vm]),$h=class extends Y{constructor(e){super(e)}},eg=class extends Y{constructor(e){super(e)}na(){return Cf(this,1,void 0,void 0,Nf)??eu()}},tg=class extends Y{constructor(e){super(e)}},ng=[1,2],rg=oh(class extends Y{constructor(e){super(e)}},[0,Qm,[0,ng,$m,[0,zm],$m,[0,eh],Wm,Zm],Vm]),ig=class extends Y{constructor(e){super(e)}},ag=[0,Zm,Wm,Lm,Ym,-1],og=class extends Y{constructor(e){super(e)}},sg=[0,qm,-1],cg=class extends Y{constructor(e){super(e)}},lg=[1,2,3,4,5,6],ug=class extends Y{constructor(e){super(e)}g(){return Cf(this,1,void 0,void 0,Nf)!=null}l(){return Ld(Cf(this,2))!=null}},dg=class extends Y{constructor(e){super(e)}g(){return Cd(Cf(this,2))??!1}},fg=[0,eh,Zm,[0,Wm,Vm,-1],[0,Um,Vm]],pg=[0,fg,qm,[0,lg,$m,xh,$m,gh,$m,mh,$m,bh,$m,vh,$m,_h],rh],mg=class extends Y{constructor(e){super(e)}},hg=[0,pg,Lm,-1,Wm],gg=ah(502141897,mg);Ch[502141897]=hg;var _g=oh(class extends Y{constructor(e){super(e)}},[0,[0,rh,-1,Rm,th],Yh]),vg=class extends Y{constructor(e){super(e)}},yg=class extends Y{constructor(e){super(e)}},bg=[0,pg,Lm,[0,pg],qm],xg=ah(508968150,yg);Ch[508968150]=[0,pg,hg,bg,Lm,[0,[0,fg]]],Ch[508968149]=bg;var Sg=class extends Y{constructor(e){super(e)}l(){return Uf(this,ig,2)}g(){Tf(this,2)}},Cg=[0,pg,ag];Ch[478825465]=Cg;var wg=class extends Y{constructor(e){super(e)}},Tg=class extends Y{constructor(e){super(e)}},Eg=class extends Y{constructor(e){super(e)}},Dg=class extends Y{constructor(e){super(e)}},Og=class extends Y{constructor(e){super(e)}},kg=[0,pg,[0,pg],Cg,-1],Ag=[0,pg,Lm,Wm],jg=[0,pg,Lm],Mg=[0,pg,Ag,jg,Lm],Ng=ah(479097054,Og);Ch[479097054]=[0,pg,Mg,kg],Ch[463370452]=kg,Ch[464864288]=Ag;var Pg=ah(462713202,Dg);Ch[462713202]=Mg,Ch[474472470]=jg;var Fg=class extends Y{constructor(e){super(e)}},Ig=class extends Y{constructor(e){super(e)}},Lg=class extends Y{constructor(e){super(e)}},Rg=class extends Y{constructor(e){super(e)}},zg=[0,pg,Lm,-1,Wm],Bg=[0,pg,Lm,qm];Rg.prototype.g=sh([0,pg,jg,[0,pg],hg,bg,zg,Bg]);var Vg=class extends Y{constructor(e){super(e)}},Hg=ah(456383383,Vg);Ch[456383383]=[0,pg,ag];var Ug=class extends Y{constructor(e){super(e)}},Wg=ah(476348187,Ug);Ch[476348187]=[0,pg,sg];var Gg=class extends Y{constructor(e){super(e)}},Kg=class extends Y{constructor(e){super(e)}},qg=[0,rh,-1],Jg=ah(458105876,class extends Y{constructor(e){super(e)}g(){let e;var t=this.v;let n=0|t[K];return e=ju(this,n),t=function(e,t,n,r){var i=Kg;!r&&_f(e)&&(n=0|(t=e.v)[K]);var a=wf(t,2);if(e=!1,a==null){if(r)return Xd();a=[]}else if(a.constructor===Kd){if(!(2&a.J)||r)return a;a=a.V()}else Array.isArray(a)?e=!!(2&(0|a[K])):a=[];if(r){if(!a.length)return Xd();e||(e=!0,Ou(a))}else e&&(e=!1,ku(a),a=Pf(a));return!e&&32&n&&Eu(a,32),n=Ef(t,n,2,r=new Kd(a,i,zd,void 0)),e||yf(t,n),r}(this,t,n,e),!e&&Kg&&(t.ra=!0),t}});Ch[458105876]=[0,qg,Om,[!0,Vm,[0,Zm,-1,Ym]],[0,Gm,qm,rh]];var Yg=class extends Y{constructor(e){super(e)}},Xg=ah(458105758,Yg);Ch[458105758]=[0,pg,Zm,qg];var Zg=class extends Y{constructor(e){super(e)}},Qg=[0,Bm,-1,Jm],$g=class extends Y{constructor(e){super(e)}},e_=class extends Y{constructor(e){super(e)}},t_=[1,2];e_.prototype.g=sh([0,t_,$m,Qg,$m,[0,Qm,Qg]]);var n_=class extends Y{constructor(e){super(e)}},r_=ah(443442058,n_);Ch[443442058]=[0,pg,Zm,Wm,Lm,Ym,-1,qm,Lm],Ch[514774813]=zg;var i_=class extends Y{constructor(e){super(e)}},a_=ah(516587230,i_);function o_(e,t){return t=t?t.clone():new ig,e.displayNamesLocale===void 0?e.displayNamesLocale===void 0&&Tf(t,1):Tf(t,1,Id(e.displayNamesLocale)),e.maxResults===void 0?`maxResults`in e&&Tf(t,2):$f(t,2,e.maxResults),e.scoreThreshold===void 0?`scoreThreshold`in e&&Tf(t,3):J(t,3,e.scoreThreshold),e.categoryAllowlist===void 0?`categoryAllowlist`in e&&Tf(t,4):tp(t,4,e.categoryAllowlist),e.categoryDenylist===void 0?`categoryDenylist`in e&&Tf(t,5):tp(t,5,e.categoryDenylist),t}function s_(e){let t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function c_(e,t=-1,n=``){return{categories:e.map((e=>({index:Xf(e,1)??0??-1,score:Qf(e,2)??0,categoryName:Ld(Cf(e,3))??``??``,displayName:Ld(Cf(e,4))??``??``}))),headIndex:t,headName:n}}function l_(e){let t={classifications:Gf(e,Zh,1).map((e=>c_(Uf(e,Lh,4)?.g()??[],Xf(e,2)??0,Ld(Cf(e,3))??``)))};return function(e){return Nd(Rl?Cf(e,2,void 0,void 0,Pd):Cf(e,2))}(e)!=null&&(t.timestampMs=s_(Zf(e))),t}function u_(e){var t=Of(e,3,xd,Df()),n=Of(e,2,Ed,Df()),r=Of(e,1,Ld,Df()),i=Of(e,9,Ld,Df());let a={categories:[],keypoints:[]};for(let e=0;e<t.length;e++)a.categories.push({score:t[e],index:n[e]??-1,categoryName:r[e]??``,displayName:i[e]??``});if((t=Uf(e,Hh,4)?.l())&&(a.boundingBox={originX:Xf(t,1,Sf)??0,originY:Xf(t,2,Sf)??0,width:Xf(t,3,Sf)??0,height:Xf(t,4,Sf)??0,angle:0}),Uf(e,Hh,4)?.g().length)for(let t of Uf(e,Hh,4).g())a.keypoints.push({x:Cf(t,1,void 0,Sf,xd)??0,y:Cf(t,2,void 0,Sf,xd)??0,score:Cf(t,4,void 0,Sf,xd)??0,label:Ld(Cf(t,3,void 0,Sf))??``});return a}function d_(e){let t=[];for(let n of Gf(e,Kh,1))t.push({x:Qf(n,1)??0,y:Qf(n,2)??0,z:Qf(n,3)??0,visibility:Qf(n,4)??0});return t}function f_(e){let t=[];for(let n of Gf(e,Wh,1))t.push({x:Qf(n,1)??0,y:Qf(n,2)??0,z:Qf(n,3)??0,visibility:Qf(n,4)??0});return t}function p_(e){return Array.from(e,(e=>e>127?e-256:e))}function m_(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,r=0,i=0;for(let a=0;a<e.length;a++)n+=e[a]*t[a],r+=e[a]*e[a],i+=t[a]*t[a];if(r<=0||i<=0)throw Error(`Cannot compute cosine similarity on embedding with 0 norm.`);return n/Math.sqrt(r*i)}var h_;Ch[516587230]=[0,pg,zg,Bg,Lm],Ch[518928384]=Bg;var g_=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function __(){if(h_===void 0)try{await WebAssembly.instantiate(g_),h_=!0}catch{h_=!1}return h_}async function v_(e,t=ph``){let n=await __()?`wasm_internal`:`wasm_nosimd_internal`;return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var y_=class{};function b_(){var e=navigator;return typeof OffscreenCanvas<`u`&&(!function(e=navigator){return(e=e.userAgent).includes(`Safari`)&&!e.includes(`Chrome`)}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function x_(e){if(typeof importScripts!=`function`){let t=document.createElement(`script`);return t.src=e.toString(),t.crossOrigin=`anonymous`,new Promise(((e,n)=>{t.addEventListener(`load`,(()=>{e()}),!1),t.addEventListener(`error`,(e=>{n(e)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;await self.import(e.toString())}}function S_(e){return e.videoWidth===void 0?e.naturalWidth===void 0?e.displayWidth===void 0?[e.width,e.height]:[e.displayWidth,e.displayHeight]:[e.naturalWidth,e.naturalHeight]:[e.videoWidth,e.videoHeight]}function Z(e,t,n){e.m||console.error(`No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function C_(e,t,n){if(!e.i.canvas)throw Error(`No OpenGL canvas configured.`);if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext(`webgl2`)||e.i.canvas.getContext(`webgl`)))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[r,i]=S_(t);return!e.l||r===e.i.canvas.width&&i===e.i.canvas.height||(e.i.canvas.width=r,e.i.canvas.height=i),[r,i]}function w_(e,t,n){e.m||console.error(`No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`);let r=new Uint32Array(t.length);for(let n=0;n<t.length;n++)r[n]=e.i.stringToNewUTF8(t[n]);t=e.i._malloc(4*r.length),e.i.HEAPU32.set(r,t>>2),n(t);for(let t of r)e.i._free(t);e.i._free(t)}function T_(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function E_(e,t,n){let r=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(e,t,i)=>{t?(n(r,i),r=[]):r.push(e)}}y_.forVisionTasks=function(e){return v_(`vision`,e)},y_.forTextTasks=function(e){return v_(`text`,e)},y_.forGenAiExperimentalTasks=function(e){return v_(`genai_experimental`,e)},y_.forGenAiTasks=function(e){return v_(`genai`,e)},y_.forAudioTasks=function(e){return v_(`audio`,e)},y_.isSimdSupported=function(){return __()};async function D_(e,t,n,r){return e=await(async(e,t,n,r,i)=>{if(t&&await x_(t),!self.ModuleFactory||n&&(await x_(n),!self.ModuleFactory))throw Error(`ModuleFactory not set.`);return self.Module&&i&&((t=self.Module).locateFile=i.locateFile,i.mainScriptUrlOrBlob&&(t.mainScriptUrlOrBlob=i.mainScriptUrlOrBlob)),i=await self.ModuleFactory(self.Module||i),self.ModuleFactory=self.Module=void 0,new e(i,r)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:e=>e.endsWith(`.wasm`)?n.wasmBinaryPath.toString():n.assetBinaryPath&&e.endsWith(`.data`)?n.assetBinaryPath.toString():e}),await e.o(r),e}function O_(e,t){let n=Uf(e.baseOptions,ug,1)||new ug;typeof t==`string`?(Tf(n,2,Id(t)),Tf(n,1)):t instanceof Uint8Array&&(Tf(n,1,Nu(t,!1)),Tf(n,2)),q(e.baseOptions,0,1,n)}function k_(e){try{let t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error(`Encountered multiple errors: `+e.H.map((e=>e.message)).join(`, `))}finally{e.H=[]}}function Q(e,t){e.C=Math.max(e.C,t)}function A_(e,t){e.B=new Eh,ep(e.B,2,`PassThroughCalculator`),Th(e.B,`free_memory`),X(e.B,`free_memory_unused_out`),jh(t,`free_memory`),Ah(t,e.B)}function j_(e,t){Th(e.B,t),X(e.B,t+`_unused_out`)}function M_(e){e.g.addBoolToStream(!0,`free_memory`,e.C)}var N_=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let t=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error(`Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer`);if(!(Uf(this.baseOptions,ug,1)?.g()||Uf(this.baseOptions,ug,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error(`Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set`);if(function(e,t){let n=Uf(e.baseOptions,cg,3);if(!n){var r=n=new cg,i=new yh;qf(r,4,lg,i)}`delegate`in t&&(t.delegate===`GPU`?(t=n,r=new hh,qf(t,2,lg,r)):(t=n,r=new yh,qf(t,4,lg,r))),q(e.baseOptions,0,3,n)}(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then((e=>{if(e.ok)return e.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${e.status})`)})).then((e=>{try{this.g.i.FS_unlink(`/model.dat`)}catch{}this.g.i.FS_createDataFile(`/`,`model.dat`,new Uint8Array(e),!0,!1,!1),O_(this,`/model.dat`),this.m(),this.L()}));if(t.modelAssetBuffer instanceof Uint8Array)O_(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return async function(e){let t=[];for(var n=0;;){let{done:r,value:i}=await e.read();if(r)break;t.push(i),n+=i.length}if(t.length===0)return new Uint8Array;if(t.length===1)return t[0];e=new Uint8Array(n),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}(t.modelAssetBuffer).then((e=>{O_(this,e),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=Fh(t)})),!e)throw Error(`Failed to retrieve CalculatorGraphConfig`);return e}setGraph(e,t){this.g.attachErrorListener(((e,t)=>{this.H.push(Error(t))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,k_(this)}finishProcessing(){this.g.finishProcessing(),k_(this)}close(){this.B=void 0,this.g.closeGraph()}};function P_(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}N_.prototype.close=N_.prototype.close;var F_=class{constructor(e,t,n,r){this.g=e,this.h=t,this.m=n,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function I_(e,t,n){let r=e.g;if(n=P_(r.createShader(n),`Failed to create WebGL shader`),r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(e.h,n),n}function L_(e,t){let n=e.g,r=P_(n.createVertexArray(),`Failed to create vertex array`);n.bindVertexArray(r);let i=P_(n.createBuffer(),`Failed to create buffer`);n.bindBuffer(n.ARRAY_BUFFER,i),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let a=P_(n.createBuffer(),`Failed to create buffer`);return n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new F_(n,r,i,a)}function R_(e,t){if(e.g){if(t!==e.g)throw Error(`Cannot change GL context once initialized`)}else e.g=t}function z_(e,t,n,r){return R_(e,t),e.h||(e.m(),e.D()),n?(e.u||=L_(e,!0),n=e.u):(e.A||=L_(e,!1),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=r(),n.g.bindVertexArray(null),e}function B_(e,t,n){return R_(e,t),e=P_(t.createTexture(),`Failed to create texture`),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function V_(e,t,n){R_(e,t),e.B||=P_(t.createFramebuffer(),`Failed to create framebuffe.`),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function H_(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var U_=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=P_(e.createProgram(),`Failed to create WebGL program`),this.X=I_(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=I_(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,`aVertex`),this.L=e.getAttribLocation(this.h,`aTex`)}D(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}},W_=class extends U_{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.C=B_(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=B_(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.P=P_(e.getUniformLocation(this.h,`backgroundTexture`),`Uniform location`),this.U=P_(e.getUniformLocation(this.h,`colorMappingTexture`),`Uniform location`),this.M=P_(e.getUniformLocation(this.h,`maskTexture`),`Uniform location`)}l(){super.l();let e=this.g;e.uniform1i(this.M,0),e.uniform1i(this.P,1),e.uniform1i(this.U,2)}close(){this.C&&this.g.deleteTexture(this.C),this.j&&this.g.deleteTexture(this.j),super.close()}},G_=class extends U_{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=B_(this,e),e.activeTexture(e.TEXTURE2),this.C=B_(this,e)}m(){super.m();let e=this.g;this.M=P_(e.getUniformLocation(this.h,`defaultTexture`),`Uniform location`),this.P=P_(e.getUniformLocation(this.h,`overlayTexture`),`Uniform location`),this.I=P_(e.getUniformLocation(this.h,`maskTexture`),`Uniform location`)}l(){super.l();let e=this.g;e.uniform1i(this.I,0),e.uniform1i(this.M,1),e.uniform1i(this.P,2)}close(){this.j&&this.g.deleteTexture(this.j),this.C&&this.g.deleteTexture(this.C),super.close()}};function K_(e,t){switch(t){case 0:return e.g.find((e=>e instanceof Uint8Array));case 1:return e.g.find((e=>e instanceof Float32Array));case 2:return e.g.find((e=>typeof WebGLTexture<`u`&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function q_(e){var t=K_(e,1);if(!t){if(t=K_(e,0))t=new Float32Array(t).map((e=>e/255));else{t=new Float32Array(e.width*e.height);let r=Y_(e);var n=Z_(e);if(V_(n,r,J_(e)),`iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod`.split(`;`).includes(navigator.platform)||navigator.userAgent.includes(`Mac`)&&`document`in self&&`ontouchend`in self.document){n=new Float32Array(e.width*e.height*4),r.readPixels(0,0,e.width,e.height,r.RGBA,r.FLOAT,n);for(let e=0,r=0;e<t.length;++e,r+=4)t[e]=n[r]}else r.readPixels(0,0,e.width,e.height,r.RED,r.FLOAT,t)}e.g.push(t)}return t}function J_(e){let t=K_(e,2);if(!t){let n=Y_(e);t=Q_(e);let r=q_(e),i=X_(e);n.texImage2D(n.TEXTURE_2D,0,i,e.width,e.height,0,n.RED,n.FLOAT,r),$_(e)}return t}function Y_(e){if(!e.canvas)throw Error(`Conversion to different image formats require that a canvas is passed when initializing the image.`);return e.h||=P_(e.canvas.getContext(`webgl2`),`You cannot use a canvas that is already bound to a different type of rendering context.`),e.h}function X_(e){if(e=Y_(e),!ev)if(e.getExtension(`EXT_color_buffer_float`)&&e.getExtension(`OES_texture_float_linear`)&&e.getExtension(`EXT_float_blend`))ev=e.R32F;else{if(!e.getExtension(`EXT_color_buffer_half_float`))throw Error(`GPU does not fully support 4-channel float32 or float16 formats`);ev=e.R16F}return ev}function Z_(e){return e.l||=new U_,e.l}function Q_(e){let t=Y_(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=K_(e,2);return n||(n=B_(Z_(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function $_(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var ev,tv=class{constructor(e,t,n,r,i,a,o){this.g=e,this.m=t,this.j=n,this.canvas=r,this.l=i,this.width=a,this.height=o,this.j&&--nv===0&&console.error(`You seem to be creating MPMask instances without invoking .close(). This leaks resources.`)}Fa(){return!!K_(this,0)}ka(){return!!K_(this,1)}R(){return!!K_(this,2)}ja(){return(t=K_(e=this,0))||(t=q_(e),t=new Uint8Array(t.map((e=>Math.round(255*e)))),e.g.push(t)),t;var e,t}ia(){return q_(this)}N(){return J_(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let e=Y_(this),t=Z_(this);e.activeTexture(e.TEXTURE1),n=B_(t,e,this.m?e.LINEAR:e.NEAREST),e.bindTexture(e.TEXTURE_2D,n);let r=X_(this);e.texImage2D(e.TEXTURE_2D,0,r,this.width,this.height,0,e.RED,e.FLOAT,null),e.bindTexture(e.TEXTURE_2D,null),V_(t,e,n),z_(t,e,!1,(()=>{Q_(this),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),$_(this)})),H_(t),$_(this)}}e.push(n)}return new tv(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Y_(this).deleteTexture(K_(this,2)),nv=-1}};tv.prototype.close=tv.prototype.close,tv.prototype.clone=tv.prototype.clone,tv.prototype.getAsWebGLTexture=tv.prototype.N,tv.prototype.getAsFloat32Array=tv.prototype.ia,tv.prototype.getAsUint8Array=tv.prototype.ja,tv.prototype.hasWebGLTexture=tv.prototype.R,tv.prototype.hasFloat32Array=tv.prototype.ka,tv.prototype.hasUint8Array=tv.prototype.Fa;var nv=250,rv={color:`white`,lineWidth:4,radius:6};function iv(e){return{...rv,fillColor:(e||={}).color,...e}}function av(e,t){return e instanceof Function?e(t):e}function ov(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function sv(e){if(!e.l)throw Error(`CPU rendering requested but CanvasRenderingContext2D not provided.`);return e.l}function cv(e){if(!e.j)throw Error(`GPU rendering requested but WebGL2RenderingContext not provided.`);return e.j}function lv(e,t,n){if(t.R())n(t.N());else{let r=t.ka()?t.ia():t.ja();e.m=e.m??new U_;let i=cv(e);n((e=new tv([r],t.m,!1,i.canvas,e.m,t.width,t.height)).N()),e.close()}}function uv(e,t,n,r){let i=function(e){return e.g||=new W_,e.g}(e),a=cv(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;z_(i,a,!0,(()=>{(function(e,t,n,r){let i=e.g;if(i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,e.C),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,n),e.I&&function(e,t){if(e!==t)return!1;e=e.entries(),t=t.entries();for(let[r,i]of e){e=r;let a=i;var n=t.next();if(n.done)return!1;let[o,s]=n.value;if(n=s,e!==o||a[0]!==n[0]||a[1]!==n[1]||a[2]!==n[2]||a[3]!==n[3])return!1}return!!t.next().done}(e.I,r))i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,e.j);else{e.I=r;let t=Array(1024).fill(0);r.forEach(((e,n)=>{if(e.length!==4)throw Error(`Color at index ${n} is not a four-channel value.`);t[4*n]=e[0],t[4*n+1]=e[1],t[4*n+2]=e[2],t[4*n+3]=e[3]})),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,e.j),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,256,1,0,i.RGBA,i.UNSIGNED_BYTE,new Uint8Array(t))}})(i,t,o,r),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_FAN,0,4);let e=i.g;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)}))}function dv(e,t,n,r){let i=cv(e),a=function(e){return e.h||=new G_,e.h}(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,s=Array.isArray(r)?new ImageData(new Uint8ClampedArray(r),1,1):r;z_(a,i,!0,(()=>{var e=a.g;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a.j),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,a.C),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),i.bindTexture(i.TEXTURE_2D,null),(e=a.g).activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)}))}var fv=class{constructor(e,t){typeof CanvasRenderingContext2D<`u`&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=sv(this);t=iv(t),n.save();var r=n.canvas,i=0;for(let a of e)n.fillStyle=av(t.fillColor,{index:i,from:a}),n.strokeStyle=av(t.color,{index:i,from:a}),n.lineWidth=av(t.lineWidth,{index:i,from:a}),(e=new Path2D).arc(a.x*r.width,a.y*r.height,av(t.radius,{index:i,from:a}),0,2*Math.PI),n.fill(e),n.stroke(e),++i;n.restore()}}xa(e,t,n){if(e&&t){var r=sv(this);n=iv(n),r.save();var i=r.canvas,a=0;for(let o of t){r.beginPath(),t=e[o.start];let s=e[o.end];t&&s&&(r.strokeStyle=av(n.color,{index:a,from:t,to:s}),r.lineWidth=av(n.lineWidth,{index:a,from:t,to:s}),r.moveTo(t.x*i.width,t.y*i.height),r.lineTo(s.x*i.width,s.y*i.height)),++a,r.stroke()}r.restore()}}ua(e,t){let n=sv(this);t=iv(t),n.save(),n.beginPath(),n.lineWidth=av(t.lineWidth,{}),n.strokeStyle=av(t.color,{}),n.fillStyle=av(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?function(e,t,n,r){let i=cv(e);lv(e,t,(t=>{uv(e,t,n,r),(t=sv(e)).drawImage(i.canvas,0,0,t.canvas.width,t.canvas.height)}))}(this,e,n,t):uv(this,e.N(),n,t)}wa(e,t,n){this.l?function(e,t,n,r){let i=cv(e);lv(e,t,(t=>{dv(e,t,n,r),(t=sv(e)).drawImage(i.canvas,0,0,t.canvas.width,t.canvas.height)}))}(this,e,t,n):dv(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function pv(e,t){switch(t){case 0:return e.g.find((e=>e instanceof ImageData));case 1:return e.g.find((e=>typeof ImageBitmap<`u`&&e instanceof ImageBitmap));case 2:return e.g.find((e=>typeof WebGLTexture<`u`&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function mv(e){var t=pv(e,0);if(!t){t=gv(e);let n=_v(e),r=new Uint8Array(e.width*e.height*4);V_(n,t,hv(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,r),H_(n),t=new ImageData(new Uint8ClampedArray(r.buffer),e.width,e.height),e.g.push(t)}return t}function hv(e){let t=pv(e,2);if(!t){let n=gv(e);t=vv(e);let r=pv(e,1)||mv(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r),yv(e)}return t}function gv(e){if(!e.canvas)throw Error(`Conversion to different image formats require that a canvas is passed when initializing the image.`);return e.h||=P_(e.canvas.getContext(`webgl2`),`You cannot use a canvas that is already bound to a different type of rendering context.`),e.h}function _v(e){return e.l||=new U_,e.l}function vv(e){let t=gv(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=pv(e,2);return n||(n=B_(_v(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function yv(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function bv(e){let t=gv(e);return z_(_v(e),t,!0,(()=>function(e,t){let n=e.canvas;if(n.width===e.width&&n.height===e.height)return t();let r=n.width,i=n.height;return n.width=e.width,n.height=e.height,e=t(),n.width=r,n.height=i,e}(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error(`Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas`);return e.canvas.transferToImageBitmap()}))))}fv.prototype.close=fv.prototype.close,fv.prototype.drawConfidenceMask=fv.prototype.wa,fv.prototype.drawCategoryMask=fv.prototype.va,fv.prototype.drawBoundingBox=fv.prototype.ua,fv.prototype.drawConnectors=fv.prototype.xa,fv.prototype.drawLandmarks=fv.prototype.ya,fv.lerp=function(e,t,n,r,i){return ov(r*(1-(e-t)/(n-t))+i*(1-(n-e)/(n-t)),r,i)},fv.clamp=ov;var xv=class{constructor(e,t,n,r,i,a,o){this.g=e,this.j=t,this.m=n,this.canvas=r,this.l=i,this.width=a,this.height=o,(this.j||this.m)&&--Sv===0&&console.error(`You seem to be creating MPImage instances without invoking .close(). This leaks resources.`)}Ea(){return!!pv(this,0)}la(){return!!pv(this,1)}R(){return!!pv(this,2)}Ca(){return mv(this)}Ba(){var e=pv(this,1);return e||(hv(this),vv(this),e=bv(this),yv(this),this.g.push(e),this.j=!0),e}N(){return hv(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let e=gv(this),t=_v(this);e.activeTexture(e.TEXTURE1),n=B_(t,e),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,null),V_(t,e,n),z_(t,e,!1,(()=>{vv(this),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),yv(this)})),H_(t),yv(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);hv(this),vv(this),n=bv(this),yv(this)}e.push(n)}return new xv(e,this.la(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&pv(this,1).close(),this.m&&gv(this).deleteTexture(pv(this,2)),Sv=-1}};xv.prototype.close=xv.prototype.close,xv.prototype.clone=xv.prototype.clone,xv.prototype.getAsWebGLTexture=xv.prototype.N,xv.prototype.getAsImageBitmap=xv.prototype.Ba,xv.prototype.getAsImageData=xv.prototype.Ca,xv.prototype.hasWebGLTexture=xv.prototype.R,xv.prototype.hasImageBitmap=xv.prototype.la,xv.prototype.hasImageData=xv.prototype.Ea;var Sv=250;function Cv(...e){return e.map((([e,t])=>({start:e,end:t})))}var wv=function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}}((Tv=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream==`function`,t===void 0?b_()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn(`OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas.`),this.i.canvas=document.createElement(`canvas`)):this.i.canvas=t}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(`.pbtxt`)||e.endsWith(`.textproto`)),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,r=this.i._malloc(n);this.i.HEAPU8.set(e,r),t?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(e,t,n,r,i){this.i._configureAudio||console.warn(`Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?`),Z(this,r||`input_audio`,(r=>{Z(this,i||=`audio_header`,(i=>{this.i._configureAudio(r,i,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){T_(this,`__graph_config__`,(t=>{e(t)})),Z(this,`__graph_config__`,(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,r,i){let a=4*e.length;this.h!==a&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(a),this.h=a),this.i.HEAPF32.set(e,this.g/4),Z(this,r,(e=>{this.i._addAudioToInputStream(this.g,t,n,e,i)}))}addGpuBufferToStream(e,t,n){Z(this,t,(t=>{let[r,i]=C_(this,e,t);this.i._addBoundTextureToStream(t,r,i,n)}))}addBoolToStream(e,t,n){Z(this,t,(t=>{this.i._addBoolToInputStream(e,t,n)}))}addDoubleToStream(e,t,n){Z(this,t,(t=>{this.i._addDoubleToInputStream(e,t,n)}))}addFloatToStream(e,t,n){Z(this,t,(t=>{this.i._addFloatToInputStream(e,t,n)}))}addIntToStream(e,t,n){Z(this,t,(t=>{this.i._addIntToInputStream(e,t,n)}))}addUintToStream(e,t,n){Z(this,t,(t=>{this.i._addUintToInputStream(e,t,n)}))}addStringToStream(e,t,n){Z(this,t,(t=>{Z(this,e,(e=>{this.i._addStringToInputStream(e,t,n)}))}))}addStringRecordToStream(e,t,n){Z(this,t,(t=>{w_(this,Object.keys(e),(r=>{w_(this,Object.values(e),(i=>{this.i._addFlatHashMapToInputStream(r,i,Object.keys(e).length,t,n)}))}))}))}addProtoToStream(e,t,n,r){Z(this,n,(n=>{Z(this,t,(t=>{let i=this.i._malloc(e.length);this.i.HEAPU8.set(e,i),this.i._addProtoToInputStream(i,e.length,t,n,r),this.i._free(i)}))}))}addEmptyPacketToStream(e,t){Z(this,e,(e=>{this.i._addEmptyPacketToInputStream(e,t)}))}addBoolVectorToStream(e,t,n){Z(this,t,(t=>{let r=this.i._allocateBoolVector(e.length);if(!r)throw Error(`Unable to allocate new bool vector on heap.`);for(let t of e)this.i._addBoolVectorEntry(r,t);this.i._addBoolVectorToInputStream(r,t,n)}))}addDoubleVectorToStream(e,t,n){Z(this,t,(t=>{let r=this.i._allocateDoubleVector(e.length);if(!r)throw Error(`Unable to allocate new double vector on heap.`);for(let t of e)this.i._addDoubleVectorEntry(r,t);this.i._addDoubleVectorToInputStream(r,t,n)}))}addFloatVectorToStream(e,t,n){Z(this,t,(t=>{let r=this.i._allocateFloatVector(e.length);if(!r)throw Error(`Unable to allocate new float vector on heap.`);for(let t of e)this.i._addFloatVectorEntry(r,t);this.i._addFloatVectorToInputStream(r,t,n)}))}addIntVectorToStream(e,t,n){Z(this,t,(t=>{let r=this.i._allocateIntVector(e.length);if(!r)throw Error(`Unable to allocate new int vector on heap.`);for(let t of e)this.i._addIntVectorEntry(r,t);this.i._addIntVectorToInputStream(r,t,n)}))}addUintVectorToStream(e,t,n){Z(this,t,(t=>{let r=this.i._allocateUintVector(e.length);if(!r)throw Error(`Unable to allocate new unsigned int vector on heap.`);for(let t of e)this.i._addUintVectorEntry(r,t);this.i._addUintVectorToInputStream(r,t,n)}))}addStringVectorToStream(e,t,n){Z(this,t,(t=>{let r=this.i._allocateStringVector(e.length);if(!r)throw Error(`Unable to allocate new string vector on heap.`);for(let t of e)Z(this,t,(e=>{this.i._addStringVectorEntry(r,e)}));this.i._addStringVectorToInputStream(r,t,n)}))}addBoolToInputSidePacket(e,t){Z(this,t,(t=>{this.i._addBoolToInputSidePacket(e,t)}))}addDoubleToInputSidePacket(e,t){Z(this,t,(t=>{this.i._addDoubleToInputSidePacket(e,t)}))}addFloatToInputSidePacket(e,t){Z(this,t,(t=>{this.i._addFloatToInputSidePacket(e,t)}))}addIntToInputSidePacket(e,t){Z(this,t,(t=>{this.i._addIntToInputSidePacket(e,t)}))}addUintToInputSidePacket(e,t){Z(this,t,(t=>{this.i._addUintToInputSidePacket(e,t)}))}addStringToInputSidePacket(e,t){Z(this,t,(t=>{Z(this,e,(e=>{this.i._addStringToInputSidePacket(e,t)}))}))}addProtoToInputSidePacket(e,t,n){Z(this,n,(n=>{Z(this,t,(t=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,t,n),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Z(this,t,(t=>{let n=this.i._allocateBoolVector(e.length);if(!n)throw Error(`Unable to allocate new bool vector on heap.`);for(let t of e)this.i._addBoolVectorEntry(n,t);this.i._addBoolVectorToInputSidePacket(n,t)}))}addDoubleVectorToInputSidePacket(e,t){Z(this,t,(t=>{let n=this.i._allocateDoubleVector(e.length);if(!n)throw Error(`Unable to allocate new double vector on heap.`);for(let t of e)this.i._addDoubleVectorEntry(n,t);this.i._addDoubleVectorToInputSidePacket(n,t)}))}addFloatVectorToInputSidePacket(e,t){Z(this,t,(t=>{let n=this.i._allocateFloatVector(e.length);if(!n)throw Error(`Unable to allocate new float vector on heap.`);for(let t of e)this.i._addFloatVectorEntry(n,t);this.i._addFloatVectorToInputSidePacket(n,t)}))}addIntVectorToInputSidePacket(e,t){Z(this,t,(t=>{let n=this.i._allocateIntVector(e.length);if(!n)throw Error(`Unable to allocate new int vector on heap.`);for(let t of e)this.i._addIntVectorEntry(n,t);this.i._addIntVectorToInputSidePacket(n,t)}))}addUintVectorToInputSidePacket(e,t){Z(this,t,(t=>{let n=this.i._allocateUintVector(e.length);if(!n)throw Error(`Unable to allocate new unsigned int vector on heap.`);for(let t of e)this.i._addUintVectorEntry(n,t);this.i._addUintVectorToInputSidePacket(n,t)}))}addStringVectorToInputSidePacket(e,t){Z(this,t,(t=>{let n=this.i._allocateStringVector(e.length);if(!n)throw Error(`Unable to allocate new string vector on heap.`);for(let t of e)Z(this,t,(e=>{this.i._addStringVectorEntry(n,e)}));this.i._addStringVectorToInputSidePacket(n,t)}))}attachBoolListener(e,t){T_(this,e,t),Z(this,e,(e=>{this.i._attachBoolListener(e)}))}attachBoolVectorListener(e,t){E_(this,e,t),Z(this,e,(e=>{this.i._attachBoolVectorListener(e)}))}attachIntListener(e,t){T_(this,e,t),Z(this,e,(e=>{this.i._attachIntListener(e)}))}attachIntVectorListener(e,t){E_(this,e,t),Z(this,e,(e=>{this.i._attachIntVectorListener(e)}))}attachUintListener(e,t){T_(this,e,t),Z(this,e,(e=>{this.i._attachUintListener(e)}))}attachUintVectorListener(e,t){E_(this,e,t),Z(this,e,(e=>{this.i._attachUintVectorListener(e)}))}attachDoubleListener(e,t){T_(this,e,t),Z(this,e,(e=>{this.i._attachDoubleListener(e)}))}attachDoubleVectorListener(e,t){E_(this,e,t),Z(this,e,(e=>{this.i._attachDoubleVectorListener(e)}))}attachFloatListener(e,t){T_(this,e,t),Z(this,e,(e=>{this.i._attachFloatListener(e)}))}attachFloatVectorListener(e,t){E_(this,e,t),Z(this,e,(e=>{this.i._attachFloatVectorListener(e)}))}attachStringListener(e,t){T_(this,e,t),Z(this,e,(e=>{this.i._attachStringListener(e)}))}attachStringVectorListener(e,t){E_(this,e,t),Z(this,e,(e=>{this.i._attachStringVectorListener(e)}))}attachProtoListener(e,t,n){T_(this,e,t),Z(this,e,(e=>{this.i._attachProtoListener(e,n||!1)}))}attachProtoVectorListener(e,t,n){E_(this,e,t),Z(this,e,(e=>{this.i._attachProtoVectorListener(e,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn(`Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?`),T_(this,e,((e,n)=>{e=new Float32Array(e.buffer,e.byteOffset,e.length/4),t(e,n)})),Z(this,e,(e=>{this.i._attachAudioListener(e,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Tv{get ga(){return this.i}pa(e,t,n){Z(this,t,(t=>{let[r,i]=C_(this,e,t);this.ga._addBoundTextureAsImageToStream(t,r,i,n)}))}Z(e,t){T_(this,e,t),Z(this,e,(e=>{this.ga._attachImageListener(e)}))}aa(e,t){E_(this,e,t),Z(this,e,(e=>{this.ga._attachImageVectorListener(e)}))}})),Tv,Ev=class extends wv{};async function Dv(e,t,n){return async function(e,t,n,r){return D_(e,t,n,r)}(e,n.canvas??(b_()?void 0:document.createElement(`canvas`)),t,n)}function Ov(e,t,n,r){if(e.U){let a=new Xh;if(n?.regionOfInterest){if(!e.oa)throw Error(`This task doesn't support region-of-interest.`);var i=n.regionOfInterest;if(i.left>=i.right||i.top>=i.bottom)throw Error(`Expected RectF with left < right and top < bottom.`);if(i.left<0||i.top<0||i.right>1||i.bottom>1)throw Error(`Expected RectF values to be in [0,1].`);J(a,1,(i.left+i.right)/2),J(a,2,(i.top+i.bottom)/2),J(a,4,i.right-i.left),J(a,3,i.bottom-i.top)}else J(a,1,.5),J(a,2,.5),J(a,4,1),J(a,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error(`Expected rotation to be a multiple of 90°.`);if(J(a,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[e,r]=S_(t);n=Qf(a,3)*r/e,i=Qf(a,4)*e/r,J(a,4,n),J(a,3,i)}}e.g.addProtoToStream(a.g(),`mediapipe.NormalizedRect`,e.U,r)}e.g.pa(t,e.X,r??performance.now()),e.finishProcessing()}function kv(e,t,n){if(e.baseOptions?.g())throw Error(`Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.`);Ov(e,t,n,e.C+1)}function Av(e,t,n,r){if(!e.baseOptions?.g())throw Error(`Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.`);Ov(e,t,n,r)}function jv(e,t,n,r){var i=t.data;let a=t.width,o=a*(t=t.height);if((i instanceof Uint8Array||i instanceof Float32Array)&&i.length!==o)throw Error(`Unsupported channel count: `+i.length/o);return e=new tv([i],n,!1,e.g.i.canvas,e.P,a,t),r?e.clone():e}var Mv=class extends N_{constructor(e,t,n,r){super(e),this.g=e,this.X=t,this.U=n,this.oa=r,this.P=new U_}l(e,t=!0){if(`runningMode`in e&&Tf(this.baseOptions,2,Sd(!!e.runningMode&&e.runningMode!==`IMAGE`)),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error(`You must create a new task to reset the canvas.`);return super.l(e,t)}close(){this.P.close(),super.close()}};Mv.prototype.close=Mv.prototype.close;var Nv=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect_in`,!1),this.j={detections:[]},q(e=this.h=new mg,0,1,t=new dg),J(this.h,2,.5),J(this.h,3,.3)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return`minDetectionConfidence`in e&&J(this.h,2,e.minDetectionConfidence??.5),`minSuppressionThreshold`in e&&J(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},kv(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Av(this,e,n,t),this.j}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect_in`),Mh(e,`detections`);let t=new Sh;Qp(t,gg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.face_detector.FaceDetectorGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect_in`),X(n,`DETECTIONS:detections`),n.o(t),Ah(e,n),this.g.attachProtoVectorListener(`detections`,((e,t)=>{for(let t of e)e=Uh(t),this.j.detections.push(u_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`detections`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Nv.prototype.detectForVideo=Nv.prototype.G,Nv.prototype.detect=Nv.prototype.F,Nv.prototype.setOptions=Nv.prototype.o,Nv.createFromModelPath=async function(e,t){return Dv(Nv,e,{baseOptions:{modelAssetPath:t}})},Nv.createFromModelBuffer=function(e,t){return Dv(Nv,e,{baseOptions:{modelAssetBuffer:t}})},Nv.createFromOptions=function(e,t){return Dv(Nv,e,t)};var Pv=Cv([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Fv=Cv([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Iv=Cv([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Lv=Cv([474,475],[475,476],[476,477],[477,474]),Rv=Cv([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),zv=Cv([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Bv=Cv([469,470],[470,471],[471,472],[472,469]),Vv=Cv([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Hv=[...Pv,...Fv,...Iv,...Rv,...zv,...Vv],Uv=Cv([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Wv(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Gv=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect`,!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,q(e=this.h=new yg,0,1,t=new dg),this.A=new vg,q(this.h,0,3,this.A),this.u=new mg,q(this.h,0,2,this.u),$f(this.u,4,1),J(this.u,2,.5),J(this.A,2,.5),J(this.h,4,.5)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return`numFaces`in e&&$f(this.u,4,e.numFaces??1),`minFaceDetectionConfidence`in e&&J(this.u,2,e.minFaceDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.h,4,e.minTrackingConfidence??.5),`minFacePresenceConfidence`in e&&J(this.A,2,e.minFacePresenceConfidence??.5),`outputFaceBlendshapes`in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),`outputFacialTransformationMatrixes`in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Wv(this),kv(this,e,t),this.j}G(e,t,n){return Wv(this),Av(this,e,n,t),this.j}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect`),Mh(e,`face_landmarks`);let t=new Sh;Qp(t,xg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect`),X(n,`NORM_LANDMARKS:face_landmarks`),n.o(t),Ah(e,n),this.g.attachProtoVectorListener(`face_landmarks`,((e,t)=>{for(let t of e)e=qh(t),this.j.faceLandmarks.push(d_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`face_landmarks`,(e=>{Q(this,e)})),this.outputFaceBlendshapes&&(Mh(e,`blendshapes`),X(n,`BLENDSHAPES:blendshapes`),this.g.attachProtoVectorListener(`blendshapes`,((e,t)=>{if(this.outputFaceBlendshapes)for(let t of e)e=zh(t),this.j.faceBlendshapes.push(c_(e.g()??[]));Q(this,t)})),this.g.attachEmptyPacketListener(`blendshapes`,(e=>{Q(this,e)}))),this.outputFacialTransformationMatrixes&&(Mh(e,`face_geometry`),X(n,`FACE_GEOMETRY:face_geometry`),this.g.attachProtoVectorListener(`face_geometry`,((e,t)=>{if(this.outputFacialTransformationMatrixes)for(let t of e)(e=Uf(e=_g(t),Jh,2))&&this.j.facialTransformationMatrixes.push({rows:Xf(e,1)??0??0,columns:Xf(e,2)??0??0,data:Of(e,3,xd,Df()).slice()??[]});Q(this,t)})),this.g.attachEmptyPacketListener(`face_geometry`,(e=>{Q(this,e)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Gv.prototype.detectForVideo=Gv.prototype.G,Gv.prototype.detect=Gv.prototype.F,Gv.prototype.setOptions=Gv.prototype.o,Gv.createFromModelPath=function(e,t){return Dv(Gv,e,{baseOptions:{modelAssetPath:t}})},Gv.createFromModelBuffer=function(e,t){return Dv(Gv,e,{baseOptions:{modelAssetBuffer:t}})},Gv.createFromOptions=function(e,t){return Dv(Gv,e,t)},Gv.FACE_LANDMARKS_LIPS=Pv,Gv.FACE_LANDMARKS_LEFT_EYE=Fv,Gv.FACE_LANDMARKS_LEFT_EYEBROW=Iv,Gv.FACE_LANDMARKS_LEFT_IRIS=Lv,Gv.FACE_LANDMARKS_RIGHT_EYE=Rv,Gv.FACE_LANDMARKS_RIGHT_EYEBROW=zv,Gv.FACE_LANDMARKS_RIGHT_IRIS=Bv,Gv.FACE_LANDMARKS_FACE_OVAL=Vv,Gv.FACE_LANDMARKS_CONTOURS=Hv,Gv.FACE_LANDMARKS_TESSELATION=Uv;var Kv=Cv([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function qv(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Jv(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Yv(e,t=!0){let n=[];for(let i of e){var r=zh(i);e=[];for(let n of r.g())r=t&&Xf(n,1)!=null?Xf(n,1)??0:-1,e.push({score:Qf(n,2)??0,index:r,categoryName:Ld(Cf(n,3))??``??``,displayName:Ld(Cf(n,4))??``??``});n.push(e)}return n}var Xv=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect`,!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],q(e=this.j=new Og,0,1,t=new dg),this.u=new Dg,q(this.j,0,2,this.u),this.D=new Eg,q(this.u,0,3,this.D),this.A=new Tg,q(this.u,0,2,this.A),this.h=new wg,q(this.j,0,3,this.h),J(this.A,2,.5),J(this.u,4,.5),J(this.D,2,.5)}get baseOptions(){return Uf(this.j,dg,1)}set baseOptions(e){q(this.j,0,1,e)}o(e){if($f(this.A,3,e.numHands??1),`minHandDetectionConfidence`in e&&J(this.A,2,e.minHandDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.u,4,e.minTrackingConfidence??.5),`minHandPresenceConfidence`in e&&J(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Sg,n=t,r=o_(e.cannedGesturesClassifierOptions,Uf(this.h,Sg,3)?.l());q(n,0,2,r),q(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&Uf(this.h,Sg,3)?.g();return e.customGesturesClassifierOptions?(q(n=t=new Sg,0,2,r=o_(e.customGesturesClassifierOptions,Uf(this.h,Sg,4)?.l())),q(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&Uf(this.h,Sg,4)?.g(),this.l(e)}Ha(e,t){return qv(this),kv(this,e,t),Jv(this)}Ia(e,t,n){return qv(this),Av(this,e,n,t),Jv(this)}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect`),Mh(e,`hand_gestures`),Mh(e,`hand_landmarks`),Mh(e,`world_hand_landmarks`),Mh(e,`handedness`);let t=new Sh;Qp(t,Ng,this.j);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect`),X(n,`HAND_GESTURES:hand_gestures`),X(n,`LANDMARKS:hand_landmarks`),X(n,`WORLD_LANDMARKS:world_hand_landmarks`),X(n,`HANDEDNESS:handedness`),n.o(t),Ah(e,n),this.g.attachProtoVectorListener(`hand_landmarks`,((e,t)=>{for(let t of e){e=qh(t);let n=[];for(let t of Gf(e,Kh,1))n.push({x:Qf(t,1)??0,y:Qf(t,2)??0,z:Qf(t,3)??0,visibility:Qf(t,4)??0});this.landmarks.push(n)}Q(this,t)})),this.g.attachEmptyPacketListener(`hand_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoVectorListener(`world_hand_landmarks`,((e,t)=>{for(let t of e){e=Gh(t);let n=[];for(let t of Gf(e,Wh,1))n.push({x:Qf(t,1)??0,y:Qf(t,2)??0,z:Qf(t,3)??0,visibility:Qf(t,4)??0});this.worldLandmarks.push(n)}Q(this,t)})),this.g.attachEmptyPacketListener(`world_hand_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoVectorListener(`hand_gestures`,((e,t)=>{this.gestures.push(...Yv(e,!1)),Q(this,t)})),this.g.attachEmptyPacketListener(`hand_gestures`,(e=>{Q(this,e)})),this.g.attachProtoVectorListener(`handedness`,((e,t)=>{this.handedness.push(...Yv(e)),Q(this,t)})),this.g.attachEmptyPacketListener(`handedness`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Zv(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Xv.prototype.recognizeForVideo=Xv.prototype.Ia,Xv.prototype.recognize=Xv.prototype.Ha,Xv.prototype.setOptions=Xv.prototype.o,Xv.createFromModelPath=function(e,t){return Dv(Xv,e,{baseOptions:{modelAssetPath:t}})},Xv.createFromModelBuffer=function(e,t){return Dv(Xv,e,{baseOptions:{modelAssetBuffer:t}})},Xv.createFromOptions=function(e,t){return Dv(Xv,e,t)},Xv.HAND_CONNECTIONS=Kv;var Qv=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect`,!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],q(e=this.h=new Dg,0,1,t=new dg),this.u=new Eg,q(this.h,0,3,this.u),this.j=new Tg,q(this.h,0,2,this.j),$f(this.j,3,1),J(this.j,2,.5),J(this.u,2,.5),J(this.h,4,.5)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return`numHands`in e&&$f(this.j,3,e.numHands??1),`minHandDetectionConfidence`in e&&J(this.j,2,e.minHandDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.h,4,e.minTrackingConfidence??.5),`minHandPresenceConfidence`in e&&J(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],kv(this,e,t),Zv(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Av(this,e,n,t),Zv(this)}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect`),Mh(e,`hand_landmarks`),Mh(e,`world_hand_landmarks`),Mh(e,`handedness`);let t=new Sh;Qp(t,Pg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect`),X(n,`LANDMARKS:hand_landmarks`),X(n,`WORLD_LANDMARKS:world_hand_landmarks`),X(n,`HANDEDNESS:handedness`),n.o(t),Ah(e,n),this.g.attachProtoVectorListener(`hand_landmarks`,((e,t)=>{for(let t of e)e=qh(t),this.landmarks.push(d_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`hand_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoVectorListener(`world_hand_landmarks`,((e,t)=>{for(let t of e)e=Gh(t),this.worldLandmarks.push(f_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`world_hand_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoVectorListener(`handedness`,((e,t)=>{var n=this.handedness,r=n.push;let i=[];for(let t of e){e=zh(t);let n=[];for(let t of e.g())n.push({score:Qf(t,2)??0,index:Xf(t,1)??0??-1,categoryName:Ld(Cf(t,3))??``??``,displayName:Ld(Cf(t,4))??``??``});i.push(n)}r.call(n,...i),Q(this,t)})),this.g.attachEmptyPacketListener(`handedness`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Qv.prototype.detectForVideo=Qv.prototype.G,Qv.prototype.detect=Qv.prototype.F,Qv.prototype.setOptions=Qv.prototype.o,Qv.createFromModelPath=function(e,t){return Dv(Qv,e,{baseOptions:{modelAssetPath:t}})},Qv.createFromModelBuffer=function(e,t){return Dv(Qv,e,{baseOptions:{modelAssetBuffer:t}})},Qv.createFromOptions=function(e,t){return Dv(Qv,e,t)},Qv.HAND_CONNECTIONS=Kv;var $v=Cv([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function ey(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function ty(e){try{if(!e.D)return e.h;e.D(e.h)}finally{M_(e)}}function ny(e,t){e=qh(e),t.push(d_(e))}var ry=class extends Mv{constructor(e,t){super(new Ev(e,t),`input_frames_image`,null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,q(e=this.j=new Rg,0,1,t=new dg),this.I=new Eg,q(this.j,0,2,this.I),this.W=new Fg,q(this.j,0,3,this.W),this.u=new mg,q(this.j,0,4,this.u),this.O=new vg,q(this.j,0,5,this.O),this.A=new Ig,q(this.j,0,6,this.A),this.M=new Lg,q(this.j,0,7,this.M),J(this.u,2,.5),J(this.u,3,.3),J(this.O,2,.5),J(this.A,2,.5),J(this.A,3,.3),J(this.M,2,.5),J(this.I,2,.5)}get baseOptions(){return Uf(this.j,dg,1)}set baseOptions(e){q(this.j,0,1,e)}o(e){return`minFaceDetectionConfidence`in e&&J(this.u,2,e.minFaceDetectionConfidence??.5),`minFaceSuppressionThreshold`in e&&J(this.u,3,e.minFaceSuppressionThreshold??.3),`minFacePresenceConfidence`in e&&J(this.O,2,e.minFacePresenceConfidence??.5),`outputFaceBlendshapes`in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),`minPoseDetectionConfidence`in e&&J(this.A,2,e.minPoseDetectionConfidence??.5),`minPoseSuppressionThreshold`in e&&J(this.A,3,e.minPoseSuppressionThreshold??.3),`minPosePresenceConfidence`in e&&J(this.M,2,e.minPosePresenceConfidence??.5),`outputPoseSegmentationMasks`in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),`minHandLandmarksConfidence`in e&&J(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){let r=typeof t==`function`?{}:t;return this.D=typeof t==`function`?t:n,ey(this),kv(this,e,r),ty(this)}G(e,t,n,r){let i=typeof n==`function`?{}:n;return this.D=typeof n==`function`?n:r,ey(this),Av(this,e,i,t),ty(this)}m(){var e=new Nh;jh(e,`input_frames_image`),Mh(e,`pose_landmarks`),Mh(e,`pose_world_landmarks`),Mh(e,`face_landmarks`),Mh(e,`left_hand_landmarks`),Mh(e,`left_hand_world_landmarks`),Mh(e,`right_hand_landmarks`),Mh(e,`right_hand_world_landmarks`);let t=new Sh,n=new ch;ep(n,1,`type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions`),function(e,t){if(t!=null)if(Array.isArray(t))Tf(e,2,nf(t,0,af));else{if(!(typeof t==`string`||t instanceof nu||Ql(t)))throw Error(`invalid value in Any.value field: `+t+` expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array`);Ff(e,2,Nu(t,!1),eu())}}(n,this.j.g());let r=new Eh;ep(r,2,`mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph`),Yf(r,8,ch,n),Th(r,`IMAGE:input_frames_image`),X(r,`POSE_LANDMARKS:pose_landmarks`),X(r,`POSE_WORLD_LANDMARKS:pose_world_landmarks`),X(r,`FACE_LANDMARKS:face_landmarks`),X(r,`LEFT_HAND_LANDMARKS:left_hand_landmarks`),X(r,`LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks`),X(r,`RIGHT_HAND_LANDMARKS:right_hand_landmarks`),X(r,`RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks`),r.o(t),Ah(e,r),A_(this,e),this.g.attachProtoListener(`pose_landmarks`,((e,t)=>{ny(e,this.h.poseLandmarks),Q(this,t)})),this.g.attachEmptyPacketListener(`pose_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoListener(`pose_world_landmarks`,((e,t)=>{var n=this.h.poseWorldLandmarks;e=Gh(e),n.push(f_(e)),Q(this,t)})),this.g.attachEmptyPacketListener(`pose_world_landmarks`,(e=>{Q(this,e)})),this.outputPoseSegmentationMasks&&(X(r,`POSE_SEGMENTATION_MASK:pose_segmentation_mask`),j_(this,`pose_segmentation_mask`),this.g.Z(`pose_segmentation_mask`,((e,t)=>{this.h.poseSegmentationMasks=[jv(this,e,!0,!this.D)],Q(this,t)})),this.g.attachEmptyPacketListener(`pose_segmentation_mask`,(e=>{this.h.poseSegmentationMasks=[],Q(this,e)}))),this.g.attachProtoListener(`face_landmarks`,((e,t)=>{ny(e,this.h.faceLandmarks),Q(this,t)})),this.g.attachEmptyPacketListener(`face_landmarks`,(e=>{Q(this,e)})),this.outputFaceBlendshapes&&(Mh(e,`extra_blendshapes`),X(r,`FACE_BLENDSHAPES:extra_blendshapes`),this.g.attachProtoListener(`extra_blendshapes`,((e,t)=>{var n=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(e=zh(e),n.push(c_(e.g()??[]))),Q(this,t)})),this.g.attachEmptyPacketListener(`extra_blendshapes`,(e=>{Q(this,e)}))),this.g.attachProtoListener(`left_hand_landmarks`,((e,t)=>{ny(e,this.h.leftHandLandmarks),Q(this,t)})),this.g.attachEmptyPacketListener(`left_hand_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoListener(`left_hand_world_landmarks`,((e,t)=>{var n=this.h.leftHandWorldLandmarks;e=Gh(e),n.push(f_(e)),Q(this,t)})),this.g.attachEmptyPacketListener(`left_hand_world_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoListener(`right_hand_landmarks`,((e,t)=>{ny(e,this.h.rightHandLandmarks),Q(this,t)})),this.g.attachEmptyPacketListener(`right_hand_landmarks`,(e=>{Q(this,e)})),this.g.attachProtoListener(`right_hand_world_landmarks`,((e,t)=>{var n=this.h.rightHandWorldLandmarks;e=Gh(e),n.push(f_(e)),Q(this,t)})),this.g.attachEmptyPacketListener(`right_hand_world_landmarks`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ry.prototype.detectForVideo=ry.prototype.G,ry.prototype.detect=ry.prototype.F,ry.prototype.setOptions=ry.prototype.o,ry.createFromModelPath=function(e,t){return Dv(ry,e,{baseOptions:{modelAssetPath:t}})},ry.createFromModelBuffer=function(e,t){return Dv(ry,e,{baseOptions:{modelAssetBuffer:t}})},ry.createFromOptions=function(e,t){return Dv(ry,e,t)},ry.HAND_CONNECTIONS=Kv,ry.POSE_CONNECTIONS=$v,ry.FACE_LANDMARKS_LIPS=Pv,ry.FACE_LANDMARKS_LEFT_EYE=Fv,ry.FACE_LANDMARKS_LEFT_EYEBROW=Iv,ry.FACE_LANDMARKS_LEFT_IRIS=Lv,ry.FACE_LANDMARKS_RIGHT_EYE=Rv,ry.FACE_LANDMARKS_RIGHT_EYEBROW=zv,ry.FACE_LANDMARKS_RIGHT_IRIS=Bv,ry.FACE_LANDMARKS_FACE_OVAL=Vv,ry.FACE_LANDMARKS_CONTOURS=Hv,ry.FACE_LANDMARKS_TESSELATION=Uv;var iy=class extends Mv{constructor(e,t){super(new Ev(e,t),`input_image`,`norm_rect`,!0),this.j={classifications:[]},q(e=this.h=new Vg,0,1,t=new dg)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return q(this.h,0,2,o_(e,Uf(this.h,ig,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},kv(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Av(this,e,n,t),this.j}m(){var e=new Nh;jh(e,`input_image`),jh(e,`norm_rect`),Mh(e,`classifications`);let t=new Sh;Qp(t,Hg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.image_classifier.ImageClassifierGraph`),Th(n,`IMAGE:input_image`),Th(n,`NORM_RECT:norm_rect`),X(n,`CLASSIFICATIONS:classifications`),n.o(t),Ah(e,n),this.g.attachProtoListener(`classifications`,((e,t)=>{this.j=l_(Qh(e)),Q(this,t)})),this.g.attachEmptyPacketListener(`classifications`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};iy.prototype.classifyForVideo=iy.prototype.ta,iy.prototype.classify=iy.prototype.sa,iy.prototype.setOptions=iy.prototype.o,iy.createFromModelPath=function(e,t){return Dv(iy,e,{baseOptions:{modelAssetPath:t}})},iy.createFromModelBuffer=function(e,t){return Dv(iy,e,{baseOptions:{modelAssetBuffer:t}})},iy.createFromOptions=function(e,t){return Dv(iy,e,t)};var ay=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect`,!0),this.h=new Ug,this.embeddings={embeddings:[]},q(e=this.h,0,1,t=new dg)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){var t=this.h,n=Uf(this.h,og,2);return n=n?n.clone():new og,e.l2Normalize===void 0?`l2Normalize`in e&&Tf(n,1):Tf(n,1,Sd(e.l2Normalize)),e.quantize===void 0?`quantize`in e&&Tf(n,2):Tf(n,2,Sd(e.quantize)),q(t,0,2,n),this.l(e)}za(e,t){return kv(this,e,t),this.embeddings}Aa(e,t,n){return Av(this,e,n,t),this.embeddings}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect`),Mh(e,`embeddings_out`);let t=new Sh;Qp(t,Wg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect`),X(n,`EMBEDDINGS:embeddings_out`),n.o(t),Ah(e,n),this.g.attachProtoListener(`embeddings_out`,((e,t)=>{e=rg(e),this.embeddings=function(e){return{embeddings:Gf(e,tg,1).map((e=>{let t={headIndex:Xf(e,3)??0??-1,headName:Ld(Cf(e,4))??``??``};var n=e.v;return Hf(n,0|n[K],$h,Lf(e,1))===void 0?(n=new Uint8Array,t.quantizedEmbedding=Uf(e,eg,Lf(e,2),void 0)?.na()?.h()??n):(e=Of(e=Uf(e,$h,Lf(e,1),void 0),1,xd,Df()),t.floatEmbedding=e.slice()),t})),timestampMs:s_(Zf(e))}}(e),Q(this,t)})),this.g.attachEmptyPacketListener(`embeddings_out`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ay.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=m_(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error(`Cannot compute cosine similarity between quantized and float embeddings.`);e=m_(p_(e.quantizedEmbedding),p_(t.quantizedEmbedding))}return e},ay.prototype.embedForVideo=ay.prototype.Aa,ay.prototype.embed=ay.prototype.za,ay.prototype.setOptions=ay.prototype.o,ay.createFromModelPath=function(e,t){return Dv(ay,e,{baseOptions:{modelAssetPath:t}})},ay.createFromModelBuffer=function(e,t){return Dv(ay,e,{baseOptions:{modelAssetBuffer:t}})},ay.createFromOptions=function(e,t){return Dv(ay,e,t)};var oy=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function sy(e){let t=function(e){return Gf(e,Eh,1)}(e.ca()).filter((e=>(Ld(Cf(e,1))??``).includes(`mediapipe.tasks.TensorsToSegmentationCalculator`)));if(e.u=[],t.length>1)throw Error(`The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.`);t.length===1&&(Uf(t[0],Sh,7)?.j()?.g()??new Map).forEach(((t,n)=>{e.u[Number(n)]=Ld(Cf(t,1))??``}))}function cy(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function ly(e){try{let t=new oy(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{M_(e)}}oy.prototype.close=oy.prototype.close;var uy=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect`,!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Yg,this.A=new Gg,q(this.h,0,3,this.A),q(e=this.h,0,1,t=new dg)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return e.displayNamesLocale===void 0?`displayNamesLocale`in e&&Tf(this.h,2):Tf(this.h,2,Id(e.displayNamesLocale)),`outputCategoryMask`in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),`outputConfidenceMasks`in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){sy(this)}segment(e,t,n){let r=typeof t==`function`?{}:t;return this.j=typeof t==`function`?t:n,cy(this),kv(this,e,r),ly(this)}La(e,t,n,r){let i=typeof n==`function`?{}:n;return this.j=typeof n==`function`?n:r,cy(this),Av(this,e,i,t),ly(this)}Da(){return this.u}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect`);let t=new Sh;Qp(t,Xg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect`),n.o(t),Ah(e,n),A_(this,e),this.outputConfidenceMasks&&(Mh(e,`confidence_masks`),X(n,`CONFIDENCE_MASKS:confidence_masks`),j_(this,`confidence_masks`),this.g.aa(`confidence_masks`,((e,t)=>{this.confidenceMasks=e.map((e=>jv(this,e,!0,!this.j))),Q(this,t)})),this.g.attachEmptyPacketListener(`confidence_masks`,(e=>{this.confidenceMasks=[],Q(this,e)}))),this.outputCategoryMask&&(Mh(e,`category_mask`),X(n,`CATEGORY_MASK:category_mask`),j_(this,`category_mask`),this.g.Z(`category_mask`,((e,t)=>{this.categoryMask=jv(this,e,!1,!this.j),Q(this,t)})),this.g.attachEmptyPacketListener(`category_mask`,(e=>{this.categoryMask=void 0,Q(this,e)}))),Mh(e,`quality_scores`),X(n,`QUALITY_SCORES:quality_scores`),this.g.attachFloatVectorListener(`quality_scores`,((e,t)=>{this.qualityScores=e,Q(this,t)})),this.g.attachEmptyPacketListener(`quality_scores`,(e=>{this.categoryMask=void 0,Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};uy.prototype.getLabels=uy.prototype.Da,uy.prototype.segmentForVideo=uy.prototype.La,uy.prototype.segment=uy.prototype.segment,uy.prototype.setOptions=uy.prototype.o,uy.createFromModelPath=function(e,t){return Dv(uy,e,{baseOptions:{modelAssetPath:t}})},uy.createFromModelBuffer=function(e,t){return Dv(uy,e,{baseOptions:{modelAssetBuffer:t}})},uy.createFromOptions=function(e,t){return Dv(uy,e,t)};var dy=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};dy.prototype.close=dy.prototype.close;var fy=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect_in`,!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Yg,this.u=new Gg,q(this.h,0,3,this.u),q(e=this.h,0,1,t=new dg)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return`outputCategoryMask`in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),`outputConfidenceMasks`in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,r){let i=typeof n==`function`?{}:n;if(this.j=typeof n==`function`?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,r=new e_,t.keypoint&&t.scribble)throw Error(`Cannot provide both keypoint and scribble.`);if(t.keypoint){var a=new Zg;Ff(a,3,Sd(!0),!1),Ff(a,1,bd(t.keypoint.x),0),Ff(a,2,bd(t.keypoint.y),0),qf(r,1,t_,a)}else{if(!t.scribble)throw Error(`Must provide either a keypoint or a scribble.`);{let e=new $g;for(a of t.scribble)Ff(t=new Zg,3,Sd(!0),!1),Ff(t,1,bd(a.x),0),Ff(t,2,bd(a.y),0),Yf(e,1,Zg,t);qf(r,2,t_,e)}}this.g.addProtoToStream(r.g(),`mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest`,`roi_in`,n),kv(this,e,i);t:{try{let e=new dy(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=e;break t}this.j(e)}finally{M_(this)}o=void 0}return o}m(){var e=new Nh;jh(e,`image_in`),jh(e,`roi_in`),jh(e,`norm_rect_in`);let t=new Sh;Qp(t,Xg,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2`),Th(n,`IMAGE:image_in`),Th(n,`ROI:roi_in`),Th(n,`NORM_RECT:norm_rect_in`),n.o(t),Ah(e,n),A_(this,e),this.outputConfidenceMasks&&(Mh(e,`confidence_masks`),X(n,`CONFIDENCE_MASKS:confidence_masks`),j_(this,`confidence_masks`),this.g.aa(`confidence_masks`,((e,t)=>{this.confidenceMasks=e.map((e=>jv(this,e,!0,!this.j))),Q(this,t)})),this.g.attachEmptyPacketListener(`confidence_masks`,(e=>{this.confidenceMasks=[],Q(this,e)}))),this.outputCategoryMask&&(Mh(e,`category_mask`),X(n,`CATEGORY_MASK:category_mask`),j_(this,`category_mask`),this.g.Z(`category_mask`,((e,t)=>{this.categoryMask=jv(this,e,!1,!this.j),Q(this,t)})),this.g.attachEmptyPacketListener(`category_mask`,(e=>{this.categoryMask=void 0,Q(this,e)}))),Mh(e,`quality_scores`),X(n,`QUALITY_SCORES:quality_scores`),this.g.attachFloatVectorListener(`quality_scores`,((e,t)=>{this.qualityScores=e,Q(this,t)})),this.g.attachEmptyPacketListener(`quality_scores`,(e=>{this.categoryMask=void 0,Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};fy.prototype.segment=fy.prototype.segment,fy.prototype.setOptions=fy.prototype.o,fy.createFromModelPath=function(e,t){return Dv(fy,e,{baseOptions:{modelAssetPath:t}})},fy.createFromModelBuffer=function(e,t){return Dv(fy,e,{baseOptions:{modelAssetBuffer:t}})},fy.createFromOptions=function(e,t){return Dv(fy,e,t)};var py=class extends Mv{constructor(e,t){super(new Ev(e,t),`input_frame_gpu`,`norm_rect`,!1),this.j={detections:[]},q(e=this.h=new n_,0,1,t=new dg)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return e.displayNamesLocale===void 0?`displayNamesLocale`in e&&Tf(this.h,2):Tf(this.h,2,Id(e.displayNamesLocale)),e.maxResults===void 0?`maxResults`in e&&Tf(this.h,3):$f(this.h,3,e.maxResults),e.scoreThreshold===void 0?`scoreThreshold`in e&&Tf(this.h,4):J(this.h,4,e.scoreThreshold),e.categoryAllowlist===void 0?`categoryAllowlist`in e&&Tf(this.h,5):tp(this.h,5,e.categoryAllowlist),e.categoryDenylist===void 0?`categoryDenylist`in e&&Tf(this.h,6):tp(this.h,6,e.categoryDenylist),this.l(e)}F(e,t){return this.j={detections:[]},kv(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Av(this,e,n,t),this.j}m(){var e=new Nh;jh(e,`input_frame_gpu`),jh(e,`norm_rect`),Mh(e,`detections`);let t=new Sh;Qp(t,r_,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.ObjectDetectorGraph`),Th(n,`IMAGE:input_frame_gpu`),Th(n,`NORM_RECT:norm_rect`),X(n,`DETECTIONS:detections`),n.o(t),Ah(e,n),this.g.attachProtoVectorListener(`detections`,((e,t)=>{for(let t of e)e=Uh(t),this.j.detections.push(u_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`detections`,(e=>{Q(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};py.prototype.detectForVideo=py.prototype.G,py.prototype.detect=py.prototype.F,py.prototype.setOptions=py.prototype.o,py.createFromModelPath=async function(e,t){return Dv(py,e,{baseOptions:{modelAssetPath:t}})},py.createFromModelBuffer=function(e,t){return Dv(py,e,{baseOptions:{modelAssetBuffer:t}})},py.createFromOptions=function(e,t){return Dv(py,e,t)};var my=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function hy(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function gy(e){try{let t=new my(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{M_(e)}}my.prototype.close=my.prototype.close;var _y=class extends Mv{constructor(e,t){super(new Ev(e,t),`image_in`,`norm_rect`,!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,q(e=this.h=new i_,0,1,t=new dg),this.A=new Lg,q(this.h,0,3,this.A),this.j=new Ig,q(this.h,0,2,this.j),$f(this.j,4,1),J(this.j,2,.5),J(this.A,2,.5),J(this.h,4,.5)}get baseOptions(){return Uf(this.h,dg,1)}set baseOptions(e){q(this.h,0,1,e)}o(e){return`numPoses`in e&&$f(this.j,4,e.numPoses??1),`minPoseDetectionConfidence`in e&&J(this.j,2,e.minPoseDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.h,4,e.minTrackingConfidence??.5),`minPosePresenceConfidence`in e&&J(this.A,2,e.minPosePresenceConfidence??.5),`outputSegmentationMasks`in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){let r=typeof t==`function`?{}:t;return this.u=typeof t==`function`?t:n,hy(this),kv(this,e,r),gy(this)}G(e,t,n,r){let i=typeof n==`function`?{}:n;return this.u=typeof n==`function`?n:r,hy(this),Av(this,e,i,t),gy(this)}m(){var e=new Nh;jh(e,`image_in`),jh(e,`norm_rect`),Mh(e,`normalized_landmarks`),Mh(e,`world_landmarks`),Mh(e,`segmentation_masks`);let t=new Sh;Qp(t,a_,this.h);let n=new Eh;ep(n,2,`mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph`),Th(n,`IMAGE:image_in`),Th(n,`NORM_RECT:norm_rect`),X(n,`NORM_LANDMARKS:normalized_landmarks`),X(n,`WORLD_LANDMARKS:world_landmarks`),n.o(t),Ah(e,n),A_(this,e),this.g.attachProtoVectorListener(`normalized_landmarks`,((e,t)=>{this.landmarks=[];for(let t of e)e=qh(t),this.landmarks.push(d_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`normalized_landmarks`,(e=>{this.landmarks=[],Q(this,e)})),this.g.attachProtoVectorListener(`world_landmarks`,((e,t)=>{this.worldLandmarks=[];for(let t of e)e=Gh(t),this.worldLandmarks.push(f_(e));Q(this,t)})),this.g.attachEmptyPacketListener(`world_landmarks`,(e=>{this.worldLandmarks=[],Q(this,e)})),this.outputSegmentationMasks&&(X(n,`SEGMENTATION_MASK:segmentation_masks`),j_(this,`segmentation_masks`),this.g.aa(`segmentation_masks`,((e,t)=>{this.segmentationMasks=e.map((e=>jv(this,e,!0,!this.u))),Q(this,t)})),this.g.attachEmptyPacketListener(`segmentation_masks`,(e=>{this.segmentationMasks=[],Q(this,e)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};_y.prototype.detectForVideo=_y.prototype.G,_y.prototype.detect=_y.prototype.F,_y.prototype.setOptions=_y.prototype.o,_y.createFromModelPath=function(e,t){return Dv(_y,e,{baseOptions:{modelAssetPath:t}})},_y.createFromModelBuffer=function(e,t){return Dv(_y,e,{baseOptions:{modelAssetBuffer:t}})},_y.createFromOptions=function(e,t){return Dv(_y,e,t)},_y.POSE_CONNECTIONS=$v;var vy={Q:.01,R:1e-4},yy={minCutoff:2,beta:3,dCutoff:1},by={KALMAN:`kalman`,ONEEURO:`oneEuro`,NONE:`none`},xy=class{factor;prev;constructor(e){this.factor=e,this.prev=null}filter(e){return this.prev!==null&&(e=e*this.factor+this.prev*(1-this.factor)),this.prev=e,e}},Sy=class{Q;R;x;P;F;H;lastTime;constructor(e,t){this.Q=e,this.R=t,this.x=[[0],[0]],this.P=[[1,0],[0,1]],this.F=[[1,0],[0,1]],this.H=[[1,0]]}predict(e){let t=this.F,n=this.P,r=this.Q;t[0][1]=e;let i=[[t[0][0]*this.x[0][0]+t[0][1]*this.x[1][0]],[t[1][0]*this.x[0][0]+t[1][1]*this.x[1][0]]],a=r*e*e,o=a*e*.5,s=o*e*.5;this.P=[[t[0][0]*n[0][0]*t[0][0]+t[0][1]*n[1][0]*t[0][0]+t[0][0]*n[0][1]*t[0][1]+t[0][1]*n[1][1]*t[0][1]+s,t[0][0]*n[0][0]*t[1][0]+t[0][1]*n[1][0]*t[1][0]+t[0][0]*n[0][1]*t[1][1]+t[0][1]*n[1][1]*t[1][1]+o],[t[1][0]*n[0][0]*t[0][0]+t[1][1]*n[1][0]*t[0][0]+t[1][0]*n[0][1]*t[0][1]+t[1][1]*n[1][1]*t[0][1]+o,t[1][0]*n[0][0]*t[1][0]+t[1][1]*n[1][0]*t[1][0]+t[1][0]*n[0][1]*t[1][1]+t[1][1]*n[1][1]*t[1][1]+a]],this.x=i}update(e){let t=this.P,n=this.H,r=e-(n[0][0]*this.x[0][0]+n[0][1]*this.x[1][0]),i=n[0][0]*t[0][0]*n[0][0]+this.R,a=[t[0][0]*n[0][0]/i,t[1][0]*n[0][0]/i];return this.x[0][0]=this.x[0][0]+a[0]*r,this.x[1][0]=this.x[1][0]+a[1]*r,this.P=[[(1-a[0]*n[0][0])*t[0][0],(1-a[0]*n[0][0])*t[0][1]],[-a[1]*n[0][0]*t[0][0]+t[1][0],-a[1]*n[0][0]*t[0][1]+t[1][1]]],this.x[0][0]}filter(e,t){if(this.lastTime===void 0||t-this.lastTime===0)return this.lastTime=t,this.update(e);let n=t-this.lastTime;return this.predict(n),this.update(e)}},Cy=class{minCutoff;beta;dCutoff;x;dx;lastTime;constructor(e=1,t=.2,n=1){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.x=new xy(1),this.dx=new xy(1)}alpha(e,t){return 1/(1+1/(2*Math.PI*t)/e)}filter(e,t){if(this.lastTime===void 0||t-this.lastTime===0)return this.lastTime=t,this.x.filter(e);let n=t-this.lastTime;this.lastTime=t;let r=(e-(this.x.prev??e))/n;this.dx.factor=this.alpha(n,this.dCutoff);let i=this.dx.filter(r),a=this.minCutoff+this.beta*Math.abs(i);return this.x.factor=this.alpha(n,a),this.x.filter(e)}},$={WRIST:0,THUMB_CMC:1,THUMB_MCP:2,THUMB_IP:3,THUMB_TIP:4,INDEX_MCP:5,INDEX_PIP:6,INDEX_DIP:7,INDEX_TIP:8,MIDDLE_MCP:9,MIDDLE_PIP:10,MIDDLE_DIP:11,MIDDLE_TIP:12,RING_MCP:13,RING_PIP:14,RING_DIP:15,RING_TIP:16,PINKY_MCP:17,PINKY_PIP:18,PINKY_DIP:19,PINKY_TIP:20},wy=[[$.THUMB_CMC,$.THUMB_MCP,$.THUMB_IP,$.THUMB_TIP],[$.INDEX_MCP,$.INDEX_PIP,$.INDEX_DIP,$.INDEX_TIP],[$.MIDDLE_MCP,$.MIDDLE_PIP,$.MIDDLE_DIP,$.MIDDLE_TIP],[$.RING_MCP,$.RING_PIP,$.RING_DIP,$.RING_TIP],[$.PINKY_MCP,$.PINKY_PIP,$.PINKY_DIP,$.PINKY_TIP]],Ty=[wy[1],wy[2],wy[3],wy[4]];wy.map(e=>e[0]);var Ey=wy.map(e=>e[3]),Dy=Ty.map(e=>e[3]),Oy=Object.values($).length,ky={THUMB:0,INDEX:1,MIDDLE:2,RING:3,PINKY:4};function Ay(e,t,n){let r=e[t].x-e[n].x,i=e[t].y-e[n].y,a=e[t].z-e[n].z;return Math.sqrt(r*r+i*i+a*a)}function jy(e,t){return t?t.reduce((n,r)=>({x:n.x+e[r].x/t.length,y:n.y+e[r].y/t.length,z:n.z+e[r].z/t.length}),{x:0,y:0,z:0}):e.reduce((t,n)=>({x:t.x+n.x/e.length,y:t.y+n.y/e.length,z:t.z+n.z/e.length}),{x:0,y:0,z:0})}function My(e,t){return{x:e.x-t.x,y:e.y-t.y,z:e.z-t.z}}function Ny(e,t){return e.x*t.x+e.y*t.y+e.z*t.z}function Py(e){return Math.sqrt(Ny(e,e))}function Fy(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2+(e.z-t.z)**2)}function Iy(e,t,n){let r=My(e,t),i=My(n,t),a=Ny(r,i)/(Py(r)*Py(i));return Math.acos(a)*180/Math.PI}function Ly(e){return[e.x,e.y,e.z]}var Ry=function(){var e=0,t=document.createElement(`div`);t.style.cssText=`position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000`,t.addEventListener(`click`,function(n){n.preventDefault(),r(++e%t.children.length)},!1);function n(e){return t.appendChild(e.dom),e}function r(n){for(var r=0;r<t.children.length;r++)t.children[r].style.display=r===n?`block`:`none`;e=n}var i=(performance||Date).now(),a=i,o=0,s=n(new Ry.Panel(`FPS`,`#0ff`,`#002`)),c=n(new Ry.Panel(`MS`,`#0f0`,`#020`));if(self.performance&&self.performance.memory)var l=n(new Ry.Panel(`MB`,`#f08`,`#201`));return r(0),{REVISION:16,dom:t,addPanel:n,showPanel:r,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(c.update(e-i,200),e>=a+1e3&&(s.update(o*1e3/(e-a),100),a=e,o=0,l)){var t=performance.memory;l.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:t,setMode:r}};Ry.Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,c=48*o,l=3*o,u=2*o,d=3*o,f=15*o,p=74*o,m=30*o,h=document.createElement(`canvas`);h.width=s,h.height=c,h.style.cssText=`width:80px;height:48px`;var g=h.getContext(`2d`);return g.font=`bold `+9*o+`px Helvetica,Arial,sans-serif`,g.textBaseline=`top`,g.fillStyle=n,g.fillRect(0,0,s,c),g.fillStyle=t,g.fillText(e,l,u),g.fillRect(d,f,p,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,f,p,m),{dom:h,update:function(c,_){r=Math.min(r,c),i=Math.max(i,c),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,f),g.fillStyle=t,g.fillText(a(c)+` `+e+` (`+a(r)+`-`+a(i)+`)`,l,u),g.drawImage(h,d+o,f,p-o,m,d,f,p-o,m),g.fillRect(d+p-o,f,o,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+p-o,f,o,a((1-c/_)*m))}}};var zy=[`left`,`right`],By={x:0,y:0,w:window.innerWidth,h:window.innerHeight,isVisible:!0},Vy=class e{video;canvas;ctx;drawUtils;landmarker;worker;workerIsProcessing;filterType;filters;stats;results;isReady;showStats;showDebug;constructor(e,t,n,r){this.canvas=document.getElementById(`mediapipe-canvas`),this.video=document.getElementById(`mediapipe-video`),this.ctx=this.canvas.getContext(`2d`),this.landmarker=r,this.drawUtils=new fv(this.ctx),this.results={left:null,right:null},this.filterType=e,this.filters={left:[],right:[]},this.initFilters(),this.worker=new Worker(new URL(`/mesh-sculptor/assets/mediapipeWorker-C5kMtxCV.js`,``+import.meta.url),{type:`module`}),this.workerIsProcessing=!1,this.initWorker(),this.isReady=!1,this.showDebug=t,this.showStats=n,this.stats=new Ry,n&&(document.getElementById(`app-container`).appendChild(this.stats.dom),this.stats.dom.style.right=`0px`,this.stats.dom.style.left=``)}static async create(t,n=!1,r=!1,i=!1){if(i)return new e(t,n,r,{dummy:!0});let a=await y_.forVisionTasks(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm`);return new e(t,n,r,await Qv.createFromOptions(a,{baseOptions:{modelAssetPath:`https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,delegate:`GPU`},runningMode:`VIDEO`,numHands:2}))}async init(){if(this.landmarker.dummy)return;let e=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:320},height:{ideal:240}}});return new Promise(t=>{this.video.srcObject=e,this.video.addEventListener(`loadeddata`,()=>{this.resize(),this.isReady=!0,t()})})}predict(){if(!this.isReady)return;let e=this.video;if(e.lastVideoTime!==e.currentTime){e.lastVideoTime=e.currentTime;let t=performance.now(),n=this.landmarker.detectForVideo(this.video,t);this.processResults(n,t/1e3)}this.showDebug&&this.drawDebug()}async workerPredict(){if(!this.isReady)return;let e=this.video;if(e.lastVideoTime===e.currentTime)return;e.lastVideoTime=e.currentTime;let t=performance.now(),n=await createImageBitmap(this.video);this.workerIsProcessing?n.close():(this.worker.postMessage({frame:n,timestamp:t},[n]),this.workerIsProcessing=!0)}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.canvas.width=e,this.canvas.height=t;let n=this.video.videoWidth/this.video.videoHeight;n>e/t?(By.w=t*n,By.h=t,By.x=(e-By.w)/2,By.y=0):(By.w=e,By.h=e/n,By.x=0,By.y=(t-By.h)/2)}processResults(e,t){this.results.left=null,this.results.right=null;for(let n=0;n<e.landmarks.length;n++){let r=e.handedness[n][0].displayName.toLowerCase(),i=e.landmarks[n].map((e,n)=>this.transformLandmark(e,n,r,t)),a=e.worldLandmarks[n].map((e,n)=>this.transformWorldLandmark(e,n,r,t));this.results[r]={landmarks:i,worldLandmarks:a}}this.stats.update()}transformLandmark(e,t,n,r){let i=1-(By.x+e.x*By.w)/this.canvas.width,a=(By.y+e.y*By.h)/this.canvas.height,o=e.z;return this.filters===null?{x:i,y:a,z:o}:{x:this.filters[n][t].x.filter(i,r),y:this.filters[n][t].y.filter(a,r),z:this.filters[n][t].z.filter(o,r)}}transformWorldLandmark(e,t,n,r){let i=1-e.x,a=e.y,o=e.z;return this.filters===null?{x:i,y:a,z:o}:{x:this.filters[n][t].worldX.filter(i,r),y:this.filters[n][t].worldY.filter(a,r),z:this.filters[n][t].worldZ.filter(o,r)}}drawDebug(){this.ctx.save(),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);for(let e of Object.values(this.results))e&&this.drawUtils.drawConnectors(e.landmarks,Qv.HAND_CONNECTIONS,{color:`#FFFFFF`,lineWidth:2});this.ctx.restore()}initWorker(){this.worker.onmessage=e=>{this.workerIsProcessing=!1;let t=e.data;t.type===`results`&&(this.processResults(t.results,performance.now()/1e3),this.showDebug&&this.drawDebug())}}initFilters(){this.filters={left:Array(21).fill({}),right:Array(21).fill({})};for(let e of zy)if(this.filterType===by.KALMAN){let{Q:t,R:n}=vy;for(let r=0;r<Oy;r++)this.filters[e][r]={x:new Sy(t,n),y:new Sy(t,n),z:new Sy(t,n),worldX:new Sy(t,n),worldY:new Sy(t,n),worldZ:new Sy(t,n)}}else if(this.filterType===by.ONEEURO){let{minCutoff:t,beta:n,dCutoff:r}=yy;for(let i=0;i<Oy;i++)this.filters[e][i]={x:new Cy(t,n,r),y:new Cy(t,n,r),z:new Cy(t,n,r),worldX:new Cy(t,n,r),worldY:new Cy(t,n,r),worldZ:new Cy(t,n,r)}}else this.filterType===by.NONE&&(this.filters=null)}},Hy=class{container;btn;btnLabel;errorNode;tryStart;constructor(){this.container=document.getElementById(`home-container`),this.btn=document.getElementById(`home-btn`),this.btnLabel=document.getElementById(`home-btn-label`),this.errorNode=document.getElementById(`home-error`),this.btn.addEventListener(`click`,async()=>{this.setLoading(!0),this.setError(null);try{await this.tryStart?.(),this.dismiss()}catch(e){console.log(e);let t=e instanceof Error?e.name:`UnknownError`;t===`NotAllowedError`||t===`PermissionDeniedError`?this.setError(`Camera permission denied — please allow access and try again.`):t===`NotFoundError`||t===`DevicesNotFoundError`?this.setError(`No camera detected on this device.`):t===`NotReadableError`?this.setError(`Camera is in use by another application.`):this.setError(`Could not access camera. Please check your browser settings.`)}finally{this.setLoading(!1)}})}setError(e){if(e==null){this.errorNode.textContent=``,this.errorNode.classList.remove(`visible`);return}else this.errorNode.textContent=e,this.errorNode.classList.add(`visible`),this.btnLabel.textContent=`Try again`}setLoading(e){this.btn.classList.toggle(`loading`,e),this.btn.disabled=e,e&&(this.btnLabel.textContent=`Requesting access...`)}dismiss(){this.container.classList.add(`fade-out`),this.container.addEventListener(`transitionend`,()=>{this.container.remove()},{once:!0})}};function Uy(e,t,n){return Math.max(Math.min(e,n),t)}function Wy(e,t,n){return e+(t-e)*n}var Gy={constant:e=>1,cubic:e=>1-e*e*(3-2*e),quadratic:e=>(1-e)*(1-e),cosine:e=>.5*(1+Math.cos(Math.PI*e))};function Ky(e,t){let n=e/t;return n>=1?0:(1-n)**4*(1+4*n)}function qy(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Jy(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Yy(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function Xy(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function Zy(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function Qy(e){return Math.sqrt(qy(e,e))}function $y(e){let t=Math.max(Qy(e),1e-5);return[e[0]/t,e[1]/t,e[2]/t]}function eb(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2]}function tb(e,t){let n=[[0,0,0],[0,0,0],[0,0,0]];for(let r=0;r<3;r++)for(let i=0;i<3;i++)for(let a=0;a<3;a++)n[r][i]+=e[r][a]*t[a][i];return n}function nb(e){return[[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]]}function rb(e,t,n,r,i,a=!0){let o=r+(e-t)/(n-t)*(i-r);return a?Uy(o,r,i):o}var ib=class{voxelResolution;vdx;vdy;vdz;numVoxels;worldSize;halfWorldSize;voxelWorldSize;voxelsPerChunk;cdx;cdy;cdz;chunkResolution;chunks;chunksDirty;data;mesh;showMesh;isosurface;constructor(e,t=1,n=8,r=!1){this.voxelResolution=e,this.vdx=1,this.vdy=e,this.vdz=e*e,this.numVoxels=e*e*e,this.worldSize=t,this.halfWorldSize=t/2,this.voxelWorldSize=t/e,this.voxelsPerChunk=n,this.chunkResolution=Math.ceil(this.voxelResolution/this.voxelsPerChunk),this.cdx=1,this.cdy=this.chunkResolution,this.cdz=this.chunkResolution*this.chunkResolution,this.chunks=[],this.chunksDirty=new Uint8Array(this.chunkResolution**3);for(let e=0;e<this.chunkResolution;e++)for(let t=0;t<this.chunkResolution;t++)for(let n=0;n<this.chunkResolution;n++){let r=n+t*this.chunkResolution+e*this.chunkResolution**2;this.chunks.push({idx:r,vx:n*this.voxelsPerChunk,vy:t*this.voxelsPerChunk,vz:e*this.voxelsPerChunk,filledCount:0,dirty:!1,size:this.voxelsPerChunk,maxVoxels:Math.min(this.voxelsPerChunk,this.voxelResolution-n*this.voxelsPerChunk)*Math.min(this.voxelsPerChunk,this.voxelResolution-t*this.voxelsPerChunk)*Math.min(this.voxelsPerChunk,this.voxelResolution-e*this.voxelsPerChunk)})}this.data=new Float32Array(this.numVoxels).fill(1),this.isosurface=0,this.mesh=new mi(new Bi(this.voxelWorldSize,this.voxelWorldSize,this.voxelWorldSize),new Wr({color:16777215,wireframe:!0,transparent:!0,opacity:.1}),this.numVoxels),this.showMesh=r,this.mesh.visible=r,this.updateMesh()}vToW(e,t,n){return[e*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2,t*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2,n*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2]}wToV(e,t,n){return[Uy(Math.floor((e+this.halfWorldSize)/this.voxelWorldSize),0,this.voxelResolution),Uy(Math.floor((t+this.halfWorldSize)/this.voxelWorldSize),0,this.voxelResolution),Uy(Math.floor((n+this.halfWorldSize)/this.voxelWorldSize),0,this.voxelResolution)]}vIdx(e,t,n){return this.vdx*e+this.vdy*t+this.vdz*n}getVoxel(e,t,n){return this.data[this.vIdx(e,t,n)]}getChunk(e,t,n){let r=Math.floor(e/this.voxelsPerChunk),i=Math.floor(t/this.voxelsPerChunk),a=Math.floor(n/this.voxelsPerChunk);return this.chunks[r*this.cdx+i*this.cdy+a*this.cdz]}findComponent(e,t,n){let[r,i,a]=this.wToV(e,t,n);if(this.getVoxel(r,i,a)>this.isosurface)return new Int32Array;let o=this.voxelResolution,s=new Uint8Array(this.numVoxels),c=new Int32Array(this.numVoxels),l=new Int32Array(this.numVoxels),u=new Int32Array(this.numVoxels),d=(e,t,n)=>{let r=this.vIdx(e,t,n);s[r]||(s[r]=1,c[p]=e,l[p]=t,u[p]=n,p++)},f=0,p=0;d(r,i,a);let m=[],h=[1,-1,0,0,0,0],g=[0,0,1,-1,0,0],_=[0,0,0,0,1,-1];for(;f<p;){let e=c[f],t=l[f],n=u[f];if(f++,m.push(e),m.push(t),m.push(n),!(this.getVoxel(e,t,n)>this.isosurface+.15))for(let r=0;r<6;r++){let i=e+h[r],a=t+g[r],s=n+_[r];i<0||a<0||s<0||i>=o||a>=o||s>=o||d(i,a,s)}}return new Int32Array(m)}transformComponent(e,t,n,r){let i=e.length/3,a=this.voxelResolution,[o,s,c]=t,l=new Float32Array(i);for(let t=0;t<i;t++){let n=e[t*3],r=e[t*3+1],i=e[t*3+2];l[t]=this.getVoxel(n,r,i),this.setVoxel(n,r,i,1)}for(let t=0;t<i;t++){let n=e[t*3],r=e[t*3+1],i=e[t*3+2],[u,d,f]=this.vToW(n,r,i),p=u+o,m=d+s,h=f+c,[g,_,v]=this.wToV(p,m,h);if(g<0||_<0||v<0||g>=a||_>=a||v>=a)continue;let y=this.vIdx(g,_,v),b=this.data[y];this.setVoxel(g,_,v,Math.min(b,l[t]))}}markChunkDirty(e){e.dirty||(e.dirty=!0,this.chunksDirty[e.idx]=1)}markChunkNotDirty(e){e.dirty&&(e.dirty=!1,this.chunksDirty[e.idx]=0)}markAllChunksDirty(){for(let e of this.chunks)e.dirty=!0;this.chunksDirty.fill(1)}setVoxel(e,t,n,r){let i=this.vIdx(e,t,n),a=this.data[i];this.data[i]=r;let o=this.getChunk(e,t,n),s=a<this.isosurface,c=r<this.isosurface;o.filledCount+=!s&&c?1:s&&!c?-1:0,this.markChunkDirty(o)}setSDF(e){for(let t=0;t<this.voxelResolution;t++){let n=t*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let r=0;r<this.voxelResolution;r++){let i=r*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let a=0;a<this.voxelResolution;a++){let o=a*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;this.data[this.vIdx(t,r,a)]=Uy(e(n,i,o),-1,1)}}}this.markAllChunksDirty(),this.updateChunkFilledCounts(),this.updateMesh()}applyMinSDF(e){for(let t=0;t<this.voxelResolution;t++){let n=t*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let r=0;r<this.voxelResolution;r++){let i=r*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let a=0;a<this.voxelResolution;a++){let o=Uy(e(n,i,a*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2),-1,1),s=this.vIdx(t,r,a);this.data[s]=Math.min(this.data[s],o)}}}this.markAllChunksDirty(),this.updateChunkFilledCounts(),this.updateMesh()}applyMaxSDF(e){for(let t=0;t<this.voxelResolution;t++){let n=t*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let r=0;r<this.voxelResolution;r++){let i=r*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let a=0;a<this.voxelResolution;a++){let o=Uy(e(n,i,a*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2),-1,1),s=this.vIdx(t,r,a);this.data[s]=Math.max(this.data[s],o)}}}this.markAllChunksDirty(),this.updateChunkFilledCounts(),this.updateMesh()}setGrid(e){this.data.fill(e),this.markAllChunksDirty(),this.updateChunkFilledCounts(),this.updateMesh()}setIsosurface(e){this.isosurface=e,this.markAllChunksDirty(),this.updateChunkFilledCounts()}applyBrush(e,t,n,r,i=!0){let[a,o,s]=this.wToV(t,n,r),c=Math.ceil(e.radius/this.voxelWorldSize),l=e.radius**2,u=Math.max(0,a-c-1),d=Math.min(this.voxelResolution-1,a+c),f=Math.max(0,o-c-1),p=Math.min(this.voxelResolution-1,o+c),m=Math.max(0,s-c-1),h=Math.min(this.voxelResolution-1,s+c),g=d-u+1,_=g*(p-f+1),v=new Float32Array(_*(h-m+1)),y=(e,t,n)=>(e=Uy(e,u,d),t=Uy(t,f,p),n=Uy(n,m,h),(n-m)*_+(t-f)*g+(e-u)),b=(e,t,n)=>v[y(e,t,n)];for(let e=m;e<=h;e++)for(let t=f;t<=p;t++)for(let n=u;n<=d;n++)v[y(n,t,e)]=this.getVoxel(n,t,e);let x=this.calculateMass(a,o,s,c*2),S=!1;for(let i=m;i<=h;i++){let a=i*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let o=f;o<=p;o++){let s=o*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let c=u;c<=d;c++){let u=c*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2-t,d=s-n,f=a-r,p=[u,d,f],m=u*u+d*d+f*f;if(m>l)continue;let h=e.falloff(Math.sqrt(m)/e.radius)*e.strength,g=b(c,o,i),_=e.apply(e,{vx:c,vy:o,vz:i,current:g,weight:h,direction:p,getVal:b});_!=null&&_!==g&&(this.setVoxel(c,o,i,_),S=!0)}}}if(i){let e=this.calculateMass(a,o,s,c*2)-x;this.applyVolumeCorrection(a,o,s,c,c*2,e)}if(S){let e=Math.floor(u/this.voxelsPerChunk),t=Math.floor(d/this.voxelsPerChunk),n=Math.floor(f/this.voxelsPerChunk),r=Math.floor(p/this.voxelsPerChunk),i=Math.floor(m/this.voxelsPerChunk),a=Math.floor(h/this.voxelsPerChunk);for(let o=i;o<=a;o++)for(let i=n;i<=r;i++)for(let n=e;n<=t;n++)this.markChunkDirty(this.chunks[n*this.cdx+i*this.cdy+o*this.cdz])}}calculateMass(e,t,n,r){let i=Math.max(0,e-r-1),a=Math.min(this.voxelResolution-1,e+r),o=Math.max(0,t-r-1),s=Math.min(this.voxelResolution-1,t+r),c=Math.max(0,n-r-1),l=Math.min(this.voxelResolution-1,n+r),u=r*r,d=0;for(let r=c;r<=l;r++)for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){if((o-e)**2+(c-t)**2+(r-n)**2>u)continue;let i=this.getVoxel(o,c,r);i<this.isosurface&&(d+=this.isosurface-i)}return d}applyVolumeCorrection(e,t,n,r,i,a){if(Math.abs(a)<1e-5)return;let o=.001,s=Math.max(0,e-i-1),c=Math.min(this.voxelResolution-1,e+i),l=Math.max(0,t-i-1),u=Math.min(this.voxelResolution-1,t+i),d=Math.max(0,n-i-1),f=Math.min(this.voxelResolution-1,n+i),p=r**2,m=i**2,h=0;for(let r=d;r<=f;r++)for(let a=l;a<=u;a++)for(let l=s;l<=c;l++){let s=(l-e)**2+(a-t)**2+(r-n)**2;if(s<p||s>m)continue;let c=this.getVoxel(l,a,r),u=Ky(c-this.isosurface,1);if(c<this.isosurface&&u<o)continue;let d=Math.sqrt(s);h+=u*Gy.cubic(d/i)}if(h<1e-7)return;let g=a/h;for(let r=d;r<=f;r++)for(let a=l;a<=u;a++)for(let l=s;l<=c;l++){let s=(l-e)**2+(a-t)**2+(r-n)**2;if(s<p||s>m)continue;let c=this.getVoxel(l,a,r),u=Ky(c-this.isosurface,1);if(c<this.isosurface&&u<o)continue;let d=Math.sqrt(s),f=u*Gy.cubic(d/i);this.setVoxel(l,a,r,Uy(c+f*g,-1,1))}}updateChunkFilledCounts(){for(let e of this.chunks)e.filledCount=0;for(let e=0;e<this.voxelResolution;e++)for(let t=0;t<this.voxelResolution;t++)for(let n=0;n<this.voxelResolution;n++)this.data[this.vIdx(n,t,e)]<this.isosurface&&this.getChunk(n,t,e).filledCount++}updateMesh(){let e=new nn;for(let t=0;t<this.voxelResolution;t++){let n=t*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let r=0;r<this.voxelResolution;r++){let i=r*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2;for(let a=0;a<this.voxelResolution;a++){let o=a*this.voxelWorldSize-this.halfWorldSize+this.voxelWorldSize/2,s=this.vIdx(t,r,a);e.setPosition(n,i,o);let c=this.data[s]<0?1:.05;this.mesh.setMatrixAt(s,e),this.mesh.setColorAt(s,new U(c,.05,.05))}}}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0}},ab=class{geometry;enableUvs;enableColors;maxVertexCount;grid;normalCache;colorCache;positionArray;normalArray;uvArray;colorArray;vertexCount;edgeAxisOffsets;edgeAxes;tempPos;tempNor;tempCol;maxVerticesPerChunk;chunkVertexOffset;chunkVertexCount;constructor(e,t=!1,n=!1){this.geometry=new Nr,this.tempPos=new Float32Array(36),this.tempNor=new Float32Array(36),this.tempCol=new Float32Array(36),this.enableUvs=t,this.enableColors=n,this.grid=e,this.normalCache=new Float32Array(e.numVoxels*3),this.colorCache=new Float32Array(e.numVoxels*3),this.edgeAxisOffsets=[3*this.grid.vdx,3*this.grid.vdy,3*this.grid.vdz],this.edgeAxes=[[1,0,0],[0,1,0],[0,0,1]],this.maxVerticesPerChunk=e.voxelsPerChunk**3*15,this.chunkVertexCount=new Int32Array(e.chunks.length),this.chunkVertexOffset=new Int32Array(e.chunks.length).map((e,t)=>t*this.maxVerticesPerChunk),this.maxVertexCount=e.chunks.length*this.maxVerticesPerChunk,this.vertexCount=0,this.positionArray=new Float32Array(this.maxVertexCount*3);let r=new vr(this.positionArray,3);r.setUsage(Je),this.geometry.setAttribute(`position`,r),this.normalArray=new Float32Array(this.maxVertexCount*3);let i=new vr(this.normalArray,3);if(i.setUsage(Je),this.geometry.setAttribute(`normal`,i),this.uvArray=new Float32Array(this.maxVertexCount*2),this.enableUvs){let e=new vr(this.uvArray,2);e.setUsage(Je),this.geometry.setAttribute(`uv`,e)}if(this.colorArray=new Float32Array(this.maxVertexCount*3),this.enableColors){let e=new vr(this.colorArray,3);e.setUsage(Je),this.geometry.setAttribute(`color`,e)}}interpolateEdge(e,t,n,r,i,a,o,s){let c=t*3,l=c+this.edgeAxisOffsets[e],u=n*3,d=this.edgeAxes[e],f=Math.abs(o-s)<1e-5?.5:(this.grid.isosurface-o)/(s-o);this.tempPos[u+0]=r+f*d[0],this.tempPos[u+1]=i+f*d[1],this.tempPos[u+2]=a+f*d[2];let p=this.normalCache;this.tempNor[u+0]=Wy(p[c+0],p[l+0],f),this.tempNor[u+1]=Wy(p[c+1],p[l+1],f),this.tempNor[u+2]=Wy(p[c+2],p[l+2],f)}calcNormal(e){let t=e*3;if(this.normalCache[t]===0){let n=this.grid;this.normalCache[t+0]=n.data[e+n.vdx]-n.data[e-n.vdx],this.normalCache[t+1]=n.data[e+n.vdy]-n.data[e-n.vdy],this.normalCache[t+2]=n.data[e+n.vdz]-n.data[e-n.vdz]}}polygonize(e,t,n,r){let i=this.grid,a=r,o=a+i.vdx,s=a+i.vdy,c=o+i.vdy,l=a+i.vdz,u=o+i.vdz,d=s+i.vdz,f=c+i.vdz,p=0,m=i.data[a],h=i.data[o],g=i.data[s],_=i.data[c],v=i.data[l],y=i.data[u],b=i.data[d],x=i.data[f];m<i.isosurface&&(p|=1),h<i.isosurface&&(p|=2),g<i.isosurface&&(p|=8),_<i.isosurface&&(p|=4),v<i.isosurface&&(p|=16),y<i.isosurface&&(p|=32),b<i.isosurface&&(p|=128),x<i.isosurface&&(p|=64);let S=ob[p];if(S===0)return 0;S&1&&(this.calcNormal(a),this.calcNormal(o),this.interpolateEdge(0,a,0,e,t,n,m,h)),S&2&&(this.calcNormal(o),this.calcNormal(c),this.interpolateEdge(1,o,1,e+1,t,n,h,_)),S&4&&(this.calcNormal(s),this.calcNormal(c),this.interpolateEdge(0,s,2,e,t+1,n,g,_)),S&8&&(this.calcNormal(a),this.calcNormal(s),this.interpolateEdge(1,a,3,e,t,n,m,g)),S&16&&(this.calcNormal(l),this.calcNormal(u),this.interpolateEdge(0,l,4,e,t,n+1,v,y)),S&32&&(this.calcNormal(u),this.calcNormal(f),this.interpolateEdge(1,u,5,e+1,t,n+1,y,x)),S&64&&(this.calcNormal(d),this.calcNormal(f),this.interpolateEdge(0,d,6,e,t+1,n+1,b,x)),S&128&&(this.calcNormal(l),this.calcNormal(d),this.interpolateEdge(1,l,7,e,t,n+1,v,b)),S&256&&(this.calcNormal(a),this.calcNormal(l),this.interpolateEdge(2,a,8,e,t,n,m,v)),S&512&&(this.calcNormal(o),this.calcNormal(u),this.interpolateEdge(2,o,9,e+1,t,n,h,y)),S&1024&&(this.calcNormal(c),this.calcNormal(f),this.interpolateEdge(2,c,10,e+1,t+1,n,_,x)),S&2048&&(this.calcNormal(s),this.calcNormal(d),this.interpolateEdge(2,s,11,e,t+1,n,g,b));let C=0,w=p<<4;for(;sb[w]!=-1;)this.createTriangle(3*sb[w+0],3*sb[w+1],3*sb[w+2]),C++,w+=3;return C}createTriangle(e,t,n){let r=e;e=t,t=r;let i=this.vertexCount*3,a=this.grid.halfWorldSize,o=this.grid.voxelWorldSize;this.positionArray[i+0]=this.tempPos[e+0]*o-a,this.positionArray[i+1]=this.tempPos[e+1]*o-a,this.positionArray[i+2]=this.tempPos[e+2]*o-a,this.positionArray[i+3]=this.tempPos[t+0]*o-a,this.positionArray[i+4]=this.tempPos[t+1]*o-a,this.positionArray[i+5]=this.tempPos[t+2]*o-a,this.positionArray[i+6]=this.tempPos[n+0]*o-a,this.positionArray[i+7]=this.tempPos[n+1]*o-a,this.positionArray[i+8]=this.tempPos[n+2]*o-a,this.normalArray[i+0]=this.tempNor[e+0],this.normalArray[i+1]=this.tempNor[e+1],this.normalArray[i+2]=this.tempNor[e+2],this.normalArray[i+3]=this.tempNor[t+0],this.normalArray[i+4]=this.tempNor[t+1],this.normalArray[i+5]=this.tempNor[t+2],this.normalArray[i+6]=this.tempNor[n+0],this.normalArray[i+7]=this.tempNor[n+1],this.normalArray[i+8]=this.tempNor[n+2],this.enableColors&&(this.colorArray[i+0]=this.tempCol[e+0],this.colorArray[i+1]=this.tempCol[e+1],this.colorArray[i+2]=this.tempCol[e+2],this.colorArray[i+3]=this.tempCol[t+0],this.colorArray[i+4]=this.tempCol[t+1],this.colorArray[i+5]=this.tempCol[t+2],this.colorArray[i+6]=this.tempCol[n+0],this.colorArray[i+7]=this.tempCol[n+1],this.colorArray[i+8]=this.tempCol[n+2]),this.enableUvs&&(i=this.vertexCount*2,this.uvArray[i+0]=this.tempPos[e+0],this.uvArray[i+1]=this.tempPos[e+2],this.uvArray[i+2]=this.tempPos[t+0],this.uvArray[i+3]=this.tempPos[t+2],this.uvArray[i+4]=this.tempPos[n+0],this.uvArray[i+5]=this.tempPos[n+2]),this.vertexCount+=3}clearChunkNormalCache(e){let t=Math.max(0,e.vx-1),n=Math.max(0,e.vy-1),r=Math.max(0,e.vz-1),i=Math.min(this.grid.voxelResolution-1,e.vx+e.size),a=Math.min(this.grid.voxelResolution-1,e.vy+e.size),o=Math.min(this.grid.voxelResolution-1,e.vz+e.size);for(let e=r;e<=o;e++)for(let r=n;r<=a;r++)for(let n=t;n<=i;n++){let t=this.grid.vIdx(n,r,e)*3;this.normalCache[t]=0,this.normalCache[t+1]=0,this.normalCache[t+2]=0}}clearChunk(e){let t=e.idx;this.clearChunkNormalCache(e);let n=this.chunkVertexOffset[t]*3,r=this.maxVerticesPerChunk*3;this.positionArray.fill(0,n,n+r),this.normalArray.fill(0,n,n+r)}reset(){this.grid.setGrid(1),this.normalCache.fill(0),this.colorCache.fill(0)}triangulate(){this.vertexCount=0,this.normalCache.fill(0);let e=this.grid.voxelResolution-2;for(let t=1;t<e;t++){let n=this.grid.vdz*t;for(let r=1;r<e;r++){let i=n+this.grid.vdy*r;for(let n=1;n<e;n++){let e=i+this.grid.vdx*n;this.polygonize(n,r,t,e)}}}this.geometry.setDrawRange(0,this.vertexCount),this.geometry.getAttribute(`position`).needsUpdate=!0,this.geometry.getAttribute(`normal`).needsUpdate=!0,this.enableUvs&&(this.geometry.getAttribute(`uv`).needsUpdate=!0),this.enableColors&&(this.geometry.getAttribute(`color`).needsUpdate=!0),this.vertexCount>this.maxVertexCount&&console.log(`Marching cubes max vertex count exceeded.`)}triangulateDirty(){let e=!1,t=this.geometry.getAttribute(`position`),n=this.geometry.getAttribute(`normal`);for(let r of this.grid.chunks){if(!r.dirty)continue;e=!0,this.clearChunk(r);let i=r.idx,a=this.chunkVertexOffset[i],o=a*3,s=this.maxVerticesPerChunk*3;if(t.addUpdateRange(o,s),n.addUpdateRange(o,s),r.filledCount==0||r.filledCount>=r.maxVoxels){this.chunkVertexCount[i]=0,this.grid.markChunkNotDirty(r);continue}this.vertexCount=a;let c=Math.max(1,r.vx),l=Math.max(1,r.vy),u=Math.max(1,r.vz),d=Math.min(this.grid.voxelResolution-2,r.vx+r.size),f=Math.min(this.grid.voxelResolution-2,r.vy+r.size),p=Math.min(this.grid.voxelResolution-2,r.vz+r.size);for(let e=u;e<=p;e++){let t=this.grid.vdz*e;for(let n=l;n<=f;n++){let r=t+this.grid.vdy*n;for(let t=c;t<=d;t++){let i=r+this.grid.vdx*t;this.polygonize(t,n,e,i)}}}this.chunkVertexCount[i]=this.vertexCount-a,this.grid.markChunkNotDirty(r)}e&&(this.geometry.setDrawRange(0,this.maxVertexCount),t.needsUpdate=!0,n.needsUpdate=!0)}},ob=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),sb=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),cb=class{id;conditionFn;activationThreshold;activeCooldown;onUpdate;onStart;onEnd;onActive;state;lastActiveTime;confidence;isActive;constructor(e,t,n=5,r=33){this.id=e,this.conditionFn=t,this.activationThreshold=n,this.activeCooldown=r,this.onUpdate=()=>{},this.onStart=()=>{},this.onEnd=()=>{},this.onActive=()=>{},this.state={left:{},right:{}},this.lastActiveTime={left:0,right:0},this.confidence={left:0,right:0},this.isActive={left:!1,right:!1}}update(e,t,n=!1,r=Date.now()){let i=this.state[t],a=this.conditionFn(e,i);return this.confidence[t]+=a?1:-1.5,this.confidence[t]=Uy(this.confidence[t],0,this.activationThreshold),this._onUpdate(e,t),n||e.gesturePair?!1:(!this.isActive[t]&&this.confidence[t]>=this.activationThreshold?(this.isActive[t]=!0,this._onStart(e,i)):this.isActive[t]&&this.confidence[t]==0&&(this.isActive[t]=!1,this._onEnd(e,i)),this.isActive[t]&&r-this.lastActiveTime[t]>this.activeCooldown&&(this.lastActiveTime[t]=r,this._onActive(e,i)),this.isActive[t])}_onUpdate(e,t){this.onUpdate(e,t)}_onStart(e,t){this.onStart(e,t)}_onEnd(e,t){this.onEnd(e,t)}_onActive(e,t){this.onActive(e,t)}},lb=class{id;conditionFn;activationThreshold;activeCooldown;onUpdate;onStart;onEnd;onActive;state;lastActiveTime;confidence;isActive;constructor(e,t,n=5,r=33){this.id=e,this.conditionFn=t,this.activationThreshold=n,this.activeCooldown=r,this.state={},this.lastActiveTime=0,this.confidence=0,this.isActive=!1,this.onUpdate=()=>{},this.onStart=()=>{},this.onEnd=()=>{},this.onActive=()=>{}}update(e,t=!1,n=Date.now()){let r=this.conditionFn(e,this.state);return this.confidence+=r?1:-1.5,this.confidence=Uy(this.confidence,0,this.activationThreshold),this._onUpdate(e,this.state),t?!1:(!this.isActive&&this.confidence>=this.activationThreshold?(this.isActive=!0,this._onStart(e,this.state)):this.isActive&&this.confidence==0&&(this.isActive=!1,this._onEnd(e,this.state)),this.isActive&&n-this.lastActiveTime>this.activeCooldown&&this._onActive(e,this.state),this.isActive)}_onUpdate(e,t){this.onUpdate(e,t)}_onStart(e,t){this.onStart(e,t)}_onEnd(e,t){this.onEnd(e,t)}_onActive(e,t){this.onActive(e,t)}},ub=class{id;conditionFnA;conditionFnB;maxTimeInterval;triggerCooldown;onTriggerAB;onTriggerBA;lastActivationA;lastActivationB;lastTrigger;constructor(e,t,n,r=500,i=500){this.id=e,this.conditionFnA=t,this.conditionFnB=n,this.maxTimeInterval=r,this.triggerCooldown=i,this.onTriggerAB=()=>{},this.onTriggerBA=()=>{},this.lastActivationA={left:0,right:0},this.lastActivationB={left:0,right:0},this.lastTrigger={left:0,right:0}}update(e,t,n=!1,r=Date.now()){n||r-this.lastTrigger[t]<this.triggerCooldown||(this.conditionFnB(e)&&(r-this.lastActivationA[t]<this.maxTimeInterval&&(this._onTriggerAB(e,t),this.lastTrigger[t]=r),this.lastActivationB[t]=r),this.conditionFnA(e)&&(r-this.lastActivationB[t]<this.maxTimeInterval&&(this._onTriggerBA(e,t),this.lastTrigger[t]=r),this.lastActivationA[t]=r))}_onTriggerAB(e,t){this.onTriggerAB(this,e,t)}_onTriggerBA(e,t){this.onTriggerBA(this,e,t)}},db=class extends cb{finger;constructor(e,t,n,r=2,i=33){super(e,e=>e.metrics.pinchDistance[t-1]<n,r,i),this.finger=t}updateState(e,t){let n=jy(e.sceneLandmarks,[$.THUMB_TIP,Ey[this.finger]]);t={...t,...n}}_onStart(e,t){t.duration=0,super._onStart(e,t)}_onEnd(e,t){t.duration=0,super._onEnd(e,t)}_onActive(e,t){t.duration+=1,super._onActive(e,t)}_onUpdate(e,t){this.updateState(e,t),super._onUpdate(e,t)}},fb=15,pb=.15,mb=-.2,hb=4,gb=class{present;landmarks;worldLandmarks;relativeLandmarks;sceneLandmarks;transform;metrics;gesture;gesturePair;constructor(){this.present=!1,this.landmarks=[],this.worldLandmarks=[],this.relativeLandmarks=[],this.sceneLandmarks=[],this.transform={x:0,y:0,z:0,scale:1},this.metrics={pinchDistance:[],curlDistance:[],curlAngle:[],palmNormal:[0,0,0],fingerNormal:[0,0,0],handFrame:[[0,0,0],[0,0,0],[0,0,0]]},this.gesture=null,this.gesturePair=null}updateFromResult(e,t,n){if(!e){this.present=!1;return}this.present=!0,this.landmarks=e.landmarks,this.worldLandmarks=e.worldLandmarks,this.transform.scale=this.updateHandScale(e.landmarks);let r=t===`left`?1:-1,i=e.landmarks[$.MIDDLE_MCP].x+pb*r,a=e.landmarks[$.MIDDLE_MCP].y+mb,{x:o,y:s}=n.screenToWorld(i,a);this.transform.x=o,this.transform.y=s,this.transform.z=1.5/this.transform.scale-hb,this.relativeLandmarks=e.landmarks.map(e=>({x:e.x/this.transform.scale,y:e.y/this.transform.scale,z:e.z/this.transform.scale})),this.sceneLandmarks=e.worldLandmarks.map(e=>({x:fb*(e.x-1)+this.transform.x,y:fb*-e.y+this.transform.y,z:fb*e.z+this.transform.z})),this.updateMetrics()}updateMetrics(){if(!this.present)return;this.metrics.pinchDistance=Dy.map(e=>Ay(this.relativeLandmarks,e,$.THUMB_TIP)),this.metrics.curlDistance=Ty.map(e=>Ay(this.worldLandmarks,e[3],e[0])/Ay(this.worldLandmarks,e[0],$.WRIST)),this.metrics.curlAngle=Ty.map(e=>Iy(this.worldLandmarks[e[0]],this.worldLandmarks[e[1]],this.worldLandmarks[e[3]]));let e=Ly(this.worldLandmarks[$.INDEX_TIP]),t=Ly(this.worldLandmarks[$.INDEX_MCP]),n=Ly(this.worldLandmarks[$.MIDDLE_MCP]),r=Ly(this.worldLandmarks[$.PINKY_MCP]),i=Ly(this.worldLandmarks[$.WRIST]),a=Xy(t,i),o=Xy(r,i);this.metrics.palmNormal=$y(Jy(a,o));let s=Xy(e,t),c=Xy(r,t);this.metrics.fingerNormal=$y(Jy(s,c));let l=$y(this.metrics.palmNormal),u=$y(Jy(Xy(n,i),l)),d=$y(Jy(l,u));this.metrics.handFrame=[u,d,l]}updateHandScale(e){let t=Ay(e,$.INDEX_MCP,$.PINKY_MCP),n=Ay(e,$.WRIST,$.MIDDLE_MCP);return Math.max(t*1.58,n,.01)}},_b=Qv.HAND_CONNECTIONS,vb=new B(0,1,0),yb=class{points;bones;isVisible;_pointMatrix=new nn;_boneMatrix=new nn;_boneQuat=new Pt;_boneScale=new B;_bonePos=new B;_boneDir=new B;constructor(e){let t=new ea({color:16777215});this.points=new mi(new Ui(.1),t,Oy*2),this.points.frustumCulled=!1;let n=new ea({color:16777215});this.bones=new mi(new Vi(.1,.1,1,8),n,_b.length*2),this.bones.frustumCulled=!1,this.isVisible=e,this.setVisible(e)}update(e,t){let n=zy.indexOf(t),r=Oy*n,i=_b.length*n,a=e.sceneLandmarks;for(let t=0;t<Oy;t++)e.present?this._pointMatrix.setPosition(a[t].x,a[t].y,a[t].z):this._pointMatrix.setPosition(-1e3,-1e3,-1e3),this.points.setMatrixAt(r+t,this._pointMatrix);this.points.instanceMatrix.needsUpdate=!0;for(let t=0;t<_b.length;t++){if(!e.present){this._boneMatrix.setPosition(-1e3,-1e3,-1e3),this.bones.setMatrixAt(i+t,this._pointMatrix);continue}let{start:n,end:r}=_b[t],o=a[n],s=a[r];this._boneDir.set(s.x-o.x,s.y-o.y,s.z-o.z),this._bonePos.set(o.x+this._boneDir.x/2,o.y+this._boneDir.y/2,o.z+this._boneDir.z/2);let c=this._boneDir.length();this._boneScale.set(1,c,1),this._boneDir.normalize(),this._boneQuat.setFromUnitVectors(vb,this._boneDir),this._boneMatrix.compose(this._bonePos,this._boneQuat,this._boneScale),this.bones.setMatrixAt(i+t,this._boneMatrix)}this.bones.instanceMatrix.needsUpdate=!0}setColors(e,t,n){let r=Oy*zy.indexOf(t);for(let t of n)this.points.setColorAt(r+t,e);this.points.instanceColor.needsUpdate=!0}setVisible(e){this.isVisible=e,this.points.visible=e,this.bones.visible=e}},bb=class{gestures;gesturePairs;left;right;mesh;showMesh;constructor(e=!1){this.gestures=[],this.gesturePairs=[],this.left=new gb,this.right=new gb,this.mesh=new yb(e),this.showMesh=e}addGesture(e,t=0,n){if(e instanceof lb){this.gesturePairs.push({gesture:e,priority:t}),this.gesturePairs.sort((e,t)=>t.priority-e.priority);return}e instanceof ub&&(t=1/0),this.gestures.push({gesture:e,handedness:n,priority:t}),this.gestures.sort((e,t)=>t.priority-e.priority)}update(e,t){this.updateHands(e,t),this.updateGestures()}updateHands(e,t){for(let n of zy){let r=e[n],i=this[n];i.updateFromResult(r,n,t),this.showMesh&&this.mesh.update(i,n)}}updateGestures(){let e=Date.now();this.left.gesture=null,this.right.gesture=null;let t={left:this.left,right:this.right};for(let n of zy){let r=t[n];if(r.present)for(let{gesture:t,handedness:i}of this.gestures)i&&i!==n||(r.gesture?t.update(r,n,!0,e):r.gesture=t.update(r,n,!1,e)?t:null)}this.left.gesturePair=null,this.right.gesturePair=null;for(let{gesture:n}of this.gesturePairs)if(this.left.gesturePair||this.right.gesturePair)n.update(t,!0,e);else{let r=n.update(t,!1,e)?n:null;this.left.gesturePair=r,this.right.gesturePair=r}}},xb={type:`change`},Sb={type:`start`},Cb={type:`end`},wb=new Ur,Tb=new vi,Eb=Math.cos(70*Nt.DEG2RAD),Db=new B,Ob=2*Math.PI,kb={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ab=1e-6,jb=class extends io{constructor(n,r=null){super(n,r),this.state=kb.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Pt,this._lastTargetPosition=new B,this._quat=new Pt().setFromUnitVectors(n.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new no,this._sphericalDelta=new no,this._scale=1,this._panOffset=new B,this._rotateStart=new z,this._rotateEnd=new z,this._rotateDelta=new z,this._panStart=new z,this._panEnd=new z,this._panDelta=new z,this._dollyStart=new z,this._dollyEnd=new z,this._dollyDelta=new z,this._dollyDirection=new B,this._mouse=new z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nb.bind(this),this._onPointerDown=Mb.bind(this),this._onPointerUp=Pb.bind(this),this._onContextMenu=Vb.bind(this),this._onMouseWheel=Lb.bind(this),this._onKeyDown=Rb.bind(this),this._onTouchStart=zb.bind(this),this._onTouchMove=Bb.bind(this),this._onMouseDown=Fb.bind(this),this._onMouseMove=Ib.bind(this),this._interceptControlDown=Hb.bind(this),this._interceptControlUp=Ub.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xb),this.update(),this.state=kb.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Db.copy(t).sub(this.target),Db.applyQuaternion(this._quat),this._spherical.setFromVector3(Db),this.autoRotate&&this.state===kb.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ob:n>Math.PI&&(n-=Ob),r<-Math.PI?r+=Ob:r>Math.PI&&(r-=Ob),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Db.setFromSpherical(this._spherical),Db.applyQuaternion(this._quatInverse),t.copy(this.target).add(Db),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Db.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new B(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new B(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Db.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(wb.origin.copy(this.object.position),wb.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wb.direction))<Eb?this.object.lookAt(this.target):(Tb.setFromNormalAndCoplanarPoint(this.object.up,this.target),wb.intersectPlane(Tb,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ab||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ab||this._lastTargetPosition.distanceToSquared(this.target)>Ab?(this.dispatchEvent(xb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Ob/60/60*this.autoRotateSpeed:Ob/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Db.setFromMatrixColumn(t,0),Db.multiplyScalar(-e),this._panOffset.add(Db)}_panUp(e,t){this.screenSpacePanning===!0?Db.setFromMatrixColumn(t,1):(Db.setFromMatrixColumn(t,0),Db.crossVectors(this.object.up,Db)),Db.multiplyScalar(e),this._panOffset.add(Db)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Db.copy(r).sub(this.target);let i=Db.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ob*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ob*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ob*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ob*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ob*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ob*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ob*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ob*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mb(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Nb(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Pb(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Cb),this.state=kb.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Fb(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=kb.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=kb.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=kb.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=kb.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=kb.PAN}break;default:this.state=kb.NONE}this.state!==kb.NONE&&this.dispatchEvent(Sb)}function Ib(e){switch(this.state){case kb.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case kb.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case kb.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Lb(e){this.enabled===!1||this.enableZoom===!1||this.state!==kb.NONE||(e.preventDefault(),this.dispatchEvent(Sb),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Cb))}function Rb(e){this.enabled!==!1&&this._handleKeyDown(e)}function zb(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=kb.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=kb.TOUCH_PAN;break;default:this.state=kb.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=kb.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=kb.TOUCH_DOLLY_ROTATE;break;default:this.state=kb.NONE}break;default:this.state=kb.NONE}this.state!==kb.NONE&&this.dispatchEvent(Sb)}function Bb(e){switch(this._trackPointer(e),this.state){case kb.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case kb.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case kb.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case kb.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=kb.NONE}}function Vb(e){this.enabled!==!1&&e.preventDefault()}function Hb(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Ub(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Wb=50,Gb=.1,Kb=1e3,qb=new B(0,0,6),Jb=new vi(new B(0,0,1),0),Yb=class{scene;camera;renderer;raycaster;orbitControls;stats;showDebug;showStats;pendingSync;animate;resize;constructor(e=!1,t=!1,n){this.scene=new zn,this.camera=new ja(Wb,window.innerWidth/window.innerHeight,Gb,Kb),this.camera.position.copy(n??qb),this.renderer=new Sl({canvas:document.getElementById(`app`),antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.setAnimationLoop(this.animateLoop.bind(this)),this.stats=new Ry,t&&document.getElementById(`app-container`).appendChild(this.stats.dom),this.showStats=t,this.showDebug=e,this.raycaster=new $a,this.orbitControls=new jb(this.camera,this.renderer.domElement),this.animate=()=>{},this.resize=()=>{},this.pendingSync=null,this.setupScene()}add(e){this.scene.add(e)}screenToWorld(e,t){let n=new z(e*2-1,1-t*2),r=new B;return this.raycaster.setFromCamera(n,this.camera),this.raycaster.ray.intersectPlane(Jb,r),r}setupScene(){this.showDebug&&this.add(new ro(10,10));let e=new Pa(16777215,1);e.position.set(10,10,10),e.castShadow=!0,this.add(e),this.add(new Fa(8947848))}animateLoop(){this.orbitControls.update(),this.handleResize(),this.animate(),this.renderer.render(this.scene,this.camera),this.stats.update()}handleResize(){let e=this.renderer.domElement,t=e.clientWidth,n=e.clientHeight;(e.width!==t||e.height!==n)&&(this.renderer.setSize(t,n,!1),this.resize(),this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}async waitForGPU(){let e=this.renderer.getContext();return this.pendingSync&&e.deleteSync(this.pendingSync),this.pendingSync=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),new Promise(t=>{let n=()=>{if(!this.pendingSync)t();else{let r=e.clientWaitSync(this.pendingSync,e.SYNC_FLUSH_COMMANDS_BIT,0);r===e.ALREADY_SIGNALED||r===e.CONDITION_SATISFIED?(e.deleteSync(this.pendingSync),this.pendingSync=null,t()):setTimeout(n,0)}};n()})}},Xb=class{radius;strength;falloff;state;before;apply;after;constructor(e,t,n,r){this.radius=e,this.strength=t,this.falloff=n,this.apply=r,this.state={}}},Zb={noop:new Xb(.2,0,Gy.constant,(e,{current:t})=>t),indent:new Xb(.15,.5,Gy.cubic,(e,{current:t,weight:n})=>Uy(t+n,-1,1)),pinch:new Xb(.2,.7,Gy.cosine,(e,{current:t,weight:n})=>Uy(t-n*e.state.factor,-1,1)),smooth:new Xb(.5,1,Gy.cubic,(e,t)=>{let{vx:n,vy:r,vz:i,getVal:a,current:o,weight:s}=t;return o+s*((a(n+1,r,i)+a(n-1,r,i)+a(n,r+1,i)+a(n,r-1,i)+a(n,r,i+1)+a(n,r,i-1))/6-o)}),squish:new Xb(.2,.6,Gy.cubic,(e,t)=>{let{left:n,right:r,mid:i,crossAxis:a}=e.state,{current:o,direction:s,weight:c}=t,l=Yy(i,s),u=qy(Xy(l,n),Zy(a,-1)),d=qy(Xy(l,r),Zy(a,1));if(u<0||d<0){let t=Uy(o+c/1,-1,1);return e.state.massStore+=t-o,t}let f=Uy(o-c/4,-1,1);return e.state.massStore+f-o<0?o:(e.state.massStore+=f-o,f)}),roll:new Xb(.2,.4,Gy.cubic,(e,t)=>{let{mid:n,rollAxis:r}=e.state,{current:i,direction:a,weight:o}=t,s=e.radius/4,c=Yy(n,a);if(Qy(Xy(c,Zy(r,qy(Xy(c,n),r)/qy(r,r))))-s>0){let t=Uy(i+o,-1,1);return e.state.massStore+=t-i,t}let l=Uy(i-o,-1,1);return e.state.massStore+l-i<0?i:(e.state.massStore+=l-i,l)})},Qb={SHOW_WORLD_GRID:!1,SHOW_VOXEL_GRID:!1,SHOW_SCENE_STATS:!1,SHOW_MEDIAPIPE_CONNECTIONS:!1,SHOW_MEDIAPIPE_STATS:!1,SHOW_HAND_MESH:!0,SHOW_GESTURE:!1,MEDIAPIPE_FILTER:by.ONEEURO,MEDIAPIPE_DUMMY:!1,MEDIAPIPE_WORKER:!1},$b=new Yb(Qb.SHOW_WORLD_GRID,Qb.SHOW_SCENE_STATS),ex=await Vy.create(Qb.MEDIAPIPE_FILTER,Qb.SHOW_MEDIAPIPE_CONNECTIONS,Qb.SHOW_MEDIAPIPE_STATS,Qb.MEDIAPIPE_DUMMY),tx=new Hy;tx.tryStart=async()=>await ex.init();var nx=new ib(80,6,8,Qb.SHOW_VOXEL_GRID);nx.setSDF((e,t,n)=>(Math.sqrt(e*e+t*t+n*n)-.8)*3);var rx=new ab(nx);rx.triangulateDirty();var ix=new ni(rx.geometry,new $i({color:13153434,wireframe:!1})),ax=new bb(Qb.SHOW_HAND_MESH),ox=new cb(`indent`,()=>!0);ox.onActive=(e,t)=>{let n=e.sceneLandmarks[$.INDEX_TIP],r=e.sceneLandmarks[$.MIDDLE_TIP];nx.applyBrush(Zb.indent,n.x,n.y,n.z),nx.applyBrush(Zb.indent,r.x,r.y,r.z)};var sx=new db(`pinch`,ky.INDEX,.25,5);sx.onStart=(e,t)=>{let n=e.sceneLandmarks[$.INDEX_TIP],r=Math.ceil(Zb.pinch.radius/nx.voxelWorldSize),[i,a,o]=nx.wToV(n.x,n.y,n.z),s=nx.calculateMass(i,a,o,r);t.lastPos={...n},t.remainingMass=s,t.totalMass=s},sx.onActive=(e,t)=>{let n=e.sceneLandmarks[$.INDEX_TIP];if(!t.totalMass||!t.remainingMass)return;let r=Fy(n,t.lastPos);t.lastPos={...n};let i=rb(r,0,.02,0,.2,!1);t.remainingMass*=Math.max(0,1-.2*i),t.remainingMass<.1&&(t.remainingMass=0),Zb.pinch.state.factor=t.remainingMass/t.totalMass,nx.applyBrush(Zb.pinch,n.x,n.y,n.z)};var cx=new cb(`claw`,e=>{let t=e.metrics.curlAngle,n=Math.max(...t),r=Math.min(...t),i=t.reduce((e,t)=>e+t,0)/t.length;return i>100&&i<140&&n-r<30},10);cx.onStart=(e,t)=>{let n=jy(e.sceneLandmarks,[$.PINKY_TIP,$.THUMB_TIP,$.MIDDLE_MCP]);t.component=nx.findComponent(n.x,n.y,n.z),t.startPos=n,t.startFrame=e.metrics.handFrame},cx.onActive=(e,t)=>{let n=jy(e.sceneLandmarks,[$.PINKY_TIP,$.THUMB_TIP,$.MIDDLE_MCP]),r=Xy(Ly(n),Ly(t.startPos)),i=tb(e.metrics.handFrame,nb(t.startFrame));nx.transformComponent(t.component,r,i,Ly(e.sceneLandmarks[$.WRIST])),t.component=nx.findComponent(n.x,n.y,n.z),t.startPos=n,t.startFrame=e.metrics.handFrame};var lx=new cb(`swipe`,(e,t)=>{let n=e.metrics.curlAngle,r=Math.min(...n),i=Math.max(...n);if(n.reduce((e,t)=>e+t,0)/n.length<100||i-r>30)return!1;let a=e.sceneLandmarks[$.MIDDLE_PIP];if(t.lastPos){let e=Fy(a,t.lastPos);t.speed=(t.speed??0)*.5+e*.5}return t.lastPos={...a},t.speed>.05},10);lx.onActive=e=>{let t=e.sceneLandmarks[$.MIDDLE_PIP];nx.applyBrush(Zb.smooth,t.x,t.y,t.z,!1)};var ux=e=>{if(!e.present)return!1;let t=e.metrics.curlAngle,n=Math.min(...t),r=t.reduce((e,t)=>e+t,0)/t.length,i=qy(e.metrics.palmNormal,e.metrics.fingerNormal);return n>110&&r>120&&r-n<25&&i>.66},dx=new lb(`squish`,(e,t)=>{if(!ux(e.left)||!ux(e.right))return!1;let n=e.left.metrics.palmNormal,r=e.right.metrics.palmNormal;return qy(n,r)>.5});dx.onStart=(e,t)=>{Zb.squish.state.massStore=0},dx.onActive=(e,t)=>{let n=Ly(e.left.sceneLandmarks[$.MIDDLE_MCP]),r=Ly(e.right.sceneLandmarks[$.MIDDLE_MCP]),i=eb(n,r),a=Xy(n,r);Zb.squish.radius=Qy(a),Zb.squish.state.left=n,Zb.squish.state.mid=i,Zb.squish.state.right=r,Zb.squish.state.crossAxis=$y(a),nx.applyBrush(Zb.squish,...i,!1)};var fx=new lb(`roll`,(e,t)=>{if(!ux(e.left)||!ux(e.right))return!1;let n=e.left.metrics.palmNormal,r=e.right.metrics.palmNormal;if(qy(n,r)<.5)return!1;let i=Ly(e.left.sceneLandmarks[$.MIDDLE_PIP]),a=Ly(e.right.sceneLandmarks[$.MIDDLE_PIP]);if(!t.leftLastPos||!t.rightLastPos)return t.leftLastPos=i,t.rightLastPos=a,!1;let o=Xy(i,t.leftLastPos),s=Xy(a,t.rightLastPos);return Qy(o)<.03||Qy(s)<.03||(t.leftLastPos=i,t.rightLastPos=a,qy(o,s)>0)||Math.abs(qy(n,o))>.3||Math.abs(qy(r,s))>.3?!1:(t.rollAxis=$y(Jy(o,n)),!0)},8);fx.onStart=(e,t)=>{Zb.roll.state.massStore=0,Zb.roll.state.closestDistance=null},fx.onActive=(e,t)=>{let n=Ly(e.left.sceneLandmarks[$.MIDDLE_MCP]),r=Ly(e.right.sceneLandmarks[$.MIDDLE_MCP]),i=eb(n,r),a=Xy(n,r);Zb.roll.radius=Math.min(Qy(a)*2,Zb.roll.state.closestDistance??1/0),Zb.roll.state.mid=i,Zb.roll.state.rollAxis=t.rollAxis,nx.applyBrush(Zb.roll,...i,!1)};var px=new ub(`reset`,e=>e.landmarks[$.MIDDLE_MCP].x<.2,e=>e.landmarks[$.MIDDLE_MCP].x>.8);px.onTriggerAB=()=>{nx.setSDF((e,t,n)=>(Math.sqrt(e*e+t*t+n*n)-.8)*3)},ax.addGesture(ox,0),ax.addGesture(sx,2),ax.addGesture(cx,1),ax.addGesture(lx,3),ax.addGesture(dx,1),ax.addGesture(px),$b.add(nx.mesh),$b.add(ix),$b.add(ax.mesh.bones),$b.add(ax.mesh.points),$b.resize=()=>{ex.resize()};var mx=document.getElementById(`debug-text`),hx=0,gx=Date.now();$b.animate=async()=>{Qb.MEDIAPIPE_WORKER?(await $b.waitForGPU(),ex.workerPredict()):ex.predict(),ax.update(ex.results,$b),rx.triangulate(),Qb.SHOW_GESTURE&&(mx.textContent=`Left: ${ax.left.gesturePair?.id??ax.left.gesture?.id}\n Right: ${ax.right.gesturePair?.id??ax.right.gesture?.id}`);let e=Date.now(),t=e-gx;hx=.5*hx+.5*1e3/t,gx=e};