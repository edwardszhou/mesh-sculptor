
let add = (a,b) => { let v = []; for (let i=0 ; i<a.length ; i++) v.push(a[i] + b[i]); return v; }
let cross = (a,b) => [ a[1]*b[2] - a[2]*b[1], a[2]*b[0] - a[0]*b[2], a[0]*b[1] - a[1]*b[0] ];
let dot = (a,b) => { let s = 0 ; for (let i=0 ; i<a.length ; i++) s += a[i] * b[i]; return s; }
let ease = t => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - t - t); }
let evalBezier = (B,t) => (1-t)*(1-t)*(1-t)*B[0] + 3*(1-t)*(1-t)*t*B[1] + 3*(1-t)*t*t*B[2] + t*t*t*B[3];
let mix = (a,b,t) => { let c = []; for (let i=0 ; i<a.length ; i++) c[i] = a[i] + t*(b[i]-a[i]); return c; }
let norm = v => Math.sqrt(dot(v,v));
let normalize = v => { let s = norm(v); return v.length==3 ? [ v[0]/s,v[1]/s,v[2]/s ] : [ v[0]/s,v[1]/s ]; }
let resize = (v,s) => v.length==2 ? [ s*v[0], s*v[1] ] : [s*v[0], s*v[1], s*v[2] ];
let subtract = (a,b) => { let v = []; for (let i=0 ; i<a.length ; i++) v.push(a[i] - b[i]); return v; }

// THIS IS A SIMPLE IMPLEMENTATION OF THE OPERATIONS NEEDED FOR MATRIX MANIPULATION.

