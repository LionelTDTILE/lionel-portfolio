
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
  GraduationCap,
  LockKeyhole,
  BookOpen,
} from 'lucide-react'

const content = {
  fr: {
    nav: ['À propos', 'Expérience', 'Compétences', 'Projets', 'Contact'],
    availability: 'Recherche de stage PFE · Janvier 2027',
    greeting: 'BONJOUR, JE SUIS',
    firstName: 'Mbaihornom Lionel',
    lastName: ' TILENGAR',
    role: 'Élève ingénieur en cybersécurité · 5e année',
    description:
      "Élève ingénieur en cybersécurité à l'Université Internationale de Rabat, je m'intéresse à la protection des systèmes, des réseaux et des applications contre les cybermenaces. Mon parcours couvre différents domaines de la cybersécurité : sécurité réseau, systèmes, applications web, cryptographie, cloud, IoT et intelligence artificielle appliquée à la détection d'intrusions. Je recherche un stage PFE à partir de janvier 2027.",
    projectsBtn: 'Découvrir mes projets',
    contactBtn: 'Me contacter',

    aboutTitle: 'À propos de moi',
    aboutText:
      "Élève ingénieur en Génie Informatique, spécialité Cybersécurité à l'Université Internationale de Rabat (UIR), je développe mes compétences à travers des stages, des projets pratiques, des laboratoires techniques et des travaux de recherche. Mon objectif est de contribuer à la protection des infrastructures, des systèmes, des données et des applications numériques.",

    education: 'Formation académique',
    educationItems: [
      {
        degree: 'Cycle ingénieur en Génie Informatique',
        field: 'Spécialité Cybersécurité · 5e année',
        school: 'Université Internationale de Rabat (UIR)',
        location: 'Rabat, Maroc',
        date: '2022 – en cours',
      },
      {
        degree: 'Baccalauréat scientifique',
        field: 'Série D',
        school: 'Collège Horizon International',
        location: 'Ouagadougou, Burkina Faso',
        date: '2021 – 2022',
      },
      {
        degree: 'Brevet d’études du premier cycle (BEPC)',
        field: 'Enseignement secondaire',
        school: 'Collège Horizon International',
        location: 'Ouagadougou, Burkina Faso',
        date: '2018 – 2019',
      },
    ],

    experienceTitle: 'Expérience professionnelle',
    experienceOneTitle:
      'Développement et tests d’une solution embarquée ESP32',
    experienceOneDescription:
      'Travail sur un système embarqué utilisant la connexion Wi-Fi et la communication avec un serveur PHP local via des requêtes HTTP GET. Le travail comprend également l’affichage des données sur une page HTML et le moniteur série, la configuration du Wi-Fi via Bluetooth et l’étude des bases de la mise à jour à distance OTA.',
    experienceTwoTitle:
      'Étude comparative de solutions de sécurité réseau',
    experienceTwoDescription:
      'Étude de solutions de sécurité réseau dans le contexte d’une infrastructure bancaire. Comparaison de solutions telles que FortiGate et FortiNAC, étude des mécanismes de filtrage, d’inspection et de segmentation réseau, et proposition d’une architecture de sécurité adaptée.',
    internship: 'Stage',
    embeddedSystems: 'IoT · Systèmes embarqués',
    cybersecurityNetworking: 'Cybersécurité · Réseaux',
    july2024: 'Juillet 2024',
    julyOctober2025: 'Juillet – octobre 2025',

    skillsTitle: 'Compétences et domaines techniques',
    skillsSubtitle:
      'Les différents domaines de la cybersécurité abordés pendant ma formation, mes stages et mes travaux pratiques.',
    toolsTitle: 'Outils et technologies',

    skills: [
      'Sécurité des réseaux',
      'Sécurité des systèmes',
      'Pentest et Ethical Hacking',
      'Sécurité des applications web',
      'Cryptographie et protection des données',
      'Sécurité cloud',
      'Supervision et détection des menaces',
      'Intelligence artificielle appliquée à la cybersécurité',
      'Sécurité IoT et systèmes embarqués',
    ],

    projectsTitle: 'Projets, recherche et domaines techniques',
    projectsSubtitle:
      'Une présentation de mes projets académiques, de mes travaux de recherche et des différents domaines de la cybersécurité que j’explore.',

    projects: [
      {
        title: 'Détection d’intrusions IoMT par IA',
        category: 'RECHERCHE EN COURS',
        description:
          'Étude de méthodes d’intelligence artificielle pour détecter les attaques dans les réseaux d’objets médicaux connectés. Les problématiques étudiées incluent le déséquilibre des classes, la détection des attaques minoritaires et la réduction des faux positifs.',
        tags: ['Python', 'Machine Learning', 'IoMT', 'Détection d’intrusions'],
        icon: BrainCircuit,
      },
      {
        title: 'Sécurité réseau et pare-feu',
        category: 'EXPÉRIENCE ET TRAVAUX PRATIQUES',
        description:
          'Étude des architectures réseau sécurisées, du filtrage du trafic, de l’inspection et de la segmentation réseau. Exploration des VLAN, pare-feu, VPN, DMZ et environnements de simulation réseau.',
        tags: ['Réseaux', 'FortiGate', 'FortiNAC', 'VLAN', 'GNS3', 'Cisco Packet Tracer'],
        icon: Network,
      },
      {
        title: 'Pentest et Ethical Hacking',
        category: 'PRATIQUE ET APPRENTISSAGE',
        description:
          'Exploration des techniques de test de sécurité dans des environnements de laboratoire autorisés : reconnaissance, analyse de services, recherche de vulnérabilités et tests de sécurité web.',
        tags: ['Kali Linux', 'Nmap', 'Metasploit', 'Burp Suite', 'CTF'],
        icon: LockKeyhole,
      },
      {
        title: 'Sécurité des applications web',
        category: 'PROJETS ET TRAVAUX PRATIQUES',
        description:
          'Développement web et étude de la protection des applications, des comptes utilisateurs, des rôles et des accès. Étude de vulnérabilités telles que XSS et CSRF dans le cadre des travaux pratiques.',
        tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'XSS', 'CSRF'],
        icon: Code2,
      },
      {
        title: 'Sécurité des systèmes',
        category: 'DOMAINE TECHNIQUE',
        description:
          'Étude de la sécurité des environnements Linux et Windows, des permissions, des services et des configurations système, ainsi que des méthodes de renforcement des systèmes.',
        tags: ['Linux', 'Ubuntu', 'Kali Linux', 'Windows', 'Hardening'],
        icon: Terminal,
      },
      {
        title: 'Cryptographie et protection des données',
        category: 'DOMAINE TECHNIQUE',
        description:
          'Étude des principes de confidentialité, d’intégrité, d’authentification et de protection des données, notamment à travers les notions de cryptographie et de sécurité des échanges.',
        tags: ['Cryptographie', 'Intégrité', 'Authentification', 'RSA'],
        icon: ShieldCheck,
      },
      {
        title: 'Supervision et détection des menaces',
        category: 'DOMAINE DE LA CYBERSÉCURITÉ',
        description:
          'Découverte des mécanismes de surveillance des événements de sécurité, d’analyse des journaux, d’identification des activités suspectes et de détection et réponse aux incidents.',
        tags: ['SOC', 'Logs', 'Monitoring', 'Wireshark'],
        icon: Activity,
      },
      {
        title: 'Sécurité cloud et contrôle des accès',
        category: 'DOMAINE DE LA CYBERSÉCURITÉ',
        description:
          'Exploration des principes de sécurité cloud, de la gestion des identités et des accès, de la protection des données et de la sécurisation des services hébergés.',
        tags: ['Cloud', 'IAM', 'Microsoft Azure', 'Protection des données'],
        icon: Cloud,
      },
      {
        title: 'Sécurité IoT et systèmes embarqués',
        category: 'EXPÉRIENCE ET EXPLORATION',
        description:
          'Expérience avec des systèmes embarqués ESP32, la communication Wi-Fi et Bluetooth et les échanges avec un serveur local. Étude des enjeux de sécurité des objets connectés et de leurs communications.',
        tags: ['ESP32', 'IoT', 'Wi-Fi', 'Bluetooth', 'HTTP'],
        icon: Network,
      },
      {
        title: 'Lo-mosso — Marketplace e-commerce',
        category: 'PROJET PERSONNEL',
        description:
          'Développement d’un prototype de marketplace utilisant PHP, MySQL avec PDO et JavaScript. Le projet comprend des échanges REST/JSON et l’utilisation de Postman dans l’environnement de développement.',
        tags: ['PHP', 'JavaScript', 'MySQL', 'PDO', 'REST/JSON', 'Postman'],
        icon: Code2,
      },
      {
        title: 'Morocco Smart Guide',
        category: 'PROJET ACADÉMIQUE · IA',
        description:
          'Assistant touristique intelligent pour le Maroc, développé en équipe. Le projet combine une recherche sémantique avec FAISS, un chatbot bilingue reposant sur une approche RAG et la génération d’itinéraires personnalisés selon le budget, les intérêts et la durée du séjour.',
        tags: ['Python', 'FastAPI', 'Streamlit', 'FAISS', 'RAG', 'LangChain', 'Hugging Face'],
        icon: BrainCircuit,
      },
    ],

    contactTitle:
      'La cybersécurité n’est pas seulement un métier, c’est une passion.',
    contactText:
      "Vous souhaitez échanger autour de la cybersécurité, d'un projet ou d'une opportunité de stage ? N'hésitez pas à me contacter.",
    emailBtn: 'Me contacter par e-mail',
    footer: 'Cybersécurité · Réseaux · Systèmes · Protection des données',
    backTop: 'Retour en haut',
    profileLabel: 'PROFIL',
    terminalFocus: [
      'network-security',
      'systems-security',
      'ethical-hacking',
      'application-security',
      'threat-detection',
    ],
    terminalMessage: 'APPRENDRE. CONSTRUIRE. SÉCURISER.',
    portraitAlt: 'Portrait de Lionel TILENGAR',
    contactLabel: 'CONTACT',
  },

  en: {
    nav: ['About', 'Experience', 'Skills', 'Projects', 'Contact'],
    availability: 'Seeking a final-year internship · January 2027',
    greeting: "HELLO, I'M",
    firstName: 'Mbaihornom Lionel',
    lastName: 'TILENGAR',
    role: 'Cybersecurity Engineering Student · 5th year',
    description:
      'Cybersecurity engineering student at the International University of Rabat, interested in protecting systems, networks, and applications against cyber threats. My background covers various cybersecurity fields: network security, systems security, web application security, cryptography, cloud, IoT, and AI-based intrusion detection. I am seeking a final-year internship starting in January 2027.',
    projectsBtn: 'Explore my projects',
    contactBtn: 'Get in touch',

    aboutTitle: 'About Me',
    aboutText:
      'I am a Computer Engineering student specializing in Cybersecurity at the International University of Rabat (UIR). I develop my skills through internships, practical projects, technical labs, and research. My goal is to contribute to protecting digital infrastructure, systems, data, and applications.',

    education: 'Education',
    educationItems: [
      {
        degree: 'Engineering Degree in Computer Science',
        field: 'Cybersecurity Specialization · 5th year',
        school: 'International University of Rabat (UIR)',
        location: 'Rabat, Morocco',
        date: '2022 – Present',
      },
      {
        degree: 'Scientific Baccalaureate',
        field: 'Science Stream D',
        school: 'Collège Horizon International',
        location: 'Ouagadougou, Burkina Faso',
        date: '2021 – 2022',
      },
      {
        degree: 'BEPC – Lower Secondary School Certificate',
        field: 'Secondary Education',
        school: 'Collège Horizon International',
        location: 'Ouagadougou, Burkina Faso',
        date: '2018 – 2019',
      },
    ],

    experienceTitle: 'Professional Experience',
    experienceOneTitle:
      'Development and testing of an ESP32 embedded solution',
    experienceOneDescription:
      'Worked on an embedded system using Wi-Fi connectivity and communication with a local PHP server through HTTP GET requests. The work also involved displaying data on an HTML page and the serial monitor, configuring Wi-Fi through Bluetooth, and studying the fundamentals of over-the-air updates (OTA).',
    experienceTwoTitle:
      'Comparative study of network security solutions',
    experienceTwoDescription:
      'Studied network security solutions in the context of a banking infrastructure. Compared solutions such as FortiGate and FortiNAC, explored traffic filtering, inspection, and network segmentation, and proposed an adapted security architecture.',
    internship: 'Internship',
    embeddedSystems: 'IoT · Embedded Systems',
    cybersecurityNetworking: 'Cybersecurity · Networking',
    july2024: 'July 2024',
    julyOctober2025: 'July – October 2025',

    skillsTitle: 'Skills & Technical Areas',
    skillsSubtitle:
      'An overview of cybersecurity fields covered during my studies, internships, and practical assignments.',
    toolsTitle: 'Tools & Technologies',

    skills: [
      'Network Security',
      'Systems Security',
      'Penetration Testing & Ethical Hacking',
      'Web Application Security',
      'Cryptography & Data Protection',
      'Cloud Security',
      'Security Monitoring & Threat Detection',
      'Artificial Intelligence for Cybersecurity',
      'IoT & Embedded Systems Security',
    ],

    projectsTitle: 'Projects, Research & Technical Areas',
    projectsSubtitle:
      'An overview of my academic projects, research work, and the different areas of cybersecurity I explore.',

    projects: [
      {
        title: 'AI-based IoMT Intrusion Detection',
        category: 'ONGOING RESEARCH',
        description:
          'Study of artificial intelligence methods for detecting attacks in Internet of Medical Things networks. Topics include class imbalance, minority attack detection, and reducing false positives.',
        tags: ['Python', 'Machine Learning', 'IoMT', 'Intrusion Detection'],
        icon: BrainCircuit,
      },
      {
        title: 'Network Security & Firewalls',
        category: 'INTERNSHIP AND PRACTICAL WORK',
        description:
          'Study of secure network architectures, traffic filtering, inspection, and network segmentation. Exploration of VLANs, firewalls, VPNs, DMZs, and network simulation environments.',
        tags: ['Networking', 'FortiGate', 'FortiNAC', 'VLAN', 'GNS3', 'Cisco Packet Tracer'],
        icon: Network,
      },
      {
        title: 'Penetration Testing & Ethical Hacking',
        category: 'PRACTICE AND LEARNING',
        description:
          'Exploration of security testing techniques in authorized lab environments, including reconnaissance, service analysis, vulnerability discovery, and web security testing.',
        tags: ['Kali Linux', 'Nmap', 'Metasploit', 'Burp Suite', 'CTF'],
        icon: LockKeyhole,
      },
      {
        title: 'Web Application Security',
        category: 'PROJECTS AND PRACTICAL WORK',
        description:
          'Web development and application protection, including user accounts, roles, and access control. Study of vulnerabilities such as XSS and CSRF in practical assignments.',
        tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'XSS', 'CSRF'],
        icon: Code2,
      },
      {
        title: 'Systems Security',
        category: 'TECHNICAL AREA',
        description:
          'Study of Linux and Windows security, permissions, services, system configurations, and approaches to system hardening.',
        tags: ['Linux', 'Ubuntu', 'Kali Linux', 'Windows', 'Hardening'],
        icon: Terminal,
      },
      {
        title: 'Cryptography & Data Protection',
        category: 'TECHNICAL AREA',
        description:
          'Study of confidentiality, integrity, authentication, and data protection principles, including cryptography and secure communications.',
        tags: ['Cryptography', 'Integrity', 'Authentication', 'RSA'],
        icon: ShieldCheck,
      },
      {
        title: 'Security Monitoring & Threat Detection',
        category: 'CYBERSECURITY FIELD',
        description:
          'Exploration of security event monitoring, log analysis, suspicious activity identification, and incident detection and response mechanisms.',
        tags: ['SOC', 'Logs', 'Monitoring', 'Wireshark'],
        icon: Activity,
      },
      {
        title: 'Cloud Security & Access Control',
        category: 'CYBERSECURITY FIELD',
        description:
          'Exploration of cloud security principles, identity and access management, data protection, and securing hosted services.',
        tags: ['Cloud', 'IAM', 'Microsoft Azure', 'Data Protection'],
        icon: Cloud,
      },
      {
        title: 'IoT & Embedded Systems Security',
        category: 'EXPERIENCE AND EXPLORATION',
        description:
          'Experience with ESP32 embedded systems, Wi-Fi and Bluetooth communication, and exchanges with a local server. Study of security challenges affecting connected devices and their communications.',
        tags: ['ESP32', 'IoT', 'Wi-Fi', 'Bluetooth', 'HTTP'],
        icon: Network,
      },
      {
        title: 'Lo-mosso — E-commerce Marketplace',
        category: 'PERSONAL PROJECT',
        description:
          'Development of a marketplace prototype using PHP, MySQL with PDO, and JavaScript. The project includes REST/JSON exchanges and the use of Postman in the development environment.',
        tags: ['PHP', 'JavaScript', 'MySQL', 'PDO', 'REST/JSON', 'Postman'],
        icon: Code2,
      },
      {
        title: 'Morocco Smart Guide',
        category: 'ACADEMIC PROJECT · AI',
        description:
          'A team-developed intelligent travel assistant for Morocco. It combines FAISS semantic search, a bilingual RAG chatbot, and personalized itinerary generation based on budget, interests, and trip duration.',
        tags: ['Python', 'FastAPI', 'Streamlit', 'FAISS', 'RAG', 'LangChain', 'Hugging Face'],
        icon: BrainCircuit,
      },
    ],

    contactTitle:
      'Cybersecurity is not just a profession, it is a passion.',
    contactText:
      'Interested in discussing cybersecurity, a project, or an internship opportunity? Feel free to contact me.',
    emailBtn: 'Contact me by email',
    footer: 'Cybersecurity · Networking · Systems · Data Protection',
    backTop: 'Back to top',
    profileLabel: 'PROFILE',
    terminalFocus: [
      'network-security',
      'systems-security',
      'ethical-hacking',
      'application-security',
      'threat-detection',
    ],
    terminalMessage: 'LEARN. BUILD. SECURE.',
    portraitAlt: 'Portrait of Lionel TILENGAR',
    contactLabel: 'CONTACT',
  },
}

