import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export default function Boots(props) {
  const { nodes, materials } = useMemo(()=> useGLTF('thirdModel/scene.gltf'), []) 
  return (
    <group {...props} dispose={null} scale={[1,1,1]}>
      <group rotation={[Math.PI / 2, -1.6, 0]} 
      position={[0.9, 2, -0.6]}
      >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.material_0}
          />
        </group>
        </group>
  )
}

useGLTF.preload('thirdModel/scene.gltf')
