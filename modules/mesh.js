import { M4, Matrix } from './math.js'
import { setUniform } from './webgl.js';

const VERTEX_SIZE = 6;

class MeshMaker {
  static transformMeshData(data, mat) {
    let xf = (M, p) => [
      M[0] * p[0] + M[4] * p[1] + M[8] * p[2] + M[12] * p[3],
      M[1] * p[0] + M[5] * p[1] + M[9] * p[2] + M[13] * p[3],
      M[2] * p[0] + M[6] * p[1] + M[10] * p[2] + M[14] * p[3],
      M[3] * p[0] + M[7] * p[1] + M[11] * p[2] + M[15] * p[3]
    ];
    let norm = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    let normalize = (v) => {
      let s = norm(v);
      return [v[0] / s, v[1] / s, v[2] / s];
    };

    let itm = M4.inverse(mat);

    for (let n = 0; n < data.length; n += 6) {
      let pos = xf(mat, [data[n], data[n + 1], data[n + 2], 1]);
      let nor = xf(itm, [data[n + 3], data[n + 4], data[n + 5], 0]);
      nor = normalize(nor);

      data[n] = pos[0];
      data[n + 1] = pos[1];
      data[n + 2] = pos[2];

      data[n + 3] = nor[0];
      data[n + 4] = nor[1];
      data[n + 5] = nor[2];
    }

    return data;
  }

  static rect(x, y, z) {
    const cube = [
      -1, -1, -1, 0, 0, -1, 1, -1, -1, 0, 0, -1, 1, 1, -1, 0, 0, -1, 1, 1, -1,
      0, 0, -1, -1, 1, -1, 0, 0, -1, -1, -1, -1, 0, 0, -1, -1, -1, 1, 0, 0, 1,
      1, -1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, -1, 1, 1, 0, 0, 1,
      -1, -1, 1, 0, 0, 1,

      -1, -1, -1, 0, -1, 0, 1, -1, -1, 0, -1, 0, 1, -1, 1, 0, -1, 0, 1, -1, 1,
      0, -1, 0, -1, -1, 1, 0, -1, 0, -1, -1, -1, 0, -1, 0, -1, 1, -1, 0, 1, 0,
      1, 1, -1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, -1, 1, 1, 0, 1, 0,
      -1, 1, -1, 0, 1, 0,

      -1, -1, -1, -1, 0, 0, -1, 1, -1, -1, 0, 0, -1, 1, 1, -1, 0, 0, -1, 1, 1,
      -1, 0, 0, -1, -1, 1, -1, 0, 0, -1, -1, -1, -1, 0, 0, 1, -1, -1, 1, 0, 0,
      1, 1, -1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, -1, 1, 1, 0, 0,
      1, -1, -1, 1, 0, 0
    ];
    return MeshMaker.transformMeshData(cube, M4.scale(x, y, z));
  }

  static parametric(f, nu, nv, other) {
    let V = [];
    for (let j = 0; j < nv; j++) {
      for (let i = 0; i <= nu; i++) {
        V.push(f(i / nu, j / nv, other));
        V.push(f(i / nu, (j + 1) / nv, other));
      }
      V.push(f(1, (j + 1) / nv, other));
      V.push(f(0, (j + 1) / nv, other));
    }
    return V.flat();
  }

  static sphere(nu, nv) {
    return this.parametric(
      (u, v) => {
        let theta = 2 * Math.PI * u;
        let phi = Math.PI * (v - 1 / 2);
        let cu = Math.cos(theta);
        let su = Math.sin(theta);
        let cv = Math.cos(phi);
        let sv = Math.sin(phi);
        let x = cu * cv,
          y = su * cv,
          z = sv;
        return [x, y, z, x, y, z];
      },
      nu,
      nv
    );
  }

  static tube(n) {
    return this.parametric(
      (u, v) => {
        let theta = 2 * Math.PI * u;
        let c = Math.cos(theta);
        let s = Math.sin(theta);
        return [c, s, 2 * v - 1, c, s, 0];
      },
      n,
      2
    );
  }

  static rectMesh(x, y, z) {
    return new Mesh(new Float32Array(this.rect(x, y, z)), false);
  }

  static sphereMesh(nu, nv) {
    return new Mesh(new Float32Array(this.sphere(nu, nv)), true);
  }

  static tubeMesh(n) {
    return new Mesh(new Float32Array(this.tube(n)), true);
  }

