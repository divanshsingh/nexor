import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';

export default function Jordan(props) {
  const { nodes, materials } = useMemo(()=> useGLTF('firstModel/scene.gltf'), []);
  
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.3, -0.1]} scale={1.8} rotation={[Math.PI / -2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.initialShadingGroup}
        />
      </group>
    </group>
  )
}

// Preload the GLTF model
useGLTF.preload('firstModel/scene.gltf');
