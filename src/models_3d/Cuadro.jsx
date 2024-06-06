import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Image, MeshReflectorMaterial } from "@react-three/drei";
import img from "/public/imgs/Foto.jpeg";
import gsap from "gsap";

export function Cuadro(props) {
  const { nodes, materials } = useGLTF("/cuadro.gltf");
  const [activeCuadro, setActiveCuadro] = useState(false);
  const cuadroRef = useRef();
 

useEffect(()=>{
  activeCuadro?
  gsap.to(cuadroRef.current.position,{
    z:1.5
  })
  :
  gsap.to(cuadroRef.current.position,{
    z:2
  })
},[activeCuadro])
  return (
    <group
    ref={cuadroRef}

    onPointerOver={()=>{setActiveCuadro(true)}}
    onPointerOut={()=>{setActiveCuadro(false)}}
      position={[-5, -3, 1.9]}
      rotation={[0, 0, 0]}
      scale={0.01}
      {...props}
      dispose={null}
      castShadow
      receiveShadow
    >
      <mesh
        position={[40, 0, 0]}
        scale={2}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Mat}
      >
        <MeshReflectorMaterial
          blur={[30, 10]}
          resolution={2048}
          mixBlur={5}
          mixStrength={0.5}
          roughness={0.05}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="rgb(240, 204, 172)"
          metalness={0.005}
        />
      </mesh>
      <Image url={img} scale={[250, 375, 10]} position={[-30, 0, 5]}></Image>
    </group>
  );
}
