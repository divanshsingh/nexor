import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export default function Pegsus (props) {
  const { nodes, materials } = useMemo(()=> useGLTF('secondModel/scene.gltf'),[]) 
  return (
    <group {...props} dispose={null} scale={[2,2,2]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.NikeShoe}
        />
      </group>
    </group>
  )
}

useGLTF.preload('secondModel/scene.gltf')
