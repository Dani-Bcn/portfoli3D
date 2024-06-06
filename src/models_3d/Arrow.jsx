import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export function Arrow(props) {
  const { nodes, materials } = useGLTF("/arrow_3d.gltf");
  const arrowRef = useRef();

  useEffect(() => {
    gsap.to(arrowRef.current.position, {
      y: -1,
      repeat:5,
      duration:1.5,
      ease:"circ.out"
    });
    gsap.to(arrowRef.current.rotation, {
        x: -0.3,
        repeat:5,
        duration:1.5,
        ease:"circ.out"
      });
  });

  return (
    <group
      ref={arrowRef}
      scale={0.007}
      position={[-0.3, 0, 2]}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      >
        <meshStandardMaterial color="rgba(200,255,200,0.5)" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/arrow_3d.gltf");
