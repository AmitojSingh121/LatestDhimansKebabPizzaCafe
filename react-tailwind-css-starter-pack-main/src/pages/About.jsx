import React, { useEffect, useRef, useState } from "react";
import DhimansLogoimg from "../assests/DhimansLogoimg.webp";
import { useTranslation } from "react-i18next";

// ── Gallery images – swap src for your real assets ──────────────────────────
import image1 from "../assests/image1.jpg";
const GALLERY = [
  { src: image1, caption: "Fresh Kebabs off the grill" },
  { src: image1, caption: "Wood-fired Pizza Margherita" },
  { src: image1, caption: "Our cozy dining space" },
  { src: image1, caption: "Handcrafted Doner rolls" },
  { src: image1, caption: "A feast for the senses" },
  { src: image1, caption: "The team at work" },
];
const STATS = [
  { value: "18+", label: "Anos de Sabor" },
  { value: "50+", label: "Menu Unid" },
  { value: "10K+", label: "Convidados felizes" },
  { value: "★ 4.8", label: "Média Avaliação" },
];


// ── Tiny hook: animates number when element enters viewport ──────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Decorative divider ───────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="w-12 h-px bg-[#c9a84c]/40" />
      <span className="text-[#c9a84c] text-xs">✦</span>
      <div className="w-12 h-px bg-[#c9a84c]/40" />
    </div>
  );
}

