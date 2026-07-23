import { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

import {

    Send,

    LoaderCircle

} from "lucide-react";

const ContactForm = () => {

    const form = useRef<HTMLFormElement>(null);

    const [loading,setLoading]=useState(false);

    const sendEmail=async(

        e:React.FormEvent<HTMLFormElement>

    )=>{

        e.preventDefault();

        if(!form.current) return;

        try{

            setLoading(true);

            await emailjs.sendForm(

                "service_ds0sp3i",

                "template_2iwfnea",

                form.current,

                {

                    publicKey:"ScuoqhWx730gL9QRB"

                }

            );

            toast.success("Message sent successfully!");

            form.current.reset();

        }

        catch{

            toast.error("Failed to send message.");

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <motion.form

            ref={form}

            onSubmit={sendEmail}

            initial={{

                opacity:0,

                x:60

            }}

            whileInView={{

                opacity:1,

                x:0

            }}

            viewport={{

                once:true

            }}

            transition={{

                duration:.7

            }}

            className="

                rounded-3xl

                border

                border-slate-800

                bg-slate-900/60

                p-10

                backdrop-blur-xl

                space-y-6

            "

        >

            <input

                required

                name="user_name"

                placeholder="Your Name"

                className="

                    w-full

                    rounded-xl

                    border

                    border-slate-700

                    bg-slate-950

                    px-5

                    py-4

                    text-white

                    outline-none

                    transition

                    focus:border-blue-500

                "

            />

            <input

                required

                type="email"

                name="user_email"

                placeholder="Email"

                className="

                    w-full

                    rounded-xl

                    border

                    border-slate-700

                    bg-slate-950

                    px-5

                    py-4

                    text-white

                    outline-none

                    transition

                    focus:border-blue-500

                "

            />

            <input

                required

                name="subject"

                placeholder="Subject"

                className="

                    w-full

                    rounded-xl

                    border

                    border-slate-700

                    bg-slate-950

                    px-5

                    py-4

                    text-white

                    outline-none

                    transition

                    focus:border-blue-500

                "

            />

            <textarea

                required

                rows={7}

                name="message"

                placeholder="Write your message..."

                className="

                    w-full

                    resize-none

                    rounded-xl

                    border

                    border-slate-700

                    bg-slate-950

                    px-5

                    py-4

                    text-white

                    outline-none

                    transition

                    focus:border-blue-500

                "

            />

            <button

                disabled={loading}

                className="

                    flex

                    w-full

                    items-center

                    justify-center

                    gap-3

                    rounded-xl

                    bg-blue-600

                    py-4

                    font-semibold

                    text-white

                    transition

                    hover:bg-blue-500

                    disabled:cursor-not-allowed

                    disabled:opacity-60

                "

            >

                {

                    loading

                    ?

                    <>

                        <LoaderCircle

                            className="animate-spin"

                            size={20}

                        />

                        Sending...

                    </>

                    :

                    <>

                        <Send size={20}/>

                        Send Message

                    </>

                }

            </button>

        </motion.form>

    );

};

export default ContactForm;