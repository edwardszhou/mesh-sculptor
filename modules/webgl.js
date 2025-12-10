let setUniform = (gl, type, name, a, b, c) =>
  gl["uniform" + type](gl.getUniformLocation(gl.program, name), a, b, c);

export { setUniform }
