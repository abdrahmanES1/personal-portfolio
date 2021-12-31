import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const Contact = () => {
   const form = useRef();
   const textarea = useRef();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const textareaOnFocus = (e) => {
      e.target.value = "";
   };

   const sendEmail = (data, e) => {
      e.preventDefault();
      emailjs
         .sendForm(
            "service_ith39ol",
            "template_tkfvm8n",
            form.current,
            "user_O7s1MPbunOASaEAKRJ0ac"
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset();
   };

   return (
      <div className="contact-me" id="contact-me">
         <div className="container-sm">
            <div className="text-center contact-header">
               <h1>contact</h1>
               <h2>get in touch</h2>
               <p>
                  Fill in your info in the form below and I look forward to
                  hearing from you!
               </p>
            </div>
            <div className="background">
               <div className="container">
                  <div className="screen">
                     <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <div className="screen-body">
                           <div className="screen-body-item left">
                              <div className="app-title">
                                 <span>CONTACT</span>
                                 <span>US</span>
                              </div>
                           </div>
                           <div className="screen-body-item">
                              <div className="app-form">
                                 <div className="app-form-group">
                                    <input
                                       className="app-form-control"
                                       placeholder="Name"
                                       {...register("name", {
                                          required: true,
                                          maxLength: 20,
                                       })}
                                    />
                                    {errors.name && (
                                       <span className="error">
                                          Name is required
                                       </span>
                                    )}
                                 </div>
                                 <div className="app-form-group">
                                    <input
                                       className="app-form-control"
                                       placeholder="Email"
                                       {...register("email", {
                                          required: true,
                                          pattern:
                                             /^[a-z0-9._%+-]+@[a-z0-9.-]{4,8}\.[a-z]{2,4}$/,
                                       })}
                                    />
                                    {errors.email && (
                                       <span className="error">
                                          Email is required
                                       </span>
                                    )}
                                 </div>
                                 <div className="app-form-group message">
                                    <textarea
                                       className="app-form-control"
                                       {...register("message", {
                                          minLength: 10,
                                       })}
                                       ref={textarea}
                                       onFocus={textareaOnFocus}
                                       defaultValue="Message Me......"></textarea>
                                    {errors.message && (
                                       <span className="error">
                                          Message is required
                                       </span>
                                    )}
                                 </div>
                                 <div className="app-form-group buttons">
                                    <button
                                       className="app-form-button"
                                       type="reset">
                                       CANCEL
                                    </button>
                                    <button
                                       className="app-form-button"
                                       type="submit">
                                       SEND
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
