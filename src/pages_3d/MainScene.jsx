/* eslint-disable no-unused-vars */
import {
  Environment,
  Scroll,
  ScrollControls,
  PerspectiveCamera,
  Text3D,
  Text,
  Shadow,
  Html,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState, Suspense, useEffect } from "react";
import text1 from "/public/fonts/Rammetto One_Regular.json";
import { Cuadro } from "../models_3d/Cuadro";
import text2 from "/public/fonts/Gruppo-Regular.ttf";
import { Cartel } from "../models_3d/Nabvar";
import gsap from "gsap";
import { motion as m } from "framer-motion-3d"

const MainScene = () => {

  const titleRef= useRef()

useEffect(()=>{
  gsap.to(titleRef,{
    z:5
  })
},[])

  return (
    <Canvas shadows>
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 40]} fov={10} />
      <spotLight
        position={[0, 10, 12]}
        intensity={100}
        angle={100}
        castShadow
        isSpotLight={500}
      />
      <spotLight
        position={[0, -20, 12]}
        intensity={100}
        angle={100}
        castShadow
        isSpotLight={500}
      />
      <Shadow
        color="black"
        colorStop={0.5}
        opacity={1}
        fog={true} // Reacts to fog (default=false)
      />
      <ScrollControls pages={2} damping={0.3}>
        <Scroll>
          <mesh
            scale={[5, 5, 3]}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
            receiveShadow
          >
            <boxGeometry args={[50, 50]} />
            <meshStandardMaterial color="rgb(255,200,150)" />
          </mesh>
          <Text3D
          ref={titleRef}
            castShadow
            curveSegments={50} //Definicion
            bevelEnabled
            bevelSize={0.02} //Grosor
            bevelThickness={0.2}
            height={0.5} //profundidad
            letterSpacing={-0.06}
            size={0.8}
            font={text1}
            position={[-3.5, 0, 1]}
          >
            {`Dani Pérez`}
            <meshStandardMaterial color={"rgb(170,152,250)"} />
          </Text3D>
          <Text scale={0.3} position={[1.5, -3, 2]} font={text2}>
            Buscando crear webs diferentes, {"\n"}
            opino que las webs en 3d son el futuro,{"\n"}
            con las nuevas tecnologias y buenas prácticas,{"\n"}
            el peso y la fluidez de estás ya no deberian{"\n"}
            de ser un problema como para renunciar a ellas.{"\n"}Y una
            reflexión...{"\n"}
            ..se dejaron de hacer juegos en 3D porque pesaban más?...
            <meshStandardMaterial color={"rgb(20,52,250)"} />
          </Text>
          <Cuadro />
          <Cartel />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default MainScene;
