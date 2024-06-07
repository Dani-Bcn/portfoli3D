import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Pizarra(props) {

  const { nodes, materials } = useGLTF("/pizarra.gltf");
  const groupRef = useRef();
  const data = useScroll();  


  return (
    <group
      ref={groupRef}
      scale={0.0033}
      rotation={[0, 1.57, 0]}
      position={[1.5, -3, 1.9]}
      {...props}
      dispose={null}
    >
      <group scale={1.5} position={[0, -610, 0]} rotation={[0, 0.7, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          material={materials["Mat.1"]}
          position={[0, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Loft_1.geometry}
          material={materials.Mat}
          position={[0, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cube1-Mat"].geometry}
        material={materials.Mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cube1-Mat2"].geometry}
        material={materials["Mat.2"]}
      />
    </group>
  );
}

useGLTF.preload("/pizarra.gltf");
