import "./Form.scss";
import {IoSend} from "react-icons/io5";
import {BsCheckCircleFill} from "react-icons/bs";
import {ClipLoader} from "react-spinners";
import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Form({obj}) {
   return (
      <>
         <motion.form
            {/* eslint-disable-next-line react/prop-types */}
            ref={obj.formRef}
            onSubmit={obj.handleSendEmail}
            initial={{opacity:0,y:50,scale:0.5}}
            animate={{opacity:1, y:0, scale:1}}
            transition={{type:"spring",stiffness:100,duration:0.5}}
         >
            <h1 className="title">send email</h1>
            {obj.success === "OK" && <><p className="success"><BsCheckCircleFill size={20}/>email sent!</p></>}
            <div className="form-wrapper">
               <div className="">
                  <input name="from_name" type="text" placeholder="enter your name"/>
               </div>
               <div className="">
                  <input name="from_email" type="email" placeholder="enter your email adress"/>
               </div>
               <div className="">
                  <textarea name="message" placeholder="enter your message"/>
               </div>
               <div className="">

                  <button type="submit">
                     {obj.isSending ? <>
                           <ClipLoader
                              color="#d0e0dc"
                              size={22}
                              speedMultiplier={1}
                           /> loading...</>
                        : <>send <IoSend size={20}/>
                        </>}
                  </button>
               </div>
            </div>
         </motion.form>
      </>
   );
}
