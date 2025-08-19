"use client";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="section py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 mb-8">
          <FiMail />
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget as HTMLFormElement);
              const name = data.get("name");
              alert(`Thanks, ${name}! I'll get back to you soon.`);
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div>
              <label className="text-sm">Name</label>
              <input name="name" required className="glow-input w-full rounded-lg px-3 py-2 mt-1" placeholder="Your coolest alias" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input name="email" type="email" required className="glow-input w-full rounded-lg px-3 py-2 mt-1" placeholder="notavirus@totallysafe.com" />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea name="message" rows={5} required className="glow-input w-full rounded-lg px-3 py-2 mt-1" placeholder="Drop me a message, not a virus ✉️" />
            </div>
            <button className="btn-glow soft-gradient text-black/90 dark:text-white rounded-full px-5 py-2">Transmit</button>
          </motion.form>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
            <p className="text-[var(--muted)] text-sm">Reach me on</p>
            <div className="mt-4 flex gap-3">
              <a className="btn-glow glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-[1.03] transition-transform" href="https://github.com/Dhurgesh-mj">
                <FiGithub /> Github
              </a>
              <a className="btn-glow glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-[1.03] transition-transform" href="https://www.linkedin.com/in/dhurgesh-mj/">
                <FiLinkedin /> LinkedIn
              </a>
              <a className="btn-glow glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-[1.03] transition-transform" href="#">
                <FiTwitter /> Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


