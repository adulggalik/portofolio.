import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
  Code2,
  Database,
  Globe,
  Layers,
  ExternalLink,
  BriefcaseBusiness,
  GraduationCap,
  Download,
  Instagram,
  MessageCircle,
  Play,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

const profile = {
  name: "Abdullah Abdul Ghani",
  role: "Full-Stack Web Developer",
  location: "Banjarmasin, Indonesia",
  email: "adulggalik@gmail.com",
  whatsapp: "085654857946",
  github: "https://github.com/adulggalik",
  linkedin:
    "https://www.linkedin.com/in/abdullah-abdul-ghani-27198a2b5",
};

const projects = [
  {
    number: "01",
    title: "Sistem Arsip Terpadu",
    image: "/satu-tvri.png",
    subtitle: "SATU TVRI KALSEL",
    category: "Frontend Web Developer",
    description:
      "Membangun sistem persuratan terintegrasi berbasis web untuk membantu pengelolaan, pencatatan, pemantauan, dan pengarsipan surat di lingkungan TVRI Kalimantan Selatan.",
    details: [
      "Digunakan secara aktif untuk menangani lebih dari 3.500 data surat.",
      "Membangun alur pengelolaan surat dan pemantauan status.",
      "Mengintegrasikan frontend, backend, dan basis data.",
    ],
    stack: ["React.js", "Express.js", "Prisma", "MySQL"],
    link: "https://satu-surat.lanjung-tvrikalsel.id/",
    label: "Website Aktif",
    featured: true,
  },
  {
    number: "02",
    title: "IBTI Semanda Residence",
    image: "/ibti-semanda.png",
    subtitle: "PROPERTY INFORMATION SYSTEM",
    category: "Full-Stack Web Application",
    description:
      "Membangun website informasi dan pemesanan perumahan yang dilengkapi pemetaan lokasi unit untuk memudahkan calon konsumen melihat informasi properti.",
    details: [
      "Menyediakan informasi unit dan ketersediaan rumah.",
      "Mengintegrasikan peta lokasi menggunakan Leaflet.",
      "Membangun frontend dan backend aplikasi.",
    ],
    stack: ["React.js", "Express.js", "Leaflet"],
    link: null,
    label: "Academic Project",
    featured: false,
  },
  {
  number: "03",
  title: "Sistem Informasi Simpadu",
  image: null,
  subtitle: "PROJECT BASED LEARNING",
  category: "Mobile Application",
  description:
    "Berpartisipasi dalam pembangunan aplikasi presensi mahasiswa berbasis mobile. Bertanggung jawab pada implementasi antarmuka aplikasi menggunakan Flutter berdasarkan rancangan UI/UX.",
  details: [
    "Mengimplementasikan tampilan aplikasi mobile.",
    "Menerjemahkan rancangan UI/UX ke dalam kode Flutter.",
    "Membangun komponen antarmuka aplikasi.",
  ],
  stack: ["Flutter", "Dart"],
  link: null,
  label: "Academic Project",
  featured: false,
},
];

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend Development",
    icon: Layers,
    items: ["Node.js", "Express.js", "REST API", "API Integration"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "Prisma ORM", "Database Management"],
  },
  {
    title: "Tools & Others",
    icon: Globe,
    items: ["Git", "GitHub", "Postman", "VS Code", "Responsive Design"],
  },
];

const experiences = [
  {
    period: "2026 — Sekarang",
    role: "Life Planner",
    company: "Manulife",
    description:
      "Membangun hubungan profesional dan mempelajari kebutuhan perlindungan finansial melalui komunikasi dengan calon nasabah.",
  },
  {
    period: "2025",
    role: "Social Media Specialist",
    company: "Diva Food n Drink",
    description:
      "Membantu pengelolaan media sosial serta pembuatan konten untuk kebutuhan promosi usaha.",
  },
  {
    period: "2025 — Sekarang",
    role: "Content Creator",
    company: "Independent",
    description:
      "Membuat dan mengelola konten digital dengan capaian hingga 1,8 juta tayangan dan lebih dari 14 ribu pengikut.",
  },
  {
    period: "Freelance",
    role: "Video Production & Editing",
    company: "Independent",
    description:
      "Terlibat dalam produksi dan penyuntingan video untuk berbagai kegiatan dan acara.",
  },
];

const trainings = [
  {
    title: "Junior Mobile Programmer",
    organizer: "Digital Talent Scholarship 2025",
    year: "2025",
    image: "/certificates/junior-mobile-programmer.jpg",
  },
  {
    title: "Pengantar Mindset Digital 1: Mengubah Masa Depan dengan Pola Pikir Digital",
    organizer: "Digital Learning",
    year: "2025",
    image: "/certificates/pengantar-mindset-digital.jpg",
  },
];

