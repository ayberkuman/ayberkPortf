import { Scene } from "../components/Scene";
import { motion as motion3d } from "framer-motion-3d";
import { useState } from "react";
const Threedpage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion3d.div
      className="w-screen h-screen"
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
    >
      <Scene isHovered={isHovered} />
    </motion3d.div>
  );
};

export default Threedpage;
