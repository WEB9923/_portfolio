import "./Form.scss";
import {IoSend} from "react-icons/io5";
import {BsCheckCircleFill} from "react-icons/bs";
import {ClipLoader} from "react-spinners";
import {motion} from "framer-motion";
import {useFormik} from "formik";
import {EmailSchema} from "../../schemas/EmailSchema.js";
import {useTheme} from "../../store/ThemeContext.jsx";

// eslint-disable-next-line react/prop-types
export default function Form({obj, onSubmit}) {
   const {
      handleSubmit,
      errors,
      values,
      touched,
      handleChange,
      handleBlur
   } = useFormik({
      initialValues:{
         from_name:"",
         from_email:"",
         message:""
      },
      validationSchema: EmailSchema,
      onSubmit
   })

   const {isDarkTheme} = useTheme();

   return (
      <>
         <motion.form
            autoComplete={"off"}
            ref={obj.formRef}
            onSubmit={handleSubmit}
            initial={{opacity:0,y:50,scale:0.5}}
            animate={{opacity:1, y:0, scale:1}}
            transition={{type:"spring",stiffness:100,duration:0.5}}
            className={`${isDarkTheme && "darkmode"}`}
         >
            <h1 className="title">send email</h1>
            {obj.success === "OK" && <><p className="success"><BsCheckCircleFill size={20}/>email sent!</p></>}
            <div className="form-wrapper">
               <div className="">
                  <input
                     name="from_name"
                     type="text"
                     placeholder="enter your name"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.from_name}
                  />
                  {errors && touched.from_name && <p className="error-text">{errors.from_name}</p>}
               </div>
               <div className="">
                  <input
                     name="from_email"
                     type="email"
                     placeholder="enter your email adress"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.from_email}
                  />
                  {errors && touched.from_email && <p className="error-text">{errors.from_email}</p>}
               </div>
               <div className="">
                  <textarea
                     name="message"
                     placeholder="enter your message"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.message}
                  />
                  {errors && touched.message && <p className="error-text">{errors.message}</p>}
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
