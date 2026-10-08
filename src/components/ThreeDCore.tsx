"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDCore() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    
    // Setup
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear any existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(20, 30, 25);
    scene.add(sunLight);

    const bluePoint = new THREE.PointLight(0x006FFF, 4.2, 70);
    bluePoint.position.set(-18, 14, 16);
    scene.add(bluePoint);

    const orangePoint = new THREE.PointLight(0xFE4D01, 3.8, 65);
    orangePoint.position.set(18, -14, 18);
    scene.add(orangePoint);

    const goldPoint = new THREE.PointLight(0xFEDC32, 3.2, 55);
    goldPoint.position.set(0, 18, -10);
    scene.add(goldPoint);

    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // Central Morphing Crystalline AI Monolith
    const coreGeom = new THREE.OctahedronGeometry(4.5, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x006FFF,
      emissive: 0x002366,
      emissiveIntensity: 0.3,
      roughness: 0.12,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.94
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    sceneGroup.add(coreMesh);

    // Inner Core Golden Core Shard
    const innerShardGeom = new THREE.TetrahedronGeometry(2.4, 0);
    const innerShardMat = new THREE.MeshStandardMaterial({
      color: 0xFEDC32,
      emissive: 0xFE4D01,
      emissiveIntensity: 0.45,
      roughness: 0.1,
      metalness: 0.6
    });
    const innerShard = new THREE.Mesh(innerShardGeom, innerShardMat);
    sceneGroup.add(innerShard);

    // Outer Kinetic Gyroscopic Rings
    const ringBlueGeom = new THREE.TorusGeometry(8.4, 0.16, 24, 140);
    const ringBlueMat = new THREE.MeshStandardMaterial({
      color: 0x006FFF,
      roughness: 0.2,
      metalness: 0.5
    });
    const ringBlue = new THREE.Mesh(ringBlueGeom, ringBlueMat);
    ringBlue.rotation.x = Math.PI / 3;
    sceneGroup.add(ringBlue);

    const ringOrangeGeom = new THREE.TorusGeometry(10.8, 0.18, 24, 140);
    const ringOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xFE4D01,
      roughness: 0.25,
      metalness: 0.4
    });
    const ringOrange = new THREE.Mesh(ringOrangeGeom, ringOrangeMat);
    ringOrange.rotation.y = Math.PI / 3.5;
    sceneGroup.add(ringOrange);

    const ringGoldGeom = new THREE.TorusGeometry(13.2, 0.15, 24, 140);
    const ringGoldMat = new THREE.MeshStandardMaterial({
      color: 0xFEDC32,
      roughness: 0.2,
      metalness: 0.6
    });
    const ringGold = new THREE.Mesh(ringGoldGeom, ringGoldMat);
    ringGold.rotation.z = Math.PI / 4;
    sceneGroup.add(ringGold);

    // Outer Wireframe Shield
    const shieldGeom = new THREE.IcosahedronGeometry(6.6, 1);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x006FFF,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.3
    });
    const shieldMesh = new THREE.Mesh(shieldGeom, shieldMat);
    sceneGroup.add(shieldMesh);

    // Floating AI Kinetic Satellites
    const satelliteGroup = new THREE.Group();
    const satCount = 30;
    const satGeom = new THREE.SphereGeometry(0.38, 24, 24);
    const satColors = [0x006FFF, 0xFE4D01, 0xFEDC32];

    for (let i = 0; i < satCount; i++) {
      const sMat = new THREE.MeshPhysicalMaterial({
        color: satColors[i % 3],
        roughness: 0.15,
        metalness: 0.35,
        clearcoat: 0.9
      });
      const sat = new THREE.Mesh(satGeom, sMat);
      const radius = 7.5 + (i % 5) * 1.6;
      const theta = (i / satCount) * Math.PI * 2;
      const phi = Math.sin(i * 1.8) * 1.2;

      sat.position.x = radius * Math.cos(theta);
      sat.position.y = radius * Math.sin(phi);
      sat.position.z = radius * Math.sin(theta);
      sat.userData = { speed: 0.009 + (i % 4) * 0.003, radius: radius, angle: theta };
      satelliteGroup.add(sat);
    }
    sceneGroup.add(satelliteGroup);

    // Ambient Floating Light-Reactive Field Particles
    const pCount = 220;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pCol = new Float32Array(pCount * 3);
    const palette = [
      new THREE.Color(0x006FFF),
      new THREE.Color(0xFE4D01),
      new THREE.Color(0xFEDC32),
      new THREE.Color(0x2563EB)
    ];

    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 46;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 46;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 28;
      const c = palette[i % palette.length];
      pCol[i * 3] = c.r;
      pCol[i * 3 + 1] = c.g;
      pCol[i * 3 + 2] = c.b;
    }

    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeom.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      transparent: true,
      opacity: 0.72
    });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      targetX += (mouseX * 0.42 - targetX) * 0.05;
      targetY += (mouseY * 0.42 - targetY) * 0.05;

      sceneGroup.rotation.y = t * 0.22 + targetX;
      sceneGroup.rotation.x = Math.sin(t * 0.14) * 0.16 + targetY;

      coreMesh.rotation.y = t * 0.38;
      coreMesh.rotation.z = Math.sin(t * 0.6) * 0.22;

      innerShard.rotation.y = -t * 0.5;
      innerShard.rotation.x = t * 0.3;

      shieldMesh.rotation.y = -t * 0.18;
      shieldMesh.rotation.x = t * 0.24;

      ringBlue.rotation.z = t * 0.34;
      ringOrange.rotation.x = -t * 0.3;
      ringGold.rotation.y = t * 0.26;

      const pulse = 1 + Math.sin(t * 2.4) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);

      satelliteGroup.children.forEach((sat, idx) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = sat.userData.radius * Math.cos(sat.userData.angle);
        sat.position.z = sat.userData.radius * Math.sin(sat.userData.angle);
        sat.position.y += Math.sin(t * 2.2 + idx) * 0.016;
      });

      particles.rotation.y = t * 0.018;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      coreGeom.dispose();
      coreMat.dispose();
      innerShardGeom.dispose();
      innerShardMat.dispose();
      ringBlueGeom.dispose();
      ringBlueMat.dispose();
      ringOrangeGeom.dispose();
      ringOrangeMat.dispose();
      ringGoldGeom.dispose();
      ringGoldMat.dispose();
      shieldGeom.dispose();
      shieldMat.dispose();
      satGeom.dispose();
      pGeom.dispose();
      pMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full bg-transparent" />;
}