const certificates = [
  {
    title: "Sertifikat Magang",
    organizer: "TVRI Kalimantan Selatan",
    year: "2025",
    image: "/certificates/magang-tvri.jpg",
  },
  {
    title: "Sertifikasi Kompetensi Pemrograman",
    organizer: "Lembaga Sertifikasi Profesi Politeknik Negeri Banjarmasin",
    image: "/certificates/bnsp-1.jpg",
  },
  {
    title: "Sertifikasi Kompetensi Pemrograman",
    organizer: "Lembaga Sertifikasi Teknologi Digital · Yogyakarta",
    image: "/certificates/bnsp-2.jpg",
  },
  {
    title: "Project Based Learning (PBL)",
    organizer: "Sistem Informasi Simpadu",
    year: "2025",
    image: "/certificates/pbl-simpadu.jpg",
  },
];

const education = [
  {
    period: "2023 — 2026",
    name: "Politeknik Negeri Banjarmasin",
    major: "D3 Teknik Informatika",
    description: "IPK 3,75",
  },
  {
    period: "2020 — 2023",
    name: "MA Darul Ilmi",
    major: "Pendidikan Menengah",
    description: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Tentang", "#about"],
    ["Proyek", "#projects"],
    ["Keahlian", "#skills"],
    ["Pengalaman", "#experience"],
    ["Pelatihan", "#training"],
    ["Sertifikasi", "#certificates"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <span className="brand-mark">A.</span>
        <span>abdullah<span className="brand-dot">.</span></span>
      </a>

      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href={`https://wa.me/62${profile.whatsapp.slice(1)}`}
          className="nav-contact"
          target="_blank"
          rel="noreferrer"
        >
          Hubungi Saya <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="menu-button"
        aria-label="Buka navigasi"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={fadeUp} className="availability">
            <span className="status-dot" />
            Terbuka untuk peluang baru
          </motion.div>

          <motion.p variants={fadeUp} className="hero-intro">
            Halo, saya Abdullah Abdul Ghani 👋
          </motion.p>

          <motion.h1 variants={fadeUp}>
            Membangun ide menjadi <span>solusi digital.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-description">
            Seorang Full-Stack Web Developer yang berfokus pada pembangunan
            aplikasi web, pengelolaan basis data, dan pengalaman digital yang
            fungsional.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <a href="#projects" className="button button-dark">
              Lihat Proyek <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="button button-outline">
              Hubungi Saya
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <span>
              <MapPin size={17} /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="visual-card">
            <div className="visual-top">
              <span>MY DIGITAL SPACE</span>
              <span className="visual-indicator">● AVAILABLE</span>
            </div>

            <div className="avatar-placeholder">
  <img src="/profile.jpg" alt="Foto Abdullah Abdul Ghani" />
</div>

            <h3>Abdullah Abdul Ghani</h3>
            <p>Full-Stack Web Developer</p>

            <div className="visual-divider" />

            <div className="visual-bottom">
              <span>REACT.JS</span>
              <span>NODE.JS</span>
              <span>MYSQL</span>
            </div>
          </div>
          <div className="floating-note note-one">
            <Sparkles size={16} /> Creative Problem Solver
          </div>
          <div className="floating-note note-two">
            <Code2 size={16} /> Building for the web
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} /> Scroll untuk menjelajahi
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-layout">
        <div>
          <SectionHeading
            eyebrow="01 / TENTANG SAYA"
            title="Sedikit tentang saya."
          />
        </div>

        <motion.div
          className="about-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="about-lead">
            Saya adalah lulusan D3 Teknik Informatika yang memiliki ketertarikan
            pada pengembangan aplikasi berbasis web.
          </p>
          <p>
            Saya memiliki pengalaman membangun sistem informasi yang digunakan
            dalam operasional nyata, mulai dari merancang antarmuka,
            mengintegrasikan API, hingga mengelola basis data.
          </p>
          <p>
            Bagi saya, teknologi bukan hanya tentang menulis kode, tetapi juga
            bagaimana sebuah solusi dapat membantu menyelesaikan permasalahan
            dan memberikan manfaat bagi penggunanya.
          </p>

          <div className="about-facts">
            <div>
              <strong>3.500+</strong>
              <span>Data surat dikelola</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Proyek aplikasi</span>
            </div>
            <div>
              <strong>3.75</strong>
              <span>IPK kelulusan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <SectionHeading
        eyebrow="02 / PROYEK PILIHAN"
        title="Beberapa hal yang pernah saya bangun."
        description="Kumpulan proyek yang menjadi bagian dari perjalanan saya dalam dunia pengembangan aplikasi."
      />

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="project-number">{project.number}</div>

            <div className="project-main">
              <div className="project-meta">
                <span>{project.subtitle}</span>
                <span className="project-label">{project.label}</span>
              </div>

              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
              <p>{project.description}</p>

              <ul className="project-details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Kunjungi website <ArrowUpRight size={16} />
                </a>
              )}
            </div>

           <div className="project-art">
  {project.image ? (
    <img
      src={project.image}
      alt={`Preview ${project.title}`}
      className="project-screenshot"
    />
  ) : (
    <div className="project-placeholder">
      <div className="placeholder-icon">
        <Layers size={42} />
      </div>
      <h3>{project.title}</h3>
      <p>Mobile Application · Flutter & Dart</p>
      <span>PROJECT PREVIEW / {project.number}</span>
    </div>
  )}

  {project.image && (
    <span className="art-caption">
      PROJECT PREVIEW / {project.number}
    </span>
  )}

