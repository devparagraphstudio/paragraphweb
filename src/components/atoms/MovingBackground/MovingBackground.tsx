"use client";

import { useEffect, useRef, useCallback } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#fafa00", "#fafa00", "#fafa00"];

const hexToRgb = (hex: string): [number, number, number] => {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
        hex = hex.split("").map((c) => c + c).join("");
    }
    const int = parseInt(hex, 16);
    const r = ((int >> 16) & 255) / 255;
    const g = ((int >> 8) & 255) / 255;
    const b = (int & 255) / 255;
    return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

interface MovingBackgroundProps {
    particleCount?: number;
    particleSpread?: number;
    speed?: number;
    particleColors?: string[];
    moveParticlesOnHover?: boolean;
    particleHoverFactor?: number;
    alphaParticles?: boolean;
    particleBaseSize?: number;
    sizeRandomness?: number;
    cameraDistance?: number;
    disableRotation?: boolean;
    className?: string;
}

const MovingBackground = ({
    particleCount = 200,
    particleSpread = 10,
    speed = 0.1,
    particleColors,
    moveParticlesOnHover = false,
    particleHoverFactor = 1,
    alphaParticles = false,
    particleBaseSize = 100,
    sizeRandomness = 1,
    cameraDistance = 20,
    disableRotation = false,
    className,
}: MovingBackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const offset = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Mesh | null>(null);
    const programRef = useRef<Program | null>(null);
    const elapsedRef = useRef(0);
    const mouseRef = useRef({ x: 0, y: 0 });
    const rendererRef = useRef<Renderer | null>(null);
    const cameraRef = useRef<Camera | null>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!moveParticlesOnHover) return;

        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;

        mouseRef.current = { x, y };

        if (particlesRef.current) {
            const newX = -x * particleHoverFactor;
            const newY = -y * particleHoverFactor;

            offset.current.x = newX;
            offset.current.y = newY;
            particlesRef.current.position.x = newX;
            particlesRef.current.position.y = newY;

            if (rendererRef.current && cameraRef.current) {
                rendererRef.current.render({ scene: particlesRef.current, camera: cameraRef.current });
            }
        }
    }, [moveParticlesOnHover, particleHoverFactor]);

    useEffect(() => {
        if (moveParticlesOnHover) {
            window.addEventListener('mousemove', handleMouseMove, { passive: true });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [moveParticlesOnHover, handleMouseMove]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const renderer = new Renderer({ depth: false, alpha: true });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);
        gl.clearColor(0, 0, 0, 0);
        rendererRef.current = renderer;

        const camera = new Camera(gl, { fov: 15 });
        camera.position.set(0, 0, cameraDistance);
        cameraRef.current = camera;

        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };
        window.addEventListener("resize", resize, false);
        resize();

        const count = particleCount;
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count * 4);
        const colors = new Float32Array(count * 3);
        const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

        for (let i = 0; i < count; i++) {
            let x, y, z, len;
            do {
                x = Math.random() * 2 - 1;
                y = Math.random() * 2 - 1;
                z = Math.random() * 2 - 1;
                len = x * x + y * y + z * z;
            } while (len > 1 || len === 0);
            const r = Math.cbrt(Math.random());
            positions.set([x * r, y * r, z * r], i * 3);
            randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
            const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
            colors.set(col, i * 3);
        }

        const geometry = new Geometry(gl, {
            position: { size: 3, data: positions },
            random: { size: 4, data: randoms },
            color: { size: 3, data: colors },
        });

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uSpread: { value: particleSpread },
                uBaseSize: { value: particleBaseSize },
                uSizeRandomness: { value: sizeRandomness },
                uAlphaParticles: { value: alphaParticles ? 1 : 0 },
            },
            transparent: true,
            depthTest: false,
        });

        const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });
        particlesRef.current = particles;
        programRef.current = program;

        let animationFrameId: number;
        let lastTime = performance.now();

        const update = (t: number) => {
            animationFrameId = requestAnimationFrame(update);
            const delta = t - lastTime;
            lastTime = t;
            elapsedRef.current += delta * speed;

            if (programRef.current) {
                programRef.current.uniforms.uTime.value = elapsedRef.current * 0.001;
            }

            if (particlesRef.current) {
                if (!moveParticlesOnHover) {
                    offset.current.x += (0 - offset.current.x) * 0.1;
                    offset.current.y += (0 - offset.current.y) * 0.1;
                    particlesRef.current.position.x = offset.current.x;
                    particlesRef.current.position.y = offset.current.y;
                }

                if (!disableRotation) {
                    particlesRef.current.rotation.x = Math.sin(elapsedRef.current * 0.0002) * 0.1;
                    particlesRef.current.rotation.y = Math.cos(elapsedRef.current * 0.0005) * 0.15;
                    particlesRef.current.rotation.z += 0.01 * speed;
                }
            }

            renderer.render({ scene: particles, camera });
        };

        animationFrameId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
            if (container.contains(gl.canvas)) {
                container.removeChild(gl.canvas);
            }
            particlesRef.current = null;
            programRef.current = null;
            rendererRef.current = null;
            cameraRef.current = null;
        };
    }, [
        particleCount,
        particleSpread,
        speed,
        moveParticlesOnHover,
        particleHoverFactor,
        alphaParticles,
        particleBaseSize,
        sizeRandomness,
        cameraDistance,
        disableRotation,
        particleColors,
    ]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 w-full h-full ${className || ""}`}
            style={{
                isolation: 'isolate'
            }}
        />
    );
};

export default MovingBackground;
