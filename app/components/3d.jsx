"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { useProgress } from "@react-three/drei";
import animation from "@/public/Animation.json";
import Lottie from "react-lottie";

function AnimatedModel() {
  const group = useRef();
  const { scene, animations } = useGLTF("/hero.glb");
  const mixer = useRef();
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(true);
  const actionRef = useRef(null);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
      actionRef.current = action;
    }
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (!child.userData.originalEmissive) {
          child.userData.originalEmissive = child.material.emissive?.clone();
          child.userData.originalIntensity =
            child.material.emissiveIntensity || 1;
        }
      }
    });
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
    scene.traverse((child) => {
      if (child.isMesh && child.material?.emissive) {
        if (hovered) {
          child.material.emissive.set(0x00ffff);
          child.material.emissiveIntensity = 2.2;
        } else {
          if (child.userData.originalEmissive) {
            child.material.emissive.copy(child.userData.originalEmissive);
            child.material.emissiveIntensity = child.userData.originalIntensity;
          }
        }
      }
    });
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.8}
      position={[0, -1, 0]}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
        setHovered(true);
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
        setHovered(false);
      }}
      onClick={() => {
        if (!actionRef.current) return;
        if (playing) {
          actionRef.current.stop();
        } else {
          actionRef.current.play();
        }
        setPlaying(!playing);
      }}
    />
  );
}

export function Preload() {
  const { progress } = useProgress();
  if (progress == 100) return null;
  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-4 gap-2">
      <Loader2 className="stroke-3 animate-spin h-10 w-10 text-secondary" />
      <span className="ml-3 text-base font-bold font-rubik">
        {" "}
        {Math.floor(progress)}%{" "}
        <span className="font-bokor font-semibold">Loading...</span>
      </span>
    </div>
  );
}

export default function Robo() {
  const animate = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { progress } = useProgress();
  return (
    <div className="h-full w-full relative">
      {progress == 100 && (
        <div className="flex items-start justify-start absolute -top-8  w-96 sm:w-full h-full right-2 opacity-80 overflow-hidden">
          <Lottie
            options={animate}
            height={400}
            width={400 }
          />
        </div>
      )}

      <Canvas camera={{ position: [1, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
