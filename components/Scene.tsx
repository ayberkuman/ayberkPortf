import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
export const Scene = (prop: { isHovered: boolean }) => {
  return (
    <Canvas className="w-full - h-full">
      <motion.ambientLight intensity={0.1} />
      <motion.directionalLight color="red" position={[0, 0, 5]} />
      <motion.group animate={prop.isHovered ? "hover" : "rest"}>
        <motion.mesh position={[2, 2, 2]} variants={{ hover: { z: 10 } }}>
          <motion.boxGeometry>
            <motion.meshStandardMaterial />
          </motion.boxGeometry>
        </motion.mesh>
      </motion.group>
    </Canvas>
  );
};
