class V3 {
  static add(a, b) { return V3(a[0] + b[0], a[1] + b[1], a[2] + b[2]) }
  static sub(a, b) { return V3(a[0] - b[0], a[1] - b[1], a[2] - b[2]) }
  static mul(a, b) { return V3(a[0] * b[0], a[1] * b[1], a[2] * b[2]) }
  static div(a, b) { return V3(a[0] / b[0], a[1] / b[1], a[2] / b[2]) }

  static cross(a, b) { return V3(a[1]*b[2] - a[2]*b[1], a[2]*b[0] - a[0]*b[2], a[0]*b[1] - a[1]*b[0])};
  static dot(a, b) { return a[0]*b[0] + a[1]*b[1] + a[2]*b[2] }
  static mix(a,b,t) { return V3(a[0] + t*(b[0]-a[0]), a[1] + t*(b[1]-a[1]), a[2] + t*(b[2]-a[2])) }
  static length(v) {return Math.sqrt(V3.dot(v,v));}
  static normalize(v) { return v.div(V3.length(v)) }
}

class V4 {
  static add(a, b) { return V4(a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]) }
  static sub(a, b) { return V4(a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3]) }
  static mul(a, b) { return V4(a[0] * b[0], a[1] * b[1], a[2] * b[2], a[3] * b[3]) }
  static div(a, b) { return V4(a[0] / b[0], a[1] / b[1], a[2] / b[2], a[3] / b[3]) }

  static dot(a, b) { return a[0]*b[0] + a[1]*b[1] + a[2]*b[2] + a[3]*b[3]}
  static mix(a,b,t) { return V4(a[0] + t*(b[0]-a[0]), a[1] + t*(b[1]-a[1]), a[2] + t*(b[2]-a[2]), a[3] + t*(b[3]-a[3])) }
  static length(v) {return Math.sqrt(V4.dot(v,v));}
  static normalize(v) { return v.div(V4.length(v)) }

  static transform = (m,p) => {
   let x = p[0], y = p[1], z = p[2], w = p[3];
   return [
      m[0] * x + m[4] * y + m[ 8] * z + m[12] * w,
      m[1] * x + m[5] * y + m[ 9] * z + m[13] * w,
      m[2] * x + m[6] * y + m[10] * z + m[14] * w,
      m[3] * x + m[7] * y + m[11] * z + m[15] * w,
   ];
}
}

class M4 {
  static get X() { return 0 };
  static get Y() { return 1 };
  static get Z() { return 2 };
  static identity() { return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1] }
  static move(x, y, z) { return [1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1] }
  static rot(axis, theta) {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    const rotation = [c, -s, -s,  0,
                      s, c, -s, 0,
                      s, s, c,  0,
                      0, 0, 0,  1];

    for(let i = 0; i < rotation.length; i++) {
      if(i % 4 === axis || Math.floor(i / 4) == axis) {
        rotation[i] = rotation[i] === c ? 1 : 0
      }
    }

    return rotation
  }
  static scale(x, y, z) { return [x,0,0,0, 0,y??x,0,0, 0,0,z??x,0, 0,0,0,1] }
  static perspective(x, y, z) { return [1,0,0,x, 0,1,0,y??x, 0,0,1,z??x, 0,0,0,1] }

  static mul(a, b) {
    let m = [];
    for (let c = 0 ; c < 16 ; c += 4)
    for (let r = 0 ; r < 4 ; r++)
        m.push( a[r]*b[c] + a[r+4]*b[c+1] + a[r+8]*b[c+2] + a[r+12]*b[c+3] );
    return m;
  }

  static nmul(...m_arr) {
  return m_arr.reverse().reduce((acc, curr) => {
    return M4.mul(curr, acc)
  }, M4.identity())
  }

  static inverse(m) {
    let dst = [], det = 0, cofactor = (c, r) => {
      let s = (i, j) => m[c+i & 3 | (r+j & 3) << 2];
      return (c+r & 1 ? -1 : 1) * ( (s(1,1)*(s(2,2)*s(3,3)-s(3,2)*s(2,3)))
                                  - (s(2,1)*(s(1,2)*s(3,3)-s(3,2)*s(1,3)))
                                  + (s(3,1)*(s(1,2)*s(2,3)-s(2,2)*s(1,3))) );
    }
    for (let n = 0 ; n < 16 ; n++) dst.push(cofactor(n >> 2, n & 3));
    for (let n = 0 ; n <  4 ; n++) det += m[n] * dst[n << 2];
    for (let n = 0 ; n < 16 ; n++) dst[n] /= det;
    return dst;
  }

  static aim(Z) {
    let X = V3.normalize(V3.cross([0,1,0], Z = V3.normalize(Z))), Y = V3.normalize(V3.cross(Z, X));
    return [ X[0],X[1],X[2],0, Y[0],Y[1],Y[2],0, Z[0],Z[1],Z[2],0, 0,0,0,1 ];
  }

  static transpose(m) {
    return [ m[0],m[4],m[ 8],m[12],
             m[1],m[5],m[ 9],m[13],
             m[2],m[6],m[10],m[14],
             m[3],m[7],m[11],m[15] ];
  }
}

function ease(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - t - t); }
function sin(t) { return Math.sin(t) }
function cos(t) { return Math.cos(t) }

// NESTABLE MATRIX OBJECT

function Matrix() {
   let m = [M4.identity()], top = 0;
   this.aim         = Z       => { m[top] = M4.mul(m[top],M4.aim(Z)); return this; }
   this.call        = proc    => { proc(); return this; }
   this.get         = ()      => m[top];
   this.identity    = ()      => { m[top] = M4.identity(); return this; }
   this.inverse     = ()      => { m[top] = M4.inverse(m[top]); return this; }
   this.move        = (x,y,z) => { m[top] = M4.mul(m[top], M4.move(x,y,z)); return this; }
   this.perspective = (x,y,z) => { m[top] = M4.mul(m[top], M4.perspective(x,y,z)); return this; }
   this.pop         = ()      => { if (top > 0) top--; return this; }
   this.push        = ()      => { m[top+1] = m[top].slice(); top++; return this; }
   this.scale       = (x,y,z) => { m[top] = M4.mul(m[top], M4.scale(x,y,z)); return this; }
   this.set         = matrix  => { m[top] = matrix; return this; }
   this.transform   = p       => { m[top] = V4.transform(m[top],p); return this; }
   this.transpose   = ()      => { m[top] = M4.transpose(m[top]); return this; }
   this.rot         = (axis, a) => { m[top] = M4.mul(m[top], M4.rot(axis, a)); return this; }
}

export {V3, V4, M4, Matrix}
