"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Logo = () => (
  <Image
    src="/laboracin-logo.png"
    alt="Laboracin Logo"
    width={160}
    height={45}
    priority
  />
);

const LogoTextFooter = ({ className }: { className?: string }) => (
  <h1 className={`text-2xl font-bold ${className}`}>
    Labor<span className="text-[var(--primary-color)]">acin</span>
  </h1>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.48 1.34 5l-1.4 5.13 5.26-1.38c1.45.81 3.09 1.25 4.71 1.25h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.05 20.15h-.01c-1.48 0-2.95-.4-4.24-1.18l-.3-.18-3.13.82.84-3.05-.2-.32c-.86-1.35-1.31-2.91-1.31-4.52 0-4.44 3.6-8.04 8.04-8.04s8.04 3.6 8.04 8.04-3.6 8.04-8.04 8.04zm4.49-5.92c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.55.12c-.16.24-.63.8-.78.96-.14.16-.29.18-.54.06s-1.03-.38-1.96-1.21c-.72-.65-1.21-1.45-1.35-1.7s-.03-.24.09-.36c.11-.11.24-.29.36-.43s.16-.24.24-.39.12-.29.06-.54c-.06-.24-.55-1.32-.76-1.81s-.4-.41-.55-.41h-.47c-.16 0-.42.06-.63.29s-.8.78-.8 1.9c0 1.12.82 2.2 1.07 2.46s1.63 2.5 3.96 3.5h.01c.54.21 1.03.34 1.4.43.54.12 1.03.11 1.41-.06.43-.19 1.26-1.03 1.45-1.45s.14-.39.09-.54l-.23-.09z"></path>
  </svg>
);

const TopBar = () => (
  <div className="bg-[#9D0A0A] text-white">
    <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <PhoneIcon />
        <span>Telefone: (99) 3524-5325</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:opacity-80 transition-opacity"
        >
          <FacebookIcon />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:opacity-80 transition-opacity"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://wa.me/5599991984868"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
          className="hover:opacity-80 transition-opacity"
        >
          <WhatsappIcon />
        </a>
      </div>
    </div>
  </div>
);

const DnaIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2a5 5 0 0 0-5 5 3 3 0 0 1-6 0 5 5 0 0 0-5 5v3a5 5 0 0 0 5 5 3 3 0 0 1 6 0 5 5 0 0 0 5 5" />
    <path d="M9 2a5 5 0 0 1 5 5 3 3 0 0 0 6 0 5 5 0 0 1 5 5v3a5 5 0 0 1-5 5 3 3 0 0 0-6 0 5 5 0 0 1-5 5" />
  </svg>
);
const BeakerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 3h15" />
    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
    <path d="M6 14h12" />
  </svg>
);
const HomeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ClipboardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);
const VirusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 2V4" />
    <path d="M12 20V22" />
    <path d="M4.92999 4.92999L6.33999 6.33999" />
    <path d="M17.66 17.66L19.07 19.07" />
    <path d="M2 12H4" />
    <path d="M20 12H22" />
    <path d="M6.33999 17.66L4.92999 19.07" />
    <path d="M19.07 4.92999L17.66 6.33999" />
  </svg>
);
const MicroscopeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 11h2" />
    <path d="M14 11h2" />
    <path d="M18 5H6" />
    <path d="m11 5-2-3-2 3" />
    <path d="m14 14-1.5-2.5" />
    <path d="M9 14 7.5 11.5" />
  </svg>
);

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const servicesData = [
    { title: "Teste de Paternidade", icon: <DnaIcon /> },
    { title: "Exame Toxicológico", icon: <BeakerIcon /> },
    { title: "Coleta Domiciliar", icon: <HomeIcon /> },
    { title: "Exames de Rotina", icon: <ClipboardIcon /> },
    { title: "Testes de Covid-19", icon: <VirusIcon /> },
    { title: "Biologia Molecular", icon: <MicroscopeIcon /> },
  ];

  useEffect(() => {
    let sr: any;
    async function initScrollReveal() {
      if (typeof window !== "undefined") {
        const ScrollRevealModule = await import("scrollreveal");
        sr = ScrollRevealModule.default({
          origin: "top",
          distance: "30px",
          duration: 700,
          reset: false,
        });
        sr.reveal(
          "#home, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contact, #contact header, #contact .content"
        );
      }
    }
    initScrollReveal();

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      const sections = ["home", "services", "about", "contact"];
      const checkpoint = window.pageYOffset + window.innerHeight / 2;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (checkpoint >= top && checkpoint < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sr) sr.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const menuLinkClasses = (id: string) =>
    `menu-link text-base transition-colors duration-300 ${
      activeSection === id
        ? "active font-bold text-[var(--primary-color)]"
        : "text-[var(--headline-color)]"
    } hover:text-[var(--primary-color)]`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <nav
          id="navigation"
          className="h-[var(--nav-height)] bg-white/80 backdrop-blur-lg shadow-sm"
        >
          <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
            <a href="#home" className="logo z-50">
              <Logo />
            </a>
            <ul className="hidden lg:flex gap-8">
              <li>
                <a href="#home" className={menuLinkClasses("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className={menuLinkClasses("services")}>
                  Exames
                </a>
              </li>
              <li>
                <a href="#about" className={menuLinkClasses("about")}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className={menuLinkClasses("contact")}>
                  Contato
                </a>
              </li>
              <li>
                <a href="#novidades" className={menuLinkClasses("novidades")}>
                  Novidades
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="hidden lg:flex items-center justify-center py-2 px-6 border border-[var(--primary-color)] bg-transparent text-[var(--primary-color)] rounded-full font-bold uppercase text-sm transition-all duration-300 transform hover:scale-100 hover:bg-[var(--primary-color)] hover:text-white"
            >
              Resultados Online
            </a>
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-center pt-[var(--nav-height)] mt-8">
          <ul className="flex flex-col gap-12 mt-16 text-2xl font-bold">
            <li>
              <a
                onClick={closeMenu}
                href="#home"
                className="text-[var(--headline-color)]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                href="#services"
                className="text-[var(--headline-color)]"
              >
                Exames
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                href="#about"
                className="text-[var(--headline-color)]"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                href="#contact"
                className="text-[var(--headline-color)]"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                href="#novidades"
                className="text-[var(--headline-color)]"
              >
                Novidades
              </a>
            </li>
          </ul>
          <a
            onClick={closeMenu}
            href="#"
            className="inline-block mt-12 mb-20 py-4 px-8 bg-[var(--primary-color)] text-white text-lg font-bold uppercase rounded-full"
          >
            Resultados Online
          </a>
        </div>
      </div>

      <main className="text-center overflow-x-hidden">
        <section
          id="home"
          className="relative min-h-screen scroll-mt-[calc(var(--nav-height)+2.5rem)]"
        >
          <Image
            src="/laboracin-hero.jpg"
            alt="Laboratório Laboracin"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[var(--primary-color)] opacity-20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-xl lg:max-w-5xl mx-auto px-6 w-full h-full flex flex-col pt-[calc(var(--nav-height)+2.5rem)]">
            <div className="flex-grow flex flex-col justify-center items-center text-center text-white pt-12">
              <header className="mb-8 md:mb-12">
                <h4 className="text-1x1 text-[var(--primary-color)] uppercase font-bold tracking-widest mb-4">
                  Desde 1984 em Imperatriz
                </h4>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-bold">
                  Tradição e tecnologia que juntas garantem os melhores
                  resultados!
                </h1>
              </header>

              <p className="text-lg leading-relaxed mb-10 hidden md:block">
                Em funcionamento desde 1984, o laboratório de exames Laboracin,
                utiliza os melhores equipamentos e acessórios, garantindo alta
                precisão e qualidade a seus resultados.
              </p>

              <a
                className="flex items-center justify-center gap-4 bg-[var(--primary-color)] text-white uppercase font-bold py-4 px-8 rounded-full w-fit mx-auto hover:bg-[var(--primary-color-dark)] transition-all transform hover:scale-100 mb-12"
                href="https://wa.me/5599991984868"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z" />
                </svg>
                Agende sua Coleta
              </a>
            </div>

            <div className="stats col-span-full bg-white w-full py-8 border border-[var(--brand-light-color)] rounded-lg flex flex-col justify-center gap-6 lg:flex-row lg:gap-0 lg:py-16 shadow-md mb-16 lg:mb-12">
              <div className="lg:flex-1">
                <h3 className="text-4xl md:text-5xl text-[var(--headline-color)] leading-tight mb-1 font-bold">
                  +35
                </h3>
                <p className="text-[var(--primary-color)] leading-normal">
                  Anos de experiência
                </p>
              </div>

              <div className="lg:flex-1 lg:border-l lg:border-[var(--brand-light-color-2)]">
                <h3 className="text-4xl md:text-5xl text-[var(--headline-color)] leading-tight mb-1 font-bold">
                  ISO 9001
                </h3>
                <p className="text-[var(--primary-color)] leading-normal">
                  Selo de qualidade
                </p>
              </div>

              <div className="lg:flex-1 lg:border-l lg:border-[var(--brand-light-color-2)]">
                <h3 className="text-4xl md:text-5xl text-[var(--headline-color)] leading-tight mb-1 font-bold">
                  +1.000
                </h3>
                <p className="text-[var(--primary-color)] leading-normal">
                  Tipos de exames
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-20 md:py-24 lg:py-32 scroll-mt-[calc(var(--nav-height)+2.5rem)]"
        >
          <div className="max-w-xl lg:max-w-6xl mx-auto px-6">
            <header className="mb-16">
              <h4 className="text-sm text-[var(--primary-color)] uppercase font-bold tracking-widest mb-4">
                Nossos Serviços
              </h4>
              <h2 className="text-3xl lg:text-4xl text-[var(--headline-color)] leading-tight font-bold lg:max-w-2xl lg:mx-auto">
                Soluções completas para sua saúde
              </h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.title}
                  className="card bg-white p-6 border border-gray-100 rounded-lg text-left shadow-sm transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-light-color)] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl text-[var(--headline-color)] font-bold">
                    {service.title}
                  </h3>
                  <p>
                    Realizamos exames com a máxima precisão, seguindo rigorosos
                    padrões de qualidade.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-20 md:py-24 lg:py-32 bg-[var(--brand-light-color)] text-left scroll-mt-[calc(var(--nav-height)+2.5rem)]"
        >
          <div className="max-w-xl lg:max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24 items-center">
            <div className="lg:order-last">
              <header>
                <h4 className="text-sm text-[var(--primary-color)] uppercase font-bold tracking-widest mb-4">
                  Nossa História
                </h4>
                <h2 className="text-3xl lg:text-4xl text-[var(--headline-color)] leading-tight mb-6 font-bold">
                  Conheça o Laboracin. Especialistas em análises clínicas!
                </h2>
              </header>
              <p className="leading-relaxed">
                Se desde 1984 até hoje merecemos o respeito e a confiança de
                médicos e clientes, é porque fazemos tudo com muito amor e
                conferimos laudos com qualidade e precisão.
                <br />
                <br />
                Classificado como um dos melhores laboratórios de Imperatriz, o
                Laboracin, tem como visão tornar-se referência regional, porque
                sua equipe multiprofissional tem foco nessa meta e honrará a
                missão de atender sempre de forma humanizada e carinhosa, porque
                aqui buscamos a mudança que queremos para o mundo!
              </p>
            </div>
            <div className="mt-10 md:mt-0 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/laboracin-sobre.jpg"
                alt="Equipe do laboratório Laboracin"
                width={480}
                height={414}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-[var(--primary-color)] opacity-20 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 md:py-24 lg:py-32 text-left scroll-mt-[calc(var(--nav-height)+2.5rem)]"
        >
          <div className="max-w-xl lg:max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-x-16 items-center">
            <div>
              <header>
                <h2 className="text-3xl lg:text-4xl text-[var(--headline-color)] leading-tight mb-8 font-bold">
                  Onde nós estamos e como falar com a gente
                </h2>
              </header>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-1"
                  >
                    <path
                      d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
                      stroke="var(--primary-color)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V18"
                      stroke="var(--primary-color)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 6V22"
                      stroke="var(--primary-color)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>R. Luís Domingues, 1521 - Centro, Imperatriz - MA</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="var(--primary-color)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>(99) 3524-5325</span>
                </li>
              </ul>
              <a
                className="flex items-center justify-center gap-4 bg-[var(--primary-color)] text-white uppercase font-bold py-4 px-8 rounded-full w-fit hover:bg-[var(--primary-color-dark)] transition-all transform hover:scale-100"
                href="https://wa.me/5599991984868"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z" />
                </svg>
                Agende sua coleta
              </a>
            </div>
            <div className="mt-10 md:mt-0 h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.8690321209733!2d-47.47957368523315!3d-5.52865999585149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c5505080f55555%3A0x8a383d7807865261!2sR.%20Lu%C3%ADs%20Domingues%2C%201521%20-%20Centro%2C%20Imperatriz%20-%20MA%2C%2065900-500!5e0!3m2!1spt-BR!2sbr!4v1667845348873!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--headline-color)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <LogoTextFooter className="text-white" />
            <p className="text-gray-400 mt-4 text-sm">
              ©2024 Laboracin. <br />
              Todos os direitos reservados.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Menu de navegação</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="hover:text-white transition-colors">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#services">Exames</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#about">Sobre</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#contact">Contato</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#novidades">Novidades</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Localização e contato</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>R. Luís Domingues, 1521 - Centro</li>
              <li>Imperatriz - MA</li>
              <li>(99) 3524-5325</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Horário de funcionamento</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>Seg–Sex: 07:00 às 18:00</li>
              <li>Sábado: 07:00 às 12:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        aria-label="Voltar ao topo"
        className={`fixed bottom-4 right-6 transition-all duration-300 transform ${
          showBackToTop
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="20"
            className="fill-[var(--primary-color)]"
          />
          <path
            d="M20 27V13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 20L20 13L27 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}
