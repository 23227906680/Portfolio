import React, { useState, useRef } from 'react';
import { Menu, X, Mail, Phone, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const sectionRefs = {
    home: useRef(null),
    profil: useRef(null),
    competences: useRef(null),
    experiences: useRef(null),
    formation: useRef(null),
    projets: useRef(null),
    certifications: useRef(null),
    contact: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const sections = ['profil', 'competences', 'experiences', 'formation', 'projets', 'certifications', 'contact'];

  return (
    <div className="bg-black text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 bg-black border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between p-4">
          <button onClick={() => scrollToSection('home')} className="font-bold">
            A.Zerati
          </button>

          <nav className="hidden md:flex gap-6">
            {sections.map(section => (
              <button key={section} onClick={() => scrollToSection(section)}>
                {section}
              </button>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section ref={sectionRefs.home} className="min-h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold">
              ZERATI <span className="text-lime-400">SAAD</span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Élève-ingénieur en dernière année à Centrale Casablanca, je recherche une alternance en Supply Chain. Passionné par la gestion des flux, l’optimisation des stocks et l’analyse de données.
            </p>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 px-6 py-3 bg-lime-400 text-black rounded"
            >
              Me contacter
            </button>
          </div>
        </section>

        {/* PROFIL */}
        <section ref={sectionRefs.profil} className="p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Profil</h2>
          <p>
            Étudiant en dernière année à Centrale Casablanca, après un parcours en CPGE (PCSI/PSI). Passionné par la gestion des flux et l’optimisation des processus.
          </p>
        </section>

        {/* COMPETENCES */}
        <section ref={sectionRefs.competences} className="p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Compétences</h2>
          <ul className="space-y-2">
            <li>Gestion des flux</li>
            <li>Analyse de données</li>
            <li>Python / SQL</li>
            <li>Power BI / Excel</li>
            <li>Docker / Linux</li>
          </ul>
        </section>

        {/* EXPERIENCES */}
        <section ref={sectionRefs.experiences} className="p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Expériences</h2>

          <div className="mb-6">
            <h3 className="font-bold">Creative Channel — Paris</h3>
            <p>R&D (2026 - Présent)</p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold">CDG — Rabat</h3>
            <p>Python (2025)</p>
          </div>

          <div>
            <h3 className="font-bold">OCP — Khouribga</h3>
            <p>Maintenance (2024)</p>
          </div>
        </section>

        {/* FORMATION */}
        <section ref={sectionRefs.formation} className="p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Formation</h2>
          <p>Cycle ingénieur — Centrale Casablanca (2023–2026)</p>
          <p>CPGE — PCSI/PSI (2021–2023)</p>
        </section>

        {/* PROJETS */}
        <section ref={sectionRefs.projets} className="p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projets</h2>
          <p>Docker / DevOps</p>
          <p>Computer Vision (YOLO)</p>
        </section>

        {/* CONTACT */}
        <section ref={sectionRefs.contact} className="p-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <div className="space-y-4">
            <a href="mailto:saad.zerati@centrale-casablanca.ma">
              <Mail /> saad.zerati@centrale-casablanca.ma
            </a>

            <br />

            <a href="tel:+33745754127">
              <Phone /> +33 7 45 75 41 27
            </a>
          </div>
        </section>

      </main>

      <footer className="text-center p-6 text-gray-500">
        © 2026 Zerati Saad
      </footer>

    </div>
  );
}