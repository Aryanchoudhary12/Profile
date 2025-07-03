'use client';
import { Instagram, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Link from "next/link";
import swal from 'sweetalert';
function Contact() {
  const onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aff32320-19be-4d5e-b396-b9e151fdcfe6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      swal.fire({
        title: "Good job!",
        text: "Your message sent successfully!",
        icon: "success",
      });
    }
  };
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center p-4 mt-10 h-fit "
    >
       <h1 className="text-6xl font-bold font-rubik text-center">CONTACT ME</h1>
        <div className="flex items-center justify-center w-60 h-2 bg-white/20 rounded-2xl mt-1">
          <div className="w-full h-full bg-secondary rounded-2xl underline"></div>
        </div>
      <div className="flex flex-col md:flex-row justify-center items-start mt-6 w-full">
        <div className="flex flex-col justify-center items-start p-4 gap-2 w-full">
          <h1 className="text-3xl font-bold font-roboto">Contact Info</h1>
          <p className="text-base font-roboto font-medium">
            I’m always eager to hear about new opportunities and collaborations.
            If you have any questions, project ideas, or just want to say hello,
            don’t hesitate to get in touch.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Mail className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-full" />
            <div>
              <h1 className="text-base font-roboto font-semibold">Email :</h1>
              <p className="text-sm "> aryankumar911315@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Phone className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-full" />
            <div>
              <h1 className="text-base font-roboto font-semibold">Phone :</h1>
              <p className="text-sm "> +91 9113156691</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <MapPin className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-full" />
            <div>
              <h1 className="text-base font-roboto font-semibold">Address :</h1>
              <p className="text-sm ">
                {" "}
                IIIT Ranchi, Khelgaon Housing Complex{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Link href="https://github.com/Aryanchoudhary12">
              <Github className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/aryan-choudhary-9256a7290/">
              <Linkedin className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-2xl" />
            </Link>
            <Link href="https://www.instagram.com/aryanchoudhary2119/">
              <Instagram className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-2xl" />
            </Link>
          </div>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          className="flex flex-col justify-center items-start p-4 gap-2 w-full"
          onSubmit={onsubmit}
        >
          <h1 className="text-3xl font-bold font-roboto">Get in Touch</h1>
          <input
            type="text"
            placeholder="Name"
            className=" rounded-xs p-3 w-full text-sm bg-secondary-foreground"
          />
          <input
            type="email"
            placeholder="Email"
            className=" rounded-xs p-3 w-full text-sm bg-secondary-foreground"
          />
          <textarea
            placeholder="Message"
            className=" rounded-xs p-3 w-full text-sm bg-secondary-foreground h-36"
          />
          <button
            type="submit"
            className="bg-button p-2 px-4 rounded-full text-sm font-medium font-roboto mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
