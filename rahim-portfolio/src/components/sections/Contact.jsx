import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Let's Build Something <span className="neon-text">Great</span></>}
          subtitle="Have a project in mind? Drop me a message — I usually reply within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shrink-0">
                <FiMail className="text-neon" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <a href="mailto:rahimjameel15@gmail.com" className="hover:text-neon transition">
                  rahimjameel15@gmail.com
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shrink-0">
                <FiPhone className="text-neon" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Phone</p>
                <p>+92 33231353 94</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shrink-0">
                <FiMapPin className="text-neon" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Location</p>
                <p>Pakistan</p>
              </div>
            </div>
          </div>

          {/* Form — Netlify Forms */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="lg:col-span-3 glass rounded-2xl p-7 border border-white/10 space-y-5"
          >
            {/* Required for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/60 border border-white/10 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/60 border border-white/10 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry"
                className="w-full px-4 py-3 rounded-xl bg-neutral-950/60 border border-white/10 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-950/60 border border-white/10 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-neutral-950 bg-gradient-to-r from-neon to-emerald-500 hover:shadow-[0_0_35px_rgba(0,255,136,0.6)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}