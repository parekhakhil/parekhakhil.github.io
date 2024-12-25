import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const sceneRef = useRef<THREE.Scene | null>(null);
  // const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  // const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  // const modelRef = useRef<THREE.Group | null>(null);
  // const isDragging = useRef(true);
  // const previousMousePosition = useRef({ x: 0, y: 0 });

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   // Scene setup
  //   sceneRef.current = new THREE.Scene();
  //   cameraRef.current = new THREE.PerspectiveCamera(
  //     75,
  //     containerRef.current.clientWidth / containerRef.current.clientHeight,
  //     0.1,
  //     1000
  //   );
  //   rendererRef.current = new THREE.WebGLRenderer({ 
  //     alpha: true, 
  //     antialias: true,
  //     powerPreference: "high-performance"
  //   });

  //   const container = containerRef.current;
  //   const scene = sceneRef.current;
  //   const camera = cameraRef.current;
  //   const renderer = rendererRef.current;

  //   renderer.setSize(container.clientWidth, container.clientHeight);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   container.appendChild(renderer.domElement);

  //   // Load GLB model
  //   const loader = new GLTFLoader();
  //   loader.load('/src/data/modelwithanimation.glb', (gltf) => {
  //     modelRef.current = gltf.scene;
  //     scene.add(modelRef.current);
  //   });

  //   // Softer lighting setup
  //   const ambientLight = new THREE.AmbientLight(0xF2FCE2, 0.6); // Soft green ambient light
  //   scene.add(ambientLight);

  //   const directionalLight = new THREE.DirectionalLight(0xFEF7CD, 0.8); // Soft yellow direct light
  //   directionalLight.position.set(2, 2, 2);
  //   scene.add(directionalLight);

  //   camera.position.z = 4;

  //   // Smoother mouse controls with easing
  //   const handleMouseDown = (event: MouseEvent) => {
  //     isDragging.current = true;
  //     previousMousePosition.current = {
  //       x: event.clientX,
  //       y: event.clientY,
  //     };
  //   };

  //   const handleMouseMove = (event: MouseEvent) => {
  //     if (!isDragging.current || !modelRef.current) return;

  //     const deltaMove = {
  //       x: (event.clientX - previousMousePosition.current.x) * 0.003, // Reduced sensitivity
  //       y: (event.clientY - previousMousePosition.current.y) * 0.003,
  //     };

  //     // Smooth rotation with easing
  //     modelRef.current.rotation.y += deltaMove.x;
  //     modelRef.current.rotation.x += deltaMove.y;

  //     previousMousePosition.current = {
  //       x: event.clientX,
  //       y: event.clientY,
  //     };
  //   };

  //   const handleMouseUp = () => {
  //     isDragging.current = false;
  //   };

  //   container.addEventListener('mousedown', handleMouseDown);
  //   window.addEventListener('mousemove', handleMouseMove);
  //   window.addEventListener('mouseup', handleMouseUp);

  //   // Smooth animation
  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     if (modelRef.current && !isDragging.current) {
  //       // Slower, more gentle rotation
  //       modelRef.current.rotation.y += 0.0005;
  //     }

  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   const handleResize = () => {
  //     if (!container || !camera || !renderer) return;
      
  //     camera.aspect = container.clientWidth / container.clientHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(container.clientWidth, container.clientHeight);
  //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('mouseup', handleMouseUp);
  //     container.removeEventListener('mousedown', handleMouseDown);
  //     container.removeChild(renderer.domElement);
  //   };
  // }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-wildflower-green/10 to-wildflower-purple/10 dark:from-wildflower-dark dark:to-black px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left order-2 lg:order-1 w-full max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-secondary dark:text-wildflower-purple">
                {portfolioData.name}
              </span>
              <br />
              <span className="text-wildflower-dark dark:text-wildflower-light">
                {portfolioData.position}
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-wildflower-dark/80 dark:text-wildflower-light/80">
              {portfolioData.tagLine}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="btn-primary w-full sm:w-auto text-center"
              >
                View My Work
              </a>
{/*               <a 
                href={portfolioData.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 bg-wildflower-dark text-wildflower-light dark:bg-wildflower-purple dark:text-wildflower-dark px-6 py-3 rounded-lg hover:opacity[...]
              >
                <Download size={20} />
                Resume
              </a> */}
            </div>
          </div>
          
          {/* Image Column */}
          <div className="order-1 lg:order-2 w-full">
            <div 
              ref={containerRef} 
              className="h-[300px] sm:h-[400px] w-full max-w-[500px] mx-auto"
            >
              <img src="/your-image.png" alt="Hero Image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
