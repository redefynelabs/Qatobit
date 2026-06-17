"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function InfiniteGrid() {
  const topRef = useRef<THREE.GridHelper>(null);
  const bottomRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (bottomRef.current) {
      bottomRef.current.position.z += delta * 10;

      if (bottomRef.current.position.z > 10) {
        bottomRef.current.position.z = 0;
      }
    }

    if (topRef.current) {
      topRef.current.position.z -= delta * 10;

      if (topRef.current.position.z < -10) {
        topRef.current.position.z = 0;
      }
    }
  });

  return (
    <>
      <gridHelper
        ref={bottomRef}
        args={[200, 100, "#EC5B13", "#EC5B13"]}
        position={[0, -15, 0]}
      />
      <group rotation={[Math.PI, 0, 0]}>
        <gridHelper
          ref={topRef}
          args={[200, 100, "#EC5B13", "#EC5B13"]}
          position={[0, -15, 0]}
        />
      </group>
    </>
  );
}

export default function MovingGrid() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 25], fov: 55 }}>
        <color attach="background" args={["#f7f7f7"]} />
        <fog attach="fog" args={["#f7f7f7", 20, 80]} />
        <InfiniteGrid />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