  static marchingTetrahedra(implicit, n=100) {
    let march = function(V, ni, nj) {

        // FUNCTIONS TO COMPUTE (i,j,k) VOXEL COORDS FROM VOLUME INDEX n

        function n2i(n) { return  n             % ni; }
        function n2j(n) { return (n / dj >>> 0) % nj; }
        function n2k(n) { return  n / dk >>> 0      ; }

        // FUNCTION TO ADD A VERTEX ALONG A VOXEL EDGE AND RETURN A UNIQUE VERTEX ID

        function E(a, b) {
          if (a > b) { let tmp = a; a = b; b = tmp; }
          let ai = n2i(a), aj = n2j(a), ak = n2k(a),
              bi = n2i(b), bj = n2j(b), bk = n2k(b);
          let m = (n << 6) + (ai & bi ?  1 << 6 : ai      | bi << 3)
                            + (aj & bj ? dj << 6 : aj << 1 | bj << 4)
                            + (ak & bk ? dk << 6 : ak << 2 | bk << 5);

          // ADD VERTEX TO THE VERTEX ARRAY ONLY THE FIRST TIME IT IS ENCOUNTERED

          if (vertexID[m] === undefined) {
              vertexID[m] = P.length;
              let t = -V[n+a] / (V[n+b] - V[n+a]),
                  c = function(i,a,b) { return (i + (1-t)*a + t*b) / ni * 2 - 1; };
              P.push( [ c(i,ai,bi), c(j,aj,bj), c(k,ak,bk) ] );
          }

          return vertexID[m];
        }

        // FUNCTION TO ADD ONE TRIANGLE IN A ---+ OR -+++ TETRAHEDRON

        function tri(a, b, c, d) {
          T.push(E(a,b), E(a,c), E(a,d));
        }

        // FUNCTION TO ADD TWO TRIANGLES IN A --++ TETRAHEDRON

        function quad(a, b, c, d) {
          let ac = E(a,c), bc = E(b,c), ad = E(a,d), bd = E(b,d);
          T.push(bc, ac, ad);
          T.push(ad, bd, bc);
        }

        // DECLARE VARIABLES

        let nk = V.length / (ni * nj), di = 1, dj = ni, dk = ni * nj;
        let dij = di + dj, dik = di + dk, djk = dj + dk, dijk = di + dj + dk;
        let P = [], T = [], vertexID = [], i, j, k, m = 0, n, S = [0,di,dij,dijk];
        let lo = new Array(nj * nk),
            hi = new Array(nj * nk);

        // THE 6 POSSIBLE PATHS FROM LOWEST TO HIGHEST VERTEX THROUGH A TETRAHEDRON

        let S1 = [di , dj , dk , di , dj , dk ];
        let S2 = [dij, djk, dik, dik, dij, djk];

        // THE 16 CASES OF - OR + VALUES AT EACH OF THE 4 TETRAHEDRON CORNERS

        let cases = [ [0         ], [1, 0,1,2,3], [1, 1,2,0,3], [2, 0,1,2,3],
                      [1, 2,3,0,1], [2, 0,2,3,1], [2, 1,2,0,3], [1, 3,1,2,0],
                      [1, 3,0,2,1], [2, 0,3,1,2], [2, 1,3,2,0], [1, 2,1,0,3],
                      [2, 2,3,0,1], [1, 1,3,0,2], [1, 0,3,2,1], [0         ] ];

        // FOR EACH (Y,Z), ONLY WORK INSIDE THE X RANGE WHERE THE SURFACE MIGHT BE
    
        for (k = 0 ; k < nk ; k++)
        for (j = 0 ; j < nj ; j++, m++) {
          let n0 = m * ni, n1 = n0 + ni - 1;
          for (n = n0 ; n <= n1 && V[n] > 0 ; n++) ;
          lo[m] = Math.max(0, n-1 - n0);
          for (n = n1 ; n >= n0 && V[n] > 0 ; --n) ;
          hi[m] = Math.min(ni-1, n+1 - n0);
        }

        // FOR ALL Y AND Z IN THE VOLUME

        for (k = 0 ; k < nk - 1 ; k++) {
          let i0, i1, m = k * nj, n1, s0, s1;
          for (j = 0 ; j < nj - 1 ; j++, m++) {
              i0 = Math.min(lo[m], lo[m+1], lo[m+ni], lo[m+1+ni]);
              i1 = Math.max(hi[m], hi[m+1], hi[m+ni], hi[m+1+ni]);

              // GO THROUGH THE RANGE OF X CONTAINING ANY POSITIVE VOXEL VALUES

              if (i0 <= i1) {
                n  = m * ni + i0;
                n1 = m * ni + i1;
                s0 = (V[n]>0) + (V[n+dj]>0) + (V[n+dk]>0) + (V[n+djk]>0);
                for (i = i0 ; n <= n1 ; i++, n++, s0 = s1) {

                    // FOR EACH VOXEL

                    s1 = (V[n+di]>0) + (V[n+dij]>0) + (V[n+dik]>0) + (V[n+dijk]>0);
                    if (s0 + s1 & 7) {
                      let C14 = (V[n] > 0) | (V[n+dijk] > 0) << 3;

                      // CYCLE THROUGH THE SIX TETRAHEDRA THAT TILE THE VOXEL

                      for (let p = 0 ; p < 6 ; p++) {
                          let C = cases [ C14 | (V[n+S1[p]] > 0) << 1 | (V[n+S2[p]] > 0) << 2 ];

                          // FOR EACH TETRAHEDRON, OUTPUT EITHER ZERO, ONE OR TWO TRIANGLES

                          if (C[0]) {       // C[0] == number of triangles to be created.
                            S[1] = S1[p];  // Assign 2nd and 3rd corners of tetrahedron.
                            S[2] = S2[p];
                            (C[0]==1 ? tri : quad)(S[C[1]], S[C[2]], S[C[3]], S[C[4]]);
                          }
                      }
                    }
                }
              }
          }
        }

        // RETURN ALL VERTEX POSITIONS AND ALL TRIANGLES (AS TRIPLETS OF VERTEX INDICES)

        return [P, T];
    }

    // EVALUATE THE IMPLICIT FUNCTION AT EVERY VOXEL IN THE VOLUME

    let volume = [];
    let F = i => (i - n/2) / (n/2);
    for (let k = 0 ; k < n ; k++)
    for (let j = 0 ; j < n ; j++)
    for (let i = 0 ; i < n ; i++)
        volume.push(implicit.eval([F(i), F(j), F(k)]));

    // FIND ALL VERTICES AND TRIANGLES OF THE SURFACE WHERE VALUE = 1
    
    let PT = march(volume, n, n), P = PT[0], T = PT[1];

    // COMPUTE SURFACE NORMALS AND VERTEX WEIGHTS

    let N = [], W = [];
    for (let i = 0 ; i < P.length ; i++) {
        let p = P[i], f = implicit.eval(p), x = p[0], y = p[1], z = p[2];
        W.push(implicit.weights(p));
        N.push(normalize([ f - implicit.eval([ x+.001, y, z ]),
                          f - implicit.eval([ x, y+.001, z ]),
                          f - implicit.eval([ x, y, z+.001 ]) ]));
    }

    // CONSTRUCT THE VERTEX DATA FOR THE RENDERABLE TRIANGLES MESH

    let data = [];
    for (let i = 0; i < T.length; i += 3) {
        let a = T[i], b = T[i+1], c = T[i+2];
        if (isFaceted)
          N[a] = N[b] = N[c] = normalize(add(N[a],add(N[b],N[c])));
        data.push( P[a],N[a],W[a], P[b],N[b],W[b], P[c],N[c],W[c] );
    }
    return new Float32Array(data.flat());
  }
}

class Mesh {
  constructor(data, triangle_strip = false, color) {
    this.data = data;
    this.triangle_strip = triangle_strip;
    this.color = color ?? [1, 0, 0];
    this.transform = new Matrix();
  }

  draw(gl, camT, wireframe = false) {
    const m = M4.mul(camT, this.transform.get());
    setUniform(gl, "Matrix4fv", "uMF", false, m);
    setUniform(gl, "Matrix4fv", "uMI", false, M4.inverse(m));
    setUniform(gl, "3fv", "uColor", this.color);

    gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
    gl.drawArrays(
      wireframe
        ? gl.LINE_STRIP
        : this.triangle_strip
        ? gl.TRIANGLE_STRIP
        : gl.TRIANGLES,
      0,
      this.data.length / VERTEX_SIZE
    );
  }
}

export { VERTEX_SIZE, Mesh, MeshMaker };
