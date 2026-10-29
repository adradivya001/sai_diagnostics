import { useEffect, useRef, useState } from 'react';

/**
 * High-performance WebGL canvas for continuous, natural pregnancy belly
 * hand-caress animation.
 * 
 * - Preserves 100% of the original illustration artwork, colors, anatomy, and background.
 * - Upper hand smoothly glides along the upper curve of the belly and returns.
 * - Lower hand makes subtle supportive adjustment along the lower curve.
 * - Stable body, face, hair, gown, and floral background with zero holes, seams, or ghosting.
 * - Automatically falls back to standard images if WebGL is unavailable or on reduced-motion.
 */
const PregnancyJourneyCanvas = ({
  stage2Src,
  stage3Src,
  displacementSrc,
  stage3Blend,
  opacity,
  active,
  onWebglFallback
}) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const texturesRef = useRef({});
  const animFrameRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  // Check user preference for reduced motion
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
    const handleChange = (e) => {
      prefersReducedMotion.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // WebGL Initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { 
      alpha: true, 
      premultipliedAlpha: false,
      antialias: true 
    });

    if (!gl) {
      console.warn('WebGL not supported, falling back to standard images.');
      setWebglSupported(false);
      if (onWebglFallback) onWebglFallback();
      return;
    }
    glRef.current = gl;

    // Vertex Shader: full quad
    const vsSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    // Fragment Shader: displacement warp & stage crossfade
    // Note: Outputs full opaque texture. Layer opacity is managed cleanly by CSS on the canvas element
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_stage2;
      uniform sampler2D u_stage3;
      uniform sampler2D u_disp;
      uniform float u_stage3Blend;
      uniform float u_scale;
      varying vec2 v_texCoord;

      void main() {
        // Read displacement vector (neutral is 0.5)
        vec4 disp = texture2D(u_disp, v_texCoord);
        vec2 offset = (disp.rg - 0.5) * (u_scale / 941.0);
        vec2 sampleCoord = v_texCoord - offset;

        // Sample both stages with warped coordinates
        vec4 color2 = texture2D(u_stage2, sampleCoord);
        vec4 color3 = texture2D(u_stage3, sampleCoord);

        // Crossfade between Stage 2 and Stage 3
        vec4 finalColor = mix(color2, color3, u_stage3Blend);

        gl_FragColor = vec4(finalColor.rgb, 1.0);
      }
    `;

    function createShader(glCtx, type, source) {
      const shader = glCtx.createShader(type);
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error('Shader compile error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) {
      setWebglSupported(false);
      if (onWebglFallback) onWebglFallback();
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      setWebglSupported(false);
      if (onWebglFallback) onWebglFallback();
      return;
    }
    programRef.current = program;

    // Quad geometry (two triangles)
    const vertices = new Float32Array([
      -1, -1,  0, 1,
       1, -1,  1, 1,
      -1,  1,  0, 0,
      -1,  1,  0, 0,
       1, -1,  1, 1,
       1,  1,  1, 0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'a_position');
    const texAttr = gl.getAttribLocation(program, 'a_texCoord');

    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 16, 0);

    gl.enableVertexAttribArray(texAttr);
    gl.vertexAttribPointer(texAttr, 2, gl.FLOAT, false, 16, 8);

    // Texture creation helper
    function loadTexture(glCtx, src, unit) {
      const texture = glCtx.createTexture();
      glCtx.bindTexture(glCtx.TEXTURE_2D, texture);
      glCtx.texImage2D(
        glCtx.TEXTURE_2D, 0, glCtx.RGBA, 1, 1, 0, 
        glCtx.RGBA, glCtx.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255])
      );
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, glCtx.LINEAR);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, glCtx.LINEAR);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        glCtx.activeTexture(glCtx.TEXTURE0 + unit);
        glCtx.bindTexture(glCtx.TEXTURE_2D, texture);
        glCtx.texImage2D(glCtx.TEXTURE_2D, 0, glCtx.RGBA, glCtx.RGBA, glCtx.UNSIGNED_BYTE, img);
      };
      img.src = src;
      return texture;
    }

    texturesRef.current = {
      stage2: loadTexture(gl, stage2Src, 0),
      stage3: loadTexture(gl, stage3Src, 1),
      disp: loadTexture(gl, displacementSrc, 2)
    };

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (gl) {
        if (texturesRef.current.stage2) gl.deleteTexture(texturesRef.current.stage2);
        if (texturesRef.current.stage3) gl.deleteTexture(texturesRef.current.stage3);
        if (texturesRef.current.disp) gl.deleteTexture(texturesRef.current.disp);
        if (buffer) gl.deleteBuffer(buffer);
        if (program) gl.deleteProgram(program);
      }
    };
  }, [stage2Src, stage3Src, displacementSrc, onWebglFallback]);

  // Animation render loop
  useEffect(() => {
    const gl = glRef.current;
    const program = programRef.current;
    if (!gl || !program || !webglSupported) return;

    let isRunning = true;

    const render = (timestamp) => {
      if (!isRunning) return;

      // Only execute rendering when canvas is active and visible
      if (active && opacity > 0.005) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.useProgram(program);

        // Caressing cycle: 4.8 seconds per full cycle
        let scale = 0;
        if (!prefersReducedMotion.current) {
          const cycleDuration = 4800; // ms
          const progress = (timestamp % cycleDuration) / cycleDuration;
          const ease = 0.5 * (1.0 - Math.cos(progress * 2.0 * Math.PI));
          scale = ease * 11.2;
        }

        // Pass uniforms
        gl.uniform1i(gl.getUniformLocation(program, 'u_stage2'), 0);
        gl.uniform1i(gl.getUniformLocation(program, 'u_stage3'), 1);
        gl.uniform1i(gl.getUniformLocation(program, 'u_disp'), 2);
        gl.uniform1f(gl.getUniformLocation(program, 'u_stage3Blend'), stage3Blend);
        gl.uniform1f(gl.getUniformLocation(program, 'u_scale'), scale);

        // Bind active textures
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texturesRef.current.stage2);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, texturesRef.current.stage3);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, texturesRef.current.disp);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [active, opacity, stage3Blend, webglSupported]);

  if (!webglSupported) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      width={1671}
      height={941}
      className="pj-hero-bg-art pj-hand-anim-canvas"
      style={{
        opacity: opacity,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};

export default PregnancyJourneyCanvas;
