import { VERTEX_SIZE } from "./mesh.js";

const vShader = `\
#version 300 es
uniform mat4 uMF, uMI;
in  vec3 aPos, aNor;
out vec3 vPos, vNor;
void main() {
   vec4 pos = uMF * vec4(aPos, 1.);
   vec4 nor = vec4(aNor, 0.) * uMI;
   gl_Position = pos * vec4(1.,1.,-.1,1.);
   vPos = pos.xyz;
   vNor = nor.xyz;
}`;

const fShader = `\
#version 300 es
precision highp float;
in  vec3 vPos, vNor;
out vec4 fragColor;
uniform vec3 uColor;

void main() {
   vec3 nor = normalize(vNor);
   float c = .1 + max(0., dot(vec3( .5),nor))
                + max(0., dot(vec3(-.5),nor));
   fragColor = vec4(c * uColor, 1.);
}`;

class Scene {
  constructor(canvas) {
    this.vShader = vShader;
    this.fShader = fShader;
    this.meshes = [];
    this.textures = [];
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl2");

    this.onUpdate = null;
  }

  init() {
    const gl = this.gl;

    gl.width = this.canvas.width;
    gl.height = this.canvas.height;
    gl.program = gl.createProgram();

    function addShader(type, src) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.log("Cannot compile shader:", gl.getShaderInfoLog(shader));
      gl.attachShader(gl.program, shader);
    }

    addShader(gl.VERTEX_SHADER, this.vShader);
    addShader(gl.FRAGMENT_SHADER, this.fShader);

    gl.linkProgram(gl.program);
    if (!gl.getProgramParameter(gl.program, gl.LINK_STATUS))
      console.log("Could not link the shader program!");
    gl.useProgram(gl.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    function vertexAttribute(name, size, position) {
      const attr = gl.getAttribLocation(gl.program, name);
      gl.enableVertexAttribArray(attr);
      gl.vertexAttribPointer(attr, size, gl.FLOAT, false, VERTEX_SIZE * 4, position * 4);
    }

    vertexAttribute("aPos", 3, 0);
    vertexAttribute("aNor", 3, 3);

    this.update();
  }

  update() {
    const gl = this.gl;
    const camT = this.onUpdate?.()

    for (const mesh of this.meshes) {
      mesh.draw(gl, camT, false)
    }

    setTimeout(() => {
      this.update();
    }, 10);
  }
}

export { Scene };
