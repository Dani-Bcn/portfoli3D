import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Text3D, useCursor ,useScroll} from "@react-three/drei";
import text1 from "/public/fonts/Rammetto One_Regular.json";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Cartel(props) {
  const { nodes, materials } = useGLTF("/cartel.gltf");
  const [activeCursor, setActiveCursor] = useState(false);
  const [activeCursorProjects, setActiveCursorProjects] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [colorskills, setColorskills] = useState("rgb(170,152,250)");
  const [colorCartel, setColorCartel] = useState("rgb(170,152,250)");
  const [colorCartelProjects, setColorCartelProjects] = useState("rgb(170,152,250)");
  useCursor(activeCursor);
  useCursor(activeCursorProjects);
  useCursor(activeSkills);

  const cartelRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();

  useEffect(() => {
    activeCursor
      ? gsap.to(aboutRef.current.position, {
          z: 1.8,
          duration: 0.5,
        })
      : gsap.to(aboutRef.current.position, {
          z: 2.5,
          duration: 0.5,
        });
  }, [activeCursor]);
  useEffect(() => {
    activeCursorProjects
      ? gsap.to(projectsRef.current.position, {
          z: 1.8,
          duration: 0.5,
        })
      : gsap.to(projectsRef.current.position, {
          z: 2.5,
          duration: 0.5,
        });
  }, [activeCursorProjects]);
  useEffect(() => {
    activeSkills
      ? gsap.to(skillsRef.current.position, {
          z: 1.8,
          duration: 0.5,
        })
      : gsap.to(skillsRef.current.position, {
          z: 2.5,
          duration: 0.5,
        });
  }, [activeSkills]);

  const data = useScroll()
  useFrame((state, delta) => {
    if (data.range(5, 5 / 5) < 1) {
      cartelRef.current.position.y = 0 - data.range(0, 20 / 2) * 70
    }
  })  

  return (
    <group ref={cartelRef} position={[-3,0,-0.1]}>
      <group
        ref={projectsRef}
        position={[3, 2.5, 5]}
        scale={0.002}
        {...props}
        dispose={null}
      >
        <mesh
          onPointerOver={() => {
            setActiveCursorProjects(true),
              setColorCartelProjects("rgb(255,200,150)");
          }}
          onPointerOut={() => {
            setActiveCursorProjects(false),
              setColorCartelProjects("rgb(170,152,250)");
          }}
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          material={materials.Mat}
          position={[0, 0, -7.368]}
        />
        <Text3D
          castShadow
          class="coco"
          curveSegments={50} //Definicion
          bevelEnabled
          bevelSize={0.02} //Grosor
          bevelThickness={0.2}
          height={250} //profundidad
          letterSpacing={-0.06}
          size={120}
          font={text1}
          position={[-450, -35, -5]}
        >
          {`Projects`}
          <meshStandardMaterial color={colorCartelProjects} />
        </Text3D>
      </group>
      <group
        ref={aboutRef}
        position={[0, 2.5, 5]}
        scale={0.002}
        {...props}
        dispose={null}
      >
        <mesh
          onPointerOver={() => {
            setActiveCursor(true), setColorCartel("rgb(255,200,150)");
          }}
          onPointerOut={() => {
            setActiveCursor(false), setColorCartel("rgb(170,152,250)");
          }}
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          material={materials.Mat}
          position={[0, 0, -7.368]}
        />
        <Text3D
          castShadow
          curveSegments={50} //Definicion
          bevelEnabled
          bevelSize={0.02} //Grosor
          bevelThickness={0.2}
          height={250} //profundidad
          letterSpacing={-0.06}
          size={120}
          font={text1}
          position={[-400, -35, -5]}
        >
          {`About`}
          <meshStandardMaterial color={colorCartel} />
        </Text3D>
      </group>
      <group
        ref={skillsRef}
        position={[6, 2.5, 5]}
        scale={0.002}
        {...props}
        dispose={null}
      >
        <mesh
          onPointerOver={() => {
            setActiveSkills(true),
              setColorskills("rgb(255,200,150)");
          }}
          onPointerOut={() => {
            setActiveSkills(false),
              setColorskills("rgb(170,152,250)");
          }}
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          material={materials.Mat}
          position={[0, 0, -7.368]}
        />
        <Text3D
          castShadow
          class="coco"
          curveSegments={50} //Definicion
          bevelEnabled
          bevelSize={0.02} //Grosor
          bevelThickness={0.2}
          height={250} //profundidad
          letterSpacing={-0.06}
          size={120}
          font={text1}
          position={[-300, -35, -5]}
        >
          {`Skills`}
          <meshStandardMaterial color={colorskills} />
        </Text3D>
      </group>
    </group>
  );
}

useGLTF.preload("/cartel.gltf");
