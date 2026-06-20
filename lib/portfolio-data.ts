import type { IconType } from "react-icons";
import {
  BsBoxes,
  BsCodeSlash,
  BsDatabaseFill,
  BsFillDiagram3Fill,
  BsFillDiagram2Fill,
  BsFillRouterFill,
  BsGraphUpArrow,
  BsTools,
  BsCloudFill,
  BsPhone,
  BsPatchCheckFill,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import { FaAws, FaGolang, FaJava } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiAxios,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJupyter,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiN8N,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiSass,
  SiSpring,
  SiSpringboot,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
  SiOpenjdk,
} from "react-icons/si";

export type Theme = "light" | "dark";
export type ProjectCategory = "all" | "web" | "mobile" | "ai";

export type SectionLink = {
  name: string;
  href: string;
  icon: IconType;
};

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  description: string;
  accent: string;
};

export type EducationItem = {
  title: string;
  subtitle: string;
  image: string;
  note: string;
  yearRange: string;
};

export type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

export type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillCategoryData = {
  title: string;
  icon: IconType;
  summary: string;
  skills: SkillItem[];
};

export const navigation: SectionLink[] = [
  { name: "Home", href: "#home", icon: BsPhone },
  { name: "About", href: "#about", icon: BsPatchCheckFill },
  { name: "Experience", href: "#experience", icon: BsCodeSlash },
  { name: "Skills", href: "#skills", icon: BsBoxes },
  { name: "Education", href: "#education", icon: BsGraphUpArrow },
  { name: "Projects", href: "#projects", icon: BsFillDiagram2Fill },
  { name: "Gallery", href: "#gallery", icon: BsFillDiagram3Fill },
  { name: "Contact", href: "#contact", icon: BsFillRouterFill },
];

export const projectFilters: Array<{ label: string; value: ProjectCategory }> =
  [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "AI & ML", value: "ai" },
  ];

export const projects: Project[] = [
  {
    title: "Bookme",
    category: "web",
    image: "/assets/projects/Bookme.png",
    description: "Clean booking flow with a calm interface and clear actions.",
    accent: "from-cyan-500/30 to-sky-500/10",
  },
  {
    title: "Cash Stash",
    category: "web",
    image: "/assets/projects/Cash-Stash.png",
    description:
      "Finance dashboard built for quick balance tracking and budgeting.",
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    title: "Complaint Management System",
    category: "web",
    image: "/assets/projects/ComplaintMngSystem.png",
    description: "Service workflow dashboard for managing support requests.",
    accent: "from-amber-500/30 to-orange-500/10",
  },
  {
    title: "Home Owner Dashboard",
    category: "web",
    image: "/assets/projects/HomeOwnerDash.png",
    description: "Property operations view for owners and admin workflows.",
    accent: "from-fuchsia-500/30 to-pink-500/10",
  },
  {
    title: "Portfolio",
    category: "web",
    image: "/assets/projects/portfolio.png",
    description:
      "Personal portfolio landing page with a modern sectioned layout.",
    accent: "from-violet-500/30 to-indigo-500/10",
  },
  {
    title: "WhatsApp Utility",
    category: "web",
    image: "/assets/projects/whatsapp.png",
    description:
      "Messaging-focused interface concept with quick interaction paths.",
    accent: "from-green-500/30 to-emerald-500/10",
  },
  {
    title: "Keepify",
    category: "mobile",
    image: "/assets/projects/Keepify.png",
    description: "Mobile-first productivity experience for everyday planning.",
    accent: "from-sky-500/30 to-cyan-500/10",
  },
  {
    title: "PerCare Center",
    category: "mobile",
    image: "/assets/projects/PerCareCenter.png",
    description: "Patient care app concept with accessible information flow.",
    accent: "from-rose-500/30 to-red-500/10",
  },
  {
    title: "Mental Health Center",
    category: "mobile",
    image: "/assets/projects/MentalHealthCenter.png",
    description: "Supportive wellness app layout with a soft, reassuring tone.",
    accent: "from-teal-500/30 to-cyan-500/10",
  },
  {
    title: "AI Dashboard",
    category: "ai",
    image: "/assets/projects/DS-dashboard.png",
    description: "Data-driven analytics dashboard built for AI/ML insights.",
    accent: "from-purple-500/30 to-fuchsia-500/10",
  },
  {
    title: "Movie Recommender",
    category: "ai",
    image: "/assets/projects/movieRecommenderApp.png",
    description: "Recommendation app concept driven by preference matching.",
    accent: "from-indigo-500/30 to-blue-500/10",
  },
  {
    title: "Smart Blog Assistant",
    category: "ai",
    image: "/assets/projects/SmartBlog.png",
    description:
      "Content-centric AI concept for assisted publishing workflows.",
    accent: "from-lime-500/30 to-emerald-500/10",
  },
];

