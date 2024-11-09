import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import * as THREE from "three";
import Home from "../Home";

const ThreeModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const skyboxGeometry = new THREE.SphereGeometry(500, 60, 40);
    const skyboxMaterial = new THREE.MeshBasicMaterial({
      color: 0x001419, // Dark futuristic background
      side: THREE.BackSide,  // Render inside the sphere
    });
    const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    scene.add(skybox);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;  
    renderer.toneMappingExposure = 1.5;
    mountRef.current.appendChild(renderer.domElement);

    // Create a glowing, reflective sphere with a grid pattern
    const sphereGeometry = new THREE.SphereGeometry(4, 64, 64);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00248f, 
      emissive: 0x005980,
      roughness: .5,
      metalness: 1.0,
      wireframe: true, // Grid-like wireframe
    });
    const sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(sphere);

    // Glow around the sphere
    const pointLight = new THREE.PointLight(0x00ffff, 3, 50);
    pointLight.position.set(0, 0, 10); // Positioned in front for glowing effect
    scene.add(pointLight);

    // Subtle ambient light for depth
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Stars setup
    const starVertices = [];
    function createStars() {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0x888888, 
        size: 1.3,
      });

      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    }

    createStars();

    // Mouse move event listener
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.002;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      sphereGeometry.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
      <div className="landing-letters">
        <h1>TECH SCOPE</h1>
        <h2>YOUR SOURCE FOR TECHNOLOGY INSIGHTS AND NEWS</h2>
        <Link to="/home" className="explore-button">Explore Now</Link>
      </div>
      <div className="landing-cat">
        <span>ETHICS</span>
        <span>SOCIETY</span>
        <span>POLITICS</span>
        <span>GLOBAL</span>
        <span>INNOVATION</span>
      </div>
    </div>
  );
};

export default ThreeModel;
