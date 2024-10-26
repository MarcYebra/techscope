import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth control behavior
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;

    // Create a basic sphere for testing
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7f50,
      emissive: 0xff4500,
      emissiveIntensity: 1,
      metalness: 0.5,
      roughness: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const pointLight = new THREE.PointLight(0xff7f50, 2, 50);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    const pointLightBlue = new THREE.PointLight(0x00ffff, 1.5, 50);
    pointLightBlue.position.set(5, 0, -5);
    scene.add(pointLightBlue);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // Add animation
    const clock = new THREE.Clock();
    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      sphere.rotation.y = time * 0.5;
      sphere.position.y = Math.sin(time) * 0.5; // Floating effect
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh", backgroundColor: "#1b1b1b" }} />;
};

export default ThreeModel;

