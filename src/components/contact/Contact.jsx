import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";


const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [successNote, setSuccessNote] = useState("Send Message")



    const handleEmailTrigger = async (name, email, subject, message) => {
        if(name && email && subject && message){
            setSuccessNote("Sending...")
            if(props.handleLoading){
                props.handleLoading(true)
            }
            
            try {
                const mailTrigger = await fetch(`https://arun-portfolio-backend.vercel.app/api/sendEmail`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name, email,subject,message})
                })
                if (!mailTrigger.ok) {
                    throw new Error(`HTTP error! Status: ${mailTrigger.status}`);
                } else {
                    const thankyouMailSend = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/thankYouMail`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({name, email,subject,message})
                    }).then((res) => {
                        if(res){
                            setName("")
                            setMessage("")
                            setEmail("")
                            setSubject("")
                            setSuccessNote("Send Message")
                            props.handleLoading(false)
                            toast.success("Thank you for contacting me");
                        }
                    })
                    console.log("thankyouMailSend" , thankyouMailSend)
                }
        
                // const data = await mailTrigger.json();
                // console.log("Email sent successfully:", data);
            } catch(error){
                props.handleLoading(false)
                setSuccessNote("Send Message")
                toast.error("Oops! There was an error sending the email. Please retry🙏.")
                console.log("Error while mail trigger", error)
            }
        }
        // else {
        //     toast.error("Please fill all the details")
        // }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Please complete the form above");
        }
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email. 👋
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                value={name}
                                // name="from_name"
                                className="contact__form-input"
                                placeholder="Give Us Your Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                value={email}
                                // name="from_email"
                                className="contact__form-input"
                                placeholder="Give Us Your Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            value={subject}
                            // name="from_subject"
                            className="contact__form-input"
                            placeholder="Add Your Subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            value={message}
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Share Your Thoughts"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button disabled={successNote === "Sending..." ? true : false} onClick={() => handleEmailTrigger(name, email, subject, message)} type="submit" className="btn">
                        {/* {loading ? "Sending..." : "Send Message"} */}
                        {successNote}
                    </button>
                </form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;