const technicalTools = [
  'Linux',
  'Ubuntu',
  'Kali Linux',
  'Wireshark',
  'Nmap',
  'Metasploit',
  'Burp Suite',
  'FortiGate',
  'FortiNAC',
  'GNS3',
  'Cisco Packet Tracer',
  'VMware',
  'HTML',
  'PHP',
  'Python',
  'C',
  'MySQL',
  'ESP32',
  'Arduino IDE',
]

const skillIcons = [
  Network,
  ShieldCheck,
  LockKeyhole,
  Code2,
  LockKeyhole,
  Cloud,
  Activity,
  BrainCircuit,
  Terminal,
]

export default function App() {
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)

  const t = content[lang]
  console.log('Langue :', lang)
console.log('Titre :', t.aboutTitle)
  const navIds = ['about', 'experience', 'skills', 'projects', 'contact']

  return (
    <div className="min-h-screen overflow-hidden bg-[#070b14] text-slate-200">
      {/* NAVIGATION */}
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
        {/* HOME */}
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

                <a
                  href="mailto:lioneltilengar61@gmail.com"
                  aria-label="Email"
                  className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Mail size={20} />
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
                    {t.terminalFocus.map((item) => (
                      <span key={item}>
                        {item}
                        <br />
                      </span>
                    ))}
                  </span>
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="animate-pulse text-cyan-300">_</span>
                </p>

                <div className="mt-7 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="font-mono text-xs text-emerald-300">
                    {'>'} {t.terminalMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT AND EDUCATION */}
        <section id="about" className="border-t border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
              01 / {t.profileLabel}
            </p>

            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_280px]">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  {t.aboutTitle}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
                  {t.aboutText}
                </p>

                <div className="mt-10">
                  <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
                    <GraduationCap className="text-cyan-300" size={25} />
                    {t.education}
                  </h3>

                  <div className="space-y-4">
                    {t.educationItems.map((item) => (
                      <article
                        key={item.date}
                        className="rounded-2xl border border-white/10 bg-[#0b1220] p-5"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h4 className="font-semibold text-white">
                              {item.degree}
                            </h4>
                            <p className="mt-1 text-sm text-cyan-300">
                              {item.field}
                            </p>
                          </div>

                          <span className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400">
                            {item.date}
                          </span>
                        </div>

                        <p className="mt-4 text-sm text-slate-300">
                          {item.school}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.location}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:pt-12">
                <img
                  src={`${import.meta.env.BASE_URL}images/lionel.jfif`}
                  alt={t.portraitAlt}
                  className="h-64 w-64 rounded-2xl border border-cyan-400/30 object-cover object-top shadow-lg shadow-cyan-950/30"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="border-t border-white/5 bg-[#070b14]"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
              02 / EXPERIENCE
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.experienceTitle}
            </h2>

            <div className="mt-10 space-y-6">
              <article className="rounded-2xl border border-white/10 bg-[#0b1220] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-sm text-cyan-300">
                      PIGMA SYSTEM
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {t.experienceOneTitle}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {t.embeddedSystems}
                    </p>
                  </div>

                  <span className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400">
                    {t.july2024}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {t.experienceOneDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['ESP32', 'Wi-Fi', 'Bluetooth', 'PHP', 'HTTP GET', 'HTML', 'OTA'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-[#0b1220] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-sm text-cyan-300">ACXS IT</p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {t.experienceTwoTitle}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {t.cybersecurityNetworking}
                    </p>
                  </div>

                  <span className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400">
                    {t.julyOctober2025}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {t.experienceTwoDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['FortiGate', 'FortiNAC', 'GNS3', 'VLAN', 'Network Security'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="border-t border-white/5 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
              03 / SKILLS
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.skillsTitle}
            </h2>

            <p className="mt-4 text-slate-400">{t.skillsSubtitle}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.skills.map((label, index) => {
                const Icon = skillIcons[index]

                return (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
                  >
                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                      <Icon className="text-cyan-300" size={23} />
                    </div>
                    <span className="font-medium text-slate-200">
                      {label}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white">
                {t.toolsTitle}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {technicalTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-white/10 bg-[#0b1220] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-y border-white/5 bg-[#070b14]"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
              04 / PROJECTS & EXPLORATIONS
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.projectsTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              {t.projectsSubtitle}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.projects.map((project, index) => {
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
                        {String(index + 1).padStart(2, '0')}
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

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] to-[#0b1220] p-8 sm:p-12 lg:p-16">
            <div className="relative max-w-3xl">
              <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-400">
                05 / {t.contactLabel}
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-5xl">
                {t.contactTitle}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                {t.contactText}
              </p>

              <a
                href="mailto:lioneltilengar61@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail size={17} />
                {t.emailBtn}
                <ArrowRight size={17} />
              </a>

              <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-400">
                <a
                  href="mailto:lioneltilengar61@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  <Mail size={17} />
                  lioneltilengar61@gmail.com
                </a>

                <a
                  href="https://github.com/LionelTDTILE"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  <Code2 size={19} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/lionel-tilengar-ab3961319"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  <Code2 size={17} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Mbaihornom Lionel TILENGAR
          </p>

          <p>{t.footer}</p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 hover:text-cyan-300"
          >
            {t.backTop}
            <ArrowDown className="rotate-180" size={13} />
          </a>
        </div>
      </footer>
    </div>
  )
}