export default function AboutUs() {
  const [heroRef, heroVisible] = useInView(0.1);
  const [storyRef, storyVisible] = useInView(0.15);
  const [statsRef, statsVisible] = useInView(0.2);
  const [galleryRef, galleryVisible] = useInView(0.1);
  const [lightbox, setLightbox] = useState(null); // index | null
  const {t} = useTranslation();

  // close lightbox on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-[#f5f0e8]">

      {/* ════════════════ HERO ════════════════ */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden"
      >
        {/* background texture */}
        <div className="absolute inset-0 bg-[#0d0d0d]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 40px,#c9a84c22 40px,#c9a84c22 41px), repeating-linear-gradient(90deg,transparent,transparent 40px,#c9a84c22 40px,#c9a84c22 41px)",
            }}
          />
        </div>

        {/* radial gold glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
            }}
          />
        </div>

        {/* content */}
        <div
          className="relative z-10 text-center px-6"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <p
            className="text-[#c9a84c] text-[10px] tracking-[5px] uppercase mb-4"
            style={{ transitionDelay: "0.1s" }}
          >
            {t("Madewithheart")}
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-none"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              background: "linear-gradient(135deg, #f5f0e8 30%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("AboutUs")}
          </h1>
          <GoldDivider />
          <p className="text-[#f5f0e8]/40 text-sm tracking-[2px] uppercase mt-4">
            Dhiman's Kebab &amp; Pizza Cafe — Lisboa, Portugal
          </p>
        </div>
      </section>

      {/* ════════════════ OUR STORY ════════════════ */}
      <section
        ref={storyRef}
        className="max-w-5xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Logo / brand block */}
        <div
          className="flex flex-col items-center md:items-start gap-6"
          style={{
            opacity: storyVisible ? 1 : 0,
            transform: storyVisible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-20"
              style={{ background: "#c9a84c" }}
            />
            <img
              src={DhimansLogoimg}
              alt="Dhiman's Logo"
              className="relative w-44 h-44 rounded-full ring-2 ring-[#c9a84c]/30 object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p
              className="text-3xl font-bold"
              style={{ fontFamily: "'Georgia', serif", color: "#f5f0e8" }}
            >
              Dhiman's
            </p>
            <p className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] mt-1">
              Kebab &amp; Pizza Cafe
            </p>
          </div>

          {/* decorative quote */}
          <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4 text-[#f5f0e8]/40 text-xs italic leading-relaxed max-w-xs">
           {t("BlockQuote")}
          </blockquote>
        </div>

        {/* Story text */}
        <div
          className="space-y-6"
          style={{
            opacity: storyVisible ? 1 : 0,
            transform: storyVisible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
          }}
        >
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c]">
            {t("OurStory")}
          </p>
          <h2
            className="text-3xl md:text-4xl leading-snug"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("Abuiltkitchen")}{" "}
            <span className="text-[#c9a84c]">{t("Passion")} &amp;{t("Traditional")}</span>
          </h2>
          <GoldDivider />
          <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">
            Dhiman's Kebab &amp; Pizza Cafe {t("Desc1")}
          </p>
          <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">
          {t("Desc2")}
          </p>
          <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">
          {t("Desc3")}
          </p>

          {/* CTA */}
          <a
            href="/menu"
            className="inline-block mt-2 px-8 py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300"
          >
            {t("Explore")}
          </a>
        </div>
      </section>

      {/* ════════════════ STATS ════════════════ */}
      <section
        ref={statsRef}
        className="border-y border-[#c9a84c]/10 py-16 px-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
              }}
            >
              <p
                className="text-4xl font-bold text-[#c9a84c]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {s.value}
              </p>
              <p className="text-[#f5f0e8]/35 text-[10px] tracking-[2px] uppercase mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ VALUES ════════════════ */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">
            {t("Whatwestandfor")}
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("Ourvalues")}
          </h2>
          <GoldDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔥",
              title: "Sabor autêntico",
              desc: "Cada mistura de especiarias e receita de massa remonta às raízes tradicionais. Nunca abrimos mão da autenticidade.",
            },
            {
              icon: "🌿",
              title: "Ingredientes Frescos",
              desc: "Priorizamos fornecedores locais sempre que possível, escolhendo produtos frescos e carnes de qualidade para cada pedido.",
            },
            {
              icon: "🤝",
              title: "Hospitalidade calorosa",
              desc: "Aqui, você é da família. Desde o momento em que entra, garantimos que se sinta acolhido e bem cuidado.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="border border-[#2a2a2a] hover:border-[#c9a84c]/30 p-8 transition-all duration-300 group"
            >
              <span className="text-3xl">{v.icon}</span>
              <h3
                className="text-[#f5f0e8] text-lg mt-4 mb-2 group-hover:text-[#c9a84c] transition-colors"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {v.title}
              </h3>
              <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ GALLERY ════════════════ */}
      <section
        ref={galleryRef}
        className="px-6 md:px-12 py-20 border-t border-[#c9a84c]/10"
      >
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">
            {t("Glimpse")}
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("Gallery")}
          </h2>
          <GoldDivider />
          <p className="text-[#f5f0e8]/30 text-xs mt-3">
          {t("PhotoLarger")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                opacity: galleryVisible ? 1 : 0,
                transform: galleryVisible ? "scale(1)" : "scale(0.95)",
                transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
                aspectRatio: i === 0 || i === 3 ? "4/3" : "1/1",
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-75"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-[#f5f0e8] text-xs tracking-wide">{img.caption}</p>
              </div>
              {/* gold corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/70 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ LIGHTBOX ════════════════ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-[#f5f0e8]/50 hover:text-[#c9a84c] text-sm tracking-[2px] uppercase transition-colors"
            >
              Close ✕
            </button>
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].caption}
              className="w-full rounded-sm ring-1 ring-[#c9a84c]/20"
            />
            <p className="text-center text-[#f5f0e8]/50 text-xs mt-3 tracking-wide">
              {GALLERY[lightbox].caption}
            </p>
            {/* prev / next */}
            <div className="absolute inset-y-0 -left-12 flex items-center">
              <button
                onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)}
                className="text-[#c9a84c] text-2xl hover:scale-125 transition-transform"
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 -right-12 flex items-center">
              <button
                onClick={() => setLightbox((lightbox + 1) % GALLERY.length)}
                className="text-[#c9a84c] text-2xl hover:scale-125 transition-transform"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VISIT US CTA */}
      <section className="py-24 px-6 text-center border-t border-[#c9a84c]/10">
        <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-4">
            {t("ComeFindUs")}
        </p>
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {t("Wedlovetoseeyou")}
        </h2>
        <GoldDivider />
        <p className="text-[#f5f0e8]/40 text-sm mt-4 mb-8 max-w-md mx-auto leading-relaxed">
          Rua do Rosmaninho Lote esq, 2135-083 Samora Correia, Portugal
          <br />
          <span className="text-[#f5f0e8]/60">+351 920 097 401</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/reservation"
            className="px-8 py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300"
          >
            {t("Reserveatable")}
          </a>
          <a
            href="/menu"
            className="px-8 py-3 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-[#c9a84c] text-xs font-bold tracking-[2px] uppercase transition-all duration-300"
          >
            {t("ViewMenu")}
          </a>
        </div>
      </section>
    </div>
  );
}