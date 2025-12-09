function Scene() {
  this.vertexShader = `#version 300 es
    uniform mat4 uMF, uMI;

    in  vec3 aPos, aNor, aTan;
    in  vec2 aUV;

    out vec3 vPos, vNor, vTan;
    out vec2 vUV;

    void main() {
        vec4 pos = uMF * vec4(aPos, 1.);
        vec4 nor = vec4(aNor, 0.) * uMI;
        vec4 tan = vec4(aTan, 0.) * uMI;
        gl_Position = pos * vec4(1.,1.,-.1,1.);
        vPos = pos.xyz;
        vNor = nor.xyz;
        vTan = tan.xyz; // NEED TANGENT VECTOR!
        vUV  = aUV;
    }
  `;
  this.fragmentShader = `#version 300 es
    precision highp float;
    in  vec3 vPos, vNor, vTan;
    in  vec2 vUV;
    out vec4 fragColor;
    uniform bool uTexture;
    uniform vec4 uPortal;
    uniform vec3 uColor;
    uniform sampler2D uSampler[4];

    void main() {
        vec3 nor = normalize(vNor);
        
        if(vUV.x > uPortal.x && vUV.x < uPortal.y && vUV.y > uPortal.z && vUV.y < uPortal.w) {
          discard;
        }

        if(uTexture) {
          vec3 tan = normalize(vTan);
          vec4 B = texture(uSampler[1], vUV);
          vec3 bin = normalize(cross(nor,tan));
          
          nor = normalize(nor
          + (2.*B.r-1.) * tan
          + (2.*B.g-1.) * bin);
        }
          
        float c = .1 + max(0., dot(vec3( .5),nor))
                  + max(0., dot(vec3(-.5),nor));

        vec3 L = vec3(.577);
	      vec3 Key  = vec3(.5,.7,1.);
        vec3 Fill = vec3(.6,.2,.1);

        float d = dot(L,nor), r = 2.*d*nor.z - L.z;
        vec3 diffuse = .2 + 0.8 * Key  * max(0., d)
                    + .8 * Fill * max(0.,-d);

        vec3 specular = Key  * pow(max(0., r),20.)
                + Fill * pow(max(0.,-r),20.);

	      vec3 color = uColor * diffuse + specular;

        vec3 T = vec3(1);
        if(uTexture) {
          T = texture(uSampler[0], vUV).rgb;
        }
        

        fragColor = vec4(sqrt(color) * T.rgb, 1.);
      }
   `;

  let cube = [
    -1,-1,-1, 0,0,-1, 1,0,0, 0,0,
    1,-1,-1, 0,0,-1, 1,0,0, 1,0,
    1, 1,-1, 0,0,-1, 1,0,0, 1,1,
    1, 1,-1, 0,0,-1, 1,0,0, 1,1,
    -1, 1,-1, 0,0,-1, 1,0,0, 0,1,
    -1,-1,-1, 0,0,-1, 1,0,0, 0,0,

    -1,-1, 1, 0,0,1, 1,0,0, 0,0,
    1,-1, 1, 0,0,1, 1,0,0, 1,0,
    1, 1, 1, 0,0,1, 1,0,0, 1,1,
    1, 1, 1, 0,0,1, 1,0,0, 1,1,
    -1, 1, 1, 0,0,1, 1,0,0, 0,1,
    -1,-1, 1, 0,0,1, 1,0,0, 0,0,

    -1,-1,-1, 0,-1,0, 1,0,0, 0,0,
    1,-1,-1, 0,-1,0, 1,0,0, 1,0,
    1,-1, 1, 0,-1,0, 1,0,0, 1,1,
    1,-1, 1, 0,-1,0, 1,0,0, 1,1,
    -1,-1, 1, 0,-1,0, 1,0,0, 0,1,
    -1,-1,-1, 0,-1,0, 1,0,0, 0,0,

    -1, 1,-1, 0,1,0, 1,0,0, 0,0,
    1, 1,-1, 0,1,0, 1,0,0, 1,0,
    1, 1, 1, 0,1,0, 1,0,0, 1,1,
    1, 1, 1, 0,1,0, 1,0,0, 1,1,
    -1, 1, 1, 0,1,0, 1,0,0, 0,1,
    -1, 1,-1, 0,1,0, 1,0,0, 0,0,

    -1,-1,-1, -1,0,0, 0,0,1, 0,0,
    -1, 1,-1, -1,0,0, 0,0,1, 0,1,
    -1, 1, 1, -1,0,0, 0,0,1, 1,1,
    -1, 1, 1, -1,0,0, 0,0,1, 1,1,
    -1,-1, 1, -1,0,0, 0,0,1, 1,0,
    -1,-1,-1, -1,0,0, 0,0,1, 0,0,

    1,-1,-1, 1,0,0, 0,0,-1, 0,0,
    1, 1,-1, 1,0,0, 0,0,-1, 0,1,
    1, 1, 1, 1,0,0, 0,0,-1, 1,1,
    1, 1, 1, 1,0,0, 0,0,-1, 1,1,
    1,-1, 1, 1,0,0, 0,0,-1, 1,0,
    1,-1,-1, 1,0,0, 0,0,-1, 0,0,
  ];

  let transformMeshData = (data,mat) => {
   mat = mat.get()
   let xf = (M,p) => [ M[0]*p[0]+M[4]*p[1]+M[ 8]*p[2]+M[12]*p[3],
                       M[1]*p[0]+M[5]*p[1]+M[ 9]*p[2]+M[13]*p[3],
                       M[2]*p[0]+M[6]*p[1]+M[10]*p[2]+M[14]*p[3],
                       M[3]*p[0]+M[7]*p[1]+M[11]*p[2]+M[15]*p[3] ];
   let norm = v => Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
   let normalize = v => { let s=norm(v); return [v[0]/s,v[1]/s,v[2]/s]; }

   let itm = inverse(mat);

   for (let n = 0 ; n < data.length ; n += vertexSize) {
      let pos = xf(mat, [data[n  ],data[n+1],data[n+2], 1]);
      let nor = xf(itm, [data[n+3],data[n+4],data[n+5], 0]);
      nor = normalize(nor);
      let tan = xf(itm, [data[n+6],data[n+7],data[n+8], 0]);
      tan = normalize(tan);

      data[n  ] = pos[0];
      data[n+1] = pos[1];
      data[n+2] = pos[2];

      data[n+3] = nor[0];
      data[n+4] = nor[1];
      data[n+5] = nor[2];

      data[n+6] = tan[0];
      data[n+7] = tan[1];
      data[n+8] = tan[2];
   }
   return data;
}

  
  let createMesh = (nu, nv, p) => {
    let mesh = [];
    for (let j = nv; j > 0; j--) {
      for (let i = 0; i <= nu; i++)
        mesh.push(p(i / nu, j / nv), p(i / nu, j / nv - 1 / nv));
      mesh.push(p(1, j / nv - 1 / nv), p(0, j / nv - 1 / nv));
    }
    return mesh.flat();
  };

  let sphere = (nu, nv, scale = 1) =>
    createMesh(nu, nv, (u, v) => {
      let theta = Math.PI * 2 * u,
        phi = Math.PI * (v - 0.5),
        x = Math.cos(phi) * Math.cos(theta),
        y = Math.cos(phi) * Math.sin(theta),
        z = Math.sin(phi);

      // INCLUDE DIRECTION OF TANGENT TO SURFACE

      return [x, y, z, x, y, z, -y, x, 0, u * scale, v * scale];
    });

  let tube = (nu) =>
    createMesh(nu, 2, (u, v) => {
      let theta = Math.PI * 2 * u,
        x = Math.cos(theta),
        y = Math.sin(theta),
        z = 2 * v - 1;
      return [x, y, z, x, y, 0, -y, x, 0, u, v];
    });


  let rect = (x, y, z, uv) => {
    let cubeMesh = (x, y, z) => ([
      -1,-1,-1, 0,0,-1, 1,0,0, 0,0,
      1,-1,-1, 0,0,-1, 1,0,0, x*uv,0,
      1, 1,-1, 0,0,-1, 1,0,0, x*uv,y*uv,
      1, 1,-1, 0,0,-1, 1,0,0, x*uv,y*uv,
      -1, 1,-1, 0,0,-1, 1,0,0, 0,y*uv,
      -1,-1,-1, 0,0,-1, 1,0,0, 0,0,

      -1,-1, 1, 0,0,1, 1,0,0, 0,0,
      1,-1, 1, 0,0,1, 1,0,0, x*uv,0,
      1, 1, 1, 0,0,1, 1,0,0, x*uv,y*uv,
      1, 1, 1, 0,0,1, 1,0,0, x*uv,y*uv,
      -1, 1, 1, 0,0,1, 1,0,0, 0,y*uv,
      -1,-1, 1, 0,0,1, 1,0,0, 0,0,

      -1,-1,-1, 0,-1,0, 1,0,0, 0,0,
      1,-1,-1, 0,-1,0, 1,0,0, z*uv,0,
      1,-1, 1, 0,-1,0, 1,0,0, z*uv,x*uv,
      1,-1, 1, 0,-1,0, 1,0,0, z*uv,x*uv,
      -1,-1, 1, 0,-1,0, 1,0,0, 0,x*uv,
      -1,-1,-1, 0,-1,0, 1,0,0, 0,0,

      -1, 1,-1, 0,1,0, 1,0,0, 0,0,
      1, 1,-1, 0,1,0, 1,0,0, z*uv,0,
      1, 1, 1, 0,1,0, 1,0,0, z*uv,x*uv,
      1, 1, 1, 0,1,0, 1,0,0, z*uv,x*uv,
      -1, 1, 1, 0,1,0, 1,0,0, 0,x*uv,
      -1, 1,-1, 0,1,0, 1,0,0, 0,0,

      -1,-1,-1, -1,0,0, 0,0,1, 0,0,
      -1, 1,-1, -1,0,0, 0,0,1, 0,y*uv,
      -1, 1, 1, -1,0,0, 0,0,1, z*uv,y*uv,
      -1, 1, 1, -1,0,0, 0,0,1, z*uv,y*uv,
      -1,-1, 1, -1,0,0, 0,0,1, z*uv,0,
      -1,-1,-1, -1,0,0, 0,0,1, 0,0,

      1,-1,-1, 1,0,0, 0,0,-1, 0,0,
      1, 1,-1, 1,0,0, 0,0,-1, 0,y*uv,
      1, 1, 1, 1,0,0, 0,0,-1, z*uv,y*uv,
      1, 1, 1, 1,0,0, 0,0,-1, z*uv,y*uv,
      1,-1, 1, 1,0,0, 0,0,-1, z*uv,0,
      1,-1,-1, 1,0,0, 0,0,-1, 0,0,
    ])

    let cube = cubeMesh(x, y, z);
    let m = new Matrix();
    m.scale(x, y, z);

    return {
    triangle_strip: false,
    data: new Float32Array(transformMeshData(cube, m))
  }
  }
  
  let door = rect(1, 2, 0.1, 1.5)
  let frame = rect(1.2, 2.1, 0.05, 1)
  let handle = { 
    triangle_strip: true,        
    data: new Float32Array(sphere(20,10)) 
  };

  let ground = { 
    triangle_strip: true,        
    data: new Float32Array(sphere(40,20, 2)) 
  };

  this.update = () => {
    if (loadTexture) {
      addTexture(0, src1 + "_color.png"); // TEXTURE
      addTexture(1, src1 + "_bumps.png"); // BUMP MAP
      addTexture(2, src2 + "_color.png"); // TEXTURE
      addTexture(3, src2 + "_bumps.png"); // BUMP MAP
      loadTexture = false;
    }

    // VERTEX ATTRIBUTES: POSITION,NORMAL,TANGENT,UV

    vertexMap(["aPos", 3, "aNor", 3, "aTan", 3, "aUV", 2]);

    let time = Date.now() / 1000;
    let doorRot = Math.max(0, Math.min(1, Math.sin(time * Math.PI / 3) + 0.5));
    let camT = mxm(mxm(turnX(0.2), move(0, -1, -5)), turnY(time * Math.PI * 2 / 8 ));
    let doorT = mxm(move(-1,0,0), mxm(turnY(doorRot), move(1,0,0)));


    setUniform("1iv", "uSampler", [2, 3]);
    setUniform("1i", "uTexture", 1);
    setUniform("4fv", "uPortal", [0,0,0,0]);
    drawObj(
      ground, 
      mxm(camT, mxm(move(0,-2,0), scale(3, 0.5, 3))),
      [0.2, 0.2, 0.2]
    );
    
    setUniform("4fv", "uPortal", [0.1,1.1,0,2]);
    setUniform("1iv", "uSampler", [0, 1]);

    drawObj(
      frame,
      mxm(camT, move(0,0.1,0)),
      [0.5,0.3,0.2]
    );

    setUniform("4fv", "uPortal", [0,0,0,0]);
    drawObj(
      door,
      mxm(camT, doorT),
      [1,0.8,0.5]
    );

    setUniform("1i", "uTexture", 0);
    drawObj(
      handle,
      mxm(camT, mxm(doorT, mxm(move(0.8,0,0.15), scale(0.1)))),
      [1,0.8,0.2]
    );
    drawObj(
      handle,
      mxm(camT, mxm(doorT, mxm(move(0.8,0,-0.15), scale(0.1)))),
      [1,0.8,0.2]
    );
    
  };
}