</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <SectionHeading
        eyebrow="03 / KEAHLIAN"
        title="Teknologi yang saya gunakan."
        description="Tools dan teknologi yang pernah saya gunakan dalam proses membangun aplikasi."
      />

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              className="skill-card"
              key={skill.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="skill-icon">
                <Icon size={23} />
              </div>
              <h3>{skill.title}</h3>
              <div className="tag-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="experience-layout">
        <div>
          <SectionHeading
            eyebrow="04 / PENGALAMAN"
            title="Perjalanan dan aktivitas."
            description="Pengalaman profesional dan aktivitas yang membentuk kemampuan saya."
          />

          <div className="education-block">
            <h3>
              <GraduationCap size={21} /> Pendidikan
            </h3>
            {education.map((item) => (
              <div className="education-item" key={item.name}>
                <span>{item.period}</span>
                <h4>{item.name}</h4>
                <p>{item.major}</p>
                {item.description && <small>{item.description}</small>}
              </div>
            ))}
          </div>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={`${item.role}-${index}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot" />
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredentialSection({ id, eyebrow, title, description, items }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id={id} className="section certificate-section">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="certificate-grid">
        {items.map((item, index) => (
          <motion.button
            type="button"
            className="certificate-card"
            key={item.title}
            onClick={() => setSelected(item)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="certificate-art">
              <img src={item.image} alt={`Sertifikat ${item.title}`} />
            </div>
            <div className="certificate-info">
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.organizer}
                  {item.year ? ` · ${item.year}` : ""}
                </p>
              </div>
              <ArrowUpRight size={20} />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="certificate-modal"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Tutup"
              >
                <X />
              </button>
              <span className="eyebrow">DOKUMEN</span>
              <h3>{selected.title}</h3>
              <p>
                {selected.organizer}
                {selected.year ? ` · ${selected.year}` : ""}
              </p>
              <img
                className="certificate-full-image"
                src={selected.image}
                alt={`Sertifikat ${selected.title}`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Training() {
  return (
    <CredentialSection
      id="training"
      eyebrow="05 / PELATIHAN"
      title="Pelatihan yang pernah diikuti."
      description="Program pelatihan untuk memperluas pengetahuan dan meningkatkan keterampilan."
      items={trainings}
    />
  );
}

function Certificates() {
  return (
    <CredentialSection
      id="certificates"
      eyebrow="06 / SERTIFIKASI & PENGALAMAN"
      title="Sertifikasi dan pengalaman."
      description="Dokumen sertifikat kompetensi, magang, dan kegiatan Project Based Learning."
      items={certificates}
    />
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-panel">
        <div className="contact-decoration">LET'S TALK</div>
        <span className="eyebrow">06 / KONTAK</span>
        <h2>
          Punya ide menarik?
          <br />
          Mari kita <span>wujudkan.</span>
        </h2>
        <p>
          Saya terbuka untuk berdiskusi, berkolaborasi, dan menjajaki peluang
          baru di bidang pengembangan web.
        </p>

        <div className="contact-actions">
          <a
            href={`mailto:${profile.email}`}
            className="button button-dark"
          >
            <Mail size={17} /> Kirim Email
          </a>
          <a
            href={`https://wa.me/62${profile.whatsapp.slice(1)}`}
            className="button button-outline"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>

        <div className="contact-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand">
        <span className="brand-mark">A.</span>
        <span>abdullah<span className="brand-dot">.</span></span>
      </a>
      <p>© {new Date().getFullYear()} Abdullah Abdul Ghani. Dibuat dengan React.</p>
      <a href="#home" className="back-top">
        Kembali ke atas <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Training />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);