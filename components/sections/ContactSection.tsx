"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Loader2, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setErrorMessage(result.error || "Failed to send message.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Open to QA opportunities, collaborations, and testing challenges"
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-white font-bold text-xl mb-6">Get in Touch</h3>

              <a href="mailto:mohammedkaif0903@gmail.com" className="flex items-center gap-4 text-base md:text-lg text-white/50 hover:text-[#00D4FF] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Mail size={18} className="text-[#00D4FF]" />
                </div>
                mohammedkaif0903@gmail.com
              </a>

              <a href="tel:+919360449767" className="flex items-center gap-4 text-base md:text-lg text-white/50 hover:text-[#00D4FF] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#7B61FF]/10 border border-[#7B61FF]/20 flex items-center justify-center group-hover:bg-[#7B61FF]/20 transition-colors">
                  <Phone size={18} className="text-[#7B61FF]" />
                </div>
                +91 9360449767
              </a>

              <div className="flex items-center gap-4 text-base md:text-lg text-white/50">
                <div className="w-10 h-10 rounded-lg bg-[#00FFB2]/10 border border-[#00FFB2]/20 flex items-center justify-center">
                  <MapPin size={18} className="text-[#00FFB2]" />
                </div>
                Chennai, Tamil Nadu
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-kaif-87b8ab271", color: "#00D4FF", label: "LinkedIn" },
                { icon: Github, href: "#", color: "#7B61FF", label: "GitHub" },
                { icon: Mail, href: "mailto:mohammedkaif0903@gmail.com", color: "#00FFB2", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all group"
                >
                  <social.icon
                    size={20}
                    className="transition-colors"
                    style={{ color: social.color + "80" }}
                  />
                  <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors font-medium">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-white/40 font-mono uppercase tracking-wider mb-2 block font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF]/40 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/40 font-mono uppercase tracking-wider mb-2 block font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF]/40 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-white/40 font-mono uppercase tracking-wider mb-2 block font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-base text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF]/40 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black font-bold text-base hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 disabled:opacity-70 ${status === 'error' ? 'opacity-50' : ''}`}
              >
                {status === "idle" && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                {status === "error" && (
                  <>
                    <Send size={18} />
                    Retry
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
