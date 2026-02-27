import { Github, Globe, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { profile } from "../data/profile";
import ElectricBorderWrapper from "./ui/ElectricBorderWrapper";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // ✅ Replace these with YOUR EmailJS values (from your dashboard)
  const SERVICE_ID = "service_k0e1179";
  const TEMPLATE_ID = "template_59qkmy7";
  const PUBLIC_KEY = "4FfHeKgqkembape9i";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        e.target.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert(`Email failed: ${err?.text || err?.message || JSON.stringify(err)}`);
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <section id="contact" className="relative w-full py-16 sm:py-20 bg-secondary/30">
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <ElectricBorderWrapper radius={14} thickness={2} chaos={0.1} className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 inline-block">
              Get In <span className="text-primary">Touch</span>
            </h2>
          </ElectricBorderWrapper>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let’s connect about internships, research, software engineering opportunities, and collaborative projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* LEFT SIDE */}
          <ElectricBorderWrapper radius={18} thickness={2} chaos={0.1} className="rounded-2xl w-full max-w-3xl mx-auto">
            <div className="space-y-6 rounded-2xl border border-border/60 bg-background/75 backdrop-blur-md p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 justify-center">
              {/* EMAIL */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Email :</h4>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300 block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Phone :</h4>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* WEBSITE */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Website :</h4>
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                  >
                    RicardoUrbaez.com
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">LinkedIn :</h4>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                  >
                    linkedin.com/in/ricardourbaez
                  </a>
                </div>
              </div>
              </div>

              {/* SOCIALS */}
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    className="hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                    href={profile.github}
                  >
                    <Github />
                  </a>

                  <a className="hover:text-primary" target="_blank" rel="noreferrer" href={profile.website}>
                    <Globe />
                  </a>

                  <a className="hover:text-primary" target="_blank" rel="noreferrer" href={profile.linkedin}>
                    <Linkedin />
                  </a>

                  <a className="hover:text-primary" href={`mailto:${profile.email}`}>
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          </ElectricBorderWrapper>

          {/* RIGHT SIDE */}
          <ElectricBorderWrapper radius={18} thickness={2} chaos={0.12} className="rounded-lg w-full max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-background/75 backdrop-blur-md p-6 sm:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={sendEmail} noValidate autoComplete="on" className="space-y-6">
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello! I'd like to talk about projects / jobs / internships..."
                />
              </div>

              {/* SUBMIT */}
              <ElectricBorderWrapper radius={14} thickness={2} chaos={0.08} className="block">
                <button
                  type="submit"
                  className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                >
                  Send Message <Send size={16} />
                </button>
              </ElectricBorderWrapper>
            </form>

          </div>
          </ElectricBorderWrapper>
        </div>
      </div>
    </section>
  );
};