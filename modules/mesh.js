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