let c = t => Math.cos(t);
let s = t => Math.sin(t);
let identity = () => [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
let move = (x,y,z) => { if (y===undefined) {z=x[2];y=x[1];x=x[0];}
                        return [1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1]; }
let turnX = t => [1,0,0,0, 0,c(t),s(t),0, 0,-s(t),c(t),0, 0,0,0,1];
let turnY = t => [c(t),0,-s(t),0, 0,1,0,0, s(t),0,c(t),0, 0,0,0,1];
let turnZ = t => [c(t),s(t),0,0, -s(t),c(t),0,0, 0,0,1,0, 0,0,0,1];
let scale = (x,y,z) => [x,0,0,0, 0,y??x,0,0, 0,0,z??x,0, 0,0,0,1];
let perspective = (x,y,z) => [1,0,0,x, 0,1,0,y??x, 0,0,1,z??x, 0,0,0,1];

// Multiply two matrices.

let mxm = (a,b) => {
   let m = [];
   for (let c = 0 ; c < 16 ; c += 4)
   for (let r = 0 ; r < 4 ; r++)
      m.push( a[r]*b[c] + a[r+4]*b[c+1] + a[r+8]*b[c+2] + a[r+12]*b[c+3] );
   return m;
}

// Invert a matrix.

let inverse = src => {
   let dst = [], det = 0, cofactor = (c, r) => {
      let s = (i, j) => src[c+i & 3 | (r+j & 3) << 2];
      return (c+r & 1 ? -1 : 1) * ( (s(1,1)*(s(2,2)*s(3,3)-s(3,2)*s(2,3)))
                                  - (s(2,1)*(s(1,2)*s(3,3)-s(3,2)*s(1,3)))
                                  + (s(3,1)*(s(1,2)*s(2,3)-s(2,2)*s(1,3))) );
   }
   for (let n = 0 ; n < 16 ; n++) dst.push(cofactor(n >> 2, n & 3));
   for (let n = 0 ; n <  4 ; n++) det += src[n] * dst[n << 2];
   for (let n = 0 ; n < 16 ; n++) dst[n] /= det;
   return dst;
}

// Rotation matrix which brings the Z axis to a specified direction.

let aim = Z => {
   let X = normalize(cross([0,1,0], Z = normalize(Z))),
       Y = normalize(cross(Z, X));
   return [ X[0],X[1],X[2],0, Y[0],Y[1],Y[2],0, Z[0],Z[1],Z[2],0, 0,0,0,1 ];
}

// NESTABLE MATRIX OBJECT

function Matrix() {
   let m = [identity()], top = 0;
   this.aim         = Z       => { m[top] = mxm(m[top],aim(Z)); return this; }
   this.call        = proc    => { proc(); return this; }
   this.get         = ()      => m[top];
   this.identity    = ()      => { m[top] = identity(); return this; }
   this.inverse     = ()      => { m[top] = inverse(m[top]); return this; }
   this.move        = (x,y,z) => { m[top] = mxm(m[top],move(x,y,z)); return this; }
   this.perspective = (x,y,z) => { m[top] = mxm(m[top], perspective(x,y,z)); return this; }
   this.pop         = ()      => { if (top > 0) top--; return this; }
   this.push        = ()      => { m[top+1] = m[top].slice(); top++; return this; }
   this.scale       = (x,y,z) => { m[top] = mxm(m[top], scale(x,y,z)); return this; }
   this.set         = matrix  => { m[top] = matrix; return this; }
   this.transform   = p       => { m[top] = transform(m[top],p); return this; }
   this.transpose   = ()      => { m[top] = transpose(m[top]); return this; }
   this.turnX       = a       => { m[top] = mxm(m[top], turnX(a)); return this; }
   this.turnY       = a       => { m[top] = mxm(m[top], turnY(a)); return this; }
   this.turnZ       = a       => { m[top] = mxm(m[top], turnZ(a)); return this; }
}

// SOME USEFUL PRIMITIVE SHAPES

let Shape = {

cube: [
  -1,-1,-1, 0, 0,-1,  1,-1,-1, 0, 0,-1,  1, 1,-1, 0, 0,-1,
   1, 1,-1, 0, 0,-1, -1, 1,-1, 0, 0,-1, -1,-1,-1, 0, 0,-1,
  -1,-1, 1, 0, 0, 1,  1,-1, 1, 0, 0, 1,  1, 1, 1, 0, 0, 1,
   1, 1, 1, 0, 0, 1, -1, 1, 1, 0, 0, 1, -1,-1, 1, 0, 0, 1,
  
  -1,-1,-1, 0,-1, 0,  1,-1,-1, 0,-1, 0,  1,-1, 1, 0,-1, 0,
   1,-1, 1, 0,-1, 0, -1,-1, 1, 0,-1, 0, -1,-1,-1, 0,-1, 0,
  -1, 1,-1, 0, 1, 0,  1, 1,-1, 0, 1, 0,  1, 1, 1, 0, 1, 0,
   1, 1, 1, 0, 1, 0, -1, 1, 1, 0, 1, 0, -1, 1,-1, 0, 1, 0,

  -1,-1,-1,-1, 0, 0, -1, 1,-1,-1, 0, 0, -1, 1, 1,-1, 0, 0,
  -1, 1, 1,-1, 0, 0, -1,-1, 1,-1, 0, 0, -1,-1,-1,-1, 0, 0,
   1,-1,-1, 1, 0, 0,  1, 1,-1, 1, 0, 0,  1, 1, 1, 1, 0, 0,
   1, 1, 1, 1, 0, 0,  1,-1, 1, 1, 0, 0,  1,-1,-1, 1, 0, 0,
],

parametric: (f,nu,nv,other) => {
   let V = [];
   for (let j = 0 ; j < nv ; j++) {
      for (let i = 0 ; i <= nu ; i++) {
         V.push(f(i/nu,j/nv,other));
         V.push(f(i/nu,(j+1)/nv,other));
      }
      V.push(f(1,(j+1)/nv,other));
      V.push(f(0,(j+1)/nv,other));
   }
   return V.flat();
},

sphere: (nu,nv) => Shape.parametric((u,v) => {
   let theta = 2 * Math.PI * u;
   let phi = Math.PI * (v - 1/2);
   let cu = Math.cos(theta);
   let su = Math.sin(theta);
   let cv = Math.cos(phi);
   let sv = Math.sin(phi);
   let x = cu * cv, y = su * cv, z = sv;
   return [x,y,z, x,y,z];
},nu,nv),

tube: n => Shape.parametric((u,v) => {
   let theta = 2 * Math.PI * u;
   let c = Math.cos(theta);
   let s = Math.sin(theta);
   return [c,s,2*v-1, c,s,0];
},n,2),

cubeMesh: () => {
   return {
      triangle_strip: false,
      data: new Float32Array(Shape.cube)
   };
},

sphereMesh: (nu, nv) => {
   return {
      triangle_strip: true,
      data: new Float32Array(Shape.sphere(nu,nv))
   };
},

tubeMesh: n => {
   return {
      triangle_strip: true,
      data: new Float32Array(Shape.tube(n))
   };
},

};
