"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Office",
    value: "Dhaka, Bangladesh",
  },
  {
    title: "Phone",
    value: "+880 XXX XXX XXXX",
  },
  {
    title: "Email",
    value: "hello@company.com",
  },
  {
    title: "Working Hours",
    value: "Saturday - Thursday\n10 AM - 7 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C8B08A] uppercase tracking-[0.25em] text-sm">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-light">
              Get In Touch
            </h2>

            <p className="mt-6 text-neutral-600 max-w-lg leading-relaxed">
              Every remarkable space begins with a conversation.
              Share your ideas and we'll guide you through the next steps.
            </p>

            <div className="mt-12 space-y-5">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:-translate-y-1 transition"
                >
                  <h4 className="text-sm uppercase tracking-widest text-[#8B7355]">
                    {card.title}
                  </h4>

                  <p className="mt-3 whitespace-pre-line text-lg">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/30 bg-white/70 backdrop-blur-xl p-8 lg:p-10 shadow-[0_25px_80px_rgba(0,0,0,.08)]"
          >
            <div className="grid gap-5">

              <input
                placeholder="Full Name"
                className="h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-[#C8B08A]"
              />

              <input
                placeholder="Email Address"
                className="h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-[#C8B08A]"
              />

              <input
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-[#C8B08A]"
              />

              <select className="h-14 rounded-2xl border border-black/10 px-5">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Interior Design</option>
                <option>Custom Furniture</option>
              </select>

              <input
                placeholder="Budget Range"
                className="h-14 rounded-2xl border border-black/10 px-5"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="rounded-2xl border border-black/10 p-5"
              />

              <button className="group mt-2 h-14 rounded-full bg-[#1A1A1A] text-white transition hover:shadow-[0_0_40px_rgba(200,176,138,.35)]">
                Send Message
              </button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}