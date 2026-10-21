
import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Mail,
  Globe,
  Network,
  BrainCircuit,
  Activity,
  Code2,
  Cloud,
  Menu,
  X,
  Terminal,
} from 'lucide-react'


const content = {
  fr: {
    nav: ['À propos', 'Expérience', 'Compétences', 'Projets', 'Contact'],
    availability: 'Portfolio en construction',
    greeting: 'BONJOUR, JE SUIS',
    firstName: 'TILENGAR',
    lastName: 'Mbaihornom Lionel',
    role: 'Ingénieur en cybersécurité',
    description:
      "Passionné par la cybersécurité, les réseaux et l'intelligence artificielle. Je conçois et j'étudie des solutions visant à renforcer la sécurité des systèmes et des applications.",
    projectsBtn: 'Découvrir mes projets',
    contactBtn: 'Me contacter',
    aboutTitle: 'À propos de moi',
    aboutText:
      "Je développe progressivement mes compétences en sécurité informatique à travers des projets pratiques, des laboratoires techniques et des travaux de recherche. Mon objectif : contribuer à la conception de systèmes numériques plus sûrs et plus résilients.",
    skillsTitle: 'Domaines techniques',
    skillsSubtitle: 'Des connaissances que je développe par la pratique.',
    projectsTitle: 'Projets & explorations',
    projectsSubtitle:
      'Une sélection de domaines et de travaux que je souhaite mettre en valeur dans mon parcours.',
    items: [
      {
        title: 'Détection d’intrusions IoMT par IA',
        category: 'INTELLIGENCE ARTIFICIELLE',
        description:
          "Étude de méthodes de détection d'attaques sur les réseaux d'objets médicaux connectés, avec un intérêt particulier pour les attaques rares et la réduction des fausses alertes.",
        tags: ['Python', 'Machine Learning', 'IoMT'],
        icon: BrainCircuit,
      },
      {
        title: 'Sécurité réseau & pare-feu',
        category: 'SÉCURITÉ RÉSEAU',
        description:
          'Conception et étude d’architectures réseau sécurisées, de règles de filtrage et de mécanismes de segmentation.',
        tags: ['Réseaux', 'Firewall', 'VLAN', 'Fortnet', 'Postman'],
        icon: Network,
      },
      {
        title: 'Analyse SOC & OpenSearch',
        category: 'DÉTECTION & SUPERVISION',
        description:
          "Exploration de journaux de sécurité, création de visualisations et analyse d'indicateurs pour mieux comprendre l'activité réseau.",
        tags: ['SOC', 'OpenSearch', 'Logs', 'Wireshark'],
        icon: Activity,
      },
      {
        title: 'Développement web sécurisé',
        category: 'SÉCURITÉ APPLICATIVE',
        description:
          "Développement d'applications et étude des bonnes pratiques de sécurité pour protéger les données et les accès.",
        tags: ['Web', 'Sécurité', 'Développement'],
        icon: Code2,
      },
      {
        title: 'Cloud & sécurité des applications',
        category: 'CLOUD SECURITY',
        description:
          "Exploration de l'hébergement cloud, du contrôle d'accès et de la protection des données dans les applications.",
        tags: ['Cloud', 'IAM', 'Protection des données', 'Microsoft Azure'],
        icon: Cloud,
      },

      
      {
        title: 'Lo-mosso — Marketplace e-commerce',
        category: 'PROJET PERSONNEL',
        description:
          'Développement d’un prototype fonctionnel de marketplace. Le projet utilise PHP, MySQL avec PDO, JavaScript et des échanges REST/JSON. Postman est utilisé dans l’environnement de travail.',
        tags: ['PHP', 'CSS', 'JavaScript', 'MySQL', 'PDO', 'REST/JSON', 'Postman'],
        icon: Code2,
      },

      
{
  title: 'Morocco Smart Guide',
  category: 'PROJET ACADÉMIQUE · IA',
  description:
    "Assistant touristique intelligent pour le Maroc, développé en équipe. Le projet combine une recherche sémantique avec FAISS, un système RAG pour le chatbot bilingue et un moteur de génération d’itinéraires personnalisés selon le budget, les intérêts et la durée du séjour.",
  tags: [
    'Python',
    'FastAPI',
    'Streamlit',
    'FAISS',
    'RAG',
    'LangChain',
    'Hugging Face',
  ],
  icon: BrainCircuit,
},


    ],
    viewProfile: 'Voir mon profil',
    contactTitle: 'La cybersécurité n’est pas seulement un métier, c’est une passion.',
    contactText:
      "Vous souhaitez échanger autour de la cybersécurité, d'un projet ou d'une opportunité ? N'hésitez pas à me contacter.",
    emailBtn: 'Me contacter par e-mail',
    footer: 'Cybersécurité',
    backTop: 'Retour en haut',
  },
  en: {
    nav: ['About', 'Experience', 'Skills', 'Projects', 'Contact'],
    availability: 'Portfolio in progress',
    greeting: "HELLO, I'M",
    firstName: 'TILENGAR',
    lastName: 'Mbaihornom Lionel',
    role: 'Cybersecurity Engineering',
    description:
      'Passionate about cybersecurity, networking, and artificial intelligence. I explore solutions that help strengthen the security of systems and applications.',
    projectsBtn: 'Explore my projects',
    contactBtn: 'Get in touch',
    aboutTitle: 'About me',
    aboutText:
      'I am progressively developing my information security skills through hands-on projects, technical labs, and research. My goal is to contribute to building safer and more resilient digital systems.',
    skillsTitle: 'Technical interests',
    skillsSubtitle: 'Knowledge developed through hands-on practice.',
    projectsTitle: 'Projects & explorations',
    projectsSubtitle:
      'A selection of technical areas and work I aim to showcase throughout my journey.',
    items: [
      {
        title: 'AI-based IoMT Intrusion Detection',
        category: 'ARTIFICIAL INTELLIGENCE',
        description:
          'Exploring attack detection methods for Internet of Medical Things networks, with a focus on rare attacks and reducing false positives.',
        tags: ['Python', 'Machine Learning', 'IoMT'],
        icon: BrainCircuit,
      },
      {
        title: 'Network Security & Firewalls',
        category: 'NETWORK SECURITY',
        description:
          'Studying secure network architectures, firewall rules, traffic filtering, and network segmentation.',
        tags: ['Networking', 'Firewall', 'VLAN', 'Fortinet','Postman'],
        icon: Network,
      },
      {
        title: 'SOC Analysis & OpenSearch',
        category: 'DETECTION & MONITORING',
        description:
          'Exploring security logs, building visualizations, and analyzing indicators to better understand network activity.',
        tags: ['SOC', 'OpenSearch', 'Logs', 'Wireshark'],
        icon: Activity,
      },
      {
        title: 'Secure Web Development',
        category: 'APPLICATION SECURITY',
        description:
          'Developing applications and exploring security practices that help protect data and access.',
        tags: ['Web', 'Security', 'Development'],
        icon: Code2,
      },
      {
        title: 'Cloud & Application Security',
        category: 'CLOUD SECURITY',
        description:
          'Exploring cloud hosting, access control, and data protection in modern applications.',
        tags: ['Cloud', 'IAM', 'Data protection', 'Microsoft Azure'],
        icon: Cloud,
      },

      
      {
        title: 'Lo-mosso — E-commerce Marketplace',
        category: 'PERSONAL PROJECT',
        description:
          'Development of a functional marketplace prototype. The project uses PHP, MySQL with PDO, JavaScript, and REST/JSON exchanges. Postman is part of the development toolkit.',
        tags: ['PHP', 'CSS', 'JavaScript', 'MySQL', 'PDO', 'REST/JSON', 'Postman'],
        icon: Code2,
      },

      

{
  title: 'Morocco Smart Guide',
  category: 'ACADEMIC PROJECT · AI',
  description:
    'A team-developed intelligent travel assistant for Morocco. The project combines FAISS semantic search, a RAG-based bilingual chatbot, and a personalized itinerary generator that considers budget, interests, constraints, and trip duration.',
  tags: [
    'Python',
    'FastAPI',
    'Streamlit',
    'FAISS',
    'RAG',
    'LangChain',
    'Hugging Face',
  ],
  icon: BrainCircuit,
},


    ],
    viewProfile: 'View my profile',
    contactTitle: "Cybersecurity is not just a job, it's a passion.",
    contactText:
      "Interested in discussing cybersecurity, a project, or an opportunity? Let's connect.",
    emailBtn: 'Contact me by email',
    footer: 'Built with curiosity and a passion for cybersecurity.',
    backTop: 'Back to top',
  },
}

