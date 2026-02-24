import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "CraftNetwork",
    desc: "Крупная Minecraft-сеть с кастомными плагинами, системой экономики и 500+ активных игроков.",
    tags: ["Minecraft", "Java", "Plugins"],
    emoji: "⛏️",
  },
  {
    title: "PyBot Dashboard",
    desc: "Веб-панель управления для Discord-ботов с real-time аналитикой и модерацией.",
    tags: ["Python", "JS", "WebSocket"],
    emoji: "🤖",
  },
  {
    title: "ServerShield",
    desc: "Система анти-чита и защиты серверов с ML-детектором подозрительных действий.",
    tags: ["Python", "ML", "Minecraft"],
    emoji: "🛡️",
  },
  {
    title: "DevPortal",
    desc: "Портал для разработчиков с документацией, API-keys и статистикой использования.",
    tags: ["HTML", "CSS", "JS", "Python"],
    emoji: "🚀",
  },
];

const skills = [
  { name: "Python", level: 90, icon: "🐍" },
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "Minecraft Server Dev", level: 97, icon: "⛏️" },
];

const navLinks = [
  { label: "О себе", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Реклама", href: "#ads" },
];

export default function Index() {
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setSubtitleVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="text-sm font-medium tracking-widest gradient-text-animated">
            g3mast
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-light text-white/60 hover:text-white transition-colors duration-300 tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-xs font-light text-white/70 hover:text-white tracking-widest uppercase transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden"
      >
        {/* bg decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-white/[0.02] blur-2xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-white/[0.015] blur-2xl animate-float delay-300" />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Ник */}
          <div className="animate-fade-in-up">
            <h1
              className="gradient-text-animated font-semibold tracking-tight leading-none"
              style={{ fontSize: "clamp(3rem, 12vw, 9rem)", letterSpacing: "-0.04em" }}
            >
              g3mast
            </h1>
          </div>

          {/* Subtitle с появлением */}
          <div
            className={`mt-6 transition-all duration-1000 ${
              subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p
              className="text-white/50 font-light tracking-widest uppercase"
              style={{ fontSize: "clamp(0.6rem, 2.5vw, 0.85rem)", letterSpacing: "0.25em" }}
            >
              Full-Stack Developer &amp; Minecraft Server Specialist
            </p>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 animate-float opacity-30">
            <Icon name="ChevronDown" size={24} className="mx-auto text-white" />
          </div>
        </div>
      </section>

      {/* О РАЗРАБОТЧИКЕ */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <p className="text-xs text-white/30 tracking-widest uppercase mb-3">01 — О себе</p>
            <h2 className="section-title gradient-text">О разработчике</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8 animate-fade-in-up delay-200">
              <p className="text-white/70 font-light leading-relaxed text-sm">
                Привет, я <span className="text-white font-medium">g3mast</span> — разработчик
                с опытом в создании веб-приложений и Minecraft-серверов. Занимаюсь
                разработкой уже более 5 лет, за это время реализовал 25+ проектов
                разной сложности.
              </p>
              <p className="text-white/50 font-light leading-relaxed text-sm mt-4">
                Специализируюсь на создании кастомных плагинов, систем экономики,
                античит-решений и полноценных веб-порталов для игровых серверов.
                Каждый проект — это вызов, который я принимаю с удовольствием.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "5+", label: "Лет опыта", icon: "Clock" },
                { value: "25+", label: "Проектов", icon: "Folder" },
                { value: "100%", label: "Знание своего дела", icon: "Star" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`glass-card p-6 text-center animate-fade-in-up`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="mb-3 flex justify-center">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                      <Icon name={stat.icon} fallback="Star" size={18} className="text-white/60" />
                    </div>
                  </div>
                  <div className="font-medium text-2xl gradient-text mb-1">{stat.value}</div>
                  <div className="text-white/40 font-light text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* НАВЫКИ */}
      <section id="skills" className="py-28 px-6" ref={skillsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-widest uppercase mb-3">02 — Технологии</p>
            <h2 className="section-title gradient-text">Навыки</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="glass-card p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-sm text-white/90">{skill.name}</span>
                  </div>
                  <span className="text-white/40 font-light text-xs">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-[3px] rounded-full bg-white/8 overflow-hidden">
                  <div
                    className="skill-bar-fill"
                    style={{ width: skillsVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОЕКТЫ */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-widest uppercase mb-3">03 — Портфолио</p>
            <h2 className="section-title gradient-text">Мои проекты</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="glass-card p-7 group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Banner */}
                <div className="w-full h-32 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)`,
                    border: "1px solid rgba(255,255,255,0.06)"
                  }}
                >
                  <span className="text-5xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-110 transition-transform">
                    {project.emoji}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                </div>

                <h3 className="font-medium text-base text-white mb-2">{project.title}</h3>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-5">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-light text-white/60 glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* РЕКЛАМА */}
      <section id="ads" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-widest uppercase mb-3">04 — Сотрудничество</p>
            <h2 className="section-title gradient-text">Реклама</h2>
          </div>

          <div className="glass-card p-0 overflow-hidden">
            {/* Banner */}
            <div
              className="w-full h-48 md:h-64 relative flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)",
              }}
            >
              {/* Grid decoration */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 animate-float">📢</div>
                <p className="text-white/30 font-light text-xs tracking-widest uppercase">Ваш баннер здесь</p>
              </div>
            </div>

            {/* Ad content */}
            <div className="p-8 md:p-12">
              <div className="max-w-2xl">
                <h3 className="font-medium text-xl text-white mb-4">
                  Хочешь разместить рекламу?
                </h3>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
                  Готов сотрудничать с проектами в сфере Minecraft-серверов, разработки
                  и IT-индустрии. Аудитория — разработчики, владельцы серверов и
                  IT-энтузиасты. Размещение баннеров, обзоров и партнёрских материалов.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Аудитория", value: "Dev community" },
                    { label: "Формат", value: "Баннер / Обзор" },
                    { label: "Связь", value: "По запросу" },
                  ].map((item) => (
                    <div key={item.label} className="glass rounded-xl p-4">
                      <div className="text-white/30 font-light text-xs mb-1 tracking-wide">{item.label}</div>
                      <div className="text-white/80 font-medium text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>

                <button className="glass px-7 py-3 rounded-full text-xs font-medium text-white/80 hover:text-white hover:border-white/30 transition-all duration-300 hover:bg-white/10 tracking-widest uppercase">
                  Связаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="gradient-text-animated font-medium text-sm tracking-widest">g3mast</p>
          <p className="text-white/20 font-light text-xs tracking-wide">
            Full-Stack Developer & Minecraft Server Specialist
          </p>
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/20 hover:text-white/60 text-xs font-light transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}