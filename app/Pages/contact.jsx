"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Link from "next/link";
import swal from "sweetalert";
import { SparklesCore } from "@/components/ui/sparkles";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Button from "@/app/components/ui/button";

function Contact() {
  const onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aff32320-19be-4d5e-b396-b9e151fdcfe6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        swal("Good job!", "Your message sent successfully!", "success");
        event.target.reset();
      } else {
        swal("Oops!", "Something went wrong. Please try again.", "error");
      }
    } catch (err) {
      swal("Oops!", "Could not send your message. Please try again.", "error");
    }
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center p-4 mt-10 h-fit pl-8"
    >
      <div className="flex flex-col md:flex-row justify-center items-start w-full">
        <div className="flex flex-col justify-center items-start p-4 w-full">
          <div className="">
            <h1 className="text-4xl font-bold font-rubik text-left">
              Contact Info.
            </h1>
            <div className="w-full h-4 relative">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-4"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <p className="text-base font-roboto font-medium">
            I’m always eager to hear about new opportunities and collaborations.
            If you have any questions, project ideas, or just want to say hello,
            don’t hesitate to get in touch.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Mail className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-xl" />
            <div>
              <h1 className="text-base font-roboto font-semibold">Email :</h1>
              <p className="text-sm "> aryankumar911315@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Phone className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-xl" />
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
                  <FaGithub className="h-6 w-6 text-secondary " />
                </span>
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/aryan-choudhary-9256a7290/">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <FaLinkedinIn className="h-6 w-6 text-secondary " />
                </span>
              </button>{" "}
            </Link>
            <Link href="https://www.instagram.com/aryanchoudhary2119/">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <RiInstagramFill className="h-6 w-6 text-secondary " />
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
          <h1 className="text-3xl font-bold font-rubik">Get in Touch.</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className=" rounded-xs p-3 w-full text-sm bg-secondary-foreground"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className=" rounded-xs p-3 w-full text-sm bg-secondary-foreground"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className=" rounded-xs p-3 w-full text-sm bg-secondary-foreground h-36"
          />
          <Button
            type="submit"
            variant={"primary"}
            size={"medium"}
            className="rounded-md font-roboto font-semibold text-base w-40 mt-4"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
