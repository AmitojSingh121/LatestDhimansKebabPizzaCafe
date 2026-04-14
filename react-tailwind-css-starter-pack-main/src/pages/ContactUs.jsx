import { t } from "i18next";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";


function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="w-12 h-px bg-[#c9a84c]/40" />
      <span className="text-[#c9a84c] text-xs">✦</span>
      <div className="w-12 h-px bg-[#c9a84c]/40" />
    </div>
  );
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const {t} = useTranslation();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSending(true);

    // WhatsApp mein message bhejo
    const ownerNumber = "+351920097401";
    let message = `📩 *New Contact Message — Dhiman's*\n\n`;
    message += `👤 Name: ${form.name}\n`;
    message += `📧 Email: ${form.email}\n`;
    message += `📞 Phone: ${form.phone || "Not provided"}\n\n`;
    message += `💬 Message:\n${form.message}`;

    window.open(`https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`, "_blank");

    toast.success("Message sent via WhatsApp! ✦");
    setForm({ name: "", email: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f5f0e8] pt-[72px]">

      <ToastContainer theme="dark" position="bottom-right" autoClose={3000} />

      {/* ── Hero Header ── */}
      <div className="relative border-b border-[#c9a84c]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)" }} />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />
        <div className="relative z-10 text-center py-16 px-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-3">{t("GetInTouch")}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] leading-none"
            style={{ fontFamily: "'Georgia', serif" }}>
            {t("GetInTouch")}
          </h1>
          <GoldDivider />
          <p className="text-[#f5f0e8]/30 text-xs tracking-[3px] uppercase mt-4">
            {t("LoveToHear")}
          </p>
        </div>
      </div>

      {/* ── Info Cards ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-4">
        {[
          {
            icon: "📍",
            title: "Address",
            lines: ["Rua do Rosmaninho Lote esq,", "2135-083 Samora Correia,", "Portugal"],
          },
          {
            icon: "📞",
            title: "Phone",
            lines: ["+351 920 097 401"],
          },
          {
            icon: "🕐",
            title: "Opening Hours",
            lines: ["Mon–Sat: 11:00AM – 15:00PM , 18:00PM - 22.30PM","Tuesday: Closed" ,"Sun: 12:00 PM – 15:00 PM , 18:00PM - 22:30PM"],
          },
        ].map((card) => (
          <div key={card.title}
            className="border border-[#2a2a2a] hover:border-[#c9a84c]/30 p-6 transition-all duration-300 group text-center">
            <span className="text-3xl">{card.icon}</span>
            <p className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] mt-3 mb-2">{card.title}</p>
            {card.lines.map((line, i) => (
              <p key={i} className="text-[#f5f0e8]/50 text-xs leading-relaxed">{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Form + Map ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-20 grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div>
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">{t("SendaMessage")}</p>
          <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Georgia', serif" }}>
            {t("PleaseContactUs")}<br />
          </h2>
          <GoldDivider />

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8] text-sm px-4 py-3 outline-none placeholder-[#f5f0e8]/20 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8] text-sm px-4 py-3 outline-none placeholder-[#f5f0e8]/20 transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8] text-sm px-4 py-3 outline-none placeholder-[#f5f0e8]/20 transition-colors"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write Message *"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8] text-sm px-4 py-3 outline-none placeholder-[#f5f0e8]/20 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">{t("FindUs")}</p>
          <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Georgia', serif" }}>
            {t("OurLocation")}
          </h2>
          <GoldDivider />

          <div className="mt-4 border border-[#2a2a2a] overflow-hidden flex-1 min-h-[350px]">
            <iframe
              title="Dhiman's Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.1363655286714!2d-8.880576126931478!3d38.92086054532394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1921a9af8f5dab%3A0x8e3fe70c2e4b2158!2sDhiman&#39;s%20kebab%20e%20pizza%20caf%C3%A9!5e0!3m2!1sen!2sus!4v1774085953907!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Direct link */}
          <a
            href="https://www.google.com/maps/place/Dhiman's+kebab+e+pizza+caf%C3%A9/@38.9208605,-8.8805761,17z"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-center border border-[#c9a84c]/30 hover:border-[#c9a84c] text-[#c9a84c] px-6 py-3 text-xs tracking-[2px] uppercase transition-all duration-300 hover:bg-[#c9a84c]/10"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="border-t border-[#c9a84c]/10 py-16 text-center px-6">
        <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">{t("FollowUs")}</p>
        <h2 className="text-2xl mb-4" style={{ fontFamily: "'Georgia', serif" }}>{t("StayConnected")}</h2>
        <GoldDivider />
        <div className="flex gap-4 justify-center mt-6">
          <a href="https://www.facebook.com/p/Dhimans-kebab-pizza-cafe-100063674913679/"
            target="_blank" rel="noreferrer"
            className="px-8 py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
            Facebook
          </a>
          <a href="https://www.instagram.com/dhimanspizza.pt/"
            target="_blank" rel="noreferrer"
            className="px-8 py-3 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
            Instagram
          </a>
        </div>
      </div>

    </div>
  );
}