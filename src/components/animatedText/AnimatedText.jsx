import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function AnimatedText({text,index,cls}) {

   return (
      <>
         <motion.span
            key={index}
            className={cls}
            layoutId="letter"
            initial={{y:-70,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.3,delay:index * 0.07,bounce:0.3,stiffness:100}}
         >
            {text}
         </motion.span>
      </>
   );
}