export const galleryImages = [
  "/assets/gallery/gallery1.png",
  "/assets/gallery/gallery2.png",
  "/assets/gallery/gallery3.png",
  "/assets/gallery/gallery4.png",
  "/assets/gallery/gallery5.jpeg",
];

export const education: EducationItem[] = [
  {
    title: "Taxila College",
    subtitle: "A/L studies",
    image: "/assets/education-icons/taxila.jpeg",
    note: "Academic foundation from 2019 to 2022.",
    yearRange: "2019 - 2022",
  },
  {
    title: "Esoft",
    subtitle: "Diploma",
    image: "/assets/education-icons/esoft.webp",
    note: "Completed diploma journey from 2022 to 2023.",
    yearRange: "2022 - 2023",
  },
  {
    title: "IJSE",
    subtitle: "HND",
    image: "/assets/education-icons/Ijse.jpg",
    note: "Advanced software engineering pathway from 2023 to 2026.",
    yearRange: "2023 - 2026",
  },
];

export const experience = {
  company: "Codimite",
  role: "Intern",
  logo: "/assets/experience/codimite_logo.jpeg",
  summary:
    "Working in a real product environment while learning disciplined delivery, clean interfaces, and collaborative engineering.",
  since: "May 2026",
};

export const skillCategories: SkillCategoryData[] = [
  {
    title: "Frontend Development",
    icon: BsCodeSlash,
    summary:
      "Responsive interfaces, component systems, and polished user flows.",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React Native", icon: RiReactjsFill, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "NativeWind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "SASS", icon: SiSass, color: "#CC6699" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "Zustand", icon: BsBoxes, color: "#F59E0B" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
  {
    title: "Backend Development",
    icon: BsDatabaseFill,
    summary: "API design, runtime logic, and server-side delivery.",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "JSP", icon: FaJava, color: "#F89820" },
      { name: "REST APIs", icon: BsFillRouterFill, color: "#0EA5E9" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Go", icon: FaGolang, color: "#00ADD8" },
      { name: "n8n", icon: SiN8N, color: "#EA4B71" },
    ],
  },
  {
    title: "Database & Tools",
    icon: BsTools,
    summary: "Data handling, delivery tools, and production workflows.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Mongoose", icon: SiMongoose, color: "#F03232" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: BsCloudFill, color: "#0089D6" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "DevKinsta", icon: BsBoxes, color: "#00B8D9" },
    ],
  },
  {
    title: "Data Science & Machine Learning",
    icon: BsGraphUpArrow,
    summary: "Analytical workflows, notebooks, and model-facing tooling.",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Seaborn", icon: BsGraphUpArrow, color: "#4C72B0" },
      { name: "Plotly Express", icon: BsFillDiagram3Fill, color: "#3F4F75" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Matplotlib", icon: BsGraphUpArrow, color: "#11557C" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
      { name: "OpenJDK", icon: SiOpenjdk, color: "#4371B4" },
    ],
  },
];

export const skillNavCategories = skillCategories.map(
  (category) => category.title,
);

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: "https://github.com/DiilaNa", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/dilan-liyanaarachchi-8a0a01244/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:liyanaarachchidilan@gmail.com",
    label: "Email",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/dilan_liyanaarachchi",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/17YDSNkJHu/",
    label: "Facebook",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/94713804825",
    label: "Whatsapp",
  },
];
