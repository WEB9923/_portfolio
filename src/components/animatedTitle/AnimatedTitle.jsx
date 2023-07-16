import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function AnimatedTitle({title}) {
   return (
      <>
         <motion.h1
            className="title"
            initial={{y: 60}}
            whileInView={{y: 0}}
            transition={{type: "spring", stiffness: 100, duration: 0.5}}
         >
            {title}
         </motion.h1>
      </>
   );
}