const skills = [
  { label: 'Cybersecurity', icon: ShieldCheck },
  { label: 'Network Security', icon: Network },
  { label: 'AI & Machine Learning', icon: BrainCircuit },
  { label: 'SOC & Monitoring', icon: Activity },
  { label: 'Secure Development', icon: Code2 },
  { label: 'Cloud Security', icon: Cloud },
]

export default function App() {
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[lang]

 const navIds = [
  'about',
  'experience',
  'skills',
  'projects',
  'contact',
]

  return (
    <div className="min-h-screen overflow-hidden bg-[#070b14] text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <ShieldCheck className="text-cyan-300" size={23} />
            </div>
            <div>
              <p className="font-mono text-sm font-bold tracking-wider text-white">
                TILENGAR<span className="text-cyan-400">.SEC</span>
              </p>
              <p className="text-[10px] tracking-[0.18em] text-slate-500">
                CYBERSECURITY PORTFOLIO
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {t.nav.map((label, i) => (
              <a
                key={label}
                href={`#${navIds[i]}`}
                className="text-sm text-slate-400 transition hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            
<button
  onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
  className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-bold transition hover:border-cyan-400/50 hover:text-cyan-300"
  aria-label="Change language"
>
  <Globe size={15} />
  {lang === 'fr' ? 'FR | EN' : 'EN | FR'}
</button>


            <button
              className="rounded-lg border border-white/10 p-2 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            {t.nav.map((label, i) => (
              <a
                key={label}
                href={`#${navIds[i]}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 py-20 lg:px-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(8,145,178,0.13),transparent_45%)]" />

          <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {t.availability}
              </div>

              <p className="mb-4 font-mono text-sm tracking-[0.25em] text-cyan-400">
                {t.greeting}
              </p>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t.firstName}
                <span className="mt-2 block break-words text-cyan-300">
                  {t.lastName}
                </span>
              </h1>

              <h2 className="mt-7 text-lg font-medium text-slate-300 sm:text-xl">
                {t.role}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                {t.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  {t.projectsBtn}
                  <ArrowRight size={17} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {t.contactBtn}
                </a>
              </div>

              <div className="mt-9 flex gap-3">
                <a
                  href="https://github.com/LionelTDTILE"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Code2 size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lionel-tilengar-ab3961319"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Code2 size={20} />
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-sm rounded-3xl border border-cyan-400/20 bg-[#0b1220] p-6 shadow-2xl shadow-cyan-950/30">
                <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-auto font-mono text-xs text-slate-500">
                    profile.sh
                  </span>
                </div>
                <Terminal className="mb-5 text-cyan-300" size={30} />
                <p className="font-mono text-sm leading-8">
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="text-cyan-200">whoami</span>
                  <br />
                  <span className="text-slate-300">tilengar-lionel</span>
                  <br />
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="text-cyan-200">cat focus.txt</span>
                  <br />
                  <span className="text-slate-400">
                    cybersecurity
                    <br />
                    network-defense
                    <br />
                    ai-intrusion-detection
                    <br />
                    secure-development
                  </span>
                  <br />
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="animate-pulse text-cyan-300">_</span>
                </p>
                <div className="mt-7 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="font-mono text-xs text-emerald-300">
                    {'>'} LEARN. BUILD. SECURE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
<section id="about" className="border-t border-white/5 bg-white/[0.02]">
  <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
    <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
      01 / PROFILE
    </p>

    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_280px]">
      <div>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {t.aboutTitle}
          
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
          {t.aboutText}
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/lionel.jfif"
          alt="Portrait professionnel"
          className="h-64 w-64 rounded-2xl border border-cyan-400/30 object-cover object-top shadow-lg shadow-cyan-950/30"
        />
      </div>
    </div>
  </div>
</section>


        
<section
  id="experience"
  className="border-t border-white/5 bg-white/[0.02]"
>
  <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
    <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
      02 / EXPERIENCE
    </p>

    <h2 className="text-3xl font-bold text-white sm:text-4xl">
      {lang === 'fr'
        ? 'Expérience professionnelle'
        : 'Professional Experience'}
    </h2>

            

<article className="mt-6 rounded-2xl border border-white/10 bg-[#0b1220] p-6 sm:p-8">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <p className="font-mono text-sm text-cyan-300">PIGMA SYSTEM</p>

      <h3 className="mt-2 text-xl font-bold text-white">
        {lang === 'fr'
          ? 'Développement d’une solution OTA sécurisée pour ESP32'
          : 'Development of a Secure OTA Solution for ESP32'}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {lang === 'fr'
          ? 'IoT · Systèmes embarqués'
          : 'IoT · Embedded Systems'}
      </p>
    </div>

    <span className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400">
      01/07/2024 – 28/07/2024
    </span>
  </div>

  <p className="mt-5 leading-7 text-slate-400">
    {lang === 'fr'
      ? 'Développement et tests d’un système embarqué basé sur ESP32 pour la connexion Wi-Fi, la communication avec un serveur PHP local via des requêtes HTTP GET et l’affichage des données sur une page HTML et le moniteur série. Le travail a également porté sur la sélection des réseaux Wi-Fi via Bluetooth et sur les bases de la mise à jour de programmes à distance (OTA).'
      : 'Development and testing of an ESP32-based embedded system for Wi-Fi connectivity, communication with a local PHP server through HTTP GET requests, and data display on an HTML page and the serial monitor. The work also covered Wi-Fi network selection through Bluetooth and the foundations of over-the-air (OTA) program updates.'}
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    {[
      'ESP32',
      'IoT',
      'C/C++',
      'Wi-Fi',
      'Bluetooth',
      'PHP',
      'HTTP GET',
      'HTML',
      'OTA',
    ].map((tag) => (
      <span
        key={tag}
        className="rounded-md border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200"
      >
        {tag}
      </span>
    ))}
  </div>
</article>


    <article className="mt-10 rounded-2xl border border-white/10 bg-[#0b1220] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm text-cyan-300">ACXS IT</p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {lang === 'fr'
              ? 'Étude comparative de solutions de sécurité réseau'
              : 'Comparative Study of Network Security Solutions'}
          </h3>
        </div>

        <span className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400">
          01/07/2025 – 30/10/2025
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        {lang === 'fr'
          ? "Étude de solutions de sécurité réseau pour un environnement bancaire, avec comparaison de pare-feu et étude d’une architecture de sécurité. Le travail comprend également une simulation réseau avec GNS3."
          : "Study of network security solutions for a banking environment, including firewall comparison and security architecture analysis. The work also includes network simulation using GNS3."}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {['FortiGate', 'FortiNAC', 'GNS3', 'Network Security'].map(
          (tag) => (
            <span
              key={tag}
              className="rounded-md border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </article>
  </div>
</section>


        <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
            02 / EXPERTISE
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t.skillsTitle}
          </h2>
          <p className="mt-4 text-slate-400">{t.skillsSubtitle}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                  <Icon className="text-cyan-300" size={23} />
                </div>
                <span className="font-medium text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
              03 / SELECTED WORK
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.projectsTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              {t.projectsSubtitle}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.items.map((project, index) => {
                const Icon = project.icon
                return (
                  <article
                    key={project.title}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b1220] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                        <Icon className="text-cyan-300" size={25} />
                      </div>
                      <span className="font-mono text-xs text-slate-600">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mb-3 text-[10px] font-bold tracking-[0.17em] text-cyan-400">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] to-[#0b1220] p-8 sm:p-12 lg:p-16">
            <div className="relative max-w-3xl">
              <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
                04 / CONTACT
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                {t.contactText}
              </p>
              <a
                href="https://www.linkedin.com/in/lionel-tilengar-ab3961319"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail size={17} />
                {t.contactBtn}
                <ArrowRight size={17} />
              </a>
              <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-400">
                <a
                  href="https://github.com/LionelTDTILE"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  <Code2 size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lionel-tilengar-ab3961319"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  <Code2 size={17} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} TILENGAR Mbaihornom Lionel
          </p>
          <p>{t.footer}</p>
          <a href="#home" className="inline-flex items-center gap-1 hover:text-cyan-300">
            {t.backTop} <ArrowDown className="rotate-180" size={13} />
          </a>
        </div>
      </footer>
    </div>
  )
}
