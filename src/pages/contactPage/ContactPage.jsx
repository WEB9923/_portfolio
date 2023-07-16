import Form from "../../components/form/Form.jsx";
import "./ContactPage.scss";
import {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicId = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactPage() {
   const title = "<h1>contact</h1>";
   const formRef = useRef(null);
   const [isSending,setIsSending] = useState(false);
   const [success,setSuccess] = useState("");

   const handleSendEmail = async (e) => {
      e.preventDefault();
      try {
         setIsSending(true);
         await emailjs.sendForm(serviceId, templateId, formRef.current, publicId)
            .then((result) => {
               setSuccess(result.text);
               formRef.current.reset();
         }, (error) => {
            setSuccess(error.text);
         });
      } catch (err) {
         console.log(err);
      } finally {
         setIsSending(false);
      }
   };

   const obj = {
      formRef,
      handleSendEmail,
      isSending,
      success
   }

   return (
      <>
         <section className="contact-section">
            <div className="container">
               <h1 className="title">{title}</h1>
               <div className="contact-wrapper">
                  <Form obj={obj}/>
               </div>
            </div>
         </section>
      </>
   );
}
