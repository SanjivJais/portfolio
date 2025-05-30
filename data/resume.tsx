import { Icons } from "@/components/icons";
import { HomeIcon, Code } from "lucide-react";

export const DATA = {
  name: "Sanjiv Jaiswal",
  initials: "SJ",
  url: "https://sanjivjaiswal.com.np",
  location: "Kathmandu, Nepal",
  locationLink: "#",
  description: (
    <p>
      An Entrepreneurial Web Developer, Building Real Products For the Real
      World.
    </p>
  ),
  summary: (
    <>
      <p>
        <span className="font-bold text-white">
          I build products with a sharp eye for real impact.
        </span>{" "}
        With a full-stack mindset and hands-on experience in React/Nextjs, .NET
        Core, and scalable databases, I craft modern, practical solutions. I
        enjoy making things AI-powered. Currently shipping my own projects while
        exploring meaningful roles in product and engineering.
      </p>
    </>
  ),
  avatarUrl: "/me-square.png",

  cvDownloadLink: "https://www.linkedin.com/in/sanjiv-jaiswal/",

  skills: [
    {
      title: "Web Development",
      description: (
        <p>
          I have been building tools and apps for{" "}
          <span className="bold-text">over 2 years.</span>
        </p>
      ),
      tags: [
        "Next.js",
        "Typescript",
        "Tanstack Query",
        "React",
        "JavaScript",
        "TailwindCSS",
        "ASP.NET Core Web API",
        "Appwrite",
        "Git/GitHub",
        "Figma (for UI/UX)",
      ],
    },
    {
      title: "Product Building",
      description: (
        <p>
          I love to build launchable products bringing value in the real world;
          have attempted startups in{" "}
          <span className="bold-text">
            Personal Finance, Esports, and Online Scrap Selling,
          </span>{" "}
          spaces.
        </p>
      ),
      tags: [
        "Critical Thinking",
        "MVP Development",
        "Problem Solving",
        "Entreprenerial Mindset",
      ],
    },
    {
      title: "Business and Marketing",
      description: (
        <p>
          Having spent over <span className="bold-text">3 years</span> in{" "}
          <span className="bold-text">SEO</span> and{" "}
          <span className="bold-text">Competition Analysis</span>, I’ve a strong
          command over organic marketing, business analysis, and market
          research.{" "}
        </p>
      ),
      tags: [
        "SEO (Search Engine Optimization)",
        "Market Research",
        "Digital Marketing",
      ],
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: Code, label: "Projects" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "connect@sanjivjaiswal.com.np",
    tel: "+9779862495033",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sanjiv-jaiswal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sanjivkjais",
        icon: Icons.x,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SanjivJais",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:connect@sanjivjaiswal.com.np",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  experience: [
    {
      company: "Moneybinds",
      href: "https://moneybinds.com",
      badges: [],
      location: "",
      title: "Founder",
      logoUrl: "/company-logos/moneybinds.svg",
      start: "Dec 2022",
      end: "Present",
      description: (
        <p>
          Started as a finance and crypto blog, Moneybinds has transformed into
          a useful money management app with the ultimate objective to remove
          complexity and provide simple yet accurate money tracking.{" "}
        </p>
      ),
    },
    {
      company: "",
      badges: [],
      href: null,
      location: "",
      title: "SEO, Blogging, Market Research",
      logoUrl: "/company-logos/SEO.svg",
      start: "Sept 2019",
      end: "Oct 2023",
      description: (
        <p>
          Built multiple WordPress websites, gained excellent SEO, organic
          reach, and market research skills. Hit significant milestone of over
          50k monthly visitors on a highly competitive niche Finance website.{" "}
        </p>
      ),
    },
    {
      company: "Sportskeeda",
      href: "https://sportskeeda.com/",
      badges: [],
      location: "Remote",
      title: "Content Analyst",
      logoUrl: "/company-logos/sportskeeda.png",
      start: "Mar 2022",
      end: "Nov 2022",
      description: (
        <p>
          At Sportskeeda, I worked as a freelance esports content analyst. I was
          able to accumulate massive traffic through my SEO friendly and
          engaging content, hitting one million reads with just a couple of
          hundreds of articles published.
        </p>
      ),
    },
  ],

  education: [
    {
      title:
        "Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)",
      school:
        "Tribhuvan University / Asian School of Management and Technology",
      location: "Gongabu, Kathmandu, Nepal",
      start: "2022",
      end: "2026",
    },
    {
      title: "Higher Secondary School (Science)",
      school: "Kathmandu Model College",
      location: "Bagbazaar, Kathmandu, Nepal",
      start: "2019",
      end: "2021",
    },
    {
      title: "Secondary School",
      school: "Geetanjali English Secondary School",
      location: "Nayabazaar, Kathmandu, Nepal",
      start: "2017",
      end: "2019",
    },
    {
      title: "Primary School",
      school: "Rajiv Gandhi Hindi High School",
      location: "Vasai West, Maharastra, India",
      start: "2014",
      end: "2017",
    },
  ],

  technologies: [
    {
      id: "react",
      name: "React JS",
      image: "/tech-icons/react.svg",
      description: "A JavaScript library for building user interfaces",
    },
    {
      id: "javascript",
      name: "JavaScript",
      image: "/tech-icons/javascript.svg",
      description: null,
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      image: "/tech-icons/tailwind.svg",
      description: "A utility-first CSS framework",
    },
    {
      id: "appwrite",
      name: "Appwrite",
      image: "/tech-icons/appwrite.svg",
      description: "An open source backend as a service",
    },
    {
      id: "apexcharts",
      name: "ApexCharts",
      image: "/tech-icons/apexcharts.png",
      description: "A powerful charting library for React",
    },
    {
      id: "nextjs",
      name: "Next JS",
      image: "/tech-icons/nextjs.svg",
      description: "The React framework for production",
    },
    {
      id: "typescript",
      name: "TypeScript",
      image: "/tech-icons/typescript.svg",
      description:
        "A strongly typed programming language that builds on JavaScript",
    },
    {
      id: "html",
      name: "HTML",
      image: "/tech-icons/html.svg",
      description: null,
    },
    {
      id: "css",
      name: "CSS",
      image: "/tech-icons/css.svg",
      description: null,
    },
    {
      id: "git",
      name: "Git",
      image: "/tech-icons/git.svg",
      description: null,
    },
    {
      id: "github",
      name: "GitHub",
      image: "/tech-icons/github.svg",
      description: null,
    },
    {
      id: "wordpress",
      name: "WordPress",
      image: "/tech-icons/wordpress.svg",
      description: null,
    },
    {
      id: "figma",
      name: "Figma",
      image: "/tech-icons/figma.svg",
      description: "A popular UI/UX tool for prototyping and design",
    },
    {
      id: "shadcnui",
      name: "Shadcn UI",
      image: "/tech-icons/shadcnui.svg",
      description: "A powerful UI library for React and Next.js",
    },
    {
      id: "framer-motion",
      name: "Framer Motion",
      image: "/tech-icons/framer-motion.svg",
      description: "A motion library for React and Next.js",
    },
    {
      id: "django",
      name: "Django",
      image: "",
      description: "A web framework for Python",
    },
    {
      id: "dotnet-core-webapi",
      name: ".NET Core Web API",
      image: "",
      description:
        "A cross-platform, high-performance framework for building modern APIs.",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      image: "",
      description:
        "A powerful, open source object-relational database management system.",
    },
    {
      id: "vercel",
      name: "Vercel",
      image: "",
      description:
        "A cloud platform for hosting static and dynamic web applications.",
    },
    {
      id: "tanstack-query",
      name: "Tanstack Query",
      image: "",
      description:
        "A library for managing server state in React applications, enabling efficient handling of asynchronous data like API requests.",
    },
    {
      id: "docker",
      name: "Docker",
      image: "",
      description:
        "A software platform that allows you to build, test, and deploy applications quickly.",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      image: "",
      description:
        "A document database that stores data in JSON-like documents.",
    },
  ],

  projects: [
    {
      title: "Scrapal - Online Scrap Selling Platform",
      description: (
        <p className="text-white-100 text-[15px]">
          A 3-person startup attempt to create a platform for selling scrap
          online, connecting buyers and sellers directly. We showcased the
          platform to a few stakeholders and received positive feedback.
        </p>
      ),
      link: "https://scrapal.com",
      active: true,
      technologies: [
        "nextjs",
        "tanstack-query",
        "typescript",
        "tailwindcss",
        "shadcnui",
        "framer-motion",
        "django",
        "postgresql",
        "vercel",
      ],
      image: "/project-thumbs/Project_thumb_scrapal.png",
      video: "#",
    },
    {
      title: "Sujhav - AI-powered Issues Crowdsourcing Platform",
      description: (
        <p className="text-white-100 text-[15px]">
          Sujhav is a prototype of an AI-powered issues and suggestions
          crowdsourcing platform which moderates content, uses semantic search
          to find similar posts, and makes clusters/topics keeping those posts
          together. Cluster's topic and summaries are automatically updated
          based on the overall content of the cluster.
        </p>
      ),
      link: "https://sujhav.vercel.app",
      active: true,
      technologies: [
        "nextjs",
        "tanstack-query",
        "typescript",
        "tailwindcss",
        "shadcnui",
        "dotnet-core-webapi",
        "mongodb",
        "vercel",
        "docker",
      ],
      image: "/project-thumbs/Project_thumb_Sujhav.png",
      video: "#",
    },
    {
      title: "Moneybinds Web App",
      description: (
        <p className="text-white-100 text-[15px]">
          A simple yet powerful personal money management app desgined to reduce
          complexity and make it easier to manage your money.
        </p>
      ),
      link: "https://moneybinds.com",
      active: true,
      technologies: [
        "react",
        "javascript",
        "tailwindcss",
        "appwrite",
        "apexcharts",
      ],
      image: "/project-thumbs/Project_thumb_Moneybinds1.png",
      video: "#",
    },
    {
      title: "EsportsGravity - An Esports Platform",
      description: (
        <p className="text-white-100 text-[15px]">
          A startup attempt to create a platform for Esports. This is a
          full-fledged esports platform where gamers can register for
          tournaments and compete to win exciting prizes.{" "}
        </p>
      ),
      link: "https://eg.sanjivjaiswal.com.np",
      active: true,
      technologies: ["react", "javascript", "tailwindcss", "appwrite"],
      image: "/project-thumbs/Esports_project_thumb.png",
      video: "#",
    },

    {
      title: "My Portfolio Website",
      description: (
        <p className="text-white-100 text-[15px]">
          I built a completely thought-out portfolio website to showcase my
          personality, work, and skills. My objective was to keep it simple and
          easy to navigate.
        </p>
      ),
      link: "https://sanjivjaiswal.com.np",
      active: true,
      technologies: [
        "nextjs",
        "typescript",
        "tailwindcss",
        "framer-motion",
        "shadcnui",
      ],
      image: "/project-thumbs/Portfolio_thumb.png",
      video: "#",
    },
    {
      title: "Pixel Circle Generator for Minecraft Players",
      description: (
        <p className="text-white-100 text-[15px]">
          MCCircleGenerator.com is a web tool that generates pixel art circles
          for Minecraft players. It has some unique and highly useful features
          that competitors don't have.{" "}
        </p>
      ),
      link: "https://mccirclegenerator.com",
      active: true,
      technologies: ["html", "css", "javascript"],
      image: "/project-thumbs/Project_thumb_MCCG.png",
      video: "#",
    },
  ],
} as const;
