"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";
import { Header } from "./Header";
import Head from "next/head";

export const Girl = () => {
  return (
    <div className="">
      <Header />
      <div className="flex place-content-center gap-20 py-24">
        <div className="flex-2 flex flex-col gap-6 py-10">
          <div className="text-6xl">Code, Create, Cute</div>
          <div className="text-3xl">
            I am a typescript full-stack developer.
          </div>
          <button
            type="button"
            className="w-fit text-white text-3xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Download My Resume
          </button>
        </div>
        <div className="relative flex-3">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image
            className="animate-bounce absolute left-0 top-0"
            src="/img/girl.png"
            alt={""}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
