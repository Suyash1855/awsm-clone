"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Navbar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const circularDivs = [];
    const numDivs = 3;
    const circleRadius = 10;

    for (let i = 0; i < numDivs; i++) {
      const angle = (i / numDivs) * Math.PI * 2;
      const x = circleRadius * Math.cos(angle);
      const z = circleRadius * Math.sin(angle);

      const divGeometry = new THREE.BoxGeometry(2, 2, 2); // Replace with your desired size
      const divMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Replace with your desired color
      const divMesh = new THREE.Mesh(divGeometry, divMaterial);
      divMesh.position.set(x, 0, z);
      circularDivs.push(divMesh);
      scene.add(divMesh);
    }

    camera.position.z = 20; // Adjust the camera position as needed

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      circularDivs.forEach((div, index) => {
        const angle = ((index + 1) * (Date.now() * 0.001)) % (Math.PI * 2);
        const x = circleRadius * Math.cos(angle);
        const z = circleRadius * Math.sin(angle);
        div.position.set(x, 0, z);
      });
    };

    animate();

    // Clean up the Three.js scene on component unmount
    return () => {
      circularDivs.forEach((div) => scene.remove(div));
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Navbar;
