import React, { useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a1f); // Dark background color
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 7;
    controls.enableZoom = true; // Disable zoom functionality

    // Add a transparent sphere with a blue outline
    const geometry = new THREE.SphereGeometry(2, 64, 64);

    // Material with wireframe for the thin blue outline
    const material = new THREE.MeshBasicMaterial({
      color: 0x0077ff, // Blue color for the outline
      wireframe: true, // Only display the wireframe (outline)
      transparent: true, // Make it transparent
      opacity: 0.3, // Subtle opacity for the sphere interior
    });

    // Create the sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add ambient light to soften the scene
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // Create stars in the background
    function createStars() {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff, // Star color
      });

      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(1000);
        const y = THREE.MathUtils.randFloatSpread(1000);
        const z = THREE.MathUtils.randFloatSpread(1000);
        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(starVertices, 3)
      );

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    }

    // Call the function to create stars
    createStars();

    // Ensure responsiveness: Update renderer size and camera aspect on resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height); // Resize the renderer to match the window size
      camera.aspect = width / height; // Update the camera aspect ratio
      camera.updateProjectionMatrix(); // Apply the changes
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Slowly rotate the sphere on its axis
      sphere.rotation.y += 0.003;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
      {/* Text overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontFamily: 'Orbitron',
          fontSize: "4rem",
          fontWeight: "bold",
          pointerEvents: "none",
        }}
      >
        Tech Scope
      </div>
    </div>
  );
};

export default ThreeModel;
