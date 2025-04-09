
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0F0F0F, 1);
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a grid
    const gridHelper = new THREE.GridHelper(100, 100, 0x00F0FF, 0x003A46);
    scene.add(gridHelper);
    
    // Create particle system
    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;
    
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00F0FF,
      size: 0.05,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.8
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Create vehicle representation
    const vehicle = new THREE.Group();
    
    // Main body
    const bodyGeometry = new THREE.BoxGeometry(2, 0.5, 4);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0A2540,
      emissive: 0x003A46,
      metalness: 0.8,
      roughness: 0.2
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    vehicle.add(body);
    
    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const wheelMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333,
      metalness: 0.5,
      roughness: 0.7
    });
    
    const wheels = [
      { x: -0.8, y: -0.3, z: 1.2 },
      { x: 0.8, y: -0.3, z: 1.2 },
      { x: -0.8, y: -0.3, z: -1.2 },
      { x: 0.8, y: -0.3, z: -1.2 }
    ];
    
    wheels.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos.x, pos.y, pos.z);
      vehicle.add(wheel);
    });
    
    // Windshield
    const windshieldGeometry = new THREE.BoxGeometry(1.8, 0.4, 1);
    const windshieldMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.3,
      metalness: 0.9,
      roughness: 0.1
    });
    const windshield = new THREE.Mesh(windshieldGeometry, windshieldMaterial);
    windshield.position.set(0, 0.3, 0.5);
    vehicle.add(windshield);
    
    // Lights
    const lightGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.1);
    const redLightMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFF3366,
      emissive: 0xFF3366,
      emissiveIntensity: 1
    });
    const blueLightMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x00F0FF,
      emissive: 0x00F0FF,
      emissiveIntensity: 1
    });
    
    const frontLeftLight = new THREE.Mesh(lightGeometry, blueLightMaterial);
    frontLeftLight.position.set(-0.8, 0, 2);
    vehicle.add(frontLeftLight);
    
    const frontRightLight = new THREE.Mesh(lightGeometry, blueLightMaterial);
    frontRightLight.position.set(0.8, 0, 2);
    vehicle.add(frontRightLight);
    
    const rearLeftLight = new THREE.Mesh(lightGeometry, redLightMaterial);
    rearLeftLight.position.set(-0.8, 0, -2);
    vehicle.add(rearLeftLight);
    
    const rearRightLight = new THREE.Mesh(lightGeometry, redLightMaterial);
    rearRightLight.position.set(0.8, 0, -2);
    vehicle.add(rearRightLight);
    
    // Sensor
    const sensorGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
    const sensorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFF3366,
      emissive: 0xFF3366,
      emissiveIntensity: 0.5
    });
    const sensor = new THREE.Mesh(sensorGeometry, sensorMaterial);
    sensor.position.set(0, 0.4, 0);
    vehicle.add(sensor);
    
    // Add vehicle to scene
    scene.add(vehicle);
    
    // Path visualization
    const pathPoints = [];
    for (let i = 0; i < 300; i++) {
      const angle = (i * 0.1) % (Math.PI * 2);
      const radius = 15 + Math.sin(i * 0.2) * 5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      pathPoints.push(new THREE.Vector3(x, 0, z));
    }
    
    const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const pathMaterial = new THREE.LineBasicMaterial({ color: 0xFF3366 });
    const path = new THREE.Line(pathGeometry, pathMaterial);
    scene.add(path);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    
    const pointLight1 = new THREE.PointLight(0x00F0FF, 1, 20);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xFF3366, 1, 20);
    pointLight2.position.set(-2, 2, -2);
    scene.add(pointLight2);
    
    // Camera position
    camera.position.set(5, 5, 15);
    camera.lookAt(0, 0, 0);
    
    // Animation variables
    let time = 0;
    let pathIndex = 0;
    
    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Rotate particle system
      particleSystem.rotation.y += 0.0005;
      
      // Animate vehicle along path
      time += 0.005;
      pathIndex = (pathIndex + 1) % (pathPoints.length - 1);
      
      const currentPoint = pathPoints[pathIndex];
      const nextPoint = pathPoints[(pathIndex + 1) % pathPoints.length];
      
      // Face direction of travel
      if (currentPoint && nextPoint) {
        const direction = new THREE.Vector3().subVectors(nextPoint, currentPoint).normalize();
        const angle = Math.atan2(direction.x, direction.z);
        vehicle.position.set(currentPoint.x, 0.3, currentPoint.z);
        vehicle.rotation.y = angle;
      }
      
      // Make camera follow with offset
      camera.position.x = vehicle.position.x + 5 * Math.sin(time * 0.1);
      camera.position.z = vehicle.position.z + 10 * Math.cos(time * 0.1);
      camera.position.y = 5 + Math.sin(time * 0.2) * 2;
      camera.lookAt(vehicle.position);
      
      // Pulse lights
      const pulse = (Math.sin(time * 5) + 1) / 2;
      pointLight1.intensity = 1 + pulse * 0.5;
      pointLight2.intensity = 1 + pulse * 0.5;
      
      frontLeftLight.material.emissiveIntensity = 0.5 + pulse * 0.5;
      frontRightLight.material.emissiveIntensity = 0.5 + pulse * 0.5;
      rearLeftLight.material.emissiveIntensity = 0.5 + pulse * 0.5;
      rearRightLight.material.emissiveIntensity = 0.5 + pulse * 0.5;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="fixed inset-0" />;
};

export default ThreeScene;
