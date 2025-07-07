"use client";
import { Instagram, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Link from "next/link";
import swal from "sweetalert";
import { SparklesCore } from "@/components/ui/sparkles";
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
      className="flex flex-col justify-center items-center p-4 mt-10 h-fit pl-8"
    >
      <h1 className="text-4xl font-bold font-rubik text-left w-full pl-4">
        CONTACT <span className="text-secondary">ME</span>
      </h1>
      <div className="flex items-start w-full pl-4">
        <div className="w-80 h-10 relative">
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-10"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start w-full">
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
          <div className="flex gap-4 mt-6 mb-6 relative">
            <Link href="https://github.com/Aryanchoudhary12">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Github className="h-6 w-6 text-secondary " />
                </span>
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/aryan-choudhary-9256a7290/">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Linkedin className="h-6 w-6 text-secondary " />
                </span>
              </button>{" "}
            </Link>
            <Link href="https://www.instagram.com/aryanchoudhary2119/">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Instagram className="h-6 w-6 text-secondary " />
                </span>
              </button>{" "}
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
