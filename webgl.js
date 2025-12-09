function gl_start(canvas, scene) {
   setTimeout(function() {
      canvas.gl = canvas.getContext('webgl2');
      canvas.gl.width = canvas.width;
      canvas.gl.height = canvas.height;
      canvas.setShaders = function(vertexShader, fragmentShader) {
         gl = this.gl;
	 gl.program = gl.createProgram();
         function addshader(type, src) {
            let shader = gl.createShader(type);
            gl.shaderSource(shader, src);
            gl.compileShader(shader);
            if (! gl.getShaderParameter(shader, gl.COMPILE_STATUS))
               console.log('Cannot compile shader:', gl.getShaderInfoLog(shader));
            gl.attachShader(gl.program, shader);
         };

         addshader(gl.VERTEX_SHADER, vertexShader);

	 let i = fragmentShader.indexOf('float') + 6;
         addshader(gl.FRAGMENT_SHADER, fragmentShader.substring(0,i)
	                             + noiseCode
	                             + phongCode
		                     + fragmentShader.substring(i));

         gl.linkProgram(gl.program);
         if (! gl.getProgramParameter(gl.program, gl.LINK_STATUS))
            console.log('Could not link the shader program!');
         gl.useProgram(gl.program);
         gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
         gl.enable(gl.DEPTH_TEST);
         gl.depthFunc(gl.LEQUAL);
         let vertexAttribute = (name, size, position) => {
            let attr = gl.getAttribLocation(gl.program, name);
            gl.enableVertexAttribArray(attr);
            gl.vertexAttribPointer(attr, size, gl.FLOAT, false, vertexSize * 4, position * 4);
         }

	 /*
	    Each vertex now has 6 numbers:
	    3 for the position attribute and
	    another 3 for the normal attribute.
	 */

         vertexAttribute('aPos', 3, 0);
         vertexAttribute('aNor', 3, 3);
      }
      canvas.setShaders(scene.vertexShader, scene.fragmentShader);
      setInterval(function() {
         if (scene.update)
	    scene.update([0,0,7]);
	 if (autodraw)
	    drawMesh(mesh);
      }, 10);
   }, 100);
}

// DRAW A SINGLE MESH ON THE GPU
/*
   The drawMesh() function does two things:

     (1) It downloads a mesh's data to the GPU;
     (2) It then renders the mesh on the GPU.

   Note that if the "triangle_strip" option is enabled in the mesh,
   the data is assumed to be in the form of a gl.TRIANGLE_STRIP.
   Otherwise the data is assumed to be in the form of gl.TRIANGLES.
*/

let drawMesh = mesh => {
   gl.bufferData(gl.ARRAY_BUFFER, mesh.data, gl.STATIC_DRAW);
   gl.drawArrays(mesh.triangle_strip ? gl.TRIANGLE_STRIP : gl.TRIANGLES,
                 0, mesh.data.length / vertexSize);
}

let gl;
let setUniform = (type,name,a,b,c) => (gl['uniform'+type])(gl.getUniformLocation(gl.program,name), a,b,c);


// SOME SIMPLE DEFAULT SHADERS

let Shader = {

defaultVertexShader : `\
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
}`,

defaultFragmentShader : `\
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
}`,

};
