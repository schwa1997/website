"use client";

import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

export const Who = () => {
  return (
    <div className="flex place-content-center gap-20 h-screen">
      <div className="relative flex-3">
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex-2 flex flex-col gap-6 py-10">
        <div className="text-6xl">Think out of the box.</div>
        <div className="text-3xl">I am a typescript full-stack developer.</div>
        <div className="text-3xl">I am a typescript full-stack developer.</div>
        <div className="text-3xl">I am a typescript full-stack developer.</div>
        <div className="text-3xl">I am a typescript full-stack developer.</div>
        <div className="text-3xl">I am a typescript full-stack developer.</div>
        <button
          type="button"
          className="w-fit text-white text-3xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Contact me!
        </button>
      </div>
    </div>
  );
};
